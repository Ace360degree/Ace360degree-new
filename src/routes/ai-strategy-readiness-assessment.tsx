import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/ai-strategy-readiness-assessment")({
  component: AIStrategyPage,
  head: () => ({
    meta: [
      {
        title:
          "AI Strategy & Readiness Assessment | AI Transformation Consulting — Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps organizations evaluate AI opportunities, assess readiness and build practical AI adoption roadmaps aligned with business goals. Strategy before investment.",
      },
      {
        property: "og:title",
        content:
          "AI Strategy That Creates Clarity Before Investment — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Executive-focused AI strategy, readiness assessments and transformation roadmaps for CEOs, founders and CXOs ready to lead with confidence in the AI era.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-strategy-readiness-assessment" },
    ],
    links: [
      { rel: "canonical", href: "/ai-strategy-readiness-assessment" },
    ],
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

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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
    q: "Not Sure Where AI Fits In Your Business?",
    s: "We identify practical, high-value AI use cases aligned with your business goals — not generic experiments.",
    tag: "Opportunity Discovery",
  },
  {
    q: "Too Many AI Tools Creating Confusion?",
    s: "We help you cut through the noise and focus on the opportunities that deliver real, measurable value.",
    tag: "Strategic Focus",
  },
  {
    q: "Concerned About Data & Security Risks?",
    s: "We evaluate governance, privacy and compliance considerations before any deployment decision is made.",
    tag: "Risk & Governance",
  },
  {
    q: "Need Leadership Alignment?",
    s: "We build executive understanding and shared adoption plans so AI becomes a leadership-driven initiative.",
    tag: "Leadership Alignment",
  },
  {
    q: "Want To Improve Efficiency?",
    s: "We identify the processes most suited to automation and augmentation — for fast operational wins.",
    tag: "Operational Efficiency",
  },
  {
    q: "Planning Long-Term Transformation?",
    s: "We develop phased implementation roadmaps that mature your organization through structured stages.",
    tag: "Transformation Roadmap",
  },
];

const solutions = [
  {
    name: "AI Opportunity Discovery",
    outcome: "A clear view of where AI can create the most business value.",
    services: [
      "Business Process Assessment",
      "Department Reviews",
      "AI Opportunity Mapping",
      "Use Case Identification",
      "Industry Benchmarking",
    ],
  },
  {
    name: "AI Readiness Assessment",
    outcome: "An honest evaluation of your organization's ability to adopt AI.",
    services: [
      "Technology Assessment",
      "Data Readiness Review",
      "Workflow Assessment",
      "Team Capability Analysis",
      "Digital Maturity Evaluation",
    ],
  },
  {
    name: "AI Risk & Governance",
    outcome: "Confidence that AI adoption is safe, compliant and well-governed.",
    services: [
      "Data Privacy Review",
      "Security Assessment",
      "Compliance Review",
      "Governance Framework",
      "Risk Evaluation",
    ],
  },
  {
    name: "AI Use Case Prioritization",
    outcome: "Focused investment in initiatives with the highest impact and ROI.",
    services: [
      "Impact Assessment",
      "ROI Evaluation",
      "Quick Wins Identification",
      "Strategic Prioritization",
      "Feasibility Analysis",
    ],
  },
  {
    name: "AI Roadmap Development",
    outcome: "A practical, phased plan for adoption — built around your business.",
    services: [
      "Transformation Roadmaps",
      "Implementation Planning",
      "Budget Planning",
      "Resource Planning",
      "Success Metrics",
    ],
  },
  {
    name: "Executive AI Workshops",
    outcome: "Aligned leadership ready to drive AI transformation across the business.",
    services: [
      "Leadership Briefings",
      "AI Awareness Sessions",
      "Department Workshops",
      "Strategic Alignment Sessions",
      "Future Readiness Planning",
    ],
  },
];

const framework = [
  { step: "Discover", body: "Understand business challenges, goals and opportunities where AI can create measurable value." },
  { step: "Assess", body: "Evaluate systems, data quality, workflows and team readiness to adopt AI responsibly." },
  { step: "Prioritize", body: "Focus on high-impact, feasible initiatives that deliver early wins and long-term advantage." },
  { step: "Plan", body: "Develop a practical, phased implementation roadmap aligned with business objectives and budgets." },
  { step: "Transform", body: "Support successful AI adoption with governance, change management and continuous optimization." },
];

