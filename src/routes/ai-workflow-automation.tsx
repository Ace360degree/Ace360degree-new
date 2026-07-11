import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/ai-workflow-automation")({
  component: AIWorkflowAutomationPage,
  head: () => ({
    meta: [
      {
        title:
          "AI Workflow Automation & Business Efficiency Partner — Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps organizations reduce manual work, improve productivity and create intelligent business operations through AI-powered workflow automation across sales, marketing, HR, finance and operations.",
      },
      {
        property: "og:title",
        content:
          "Turn Manual Processes Into Intelligent Workflows — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Business-first AI workflow automation: cut manual work, accelerate decisions and scale operations without scaling headcount.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-workflow-automation" },
    ],
    links: [{ rel: "canonical", href: "/ai-workflow-automation" }],
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
const whyMatters = [
  {
    t: "Productivity Without Headcount",
    b: "Automate repeatable work so existing teams deliver more — without expanding cost structures.",
  },
  {
    t: "Faster, More Consistent Operations",
    b: "Remove delays, missed steps and human bottlenecks from critical business processes.",
  },
  {
    t: "Better Customer Experience",
    b: "Respond faster, follow up reliably and serve customers around the clock — at scale.",
  },
  {
    t: "Data-Driven Decisions",
    b: "Automated reporting and insights so leadership acts on facts, not gut feel.",
  },
  {
    t: "Scalable Growth",
    b: "Build operations that handle 10x volume without 10x effort — a foundation for sustainable growth.",
  },
  {
    t: "Future-Ready Business",
    b: "Embed AI into how your business operates, not as a side experiment — ready for what comes next.",
  },
];

const challenges = [
  {
    q: "Teams Drowning In Repetitive Work?",
    s: "Eliminate manual data entry, copy-paste tasks and back-and-forth follow-ups — freeing teams for high-value work.",
    tag: "Manual Workload",
  },
  {
    q: "Slow Lead Response & Lost Opportunities?",
    s: "Automate lead capture, qualification, routing and nurture — so no enquiry waits, and no opportunity slips through.",
    tag: "Sales Velocity",
  },
  {
    q: "Customer Queries Piling Up?",
    s: "Deploy intelligent support workflows that resolve common queries instantly and route complex ones to the right person.",
    tag: "Customer Service",
  },
  {
    q: "Reporting Eating Up Management Time?",
    s: "Automate dashboards, KPI tracking and recurring reports — leaders get clarity without chasing spreadsheets.",
    tag: "Reporting",
  },
  {
    q: "Approvals & Handoffs Causing Delays?",
    s: "Digitize approval chains and inter-team handoffs so requests move at the speed of business, not email.",
    tag: "Process Flow",
  },
  {
    q: "Operations That Can't Scale?",
    s: "Replace fragile manual processes with intelligent workflows that grow with volume, geographies and product lines.",
    tag: "Scalability",
  },
];

const solutions = [
  {
    name: "Sales Workflow Automation",
    outcome: "Faster response, qualified pipeline, higher conversion.",
    services: [
      "Lead Capture & Qualification",
      "CRM Automation",
      "Pipeline Tracking",
      "Follow-Up Sequences",
      "Quotation & Proposal Workflows",
    ],
  },
  {
    name: "Marketing Workflow Automation",
    outcome: "Consistent, personalized engagement at scale.",
    services: [
      "Campaign Automation",
      "Email & WhatsApp Journeys",
      "Lead Nurture Flows",
      "Content Distribution",
      "Performance Reporting",
    ],
  },
  {
    name: "Customer Service Automation",
    outcome: "Faster resolutions, happier customers, lower support cost.",
    services: [
      "AI Support Assistants",
      "Ticket Routing & Triage",
      "FAQ & Knowledge Workflows",
      "Service Status Updates",
      "Feedback & CSAT Automation",
    ],
  },
  {
    name: "HR & People Operations",
    outcome: "Smoother employee experience, less administrative load.",
    services: [
      "Recruitment Workflows",
      "Onboarding Automation",
      "Leave & Attendance Flows",
      "Employee Helpdesks",
      "Policy & SOP Assistants",
    ],
  },
  {
    name: "Finance & Operations Automation",
    outcome: "Accurate, auditable and faster financial operations.",
    services: [
      "Invoice & Billing Workflows",
      "Approval Chains",
      "Expense & Reimbursement Flows",
      "Compliance Reminders",
      "Reconciliation Reporting",
    ],
  },
  {
    name: "Management & Decision Workflows",
    outcome: "Real-time visibility and faster executive decisions.",
    services: [
      "Executive Dashboards",
      "Automated KPI Reports",
      "Exception Alerts",
      "Meeting & Review Automation",
      "AI Assistants For Leadership",
    ],
  },
];

const framework = [
  {
    step: "Discover",
    body: "Map current workflows, time drains and friction points across departments to identify automation opportunities.",
  },
  {
    step: "Prioritize",
    body: "Rank opportunities by business impact, feasibility and effort — focusing first on quick wins and strategic levers.",
  },
  {
    step: "Design",
    body: "Re-engineer the workflow with clear roles, triggers and outcomes — automation amplifies a good process, not a broken one.",
  },
  {
    step: "Automate",
    body: "Implement intelligent workflows that connect systems, people and AI — designed for adoption, not just deployment.",
  },
  {
    step: "Optimize",
    body: "Measure efficiency gains, refine continuously and expand automation maturity across the organization.",
  },
];

const departments = [
  {
    name: "Sales",
    items: ["Lead Qualification", "CRM Updates", "Quote Generation", "Follow-Up Reminders"],
  },
  {
    name: "Marketing",
    items: ["Campaign Triggers", "Lead Scoring", "Content Workflows", "Attribution Reporting"],
  },
  {
    name: "Customer Service",
    items: ["AI Assistants", "Ticket Routing", "Escalation Flows", "Customer Updates"],
  },
  {
    name: "HR",
    items: ["Onboarding Journeys", "Leave Workflows", "Employee Helpdesk", "Performance Tracking"],
  },
  {
    name: "Finance",
    items: ["Invoice Workflows", "Approval Chains", "Expense Automation", "Compliance Alerts"],
  },
  {
    name: "Operations",
    items: ["Order Processing", "Inventory Alerts", "Vendor Workflows", "SOP Assistants"],
  },
  {
    name: "Management",
    items: ["KPI Dashboards", "Auto Reports", "Exception Alerts", "Leadership Copilots"],
  },
];

const useCases = [
  {
    t: "Lead Qualification Engine",
    b: "Inbound enquiries auto-captured, scored, routed to the right rep and followed up — within minutes, every time.",
  },
  {
    t: "AI-Powered Customer Support",
    b: "24/7 intelligent assistants resolve repeat queries, while complex cases reach human agents with full context.",
  },
  {
    t: "Automated Reporting Suite",
    b: "Leadership receives daily, weekly and monthly KPI reports automatically — no manual compilation, no delays.",
  },
  {
    t: "CRM Automation",
    b: "Activities, follow-ups, status updates and pipeline movement captured automatically — clean data, accurate forecasts.",
  },
  {
    t: "Approval Workflows",
    b: "Purchase, leave, expense and document approvals digitized with routing, reminders and audit trails.",
  },
  {
    t: "Internal AI Assistants",
    b: "Department copilots that answer SOP, policy and product questions instantly — across the organization.",
  },
];

const whyUs = [
  {
    t: "Business Outcomes First",
    b: "We start with productivity, cost and customer experience goals — automation is the means, not the message.",
  },
  {
    t: "Process + Technology + AI",
    b: "We re-engineer the process, not just digitize it. Automating a broken workflow only makes it fail faster.",
  },
  {
    t: "Cross-Functional Expertise",
    b: "Our marketing, operations and technology teams collaborate — so automation works end-to-end, not in silos.",
  },
  {
    t: "Adoption-Led Implementation",
    b: "We design rollouts with training, change management and feedback — so teams actually use what we build.",
  },
  {
    t: "Scalable, Future-Ready Systems",
    b: "Workflows built to evolve as your business grows and as AI capabilities mature.",
  },
  {
    t: "Long-Term Partnership",
    b: "Since 2009, we've stayed with clients as their operations matured — automation is a journey we walk together.",
  },
];

const faqs = [
  {
    q: "Do we need to replace our existing systems to automate?",
    a: "No. We design automation that works with your existing CRM, ERP, communication and finance tools — connecting them intelligently rather than replacing them.",
  },
  {
    q: "How quickly can we see business impact?",
    a: "Initial workflows are typically live in 4–8 weeks, with measurable productivity gains visible in the first quarter of operation.",
  },
  {
    q: "Is workflow automation only for large enterprises?",
    a: "No. SMEs and growing organizations often benefit the most — automation lets lean teams operate with enterprise-grade efficiency.",
  },
  {
    q: "How do you ensure teams actually adopt the new workflows?",
    a: "Every engagement includes process design, training, change management and feedback loops — adoption is built into the rollout, not bolted on later.",
  },
  {
    q: "Can automation scale as our business grows?",
    a: "Yes. We design workflows to handle increased volume, new geographies and additional product lines without re-engineering from scratch.",
  },
];

/* ---------- page ---------- */
function AIWorkflowAutomationPage() {
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
            <span className="text-dark">AI Workflow Automation</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              AI Workflow Automation &amp; Business Efficiency Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Turn manual processes into{" "}
              <em className="text-brand not-italic">intelligent</em> workflows.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Every organization carries hidden cost in repetitive tasks, slow handoffs and
              manual reporting. Ace360degree helps businesses redesign and automate operations —
              reducing effort, accelerating decisions and creating intelligent workflows that
              scale productivity without scaling headcount.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book Automation Discovery <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Assess Workflow Opportunities <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Workflows Automated", v: "300+" },
                { k: "Departments Served", v: "7" },
                { k: "Since", v: "2009" },
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
                alt="Intelligent business workflow automation"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Re-engineer the process. Then automate it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY IT MATTERS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Workflow Automation Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                The next competitive advantage is operational intelligence.
              </h2>
              <p className="mt-4 text-dark/70">
                The most productive organizations don't simply work harder — they design smarter
                operations. AI-powered workflow automation is how modern businesses unlock
                capacity, speed and consistency at the same time.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyMatters.map((w) => (
                <div key={w.t} className="border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors">
                  <h3 className="font-serif text-2xl">{w.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                </div>
              ))}
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
                Business Challenges We Solve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Start with the friction. The automation follows.
              </h2>
              <p className="mt-4 text-dark/70">
                We don't begin with technology — we begin with the operational bottlenecks
                slowing your business down, then design intelligent workflows that remove them.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {challenges.map((c) => (
                <div key={c.q} className="bg-canvas p-8 hover:bg-brand/10 transition-colors">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">{c.tag}</p>
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
                  AI Workflow Automation Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Intelligent workflows — engineered for efficiency and scale.
                </h2>
              </div>
              <Link to="/services" className="text-sm font-semibold hover:text-brand">
                See full capabilities →
              </Link>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <article key={s.name} className="group relative border border-dark/10 p-7 bg-canvas hover:border-dark transition-colors">
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{s.name}</h3>
                  <p className="mt-3 text-brand font-medium text-sm">{s.outcome}</p>
                  <ul className="mt-4 space-y-2">
                    {s.services.map((svc) => (
                      <li key={svc} className="text-sm text-dark/70 leading-relaxed flex items-start gap-2">
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
                The Ace360degree Automation Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A disciplined path from manual to intelligent operations.
              </h2>
              <p className="mt-4 text-canvas/70">
                Five stages that turn workflow automation from a tactical project into a
                strategic transformation capability.
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

      {/* 6. DEPARTMENT OPPORTUNITIES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Department Automation Opportunities
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Automation opportunities across every function.
              </h2>
              <p className="mt-4 text-dark/70">
                Every department carries repetitive work that drains time and accuracy. Here's
                where intelligent automation creates the most leverage.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {departments.map((d) => (
                <article key={d.name} className="border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors">
                  <h3 className="font-serif text-2xl">{d.name}</h3>
                  <ul className="mt-4 space-y-2">
                    {d.items.map((i) => (
                      <li key={i} className="text-sm text-dark/70 flex items-start gap-2">
                        <span className="mt-1.5 size-1 rounded-full bg-brand shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. USE CASES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Example Use Cases
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real workflows. Real business outcomes.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((u, i) => (
                <article key={u.t} className="border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors">
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                    Use Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{u.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{u.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A transformation partner — not an automation vendor.
              </h2>
              <p className="mt-5 text-dark/70">
                Since 2009, we've helped organizations across industries re-engineer how they
                operate. Our automation practice combines deep process thinking with practical
                AI implementation — delivering measurable productivity gains, not pilots.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-brand">
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

      {/* 9. FAQ */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Executive FAQ
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Answers for decision-makers.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-dark/10 border-y border-dark/10">
                {faqs.map((f) => (
                  <li key={f.q} className="py-6">
                    <h3 className="font-serif text-xl">{f.q}</h3>
                    <p className="mt-3 text-dark/70 text-sm leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 10. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Ready To Build Intelligent Operations?
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Free your teams. <em className="text-brand not-italic">Scale</em> your business.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Whether you're starting with one workflow or transforming entire departments, our team
            will help you design intelligent operations that improve productivity, customer
            experience and long-term scalability.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Automation Discovery <span aria-hidden>→</span>
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
