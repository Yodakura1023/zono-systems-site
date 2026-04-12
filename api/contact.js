import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildHtml({ email, name, company, subject, message }) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827;">
      <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 140px;">Email</td>
          <td style="padding: 8px 0;">${email || ""}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Name</td>
          <td style="padding: 8px 0;">${name || ""}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Company</td>
          <td style="padding: 8px 0;">${company || ""}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Subject</td>
          <td style="padding: 8px 0;">${subject || ""}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 8px 0; white-space: pre-wrap;">${message || ""}</td>
        </tr>
      </table>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name, company, subject, message } = req.body ?? {};

    if (!email || !subject || !message) {
      return res.status(400).json({
        error: "Email, subject, and message are required.",
      });
    }

    if (String(message).length > 1000) {
      return res.status(400).json({
        error: "Message must be 1000 characters or less.",
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `[Zono Systems] ${subject}`,
      text: `
Email: ${email}
Name: ${name || ""}
Company: ${company || ""}
Subject: ${subject}

Message:
${message}
      `.trim(),
      html: buildHtml({ email, name, company, subject, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}