const valueAreas = [
  { t: "Sales & Lead Management", b: "Better lead quality, faster qualification and stronger conversion across the sales funnel." },
  { t: "Marketing & Customer Acquisition", b: "Sharper targeting, smarter campaigns and content systems that scale with the brand." },
  { t: "Customer Support", b: "Faster response times, consistent service and lower cost-to-serve across channels." },
  { t: "Operations & Workflows", b: "Automated repetitive work, reduced errors and streamlined cross-team processes." },
  { t: "HR & Recruitment", b: "Faster hiring, stronger candidate experience and improved employee productivity." },
  { t: "Knowledge Management", b: "Instant access to organizational knowledge for faster, more confident decisions." },
  { t: "Finance & Reporting", b: "Cleaner reporting, predictive insights and tighter financial visibility for leadership." },
  { t: "Executive Decision Support", b: "Real-time intelligence that helps leaders act with clarity, speed and confidence." },
];

const industries = [
  { name: "Manufacturing", context: "Operational automation, predictive insights, supply chain visibility and quality intelligence." },
  { name: "Education", context: "Admissions automation, student support, learning intelligence and academic operations." },
  { name: "Healthcare", context: "Patient engagement, scheduling automation, clinical knowledge systems and operational efficiency." },
  { name: "Fintech", context: "Lead qualification, customer support, compliance documentation and process intelligence." },
  { name: "Retail", context: "Personalization, demand insight, customer experience automation and inventory intelligence." },
  { name: "Professional Services", context: "Knowledge systems, client communication, proposal acceleration and productivity tools." },
  { name: "Technology", context: "Product intelligence, internal copilots, support automation and engineering productivity." },
  { name: "Hospitality", context: "Guest engagement, booking assistants, personalization and revenue intelligence." },
  { name: "Architecture & Design", context: "Project knowledge systems, proposal automation and creative productivity workflows." },
];

const deliverables = [
  { t: "AI Readiness Score", b: "A structured benchmark of your organization's current AI maturity across people, process and technology." },
  { t: "AI Opportunity Matrix", b: "A prioritized map of AI use cases ranked by business impact, feasibility and ROI potential." },
  { t: "Risk Assessment Report", b: "A clear view of data, security, governance and change management risks — with mitigation guidance." },
  { t: "AI Roadmap", b: "A phased 12–24 month transformation roadmap aligned with business goals and budgets." },
  { t: "Executive Recommendations", b: "Leadership-ready recommendations on focus areas, investment priorities and success metrics." },
  { t: "Implementation Framework", b: "A practical execution framework covering teams, partners, governance and rollout cadence." },
];

const whyUs = [
  { t: "Business-First AI Approach", b: "Every recommendation starts with business value — not technology trends or vendor preference." },
  { t: "Marketing + Technology Expertise", b: "A rare combination that connects AI to revenue, customer experience and operations." },
  { t: "CRM & ERP Understanding", b: "Deep experience with the systems that hold your business — and where AI can extend their value." },
  { t: "Workflow Automation Experience", b: "Years of building practical automation across sales, marketing, HR and operations." },
  { t: "Practical Implementation Focus", b: "We design strategies that can actually be executed — not theoretical frameworks." },
  { t: "Executive-Friendly Consulting", b: "Clarity, structure and outcomes communicated in the language leadership teams expect." },
  { t: "Cross-Industry Experience", b: "Insight from manufacturing, education, healthcare, fintech, retail and professional services." },
  { t: "Long-Term Transformation Thinking", b: "We partner with you across phases — from readiness to adoption to maturity." },
];

