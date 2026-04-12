import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardCheck,
  Factory,
  FileText,
  GitBranch,
  Languages,
  LayoutDashboard,
  LoaderCircle,
  Mail,
  MessageSquareMore,
  Search,
  Send,
  User,
  Wrench,
  X,
} from "lucide-react";

function ZonoMark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 18H43C47 18 50 19 52 21C54 23 54 26 51 28L29 42C25 45 24 48 26 50C28 52 31 53 36 53H53"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 53H18C14 53 11 52 9 50C7 48 7 45 10 43L32 29C36 26 37 23 35 21C33 19 30 18 25 18H11"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

function ModalShell({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-black/40">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [selectedService, setSelectedService] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
    company: "",
    subject: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState({ type: "", message: "" });

  const maxMessageLength = 1000;

  const content = useMemo(
    () => ({
      en: {
        nav: {
          services: "Services",
          process: "Process",
          about: "About",
          contact: "Contact",
        },
        badge: "Internal apps • Workflow improvement • Manufacturing support experience",
        heroTitle:
          "Practical internal business applications for small and mid-sized businesses",
        heroBody:
          "Zono Systems helps businesses improve workflow, visibility, and daily operations through practical internal tools. Instead of forcing your process into a generic package, the focus is on building a right-fit solution around the way your team actually works.",
        heroPrimary: "Start a Conversation",
        heroSecondary: "View Services",
        previewLabel: "What this site is for",
        previewTitle: "A simple, credible first impression",
        previewBody:
          "This first version is designed as a clean portfolio-style landing page that explains who you help, what you build, and how people can reach you.",
        highlights: [
          "Bilingual support in English and Japanese",
          "Built around actual workflows, not forced into a generic package",
          "Focused on small and mid-sized businesses",
          "Designed to be simple, reliable, and practical",
        ],
        servicesLabel: "Services",
        servicesTitle: "What Zono Systems focuses on",
        servicesBody:
          "The goal is not to sell oversized software. The goal is to solve operational problems with tools that fit the business.",
        services: [
          {
            key: "workflow",
            title: "Workflow Improvement Systems",
            description:
              "Practical internal tools that reduce manual work and make day-to-day operations easier to manage.",
            tag: "Internal Tools",
            icon: GitBranch,
            detailsTitle: "Workflow Improvement Systems",
            detailsIntro:
              "These systems are designed to centralize everyday operations that are often still managed in Excel sheets, email chains, or paper-based forms.",
            bullets: [
              "Attendance management, expense requests, and paid leave requests",
              "Parts ordering, receiving management, and internal request handling",
              "Project management and operational progress tracking",
              "Labor cost, project spending, and cost visibility features",
              "A single system for processes that are currently spread across spreadsheets or paper",
            ],
          },
          {
            key: "approval",
            title: "Approval & Reporting Tools",
            description:
              "Simple systems for approvals, daily reports, dashboards, and operational visibility.",
            tag: "Visibility",
            icon: ClipboardCheck,
            detailsTitle: "Approval & Reporting Tools",
            detailsIntro:
              "These tools support structured approvals and reporting flows so that requests, updates, and status checks are easier to manage and track.",
            bullets: [
              "Automatic email notifications to supervisors when an application is submitted",
              "Visibility into where approvals are currently stopped",
              "Structured approval routing instead of relying on direct verbal reporting",
              "Automatic PDF generation for reports and fixed-format documents",
              "Automatic attachment of generated report files to outgoing emails",
            ],
          },
          {
            key: "manufacturing",
            title: "Manufacturing Support Applications",
            description:
              "PC-based support tools with experience in manufacturing-related workflows, reporting, and shop-floor support.",
            tag: "Shop Floor Support",
            icon: Factory,
            detailsTitle: "Manufacturing Support Applications",
            detailsIntro:
              "These applications are focused on practical manufacturing operations, shop-floor visibility, and support tools that connect digital workflows to real equipment and processes.",
            bullets: [
              "Traceability systems and Andon systems",
              "Poka-yoke support tools and ECU writing systems",
              "RFID writing systems and tablet-based paperless inspection systems",
              "Support applications tied to reporting, process checks, and operational visibility",
              "Integration with inventory control and ordering features for broader DX improvement",
            ],
          },
        ],
        detailsButton: "View Details",
        modalFeatures: "Example capabilities",
        close: "Close",
        processLabel: "Process",
        processTitle: "How the work gets done",
        process: [
          {
            step: "Step 1",
            title: "Understand the workflow",
            description:
              "Start with the real process, the bottlenecks, and the pain points your team deals with every day.",
            icon: Search,
          },
          {
            step: "Step 2",
            title: "Design the right-fit solution",
            description:
              "Create a lightweight internal tool or workflow system based on what your business actually needs.",
            icon: Wrench,
          },
          {
            step: "Step 3",
            title: "Build and improve",
            description:
              "Deliver a practical system, then refine it based on real usage and feedback.",
            icon: ArrowRight,
          },
        ],
        aboutLabel: "About",
        aboutTitle: "Built around practical business improvement",
        aboutBody1:
          "The focus is on internal business systems that improve workflow, visibility, and execution. This includes approval flows, reporting tools, dashboards, and other operational applications that make day-to-day work more efficient.",
        aboutBody2:
          "There is also hands-on experience with manufacturing-related PC systems, including support tools, reporting, and workflow-oriented applications connected to real operations.",
        fitLabel: "Good fit for:",
        fitItems: [
          "Small and mid-sized businesses with manual internal processes",
          "Teams using spreadsheets, email, and disconnected workflows",
          "Companies that need a right-fit internal tool instead of a heavy platform",
          "Organizations that value English/Japanese bilingual communication",
        ],
        contactLabel: "Contact",
        contactTitle: "Let’s talk about your workflow",
        contactBody:
          "If you are exploring a practical internal tool, workflow improvement system, or manufacturing support application, this site can serve as the first point of contact.",
        contactCta: "Contact",
        linkedin: "LinkedIn",
        languageToggle: "日本語",
        formTitle: "Start a conversation",
        formBody:
          "Share a little about your workflow or system needs. This version is connected to a backend endpoint so the form can send email notifications once Resend is configured.",
        formEmail: "Email Address",
        formName: "Name",
        formCompany: "Company",
        formSubject: "Subject",
        formMessage: "Message",
        formEmailPlaceholder: "you@example.com",
        formNamePlaceholder: "Your name",
        formCompanyPlaceholder: "Company name",
        formSubjectPlaceholder: "How can Zono Systems help?",
        formMessagePlaceholder:
          "Tell us what kind of workflow, internal system, or manufacturing support application you are exploring.",
        formRequired: "Required",
        formOptional: "Optional",
        formCharacterCount: "characters",
        formSubmit: "Send",
        sending: "Sending...",
        formSuccess: "Your message has been sent successfully.",
        formError:
          "Something went wrong while sending your message. Please try again in a moment.",
      },
      ja: {
        nav: {
          services: "サービス",
          process: "進め方",
          about: "概要",
          contact: "お問い合わせ",
        },
        badge: "業務改善アプリ • ワークフロー改善 • 製造業向けPCアプリ経験あり",
        heroTitle:
          "中小企業向けの、実務に合った業務改善アプリと社内システム",
        heroBody:
          "Zono Systems は、業務フロー・見える化・日々の運用改善に役立つ実践的な社内ツールを提供します。既製パッケージに業務を無理に合わせるのではなく、実際の運用に合ったちょうどよい仕組みを形にすることを重視しています。",
        heroPrimary: "相談してみる",
        heroSecondary: "サービスを見る",
        previewLabel: "このサイトについて",
        previewTitle: "信頼感のあるシンプルな入口",
        previewBody:
          "この初期版サイトは、誰を支援できるのか、何を作るのか、どう連絡できるのかを分かりやすく伝えるためのポートフォリオ型ランディングページです。",
        highlights: [
          "英語・日本語のバイリンガル対応",
          "既製パッケージ前提ではなく、実際の業務フローに合わせて設計",
          "中小企業・小規模チーム向け",
          "シンプルで実用的、現場で使いやすい設計",
        ],
        servicesLabel: "サービス",
        servicesTitle: "Zono Systems が重視していること",
        servicesBody:
          "大きすぎるソフトを売ることが目的ではありません。実際の業務課題を、業務に合ったツールで解決することを目指しています。",
        services: [
          {
            key: "workflow",
            title: "ワークフロー改善システム",
            description:
              "手作業を減らし、日々の運用を楽にするための実用的な社内ツールを構築します。",
            tag: "社内ツール",
            icon: GitBranch,
            detailsTitle: "ワークフロー改善システム",
            detailsIntro:
              "Excel や紙、メールベースで分散している業務を一元管理しやすくするためのシステムです。",
            bullets: [
              "勤怠管理、経費申請、休日申請などの基本機能",
              "部品の発注管理、受入管理、各種社内申請",
              "プロジェクト管理や進捗管理",
              "人件費やプロジェクト支出などのコスト管理",
              "これまで Excel や紙で管理していた業務の一元管理",
            ],
          },
          {
            key: "approval",
            title: "承認・報告ツール",
            description:
              "承認フロー、日報、ダッシュボード、見える化などをシンプルな仕組みで支援します。",
            tag: "見える化",
            icon: ClipboardCheck,
            detailsTitle: "承認・報告ツール",
            detailsIntro:
              "申請や報告の流れを整理し、承認待ちや報告漏れが起きにくい仕組みを実現します。",
            bullets: [
              "申請ボタンを押すと上長へ自動通知する仕組み",
              "どの承認段階で止まっているかの可視化",
              "口頭や直接報告に頼らない承認フローの構築",
              "レポートや帳票を PDF などの書式へ自動変換",
              "作成した帳票を報告メールへ自動添付する仕組み",
            ],
          },
          {
            key: "manufacturing",
            title: "製造業向けサポートアプリ",
            description:
              "製造現場に関わる業務フロー、帳票、PCベースの補助ツールに関する経験も活かせます。",
            tag: "現場支援",
            icon: Factory,
            detailsTitle: "製造業向けサポートアプリ",
            detailsIntro:
              "製造現場の実務に即したサポートアプリや可視化ツールを幅広く提供できます。",
            bullets: [
              "トレーサビリティシステム、アンドンシステム",
              "ポカヨケシステム、ECU 書き込み装置システム",
              "RFID 書き込みシステム、タブレット点検システム",
              "帳票、報告、現場可視化に関する支援アプリ",
              "在庫管理や発注機能との組み合わせによる DX 改善",
            ],
          },
        ],
        detailsButton: "詳細を見る",
        modalFeatures: "具体的なサービス例",
        close: "閉じる",
        processLabel: "進め方",
        processTitle: "仕事の進め方",
        process: [
          {
            step: "Step 1",
            title: "業務フローを理解する",
            description:
              "現場で実際に起きている流れ、ボトルネック、困りごとを丁寧に把握します。",
            icon: Search,
          },
          {
            step: "Step 2",
            title: "ちょうどよい仕組みを設計する",
            description:
              "業務に本当に必要な範囲を見極め、軽くて使いやすい仕組みを設計します。",
            icon: Wrench,
          },
          {
            step: "Step 3",
            title: "作って改善する",
            description:
              "実用的なシステムを作り、実運用のフィードバックをもとに改善していきます。",
            icon: ArrowRight,
          },
        ],
        aboutLabel: "概要",
        aboutTitle: "実務改善を重視したシステムづくり",
        aboutBody1:
          "主軸は、ワークフロー・見える化・日常業務の効率化につながる社内システムです。承認フロー、帳票、ダッシュボード、業務支援ツールなど、実際の運用に役立つ仕組みを対象としています。",
        aboutBody2:
          "加えて、製造業向けのPCシステム、帳票、現場支援アプリに関する実務経験もあり、必要に応じてその知見も活かせます。",
        fitLabel: "こんな会社に向いています",
        fitItems: [
          "社内業務が手作業中心になっている中小企業",
          "Excel、メール、口頭連携で回っている業務が多いチーム",
          "重いパッケージではなく、自社に合った仕組みを必要としている会社",
          "英語・日本語の両方でやり取りできる相手を求めている組織",
        ],
        contactLabel: "お問い合わせ",
        contactTitle: "業務フローの相談から始めましょう",
        contactBody:
          "業務改善ツール、社内システム、製造業向けPCアプリなどをご検討中でしたら、まずは気軽にご相談ください。",
        contactCta: "Contact",
        linkedin: "LinkedIn",
        languageToggle: "English",
        formTitle: "お問い合わせ",
        formBody:
          "業務改善やシステム化の相談内容を簡単に入力してください。Resend と Vercel Function の設定が完了すれば、そのままメール送信できる構成です。",
        formEmail: "メールアドレス",
        formName: "お名前",
        formCompany: "会社名",
        formSubject: "件名",
        formMessage: "メッセージ",
        formEmailPlaceholder: "you@example.com",
        formNamePlaceholder: "お名前",
        formCompanyPlaceholder: "会社名",
        formSubjectPlaceholder: "ご相談内容の概要",
        formMessagePlaceholder:
          "どのような業務改善、社内システム、製造業向けアプリをご検討中かご記入ください。",
        formRequired: "必須",
        formOptional: "任意",
        formCharacterCount: "文字",
        formSubmit: "送信",
        sending: "送信中...",
        formSuccess: "メッセージを送信しました。",
        formError: "送信中にエラーが発生しました。時間をおいて再度お試しください。",
      },
    }),
    []
  );

  const t = content[lang];
  const isAnyModalOpen = Boolean(selectedService) || isContactOpen;

  useEffect(() => {
    document.body.style.overflow = isAnyModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAnyModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
        setIsContactOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: name === "message" ? value.slice(0, maxMessageLength) : value,
    }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setContactStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || t.formError);
      }

      setContactStatus({ type: "success", message: t.formSuccess });
      setContactForm({
        email: "",
        name: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setContactStatus({
        type: "error",
        message: error.message || t.formError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openContactModal = () => {
    setContactStatus({ type: "", message: "" });
    setIsContactOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <section className="border-b border-slate-800">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/5">
                <ZonoMark className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-semibold tracking-wide">Zono Systems</div>
                <div className="text-sm text-slate-400">
                  Practical business systems for real operations
                </div>
              </div>
            </div>

            <div className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#services" className="hover:text-white">
                {t.nav.services}
              </a>
              <a href="#process" className="hover:text-white">
                {t.nav.process}
              </a>
              <a href="#about" className="hover:text-white">
                {t.nav.about}
              </a>
              <button type="button" onClick={openContactModal} className="hover:text-white">
                {t.nav.contact}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ja" : "en")}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500"
            >
              <Languages className="h-4 w-4 text-cyan-300" />
              {t.languageToggle}
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                {t.badge}
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {t.heroBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openContactModal}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
                >
                  {t.heroPrimary}
                </button>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500"
                >
                  {t.heroSecondary}
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                    <LayoutDashboard className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-medium text-slate-400">{t.previewLabel}</div>
                </div>
                <div className="mt-4 text-2xl font-semibold">{t.previewTitle}</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{t.previewBody}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {t.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                  >
                    <div className="text-sm leading-7 text-slate-200">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-slate-800 bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
                {t.servicesLabel}
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{t.servicesTitle}</h2>
              <p className="mt-4 leading-8 text-slate-300">{t.servicesBody}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.key}
                    className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
                    >
                      {t.detailsButton}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
              {t.processLabel}
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{t.processTitle}</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-semibold text-cyan-300">{item.step}</div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                  {index < t.process.length - 1 && (
                    <div className="pointer-events-none absolute -right-3 top-12 hidden h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-400 md:flex">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section id="about" className="border-t border-slate-800 bg-slate-900/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
                {t.aboutLabel}
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{t.aboutTitle}</h2>
              <p className="mt-6 leading-8 text-slate-300">{t.aboutBody1}</p>
              <p className="mt-4 leading-8 text-slate-300">{t.aboutBody2}</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-slate-400">{t.fitLabel}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                {t.fitItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-black/20 md:p-10">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
              {t.contactLabel}
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{t.contactTitle}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">{t.contactBody}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openContactModal}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
              >
                <MessageSquareMore className="h-4 w-4" />
                {t.contactCta}
              </button>
              <a
                href="https://www.linkedin.com/"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500"
              >
                <MessageSquareMore className="h-4 w-4" />
                {t.linkedin}
              </a>
            </div>
          </div>
        </section>
      </div>

      <ModalShell isOpen={Boolean(selectedService)} onClose={() => setSelectedService(null)}>
        {selectedService && (
          <div className="flex max-h-[90vh] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-6 py-5 md:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <selectedService.icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                    {t.servicesLabel}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {selectedService.detailsTitle}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-2xl border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
              <p className="max-w-2xl leading-8 text-slate-300">{selectedService.detailsIntro}</p>

              <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-medium text-slate-400">{t.modalFeatures}</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                  {selectedService.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-end border-t border-slate-800 px-6 py-4 md:px-8">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500"
              >
                {t.close}
              </button>
            </div>
          </div>
        )}
      </ModalShell>

      <ModalShell isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
        <div className="flex max-h-[90vh] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-6 py-5 md:px-8">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                {t.contactLabel}
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{t.formTitle}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{t.formBody}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              className="rounded-2xl border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    {t.formEmail} <span className="text-cyan-300">({t.formRequired})</span>
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={handleFormChange}
                      placeholder={t.formEmailPlaceholder}
                      className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-11 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    {t.formName} <span className="text-slate-500">({t.formOptional})</span>
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      placeholder={t.formNamePlaceholder}
                      className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-11 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    {t.formCompany} <span className="text-slate-500">({t.formOptional})</span>
                  </label>
                  <div className="relative">
                    <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={handleFormChange}
                      placeholder={t.formCompanyPlaceholder}
                      className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-11 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    {t.formSubject} <span className="text-cyan-300">({t.formRequired})</span>
                  </label>
                  <div className="relative">
                    <FileText className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="subject"
                      required
                      value={contactForm.subject}
                      onChange={handleFormChange}
                      placeholder={t.formSubjectPlaceholder}
                      className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-11 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label className="block text-sm font-medium text-slate-200">
                      {t.formMessage} <span className="text-cyan-300">({t.formRequired})</span>
                    </label>
                    <div className="text-xs text-slate-500">
                      {contactForm.message.length}/{maxMessageLength} {t.formCharacterCount}
                    </div>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    maxLength={maxMessageLength}
                    value={contactForm.message}
                    onChange={handleFormChange}
                    placeholder={t.formMessagePlaceholder}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                  />
                </div>
              </div>

              {contactStatus.message && (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-7 ${
                    contactStatus.type === "success"
                      ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                      : "border border-rose-400/20 bg-rose-400/10 text-rose-100"
                  }`}
                >
                  {contactStatus.message}
                </div>
              )}

              <div className="flex items-center justify-between gap-4 border-t border-slate-800 pt-5">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500"
                >
                  {t.close}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isSubmitting ? t.sending : t.formSubmit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalShell>
    </>
  );
}
