import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Landmark,
  GraduationCap,
  HeartPulse,
  Building2,
  ShoppingBag,
  Cloud,
  Target,
  Eye,
  Sparkles,
  Cpu,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Layers,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import industriesHero from "@/assets/industry-manufacturing332.jpg";
import indManufacturing from "@/assets/industry-manufacturing32.jpg";
import indFinance from "@/assets/industry-finance.212.jpg";
import indEducation from "@/assets/industry-education.333.jpg";
import indHealthcare from "@/assets/industry-healthcare.444.jpg";
import indArchitecture from "@/assets/industry-architecture.414.jpg";
import indRealEstate from "@/assets/icase-living-concepts1.jpg";
import indSaas from "@/assets/svc-technology1.jpg";
import indD2c from "@/assets/d2c-retail-hero1111.png";
import  caseMos from "@/assets/case-mos.999.jpg";
import caseRexello from "@/assets/case-rexello.2222.jpg";
import  caseCosmos from "@/assets/case-amigo.323.jpg";
import caseAmigo from "@/assets/case-cosmos.343.jpg";
import caseLiving from "@/assets/case-living.555.jpg";
import caseKsa from "@/assets/case-ksa.323.jpg";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industry Solutions | Strategic Growth Partner | Ace360degree" },
      {
        name: "description",
        content:
          "Industry Solutions by Ace360degree — strategic growth, branding, technology and AI partnerships for manufacturing, financial services, education, healthcare, real estate, SaaS and D2C enterprises.",
      },
      { property: "og:title", content: "Industry Solutions | Ace360degree" },
      {
        property: "og:description",
        content:
          "Industry Solutions That Drive Sustainable Business Growth. A consulting-led partnership across Growth, Brand, Technology and AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

/* ---------- helpers ---------- */
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
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Growth Challenges" },
  { id: "industries", label: "Industry Solutions" },
  { id: "capabilities", label: "Capabilities" },
  { id: "stories", label: "Success Stories" },
  { id: "why", label: "Why Ace360degree" },
  { id: "equation", label: "Growth Equation" },
  { id: "contact", label: "Engage" },
];

const CHALLENGES = [
  { icon: Target, title: "Need More Qualified Leads?", text: "Pipeline systems that bring decision-ready buyers — not just traffic." },
  { icon: Eye, title: "Need Better Brand Visibility?", text: "Position your brand as the authority in your category and geography." },
  { icon: Sparkles, title: "Need Better Digital Experiences?", text: "Websites, apps and platforms engineered for trust and conversion." },
  { icon: Workflow, title: "Need Operational Efficiency?", text: "Automate manual workflows across marketing, sales and service." },
  { icon: BrainCircuit, title: "Need To Leverage AI?", text: "Translate AI from buzzword to measurable business advantage." },
  { icon: Layers, title: "Need To Scale Without Complexity?", text: "Build growth systems that compound — without bloating headcount." },
];

