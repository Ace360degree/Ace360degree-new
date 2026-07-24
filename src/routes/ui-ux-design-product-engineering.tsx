import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.a11.jpg";
import caseAmigo from "@/assets/case-amigo.a12.jpg";
import caseMos from "@/assets/case-mos.a13.jpg";
import caseRexello  from "@/assets/case-rexello.a14.jpg";
import  caseCosmos from "@/assets/case-rexello.a15.jpg";

export const Route = createFileRoute("/ui-ux-design-product-engineering")({
  component: UxProductPage,
  head: () => ({
    meta: [
      {
        title:
          "UI/UX Design & Product Engineering Mumbai | Digital Product Consultancy | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Product Design & Engineering Partner helping businesses create intuitive digital experiences, scalable SaaS, CRM, ERP and mobile platforms designed for performance and growth.",
      },
      {
        property: "og:title",
        content: "UI/UX Design & Product Engineering Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Design Better Experiences. Build Better Products. Strategic product design and engineering for SaaS, CRM, ERP and mobile platforms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ui-ux-design-product-engineering" },
    ],
    links: [{ rel: "canonical", href: "/ui-ux-design-product-engineering" }],
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
    t: "Experience Drives Adoption",
    b: "A great product is only valuable if people use it. Thoughtful design removes friction, accelerates onboarding and ensures the features you build actually get adopted by the people they were built for.",
  },
  {
    t: "Design Compounds Into Revenue",
    b: "Every reduced click, clearer workflow and faster decision compounds into higher conversion, stronger retention and lower support costs — design becomes a measurable contributor to business performance.",
  },
  {
    t: "Engineering Determines Scalability",
    b: "Product engineering decisions made today determine whether your platform can support ten users or ten thousand. We build for the business you are growing into, not the one you have today.",
  },
  {
    t: "Differentiation Lives In The Details",
    b: "In crowded markets, product experience is the differentiator. Speed, clarity, polish and intelligent interaction design define how customers, teams and partners perceive your brand and your product.",
  },
];

const challenges = [
  {
    q: "Users Struggle With Your Platform?",
    s: "Redesign workflows around how people actually think and work — removing the cognitive load, dead ends and confusion that slow adoption and increase support tickets.",
    tag: "Usability",
  },
  {
    q: "Low Product Adoption Inside The Business?",
    s: "Design interfaces that teams want to use — combining clear information architecture, intuitive navigation and onboarding flows that turn rollout into routine.",
    tag: "Adoption",
  },
  {
    q: "Legacy Platform Holding You Back?",
    s: "Modernise architecture, interface and experience together — transforming dated platforms into responsive, intelligent products built for current expectations and future growth.",
    tag: "Modernisation",
  },
  {
    q: "Engineering And Design Are Disconnected?",
    s: "Bring product strategy, design and engineering into a single integrated process — eliminating the rework, miscommunication and timeline slippage of fragmented teams.",
    tag: "Alignment",
  },
  {
    q: "Mobile Experience Falling Behind?",
    s: "Design mobile-first product experiences with the performance, polish and offline-readiness that modern users expect from any serious business platform.",
    tag: "Mobile",
  },
  {
    q: "Data Trapped Inside Dashboards Nobody Reads?",
    s: "Reimagine analytics and dashboard experiences — surfacing the signals that drive decisions instead of burying them inside cluttered reports nobody acts on.",
    tag: "Insight",
  },
];

const solutions = [
  {
    name: "Product Strategy & UX Research",
    outcome:
      "Discovery, user research and product definition that align stakeholder vision with real user behaviour — creating the strategic foundation that prevents expensive build mistakes downstream.",
    services: [
      "User Research & Interviews",
      "Journey & Workflow Mapping",
      "Product Definition",
      "Information Architecture",
      "Roadmap Planning",
    ],
  },
  {
    name: "SaaS Platform Design",
    outcome:
      "End-to-end design for SaaS products — combining onboarding, core workflows, billing, settings and admin experiences into a cohesive product that drives activation, retention and expansion.",
    services: [
      "Onboarding Flows",
      "Core Workflow Design",
      "Billing & Account UX",
      "Admin & Settings UX",
      "Multi-Tenant Patterns",
    ],
  },
  {
    name: "CRM & ERP Interface Design",
    outcome:
      "Interfaces designed for the depth and density of business systems — surfacing the right data, decisions and actions at the right moment so power users stay fast and new users get oriented quickly.",
    services: [
      "Sales Pipeline UX",
      "Operations Dashboards",
      "Workflow Approvals",
      "Role-Based Views",
      "Data Entry Efficiency",
    ],
  },
  {
    name: "Mobile App Experience Design",
    outcome:
      "Native and cross-platform mobile experiences engineered for performance, accessibility and engagement — built for the contexts and constraints of real mobile usage, not desktop mock-ups shrunk down.",
    services: [
      "iOS & Android UX",
      "Mobile-First Workflows",
      "Offline & Sync Patterns",
      "Notification Strategy",
      "Performance UX",
    ],
  },
  {
    name: "Customer Portal & Business Application Design",
    outcome:
      "Self-service portals and internal applications that reduce manual effort, accelerate transactions and create the polished digital experience your customers and teams now expect by default.",
    services: [
      "Self-Service Portals",
      "Partner Portals",
      "Agent Platforms",
      "Internal Tools",
      "Approval Workflows",
    ],
  },
  {
    name: "Analytics, IoT & Dashboard Experiences",
    outcome:
      "Dashboards and analytics interfaces that turn telemetry, sensor data and operational signals into clear, decision-ready visualisation — for executives, operators and connected device platforms.",
    services: [
      "Executive Dashboards",
      "Operational Analytics",
      "IoT Device Dashboards",
      "Realtime Visualisation",
      "Reporting UX",
    ],
  },
  {
    name: "Product Engineering",
    outcome:
      "Front-end and full-stack engineering that turns design into production-ready product — performant, accessible and architected to scale alongside the business and the user base.",
    services: [
      "React & Next.js Front-Ends",
      "Component Systems",
      "API Integration",
      "Performance Engineering",
      "Accessibility & QA",
    ],
  },
  {
    name: "Design Systems & Product Innovation",
    outcome:
      "Scalable design systems and innovation engagements that align brand, product and engineering — accelerating delivery, ensuring consistency and unlocking new product opportunities.",
    services: [
      "Design System Build",
      "Pattern Libraries",
      "Prototyping & Validation",
      "Innovation Sprints",
      "AI-Enabled Experiences",
    ],
  },
];

const framework = [
  {
    step: "Discover",
    body: "Understand the business, users and product context — through stakeholder interviews, user research and workflow mapping that surface the problems worth solving.",
  },
  {
    step: "Define",
    body: "Translate research into product strategy — clarifying scope, success metrics, information architecture and the experience principles that guide every downstream decision.",
  },
  {
    step: "Design",
    body: "Move from low-fidelity flows to high-fidelity interfaces and prototypes — validating usability, accessibility and visual direction before a line of production code is written.",
  },
  {
    step: "Engineer",
    body: "Build with production-grade front-end and full-stack engineering — performant, maintainable and architected for scale across web, mobile and connected platforms.",
  },
  {
    step: "Evolve",
    body: "Measure, learn and improve — using analytics, user feedback and iterative releases to refine the experience and expand the product as the business grows.",
  },
];

const whatWeDesign = [
  { t: "SaaS Platforms", b: "Multi-tenant products with onboarding, billing and core workflows designed for activation and retention." },
  { t: "CRM Systems", b: "Sales and customer experience interfaces that keep teams fast, accountable and data-driven." },
  { t: "ERP Platforms", b: "Operational interfaces that handle complex business processes without overwhelming the user." },
  { t: "Mobile Apps", b: "Native and cross-platform experiences engineered for performance, polish and engagement." },
  { t: "Customer Portals", b: "Self-service experiences that reduce friction, support requests and operational load." },
  { t: "Business Applications", b: "Internal tools and workflow apps that turn manual processes into measurable productivity." },
  { t: "IoT Dashboards", b: "Real-time visualisation for connected devices, sensors and operational telemetry." },
  { t: "Analytics Platforms", b: "Decision-ready dashboards that turn data into clarity for executives and operators." },
];

const stories = [
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education platform built across disconnected tools — with admissions, student management and operations split across systems that staff and students alike found inconsistent and difficult to use.",
    strategy:
      "Redesigned the platform around the actual workflows of administrators, faculty and students — combining unified information architecture, role-based dashboards and a coherent design system across web and mobile experiences.",
    outcome:
      "Higher staff adoption, faster admissions cycles, clearer institutional reporting and a product experience that supports scale across programmes and locations.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech network needing a product experience capable of serving thousands of distributed agents — with complex lead distribution, performance tracking and operational workflows on both web and mobile.",
    strategy:
      "Designed an integrated agent product experience combining a performance CRM, mobile agent app and operational dashboards — engineered for high-volume usage, intuitive navigation and clear performance visibility.",
    outcome:
      "Improved agent productivity, stronger network performance, real-time leadership visibility and a scalable product platform that supported continued network expansion.",
  },
  {
    img: caseRexello,
    client: "Vigna Electronics",
    challenge:
      "A consumer electronics brand needing a connected mobile experience for its devices — combining onboarding, control, diagnostics and engagement into a single product that customers would actually keep using.",
    strategy:
      "Designed and engineered an end-to-end mobile product experience covering device pairing, real-time control, in-app support and engagement features — backed by a scalable platform architecture for future devices.",
    outcome:
      "Stronger customer engagement, higher app retention, reduced support load and a product foundation positioned to support new device categories and connected experiences.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "An industrial manufacturer needing to translate a deep, technical product catalogue into a digital experience that helped engineers, distributors and procurement teams find, evaluate and request products with confidence.",
    strategy:
      "Designed and engineered a structured product discovery experience — combining intuitive navigation, technical specification clarity and an enquiry workflow built for B2B decision-making rather than e-commerce browsing.",
    outcome:
      "Stronger enquiry quality, improved buyer confidence, faster sales cycles and a digital product experience that elevated the brand within a traditionally offline category.",
  },
];

const whyUs = [
  {
    t: "Strategy-Led Design",
    b: "Every design decision begins with a business objective and a user problem — not a screen, a colour palette or a trend. Strategy shapes experience, experience shapes outcomes.",
  },
  {
    t: "Integrated Design + Engineering",
    b: "Product strategy, UX, UI and engineering work as a single team. The result is fewer handoff gaps, less rework and product velocity that fragmented teams cannot match.",
  },
  {
    t: "Business Systems Expertise",
    b: "We design CRM, ERP, SaaS and operational platforms every day. We understand density, roles, permissions and workflow depth — not just marketing pages and landing screens.",
  },
  {
    t: "Built For Scale",
    b: "We architect products for tomorrow's load. Component systems, API design, performance and accessibility are engineered in from day one, not retrofitted later.",
  },
  {
    t: "Outcome-Focused Process",
    b: "We measure success in adoption, conversion, retention and operational efficiency — not in deliverables, screens shipped or design awards collected.",
  },
  {
    t: "Future-Ready Capability",
    b: "AI assistance, automation, real-time data and connected device experiences are part of our standard product thinking — preparing your platform for the next decade, not the last.",
  },
  {
    t: "Industry-Versatile Experience",
    b: "Education, fintech, manufacturing, consumer electronics, B2B services — we bring product patterns and proven decisions across categories into every engagement.",
  },
  {
    t: "Long-Term Product Partnership",
    b: "We do not disappear after launch. We continue to evolve the product alongside the business — supporting iteration, expansion and the long roadmap that great products require.",
  },
];

const faqs = [
  {
    q: "Are you a design agency or an engineering company?",
    a: "Neither in isolation. We operate as a product design and engineering partner — combining product strategy, UX, UI and full-stack engineering into a single team. This avoids the gaps that emerge when design, development and strategy live in different organisations.",
  },
  {
    q: "Do you only design new products or also redesign existing ones?",
    a: "Both. We launch new SaaS, CRM, ERP and mobile platforms from zero, and we also redesign and re-engineer existing products — modernising experience, performance and architecture without disrupting the business that already depends on them.",
  },
  {
    q: "Can you work alongside our in-house product and engineering teams?",
    a: "Yes. Many engagements involve embedding with internal product, design and engineering teams — bringing structure, capability and additional capacity while respecting existing systems, conventions and decisions.",
  },
  {
    q: "How do you handle complex business workflows like CRM and ERP interfaces?",
    a: "We start by mapping real workflows with the people who use them — sales teams, operations staff, finance, leadership. We then design role-based experiences that prioritise information density, decision speed and accuracy over generic dashboard aesthetics.",
  },
  {
    q: "Do you build mobile apps as well as web platforms?",
    a: "Yes. We design and engineer native and cross-platform mobile experiences — for customer apps, agent platforms, field operations, IoT devices and any product where mobile is a primary or extending surface.",
  },
  {
    q: "How do you measure product success?",
    a: "We agree on success metrics during product definition — typically a mix of adoption, activation, retention, conversion, task completion and operational efficiency. Those metrics inform design decisions, engineering trade-offs and post-launch iteration.",
  },
];

/* ---------- page ---------- */
function UxProductPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <a href="/technology" className="hover:text-brand">Technology & Digital Platforms</a>
            <span className="mx-1">/</span>
            <span className="text-dark">UI/UX Design & Product Engineering</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Product Design & Engineering Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Design better{" "}
              <em className="text-brand not-italic">experiences.</em>{" "}
              Build better products.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Modern businesses live and die by the quality of their digital products.
              At Ace360degree, we partner with founders, product leaders and enterprises
              to design and engineer SaaS platforms, CRM and ERP interfaces, mobile apps
              and connected experiences that customers adopt, teams rely on and businesses
              scale with.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Book Product Strategy Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Request Product Design Proposal <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Products Shipped", v: "200+" },
                { k: "Focus", v: "Experience · Scale · Adoption" },
              ].map((m) => (
                <div key={m.k}>
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/55">{m.k}</p>
                  <p className="mt-2 font-serif text-2xl">{m.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="Product design and engineering partner building intuitive digital experiences and scalable platforms"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Strategy first. Experience always. Engineering throughout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY PRODUCT DESIGN MATTERS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Product Design Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Product experience is now the most direct expression of the business.
              </h2>
              <p className="mt-4 text-dark/70">
                Customers, employees and partners experience your business through your
                product. Every workflow they complete, every dashboard they read, every
                screen they tap shapes how they perceive your brand and how confidently
                they continue to engage. Product design is no longer a layer on top of
                technology — it is the business.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {whyMatters.map((w) => (
                <div
                  key={w.t}
                  className="bg-canvas border border-dark/5 p-8 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-serif text-2xl">{w.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. BUSINESS CHALLENGES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Business Challenges We Solve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                The product question is almost always a business question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Behind every product brief is a business objective — faster adoption,
                lower churn, better operational efficiency, a clearer competitive
                position. We design and engineer products with those objectives in
                full view from the first conversation.
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

      {/* 4. SOLUTIONS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                  Our Product Design & Engineering Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  End-to-end product capability under a single roof.
                </h2>
                <p className="mt-4 text-dark/70">
                  Product strategy, user research, experience design, interface design,
                  engineering and design systems — delivered as one integrated practice
                  rather than a sequence of disconnected vendors.
                </p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((sol) => (
                <div
                  key={sol.name}
                  className="bg-canvas border border-dark/5 p-8 hover:border-brand/40 transition-colors"
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

      {/* 5. FRAMEWORK */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Our Product Development Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A structured path from idea to scalable product.
              </h2>
              <p className="mt-4 text-dark/70">
                Great products are not designed in isolation or built in a single sprint.
                Our five-stage framework brings strategy, design and engineering together
                from day one — reducing risk, accelerating delivery and ensuring every
                decision serves the business outcome.
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

      {/* 6. WHAT WE DESIGN */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                What We Design
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                The product surfaces we work across.
              </h2>
              <p className="mt-4 text-dark/70">
                From SaaS platforms and enterprise systems to mobile apps and connected
                device experiences — we design and engineer the full range of digital
                products that modern businesses depend on.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDesign.map((w) => (
                <div
                  key={w.t}
                  className="bg-canvas border border-dark/5 p-6 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-serif text-xl">{w.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. CASE STUDIES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Case Studies
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real products. Real users. Real outcomes.
              </h2>
            </div>

            <div className="mt-12 space-y-12">
              {stories.map((story) => (
                <div
                  key={story.client}
                  className="grid lg:grid-cols-12 gap-8 bg-light border border-dark/5 overflow-hidden"
                >
                  <div className="lg:col-span-4">
                    <img
                      src={story.img}
                      alt={`${story.client} product design and engineering case study`}
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
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                View Product Case Studies <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose us as their product partner.
              </h2>
              <p className="mt-4 text-dark/70">
                We are not a UI shop and we are not a coding vendor. We are a digital
                product consultancy — designing and engineering platforms that businesses
                rely on every day to grow.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((w) => (
                <div
                  key={w.t}
                  className="bg-canvas border border-dark/5 p-6 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-serif text-xl">{w.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 9. FAQ */}
      <Reveal>
        <section className="bg-canvas">
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
                  className="bg-light border border-dark/5 group"
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

      {/* 10. FINAL CTA */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Start Building Better Products
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Turn your product into a competitive advantage.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Design intuitive experiences and engineer scalable platforms that
              customers adopt, teams rely on and businesses grow with.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Book Product Strategy Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Request Product Design Proposal <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