const faqs = [
  { q: "What is an AI Readiness Assessment?", a: "A structured evaluation of your business processes, data, technology and team capability to identify where and how AI can deliver value — and what foundations need to be in place first." },
  { q: "How long does an assessment take?", a: "Most engagements run between 3 and 6 weeks depending on organization size, number of departments reviewed and the depth of the readiness analysis required." },
  { q: "Do we need technical expertise?", a: "No. The assessment is designed to be led by business leaders. We translate technical considerations into clear business language and decisions." },
  { q: "Can AI help small and medium businesses?", a: "Yes. SMBs often see the fastest wins because workflows are simpler to automate and decisions are quicker to act on. We tailor the roadmap to fit your scale and budget." },
  { q: "How do you identify AI opportunities?", a: "Through structured department reviews, process mapping, data assessment and benchmarking against industry peers to surface practical, high-value use cases." },
  { q: "Can Ace360degree implement recommendations?", a: "Yes. Our AI & Business Transformation practice can execute the roadmap — including automation, customer experience, knowledge systems and analytics — when you're ready." },
  { q: "How do you measure AI ROI?", a: "Each recommended initiative is scored against efficiency gains, revenue impact, cost reduction and strategic value, with clear success metrics defined upfront." },
  { q: "What industries benefit most from AI?", a: "Almost every sector benefits, but the highest near-term value typically shows up in manufacturing, education, healthcare, fintech, retail and professional services." },
];

