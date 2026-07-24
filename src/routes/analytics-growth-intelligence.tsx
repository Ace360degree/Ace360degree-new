import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseRexello from "@/assets/case-rexello.jpg";
import caseCosmos from "@/assets/case-cosmos.jpg";

export const Route = createFileRoute("/analytics-growth-intelligence")({
  component: AnalyticsGrowthIntelligencePage,
  head: () => ({
    meta: [
      {
        title:
          "Analytics & Growth Intelligence Services Mumbai | Business Intelligence | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Growth Intelligence Partner helping businesses transform data into insights, measure marketing ROI, build executive dashboards and accelerate growth through analytics and business intelligence.",
      },
      {
        property: "og:title",
        content: "Analytics & Growth Intelligence Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Measure what matters. Grow with confidence. Transform marketing, sales and operational data into actionable business intelligence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/analytics-growth-intelligence" },
    ],
    links: [{ rel: "canonical", href: "/analytics-growth-intelligence" }],
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(20px)",
        transition: `opacity .8s cubic-bezier(.19,1,.22,1) ${delay}ms, transform .8s cubic-bezier(.19,1,.22,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- data ---------- */
const challenges = [
  {
    q: "Unsure Which Marketing Activities Generate Results?",
    s: "Gain visibility into channels, campaigns and customer acquisition performance — and know exactly where growth is coming from.",
    tag: "Channel Visibility",
  },
  {
    q: "Too Many Reports But No Clear Insights?",
    s: "Transform raw data and disconnected dashboards into clear, business-relevant intelligence that supports real decisions.",
    tag: "Decision Intelligence",
  },
  {
    q: "Can't Track The Customer Journey?",
    s: "Connect touchpoints from awareness to conversion — and finally see how prospects become customers across channels.",
    tag: "Customer Journey",
  },
  {
    q: "Struggling To Measure ROI?",
    s: "Understand the true impact of every marketing investment — by channel, by campaign and by cohort — not just last-click.",
    tag: "Marketing ROI",
  },
  {
    q: "Disconnected Marketing & Sales Data?",
    s: "Create a unified view of growth performance by integrating marketing platforms, CRM and sales pipeline into one source of truth.",
    tag: "Unified View",
  },
  {
    q: "Making Decisions Based On Assumptions?",
    s: "Replace gut feel with data-driven insight — reducing risk, removing internal debate and improving the quality of every business decision.",
    tag: "Evidence-Led Growth",
  },
];

const solutions = [
  {
    name: "Marketing Performance Analytics",
    outcome: "Measure campaign effectiveness and growth performance — by channel and by outcome.",
    services: [
      "Campaign Analytics",
      "Channel Performance",
      "Lead Source Tracking",
      "Attribution Reporting",
      "ROI Analysis",
    ],
  },
  {
    name: "Customer Journey Analytics",
    outcome: "Understand how prospects discover, engage with and convert into customers.",
    services: [
      "Journey Mapping",
      "Conversion Path Analysis",
      "Funnel Reporting",
      "Behaviour Tracking",
      "Engagement Insights",
    ],
  },
  {
    name: "Executive Dashboards",
    outcome: "Give leadership teams the visibility they need to lead with confidence.",
    services: [
      "Business Dashboards",
      "Marketing Dashboards",
      "Sales Dashboards",
      "Custom KPI Reporting",
      "Board-Level Reporting",
    ],
  },
  {
    name: "Conversion & Funnel Analytics",
    outcome: "Identify exactly where opportunities are won, lost or quietly leaking away.",
    services: [
      "Funnel Analysis",
      "Lead Conversion Tracking",
      "Landing Page Analytics",
      "Customer Drop-Off Analysis",
      "Performance Benchmarking",
    ],
  },
  {
    name: "Business Intelligence & Reporting",
    outcome: "Turn raw data into strategic insight that informs the next move — not just the last quarter.",
    services: [
      "KPI Monitoring",
      "Trend Analysis",
      "Growth Forecasting",
      "Custom Reports",
      "Decision Intelligence",
    ],
  },
  {
    name: "Data Integration & Measurement",
    outcome: "Build the connected data foundation that every insight, dashboard and decision relies on.",
    services: [
      "GA4 Setup",
      "Google Tag Manager",
      "CRM Reporting",
      "Cross-Platform Tracking",
      "Data Warehousing",
    ],
  },
];

const framework = [
  { step: "Collect", body: "Capture relevant marketing, sales and operational data across every channel, platform and customer touchpoint." },
  { step: "Connect", body: "Integrate platforms, CRMs and reporting systems into a unified, reliable data foundation." },
  { step: "Analyze", body: "Identify patterns, trends and opportunities hidden inside campaign, channel and journey data." },
  { step: "Interpret", body: "Convert raw analytics into business insight — framed around what leadership actually needs to decide." },
  { step: "Optimize", body: "Improve performance through informed decisions — sharpening spend, strategy and execution over time." },
];

const platforms = [
  "Google Analytics 4",
  "Google Tag Manager",
  "Looker Studio",
  "Power BI",
  "HubSpot",
  "Zoho CRM",
  "Salesforce",
  "Meta Business Suite",
  "Google Ads",
  "LinkedIn Analytics",
  "Custom Dashboards",
  "Data Warehouses",
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "Rapid distributor and partner growth across geographies with limited visibility into channel performance, lead quality and conversion economics.",
    strategy:
      "Implemented a unified analytics layer connecting marketing platforms, lead sources and CRM — alongside executive dashboards built around growth KPIs.",
    outcome:
      "Sharper visibility into channel ROI, improved cost-per-lead clarity and faster, more confident decisions across marketing and sales leadership.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "Multiple admission campaigns running in parallel with fragmented reporting, making it difficult to identify which channels delivered enrolment-worthy enquiries.",
    strategy:
      "Designed structured campaign tracking, lead source attribution and a counselling-focused dashboard that tied enquiries back to the channels generating real outcomes.",
    outcome:
      "Stronger marketing ROI, better-quality enquiries and clearer admission-season decision-making backed by data, not assumption.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "Global B2B audience with long sales cycles and limited insight into which markets, products and pages were driving qualified enquiries.",
    strategy:
      "Built integrated GA4, Tag Manager and reporting dashboards mapped to country, product line and buyer behaviour — enabling cleaner attribution.",
    outcome:
      "Better visibility into international demand, sharper product-level performance insight and a stronger evidence base for export-led growth.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "Strong industrial buyer interest with weak measurement of where enquiries originated and which content, pages and channels drove pipeline.",
    strategy:
      "Implemented structured tracking, journey-level analytics and a custom KPI dashboard aligned to sales and business development priorities.",
    outcome:
      "Cleaner reporting, defensible ROI conversations and a clearer line of sight from marketing investment to business outcomes.",
  },
];

const whyUs = [
  {
    t: "Business-Focused Reporting",
    b: "We build reporting around the decisions leadership actually needs to make — not around what tools happen to expose by default.",
  },
  {
    t: "Marketing + Technology Expertise",
    b: "We sit at the intersection of growth strategy and data engineering — so insight is both commercially meaningful and technically sound.",
  },
  {
    t: "Executive-Level Insights",
    b: "Dashboards designed for founders, CXOs and boards — clear, decision-grade and free of noise that doesn't move the business forward.",
  },
  {
    t: "Custom Dashboard Development",
    b: "We design dashboards around your KPIs, business model and growth questions — not generic templates pulled from a tool catalogue.",
  },
  {
    t: "Growth-Oriented Thinking",
    b: "Every report, dashboard and insight is framed around one question — how does this help the business grow faster, smarter or more profitably?",
  },
  {
    t: "Data-Driven Decision Making",
    b: "We help leadership teams build a culture of evidence-led decisions — reducing risk, internal debate and reliance on opinion.",
  },
  {
    t: "No Vanity Metrics. No Data Without Context.",
    b: "We measure what matters. Every number we report comes with the business context needed to act on it.",
  },
];

const faqs = [
  {
    q: "What is Growth Intelligence?",
    a: "Growth Intelligence is the practice of turning marketing, sales and operational data into business insight that drives smarter, faster decisions. It connects measurement, analytics and reporting around growth — not just traffic.",
  },
  {
    q: "How is it different from analytics?",
    a: "Analytics describes what happened. Growth Intelligence explains why it matters and what to do next — combining data, business context and strategy into insight that leadership can act on.",
  },
  {
    q: "Can you integrate with our CRM?",
    a: "Yes. We work with HubSpot, Zoho, Salesforce and most modern CRMs — connecting lead source, pipeline and revenue data so marketing performance can be measured against real business outcomes.",
  },
  {
    q: "Do you build executive dashboards?",
    a: "Yes. We design board-ready dashboards across business, marketing, sales and operational KPIs — built in Looker Studio, Power BI or custom platforms depending on your data stack.",
  },
  {
    q: "How do you measure marketing ROI?",
    a: "We define ROI based on your business model — enquiries, pipeline, revenue or customer lifetime value — and build attribution and reporting that ties marketing investment directly to those outcomes.",
  },
  {
    q: "Can you track the complete customer journey?",
    a: "Yes. We map and instrument the full journey — from first touchpoint to conversion and beyond — using GA4, Tag Manager, CRM data and custom event tracking to give you a connected view.",
  },
  {
    q: "What tools do you support?",
    a: "GA4, Google Tag Manager, Looker Studio, Power BI, HubSpot, Zoho, Salesforce, Meta Business Suite, Google Ads, LinkedIn Analytics and custom data warehouses. We choose the right stack for your business, not the loudest one.",
  },
];

/* ---------- page ---------- */
function AnalyticsGrowthIntelligencePage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Analytics & Growth Intelligence</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Growth Intelligence Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Measure what matters. Grow with <em className="text-brand not-italic">confidence.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Growth is difficult when decisions are based on assumptions. We help businesses
              connect marketing, sales and operational data to uncover insights that improve
              performance and accelerate growth — turning analytics into actionable intelligence
              for better visibility, better decisions and better outcomes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Request Analytics Audit <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Book Growth Intelligence Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Dashboards Built", v: "200+" },
                { k: "Focus", v: "Insight · ROI · Decisions" },
              ].map((m) => (
                <div key={m.k}>
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/55">{m.k}</p>
                  <p className="mt-2 font-serif text-2xl">{m.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="Analytics, business intelligence and executive dashboards"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Better visibility. Better decisions. Better outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Business Challenges We Help Solve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Start with the question leadership keeps asking. The intelligence follows.
              </h2>
              <p className="mt-4 text-dark/70">
                Analytics is not about more reports — it is about giving the business the
                visibility, context and confidence to make better decisions, faster.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {challenges.map((c) => (
                <div
                  key={c.q}
                  className="bg-canvas p-8 hover:bg-brand/10 transition-colors group"
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">
                    {c.tag}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-snug">{c.q}</h3>
                  <p className="mt-4 text-sm text-dark/70 leading-relaxed">{c.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. SOLUTIONS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                  Our Analytics & Growth Intelligence Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete intelligence practice — built around business outcomes.
                </h2>
              </div>
              <Link to="/services" className="text-sm font-semibold hover:text-brand">
                See full capabilities →
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <article
                  key={s.name}
                  className="group relative border border-dark/10 p-7 bg-canvas hover:border-dark transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{s.name}</h3>
                  <p className="mt-3 text-brand font-medium text-sm">{s.outcome}</p>
                  <ul className="mt-4 space-y-2">
                    {s.services.map((svc) => (
                      <li
                        key={svc}
                        className="text-sm text-dark/70 leading-relaxed flex items-start gap-2"
                      >
                        <span className="mt-1.5 size-1 rounded-full bg-brand shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. FRAMEWORK */}
      <Reveal>
        <section className="bg-dark text-canvas">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                The Ace360degree Growth Intelligence Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Collect, connect and convert data into decisions.
              </h2>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
              {framework.map((f, i) => (
                <div key={f.step} className="bg-dark p-7 group hover:bg-brand/10 transition-colors">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                    Stage {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl">{f.step}</h3>
                  <p className="mt-4 text-sm text-canvas/70 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 5. PLATFORMS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Tools & Platforms
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                The right insights require the right data foundation.
              </h2>
              <p className="mt-4 text-dark/70">
                We work across the modern analytics, CRM and reporting stack — choosing the right
                combination for your business, not a one-size template.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-dark/10 border border-dark/10">
              {platforms.map((p) => (
                <div
                  key={p}
                  className="bg-canvas p-6 text-center hover:bg-brand/10 transition-colors"
                >
                  <p className="font-serif text-lg">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. SUCCESS STORIES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Growth Intelligence Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Clearer data. Sharper decisions. Real business impact.
              </h2>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {stories.map((s) => (
                <article
                  key={s.client}
                  className="border border-dark/10 bg-canvas overflow-hidden hover:border-dark transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={s.img}
                      alt={`${s.client} analytics and growth intelligence case study`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-brand font-semibold">
                      Case Study
                    </p>
                    <h3 className="mt-2 font-serif text-3xl">{s.client}</h3>
                    <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Challenge</dt>
                        <dd className="mt-1 text-dark/75">{s.challenge}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Solution</dt>
                        <dd className="mt-1 text-dark/75">{s.strategy}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Outcome</dt>
                        <dd className="mt-1 text-dark/75">{s.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                View Full Case Studies <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose Ace360degree for analytics & growth intelligence.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine marketing strategy, business context and data expertise — built for
                organisations that want sharper decisions, not just prettier reports.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-brand"
              >
                Read our story <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-dark/10 border-y border-dark/10">
                {whyUs.map((w, i) => (
                  <li key={w.t} className="py-6 flex gap-6">
                    <span className="font-serif text-xl text-brand w-8 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl">{w.t}</h3>
                      <p className="mt-2 text-dark/70 text-sm leading-relaxed">{w.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. FAQ */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                FAQ
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Questions, answered.
              </h2>
              <p className="mt-5 text-dark/70">
                A clearer view of how analytics and growth intelligence translate into smarter
                business decisions.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-dark/10 border-y border-dark/10">
                {faqs.map((f) => (
                  <li key={f.q} className="py-6">
                    <h3 className="font-serif text-xl md:text-2xl">{f.q}</h3>
                    <p className="mt-2 text-dark/70 leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 9. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Turn Data Into Your Competitive Advantage
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Make smarter decisions. <em className="text-brand not-italic">Grow with confidence.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Build the visibility, intelligence and confidence needed to make smarter business
            decisions and accelerate growth — quarter after quarter.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
            >
              Request Analytics Audit <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-canvas/30 px-6 py-3.5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-canvas hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
            >
              Book Growth Intelligence Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
