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
    const body = req.body ?? {};
    const email = String(body.email ?? "").trim();
    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    const fromEmail = String(process.env.CONTACT_FROM_EMAIL ?? "").trim();
    const toEmail = String(process.env.CONTACT_TO_EMAIL ?? "").trim();

    if (!email || !subject || !message) {
      return res.status(400).json({
        error: "Email, subject, and message are required.",
      });
    }

    if (!fromEmail || !toEmail || !process.env.RESEND_API_KEY) {
      return res.status(500).json({
        error: "Missing environment variables.",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        error: "Message must be 1000 characters or less.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: `Zono Systems <${fromEmail}>`,
      to: [toEmail],
      subject: `[Zono Systems] ${subject}`,
      // まずは切り分けのため reply-to を外す
      text: `
Email: ${email}
Name: ${name}
Company: ${company}
Subject: ${subject}

Message:
${message}
      `.trim(),
      html: buildHtml({ email, name, company, subject, message }),
    });

    if (error) {
      console.error("Resend error details:", error);
      return res.status(500).json({
        error: error.message || JSON.stringify(error),
      });
    }

    console.log("Resend success:", data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return res.status(500).json({
      error: err?.message || "Internal server error.",
    });
  }
}