/* ---------- page ---------- */
function AIStrategyPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <Link to="/ai-transformation" className="hover:text-brand">
              AI &amp; Business Transformation
            </Link>
            <span className="mx-1">/</span>
            <span className="text-dark">AI Strategy &amp; Readiness Assessment</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              AI Strategy &amp; Readiness Assessment
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              AI strategy that creates{" "}
              <em className="text-brand not-italic">clarity</em> before investment.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Every business is hearing about AI. Few know where to start. At Ace360degree, we help
              organizations evaluate AI opportunities, assess organizational readiness and develop
              practical implementation roadmaps aligned with business objectives.
            </p>
            <p className="mt-4 text-base text-dark/60 max-w-xl">
              Before investing in AI tools, businesses need a strategy. We help create that strategy.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Assess My AI Readiness <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book AI Strategy Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Industries", v: "12+" },
                { k: "Engagements", v: "Cross-CXO" },
              ].map((m) => (
                <div key={m.k}>
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/55">{m.k}</p>
                  <p className="mt-2 font-serif text-2xl">{m.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero form */}
          <div className="lg:col-span-5">
            <div className="border border-dark/15 bg-canvas p-7">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brand font-semibold">
                Executive Intake
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug">
                Get my AI Readiness Assessment.
              </h2>
              <p className="mt-2 text-sm text-dark/65">
                Share a few details. We'll respond with an initial readiness perspective and next
                steps within two business days.
              </p>
              <form
                className="mt-6 grid grid-cols-1 gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Company Name"
                  maxLength={150}
                  className="border border-dark/15 px-3 py-2.5 text-sm focus:outline-none focus:border-dark bg-canvas"
                />
                <input
                  type="text"
                  placeholder="Industry"
                  maxLength={100}
                  className="border border-dark/15 px-3 py-2.5 text-sm focus:outline-none focus:border-dark bg-canvas"
                />
                <input
                  type="text"
                  placeholder="Number Of Employees"
                  maxLength={20}
                  className="border border-dark/15 px-3 py-2.5 text-sm focus:outline-none focus:border-dark bg-canvas"
                />
                <input
                  type="text"
                  placeholder="Current Technology Stack"
                  maxLength={200}
                  className="border border-dark/15 px-3 py-2.5 text-sm focus:outline-none focus:border-dark bg-canvas"
                />
                <input
                  type="email"
                  placeholder="Email"
                  maxLength={255}
                  className="border border-dark/15 px-3 py-2.5 text-sm focus:outline-none focus:border-dark bg-canvas"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  maxLength={30}
                  className="border border-dark/15 px-3 py-2.5 text-sm focus:outline-none focus:border-dark bg-canvas"
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-brand text-dark px-5 py-3 text-sm font-semibold hover:brightness-95 transition"
                >
                  Get My AI Readiness Assessment <span aria-hidden>→</span>
                </button>
              </form>
            </div>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="AI strategy and readiness assessment for executives"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY AI READINESS MATTERS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why AI Readiness Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Successful AI adoption starts with strategy.
              </h2>
              <p className="mt-4 text-dark/70">
                Many organizations rush into AI implementation without understanding business value,
                data readiness, team readiness, operational impact, governance requirements or change
                management needs. The result is wasted investment, poor adoption and limited business
                outcomes. Ace360degree helps you build a foundation before implementation.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-px bg-dark/10 border border-dark/10">
              <div className="bg-canvas p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-dark/50 font-semibold">
                  Without Strategy
                </p>
                <ol className="mt-5 space-y-3">
                  {["AI Hype", "Random Tools", "Confusion", "Poor Adoption"].map((s, i) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="font-serif text-brand w-8">0{i + 1}</span>
                      <span className="font-serif text-xl text-dark/70">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-dark text-canvas p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-brand font-semibold">
                  With Ace360degree
                </p>
                <ol className="mt-5 space-y-3">
                  {[
                    "AI Strategy",
                    "Clear Roadmap",
                    "Structured Implementation",
                    "Business Value",
                  ].map((s, i) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="font-serif text-brand w-8">0{i + 1}</span>
                      <span className="font-serif text-xl">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. CHALLENGES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Business Challenges We Help Solve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Start with the business question. The AI answer follows.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {challenges.map((c) => (
                <div key={c.q} className="bg-canvas p-8 hover:bg-brand/10 transition-colors">
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

      {/* 4. SOLUTIONS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                  Our AI Strategy &amp; Readiness Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Strategy, readiness and roadmap — engineered for executives.
                </h2>
              </div>
              <Link to="/ai-transformation" className="text-sm font-semibold hover:text-brand">
                Explore AI &amp; Business Transformation →
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

      {/* 5. FRAMEWORK */}
      <Reveal>
        <section className="bg-dark text-canvas">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                The Ace360degree AI Transformation Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A clear path from idea to adoption.
              </h2>
              <p className="mt-4 text-canvas/70">
                A five-stage model that turns AI ambition into a structured, measurable transformation
                journey for the entire organization.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
              {framework.map((f, i) => (
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
      </Reveal>

      {/* 6. WHERE AI CAN CREATE VALUE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Where AI Can Create Value
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Practical business outcomes — across every function.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {valueAreas.map((v) => (
                <article
                  key={v.t}
                  className="border border-dark/10 bg-canvas p-6 hover:border-dark transition-colors"
                >
                  <h3 className="font-serif text-xl leading-snug">{v.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{v.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. INDUSTRIES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Industries We Serve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Sector-aware AI strategy.
              </h2>
              <p className="mt-4 text-dark/70">
                AI opportunities differ by industry. We bring sector context to every engagement.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind) => (
                <article
                  key={ind.name}
                  className="border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors"
                >
                  <h3 className="font-serif text-2xl">{ind.name}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{ind.context}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. WHAT CLIENTS RECEIVE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                What Clients Receive
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Executive-ready deliverables from every engagement.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliverables.map((d, i) => (
                <article
                  key={d.t}
                  className="border border-dark/10 bg-light p-7 hover:border-dark transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                    Deliverable {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{d.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{d.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 9. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose Ace360degree for AI strategy.
              </h2>
              <p className="mt-5 text-dark/70">
                No AI hype. No tool-led selling. No one-size-fits-all recommendations. Just business-led
                strategy backed by 15+ years of marketing, technology and transformation experience.
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
                    <span className="font-serif text-xl text-brand w-10 shrink-0">
                      {String(i + 1).padStart(2, "0")}
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

      {/* 10. FAQ */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Executive FAQ
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Answers for leadership teams.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-px bg-dark/10 border border-dark/10">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-canvas p-7 open:bg-light transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                    <h3 className="font-serif text-xl leading-snug">{f.q}</h3>
                    <span className="text-brand font-serif text-2xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-dark/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 11. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Prepare For The AI Era
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Prepare your business for the{" "}
            <em className="text-brand not-italic">AI era</em>.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            AI should not be driven by hype. It should be driven by strategy, opportunity and
            measurable business value. Partner with Ace360degree to build a roadmap for sustainable
            AI transformation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Assess My AI Readiness <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Book AI Strategy Consultation <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Executive Workshop <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
