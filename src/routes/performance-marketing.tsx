import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.a3.jpg";

export const Route = createFileRoute("/performance-marketing")({
  component: PerformanceMarketingPage,
  head: () => ({
    meta: [
      {
        title:
          "Performance Marketing & Customer Acquisition Services in Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps businesses acquire customers profitably through data-driven performance marketing across Google, Meta, LinkedIn and emerging platforms. Lead generation, conversion optimization and scalable revenue growth.",
      },
      {
        property: "og:title",
        content: "Customer Acquisition Partner — Performance Marketing | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Turn marketing spend into business growth with data-driven advertising, conversion optimization and full-funnel customer acquisition systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/performance-marketing" },
    ],
    links: [{ rel: "canonical", href: "/performance-marketing" }],
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
    q: "Need More Qualified Leads?",
    s: "Generate enquiries from high-intent audiences actively searching for solutions like yours — not just volume, but quality.",
    tag: "Lead Generation",
  },
  {
    q: "Spending Too Much Per Lead?",
    s: "Improve efficiency and reduce acquisition costs through continuous optimization, better targeting and smarter bidding strategies.",
    tag: "Cost Efficiency",
  },
  {
    q: "Getting Clicks But No Conversions?",
    s: "Optimize landing pages, funnels and customer journeys so traffic turns into measurable business outcomes.",
    tag: "Conversion",
  },
  {
    q: "Scaling Campaigns Becoming Difficult?",
    s: "Build repeatable growth systems that maintain performance as budgets increase — without diminishing returns.",
    tag: "Scalability",
  },
  {
    q: "Need Better Lead Quality?",
    s: "Attract customers that are more likely to convert through precise audience segmentation and intent-based targeting.",
    tag: "Lead Quality",
  },
  {
    q: "Unsure What's Working?",
    s: "Gain complete visibility into marketing performance with transparent reporting, attribution modelling and actionable insights.",
    tag: "Measurement",
  },
];

const solutions = [
  {
    name: "Google Ads",
    outcome: "Capture high-intent prospects actively searching for solutions.",
    services: ["Search Ads", "Display Ads", "Performance Max", "YouTube Ads", "Remarketing"],
  },
  {
    name: "Meta Ads",
    outcome: "Reach and convert audiences through Facebook and Instagram.",
    services: ["Lead Generation Campaigns", "Conversion Campaigns", "Retargeting", "Catalog Ads", "Awareness Campaigns"],
  },
  {
    name: "LinkedIn Ads",
    outcome: "Connect with decision-makers and B2B audiences.",
    services: ["Lead Generation", "Thought Leadership", "Account-Based Marketing", "Corporate Campaigns"],
  },
  {
    name: "E-Commerce Advertising",
    outcome: "Drive product discovery and sales at scale.",
    services: ["Shopping Campaigns", "Catalog Ads", "Feed Optimization", "Conversion Tracking"],
  },
  {
    name: "Remarketing & Lead Nurturing",
    outcome: "Recover lost opportunities and improve conversion rates.",
    services: ["Remarketing Campaigns", "Audience Segmentation", "Email Automation", "WhatsApp Automation"],
  },
  {
    name: "Conversion Optimization",
    outcome: "Turn more traffic into customers.",
    services: ["Landing Page Optimization", "Funnel Analysis", "A/B Testing", "User Journey Improvements"],
  },
];

const framework = [
  { step: "Discover", body: "Understand business goals, customer profiles and acquisition opportunities across channels and markets." },
  { step: "Target", body: "Reach the right audience at the right time with precise segmentation, intent signals and platform-specific strategies." },
  { step: "Convert", body: "Create high-converting customer journeys through optimized landing pages, clear messaging and seamless experiences." },
  { step: "Optimize", body: "Improve performance continuously through data analysis, A/B testing, bid management and creative refinement." },
  { step: "Scale", body: "Expand successful campaigns profitably — increasing volume while protecting efficiency and return on ad spend." },
];

const trackingTech = [
  "Google Analytics 4",
  "Google Ads",
  "Meta Business Manager",
  "LinkedIn Campaign Manager",
  "CRM Integration",
  "Call Tracking",
  "Conversion Tracking",
  "Marketing Dashboards",
];

const stories = [
  {
    client: "Amigo Academy",
    challenge: "Low enquiry volume and high cost per lead in a competitive education market with limited digital presence.",
    solution: "Integrated Google Ads and Meta lead generation campaigns with landing page optimization and automated follow-up workflows.",
    outcome: "Significant increase in qualified enquiries, reduced cost per lead and improved admissions conversion rate.",
  },
  {
    client: "MOS Utility",
    challenge: "Inconsistent lead flow and difficulty scaling customer acquisition across multiple service territories.",
    solution: "Multi-platform performance strategy with Google Search, Meta retargeting and conversion-optimized landing pages tied to CRM.",
    outcome: "Predictable lead generation, improved cost per acquisition and scalable campaign structure across regions.",
  },
  {
    client: "Rexello Castors",
    challenge: "B2B customer acquisition relying primarily on trade shows and direct sales with limited digital lead channels.",
    solution: "LinkedIn lead generation, Google Search for industrial buyers and remarketing to website visitors with targeted content.",
    outcome: "New digital enquiry channel, improved lead quality from procurement decision-makers and measurable pipeline contribution.",
  },
];

const whyUs = [
  { t: "Customer Acquisition Focus", b: "Everything we build is designed to generate qualified leads and customers — not just traffic and impressions." },
  { t: "Full-Funnel Thinking", b: "We optimize the entire journey from first impression to conversion, not just the ad click." },
  { t: "Creative + Data Expertise", b: "Compelling creative powered by rigorous data analysis — performance marketing needs both to succeed." },
  { t: "Marketing + Technology Integration", b: "Seamless connection between advertising platforms, CRM systems and analytics for complete visibility." },
  { t: "Transparent Reporting", b: "Clear, honest reporting on the metrics that matter — leads, conversions, costs and revenue impact." },
  { t: "Long-Term Growth Partnerships", b: "We grow with your business, continuously refining strategy as markets, platforms and goals evolve." },
];

const faqs = [
  {
    q: "What platforms do you manage?",
    a: "We manage Google Ads, Meta (Facebook & Instagram), LinkedIn Ads, YouTube and emerging digital platforms — with strategies tailored to where your customers are most likely to convert.",
  },
  {
    q: "How quickly can results be expected?",
    a: "Campaign data begins immediately; initial optimization insights emerge within days. Meaningful performance improvements and scaling happen continuously as we gather data and refine targeting.",
  },
  {
    q: "Do you provide landing page support?",
    a: "Yes. We design and optimize landing pages, forms and customer journeys as part of our conversion-focused approach — because the best ad is wasted on a poor destination.",
  },
  {
    q: "How do you measure ROI?",
    a: "We track leads, conversions, cost per acquisition, return on ad spend and revenue impact — aligned with your business goals, not vanity metrics.",
  },
  {
    q: "Can you integrate with CRM systems?",
    a: "Yes. We integrate with most major CRM platforms to ensure leads flow directly into your sales process with full attribution and tracking.",
  },
];

/* ---------- page ---------- */
function PerformanceMarketingPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Performance Marketing</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Performance Marketing
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Turn marketing spend into{" "}
              <em className="text-brand not-italic">business growth.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              We help businesses acquire customers through data-driven advertising strategies
              across Google, Meta, LinkedIn and emerging digital platforms. Our campaigns generate
              measurable business outcomes — not just impressions, clicks and traffic.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Request Growth Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Performance Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Campaigns", v: "500+" },
                { k: "Platforms", v: "Google · Meta · LinkedIn" },
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
                alt="Performance marketing and customer acquisition"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Every click should move the business forward.</p>
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
              Customer Acquisition Challenges
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Start with the growth problem. The strategy follows.
            </h2>
            <p className="mt-4 text-dark/70">
              Customer acquisition fails when it starts with platforms, not outcomes. We begin by
              understanding what's limiting your growth — then architect the right advertising and
              conversion system to solve it.
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
                Performance Marketing Solutions
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Acquisition systems engineered for outcomes — not just activity.
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
                <ul className="mt-4 space-y-2">
                  {s.services.map((svc) => (
                    <li key={svc} className="text-sm text-dark/70 flex items-start gap-2">
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

      {/* 4. FRAMEWORK */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              The Ace360degree Customer Acquisition Framework
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              How we turn spend into customers — systematically.
            </h2>
            <p className="mt-4 text-canvas/70">
              A five-stage model that transforms advertising from an expense into a repeatable,
              scalable customer acquisition engine.
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

      {/* 5. TECHNOLOGY & TRACKING */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Technology & Tracking
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Every click. Every lead. Every conversion.
            </h2>
            <p className="mt-4 text-dark/70">
              Performance without measurement is guesswork. We build complete visibility into your
              acquisition funnel — from first impression to closed revenue.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-dark/10 border border-dark/10">
            {trackingTech.map((t) => (
              <div key={t} className="bg-canvas p-6 flex items-center gap-3">
                <span className="size-2 rounded-full bg-brand shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-dark text-canvas p-8 md:p-10">
            <p className="font-serif text-2xl md:text-3xl leading-tight">
              "Performance without measurement is guesswork. We track what matters —
              so you know exactly what's driving growth."
            </p>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Performance Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real businesses. Real acquisition. Real outcomes.
              </h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold hover:text-brand">
              View all case studies →
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.client} className="bg-light border border-dark/10 overflow-hidden">
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

      {/* 7. WHY ACE360DEGREE */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Why Ace360degree
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              A customer acquisition partner — not an ad vendor.
            </h2>
            <p className="mt-5 text-dark/70">
              Since 2009, we've built acquisition systems that outlast platform changes and algorithm
              updates. Our clients stay because we think like growth operators — and because every
              campaign is measured by the customers it generates, not the clicks it collects.
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
                    <h4 className="font-semibold text-dark">{w.t}</h4>
                    <p className="mt-1 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Common questions about performance marketing.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border border-dark/10 bg-light open:border-dark/20"
              >
                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                  <span className="font-semibold text-dark">{f.q}</span>
                  <span className="text-brand text-lg leading-none shrink-0 group-open:hidden">+</span>
                  <span className="text-brand text-lg leading-none shrink-0 hidden group-open:inline">−</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-dark/70 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Acquire customers. Scale revenue.{" "}
            <em className="text-brand not-italic">Grow smarter.</em>
          </h2>
          <p className="mt-6 text-canvas/70 max-w-2xl mx-auto">
            Build predictable customer acquisition systems powered by strategy, creativity,
            technology and continuous optimization.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Performance Consultation <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/20 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Campaign Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
