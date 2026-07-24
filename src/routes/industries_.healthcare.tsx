import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Stethoscope,
  HeartPulse,
  Hospital,
  Activity,
  Microscope,
  Baby,
  Smile,
  Syringe,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Workflow,
  CheckCircle2,
  Cpu,
  Target,
  Plus,
  Minus,
  Users,
  CalendarCheck,
  MessagesSquare,
  Search,
  Star,
  Smartphone,
  FileText,
  BookOpen,
  Sparkles,
  LineChart,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroImg from "@/assets/industry-healthcare311.jpg";
import caseHealthus from "@/assets/case-healthus.123.jpg";
import caseOpus from "@/assets/case-opus-dental.123.jpg";
import caseDoctor from "@/assets/case-doctor-branding.jpg";

export const Route = createFileRoute("/industries_/healthcare")({
  component: HealthcarePage,
  head: () => ({
    meta: [
      {
        title:
          "Digital Growth, Marketing & AI Solutions for Healthcare Organizations | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps hospitals, clinics, healthcare startups and specialist doctors build trust, attract more patients and deliver better digital experiences through marketing, technology and AI.",
      },
      {
        property: "og:title",
        content:
          "Healthcare Marketing, Technology & AI Solutions — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Strategic growth partner for hospitals, clinics, IVF centres, diagnostic chains, HealthTech startups and specialist doctors.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-[900ms] ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground/10 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <span className="text-base font-medium text-foreground sm:text-lg">
          {q}
        </span>
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      {open && (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/70 sm:text-base">
          {a}
        </p>
      )}
    </div>
  );
}

function HealthcarePage() {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Low Patient Enquiries",
      body: "Generate consistent patient acquisition through SEO, GEO, paid media and local search optimization.",
    },
    {
      icon: Search,
      title: "Weak Google Visibility",
      body: "Help hospitals and clinics appear when patients search for treatments, specialists and healthcare services.",
    },
    {
      icon: Users,
      title: "Poor Doctor Branding",
      body: "Build trust through thought leadership, educational content and professional personal branding.",
    },
    {
      icon: CalendarCheck,
      title: "Low Appointment Conversions",
      body: "Optimize websites and booking journeys to increase consultation requests.",
    },
    {
      icon: Star,
      title: "Reputation Management",
      body: "Strengthen online credibility with review strategies and patient communication.",
    },
    {
      icon: MessagesSquare,
      title: "Manual Patient Communication",
      body: "Automate appointment reminders, FAQs and follow-ups using CRM and AI.",
    },
  ];

  const segments = [
    {
      icon: Hospital,
      title: "Multispeciality Hospitals",
      body: "Increase patient acquisition while improving digital communication.",
    },
    {
      icon: Smile,
      title: "Dental Clinics",
      body: "Local SEO, reputation management and treatment marketing.",
    },
    {
      icon: Baby,
      title: "IVF & Fertility Centres",
      body: "Patient education, lead nurturing and trust-building campaigns.",
    },
    {
      icon: Microscope,
      title: "Diagnostic Centres",
      body: "Location-based SEO and appointment generation.",
    },
    {
      icon: Activity,
      title: "Physiotherapy & Rehabilitation",
      body: "Increase local visibility and treatment awareness.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic & Aesthetic Clinics",
      body: "Premium branding, social media and lead generation.",
    },
    {
      icon: Stethoscope,
      title: "Specialist Doctors",
      body: "Personal branding, educational content and appointment marketing.",
    },
    {
      icon: BrainCircuit,
      title: "HealthTech Companies",
      body: "Growth marketing, product positioning and technology consulting.",
    },
  ];

  const journey = [
    "Patient Searches",
    "Google Visibility",
    "Website Experience",
    "Trust & Reviews",
    "Appointment Booking",
    "Patient Care",
    "Retention & Referrals",
  ];

  const pillars = [
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      items: [
        "Healthcare SEO",
        "Local SEO",
        "GEO",
        "AEO",
        "Google Ads",
        "Social Media",
        "Content Marketing",
      ],
    },
    {
      icon: Sparkles,
      title: "Branding & Creative",
      items: [
        "Hospital Branding",
        "Doctor Branding",
        "Healthcare Campaigns",
        "Medical Content",
        "Patient Education",
        "Corporate Communication",
      ],
    },
    {
      icon: Cpu,
      title: "Technology & Digital Platforms",
      items: [
        "Hospital Websites",
        "Appointment Booking Systems",
        "Patient Portals",
        "CRM",
        "Mobile Apps",
        "Healthcare Dashboards",
      ],
    },
    {
      icon: BrainCircuit,
      title: "AI & Business Transformation",
      items: [
        "AI Patient Assistants",
        "AI Chatbots",
        "Appointment Automation",
        "AI Knowledge Systems",
        "AI Content Assistance",
        "Healthcare Analytics",
      ],
    },
  ];

  const aiBenefits = [
    "Reduce administrative workload",
    "Improve patient communication",
    "Automate appointment scheduling",
    "Provide instant answers to common questions",
    "Improve operational efficiency",
    "Support better decision-making",
  ];

  const whyUs = [
    "Healthcare marketing expertise",
    "Patient-first digital strategies",
    "SEO, GEO & AEO specialization",
    "Marketing + Technology + AI",
    "HIPAA/privacy-conscious digital practices (adapted to client needs)",
    "Long-term partnership approach",
  ];

  const futureTopics = [
    { icon: BrainCircuit, label: "AI Patient Assistants" },
    { icon: LineChart, label: "Predictive Healthcare" },
    { icon: Smartphone, label: "Telemedicine" },
    { icon: FileText, label: "Digital Health Records" },
    { icon: Search, label: "Voice Search" },
    { icon: BookOpen, label: "AI Medical Knowledge" },
    { icon: Star, label: "Online Reputation" },
    { icon: HeartPulse, label: "Personalized Patient Experiences" },
  ];

  const faqs = [
    {
      q: "How can hospitals generate more patient enquiries?",
      a: "By combining healthcare SEO, local search optimization, Google Ads, social media, doctor-led content and conversion-optimized websites — supported by review and reputation systems — hospitals can consistently grow patient enquiries from organic, paid and referral channels.",
    },
    {
      q: "What is Healthcare SEO?",
      a: "Healthcare SEO is the practice of optimizing hospital, clinic and doctor websites so they rank for treatment, specialist and location-based searches. It blends technical SEO, medically reviewed content, local SEO and trust signals (E-E-A-T) that search engines reward for healthcare topics.",
    },
    {
      q: "Why is doctor branding important?",
      a: "Patients trust doctors before they trust institutions. Personal branding through educational content, video, social media and PR helps doctors build authority, attract the right patients and become the preferred choice for second opinions and specialist consultations.",
    },
    {
      q: "How can AI improve patient engagement?",
      a: "AI assistants and chatbots answer common questions instantly, automate appointment reminders, qualify enquiries, support multilingual conversations and free up clinical staff — improving response times and the overall patient experience.",
    },
    {
      q: "What is GEO for healthcare organizations?",
      a: "GEO (Generative Engine Optimization) ensures your hospital, clinic or doctor profile is correctly cited by AI search experiences like ChatGPT, Google AI Overviews and Perplexity. It involves structured content, authoritative sourcing and entity-level optimization.",
    },
    {
      q: "How can clinics improve Google rankings?",
      a: "Clinics improve rankings through a strong Google Business Profile, location pages, structured medical content, patient reviews, local citations, fast websites and consistent NAP data — combined with treatment-specific landing pages and schema markup.",
    },
  ];

  const relatedServices = [
    { label: "SEO Services", to: "/search-visibility" },
    { label: "Social Media Marketing", to: "/social-media-marketing" },
    { label: "Performance Marketing", to: "/performance-marketing" },
    { label: "Website Development", to: "/website-design-development" },
    { label: "CRM Solutions", to: "/crm-erp-solutions" },
    { label: "AI Customer Experience", to: "/ai-customer-experience-solutions" },
    { label: "AI Workflow Automation", to: "/ai-workflow-automation" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-foreground/10 bg-[#FDFBF9]">
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0"
     style={{
      background: `
        linear-gradient(
          180deg,
          rgb(252, 252, 249) 0%,
          rgb(252, 252, 249) 48%,
          rgb(253, 247, 239) 52%,
          rgb(253, 243, 231) 56%,
          rgb(253, 238, 216) 61%,
          rgb(252, 233, 204) 66%,
          rgb(252, 230, 195) 72%,
          rgb(252, 229, 193) 77%,
          rgb(252, 229, 194) 81%,
          rgb(252, 232, 200) 86%,
          rgb(253, 236, 210) 91%,
          rgb(253, 241, 223) 96%,
          rgb(252, 247, 237) 100%
        )
      `,
    }}
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-[1]"
    style={{
      backgroundImage: `
        linear-gradient(
          to right,
          rgba(24, 24, 24, 0.04) 1px,
          transparent 1px
        ),
        linear-gradient(
          to bottom,
          rgba(24, 24, 24, 0.04) 1px,
          transparent 1px
        )
      `,
      backgroundSize: "64px 64px",
    }}
  />

  <div className="container relative z-10 mx-auto grid gap-12 px-4 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
    <div className="lg:col-span-7">
      <Reveal>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
          <HeartPulse className="h-3.5 w-3.5" />
          <span>Industry Solutions / Healthcare</span>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Helping Healthcare Organizations Build Trust,
          <span className="block italic text-foreground/80">
            Attract More Patients & Deliver Better Digital Experiences.
          </span>
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
          <p>
            Patients no longer choose healthcare providers based only on
            referrals.
          </p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-foreground/70 sm:text-base">
            <li>· They search online.</li>
            <li>· Compare doctors.</li>
            <li>· Read reviews.</li>
            <li>· Evaluate hospital websites.</li>
            <li>· Check treatment information.</li>
            <li>· Book appointments digitally.</li>
          </ul>

          <p>
            Whether you're a hospital, clinic, healthcare startup or specialist
            practice, your digital presence has become an extension of your
            patient experience.
          </p>

          <p>
            At Ace360degree, we help healthcare organizations strengthen
            patient acquisition, improve digital trust and implement technology
            and AI solutions that support long-term growth.
          </p>
        </div>
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
          >
            Request Healthcare Growth Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-foreground/5 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
          >
            Book Discovery Call
          </Link>
        </div>
      </Reveal>
    </div>

    <div className="lg:col-span-5">
      <Reveal delay={120}>
        <div className="relative overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl">
          <img
            src={heroImg}
            alt="Healthcare digital experience"
            className="aspect-[4/5] w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FDFBF9]/95 via-[#FDFBF9]/40 to-transparent p-6">
            <div className="flex items-center gap-3 text-foreground">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-medium">
                Patient-first. Privacy-aware. Built for trust.
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      {/* SECTION 2 — Healthcare Has Changed */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  02 — The Shift
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Healthcare Has Changed.
                  <span className="block italic text-foreground/70">
                    Has Your Patient Experience Kept Up?
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
                  Healthcare organizations that invest in digital experiences build
                  stronger patient relationships.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="mb-5 text-sm font-medium uppercase tracking-wider text-foreground/60">
                  Today's patients expect:
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: CalendarCheck, label: "Easy appointment booking" },
                    { icon: Stethoscope, label: "Fast access to doctors" },
                    { icon: Smartphone, label: "Mobile-friendly websites" },
                    { icon: ShieldCheck, label: "Verified information" },
                    { icon: Star, label: "Online reputation" },
                    { icon: BookOpen, label: "Educational healthcare content" },
                    { icon: MessagesSquare, label: "WhatsApp communication" },
                    { icon: Sparkles, label: "Digital convenience" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-background/60 px-4 py-3.5 transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02]"
                    >
                      <item.icon className="h-5 w-5 text-foreground/70" />
                      <span className="text-sm font-medium text-foreground/85 sm:text-base">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Challenges */}
      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              03 — Challenges We Solve
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Healthcare Challenges We Solve
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-foreground/10 bg-background p-7 transition-all hover:-translate-y-1 hover:border-foreground/25 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03] transition-colors group-hover:border-foreground/30">
                    <c.icon className="h-6 w-6 text-foreground/80" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Segments */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              04 — Segments We Serve
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Healthcare Segments We Support
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <div className="group h-full rounded-2xl border border-foreground/10 p-6 transition-all hover:border-foreground/30 hover:bg-foreground/[0.02]">
                  <s.icon className="h-7 w-7 text-foreground/80" />
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Patient Journey Framework */}
      <section
  className="relative overflow-hidden border-b border-foreground/10 py-20 sm:py-28"
  style={{
    backgroundImage: `
      linear-gradient(
        180deg,
        #FFF8EA 0%,
        #FFF0D2 8%,
        #FFE9BE 20%,
        #FFE7B8 30%,
        #FFEDCD 42%,
        #FFF5E5 52%,
        #FCFAF5 62%,
        #FCFCFA 72%,
        #FCFCFA 100%
      )
    `,
  }}
>
  <div className="container relative mx-auto px-4">
    <Reveal>
      <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
        05 — Framework
      </div>

      <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        Patient Journey Framework
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
        Every successful patient relationship moves through a predictable journey.
        We design marketing, technology and AI systems for each step.
      </p>
    </Reveal>

    <div className="mt-14 grid gap-3 lg:grid-cols-7">
      {journey.map((step, i) => (
        <Reveal key={step} delay={i * 80}>
          <div className="group relative h-full">
            <div className="flex min-h-[120px] h-full flex-col items-start justify-between rounded-2xl border border-[#181818]/10 bg-[#FCFCFA]/90 p-5 transition-all duration-300 hover:border-[#181818]/25 hover:bg-white hover:shadow-lg">
              <div className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                Step {String(i + 1).padStart(2, "0")}
              </div>

              <div className="mt-4 text-base font-semibold leading-snug text-foreground">
                {step}
              </div>
            </div>

            {i < journey.length - 1 && (
              <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-foreground/30 lg:block" />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      {/* SECTION 6 — How Ace360degree Helps */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              06 — Our Capabilities
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              How Ace360degree Helps Healthcare Organizations
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-foreground/10 bg-background p-8 transition-all hover:border-foreground/25 hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03]">
                      <p.icon className="h-6 w-6 text-foreground/80" />
                    </div>
                    <h3 className="font-serif text-2xl tracking-tight text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/75"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — AI for Healthcare */}
      <section className="border-b border-foreground/10 bg-foreground py-20 text-background sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-background/60">
                  07 — Intelligence
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  AI for Healthcare
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-background/75">
                  AI is helping healthcare organizations operate smarter, communicate
                  better and deliver more responsive patient experiences.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {aiBenefits.map((b, i) => (
                  <Reveal key={b} delay={i * 60}>
                    <div className="flex items-start gap-3 rounded-xl border border-background/15 bg-background/[0.04] p-4">
                      <Workflow className="mt-0.5 h-5 w-5 text-background/80" />
                      <span className="text-sm leading-relaxed text-background/90">
                        {b}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Success Stories */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
  <div className="container mx-auto px-4">
    <Reveal>
      <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
        08 — Healthcare Marketing Experience
      </div>

      <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        Success Stories
      </h2>
    </Reveal>

    <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-2">
      {[
        {
          img: caseHealthus,
          tag: "HealthTech",
          title: "Healthus.ai",
          body: "Integrated healthcare growth strategy focused on patient acquisition and digital marketing.",
        },
        {
          img: caseOpus,
          tag: "Dental",
          title: "OPUS Dental",
          body: "Digital branding and marketing initiatives supporting visibility and patient engagement.",
        },
      ].map((c, i) => (
        <Reveal key={c.title} delay={i * 80}>
          <article className="group h-full overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                {c.tag}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl tracking-tight text-foreground">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {c.body}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* SECTION 9 — Why Choose */}
      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  09 — Why Ace360degree
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Why Healthcare Organizations Choose Ace360degree
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((w, i) => (
                  <Reveal key={w} delay={i * 60}>
                    <div className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-background p-5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/70" />
                      <span className="text-sm font-medium text-foreground/85 sm:text-base">
                        {w}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — Future of Healthcare */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              10 — Outlook
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              The Future of Healthcare
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
              The next decade of healthcare will be defined by AI, voice, predictive
              intelligence and personalized patient experiences. We help you prepare today.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {futureTopics.map((t, i) => (
              <Reveal key={t.label} delay={i * 50}>
                <div className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-background p-5 transition-colors hover:border-foreground/30">
                  <t.icon className="h-5 w-5 text-foreground/75" />
                  <span className="text-sm font-medium text-foreground/85">
                    {t.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  11 — FAQ
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/70">
                  Common questions from hospital leaders, clinic owners and HealthTech
                  founders considering a strategic growth partner.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <div>
                  {faqs.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — Related Services */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              12 — Related Services
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Capabilities Powering Healthcare Growth
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s, i) => (
              <Reveal key={s.label} delay={i * 50}>
                <Link
                  to={s.to}
                  className="group flex items-center justify-between rounded-xl border border-foreground/10 bg-background px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md"
                >
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {s.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — Related Success Stories */}
      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              13 — Related Success Stories
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Proof in Practice
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                img: caseHealthus,
                title: "Healthus.ai",
                tag: "HealthTech Growth",
                href: "/case-healthus-ai",
              },
              {
                img: caseOpus,
                title: "OPUS Dental",
                tag: "Dental Marketing",
                href: "/case-opus-dental",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <Link
                  to={c.href}
                  className="group relative block overflow-hidden rounded-2xl border border-foreground/10 bg-background"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-foreground/55">
                        {c.tag}
                      </div>
                      <div className="mt-1 font-serif text-xl tracking-tight">
                        {c.title}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background sm:py-32">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal>
            <Target className="mx-auto h-10 w-10 text-background/80" />
            <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Build a Healthcare Brand
              <span className="block italic text-background/75">
                That Patients Trust.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              Whether you're a hospital, clinic, diagnostic centre or healthcare
              startup, Ace360degree helps you combine marketing, technology and AI to
              create better patient experiences and sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-background/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
              >
                Request Healthcare Growth Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-medium text-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-background/10 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
              >
                Book Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
