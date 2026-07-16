import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import caseMos from "@/assets/MosHeroy1.jpg";
import heroMesh from "@/assets/hero-meshy1.jpg";
import bannerMos from "@/assets/bannerMos1.jpg";

export const Route = createFileRoute("/case-mos-utility")({
  head: () => ({
    meta: [
      { title: "MOS Utility Case Study | Branding, Communication & Growth — Ace360degree" },
      {
        name: "description",
        content:
          "How Ace360degree partnered with MOS Utility Limited — one of India's leading assisted e-governance platforms — to transform brand, communication, technology and growth systems.",
      },
      { property: "og:title", content: "MOS Utility — A Business Transformation Case Study" },
      {
        property: "og:description",
        content:
          "A long-term strategic partnership across branding, communication, marketing and technology — built to scale one of India's largest assisted e-governance platforms.",
      },
      { property: "og:image", content: caseMos },
    ],
  }),
  component: MosCaseStudyPage,
});

/* ---------------- Data ---------------- */

const overviewFacts = [
  { k: "Client", v: "MOS Utility Limited" },
  { k: "Industry", v: "Fintech · Assisted E-Governance" },
  { k: "Engagement", v: "Long-Term Strategic Partnership" },
  { k: "Geography", v: "Pan-India Retail Network" },
  { k: "Partnership Since", v: "Multi-Year" },
  { k: "Scope", v: "Brand · Communication · Marketing · Technology" },
];

const challenges = [
  {
    t: "Fragmented Brand Perception",
    b: "Rapid product expansion across BFSI, travel, utilities and e-governance had outpaced a cohesive brand narrative — the market saw services, not a single category leader.",
  },
  {
    t: "Inconsistent Corporate Communication",
    b: "Investor, retailer, channel-partner and consumer audiences were each receiving disjointed messaging across decks, collateral and digital touchpoints.",
  },
  {
    t: "Underleveraged Digital Presence",
    b: "Website, content and social properties did not reflect the scale, credibility or listed-company stature MOS Utility had achieved.",
  },
  {
    t: "Limited Demand Predictability",
    b: "Acquisition of retailers and distributors depended on field teams; digital channels were not yet engineered to produce a consistent qualified pipeline.",
  },
  {
    t: "Scaling Technology Foundations",
    b: "Operational platforms needed to evolve to support a growing retailer network, multi-service catalogue and faster go-to-market cycles.",
  },
  {
    t: "Stakeholder Trust at Scale",
    b: "As a listed entity, every public-facing asset — from annual communication to campaign creative — required a higher bar of clarity, governance and consistency.",
  },
];

const approach = [
  {
    step: "Discover",
    body: "Deep-dive workshops with leadership across business units to map audiences, value propositions, competitive context and growth bottlenecks.",
  },
  {
    step: "Define",
    body: "Codified the brand architecture, corporate narrative and category positioning — one MOS Utility story across all stakeholders.",
  },
  {
    step: "Design",
    body: "Engineered a unified visual, verbal and digital system spanning brand identity, communication, web and campaign assets.",
  },
  {
    step: "Deploy",
    body: "Rolled out platforms, campaigns and content systems in measured phases — protecting business continuity while accelerating visibility.",
  },
  {
    step: "Drive",
    body: "Ongoing strategic advisory, performance marketing, content and analytics — operating as an extended brand and growth team.",
  },
];

const services = [
  {
    name: "Brand & Creative Systems",
    points: [
      "Brand narrative & corporate positioning",
      "Visual identity refinement & guidelines",
      "Sales, investor & retailer collateral",
    ],
  },
  {
    name: "Corporate Communication",
    points: [
      "Leadership & investor communication",
      "Annual reports and key corporate documents",
      "Stakeholder messaging frameworks",
    ],
  },
  {
    name: "Digital Platforms & Technology",
    points: [
      "Corporate website strategy & UX",
      "Platform-grade design & performance",
      "Scalable content and CMS architecture",
    ],
  },
  {
    name: "Growth Marketing",
    points: [
      "SEO, performance & lifecycle campaigns",
      "Retailer & partner acquisition funnels",
      "Campaign creative & landing systems",
    ],
  },
  {
    name: "Content & Social",
    points: [
      "Always-on content calendar",
      "Thought leadership & category storytelling",
      "Social media authority programs",
    ],
  },
  {
    name: "Strategic Advisory",
    points: [
      "Quarterly growth & brand reviews",
      "Cross-functional marketing roadmap",
      "Measurement, dashboards & insights",
    ],
  },
];

