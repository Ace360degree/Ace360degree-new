import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroMesh from "@/assets/hero-mesh.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseCosmos from "@/assets/case-cosmos.jpg";
import caseRexello from "@/assets/case-rexello.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";

export const Route = createFileRoute("/growth-marketing")({
  head: () => ({
    meta: [
      { title: "Growth Marketing Agency | Lead Generation, SEO & Performance — Ace360degree" },
      {
        name: "description",
        content:
          "Ace360degree is a growth marketing partner helping businesses solve customer acquisition, visibility, conversion and revenue challenges through SEO, performance marketing, automation and analytics.",
      },
      { property: "og:title", content: "Growth Marketing That Turns Visibility Into Revenue" },
      {
        property: "og:description",
        content:
          "Discovery-led growth marketing combining strategy, performance, content, automation and AI — built for measurable business outcomes.",
      },
      { property: "og:image", content: heroMesh },
    ],
  }),
  component: GrowthMarketingPage,
});

/* ---------------- Data ---------------- */

const challenges = [
  {
    q: "Need More Qualified Leads?",
    s: "Full-funnel demand systems combining SEO, paid media and lifecycle automation to deliver sales-ready pipeline — not vanity clicks.",
    tag: "Lead Generation",
  },
  {
    q: "Need Better Online Visibility?",
    s: "Topical authority, technical SEO and brand-led content that compounds — so your business shows up when buyers are actively searching.",
    tag: "SEO & Discoverability",
  },
  {
    q: "Need Better Conversion Rates?",
    s: "Behavioural research, landing-page experiments and friction removal to convert more of the traffic you already pay for.",
    tag: "Conversion Optimization",
  },
  {
    q: "Need More Customer Engagement?",
    s: "Content systems, social storytelling and community programs that turn one-time buyers into repeat customers and advocates.",
    tag: "Engagement",
  },
  {
    q: "Need Better Marketing ROI?",
    s: "Channel-level attribution, spend reallocation and continuous experimentation to move budget toward what actually drives revenue.",
    tag: "ROI & Attribution",
  },
  {
    q: "Need Predictable Growth?",
    s: "A growth operating system — playbooks, dashboards and rituals — that makes monthly performance forecastable, not accidental.",
    tag: "Predictable Pipeline",
  },
];

const solutions = [
  {
    name: "Search Engine Optimization",
    outcome: "Compounding organic visibility for high-intent buyers.",
    detail: "Technical, on-page and authority-led SEO engineered around revenue keywords, not vanity rankings.",
  },
  {
    name: "Performance Marketing",
    outcome: "Lower CAC, higher ROAS, scalable acquisition.",
    detail: "Paid search, social and programmatic campaigns continuously optimised against pipeline and revenue outcomes.",
  },
  {
    name: "Social Media Marketing",
    outcome: "Brand recall, community and inbound demand.",
    detail: "Always-on content systems that build category authority and convert audiences into customers.",
  },
  {
    name: "Content Marketing",
    outcome: "Authority that earns trust before the sales call.",
    detail: "Strategy-led editorial, thought leadership and SEO content built around the buyer journey.",
  },
  {
    name: "Email & WhatsApp Automation",
    outcome: "Higher lifetime value and faster sales cycles.",
    detail: "Lifecycle journeys, segmentation and conversational flows that nurture leads into repeat revenue.",
  },
  {
    name: "Conversion Rate Optimization",
    outcome: "More revenue from the same traffic.",
    detail: "Research, experimentation and landing-page systems that compound conversion improvements over time.",
  },
  {
    name: "Marketing Analytics & Reporting",
    outcome: "Clarity on what's working — and what to do next.",
    detail: "Unified dashboards, attribution and weekly insights so growth decisions are made on evidence, not opinion.",
  },
];

const framework = [
  { step: "Discover", body: "Audit the business, market, funnel and data to find the real growth bottleneck." },
  { step: "Attract", body: "Build visibility through SEO, paid media, content and brand to reach in-market buyers." },
  { step: "Convert", body: "Optimise landing pages, offers and journeys to turn intent into qualified pipeline." },
  { step: "Nurture", body: "Automate lifecycle communication across email, WhatsApp and remarketing to deepen trust." },
  { step: "Scale", body: "Reallocate spend, expand channels and operationalise what's working into a repeatable engine." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge: "Flat lead flow and unclear acquisition channel economics in a competitive fintech category.",
    solution: "Search-led demand engine, performance creative system and CRM automation aligned to sales.",
    outcome: "Sustained qualified-lead growth with sharper cost-per-acquisition month-over-month.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge: "Strong B2B product, limited digital discoverability beyond legacy distributor channels.",
    solution: "Industrial SEO, technical content authority and lead-gen funnels for global buyer markets.",
    outcome: "Inbound enquiries from new geographies and reduced dependence on outbound prospecting.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge: "Highly technical category with long sales cycles and weak online presence.",
    solution: "Industry-grade website, search visibility program and lead-nurture automation.",
    outcome: "Consistent inbound pipeline from procurement and engineering buyers.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge: "High ad spend, low enrolment conversion across paid campaigns.",
    solution: "Funnel rebuild, creative testing system and CRO across landing pages and lead forms.",
    outcome: "Materially higher enrolment rate at lower cost-per-admission.",
  },
];

const whyUs = [
  { t: "Discovery-Led Strategy", b: "We diagnose the growth bottleneck before prescribing channels." },
  { t: "Full-Funnel Thinking", b: "From visibility to conversion to retention — engineered as one system." },
  { t: "Marketing + Technology + AI", b: "Strategy executed with automation, data and AI built in, not bolted on." },
  { t: "Transparent Reporting", b: "Dashboards and rituals that connect every rupee to business outcomes." },
  { t: "Long-Term Growth Partnerships", b: "Most clients stay with us for years — because growth compounds." },
];

