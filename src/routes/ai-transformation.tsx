import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/ai-transformation")({
  component: AITransformationPage,
  head: () => ({
    meta: [
      {
        title:
          "AI & Business Transformation Partner | Workflow Automation & Decision Intelligence — Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps organizations identify practical AI opportunities, automate workflows, improve decision-making and create future-ready business systems that deliver measurable outcomes.",
      },
      {
        property: "og:title",
        content: "AI That Drives Real Business Outcomes — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Business-first AI transformation: workflow automation, intelligent customer experiences, knowledge systems and decision intelligence built for measurable efficiency and growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-transformation" },
    ],
    links: [{ rel: "canonical", href: "/ai-transformation" }],
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
    q: "Too Much Manual Work?",
    s: "Automate repetitive tasks and improve operational efficiency across sales, marketing, HR and operations — freeing your team for higher-value work.",
    tag: "Workflow Automation",
  },
  {
    q: "Teams Losing Time Searching For Information?",
    s: "Build AI-powered knowledge systems and intelligent search experiences that surface the right information instantly — from SOPs to customer histories.",
    tag: "Knowledge Management",
  },
  {
    q: "Struggling To Manage Leads Efficiently?",
    s: "Implement AI-assisted lead qualification and nurturing systems that score, route and follow up with prospects — so no opportunity is missed.",
    tag: "Lead Intelligence",
  },
  {
    q: "Need Faster Customer Support?",
    s: "Deploy AI assistants and customer service automation that resolve common queries instantly, escalate intelligently and improve satisfaction around the clock.",
    tag: "Customer Experience",
  },
  {
    q: "Creating Content At Scale?",
    s: "Build AI-powered content and marketing workflows that produce, repurpose and distribute brand-aligned content across channels — faster and consistently.",
    tag: "Content Systems",
  },
  {
    q: "Looking For Better Business Insights?",
    s: "Use AI-driven analytics and decision intelligence systems that transform raw data into actionable insights — for faster, more confident leadership decisions.",
    tag: "Decision Intelligence",
  },
];

const solutions = [
  {
    name: "AI Strategy & Readiness Assessment",
    outcome: "A clear, prioritized roadmap for AI adoption aligned to business goals.",
    services: [
      "AI Readiness Assessment",
      "Opportunity Mapping",
      "Department Audits",
      "AI Roadmaps",
      "Adoption Planning",
    ],
  },
  {
    name: "AI Workflow Automation",
    outcome: "Repetitive work eliminated, teams focused on what matters most.",
    services: [
      "Sales Automation",
      "Marketing Automation",
      "HR Automation",
      "Operations Automation",
      "Internal Process Automation",
    ],
  },
  {
    name: "AI Customer Experience Solutions",
    outcome: "Faster response times, happier customers, lower support costs.",
    services: [
      "AI Chatbots",
      "AI Voice Agents",
      "Lead Qualification Systems",
      "Customer Support Automation",
      "Appointment Scheduling Assistants",
    ],
  },
  {
    name: "AI Knowledge & Productivity Systems",
    outcome: "Instant access to organizational knowledge and enhanced team productivity.",
    services: [
      "AI Knowledge Bases",
      "SOP Assistants",
      "Employee Copilots",
      "Internal Search Systems",
      "Learning Systems",
    ],
  },
  {
    name: "AI Content & Marketing Systems",
    outcome: "Consistent, high-quality content produced and distributed at scale.",
    services: [
      "Content Automation",
      "Content Repurposing",
      "SEO Content Workflows",
      "Social Media Systems",
      "Campaign Acceleration",
    ],
  },
  {
    name: "AI Analytics & Decision Intelligence",
    outcome: "Data-driven decisions made faster with predictive clarity.",
    services: [
      "Executive Dashboards",
      "Predictive Insights",
      "KPI Monitoring",
      "Reporting Automation",
      "Business Intelligence",
    ],
  },
];

const framework = [
  {
    step: "Assess",
    body: "Understand current processes, data maturity and organizational readiness to identify where AI can deliver the most value.",
  },
  {
    step: "Identify",
    body: "Prioritize high-impact AI use cases based on feasibility, business value and alignment with strategic objectives.",
  },
  {
    step: "Implement",
    body: "Deploy practical AI solutions with clear success metrics — from pilots to production, designed for real-world adoption.",
  },
  {
    step: "Integrate",
    body: "Connect AI with existing systems, workflows and teams so it becomes part of how the business operates, not an isolated tool.",
  },
  {
    step: "Optimize",
    body: "Measure adoption, efficiency gains and business impact. Refine continuously to increase ROI and expand AI capabilities.",
  },
];