const INDUSTRIES = [
  {
    id: "manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
    name: "Manufacturing & Industrial",
    image: indManufacturing,
    overview:
      "B2B manufacturers selling globally need brand authority, qualified pipelines and digital systems that work across geographies and distributors.",
    challenges: [
      "Long, technical buying cycles",
      "Fragmented distributor networks",
      "Weak digital presence vs. global competitors",
      "Underutilised data across plants and sales",
    ],
    solutions: [
      "B2B Growth Marketing & ABM",
      "Industrial Brand Positioning",
      "Product, Catalogue & Distributor Portals",
      "AI-led Lead Scoring & Sales Enablement",
    ],
    active: ["Rexello Castors", "Cosmos Seals India"],
    enterprise: ["Bayer", "Hafele", "Schott Kaisha"],
  },
  {
    id: "fintech",
    href: "/industries/fintech",
    icon: Landmark,
    name: "Financial Services & Fintech",
    image: indFinance,
    overview:
      "Financial brands grow on trust, compliance and customer experience. We engineer credibility and conversion across regulated journeys.",
    challenges: [
      "Building trust in a low-trust category",
      "Compliance-bound creative and content",
      "Complex onboarding & drop-offs",
      "Cross-channel attribution gaps",
    ],
    solutions: [
      "Fintech Brand & Trust Architecture",
      "Performance & Lifecycle Marketing",
      "Customer Onboarding & CX Platforms",
      "AI for Risk, Service & Personalisation",
    ],
    active: ["MOS Utility"],
    enterprise: ["ARCIL"],
  },
  {
    id: "education",
    href: "/industries/education",
    icon: GraduationCap,
    name: "Education & EdTech",
    image: indEducation,
    overview:
      "Education brands compete for attention, intent and outcomes. We design growth systems that convert curiosity into committed learners.",
    challenges: [
      "Intent-led admissions journeys",
      "Parent + student decision dynamics",
      "Course discovery & content depth",
      "Retention beyond enrolment",
    ],
    solutions: [
      "Admissions Growth Marketing",
      "Institution & Course Brand Identity",
      "Learning Platforms & Mobile Apps",
      "AI Counsellors & Learner Engagement",
    ],
    active: ["Amigo Academy"],
    enterprise: [],
  },
  {
    id: "healthcare",
    href: "/industries/healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    image: indHealthcare,
    overview:
      "Healthcare brands grow when patients, doctors and partners trust the experience. We balance science, sensitivity and digital scale.",
    challenges: [
      "Patient acquisition in regulated channels",
      "Doctor & referral network engagement",
      "Patient experience across touchpoints",
      "Data, privacy and clinical credibility",
    ],
    solutions: [
      "Healthcare Brand & Reputation",
      "Patient Acquisition & Retention",
      "Hospital, Clinic & Pharma Digital",
      "AI for Triage, CX & Operations",
    ],
    active: [],
    enterprise: ["Healthcare Marketing Experience"],
  },
  {
    id: "architecture",
    href: "/industries/architecture",
    icon: Building2,
    name: "Architecture, Interior ",
    image: indArchitecture,
    overview:
      "Design and real estate brands sell vision. We translate craft, projects and portfolios into editorial brand experiences that command premium.",
    challenges: [
      "Premium positioning vs. commoditisation",
      "Storytelling across long projects",
      "HNI/UHNI buyer journeys",
      "Portfolio depth without dilution",
    ],
    solutions: [
      "Premium Brand & Editorial Design",
      "Project & Portfolio Websites",
      "HNI Growth & PR Campaigns",
      "AI-led Sales & CRM Enablement",
    ],
    active: ["Living Concepts", "Kuwal Sanam Architects"],
    enterprise: [],
  },
  {
    id: "real-estate",
    href: "/industries/real-estate",
    icon: Building2,
    name: "Real Estate",
    image: indRealEstate,
    overview:
      "Developers and real estate brands need premium positioning, high-intent enquiries and buyer journeys that move prospects from discovery to site visits.",
    challenges: [
      "Low-quality project enquiries",
      "Slow sales velocity across launches",
      "Weak project and portfolio visibility",
      "Long buyer decision cycles",
    ],
    solutions: [
      "Project Launch Strategy",
      "Real Estate Performance Marketing",
      "Project Websites & Landing Pages",
      "CRM, Nurture & Sales Enablement",
    ],
    active: ["Living Concepts", "Kuwal Sanam Architects"],
    enterprise: [],
  },
  {
    id: "saas",
    href: "/industries/saas",
    icon: Cloud,
    name: "Software, SaaS & Technology",
    image: indSaas,
    overview:
      "Software and SaaS companies scale through sharper positioning, demand generation and digital platforms that turn complex products into qualified pipeline.",
    challenges: [
      "Low product visibility",
      "Weak technical positioning",
      "Low demo and trial conversion",
      "Long enterprise buying cycles",
    ],
    solutions: [
      "SaaS Positioning & Messaging",
      "Technical SEO & Demand Generation",
      "Product Websites & Landing Pages",
      "CRM Automation & Lifecycle Journeys",
    ],
    active: [],
    enterprise: ["Software + SaaS Experience"],
  },
  {
    id: "d2c-retailbrand",
    href: "/industries/d2c-retailbrand",
    icon: ShoppingBag,
    name: "D2C & Retail Brand",
    image: indD2c,
    overview:
      "Consumer brands grow when brand, commerce and performance work together. We build integrated systems for acquisition, conversion and loyalty.",
    challenges: [
      "Rising customer acquisition costs",
      "Low brand differentiation",
      "Poor eCommerce conversion rates",
      "Inconsistent omnichannel experience",
    ],
    solutions: [
      "Brand-Led Growth Strategy",
      "Performance Marketing & SEO",
      "Shopify, WooCommerce & Commerce Builds",
      "Retention, Loyalty & Marketing Automation",
    ],
    active: [],
    enterprise: ["Commerce & Retail Experience"],
  },
] as const;

