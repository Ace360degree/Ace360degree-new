import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/ai-customer-experience-solutions")({
  component: AICustomerExperienceSolutionsPage,
  head: () => ({
    meta: [
      {
        title:
          "AI Customer Experience Solutions — Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps organizations deliver smarter, faster and more personalized customer experiences — combining strategy, engagement design and AI to transform customer journeys, support and growth.",
      },
      {
        property: "og:title",
        content:
          "Deliver Smarter, Faster & More Personalized Customer Experiences — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "An AI Customer Experience & Engagement Partner: improve responsiveness, deepen relationships and create exceptional customer journeys across every channel.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-customer-experience-solutions" },
    ],
    links: [{ rel: "canonical", href: "/ai-customer-experience-solutions" }],
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
    t: "Customers Expect Instant Responsiveness",
    b: "Slow replies and inconsistent service quietly cost more revenue than most leaders realize. Speed is now a brand promise.",
  },
  {
    t: "Personalization Is The New Standard",
    b: "Generic interactions erode trust. Customers expect context-aware engagement that reflects who they are and what they need.",
  },
  {
    t: "Experience Drives Loyalty & Revenue",
    b: "Acquiring customers is expensive — retaining and expanding them is where sustainable growth lives.",
  },
  {
    t: "Omnichannel Is The Norm",
    b: "Customers move across WhatsApp, web, email, voice and social. A unified experience across every channel is non-negotiable.",
  },
  {
    t: "Support Is A Growth Function",
    b: "Modern service teams don't just resolve issues — they unlock referrals, retention and lifetime value.",
  },
  {
    t: "AI Has Redefined What's Possible",
    b: "Intelligent, always-on engagement is now within reach for organizations of every size — not just enterprises.",
  },
];

const challenges = [
  {
    q: "Slow Response Times Hurting Conversion?",
    s: "Engage every enquiry instantly — across channels — so prospects feel attended to, qualified and guided in real time.",
    tag: "Responsiveness",
  },
  {
    q: "Inconsistent Customer Experience Across Channels?",
    s: "Unify customer interactions across WhatsApp, web, email, voice and social into one coherent, branded journey.",
    tag: "Omnichannel",
  },
  {
    q: "Support Teams Overwhelmed By Repetitive Queries?",
    s: "Resolve common questions automatically with intelligent assistants — freeing humans for high-value, complex cases.",
    tag: "Support Load",
  },
  {
    q: "Leads Going Cold Before Sales Connects?",
    s: "Capture, qualify and nurture leads the moment they arrive — with personalized conversations that move them forward.",
    tag: "Lead Conversion",
  },
  {
    q: "No Real Visibility Into Customer Behaviour?",
    s: "Turn conversations and interactions into structured intelligence that informs marketing, sales and product decisions.",
    tag: "Customer Intelligence",
  },
  {
    q: "Customer Journeys That Feel Generic?",
    s: "Design contextual, segment-aware experiences that recognize each customer and adapt to their stage and intent.",
    tag: "Personalization",
  },
];

const solutions = [
  {
    name: "AI Customer Assistants",
    outcome: "24/7 intelligent engagement across the customer lifecycle.",
    services: [
      "Pre-Sales Enquiry Assistants",
      "Onboarding & Activation",
      "FAQ & Self-Service",
      "Account & Order Assistance",
      "Post-Sale Engagement",
    ],
  },
  {
    name: "Conversational Commerce",
    outcome: "Turn conversations into qualified pipeline and revenue.",
    services: [
      "WhatsApp Commerce Journeys",
      "Catalog & Product Discovery",
      "Quote & Booking Flows",
      "Cart Recovery Conversations",
      "Payment & Order Nudges",
    ],
  },
  {
    name: "Omnichannel Engagement",
    outcome: "One customer, one conversation — across every channel.",
    services: [
      "WhatsApp, Web, Email & Social Unification",
      "Unified Customer Inbox",
      "Cross-Channel Journey Design",
      "Personalized Campaign Orchestration",
      "Channel Performance Insights",
    ],
  },
  {
    name: "Customer Support Automation",
    outcome: "Faster resolutions, higher CSAT, lower cost-to-serve.",
    services: [
      "Tier-1 Query Resolution",
      "Ticket Triage & Routing",
      "Knowledge & SOP Assistants",
      "Service Status & Updates",
      "Feedback & CSAT Workflows",
    ],
  },
  {
    name: "Customer Intelligence Systems",
    outcome: "Know your customer — and act on what you learn.",
    services: [
      "Conversation Analytics",
      "Intent & Sentiment Insights",
      "Customer Segmentation",
      "Behaviour-Driven Triggers",
      "Experience Dashboards",
    ],
  },
  {
    name: "AI Voice & Appointment Solutions",
    outcome: "Effortless voice experiences that respect customer time.",
    services: [
      "AI Voice Assistants",
      "Appointment Booking & Reminders",
      "Outbound Engagement Calls",
      "Call Qualification & Routing",
      "Voice-To-CRM Capture",
    ],
  },
];

const framework = [
  {
    step: "Understand",
    body: "Map customer segments, journeys and key moments of truth — from first enquiry to long-term advocacy.",
  },
  {
    step: "Design",
    body: "Re-engineer the experience: define touchpoints, voice, response standards and channel architecture.",
  },
  {
    step: "Engage",
    body: "Deploy AI-powered conversations and assistants across channels to engage customers in real time.",
  },
  {
    step: "Personalize",
    body: "Layer in intent, history and context — so every interaction feels relevant, not robotic.",
  },
  {
    step: "Optimize",
    body: "Measure response, satisfaction and conversion — and refine the experience continuously.",
  },
];

const journey = [
  {
    stage: "Discover",
    before: "Slow replies, missed enquiries, generic first impressions.",
    after: "Instant, branded engagement that qualifies and guides prospects from the first message.",
  },
  {
    stage: "Decide",
    before: "Disjointed follow-ups across email, calls and chat.",
    after: "Personalized, multi-channel conversations that build confidence and accelerate decisions.",
  },
  {
    stage: "Buy",
    before: "Friction in quotes, bookings, payments or onboarding.",
    after: "Smooth conversational commerce, assisted checkouts and frictionless onboarding journeys.",
  },
  {
    stage: "Serve",
    before: "Overloaded support, slow resolution, inconsistent answers.",
    after: "Always-on assistants, intelligent routing and resolution at the speed of the customer.",
  },
  {
    stage: "Grow",
    before: "Customers forgotten after purchase. Low repeat & referral.",
    after: "Lifecycle engagement that drives renewal, cross-sell, advocacy and lifetime value.",
  },
];

const industries = [
  {
    name: "BFSI & Financial Services",
    items: ["Lead Qualification", "Policy & Account Assistants", "Service Automation", "Compliance-Friendly Engagement"],
  },
  {
    name: "Healthcare & Wellness",
    items: ["Appointment Booking", "Patient Engagement", "Pre & Post-Visit Care", "Voice Reminders"],
  },
  {
    name: "Real Estate",
    items: ["Buyer Qualification", "Site Visit Booking", "Project Discovery", "Lifecycle Nurture"],
  },
  {
    name: "Education",
    items: ["Admissions Assistants", "Counselling Journeys", "Student Support", "Alumni Engagement"],
  },
  {
    name: "Retail & D2C",
    items: ["Conversational Commerce", "Cart Recovery", "Loyalty Engagement", "Order Support"],
  },
  {
    name: "B2B & Corporate",
    items: ["Enquiry Qualification", "Account Engagement", "Partner Communication", "Service Desks"],
  },
];

const workflows = [
  {
    t: "Instant Lead Qualification",
    b: "Every enquiry across web, ads and social is engaged within seconds, qualified intelligently and routed to the right sales owner.",
  },
  {
    t: "WhatsApp Conversational Commerce",
    b: "Discover, decide and buy inside a single chat — with catalog, quotes, payments and follow-up handled conversationally.",
  },
  {
    t: "24/7 Customer Support Assistant",
    b: "Common questions resolved instantly, complex ones escalated to humans with full context — every hour, every channel.",
  },
  {
    t: "Appointment & Reminder Journeys",
    b: "AI assistants book, confirm and remind — reducing no-shows and freeing front-desk teams from repetitive coordination.",
  },
  {
    t: "Onboarding & Activation Journeys",
    b: "Guide new customers through setup, first value and key milestones — turning purchase into long-term engagement.",
  },
  {
    t: "Win-Back & Loyalty Engagement",
    b: "Re-engage dormant customers and reward loyal ones with personalized, behaviour-driven conversations across channels.",
  },
];

const whyUs = [
  {
    t: "Experience-First, Not Bot-First",
    b: "We design customer experiences and use AI to deliver them — not the other way around. The conversation always serves the customer.",
  },
  {
    t: "Strategy + Engagement + Technology",
    b: "Our CX practice blends customer strategy, conversation design and AI implementation under one accountable partner.",
  },
  {
    t: "Outcomes That Matter",
    b: "Faster response, higher conversion, better CSAT, lower cost-to-serve — measurable business impact, not vanity automation.",
  },
  {
    t: "Brand-Aware Conversations",
    b: "Every assistant we build sounds like your brand — consistent tone, voice and standards across every channel and touchpoint.",
  },
  {
    t: "Works With Your Existing Stack",
    b: "We integrate with your CRM, ERP, support desk and channels — strengthening what you have, not replacing it.",
  },
  {
    t: "Long-Term Partnership",
    b: "Since 2009, we've stayed with clients as their customer experience matured — from first interaction to lifetime relationship.",
  },
  {
    t: "Cross-Functional Team",
    b: "Strategists, designers, marketers and technologists working as one team — so CX isn't fragmented across vendors.",
  },
  {
    t: "Adoption & Change-Led",
    b: "We design for the teams that will use these systems — training, governance and feedback baked into every rollout.",
  },
];

const faqs = [
  {
    q: "Are you a chatbot company?",
    a: "No. We're a customer experience and engagement partner. Conversational AI is one capability we use to deliver smarter, faster and more personalized customer journeys — alongside strategy, design and channel orchestration.",
  },
  {
    q: "Do we need to replace our existing CRM or support tools?",
    a: "No. We work with your existing CRM, support desk and communication channels — connecting and enhancing them rather than forcing a rip-and-replace.",
  },
  {
    q: "How quickly can we see business impact?",
    a: "Initial CX workflows are typically live in 4–8 weeks, with measurable gains in response time, conversion and CSAT visible within the first quarter.",
  },
  {
    q: "Will AI engagement feel cold or impersonal to our customers?",
    a: "Done right, the opposite. We design tone, context and escalation thresholds carefully — so customers get instant help, but always feel like they're being heard, not handled.",
  },
  {
    q: "Is this only relevant for large enterprises?",
    a: "No. Growing organizations often benefit the most — AI-powered CX lets lean teams deliver enterprise-grade responsiveness and personalization.",
  },
  {
    q: "How do you measure success?",
    a: "We track response time, resolution rate, CSAT, lead conversion, repeat purchase and cost-to-serve — and report against business outcomes, not just activity metrics.",
  },
];

/* ---------- page ---------- */
function AICustomerExperienceSolutionsPage() {
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
            <span className="text-dark">AI Customer Experience Solutions</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              AI Customer Experience &amp; Engagement Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Deliver smarter, faster &amp; more{" "}
              <em className="text-brand not-italic">personalized</em> customer experiences.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Customers don't compare you to your competitors anymore — they compare you to the
              best experience they've ever had. Ace360degree helps organizations redesign customer
              journeys, engage in real time and deliver exceptional experiences across every channel —
              powered by strategy, design and AI.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book CX Strategy Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Experience Audit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "CX Journeys Delivered", v: "200+" },
                { k: "Channels Unified", v: "6+" },
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
                alt="AI-powered customer experience transformation"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Design the experience. Let AI deliver it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CX MATTERS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Customer Experience Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Experience is the brand. And it's now the growth engine.
              </h2>
              <p className="mt-4 text-dark/70">
                In every category, the businesses winning today are not necessarily the ones with the
                best product — they're the ones with the most responsive, personalized and effortless
                customer experience.
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
                Start with the customer. The technology follows.
              </h2>
              <p className="mt-4 text-dark/70">
                We begin with the friction your customers feel and the moments where experience
                breaks down — and then redesign the journey to fix it.
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
                  AI Customer Experience Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Intelligent engagement — engineered around the customer.
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
                The Ace360degree CX Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A disciplined path from generic interactions to intelligent experiences.
              </h2>
              <p className="mt-4 text-canvas/70">
                Five stages that turn customer experience from a service function into a
                strategic growth capability.
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

      {/* 6. CUSTOMER JOURNEY TRANSFORMATION */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Customer Journey Transformation
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                From fragmented touchpoints to a connected experience.
              </h2>
              <p className="mt-4 text-dark/70">
                We don't automate isolated tasks — we transform the customer journey end to end,
                from first enquiry to long-term advocacy.
              </p>
            </div>
            <div className="mt-12 border border-dark/10 bg-canvas divide-y divide-dark/10">
              {journey.map((j, i) => (
                <div key={j.stage} className="grid md:grid-cols-12 gap-6 p-7">
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-serif text-xl text-brand">0{i + 1}</span>
                    <h3 className="font-serif text-2xl">{j.stage}</h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-dark/50 font-semibold">Before</p>
                    <p className="mt-2 text-sm text-dark/70 leading-relaxed">{j.before}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">With Ace360degree</p>
                    <p className="mt-2 text-sm text-dark/80 leading-relaxed">{j.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. INDUSTRY USE CASES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Industry Use Cases
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Customer experience, tailored to your industry.
              </h2>
              <p className="mt-4 text-dark/70">
                Every sector has its own moments of truth. We bring industry-aware CX design to
                each engagement — so the experience fits the customer, not a generic template.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((d) => (
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

      {/* 8. EXAMPLE WORKFLOWS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Example Workflows
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real customer journeys. Real business outcomes.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {workflows.map((u, i) => (
                <article key={u.t} className="border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors">
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                    Workflow {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{u.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{u.b}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                "Faster Response Times",
                "Better Customer Satisfaction",
                "Improved Lead Conversion",
                "Reduced Support Costs",
                "Enhanced Customer Loyalty",
              ].map((o) => (
                <div key={o} className="border border-dark/10 bg-canvas px-4 py-3 text-sm font-medium text-dark/80">
                  {o}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 9. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A customer experience partner — not a chatbot vendor.
              </h2>
              <p className="mt-5 text-dark/70">
                Since 2009, we've helped organizations across industries reimagine how they engage,
                serve and grow with their customers. Our CX practice combines strategy, brand,
                technology and AI — delivering experiences that build loyalty and revenue.
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

      {/* 10. FAQ */}
      <Reveal>
        <section className="bg-light">
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

      {/* 11. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Ready To Transform Your Customer Experience?
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Serve faster. <em className="text-brand not-italic">Engage</em> deeper. Grow stronger.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Whether you're starting with one customer journey or transforming experience across the
            organization, our team will help you design intelligent, personalized engagement that
            improves satisfaction, conversion and lifetime value.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book CX Strategy Session <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Experience Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
