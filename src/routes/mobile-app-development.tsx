import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseRexello from "@/assets/case-rexello.jpg";

export const Route = createFileRoute("/mobile-app-development")({
  component: MobileAppPage,
  head: () => ({
    meta: [
      {
        title:
          "Mobile App Development Services Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Mobile Experience & Digital Platform Partner helping businesses create engaging, scalable and high-performance mobile solutions that support growth, efficiency and customer engagement.",
      },
      {
        property: "og:title",
        content: "Mobile App Development Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Build Mobile Experiences That Drive Business Growth. Mobile apps designed to engage users, simplify operations and accelerate long-term business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mobile-app-development" },
    ],
    links: [{ rel: "canonical", href: "/mobile-app-development" }],
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
    q: "Need Better Customer Engagement?",
    s: "Create experiences customers can access anytime, anywhere — designing mobile interactions that fit into daily routines and create ongoing brand connection.",
    tag: "Engagement",
  },
  {
    q: "Manual Processes Slowing Operations?",
    s: "Digitize workflows through mobile solutions — empowering teams with on-the-go access to information, approvals and productivity tools that accelerate execution.",
    tag: "Efficiency",
  },
  {
    q: "Need Better Customer Convenience?",
    s: "Deliver services directly through mobile experiences — removing friction, simplifying access and creating the kind of convenience that builds loyalty and repeat usage.",
    tag: "Convenience",
  },
  {
    q: "Looking To Launch A New Digital Product?",
    s: "Build scalable mobile platforms for growth — designing applications that start strong and expand gracefully as your user base, features and business ambitions grow.",
    tag: "Growth",
  },
  {
    q: "Need Real-Time Data Access?",
    s: "Enable information and reporting on the go — giving decision-makers, field teams and stakeholders the real-time visibility they need to act with confidence.",
    tag: "Intelligence",
  },
  {
    q: "Want To Connect Devices & Systems?",
    s: "Build mobile ecosystems integrated with your business platforms — connecting hardware, software and data into unified experiences that create operational advantage.",
    tag: "Integration",
  },
];

const solutions = [
  {
    name: "Customer Mobile Applications",
    outcome: "Consumer-facing apps that create convenience, build loyalty and turn mobile devices into direct channels for engagement, service delivery and brand connection.",
    services: [
      "Consumer Apps",
      "Membership Apps",
      "Loyalty Apps",
      "Service Apps",
    ],
  },
  {
    name: "Enterprise Mobile Applications",
    outcome: "Internal platforms that empower employees, streamline operations and create the mobile infrastructure that supports productivity, communication and business efficiency.",
    services: [
      "Employee Apps",
      "Internal Communication Apps",
      "Field Service Apps",
      "Business Productivity Apps",
    ],
  },
  {
    name: "IoT & Connected Applications",
    outcome: "Mobile interfaces for connected ecosystems — controlling devices, monitoring systems and accessing real-time data from hardware and sensors through intuitive mobile experiences.",
    services: [
      "Device Monitoring",
      "Remote Control Apps",
      "Dashboard Apps",
      "Real-Time Tracking",
    ],
  },
  {
    name: "E-Commerce & Commerce Apps",
    outcome: "Mobile commerce experiences that combine beautiful product presentation with seamless checkout — turning mobile devices into revenue channels that customers enjoy using.",
    services: [
      "Shopping Apps",
      "Marketplace Apps",
      "Subscription Apps",
      "Payment Integrations",
    ],
  },
  {
    name: "Education & Learning Apps",
    outcome: "Mobile learning platforms that deliver courses, assessments and content in engaging, accessible formats — supporting students, professionals and organisations in their growth.",
    services: [
      "Learning Platforms",
      "Student Portals",
      "Assessment Systems",
      "Course Delivery Apps",
    ],
  },
  {
    name: "Custom Mobile Platforms",
    outcome: "Bespoke mobile applications designed for unique business challenges — combining custom functionality, system integration and brand experience into purpose-built solutions.",
    services: [
      "Business-Specific Applications",
      "API Integrations",
      "Workflow Apps",
      "Digital Transformation Projects",
    ],
  },
];

const framework = [
  { step: "Discover", body: "Understand users, objectives and opportunities — mapping audience needs, business goals, competitive context and technical requirements before any design or development begins." },
  { step: "Design", body: "Create intuitive mobile experiences — wireframes, interaction flows and visual systems designed for touch, context and the unique constraints and opportunities of mobile." },
  { step: "Develop", body: "Build scalable and secure applications — engineering with clean architecture, performance optimization and the technical foundations that support growth and reliability." },
  { step: "Deploy", body: "Launch successfully across app ecosystems — with App Store and Play Store readiness, analytics setup, user onboarding and the infrastructure for confident distribution." },
  { step: "Scale", body: "Continuously improve and expand capabilities — monitoring usage, iterating on feedback, adding features and optimising performance as your app and audience grow." },
];

const techStack = [
  "Flutter",
  "React Native",
  "Android",
  "iOS",
  "AWS",
  "Firebase",
  "Node.js",
  "Laravel APIs",
  "Cloud Infrastructure",
];

const stories = [
  {
    img: caseRexello,
    client: "Vigna Electronics",
    challenge:
      "An electronics and IoT company needing a mobile platform that connected hardware devices to user interfaces — enabling customers to monitor, control and interact with connected systems remotely.",
    strategy:
      "Developed a custom IoT mobile application integrated with AWS cloud infrastructure — combining real-time device communication, intuitive control interfaces, dashboard visualisation and secure user authentication.",
    outcome:
      "Improved customer experience with connected products, strengthened competitive positioning in the IoT market and a scalable platform architecture that supported additional device integrations over time.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education institution seeking to extend its learning ecosystem beyond the classroom — needing a mobile platform that connected students to courses, assessments, schedules and institutional resources.",
    strategy:
      "Built a comprehensive student mobile app integrated with ERP systems — combining course access, assessment submission, progress tracking, institutional communication and offline content availability.",
    outcome:
      "Increased student engagement with digital learning, reduced administrative workload through self-service features and a mobile platform that became central to the institution's educational delivery.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A fintech organisation needing an internal communication and productivity platform that connected remote teams, streamlined information access and supported operational coordination across departments.",
    strategy:
      "Developed an enterprise mobile application combining internal messaging, document access, workflow approvals and team coordination — creating a unified digital workplace accessible from anywhere.",
    outcome:
      "Improved team coordination and response times, stronger information accessibility for remote staff and an internal platform that reduced dependency on fragmented communication tools.",
  },
];

const whyUs = [
  {
    t: "Business-First Thinking",
    b: "We design apps around business outcomes — engagement, efficiency, revenue, growth. Every feature, flow and screen serves a strategic purpose, not a technical demonstration.",
  },
  {
    t: "UI/UX Driven Experiences",
    b: "We prioritise user experience in every decision — creating interfaces that are intuitive, engaging and accessible. An app that users enjoy is an app they keep using.",
  },
  {
    t: "Cross-Platform Expertise",
    b: "We develop for iOS, Android and cross-platform frameworks — selecting the right approach for your audience, budget and timeline without compromising quality or performance.",
  },
  {
    t: "Integration Capabilities",
    b: "We connect mobile applications with your existing systems — CRM, ERP, payment gateways, analytics and cloud infrastructure — creating unified digital ecosystems.",
  },
  {
    t: "Cloud & IoT Experience",
    b: "We build connected applications that leverage cloud infrastructure, real-time data and device integration — creating mobile experiences that go beyond traditional app boundaries.",
  },
  {
    t: "Long-Term Support",
    b: "We do not disappear after launch. Our engagement includes ongoing maintenance, performance monitoring, OS updates and feature evolution as your business grows.",
  },
  {
    t: "No Technology For Technology's Sake",
    b: "We select platforms and frameworks based on your needs, not trends. The right technology is the one that serves your users, your goals and your growth — not the one that sounds most advanced.",
  },
  {
    t: "No One-Size-Fits-All Solutions",
    b: "Every application is designed for your business, your users and your context. We do not repurpose templates — we create mobile experiences that are uniquely yours.",
  },
];

const faqs = [
  {
    q: "What types of mobile apps do you build?",
    a: "We build customer-facing apps, enterprise platforms, IoT-connected applications, e-commerce solutions, education platforms and custom mobile experiences. Every application is designed around business objectives and user needs rather than technology preferences.",
  },
  {
    q: "Do you develop Flutter apps?",
    a: "Yes. We develop with Flutter, React Native, native Android and native iOS — selecting the framework that best serves your performance requirements, user experience goals and development timeline.",
  },
  {
    q: "Can you integrate with CRM and ERP systems?",
    a: "Yes. We design and build integrations with CRM, ERP, payment systems, analytics platforms and business software — creating mobile applications that connect seamlessly with your existing digital infrastructure.",
  },
  {
    q: "Do you build IoT-enabled applications?",
    a: "Yes. IoT and connected applications are a core part of our practice. We build mobile interfaces that communicate with hardware devices, sensors and cloud systems — enabling monitoring, control and real-time data access.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. Our engagement includes ongoing support, performance monitoring, security updates, OS compatibility maintenance and feature evolution. We treat mobile applications as long-term business assets, not one-time projects.",
  },
  {
    q: "Can you help with App Store and Play Store deployment?",
    a: "Yes. We manage the full deployment process — app store listing preparation, submission, compliance, asset creation and launch coordination — ensuring your application reaches users smoothly and professionally.",
  },
];

/* ---------- page ---------- */
function MobileAppPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Mobile App Development</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Mobile Experience & Digital Platform Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Mobile apps designed to engage users, simplify{" "}
              <em className="text-brand not-italic">operations</em>{" "}
              & accelerate growth.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Mobile applications have become one of the most powerful ways to connect with
              customers, empower employees and create new digital experiences. At Ace360degree,
              we design and develop mobile platforms that combine intuitive user experiences
              with scalable technology foundations. Whether you're launching a customer-facing
              app, an enterprise platform or an IoT-enabled solution, we build applications
              designed for long-term business value.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Start My App Project <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book App Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Apps Delivered", v: "150+" },
                { k: "Focus", v: "Engagement · Efficiency · Growth" },
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
                alt="Mobile experience and digital platform partner building strategic mobile applications"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Build Mobile Experiences That Drive Business Growth.</p>
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
                The mobile question is almost always a connection question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Mobile is not just another screen. It is the screen people carry with them
                everywhere — the device they check first thing in the morning and last thing
                at night. When your business shows up there with value, convenience and
                relevance, you create connections that desktop experiences cannot match.
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
                  Our Mobile App Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Mobile platforms designed for business impact.
                </h2>
                <p className="mt-4 text-dark/70">
                  From customer apps and enterprise platforms to IoT solutions and custom
                  mobile experiences — we build applications that combine strategic thinking
                  with exceptional user experience and technical excellence.
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
                Our Mobile Development Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to mobile platforms.
              </h2>
              <p className="mt-4 text-dark/70">
                Exceptional mobile experiences require more than coding skill. Our five-stage
                framework creates the strategic thinking, design discipline and technical
                rigour that turn app ideas into business assets.
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

      {/* 5. TECHNOLOGY ECOSYSTEM */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Technology Ecosystem
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Modern technology supporting exceptional experiences.
              </h2>
              <p className="mt-4 text-dark/70">
                We select and implement technology based on business need — not trend.
                Our expertise spans cross-platform frameworks, native development and cloud
                infrastructure that create the technical foundation for high-performance mobile solutions.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-px bg-dark/10 border border-dark/10">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="bg-light p-8 hover:bg-brand/10 transition-colors flex items-center justify-center"
                >
                  <span className="font-serif text-lg text-center">{tech}</span>
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
                Real brands. Real platforms. Real growth.
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
                      alt={`${story.client} mobile app development case study`}
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
                View Mobile App Case Studies <span aria-hidden>→</span>
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
                Why businesses choose Ace360degree for mobile app development.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not write code for its own sake. We build mobile platforms — strategic
                experiences that engage users, improve operations and support sustainable
                business growth.
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
              Start Building Your Mobile Platform
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Turn mobile into a competitive advantage.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Create mobile experiences that engage users, improve operations and support
              long-term business growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Request App Proposal <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book App Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