const PILLARS = [
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    text: "Performance, SEO, content and demand systems engineered for pipeline.",
  },
  { icon: Sparkles, title: "Branding & Creative", text: "Positioning, identity, storytelling and editorial design that earns trust." },
  { icon: Cpu, title: "Technology & Digital Platforms", text: "Websites, web apps, portals and platforms — built to scale and convert." },
  { icon: BrainCircuit, title: "AI & Business Transformation", text: "AI strategy, automation and intelligence woven into business operations." },
];

const PROCESS = [
  "Business Challenge",
  "Growth Strategy",
  "Brand & Technology",
  "Execution",
  "Business Growth",
];

const STORIES = {
  active: [
    { name: "MOS Utility", tag: "Fintech", img: caseMos, href: "/case-mos-utility" },
    {
      name: "Rexello Castors",
      tag: "Manufacturing",
      img: caseRexello,
      href: "/case-rexello-castors",
    },
    {
      name: "Cosmos Seals India",
      tag: "Manufacturing",
      img: caseCosmos,
      href: "/case-cosmos-seals",
    },
    { name: "Amigo Academy", tag: "Education", img: caseAmigo, href: "/case-amigo-academy" },
    {
      name: "Living Concepts",
      tag: "Interior",
      img: caseLiving,
      href: "/case-living-concepts",
    },
    {
      name: "Kuwal Sanam Architects",
      tag: "Architecture",
      img: caseKsa,
      href: "/case-kuwal-sanam",
    },
  ],
  enterprise: ["Bayer", "Hafele", "Schott Kaisha", "ARCIL"],
  transformation: [
    "Brand Modernisation Programs",
    "Digital Platform Builds",
    "AI Readiness & Rollouts",
    "Marketing Transformation",
  ],
};

const TRUST = [
  { k: "15+", v: "Years of Strategic Practice" },
  { k: "300+", v: "Projects Delivered" },
  { k: "4-in-1", v: "Growth · Brand · Tech · AI" },
  { k: "C-Suite", v: "Boardroom-Ready Engagements" },
];

