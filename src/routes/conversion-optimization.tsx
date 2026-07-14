import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-heroy5.jpg";
import caseAmigo from "@/assets/case-amigoy6.jpg";
import caseMos from "@/assets/case-mosy6.jpg";
import caseRexello from "@/assets/case-rexelloy6.jpg";

export const Route = createFileRoute("/conversion-optimization")({
  component: ConversionOptimizationPage,
  head: () => ({
    meta: [
      {
        title:
          "Conversion Rate Optimization Services Mumbai | CRO Agency | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Conversion Optimization Partner helping businesses generate more leads, enquiries, appointments and sales from their existing traffic through data-driven CRO, UX optimisation and A/B testing.",
      },
      {
        property: "og:title",
        content: "Conversion Rate Optimization Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Turn more visitors into customers. Improve conversion rates, reduce friction and grow revenue from the traffic you already have.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/conversion-optimization" },
    ],
    links: [{ rel: "canonical", href: "/conversion-optimization" }],
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
    q: "Getting Traffic But Few Leads?",
    s: "Identify the friction points stopping visitors from converting — and improve visitor-to-lead performance without adding to your media spend.",
    tag: "Lead Conversion",
  },
  {
    q: "High Bounce Rates?",
    s: "Reduce drop-offs through clearer messaging, faster experiences and a structured visitor journey that holds attention from the first scroll.",
    tag: "Engagement",
  },
  {
    q: "Landing Pages Not Converting?",
    s: "Rework messaging, layout, calls-to-action and form design around how your real audience evaluates, decides and acts.",
    tag: "Landing Page Performance",
  },
  {
    q: "Leads Dropping Off Mid-Journey?",
    s: "Map the customer journey end-to-end and remove the friction that loses high-intent prospects between interest and enquiry.",
    tag: "Journey Optimisation",
  },
  {
    q: "Paying More For Traffic Every Year?",
    s: "Improve conversion efficiency so every visitor — paid, organic or referred — delivers more business value than the year before.",
    tag: "Marketing ROI",
  },
  {
    q: "Unsure Why Visitors Aren't Taking Action?",
    s: "Use behaviour data, heatmaps and structured analysis to replace assumptions with evidence — and act on what users actually do.",
    tag: "Data-Driven Insight",
  },
];

const solutions = [
  {
    name: "Website Conversion Optimization",
    outcome: "Improve performance across the key moments that drive enquiries and sales.",
    services: [
      "Conversion Audits",
      "Lead Capture Optimization",
      "CTA Improvements",
      "Navigation Optimization",
      "UX Reviews",
    ],
  },
  {
    name: "Landing Page Optimization",
    outcome: "Increase the ROI of every campaign that sends traffic to a dedicated page.",
    services: [
      "Landing Page Strategy",
      "A/B Testing",
      "Conversion-Focused Design",
      "Messaging Optimization",
      "Lead Form Optimization",
    ],
  },
  {
    name: "User Experience Optimization",
    outcome: "Remove friction and create experiences that feel effortless to use.",
    services: [
      "Journey Mapping",
      "Behaviour Analysis",
      "Heatmaps",
      "User Testing",
      "Mobile Experience Optimization",
    ],
  },
  {
    name: "Lead Generation Optimization",
    outcome: "Increase enquiry, contact and appointment rates from the same traffic.",
    services: [
      "Lead Form Strategy",
      "Multi-Step Forms",
      "Call Tracking",
      "Conversion Tracking",
      "Appointment Booking Optimization",
    ],
  },
  {
    name: "E-Commerce Conversion Optimization",
    outcome: "Improve product discovery, cart completion and overall purchase rates.",
    services: [
      "Product Page Optimization",
      "Cart Optimization",
      "Checkout Optimization",
      "Trust Signal Improvements",
      "Purchase Journey Optimization",
    ],
  },
  {
    name: "Analytics & Experimentation",
    outcome: "Make every optimisation decision based on real user behaviour and data.",
    services: [
      "A/B Testing",
      "Behaviour Tracking",
      "GA4 Analysis",
      "Funnel Analysis",
      "Performance Dashboards",
    ],
  },
];

const framework = [
  { step: "Analyze", body: "Understand current conversion performance across pages, devices, audiences and traffic sources — establishing a clear baseline." },
  { step: "Identify", body: "Pinpoint friction points, drop-offs and high-leverage opportunities using behavioural data, analytics and journey mapping." },
  { step: "Optimize", body: "Implement strategic improvements to messaging, design, forms, journeys and calls-to-action — guided by evidence, not opinion." },
  { step: "Test", body: "Validate decisions through structured A/B and multivariate testing — confirming what genuinely moves the conversion needle." },
  { step: "Scale", body: "Roll out winning patterns across the wider site, funnels and campaigns — turning isolated wins into systemic growth." },
];

const analyzed = [
  "Website Experience",
  "Landing Pages",
  "Lead Forms",
  "Calls-To-Action",
  "Customer Journeys",
  "Mobile Experience",
  "Checkout Flows",
  "Appointment Systems",
  "Marketing Funnels",
];

const stories = [
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "Strong admission-season traffic but inconsistent enquiry conversion across landing pages, with unclear messaging hierarchy and weak lead capture.",
    strategy:
      "Restructured landing page narrative, simplified lead forms, sharpened calls-to-action and aligned page experience to admission decision triggers.",
    outcome:
      "Improved enquiry generation from existing campaign traffic and a stronger, more predictable funnel into the counselling team.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "Growing digital traffic with limited visibility into where leads were lost, what was driving conversions and where intent was being wasted.",
    strategy:
      "Implemented structured conversion tracking, GA4 funnel analysis and journey-level optimisation across the distributor acquisition flow.",
    outcome:
      "Cleaner lead quality, sharper conversion visibility and a measurable lift in qualified enquiries reaching the sales team.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "Global B2B audience landing across multiple pages with weak engagement signals and limited capture of high-intent enquiries.",
    strategy:
      "Optimised key product and category pages, refined enquiry forms and strengthened trust signals across the buyer journey.",
    outcome:
      "Higher engagement, stronger time-on-site and a meaningful uplift in lead capture from existing global traffic.",
  },
];

const whyUs = [
  {
    t: "Business Outcome Focus",
    b: "We optimise for leads, enquiries, bookings and revenue — not vanity metrics or design awards. Every change is justified by impact.",
  },
  {
    t: "Marketing + UX Expertise",
    b: "We bridge customer insight, marketing strategy and experience design — so optimisation works commercially and feels right to the user.",
  },
  {
    t: "Data-Driven Decisions",
    b: "Every recommendation is grounded in analytics, behaviour and evidence. No HiPPO opinions. No subjective redesigns.",
  },
  {
    t: "Testing & Optimisation Culture",
    b: "We treat the website as a living system — continuously measured, tested and refined to compound performance over time.",
  },
  {
    t: "Growth-Oriented Thinking",
    b: "We frame CRO as a growth lever, not a cost line — improving the ROI of every rupee already invested in traffic and marketing.",
  },
  {
    t: "Continuous Improvement Approach",
    b: "Conversion is never done. We build optimisation roadmaps that keep improving performance long after the first uplift.",
  },
  {
    t: "No Guesswork. No Design Changes Without Data.",
    b: "We do not redesign for the sake of it. Changes are made because evidence says they will improve a business outcome.",
  },
];

const faqs = [
  {
    q: "What is Conversion Rate Optimization?",
    a: "CRO is the structured practice of improving the percentage of visitors who take meaningful action on your website — enquiries, bookings, appointments, downloads or purchases. The goal is more business outcomes from the same traffic.",
  },
  {
    q: "How much can CRO improve results?",
    a: "Results vary by industry, baseline performance and traffic quality — but well-executed CRO programmes typically deliver compounding uplifts in lead volume, lead quality and revenue without increasing media spend.",
  },
  {
    q: "Do I need more traffic before CRO?",
    a: "Not necessarily. If your existing traffic is being underutilised, CRO is often the highest-ROI investment you can make — improving conversion before scaling spend ensures you do not amplify a leaky funnel.",
  },
  {
    q: "How do you measure conversions?",
    a: "We define what a meaningful conversion looks like for your business — enquiries, calls, bookings, sales — and implement structured tracking across GA4, ad platforms and CRM so every change is measured against real outcomes.",
  },
  {
    q: "Do you perform A/B testing?",
    a: "Yes. Where traffic volume allows, we run A/B and multivariate tests to validate changes scientifically — ensuring decisions are based on statistically meaningful evidence, not assumption.",
  },
  {
    q: "Can CRO improve ROI from advertising?",
    a: "Absolutely. Improving on-site conversion directly improves the return on every ad campaign — lowering cost per lead, cost per acquisition and improving overall marketing efficiency.",
  },
  {
    q: "How long does optimization take?",
    a: "Initial audit and quick-win improvements usually deliver visible impact within the first 30–60 days. Sustained CRO is an ongoing programme — measured in months and quarters, not weeks.",
  },
];

/* ---------- page ---------- */
function ConversionOptimizationPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Conversion Rate Optimization</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Conversion Optimization Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Turn more visitors into <em className="text-brand not-italic">customers.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Generating traffic is only half the equation. The real opportunity lies in turning
              visitors into leads, customers and long-term relationships. We help businesses identify
              friction points, optimise customer journeys and improve conversion performance — so you
              get more results from the traffic you already have.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Request CRO Audit <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Conversion Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Funnels Optimised", v: "150+" },
                { k: "Focus", v: "Leads · Sales · ROI" },
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
                alt="Conversion rate optimization and customer journey analysis"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">More conversions. Without increasing spend.</p>
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
                Start with the gap in your results. The optimisation follows.
              </h2>
              <p className="mt-4 text-dark/70">
                CRO is not about cosmetic changes — it is about closing the distance between the
                traffic you have and the business outcomes you should be getting from it.
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
                  Our CRO Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete conversion practice — built around business outcomes.
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

      {/* 4. CONVERSION FRAMEWORK */}
      <Reveal>
        <section className="bg-dark text-canvas">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                The Ace360degree Conversion Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Analyze, optimise and scale — without guesswork.
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

      {/* 5. WHAT WE ANALYZE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                What We Analyze
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Every click should have a purpose. Every visitor should have a path.
              </h2>
              <p className="mt-4 text-dark/70">
                We look at the entire conversion ecosystem — not just one page — to find where intent
                is being created, lost or quietly leaking away.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {analyzed.map((p) => (
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
                CRO Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Better journeys. Higher conversions. Measurable business outcomes.
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
                      alt={`${s.client} conversion optimization case study`}
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
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
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
                Why businesses choose Ace360degree for CRO.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine marketing strategy, customer insight and experience design — built for
                organisations that want stronger conversion performance and measurable growth, not
                just a redesigned website.
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
                A clearer view of how Conversion Rate Optimization works — and how it improves
                business outcomes from your existing traffic.
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
            More Results. Same Traffic. Better Business.
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Get more results from the <em className="text-brand not-italic">traffic you already have.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Improve conversion rates, reduce friction and create better customer experiences that
            support sustainable business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Request CRO Audit <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Book Conversion Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
