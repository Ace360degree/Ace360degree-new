import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseRexello from "@/assets/case-rexello.jpg";

export const Route = createFileRoute("/crm-erp-solutions")({
  component: CrmErpPage,
  head: () => ({
    meta: [
      {
        title:
          "CRM & ERP Solutions Mumbai | Business Systems & Process Transformation | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Business Systems & Process Transformation Partner helping organizations improve visibility, automate operations and create scalable foundations for growth through custom CRM and ERP solutions.",
      },
      {
        property: "og:title",
        content: "CRM & ERP Solutions Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Transform Operations. Improve Visibility. Scale Efficiently. Business systems designed to improve control, efficiency and sustainable growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/crm-erp-solutions" },
    ],
    links: [{ rel: "canonical", href: "/crm-erp-solutions" }],
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
    q: "Sales Teams Lack Visibility?",
    s: "Track leads, opportunities and performance from a single platform — creating the transparency that helps teams prioritise, follow up and close with confidence.",
    tag: "Visibility",
  },
  {
    q: "Operations Depend On Manual Processes?",
    s: "Automate repetitive tasks and reduce inefficiencies — freeing your team to focus on high-value work while eliminating the errors and delays that manual processes create.",
    tag: "Automation",
  },
  {
    q: "Departments Work In Silos?",
    s: "Create connected systems that improve collaboration — ensuring that sales, operations, finance and customer service share the same information and work from the same truth.",
    tag: "Collaboration",
  },
  {
    q: "Difficult To Track Business Performance?",
    s: "Gain real-time dashboards and reporting — giving leadership the visibility to make informed decisions, spot opportunities and address issues before they become problems.",
    tag: "Intelligence",
  },
  {
    q: "Need Better Customer Management?",
    s: "Centralize customer data and interactions — creating a complete view of every relationship that enables personalised service, proactive engagement and stronger retention.",
    tag: "Customer",
  },
  {
    q: "Scaling Operations Becoming Difficult?",
    s: "Build systems that grow with your business — designing architecture, workflows and processes that handle increasing volume without increasing complexity or headcount.",
    tag: "Scalability",
  },
];

const solutions = [
  {
    name: "Customer Relationship Management (CRM)",
    outcome: "A centralised sales and customer platform that tracks every lead, opportunity and interaction — giving your team visibility, accountability and the tools to convert more prospects into loyal customers.",
    services: [
      "Lead Management",
      "Sales Pipeline Tracking",
      "Follow-Up Automation",
      "Customer Lifecycle Management",
      "Performance Dashboards",
    ],
  },
  {
    name: "Enterprise Resource Planning (ERP)",
    outcome: "An integrated business management system that connects HR, finance, inventory and operations — creating the unified data and workflow foundation that supports efficient, scalable growth.",
    services: [
      "HR Management",
      "Finance & Accounts",
      "Inventory Management",
      "Operations Management",
      "Workflow Automation",
    ],
  },
  {
    name: "Custom Business Portals",
    outcome: "Bespoke digital portals for employees, partners and customers — creating self-service access, streamlined communication and the kind of digital experience that reduces friction and strengthens relationships.",
    services: [
      "Employee Portals",
      "Partner Portals",
      "Customer Self-Service Portals",
      "Agent Management Systems",
    ],
  },
  {
    name: "Industry-Specific Solutions",
    outcome: "Custom systems designed for the unique workflows, compliance requirements and operational needs of specific industries — creating software that fits your business rather than forcing your business to fit generic software.",
    services: [
      "Education ERP",
      "Manufacturing ERP",
      "Fintech Platforms",
      "Healthcare Management Systems",
      "Membership Platforms",
    ],
  },
  {
    name: "Workflow Automation",
    outcome: "Automated business processes that reduce manual effort, eliminate bottlenecks and ensure consistency — creating operational efficiency that scales without proportional increases in team size.",
    services: [
      "Approvals",
      "Notifications",
      "Task Automation",
      "Document Management",
      "Business Process Automation",
    ],
  },
  {
    name: "Reporting & Business Visibility",
    outcome: "Real-time dashboards, operational reports and performance analytics that transform raw data into actionable insight — giving decision-makers the clarity to lead with confidence.",
    services: [
      "Executive Dashboards",
      "Operational Reports",
      "Performance Monitoring",
      "KPI Tracking",
      "Analytics Integration",
    ],
  },
];

const framework = [
  { step: "Analyze", body: "Understand workflows and bottlenecks — mapping current processes, identifying inefficiencies and defining the business outcomes that will determine success." },
  { step: "Design", body: "Map processes and system architecture — designing workflows, data structures and user experiences that align with how your business actually operates." },
  { step: "Automate", body: "Reduce manual effort and repetitive tasks — implementing the rules, triggers and workflows that free your team to focus on value-creation rather than administration." },
  { step: "Implement", body: "Deploy systems across teams — with training, data migration, integration and the change management support that ensures adoption and confidence." },
  { step: "Optimize", body: "Continuously improve performance and adoption — monitoring usage, refining workflows and expanding capabilities as your business evolves and new needs emerge." },
];

const ecosystem = [
  { from: "Website", to: "CRM", body: "Capture leads, enquiries and customer data directly into your CRM from website forms, chat and digital interactions." },
  { from: "CRM", to: "ERP", body: "Connect sales data with operations, finance and fulfilment — ensuring that customer commitments flow seamlessly into business execution." },
  { from: "ERP", to: "Mobile App", body: "Give teams real-time access to business data, approvals and workflows from anywhere through integrated mobile experiences." },
  { from: "ERP", to: "Accounting", body: "Synchronise financial data automatically — eliminating double entry, reducing errors and accelerating reporting and compliance." },
  { from: "ERP", to: "HR", body: "Connect employee data, payroll, attendance and performance management into a unified human capital management system." },
  { from: "ERP", to: "Analytics", body: "Feed operational data into analytics and business intelligence platforms — creating the dashboards that turn activity into insight." },
];

const stories = [
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An educational institution managing students, staff, admissions, fees and operations across disconnected spreadsheets and manual processes — creating administrative burden, data inconsistencies and limited visibility into institutional performance.",
    strategy:
      "Designed and implemented a comprehensive education ERP combining student information management, HR, accounts, admissions workflows and reporting — creating a unified digital infrastructure that replaced fragmented tools.",
    outcome:
      "Reduced administrative workload, improved data accuracy across departments, stronger institutional visibility and a scalable platform that supports growth without proportional increases in operations staff.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A fintech organisation with an expanding agent network needing a CRM and performance platform to manage lead distribution, agent activity, follow-up tracking and sales performance across multiple regions.",
    strategy:
      "Developed a custom CRM and agent management platform with lead pipeline tracking, automated follow-up workflows, performance dashboards and territory management — giving the business real-time visibility into sales activity.",
    outcome:
      "Improved lead conversion rates, stronger agent accountability, real-time performance visibility for leadership and a scalable platform that supported network expansion without operational friction.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "An industrial manufacturer needing to track sales activity, manage distributor relationships and generate performance reporting across a multi-channel sales operation — with data scattered across individual records and informal systems.",
    strategy:
      "Built a custom sales tracking and reporting system integrating lead management, opportunity tracking, distributor communication and executive dashboards — creating a single source of truth for sales performance.",
    outcome:
      "Improved sales team coordination, stronger distributor relationship management, faster reporting cycles and the data-driven visibility that supports strategic decision-making.",
  },
  {
    img: caseMos,
    client: "Future SaaS Platforms",
    challenge:
      "Organisations across sectors needing bespoke workflow automation solutions — moving from manual processes and disconnected tools to integrated digital systems that reduce effort, improve accuracy and support growth.",
    strategy:
      "Developed custom workflow automation platforms combining business process design, system integration, notification engines and document management — tailored to the specific operational needs of each organisation.",
    outcome:
      "Significant reduction in manual processing time, fewer errors and delays, improved team productivity and the kind of operational foundation that supports sustainable scaling.",
  },
];

const whyUs = [
  {
    t: "Business-First Approach",
    b: "We begin with your business objectives and operational realities. Every system design, workflow and feature serves a business purpose — never technology for its own sake.",
  },
  {
    t: "Process Transformation Expertise",
    b: "We do not just implement software. We transform processes — redesigning workflows, eliminating inefficiencies and creating the operational discipline that systems alone cannot provide.",
  },
  {
    t: "Custom Development Capabilities",
    b: "When off-the-shelf solutions do not fit, we build. Custom portals, industry-specific systems and bespoke workflow automation designed around how your business actually works.",
  },
  {
    t: "Marketing + Operations Understanding",
    b: "We understand both sides of the business — from lead generation and customer management to inventory, finance and fulfilment. Systems designed for the complete business, not isolated departments.",
  },
  {
    t: "Scalable Architecture",
    b: "We build systems that handle growth. Architecture, data models and workflows designed to scale in volume, complexity and capability as your business expands.",
  },
  {
    t: "Long-Term Partnership Model",
    b: "We do not disappear after deployment. Our engagement includes training, support, ongoing optimization and feature evolution — treating your business systems as long-term assets.",
  },
  {
    t: "No Software Bloat",
    b: "We implement what you need. No unnecessary modules, no unused features, no complexity that slows adoption. Systems that are powerful yet focused.",
  },
  {
    t: "No Unnecessary Complexity",
    b: "We believe the best system is the one your team actually uses. We design for clarity, simplicity and adoption — not technical sophistication that confuses more than it helps.",
  },
];

const faqs = [
  {
    q: "What is the difference between CRM and ERP?",
    a: "CRM (Customer Relationship Management) focuses on managing customer relationships, sales and marketing activities. ERP (Enterprise Resource Planning) manages broader business operations — finance, HR, inventory, manufacturing and supply chain. CRM manages the front office. ERP manages the back office. Many businesses benefit from both, integrated together.",
  },
  {
    q: "Do we need both systems?",
    a: "It depends on your business needs. Growing organisations with active sales and customer management often start with CRM. As operations expand, ERP becomes valuable for managing finance, inventory, HR and cross-department workflows. We help you assess your current state and recommend the right approach — whether CRM, ERP or both.",
  },
  {
    q: "Can you customize workflows?",
    a: "Yes. Custom workflows are a core part of our solution design. We map your existing processes, identify improvement opportunities and build workflows, approvals, notifications and automation tailored to how your business operates.",
  },
  {
    q: "Can CRM integrate with our website and mobile app?",
    a: "Yes. We design and build integrations that connect CRM with websites, mobile applications, marketing tools, accounting systems and other business platforms — creating a unified data flow that eliminates double entry and ensures consistency.",
  },
  {
    q: "Do you provide training and support?",
    a: "Yes. Every implementation includes user training, administrator training and comprehensive documentation. Our ongoing support covers technical assistance, workflow refinement, system updates and feature expansion as your needs evolve.",
  },
  {
    q: "Can systems scale as our business grows?",
    a: "Yes. Scalability is designed into every system we build — from architecture and data models to user management and performance optimization. Whether you double in size or expand into new markets, your systems grow with you.",
  },
];

/* ---------- page ---------- */
function CrmErpPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">CRM & ERP Solutions</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Business Systems & Process Transformation Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Business systems designed to improve{" "}
              <em className="text-brand not-italic">control,</em>{" "}
              efficiency & growth.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              As businesses grow, spreadsheets, disconnected tools and manual processes create
              inefficiencies that limit performance. At Ace360degree, we design and implement
              CRM and ERP solutions that centralize data, automate workflows and provide
              real-time visibility across sales, operations, finance and customer management.
              The result is better decisions, stronger collaboration and scalable growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book Business Systems Consultation <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Solution Assessment <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Systems Delivered", v: "150+" },
                { k: "Focus", v: "Automation · Visibility · Growth" },
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
                alt="Business systems and process transformation partner improving operational control and efficiency"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Transform Operations. Improve Visibility. Scale Efficiently.</p>
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
                The systems question is almost always an operations question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                As businesses grow, complexity increases. The tools and processes that worked
                at one stage often become bottlenecks at the next. CRM and ERP systems are not
                about software — they are about creating the operational infrastructure that
                enables consistent performance, clear visibility and confident scaling.
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
                  Our CRM & ERP Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Business systems designed for operational excellence.
                </h2>
                <p className="mt-4 text-dark/70">
                  From CRM and ERP platforms to custom portals, industry-specific systems
                  and workflow automation — we build the connected infrastructure that turns
                  operational chaos into controlled growth.
                </p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((sol) => (
                <div
                  key={sol.name}
                  className="bg-light border border-dark/5 p-8 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-serif text-2xl">{sol.name}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{sol.outcome}</p>
                  <ul className="mt-5 space-y-2">
                    {sol.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm text-dark/70"
                      >
                        <span className="mt-1.5 block h-1 w-1 rounded-full bg-brand shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. FRAMEWORK */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Our Transformation Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to operational transformation.
              </h2>
              <p className="mt-4 text-dark/70">
                Technology alone does not transform businesses. Our five-stage framework
                combines process understanding, system design and change management to create
                operational improvements that last.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-8 relative">
              {framework.map((f, i) => (
                <div key={f.step} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand text-canvas text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="hidden md:block flex-1 h-px bg-dark/10" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{f.step}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 5. CONNECTED ECOSYSTEM */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Connected Systems
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Connected systems create smarter businesses.
              </h2>
              <p className="mt-4 text-dark/70">
                No system should exist in isolation. We design CRM and ERP solutions that
                connect with your website, mobile apps, accounting software, HR platforms
                and analytics tools — creating a unified digital ecosystem where data flows
                freely and every department works from the same truth.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystem.map((conn) => (
                <div
                  key={`${conn.from}-${conn.to}`}
                  className="bg-light border border-dark/5 p-8 hover:border-brand/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg">{conn.from}</span>
                    <span className="text-brand text-lg">↔</span>
                    <span className="font-serif text-lg">{conn.to}</span>
                  </div>
                  <p className="mt-4 text-sm text-dark/70 leading-relaxed">{conn.body}</p>
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
                Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real brands. Real systems. Real transformation.
              </h2>
            </div>

            <div className="mt-12 space-y-12">
              {stories.map((story) => (
                <div
                  key={story.client}
                  className="grid lg:grid-cols-12 gap-8 bg-canvas border border-dark/5 overflow-hidden"
                >
                  <div className="lg:col-span-4">
                    <img
                      src={story.img}
                      alt={`${story.client} CRM and ERP solutions case study`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8 p-8 lg:p-10">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">
                      {story.client}
                    </p>
                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-dark/50 font-semibold mb-2">
                          Challenge
                        </p>
                        <p className="text-sm text-dark/80 leading-relaxed">{story.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-dark/50 font-semibold mb-2">
                          Strategy
                        </p>
                        <p className="text-sm text-dark/80 leading-relaxed">{story.strategy}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-dark/50 font-semibold mb-2">
                          Outcome
                        </p>
                        <p className="text-sm text-dark/80 leading-relaxed">{story.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                View Technology Case Studies <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose Ace360degree for CRM & ERP solutions.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not install software. We transform operations — designing, building and
                optimising business systems that improve visibility, automate workflows and
                create the foundation for confident scaling.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((w) => (
                <div
                  key={w.t}
                  className="bg-light border border-dark/5 p-6 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-serif text-xl">{w.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. FAQ */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Executive FAQ
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Answers to the questions that matter.
              </h2>
            </div>

            <div className="mt-12 max-w-3xl space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-canvas border border-dark/5 group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-serif text-xl pr-4">{faq.q}</span>
                    <span className="text-brand text-2xl leading-none shrink-0 group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm text-dark/70 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 9. FINAL CTA */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Start Transforming Your Operations
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Build systems that scale with your business.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Create connected business platforms that improve efficiency, increase visibility
              and support sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Request Solution Assessment <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Business Systems Consultation <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