const industries = [
  {
    name: "Healthcare",
    context:
      "Patient acquisition, provider trust-building and compliant digital funnels for clinics, devices and wellness brands.",
  },
  {
    name: "Education",
    context:
      "Enrolment marketing, lead-nurture automation and brand authority for institutions, edtech platforms and training companies.",
  },
  {
    name: "Manufacturing & Industrial",
    context:
      "B2B discoverability, technical SEO and distributor-independent lead generation for engineering and industrial exporters.",
  },
  {
    name: "Fintech",
    context:
      "High-intent user acquisition, trust-building content and performance systems for payments, lending and insurtech.",
  },
  {
    name: "Real Estate",
    context:
      "Qualified buyer and investor lead flow, project launch campaigns and CRM automation for developers and brokers.",
  },
  {
    name: "Hospitality & Travel",
    context:
      "Direct-booking growth, seasonal demand systems and reputation-driven content for hotels, resorts and experience brands.",
  },
  {
    name: "E-Commerce & D2C",
    context:
      "Performance marketing at scale, retention automation and CRO to improve unit economics and repeat purchase rates.",
  },
  {
    name: "Professional Services",
    context:
      "Thought-leadership content, LinkedIn authority and high-ticket lead generation for consulting, legal and advisory firms.",
  },
  {
    name: "Logistics & Supply Chain",
    context:
      "Sales-enablement content, account-based visibility and digital presence for freight, warehousing and 3PL providers.",
  },
  {
    name: "SaaS & Technology",
    context:
      "Product-led growth, lifecycle automation and vertical SEO to reduce CAC and accelerate pipeline for tech companies.",
  },
  {
    name: "Lifestyle & Consumer",
    context:
      "Community-led brand building, influencer strategy and social commerce for fashion, wellness and consumer brands.",
  },
  {
    name: "Renewable Energy & Infrastructure",
    context:
      "B2G and B2B visibility, tender-driven content and stakeholder communication for green-tech and infrastructure firms.",
  },
];

/* ---------------- Page ---------------- */

function GrowthMarketingPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Growth Marketing</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Growth Marketing Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Growth marketing that turns <em className="text-brand not-italic">visibility</em> into{" "}
              <em className="text-brand not-italic">revenue.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              We help businesses solve customer acquisition, visibility, conversion and revenue
              challenges — through a discovery-led system that combines strategy, performance
              marketing, content, automation and AI.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Book Growth Discovery Call <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Get Free Growth Audit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Projects", v: "300+" },
                { k: "Retention", v: "5+ yrs" },
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
                src={heroMesh}
                alt="Growth marketing dashboard and analytics"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Diagnose the bottleneck. Engineer the system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGES */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Growth Challenges We Solve
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Start with the problem. The channels follow.
            </h2>
            <p className="mt-4 text-dark/70">
              Most marketing fails because it begins with tactics, not bottlenecks. We start by
              asking what's actually blocking growth — and design the program around that answer.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
            {challenges.map((c) => (
              <div key={c.q} className="bg-canvas p-8 hover:bg-brand/10 transition-colors group">
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

      {/* 3. SOLUTIONS */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Growth Marketing Solutions
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A connected stack — engineered for revenue, not activity.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-semibold hover:text-brand">
              See full service capabilities →
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
                <p className="mt-3 text-sm text-dark/70 leading-relaxed">{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FRAMEWORK */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              The Ace360degree Growth Framework
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              How we build growth — systematically.
            </h2>
            <p className="mt-4 text-canvas/70">
              A five-stage operating model that turns marketing from a cost centre into a
              measurable, repeatable growth engine.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
            {framework.map((f, i) => (
              <div key={f.step} className="bg-dark p-7 relative">
                <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-3xl">{f.step}</h3>
                <p className="mt-4 text-sm text-canvas/70 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STORIES */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Growth Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real businesses. Real growth bottlenecks. Real outcomes.
              </h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold hover:text-brand">
              View all growth stories →
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {stories.map((s) => (
              <article key={s.client} className="bg-canvas border border-dark/10 overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={s.img} alt={s.client} className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">
                    {s.client}
                  </p>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.2em] text-dark/50">Challenge</dt>
                      <dd className="mt-1 text-dark/80">{s.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.2em] text-dark/50">Solution</dt>
                      <dd className="mt-1 text-dark/80">{s.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.2em] text-dark/50">Outcome</dt>
                      <dd className="mt-1 font-serif text-lg text-dark">{s.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY ACE360DEGREE */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Why Ace360degree
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              A growth partner — not a vendor.
            </h2>
            <p className="mt-5 text-dark/70">
              Since 2009, we've helped businesses across industries grow through long-term
              partnerships, founder-led strategy and execution that connects marketing,
              technology and AI.
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

      {/* 7. INDUSTRIES */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Industries We Help Grow
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Category-aware growth, across sectors.
            </h2>
            <p className="mt-4 text-dark/70">
              We bring sector context to every engagement — buyer behaviour, sales cycles and
              compliance realities shape how we design the growth system.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <article
                key={ind.name}
                className="group border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors"
              >
                <h3 className="font-serif text-2xl">{ind.name}</h3>
                <p className="mt-3 text-sm text-dark/70 leading-relaxed">{ind.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Let's Build Predictable Growth
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Ready to accelerate <em className="text-brand not-italic">growth?</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Tell us where growth is stuck. We'll diagnose the bottleneck and show you what a
            partnership with Ace360degree could unlock over the next 90 days.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
            >
              Book Growth Discovery Call <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-canvas/30 px-6 py-3.5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-canvas hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
            >
              Request Growth Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
