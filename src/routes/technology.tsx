import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroTech from "@/assets/svc-technology.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseCosmos from "@/assets/case-cosmos.jpg";
import caseRexello from "@/assets/case-rexello.jpg";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology & Digital Transformation Partner | Systems, Platforms & AI — Ace360degree" },
      {
        name: "description",
        content:
          "Ace360degree builds business systems, digital platforms and cloud infrastructure that streamline operations, improve customer experiences and scale efficiently — for SMEs, enterprises and institutions.",
      },
      { property: "og:title", content: "Technology That Enables Transformation — Ace360degree" },
      {
        property: "og:description",
        content:
          "Business-first technology partnership: digital platforms, CRM & ERP, cloud infrastructure, mobile apps and business intelligence built for measurable outcomes.",
      },
      { property: "og:image", content: heroTech },
    ],
  }),
  component: TechnologyPage,
});

/* ---------------- Data ---------------- */

const challenges = [
  {
    q: "Need Better Customer Experiences?",
    s: "We design digital experiences that reduce friction, improve engagement and turn touchpoints into trust-building moments — across web, mobile and service channels.",
    tag: "Customer Experience",
  },
  {
    q: "Managing Too Many Manual Processes?",
    s: "Workflow automation, system integration and process digitisation that free your team from repetitive work and reduce errors at scale.",
    tag: "Operational Efficiency",
  },
  {
    q: "Struggling With Outdated Technology?",
    s: "Legacy modernisation, platform migration and cloud-first architecture that future-proofs your operations without disrupting daily business.",
    tag: "Legacy Modernisation",
  },
  {
    q: "Need Better Operational Visibility?",
    s: "Unified dashboards, business intelligence and real-time reporting that connect data across departments into one source of truth for faster decisions.",
    tag: "Data & Intelligence",
  },
  {
    q: "Planning Digital Transformation?",
    s: "End-to-end transformation roadmaps that align technology investments with business goals, compliance requirements and growth timelines.",
    tag: "Digital Transformation",
  },
  {
    q: "Looking To Scale?",
    s: "Scalable infrastructure, modular platforms and integration-ready architecture that grows with your business — from startup to enterprise.",
    tag: "Scalability",
  },
];

const solutions = [
  {
    name: "Websites & Digital Experiences",
    outcome: "First impressions that convert visitors into customers.",
    detail: "Performance-optimised websites, portals and web applications engineered for speed, accessibility and conversion — not just presentation.",
  },
  {
    name: "CRM & ERP Solutions",
    outcome: "Unified customer and operations data that drives decisions.",
    detail: "Implementation, customisation and integration of CRM and ERP systems that align sales, service and operations around a single customer view.",
  },
  {
    name: "Mobile App Development",
    outcome: "Customer engagement and workforce productivity in every pocket.",
    detail: "Native and cross-platform mobile applications for customer service, field operations, education and healthcare — built for real-world usage.",
  },
  {
    name: "E-Commerce & Digital Commerce",
    outcome: "Revenue channels that operate 24/7 with seamless fulfilment.",
    detail: "B2B and B2C commerce platforms with integrated inventory, payments, logistics and marketing automation for scalable digital revenue.",
  },
  {
    name: "Cloud Infrastructure & Integrations",
    outcome: "Reliable, secure and scalable systems without the overhead.",
    detail: "Cloud architecture, API integrations and middleware that connect your tech stack into one cohesive, high-performance ecosystem.",
  },
  {
    name: "Business Intelligence & Analytics",
    outcome: "Clarity from data — not dashboards for the sake of dashboards.",
    detail: "Custom analytics, reporting pipelines and KPI systems that surface the metrics that actually matter to growth and operations.",
  },
];

const framework = [
  { step: "Discover", body: "Map current systems, pain points, data flows and business objectives to define the real transformation opportunity." },
  { step: "Architect", body: "Design the platform blueprint, integration map and data model that align technology with business outcomes." },
  { step: "Build", body: "Develop platforms, applications and automations with iterative delivery, continuous testing and quality gates." },
  { step: "Integrate", body: "Connect existing systems, third-party tools and data sources into a unified, secure technology ecosystem." },
  { step: "Optimize", body: "Monitor performance, refine workflows and scale infrastructure based on real usage and business growth." },
];

const stories = [
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge: "Disjointed student management across spreadsheets, email and multiple tools — limiting scalability and visibility.",
    solution: "Integrated learning management platform with CRM, automated admissions workflows and parent communication system.",
    outcome: "Streamlined operations, improved student experience and measurable time savings for administrative staff.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge: "Rapid growth creating operational complexity across customer onboarding, service delivery and partner management.",
    solution: "Custom digital platform with automated workflows, partner portal and real-time operational dashboards.",
    outcome: "Faster customer onboarding, reduced operational overhead and improved service consistency at scale.",
  },
  {
    img: caseCosmos,
    client: "Vigna Electronics",
    challenge: "Legacy systems and manual processes slowing production planning, inventory management and customer response times.",
    solution: "Modernised digital infrastructure with ERP integration, inventory visibility and automated customer communication.",
    outcome: "Improved production efficiency, reduced lead times and better customer communication throughout the sales cycle.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge: "Global B2B buyers expecting digital self-service, real-time inventory and seamless order management.",
    solution: "B2B commerce platform with integrated product catalogue, dealer portal and backend ERP connectivity.",
    outcome: "New digital revenue channel, reduced order-processing time and expanded market reach across geographies.",
  },
];

