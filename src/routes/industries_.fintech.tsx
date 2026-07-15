import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Workflow,
  CheckCircle2,
  LineChart,
  Lightbulb,
  Cpu,
  Target,
  Plus,
  Minus,
  Landmark,
  CreditCard,
  PiggyBank,
  Wallet,
  Coins,
  Shield,
  Briefcase,
  Users,
  BarChart3,
  Lock,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroImg from "@/assets/industry-finance.444.jpg";
import caseMos from "@/assets/case-mos.3333.jpg";
import caseArcil from "@/assets/case-arcil.jpg";

export const Route = createFileRoute("/industries_/fintech")({
  component: FintechPage,
  head: () => ({
    meta: [
      {
        title:
          "Growth, Marketing, Technology & AI Solutions for Financial Services & Fintech Companies | Ace360degree",
      },
      {
        name: "description",
        content:
          "Strategic growth partner for banks, NBFCs, fintech startups, investment firms, stock brokers, wealth managers and insurers — financial services marketing, SEO, AI and digital transformation. Mumbai • UAE • UK • USA.",
      },
      {
        name: "keywords",
        content:
          "financial services marketing agency, fintech marketing agency, financial SEO company, NBFC digital marketing, investment marketing agency, stock broker marketing, wealth management marketing, AI for financial services, digital transformation for financial institutions, insurance marketing agency",
      },
      {
        property: "og:title",
        content: "Financial Services & Fintech Growth, Technology & AI Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Helping banks, NBFCs, fintechs, brokers, wealth managers and insurers build trust, scale acquisition and lead AI-led transformation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries/fintech" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/industries/fintech" }],
  }),
});

/* ---------- reveal ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- data ---------- */
const sectors = [
  { icon: Landmark, label: "Banks & Private Banking" },
  { icon: Building2, label: "NBFCs & Lending Companies" },
  { icon: Cpu, label: "Fintech & Digital Payments" },
  { icon: LineChart, label: "Stock Broking & Trading Platforms" },
  { icon: Briefcase, label: "Asset & Wealth Management" },
  { icon: PiggyBank, label: "Mutual Funds & AMCs" },
  { icon: Shield, label: "Insurance & Insurtech" },
  { icon: CreditCard, label: "Credit, Cards & BNPL" },
  { icon: Wallet, label: "Neobanks & Digital Wallets" },
  { icon: Coins, label: "WealthTech & Robo-Advisory" },
  { icon: Banknote, label: "Capital Markets & Investment Firms" },
  { icon: ShieldCheck, label: "ARCs & Financial Restructuring" },
];

const challenges = [
  {
    title: "Trust & Credibility Gap",
    body: "Financial buyers move on credibility. A weak brand, dated website or thin content makes acquisition expensive and conversion slow.",
    solution:
      "Premium brand systems, authority content, thought leadership and reputation programs that earn investor and customer trust.",
  },
  {
    title: "Rising Customer Acquisition Cost",
    body: "Paid CAC keeps climbing. Generic campaigns produce clicks but not qualified investors, borrowers or policyholders.",
    solution:
      "Intent-led performance, SEO, advisor enablement and lifecycle marketing focused on lifetime value, not just leads.",
  },
  {
    title: "Compliance-Bound Marketing",
    body: "SEBI, RBI, IRDAI and global regulators constrain messaging. Most agencies don't understand the guardrails.",
    solution:
      "Compliance-aware creative, disclosure-led storytelling and regulator-friendly content workflows.",
  },
  {
    title: "Legacy Digital Infrastructure",
    body: "Onboarding journeys, customer portals and websites built years ago can't compete with new-age fintech experiences.",
    solution:
      "Modern web platforms, customer portals, partner & advisor consoles integrated with core systems and CRMs.",
  },
  {
    title: "Fragmented Data & CX",
    body: "Customer data sits in silos across CRM, core banking, broking platforms and policy systems. CX suffers.",
    solution:
      "Unified marketing, CRM and data layers — with AI-driven personalization across acquisition, onboarding and service.",
  },
  {
    title: "AI Readiness & Transformation",
    body: "Boards expect an AI agenda. Most teams don't know where AI pays back without compliance or reputation risk.",
    solution:
      "AI readiness assessment, governed use-case roadmap and pragmatic AI deployment in sales, ops, CX and risk.",
  },
];

const framework = [
  {
    step: "01",
    title: "Diagnose",
    body: "Audit brand, funnel, tech stack, compliance posture and growth gaps.",
  },
  {
    step: "02",
    title: "Position",
    body: "Sharpen category positioning, trust signals and customer narrative.",
  },
  {
    step: "03",
    title: "Build",
    body: "Modernize digital platforms, content engines and AI-ready data layer.",
  },
  {
    step: "04",
    title: "Acquire",
    body: "Run intent SEO, performance, advisor enablement and lifecycle programs.",
  },
  {
    step: "05",
    title: "Scale",
    body: "Layer AI, automation and analytics for compounding LTV growth.",
  },
];

const capabilities = [
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    desc: "Financial SEO, performance, ABM, advisor & partner enablement, investor acquisition and lifecycle programs designed for regulated industries.",
    points: [
      "Financial & Fintech SEO",
      "Performance Marketing for BFSI",
      "Investor & HNI Acquisition",
      "Advisor, Partner & Channel Enablement",
    ],
  },
  {
    icon: Lightbulb,
    title: "Branding & Creative",
    desc: "Premium brand systems, thought-leadership content, investor communications, explainer films and trust-driven creative for financial audiences.",
    points: [
      "BFSI Brand Identity & Architecture",
      "Investor & Corporate Communications",
      "Explainer & Thought Leadership Films",
      "Annual Reports & Disclosure Design",
    ],
  },
  {
    icon: Cpu,
    title: "Technology & Digital Platforms",
    desc: "Websites, customer & advisor portals, onboarding journeys, CRM, marketing automation and platforms integrated with core banking, broking and policy systems.",
    points: [
      "Financial Websites & Microsites",
      "Customer, Advisor & Partner Portals",
      "Digital Onboarding & KYC Journeys",
      "CRM, Automation & Core Integrations",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Business Transformation",
    desc: "AI readiness, governed automation, AI-powered CX, intelligent assistants and analytics — built for the compliance realities of financial services.",
    points: [
      "AI Strategy & Readiness for BFSI",
      "AI-Powered Customer Experience",
      "Intelligent Support & Advisor Copilots",
      "Risk, Ops & Analytics Automation",
    ],
  },
];

const aiUseCases = [
  {
    icon: Users,
    title: "AI-Led Acquisition",
    body: "Intent scoring, look-alike modelling and personalised journeys for investors, borrowers and policyholders.",
  },
  {
    icon: Workflow,
    title: "Onboarding & KYC Intelligence",
    body: "Smart KYC, document AI and conversational onboarding for faster, compliant activation.",
  },
  {
    icon: ShieldCheck,
    title: "Service & Support Copilots",
    body: "AI assistants for relationship managers, advisors and contact centers — with compliance guardrails.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Risk Intelligence",
    body: "Portfolio, churn, fraud and propensity models layered into marketing, CX and operations.",
  },
];

const reasons = [
  {
    icon: Landmark,
    title: "Deep BFSI & Fintech DNA",
    body: "Years of working with banks, NBFCs, ARCs, fintechs, brokers, AMCs and insurers across India and global markets.",
  },
  {
    icon: Workflow,
    title: "Marketing + Tech + AI Under One Roof",
    body: "One strategic partner across brand, growth, platforms and AI — no agency hopping or vendor sprawl.",
  },
  {
    icon: Lock,
    title: "Compliance-Aware By Design",
    body: "Workflows, creative and tech built with SEBI, RBI, IRDAI and global regulator realities in mind.",
  },
  {
    icon: Globe2,
    title: "Built For India & Global Markets",
    body: "Programs designed for domestic BFSI and cross-border financial services in UAE, UK and US.",
  },
];

const futureBullets = [
  "Embedded finance and API-led distribution become the default.",
  "AI advisors and copilots reshape relationship management.",
  "Personalisation moves from segment-of-many to segment-of-one.",
  "Regulators raise the bar on disclosures, data and AI governance.",
  "Trust, brand and CX become the real moats — not just product.",
];

const faqs = [
  {
    q: "Do you work with banks, NBFCs and large financial enterprises, or only fintech startups?",
    a: "Both. We partner with growth-stage fintechs, NBFCs, broking platforms, AMCs and insurers, as well as large enterprise institutions like ARCIL — adapting our engagement model to the scale and governance needs of each.",
  },
  {
    q: "How is Ace360degree different from a typical financial services marketing agency?",
    a: "We are a strategic growth, brand, technology and AI partner — not a campaign vendor. We combine BFSI marketing, modern platforms and AI transformation under one roof, with executive ownership and compliance awareness built in.",
  },
  {
    q: "Can you run SEO and performance marketing for regulated financial products?",
    a: "Yes. We design intent-driven SEO and performance programs for investments, lending, broking, insurance and wealth — with creative and disclosures aligned to SEBI, RBI and IRDAI guidelines.",
  },
  {
    q: "Do you build customer portals, onboarding journeys and CRM for financial institutions?",
    a: "Yes. We design and build digital onboarding, KYC journeys, customer & advisor portals, partner consoles, CRM workflows and marketing automation integrated with core banking, broking and policy systems.",
  },
  {
    q: "Where can AI realistically help a financial services business today?",
    a: "Practical AI value sits in acquisition scoring, onboarding intelligence, advisor and support copilots, content operations, personalisation, churn and risk analytics. We assess readiness and roadmap governed, compliance-aware use cases.",
  },
  {
    q: "Which regions and segments do you serve?",
    a: "We are headquartered in Mumbai with active BFSI & fintech engagements across India, the UAE, the UK and the USA — including banks, NBFCs, ARCs, fintechs, brokers, AMCs, wealth managers and insurers.",
  },
];

const relatedServices = [
  { label: "AI Strategy & Readiness Assessment", to: "/ai-strategy-readiness-assessment" },
  { label: "AI Customer Experience Solutions", to: "/ai-customer-experience-solutions" },
  { label: "AI Workflow Automation", to: "/ai-workflow-automation" },
  { label: "Corporate B2B Growth Marketing", to: "/corporate-b2b-growth-marketing" },
  { label: "Website Design & Development", to: "/website-design-development" },
  { label: "CRM & ERP Solutions", to: "/crm-erp-solutions" },
  { label: "Search & Visibility", to: "/search-visibility" },
  { label: "Branding & Creative", to: "/branding-creative" },
];

/* ---------- FAQ item ---------- */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-foreground">{q}</span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-primary" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-primary" />
        )}
      </button>
      {open && <p className="pb-6 pr-10 text-base leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

/* ---------- page ---------- */
function FintechPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                  <Landmark className="h-3.5 w-3.5 text-primary" />
                  Industry Solutions · Financial Services & Fintech
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Growth, Marketing, Technology & AI for{" "}
                  <span className="italic text-primary">Financial Services</span> & Fintech
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  A strategic growth partner for banks, NBFCs, fintechs, brokers, wealth managers
                  and insurers — building trust, scaling acquisition and leading AI-driven
                  transformation, with compliance at the core.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
                  >
                    Book Discovery Call <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
                  >
                    View Financial Services Work <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="lg:col-span-5">
              <div className="overflow-hidden rounded-[28px] border border-border/60 bg-background shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
                <img
                  src={heroImg}
                  alt="Financial services and fintech growth visualization"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-10 md:grid-cols-4">
              {[
                { k: "15+", v: "Years in BFSI & Fintech" },
                { k: "12", v: "Financial Sub-Sectors Served" },
                { k: "100%", v: "Compliance-Aware Workflows" },
                { k: "4-in-1", v: "Brand · Growth · Tech · AI" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-serif text-3xl text-foreground md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">The Shift</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Financial services have changed. Most institutions haven't caught up.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Customers expect Amazon-grade experiences from their bank, broker and insurer.
                Distribution is moving from branches and DSAs to search, social, creators and
                embedded finance. New-age fintechs are setting the benchmark for onboarding, UX and
                personalisation.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The financial institutions that win the next decade won't be the ones with the
                loudest marketing — they'll be the ones with the strongest{" "}
                <span className="text-foreground">trust</span>, the sharpest{" "}
                <span className="text-foreground">digital experience</span>, and the most{" "}
                <span className="text-foreground">intelligent systems</span>.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                That's the partnership Ace360degree brings.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Business Challenges We Solve
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              The growth blockers we see across financial services leadership teams.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-border/70 bg-card p-7 transition hover:border-primary/40 hover:shadow-lg">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="font-mono text-primary">0{i + 1}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-primary">
                      How we solve it
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-foreground">{c.solution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Financial Sectors We Support
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Deep experience across BFSI and fintech sub-sectors.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={s.label} delay={i * 40}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-border/70 bg-card p-5 transition hover:border-primary/40">
                  <s.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium leading-snug text-foreground">
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Financial Growth Framework
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              A five-stage operating model for financial services growth.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {framework.map((f, i) => (
              <Reveal key={f.step} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-border/70 bg-card p-6">
                  <div className="font-mono text-xs text-primary">{f.step}</div>
                  <div className="mt-2 font-serif text-xl text-foreground">{f.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  {i < framework.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              How Ace360degree Helps
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Four integrated capabilities. One growth partner.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-8">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground">{c.title}</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI FOR FINANCIAL SERVICES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              AI for Financial Services
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Governed, compliance-aware AI — applied where it actually pays back.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiUseCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-7">
                  <div className="rounded-lg bg-primary/10 p-2.5 w-fit">
                    <u.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-5 font-serif text-xl text-foreground">{u.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Financial Services Success Stories
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              From new-age fintech platforms to enterprise financial institutions.
            </h2>
          </Reveal>

          <div className="mt-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Active Strategic Partnership
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img src={caseMos} alt="MOS Utility" className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="font-serif text-2xl text-foreground">MOS Utility</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Brand, digital, technology and growth partner for a fast-scaling fintech
                    distribution platform — across acquisition, partner enablement and customer
                    experience.
                  </p>
                  <Link
                    to="/case-mos-utility"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  >
                    View case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img src={caseArcil} alt="ARCIL" className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="font-serif text-2xl text-foreground">ARCIL</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Enterprise experience with India's pioneering asset reconstruction company —
                    corporate communications, brand and digital initiatives for a deeply regulated
                    financial enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Financial Services & Adjacent Enterprise Experience
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "NBFCs & Lending",
                  body: "Digital programs for new-age lending and credit platforms.",
                },
                {
                  name: "Broking & WealthTech",
                  body: "Acquisition and CX for trading and wealth platforms.",
                },
                {
                  name: "Insurance & Insurtech",
                  body: "Brand and lifecycle marketing for insurers and insurtechs.",
                },
              ].map((e) => (
                <div key={e.name} className="rounded-2xl border border-border/70 bg-card p-7">
                  <div className="font-serif text-xl text-foreground">{e.name}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ACE360 */}
      <section className="border-b border-border/60 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-background/60">
              Why Financial Organizations Choose Ace360degree
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Built to be the long-term growth partner of ambitious financial institutions.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-background/15 bg-background/5 p-7">
                  <r.icon className="h-6 w-6 text-background" />
                  <div className="mt-5 font-serif text-xl">{r.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-background/70">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE FUTURE */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">
                The Future of Financial Services
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                The next decade rewards trust, experience and intelligence.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <ul className="space-y-5">
                {futureBullets.map((b, i) => (
                  <li key={b} className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs text-primary">0{i + 1}</span>
                    <span className="text-lg leading-relaxed text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">FAQ</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Frequently asked by financial services leaders.
            </h2>
          </Reveal>

          <div className="mt-12">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Related Services</div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Services financial services leaders engage us for.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s, i) => (
              <Reveal key={s.to} delay={i * 50}>
                <Link
                  to={s.to}
                  className="group flex h-full items-center justify-between gap-3 rounded-xl border border-border/70 bg-card p-5 transition hover:border-primary/40 hover:shadow-md"
                >
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SUCCESS STORIES */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Related Success Stories
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Real financial services growth stories.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                name: "MOS Utility",
                tag: "Fintech Distribution",
                img: caseMos,
                to: "/case-mos-utility",
              },
              { name: "ARCIL", tag: "Asset Reconstruction", img: caseArcil, to: "/portfolio" },
            ].map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-2xl border border-border/70 bg-card"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex items-center justify-between p-7">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.tag}
                    </div>
                    <div className="mt-1 font-serif text-2xl text-foreground">{c.name}</div>
                  </div>
                  <Link
                    to={c.to}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  >
                    View <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
              <Target className="h-3.5 w-3.5" />
              Let's build your financial services growth roadmap
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 font-serif text-4xl leading-tight text-foreground md:text-6xl">
              Ready to grow your financial business with{" "}
              <span className="italic text-primary">brand, technology and AI</span>?
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Talk to our team about a tailored growth, brand, technology and AI roadmap for your
              bank, NBFC, fintech, broking, wealth or insurance business — across India and global
              markets.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Book Discovery Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                View Success Stories <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
