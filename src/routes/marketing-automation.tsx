import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-heroy1.jpg";
import caseAmigo from "@/assets/case-amigoy6.jpg";
import caseMos from "@/assets/case-mosy6.jpg";
import caseRexello from "@/assets/case-rexelloy6.jpg";

export const Route = createFileRoute("/marketing-automation")({
  component: MarketingAutomationPage,
  head: () => ({
    meta: [
      {
        title:
          "Marketing Automation Services Mumbai | Lead Nurturing & Customer Journeys | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Marketing Automation & Customer Journey Partner helping businesses automate communication, nurture leads, integrate CRM systems and strengthen customer relationships across email, WhatsApp and digital touchpoints.",
      },
      {
        property: "og:title",
        content: "Marketing Automation & Customer Journey Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Automate smarter. Convert faster. Build customer journeys that nurture leads, improve conversions and strengthen relationships.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/marketing-automation" },
    ],
    links: [{ rel: "canonical", href: "/marketing-automation" }],
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
    q: "Leads Falling Through The Cracks?",
    s: "Automate follow-up processes and ensure consistent response across every lead source — so no opportunity is lost to slow or missed communication.",
    tag: "Follow-Up Discipline",
  },
  {
    q: "Manual Communication Consuming Time?",
    s: "Reduce repetitive work through intelligent workflows that handle routine communication — freeing your team to focus on high-value conversations.",
    tag: "Operational Efficiency",
  },
  {
    q: "Low Lead-To-Customer Conversion?",
    s: "Build structured nurturing systems that guide prospects through the buying journey — building trust and momentum at every stage.",
    tag: "Conversion Lift",
  },
  {
    q: "Poor Customer Retention?",
    s: "Strengthen relationships through ongoing engagement and lifecycle communication that keeps your brand relevant after the first sale.",
    tag: "Retention",
  },
  {
    q: "Disconnected Sales & Marketing?",
    s: "Connect systems, teams and customer data so marketing efforts translate cleanly into sales conversations and pipeline movement.",
    tag: "Alignment",
  },
  {
    q: "No Visibility Into Customer Journeys?",
    s: "Track interactions across channels and stages — and continuously optimise the journey based on behaviour, intent and outcomes.",
    tag: "Visibility",
  },
];

const solutions = [
  {
    name: "Lead Nurturing Automation",
    outcome: "Build structured communication journeys that turn interest into intent.",
    services: [
      "Lead Workflows",
      "Nurture Sequences",
      "Follow-Up Automation",
      "Customer Journey Design",
      "Lifecycle Campaigns",
    ],
  },
  {
    name: "Email Marketing Automation",
    outcome: "Deliver personalised, timely communication at scale.",
    services: [
      "Welcome Series",
      "Drip Campaigns",
      "Customer Retention Campaigns",
      "Newsletter Automation",
      "Behaviour-Based Messaging",
    ],
  },
  {
    name: "WhatsApp Automation",
    outcome: "Improve engagement through real-time, conversational messaging.",
    services: [
      "WhatsApp Business API",
      "Automated Responses",
      "Broadcast Campaigns",
      "Appointment Reminders",
      "Lead Follow-Ups",
    ],
  },
  {
    name: "CRM & Lead Management Integration",
    outcome: "Connect marketing and sales activities into a single source of truth.",
    services: [
      "CRM Integration",
      "Lead Routing",
      "Sales Automation",
      "Pipeline Visibility",
      "Customer Tracking",
    ],
  },
  {
    name: "AI-Powered Personalisation",
    outcome: "Deliver more relevant experiences across every touchpoint.",
    services: [
      "Audience Segmentation",
      "Behaviour Tracking",
      "Dynamic Messaging",
      "Predictive Engagement",
      "Personalised Campaigns",
    ],
  },
  {
    name: "Analytics & Journey Optimisation",
    outcome: "Measure and improve automation performance continuously.",
    services: [
      "Open & Click Tracking",
      "Lead Conversion Tracking",
      "Customer Journey Analytics",
      "ROI Dashboards",
      "Workflow Optimisation",
    ],
  },
];

const framework = [
  { step: "Capture", body: "Collect and organise leads from every channel into a structured system — websites, ads, social, events and offline sources." },
  { step: "Nurture", body: "Deliver relevant communication aligned to each lead's stage, interest and behaviour — guiding them with value, not noise." },
  { step: "Engage", body: "Build trust through consistent, conversational touchpoints across email, WhatsApp and other preferred channels." },
  { step: "Convert", body: "Support the sales team with timely handoffs, qualification signals and decision-stage content that closes confidently." },
  { step: "Retain", body: "Strengthen long-term customer value through lifecycle programmes, retention journeys and ongoing engagement." },
];

const platforms = [
  "HubSpot",
  "Zoho CRM",
  "Salesforce",
  "Mailchimp",
  "Brevo",
  "Meta Business API",
  "Wati",
  "Twilio",
  "Google Analytics",
  "Custom CRM Systems",
];

const stories = [
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "High enquiry volume during admission cycles with inconsistent follow-up — leading to lost leads and overworked counsellors.",
    strategy:
      "Designed automated nurturing journeys across email and WhatsApp, integrated with CRM for lead routing, qualification and counsellor handoff.",
    outcome:
      "Faster response times, higher counsellor productivity and a measurable lift in admissions from existing enquiry traffic.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech business needing to onboard, engage and retain a distributor network across multiple geographies and product lines.",
    strategy:
      "Built lifecycle communication journeys, behaviour-based campaigns and CRM-integrated workflows for activation, engagement and reactivation.",
    outcome:
      "Stronger distributor engagement, improved activation rates and a structured, automated communication backbone for scaling operations.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "B2B enquiries flowing into multiple channels with limited follow-up consistency, no structured nurturing and weak sales pipeline visibility.",
    strategy:
      "Implemented CRM integration, lead routing, email nurture sequences and pipeline tracking across global enquiry sources.",
    outcome:
      "Cleaner pipeline, faster qualification and stronger conversion from enquiry to confirmed B2B opportunity.",
  },
];

const whyUs = [
  {
    t: "Business-First Automation",
    b: "We start with the business outcome — revenue, retention, efficiency — then design the automation that delivers it. Not the other way around.",
  },
  {
    t: "Marketing + Technology Expertise",
    b: "We bridge the gap between marketing intent and technical execution — so workflows actually run, integrate and scale.",
  },
  {
    t: "Customer Journey Thinking",
    b: "We design journeys, not just campaigns. Every touchpoint is mapped to a stage, intent and outcome in the customer relationship.",
  },
  {
    t: "CRM & System Integration",
    b: "We connect marketing platforms with CRMs, sales systems and customer data — creating a single, intelligent view of every customer.",
  },
  {
    t: "AI-Enhanced Workflows",
    b: "We use AI to personalise messaging, predict behaviour and surface high-intent leads — making automation smarter, not just faster.",
  },
  {
    t: "Long-Term Optimisation",
    b: "We treat automation as a living system — measured, refined and improved over time, not set up once and forgotten.",
  },
  {
    t: "No Spam. No Generic Templates.",
    b: "We do not believe in mass blasts or recycled templates. Every workflow is built for relevance, trust and long-term brand health.",
  },
];

const faqs = [
  {
    q: "What is marketing automation?",
    a: "Marketing automation is the practice of using systems and intelligent workflows to deliver timely, relevant and personalised communication across the customer journey — from first interest to long-term retention.",
  },
  {
    q: "How does automation improve lead conversion?",
    a: "By ensuring consistent follow-up, delivering the right message at the right stage and removing manual delays. Structured nurturing keeps leads engaged until they are ready to buy — and hands them to sales at the right moment.",
  },
  {
    q: "Can automation integrate with my CRM?",
    a: "Yes. We integrate with HubSpot, Zoho, Salesforce and most leading CRMs — as well as custom systems — so marketing activity, sales activity and customer data live in one connected environment.",
  },
  {
    q: "Do you support WhatsApp Business API?",
    a: "Yes. We design and deploy WhatsApp automation through the official Business API and trusted partners — including broadcast campaigns, conversational journeys, reminders and lead follow-ups.",
  },
  {
    q: "Do you provide email content and workflows?",
    a: "Yes. Our team builds the strategy, content, workflows and segmentation logic — covering welcome series, drip campaigns, retention journeys and behaviour-triggered messaging.",
  },
  {
    q: "How do you measure automation success?",
    a: "We measure what matters to your business: open and click performance, lead conversion, sales velocity, retention rates and overall ROI — visualised through clean, decision-ready dashboards.",
  },
  {
    q: "Can automation support customer retention?",
    a: "Absolutely. Retention is where automation delivers some of its highest ROI — through lifecycle journeys, renewal reminders, win-back campaigns and ongoing engagement that strengthens long-term value.",
  },
];

/* ---------- page ---------- */
function MarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Marketing Automation</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Marketing Automation & Customer Journey Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Turn interest into <em className="text-brand not-italic">relationships.</em>{" "}
              Turn relationships into revenue.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Customers expect timely, relevant and personalised communication. We help businesses
              automate customer journeys across email, WhatsApp, CRM and digital touchpoints —
              ensuring every lead receives the right message at the right time, with less manual
              effort and stronger conversions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Book Automation Consultation <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Request Workflow Assessment <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Journeys Built", v: "200+" },
                { k: "Channels", v: "Email · WA · CRM" },
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
                alt="Marketing automation and customer journey orchestration"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Right message. Right moment. Real relationships.</p>
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
                Start with the business problem. The automation follows.
              </h2>
              <p className="mt-4 text-dark/70">
                Most automation fails because it begins with tools, not journeys. We start with the
                gap in your business — then design the workflow, content and integrations that close it.
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
                  Our Marketing Automation Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete automation practice — built around customer journeys.
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

      {/* 4. CUSTOMER JOURNEY FRAMEWORK */}
      <Reveal>
        <section className="bg-dark text-canvas">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                The Ace360degree Customer Journey Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Capture, nurture and grow — across the entire customer lifecycle.
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

      {/* 5. PLATFORMS & INTEGRATIONS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.45em] uppercase text-brand font-semibold">
                Platforms & Integrations
              </span>
              <h2 className="mt-4 font-serif text-[40px] md:text-[58px] leading-[1.06] tracking-[-0.02em] text-dark">
                Connected systems create better customer experiences.
              </h2>
              <p className="mt-6 max-w-2xl text-sm md:text-[15px] leading-7 text-dark/65">
                We are platform-agnostic. We work with your existing systems — and connect them into an intelligent, automated stack
                designed around your customer.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px border border-dark/10 bg-dark/10">
              {platforms.map((p) => (
                <div
                  key={p}
                  className="bg-canvas min-h-[76px] px-4 py-5 flex items-center justify-center text-center"
                >
                  <p className="font-serif text-[17px] leading-none text-dark">{p}</p>
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
                Automation Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Better journeys. Better conversions. Measurable business outcomes.
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
                      alt={`${s.client} marketing automation case study`}
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
                Why businesses choose Ace360degree for marketing automation.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine marketing strategy, customer journey thinking and integration expertise —
                built for organisations that want stronger relationships and measurable growth,
                not just more emails sent.
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
                A clearer view of how marketing automation works — and how it strengthens
                relationships and drives growth.
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
            Automate Smarter. Convert Faster. Grow Better.
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Build journeys that <em className="text-brand not-italic">grow revenue.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Create intelligent customer journeys that improve engagement, strengthen relationships
            and drive measurable business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
            >
              Book Automation Consultation <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-canvas/30 px-6 py-3.5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-canvas hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
            >
              Request Workflow Assessment <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