const industries = [
  {
    name: "Healthcare",
    context:
      "Patient engagement automation, appointment scheduling, knowledge systems for clinical staff and operational workflow improvements.",
  },
  {
    name: "Education",
    context:
      "Admissions automation, student support assistants, learning platforms and administrative workflow optimization.",
  },
  {
    name: "Manufacturing",
    context:
      "Operational workflow automation, reporting intelligence, supply chain visibility and knowledge management for production teams.",
  },
  {
    name: "Fintech",
    context:
      "Lead qualification automation, support systems, compliance documentation and process efficiency across customer journeys.",
  },
  {
    name: "Hospitality",
    context:
      "Guest engagement automation, booking assistance, marketing systems and personalized communication at scale.",
  },
  {
    name: "Professional Services",
    context:
      "Knowledge management, content systems, productivity enhancement and client communication automation for consulting and advisory firms.",
  },
];

const whyUs = [
  {
    t: "Business-First AI",
    b: "We start with your business objectives — not technology trends. Every AI recommendation is tied to measurable outcomes.",
  },
  {
    t: "Marketing + Technology + AI Expertise",
    b: "Our unique combination means AI solutions connect to your marketing, operations and customer experience — not isolated experiments.",
  },
  {
    t: "Practical Implementation",
    b: "We deploy AI that works in your environment, with your data, alongside your teams — not theoretical proof-of-concepts.",
  },
  {
    t: "Human-Centered Adoption",
    b: "Technology succeeds when people use it. We design AI rollouts with training, change management and feedback loops built in.",
  },
  {
    t: "Future-Ready Systems",
    b: "We build AI infrastructure that scales — so your business can adopt new capabilities as the technology evolves.",
  },
  {
    t: "Long-Term Partnership Approach",
    b: "AI transformation is a journey, not a project. We stay with you to optimize, expand and mature your AI capabilities over time.",
  },
];

/* ---------- page ---------- */
function AITransformationPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">
              Home
            </a>
            <span className="mx-1">/</span>
            <span className="text-dark">AI &amp; Business Transformation</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              AI &amp; Business Transformation Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Build the future.{" "}
              <em className="text-brand not-italic">Transform</em> your business.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              AI is changing how businesses operate, compete, and grow. The question is no longer
              whether AI will impact your business — it is how quickly you can leverage it. At
              Ace360degree, we help organizations identify practical AI opportunities, automate
              workflows, improve decision-making, and create future-ready business systems that
              deliver measurable outcomes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book AI Discovery Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Assess AI Opportunities <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "AI Projects", v: "50+" },
                { k: "Industries", v: "12+" },
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
                src={heroImg}
                alt="Business transformation and AI strategy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Practical AI. Measurable outcomes. Future-ready systems.</p>
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
                Start with the efficiency problem. The AI solution follows.
              </h2>
              <p className="mt-4 text-dark/70">
                Most AI initiatives fail because they start with technology, not business need. We
                begin by diagnosing what's slowing your organization down — and build practical AI
                solutions around real operational challenges.
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
                  AI &amp; Business Transformation Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Practical AI systems — engineered for efficiency and growth.
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
                The Ace360degree AI Transformation Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                How we transform businesses with AI — systematically.
              </h2>
              <p className="mt-4 text-canvas/70">
                A five-stage model that turns AI adoption from a technology experiment into a
                strategic business discipline.
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
      </Reveal>

      {/* 5. INDUSTRY USE CASES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Industry Use Cases
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                AI transformation tailored to your sector.
              </h2>
              <p className="mt-4 text-dark/70">
                Every industry has unique workflows, customer expectations and operational challenges.
                We bring sector context to every AI engagement.
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
      </Reveal>

      {/* 6. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Businesses Choose Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose Ace360degree for AI transformation.
              </h2>
              <p className="mt-5 text-dark/70">
                Since 2009, we've helped businesses across industries adopt technology strategically.
                Our AI practice combines deep business understanding with practical implementation
                expertise — delivering outcomes, not just experiments.
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

      {/* 7. FUTURE READINESS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-28 text-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              The Future of Business
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl mx-auto">
              AI is not replacing businesses. It is{" "}
              <em className="text-brand not-italic">transforming</em> them.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-dark/70 text-lg">
              Organizations that successfully adopt AI will improve efficiency, enhance customer
              experiences, accelerate innovation and gain competitive advantages. Our role is to help
              businesses adopt AI responsibly, strategically and effectively.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-6 py-3.5 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book AI Discovery Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-6 py-3.5 text-sm font-semibold hover:border-dark transition"
              >
                Assess AI Opportunities <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Ready To Build The Future?
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Ready to <em className="text-brand not-italic">build</em> the future?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Whether you're exploring AI, automating workflows, improving customer experiences or
            building smarter business systems, our team is ready to help.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book AI Discovery Session <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Schedule Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
