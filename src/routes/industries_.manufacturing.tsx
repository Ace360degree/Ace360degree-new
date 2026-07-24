import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Cog,
  Cpu,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Workflow,
  CheckCircle2,
  Wrench,
  Pill,
  Stethoscope,
  Building2,
  Zap,
  Car,
  Package,
  Hammer,
  Utensils,
  Lightbulb,
  Target,
  LineChart,
  Users,
  Plus,
  Minus,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroImg from "@/assets/industry-manufacturing.666.jpg";
import caseRexello from "@/assets/case-rexello.777.jpg";
import caseCosmos from "@/assets/case-cosmos.555.jpg";

export const Route = createFileRoute("/industries_/manufacturing")({
  component: ManufacturingPage,
  head: () => ({
    meta: [
      {
        title: "Marketing, Technology & AI Solutions for Manufacturing Companies | Ace360degree",
      },
      {
        name: "description",
        content:
          "Strategic growth partner for manufacturers — industrial digital marketing, B2B lead generation, manufacturing website development, dealer portals, CRM and AI for manufacturing. Mumbai • UAE • UK • USA.",
      },
      {
        name: "keywords",
        content:
          "manufacturing digital marketing, industrial SEO, B2B lead generation for manufacturers, manufacturing website development, AI for manufacturing, dealer portal, CRM for manufacturers, export lead generation, industrial marketing agency India",
      },
      {
        property: "og:title",
        content: "Manufacturing Growth, Technology & AI Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Helping industrial and manufacturing companies build pipeline, modernize digital infrastructure and adopt AI — the consulting way.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries/manufacturing" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/industries/manufacturing" }],
  }),
});

/* ---------- reveal hook ---------- */
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
  { icon: Cog, label: "Industrial Machinery & Engineering" },
  { icon: Wrench, label: "Mechanical Components" },
  { icon: Pill, label: "Pharmaceutical Manufacturing" },
  { icon: Stethoscope, label: "Medical Device Manufacturing" },
  { icon: Building2, label: "Building Materials" },
  { icon: Hammer, label: "Architectural Products" },
  { icon: Zap, label: "Electrical & Electronics" },
  { icon: Car, label: "Automotive & Auto Components" },
  { icon: Package, label: "Packaging Manufacturing" },
  { icon: Factory, label: "Industrial Consumables" },
  { icon: Utensils, label: "Food Processing & FMCG" },
];

const challenges = [
  {
    title: "Low Digital Visibility",
    body: "Strong product, weak digital presence. Buyers, distributors and exporters can't find you when they're evaluating suppliers.",
    solution:
      "Industrial SEO, technical content, B2B PR and category authority building across India and export markets.",
  },
  {
    title: "Inconsistent Lead Pipeline",
    body: "Sales teams depend on referrals and trade shows. Inbound enquiries are unpredictable and unqualified.",
    solution:
      "Multi-channel demand generation engine — search, LinkedIn, programmatic, exporter directories and intent-based outreach.",
  },
  {
    title: "Outdated Brand & Catalogues",
    body: "Legacy identity, dated brochures and PDFs no longer command premium positioning with global buyers.",
    solution:
      "Refreshed industrial brand system, product storytelling, technical catalogues, films and exhibition assets.",
  },
  {
    title: "Disconnected Tech Stack",
    body: "ERP, CRM, dealer systems and website operate in silos — slowing quotes, follow-ups and reporting.",
    solution:
      "Unified web, CRM, dealer & distributor portals integrated with ERP for one source of operational truth.",
  },
  {
    title: "Export & Global Growth",
    body: "Ambitions are global, but the digital footprint, language readiness and lead infrastructure are local.",
    solution:
      "Export-ready websites, geo-targeted campaigns, RFQ funnels and global trade lead generation programs.",
  },
  {
    title: "AI Readiness Gap",
    body: "Leadership knows AI matters — but isn't sure where it actually moves the needle inside a manufacturing business.",
    solution:
      "AI readiness assessment, use-case roadmap and pragmatic AI deployment across sales, ops and customer experience.",
  },
];

const framework = [
  {
    step: "01",
    title: "Diagnose",
    body: "Understand business, plant, products, channels and growth gaps.",
  },
  {
    step: "02",
    title: "Position",
    body: "Sharpen brand, story and category positioning for B2B buyers.",
  },
  {
    step: "03",
    title: "Build",
    body: "Modern website, dealer portals, CRM, content and technology backbone.",
  },
  {
    step: "04",
    title: "Generate",
    body: "Run search, LinkedIn, export and demand generation engines.",
  },
  {
    step: "05",
    title: "Scale",
    body: "Layer AI, automation and analytics for compounding growth.",
  },
];

const capabilities = [
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    desc: "Industrial SEO, performance, LinkedIn ABM, exporter lead generation, distributor acquisition and content engines built for engineering buyers.",
    points: [
      "Industrial & Export SEO",
      "B2B Performance Marketing",
      "LinkedIn ABM & Sales Enablement",
      "Distributor & Dealer Lead Programs",
    ],
  },
  {
    icon: Lightbulb,
    title: "Branding & Creative",
    desc: "Brand systems, product storytelling, corporate films, technical catalogues, plant tours and exhibition design for premium positioning.",
    points: [
      "Industrial Brand Identity",
      "Product & Plant Films",
      "Technical Catalogues & Brochures",
      "Exhibition & Trade Show Design",
    ],
  },
  {
    icon: Cpu,
    title: "Technology & Digital Platforms",
    desc: "Websites, dealer/distributor portals, customer portals, CRM, marketing automation and ERP-integrated platforms purpose-built for manufacturers.",
    points: [
      "Manufacturing Websites",
      "Dealer & Distributor Portals",
      "CRM, ERP & Marketing Automation",
      "Custom Product Configurators",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Business Transformation",
    desc: "AI readiness assessment, workflow automation, AI-powered CX and intelligent systems for sales, operations and customer support.",
    points: [
      "AI Strategy & Readiness",
      "Sales & Marketing Automation",
      "AI Customer Experience Systems",
      "Process & Workflow Intelligence",
    ],
  },
];

const reasons = [
  {
    icon: Factory,
    title: "Deep Manufacturing DNA",
    body: "Years of working with industrial, engineering and process manufacturing brands across India and global markets.",
  },
  {
    icon: Workflow,
    title: "Marketing + Tech + AI Under One Roof",
    body: "One strategic partner across brand, growth, platforms and AI — no agency hopping.",
  },
  {
    icon: ShieldCheck,
    title: "Executive-Grade Governance",
    body: "Senior leadership embedded on every account. Built for MDs, CEOs and business owners.",
  },
  {
    icon: Globe2,
    title: "Built For India & Export Markets",
    body: "Programs designed for domestic distribution networks and global export pipelines alike.",
  },
];

const faqs = [
  {
    q: "Do you work with small and mid-sized manufacturers, or only enterprise clients?",
    a: "We partner with growth-stage manufacturers, mid-market industrial brands and large enterprises. Our model adapts — from focused growth retainers for mid-sized firms to multi-program transformation engagements for enterprises.",
  },
  {
    q: "How is Ace360degree different from a typical digital marketing agency?",
    a: "We are a strategic growth, brand, technology and AI partner — not a campaign vendor. We combine industrial marketing, modern technology platforms and AI transformation under one roof, with executive-level ownership.",
  },
  {
    q: "Can you generate genuine B2B and export leads for our manufacturing business?",
    a: "Yes. We design intent-based demand generation programs across search, LinkedIn ABM, programmatic, exporter directories and content — focused on qualified RFQs, distributor enquiries and export leads, not vanity traffic.",
  },
  {
    q: "Do you build websites, dealer portals and CRM systems specifically for manufacturers?",
    a: "Yes. We design and build manufacturing websites, dealer & distributor portals, product configurators, CRM workflows and ERP-integrated platforms tailored to industrial sales cycles.",
  },
  {
    q: "Where can AI realistically help a manufacturing company today?",
    a: "Practical AI value sits in lead qualification, sales enablement, customer support, knowledge automation, product Q&A, dealer onboarding, content operations and analytics. We assess your readiness and roadmap use cases that pay back quickly.",
  },
  {
    q: "Which regions do you serve?",
    a: "We are headquartered in Mumbai with active engagements across India, the UAE, the UK and the USA — including export-focused programs for global trade.",
  },
];

const relatedServices = [
  { label: "AI Strategy & Readiness Assessment", to: "/ai-strategy-readiness-assessment" },
  { label: "AI Workflow Automation", to: "/ai-workflow-automation" },
  { label: "AI Customer Experience Solutions", to: "/ai-customer-experience-solutions" },
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
function ManufacturingPage() {
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
                  <Factory className="h-3.5 w-3.5 text-primary" />
                  Industry Solutions · Manufacturing
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Marketing, Technology & AI Solutions for{" "}
                  <span className="italic text-primary">Manufacturing</span> Companies
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  A strategic growth partner for industrial and manufacturing businesses — combining
                  brand, demand generation, modern technology platforms and AI to build pipeline,
                  productivity and global presence.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
                  >
                    Book Discovery Call <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-muted hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
                  >
                    View Manufacturing Work <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160} className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-xl">
                <img
                  src={heroImg}
                  alt="Automated manufacturing facility with industrial machinery"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-10 md:grid-cols-4">
              {[
                { k: "15+", v: "Years in B2B & Industrial" },
                { k: "300+", v: "Projects Delivered" },
                { k: "11", v: "Manufacturing Sub-Sectors" },
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

      {/* MANUFACTURING HAS CHANGED */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">The Shift</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Manufacturing has changed. Most manufacturers haven't.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Buyers research online before they ever pick up the phone. Distributors expect
                portals, not PDFs. Export markets demand a credible digital footprint. Plants are
                instrumented. AI is rewriting sales, support and operations.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The manufacturers that win the next decade won't be the ones with the loudest
                marketing — they'll be the ones with the sharpest{" "}
                <span className="text-foreground">brand</span>, the strongest{" "}
                <span className="text-foreground">digital infrastructure</span>, and the most{" "}
                <span className="text-foreground">intelligent systems</span>.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                That's the partnership Ace360degree brings.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES WE SOLVE */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Challenges We Solve
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              The growth blockers we see across manufacturing leadership teams.
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

      {/* SECTORS WE SUPPORT */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Manufacturing Sectors We Support
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Deep experience across industrial sub-sectors — from machinery to medical devices.
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

      {/* GROWTH FRAMEWORK */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Manufacturing Growth Framework
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              A five-stage operating model for industrial growth.
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

      {/* HOW ACE360 HELPS */}
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

      {/* SUCCESS STORIES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Manufacturing Success Stories
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              From mid-market industrial brands to global manufacturing leaders.
            </h2>
          </Reveal>

          <div className="mt-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Active Strategic Partnerships
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Rexello Castors",
                  body: "Brand, digital & growth partner for India's leading castor & wheel manufacturer.",
                  img: caseRexello,
                },
                {
                  name: "Cosmos Seals India",
                  body: "Industrial brand, digital infrastructure and B2B lead generation for precision sealing solutions.",
                  img: caseCosmos,
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-border/70 bg-card"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-7">
                    <div className="font-serif text-2xl text-foreground">{p.name}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Enterprise Manufacturing Experience
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { name: "Bayer", body: "Global life sciences & pharmaceutical manufacturing." },
                { name: "Hafele", body: "Architectural hardware & building materials." },
                { name: "Schott Kaisha", body: "Pharmaceutical primary packaging manufacturing." },
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
              Why Ace360degree
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Built to be the long-term growth partner of ambitious manufacturers.
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

      {/* FAQ */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">FAQ</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Frequently asked by manufacturing leaders.
            </h2>
          </Reveal>

          <div className="mt-12">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

          {/* JSON-LD for SEO / AEO */}
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
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Related Services</div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Services manufacturing leaders engage us for.
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
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Related Success Stories
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Real manufacturing growth stories.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Rexello Castors",
                tag: "Industrial Components",
                img: caseRexello,
                href: "/case-rexello-castors",
              },
              {
                name: "Cosmos Seals India",
                tag: "Precision Sealing",
                img: caseCosmos,
                href: "/case-cosmos-seals",
              },
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
                    to={c.href}
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
     <section className="relative isolate overflow-hidden border-y border-foreground/[0.06] bg-[#FCFCFA]">
  {/* Soft diagonal cream background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
    style={{
    background: `
      radial-gradient(
        ellipse 75% 140% at 0% 0%,
        rgba(242, 160, 0, 0.16) 0%,
        rgba(242, 160, 0, 0.10) 50%,
        rgba(242, 160, 0, 0.045) 60%,
        rgba(242, 160, 0, 0) 82%
      ),
      linear-gradient(
        105deg,
        #FFF7E9 0%,
        #FFFAF2 32%,
        #FFFDF9 55%,
        #FFFFFF 78%,
        #FFFFFF 100%
      )
    `,
  }}
  />

  <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 lg:py-32">
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full border border-[#F2A400]/35 bg-[#F2A400]/[0.035] px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[#F2A400]">
        <Target className="h-3.5 w-3.5" />

        <span>Let's build your manufacturing growth roadmap</span>
      </div>
    </Reveal>

    <Reveal delay={100}>
      <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-6xl">
        Ready to grow your manufacturing business
        <span className="block">
          with{" "}
          <span className="italic font-normal text-[#F2A400]">
            brand, technology and AI
          </span>
          ?
        </span>
      </h2>
    </Reveal>

    <Reveal delay={180}>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Talk to our team about a tailored growth, brand, technology and AI
        roadmap for your manufacturing business — across India and export
        markets.
      </p>
    </Reveal>

    <Reveal delay={240}>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
        >
          Book Discovery Call
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-[#FCFCFA]/80 px-7 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-white hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
        >
          View Success Stories
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Reveal>
  </div>
</section>

      <SiteFooter />
    </div>
  );
}