const whyUs = [
  { t: "Business-First Thinking", b: "We start with your business objective, then choose the technology — never the reverse." },
  { t: "Marketing + Technology Expertise", b: "Platforms built with growth in mind: SEO, conversion, analytics and automation are designed in, not added later." },
  { t: "Custom Solutions", b: "Off-the-shelf when appropriate, bespoke when necessary. Every recommendation is matched to your scale and complexity." },
  { t: "Long-Term Support", b: "We don't hand over and disappear. Our partnerships include ongoing optimisation, training and platform evolution." },
  { t: "Future-Ready Platforms", b: "Architecture that anticipates growth, new channels and emerging technologies — so you're never rebuilding from scratch." },
];

const industries = [
  {
    name: "Healthcare",
    context:
      "Patient portals, appointment systems, EMR integration and compliant digital infrastructure for clinics, hospitals and health-tech providers.",
  },
  {
    name: "Education",
    context:
      "Learning management platforms, admissions automation, parent communication and digital campus systems for institutions and edtech companies.",
  },
  {
    name: "Manufacturing & Industrial",
    context:
      "ERP integration, inventory visibility, B2B commerce and production planning systems for engineering and manufacturing firms.",
  },
  {
    name: "Fintech",
    context:
      "Secure digital platforms, customer onboarding automation, compliance workflows and partner integration for payments, lending and insurtech.",
  },
  {
    name: "Real Estate",
    context:
      "Property management systems, CRM for brokers, digital transaction workflows and investor portals for developers and agencies.",
  },
  {
    name: "Hospitality & Travel",
    context:
      "Booking engines, guest experience platforms, loyalty systems and operational dashboards for hotels, resorts and travel brands.",
  },
  {
    name: "E-Commerce & D2C",
    context:
      "Scalable commerce platforms, inventory-management systems, payment integration and marketing-automation connectivity for retail brands.",
  },
  {
    name: "Professional Services",
    context:
      "Client portals, project-management systems, time tracking and knowledge management for consulting, legal and advisory firms.",
  },
  {
    name: "Logistics & Supply Chain",
    context:
      "Fleet and warehouse management, order-tracking systems, partner portals and analytics dashboards for 3PL and freight providers.",
  },
  {
    name: "SaaS & Technology",
    context:
      "Product platforms, API ecosystems, customer-success tooling and analytics infrastructure for software and technology companies.",
  },
  {
    name: "Lifestyle & Consumer",
    context:
      "Brand platforms, subscription systems, community features and mobile experiences for fashion, wellness and consumer brands.",
  },
  {
    name: "Renewable Energy & Infrastructure",
    context:
      "Asset-management platforms, IoT data integration, stakeholder reporting and field-service systems for green-tech and infrastructure firms.",
  },
];

/* ---------------- Page ---------------- */

function TechnologyPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Technology & Platforms</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Technology & Digital Transformation Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Build systems. Enable <em className="text-brand not-italic">transformation.</em> Scale{" "}
              <em className="text-brand not-italic">operations.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              We help businesses solve operational inefficiencies, outdated systems and customer
              experience gaps — through business-first technology that connects people, processes
              and data.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book Technology Discovery Call <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Get Free Systems Audit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Platforms", v: "200+" },
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
                src={heroTech}
                alt="Technology platforms and digital transformation"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Technology serves the business. Not the other way around.</p>
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
              Business Challenges We Help Solve
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Start with the business problem. The technology follows.
            </h2>
            <p className="mt-4 text-dark/70">
              Technology investments fail when they start with features, not outcomes. We begin by
              understanding what's limiting your business — then architect the right platform,
              integration or automation to solve it.
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
                Technology Solutions
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Business systems engineered for outcomes — not just functionality.
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
              The Ace360degree Technology Framework
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              How we build systems — systematically.
            </h2>
            <p className="mt-4 text-canvas/70">
              A five-stage delivery model that turns technology from an expense into a strategic
              business capability.
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
                Technology Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real businesses. Real transformation. Real outcomes.
              </h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold hover:text-brand">
              View all transformation stories →
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
              A technology partner — not a vendor.
            </h2>
            <p className="mt-5 text-dark/70">
              Since 2009, we've built platforms and systems that outlast trends. Our clients stay
              because we think like operators, not just developers — and because we build technology
              that actually moves business metrics.
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
              Industries We Help Transform
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Sector-aware technology, built for real-world complexity.
            </h2>
            <p className="mt-4 text-dark/70">
              We bring industry context to every build — compliance requirements, operational
              realities and customer expectations shape how we architect each platform.
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
            Let's Build Your Technology Foundation
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Ready to enable <em className="text-brand not-italic">transformation?</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Tell us where your operations, systems or customer experience need to improve. We'll
            diagnose the gap and show you what a technology partnership with Ace360degree could
            unlock over the next 90 days.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Technology Discovery Call <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Systems Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