/* ---------- page ---------- */
function IndustriesPage() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* HERO */}
      <section id="overview" className="bg-canvas text-dark">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-28 md:pb-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-brand">
                  <span className="size-1.5 rounded-full bg-brand" /> Industry Solutions
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 max-w-5xl text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
                  Industry Solutions That Drive{" "}
                  <span className="font-serif italic text-brand">Sustainable</span> Business Growth.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-2xl text-base text-dark/75 leading-relaxed">
                  A strategic partnership across Growth, Brand, Technology and AI — tailored to how
                  your industry actually grows. Built for boards, CEOs and growth-focused leaders.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#industries"
                    className="inline-flex items-center gap-2 bg-[#FFB330] hover:bg-[#E09010] text-[#181818] px-5 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Explore Industry Solutions <ArrowRight className="size-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-dark hover:text-brand transition"
                  >
                    Book Discovery Call <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={180} className="lg:justify-self-end">
              <img
                src={industriesHero}
                alt="Sustainable business growth strategy dashboard"
                className="aspect-[1.5/1] w-full object-cover lg:max-w-[520px]"
                width={494}
                height={329}
              />
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-canvas border border-dark">
            {TRUST.map((t) => (
              <div key={t.v} className="bg-dark px-6 py-6">
                <div className="text-3xl font-medium text-brand">{t.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-canvas/60">{t.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY with sticky side nav */}
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-[220px_1fr] gap-12">
        {/* Side Nav */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="text-[10px] uppercase tracking-[0.28em] text-dark/40 mb-4">On this page</div>
            <ul className="space-y-1 border-l border-dark/10">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block pl-4 py-2 text-sm border-l-2 -ml-px transition ${
                      active === s.id
                        ? "border-brand text-dark font-medium"
                        : "border-transparent text-dark/55 hover:text-dark"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="min-w-0 space-y-32">
          {/* CHALLENGES */}
          <section id="challenges" className="scroll-mt-28">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand mb-3">02 · Growth Challenges</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
                Different industries. <span className="font-serif italic">Same growth questions.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-dark/65 leading-relaxed">
                We start where every CEO does — with the business question. Then we engineer the
                growth, brand, technology and AI systems to answer it.
              </p>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {CHALLENGES.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="group bg-canvas p-7 h-full hover:bg-dark hover:text-canvas transition-colors duration-300">
                    <c.icon className="size-6 text-brand" />
                    <h3 className="mt-6 text-lg font-medium tracking-tight">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-dark/65 group-hover:text-canvas/70">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* PROCESS TIMELINE */}
            <Reveal>
              <div className="mt-16 border border-dark/10 bg-dark text-canvas p-8 md:p-12">
                <div className="text-[10px] uppercase tracking-[0.28em] text-brand">Our Framework</div>
                <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight">
                  From business challenge to business growth.
                </h3>
                <div className="mt-10 grid md:grid-cols-9 items-center gap-4">
                  {PROCESS.map((p, i) => (
                    <div key={p} className="contents">
                      <div className="md:col-span-1 flex md:block items-center gap-4">
                        <div className="size-10 grid place-items-center rounded-full border border-brand/40 text-brand text-xs font-medium">
                          0{i + 1}
                        </div>
                        <div className="mt-3 text-sm font-medium leading-tight">{p}</div>
                      </div>
                      {i < PROCESS.length - 1 && (
                        <div className="md:col-span-1 hidden md:flex justify-center">
                          <div className="h-px w-full bg-gradient-to-r from-brand/40 to-canvas/10" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* INDUSTRY SOLUTIONS */}
          <section id="industries" className="scroll-mt-28">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand mb-3">03 · Industry Solutions</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
                Solutions, <span className="font-serif italic">not categories.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-dark/65 leading-relaxed">
                Each engagement is shaped around how that industry actually wins — its buyers,
                cycles, regulations and growth levers.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={ind.id} delay={i * 80}>
                  <article className="group grid md:grid-cols-12 gap-0 border border-dark/10 bg-canvas overflow-hidden hover:border-dark transition-colors">
                    <div className="md:col-span-5 relative overflow-hidden">
                      <img
                        src={ind.image}
                        alt={ind.name}
                        className="h-full w-full object-cover aspect-[5/4] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-canvas/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em]">
                        <ind.icon className="size-3.5 text-brand" /> 0{i + 1} · Industry
                      </div>
                    </div>
                    <div className="md:col-span-7 p-8 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{ind.name}</h3>
                      <p className="mt-4 text-dark/70 leading-relaxed">{ind.overview}</p>

                      <div className="mt-7 grid sm:grid-cols-2 gap-7">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-3">
                            Business Challenges
                          </div>
                          <ul className="space-y-2 text-sm text-dark/75">
                            {ind.challenges.map((c) => (
                              <li key={c} className="flex gap-2">
                                <span className="mt-2 size-1 rounded-full bg-dark/40 shrink-0" /> {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-3">
                            Relevant Solutions
                          </div>
                          <ul className="space-y-2 text-sm text-dark/75">
                            {ind.solutions.map((c) => (
                              <li key={c} className="flex gap-2">
                                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" /> {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {(ind.active.length > 0 || ind.enterprise.length > 0) && (
                        <div className="mt-7 pt-6 border-t border-dark/10 flex flex-wrap gap-x-8 gap-y-4">
                          {ind.active.length > 0 && (
                            <div>
                              <div className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-2">
                                Active Partnerships
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {ind.active.map((n) => (
                                  <span
                                    key={n}
                                    className="text-xs px-3 py-1 border border-dark/15 bg-dark text-canvas"
                                  >
                                    {n}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {ind.enterprise.length > 0 && (
                            <div>
                              <div className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-2">
                                Enterprise Experience
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {ind.enterprise.map((n) => (
                                  <span key={n} className="text-xs px-3 py-1 border border-dark/15">
                                    {n}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="mt-8">
                        <Link
                          to={ind.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-dark border-b border-dark/30 pb-1 hover:border-brand hover:text-brand transition"
                        >
                          Explore {ind.name.split(" ")[0]} Solutions <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CAPABILITIES */}
          <section id="capabilities" className="scroll-mt-28">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand mb-3">04 · Capability Pillars</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
                Four pillars. <span className="font-serif italic">One integrated partner.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/10 border border-dark/10">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="group bg-canvas p-8 h-full hover:bg-brand transition-colors duration-300">
                    <p.icon className="size-7 text-dark" />
                    <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-dark/45">
                      Pillar 0{i + 1}
                    </div>
                    <h3 className="mt-2 text-xl font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-sm text-dark/70 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* SUCCESS STORIES */}
          <section id="stories" className="scroll-mt-28">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand mb-3">05 · Success Stories</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
                Proof, <span className="font-serif italic">not promises.</span>
              </h2>
            </Reveal>

            <div className="mt-12">
              <div className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-4">
                Active Strategic Partnerships
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {STORIES.active.map((s, i) => (
                  <Reveal key={s.name} delay={i * 50}>
                    <Link
                      to={s.href}
                      className="group block border border-dark/10 overflow-hidden bg-canvas cursor-pointer"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-dark/5">
                        <img
                          src={s.img}
                          alt={s.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-5 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-dark/45">
                            {s.tag}
                          </div>
                          <div className="mt-1 font-medium tracking-tight">{s.name}</div>
                        </div>
                        <ArrowUpRight className="size-4 text-dark/50 group-hover:text-brand transition" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="border border-dark/10 p-8 bg-dark text-canvas h-full">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand mb-4">
                    Enterprise Experience
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {STORIES.enterprise.map((n) => (
                      <span key={n} className="text-sm px-3 py-1.5 border border-canvas/15">
                        {n}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-canvas/60 leading-relaxed max-w-md">
                    Senior-leadership experience delivering brand, digital and growth programs for
                    global and regional enterprises.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="border border-dark/10 p-8 bg-canvas h-full">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-dark/45 mb-4">
                    Brand & Digital Transformation
                  </div>
                  <ul className="space-y-3">
                    {STORIES.transformation.map((t) => (
                      <li key={t} className="flex gap-3 text-sm text-dark/80">
                        <CheckCircle2 className="size-4 text-brand mt-0.5 shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          {/* WHY */}
          <section id="why" className="scroll-mt-28">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand mb-3">06 · Why Ace360degree</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
                A partner built for the <span className="font-serif italic">boardroom.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {[
                { icon: ShieldCheck, t: "Senior, Accountable Leadership", d: "CEOs work with leadership — not account juniors. Strategy is owned, not delegated." },
                { icon: Layers, t: "Integrated 4-in-1 Partnership", d: "Growth, Brand, Technology and AI under one engagement — no fragmented vendors." },
                { icon: TrendingUp, t: "Outcomes Tied To Business KPIs", d: "Pipeline, revenue, efficiency and valuation — not vanity dashboards." },
              ].map((x, i) => (
                <Reveal key={x.t} delay={i * 80}>
                  <div className="bg-canvas p-8 h-full">
                    <x.icon className="size-6 text-brand" />
                    <h3 className="mt-6 text-lg font-medium tracking-tight">{x.t}</h3>
                    <p className="mt-3 text-sm text-dark/65 leading-relaxed">{x.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* GROWTH EQUATION */}
          <section id="equation" className="scroll-mt-28">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand mb-3">07 · Growth Equation</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
                The Ace360degree <span className="font-serif italic">growth equation.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12 bg-dark text-canvas border border-dark/20 p-10 md:p-14">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-center">
                  {["Visibility", "Trust", "Technology", "Customer Experience", "Innovation"].map(
                    (term, idx, arr) => (
                      <div key={term} className="flex items-center gap-4">
                        <div>
                          <div className="text-xl md:text-2xl font-medium tracking-tight">{term}</div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-canvas/45 mt-1">
                            Pillar 0{idx + 1}
                          </div>
                        </div>
                        {idx < arr.length - 1 && (
                          <div className="text-2xl text-brand font-serif italic">+</div>
                        )}
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-10 flex flex-col items-center gap-3">
                  <div className="text-2xl text-brand">=</div>
                  <div className="text-2xl md:text-3xl font-medium tracking-tight text-center">
                    Sustainable <span className="font-serif italic text-brand">Business Growth</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </div>

      {/* FINAL CTA */}
      <section id="contact" className="bg-dark text-canvas py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.28em] text-brand mb-4">08 · Engage</div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
              Looking for a growth partner who{" "}
              <span className="font-serif italic text-brand">understands your industry?</span>
            </h2>
            <p className="mt-6 text-canvas/65 max-w-2xl mx-auto">
              Let's discuss your business challenges and build a roadmap for sustainable growth —
              across brand, marketing, technology and AI.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 text-sm font-semibold hover:brightness-95 transition"
              >
                Book Discovery Call <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-canvas/25 text-canvas px-6 py-3 text-sm font-semibold hover:bg-canvas hover:text-dark transition"
              >
                View Success Stories <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