const impact = [
  { v: "Unified", k: "One coherent brand across every stakeholder touchpoint" },
  { v: "Scalable", k: "Digital and marketing systems built to grow with the business" },
  { v: "Predictable", k: "Stronger inbound visibility and qualified retailer pipeline" },
  { v: "Listed-Grade", k: "Communication and creative aligned to public-company standards" },
  { v: "Faster GTM", k: "Reusable systems shortened campaign and launch cycles" },
  { v: "Long-Term", k: "A multi-year partnership compounding brand and growth equity" },
];

const timeline = [
  { phase: "Phase 01", title: "Brand & Narrative Foundation", body: "Positioning, messaging architecture and visual system aligned across business units." },
  { phase: "Phase 02", title: "Digital Platform Transformation", body: "Corporate website rebuild with a scalable, performance-led content architecture." },
  { phase: "Phase 03", title: "Communication & Collateral Systems", body: "Investor, corporate and partner communication templates and documents." },
  { phase: "Phase 04", title: "Growth Marketing Engine", body: "Always-on SEO, performance and content systems for retailer and partner acquisition." },
  { phase: "Phase 05", title: "Strategic Advisory & Optimisation", body: "Ongoing reviews, dashboards and roadmap — operating as an extended team." },
];

const whyItMatters = [
  "Demonstrates Ace360degree's ability to support a listed enterprise across brand, communication, technology and growth — under one strategic roof.",
  "Shows how a discovery-led approach can transform fragmented marketing activity into a unified, measurable growth system.",
  "Proves the strength of long-term partnerships: compounding brand equity, communication clarity and pipeline quality over years, not campaigns.",
];

const snapshot = [
  { k: "Sector", v: "Fintech & E-Governance" },
  { k: "Audience", v: "Retailers · Distributors · Consumers · Investors" },
  { k: "Footprint", v: "Pan-India" },
  { k: "Engagement Model", v: "Strategic Retainer + Project Sprints" },
];

const capabilities = [
  "Brand Strategy",
  "Visual Identity Systems",
  "Corporate Communication",
  "Investor Collateral",
  "UX & Product Design",
  "Web Engineering",
  "CMS & Content Architecture",
  "SEO & Performance Marketing",
  "Lifecycle & Marketing Automation",
  "Social & Content Systems",
  "Analytics & Dashboards",
  "Strategic Advisory",
];

const expertise = [
  { t: "Cross-Disciplinary Delivery", b: "Brand, communication, technology and growth — orchestrated by one accountable partner." },
  { t: "Enterprise-Grade Governance", b: "Processes and quality standards aligned to a listed company's reputation and pace." },
  { t: "Outcome-Led Operating Model", b: "Every workstream tied back to brand equity, pipeline or operational efficiency." },
  { t: "Long-Term Strategic Posture", b: "Multi-year partnership built on trust, continuity and measurable progress." },
];

/* ---------------- Page ---------------- */

function MosCaseStudyPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <a href="/portfolio" className="hover:text-brand">Case Studies</a>
            <span className="mx-1">/</span>
            <span className="text-dark">MOS Utility Limited</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Case Study · Strategic Partnership
            </span>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Transforming digital presence, corporate communication & growth systems for{" "}
              <em className="text-brand not-italic">MOS Utility Limited.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl">
              How Ace360degree partnered with one of India's leading assisted e-governance
              platforms to build a unified brand, listed-grade communication and a scalable
              growth engine across business units.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Discuss A Similar Engagement <span aria-hidden>→</span>
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Explore More Case Studies <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-dark/55">Sector</p>
                <p className="mt-2 font-serif text-xl">Fintech</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-dark/55">Engagement</p>
                <p className="mt-2 font-serif text-xl">Multi-Year</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-dark/55">Scope</p>
                <p className="mt-2 font-serif text-xl">Full-Stack</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={caseMos} alt="MOS Utility case study" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Engagement Posture</p>
                <p className="font-serif text-xl mt-1">Long-term partner. Not a project vendor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT OVERVIEW */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Client Overview
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              A category leader in assisted e-governance.
            </h2>
            <p className="mt-5 text-dark/70">
              MOS Utility Limited is a listed fintech enabling assisted commerce and
              e-governance services across India through an extensive retailer and distributor
              network — spanning BFSI, travel, utilities, government services and more.
            </p>
            <p className="mt-4 text-dark/70">
              As the business scaled across categories and geographies, the brand, communication
              and digital systems needed to evolve to match the organisation's ambition and
              listed-company stature.
            </p>
          </div>
          <div className="lg:col-span-7">
            <dl className="grid sm:grid-cols-2 gap-px bg-dark/10 border border-dark/10">
              {overviewFacts.map((f) => (
                <div key={f.k} className="bg-canvas p-6">
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-dark/50">{f.k}</dt>
                  <dd className="mt-2 font-serif text-xl">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 3. CHALLENGES */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Business Challenges
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              The strategic problems we set out to solve.
            </h2>
            <p className="mt-4 text-dark/70">
              The engagement was not about producing assets — it was about resolving fundamental
              brand, communication, technology and growth bottlenecks holding back a scaling
              listed business.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
            {challenges.map((c) => (
              <div key={c.t} className="bg-canvas p-7">
                <h3 className="font-serif text-2xl leading-snug">{c.t}</h3>
                <p className="mt-3 text-sm text-dark/70 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC APPROACH */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Our Strategic Approach
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              A five-phase operating model — built around outcomes.
            </h2>
            <p className="mt-4 text-canvas/70">
              We approached MOS Utility as a transformation partner — sequencing brand,
              communication, technology and growth in a way that compounded value over time.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
            {approach.map((f, i) => (
              <div key={f.step} className="bg-dark p-7">
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

      {/* 5. SERVICES DELIVERED */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Services Delivered
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              One partner. Multiple disciplines. One outcome.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <article
                key={s.name}
                className="border border-dark/10 p-7 bg-canvas hover:border-dark transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{s.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-dark/75">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-brand">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS IMPACT */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Business Impact
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Outcomes that compounded — quarter after quarter.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
            {impact.map((m) => (
              <div key={m.v} className="bg-canvas p-8">
                <p className="font-serif text-4xl text-brand">{m.v}</p>
                <p className="mt-3 text-sm text-dark/70 leading-relaxed">{m.k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIMELINE */}
      <section className="bg-[#fbfaf7]">
  <div className="mx-auto max-w-[1540px] px-8 py-14 md:px-10 lg:px-12">
    <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
      {/* Left content */}
      <div className="max-w-[760px]">
        <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
          Key Deliverables Timeline
        </span>

        <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
          How the partnership unfolded.
        </h2>

        <ol className="relative ml-3 mt-10 border-l border-[#dedbd5]">
          {timeline.map((item, index) => (
            <li
              key={item.phase}
              className="relative pb-8 pl-8 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-brand" />

              <p className="text-[8px] font-semibold uppercase tracking-[0.34em] text-[#f2a400]">
                {item.phase}
              </p>

              <h3 className="mt-2 font-serif text-2xl">
                {item.title}
              </h3>

              <p className="mt-2 text-dark/70 text-sm max-w-2xl leading-relaxed">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Right image */}
      <div className="flex justify-center lg:justify-end">
        <div className="w-full max-w-[690px] overflow-hidden rounded-[24px] bg-white">
          <img
            src={bannerMos}
            alt="MOS Utility business presentation and collaboration visual"
            className="block h-[300px] w-full object-cover object-center sm:h-[360px] lg:h-[430px]"
            width={1400}
            height={860}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 8. WHY THIS PROJECT MATTERS */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Why This Project Matters
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              More than a case study — a partnership blueprint.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-dark/10 border-y border-dark/10">
              {whyItMatters.map((p, i) => (
                <li key={i} className="py-6 flex gap-6">
                  <span className="font-serif text-xl text-brand w-8 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-dark/80 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. CLIENT SNAPSHOT */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={heroMesh} alt="MOS Utility snapshot" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Client Snapshot
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              At a glance.
            </h2>
            <dl className="mt-8 grid sm:grid-cols-2 gap-px bg-dark/10 border border-dark/10">
              {snapshot.map((s) => (
                <div key={s.k} className="bg-canvas p-6">
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-dark/50">{s.k}</dt>
                  <dd className="mt-2 font-serif text-xl">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 10. TECHNOLOGIES & CAPABILITIES */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Technologies & Capabilities Utilized
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              The capability stack behind the partnership.
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {capabilities.map((c) => (
              <span
                key={c}
                className="border border-dark/15 px-4 py-2 text-sm hover:border-dark hover:bg-light transition"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. EXPERTISE DEMONSTRATED */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Ace360degree Expertise Demonstrated
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              What this engagement proves about how we work.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {expertise.map((e, i) => (
              <article key={e.t} className="border border-dark/10 bg-canvas p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{e.t}</h3>
                <p className="mt-3 text-sm text-dark/70 leading-relaxed">{e.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Build Your Own Transformation Story
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Looking for a partner who can{" "}
            <em className="text-brand not-italic">scale every dimension</em> of your business?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            From brand to communication, technology to growth — Ace360degree partners with
            leadership teams to turn ambition into a measurable operating system.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book A Strategic Consultation <span aria-hidden>→</span>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              View More Case Studies <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
