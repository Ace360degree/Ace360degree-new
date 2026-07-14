import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-brandingy1.jpg";
import caseMos from "@/assets/case-mosy2.jpg";
import caseAmigo from "@/assets/case-amigoy2.jpg";
import caseCosmos from "@/assets/case-cosmosy1.jpg";
import caseKuwal from "@/assets/case-kuwaly1.png";  

export const Route = createFileRoute("/website-design-development")({
  component: WebsiteDesignPage,
  head: () => ({
    meta: [
      {
        title:
          "Website Design & Development Services Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Digital Experience & Growth Platform Partner helping businesses create websites that strengthen credibility, generate opportunities and support long-term growth through strategic design and technology.",
      },
      {
        property: "og:title",
        content: "Website Design & Development Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Build Digital Experiences That Drive Business Growth. Websites designed to inspire trust, generate opportunities and support sustainable business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/website-design-development" },
    ],
    links: [{ rel: "canonical", href: "/website-design-development" }],
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
    q: "Website Not Generating Leads?",
    s: "Create experiences optimized for conversion — designing user journeys, messaging and interaction patterns that guide visitors toward enquiry, purchase and meaningful action.",
    tag: "Conversion",
  },
  {
    q: "Brand Doesn't Feel Premium Online?",
    s: "Improve credibility through better design, messaging and digital presentation — ensuring your website reflects the quality and professionalism your business delivers.",
    tag: "Credibility",
  },
  {
    q: "Outdated Website Holding Growth Back?",
    s: "Modernize technology, user experience and performance — creating a digital presence that meets today's expectations and supports tomorrow's ambitions.",
    tag: "Modernization",
  },
  {
    q: "Need Better Customer Experiences?",
    s: "Build intuitive and engaging digital journeys — designing navigation, content and interaction flows that make it easy for visitors to find, understand and act.",
    tag: "Experience",
  },
  {
    q: "Managing Content Is Difficult?",
    s: "Implement scalable CMS solutions — empowering your team to manage, update and expand content without technical dependency or operational friction.",
    tag: "Scalability",
  },
  {
    q: "Need A Platform Beyond A Website?",
    s: "Develop custom portals and applications — extending your digital presence into customer tools, partner systems and business platforms that create real operational value.",
    tag: "Platforms",
  },
];

const solutions = [
  {
    name: "Corporate Websites",
    outcome: "Professional digital presences that communicate credibility, communicate brand values and create the confidence that drives stakeholder engagement and business enquiry.",
    services: [
      "Brand-Aligned Design",
      "Responsive Development",
      "Content Strategy",
      "SEO Foundations",
      "Analytics Integration",
    ],
  },
  {
    name: "Lead Generation Websites",
    outcome: "Conversion-optimized websites designed to attract, engage and convert — turning traffic into qualified leads through strategic design and compelling user journeys.",
    services: [
      "Conversion-Focused UX",
      "Landing Page Systems",
      "Form Optimization",
      "CRM Integration",
      "A/B Testing Support",
    ],
  },
  {
    name: "Custom Web Portals",
    outcome: "Bespoke digital portals for customers, partners and employees — creating secure, intuitive interfaces that streamline interaction and strengthen relationships.",
    services: [
      "User Authentication",
      "Dashboard Design",
      "Data Visualization",
      "Role-Based Access",
      "Third-Party Integration",
    ],
  },
  {
    name: "CMS Platforms",
    outcome: "Flexible content management systems that empower your team to publish, manage and grow your digital presence without technical bottlenecks or external dependency.",
    services: [
      "Headless CMS",
      "WordPress Development",
      "Custom Admin Panels",
      "Content Workflows",
      "Multi-Language Support",
    ],
  },
  {
    name: "E-Commerce Solutions",
    outcome: "Online stores and digital commerce experiences that combine beautiful presentation with seamless checkout — turning browsers into buyers with confidence and clarity.",
    services: [
      "Shopify Development",
      "WooCommerce Solutions",
      "Product Experience Design",
      "Payment Integration",
      "Inventory Management",
    ],
  },
  {
    name: "Custom Web Applications",
    outcome: "Tailored web applications that solve specific business challenges — from customer tools and booking systems to internal platforms and workflow automation.",
    services: [
      "Business Application Design",
      "API Development",
      "Database Architecture",
      "Cloud Deployment",
      "Ongoing Support",
    ],
  },
  {
    name: "Website Revamps",
    outcome: "Strategic redesigns that modernize outdated websites — improving design, technology, performance and user experience while preserving SEO value and brand equity.",
    services: [
      "UX Audit",
      "Design Modernization",
      "Technology Migration",
      "SEO Preservation",
      "Content Restructuring",
    ],
  },
  {
    name: "Maintenance & Optimization",
    outcome: "Ongoing care that keeps your digital platform secure, fast and effective — with continuous improvements that ensure long-term performance and reliability.",
    services: [
      "Security Monitoring",
      "Performance Optimization",
      "Content Updates",
      "Technical Support",
      "Growth Reporting",
    ],
  },
];

const framework = [
  { step: "Discover", body: "Understand business objectives and user needs — mapping goals, audiences, competitive context and success metrics before a single design decision is made." },
  { step: "Design", body: "Create intuitive and engaging experiences — wireframes, visual design and interaction systems that balance brand expression with user clarity and conversion thinking." },
  { step: "Develop", body: "Build scalable and secure platforms — engineering solutions with clean architecture, performance optimization and the technical foundations for long-term growth." },
  { step: "Launch", body: "Ensure smooth deployment and adoption — with rigorous testing, performance validation, analytics setup and the preparation your team needs to operate confidently." },
  { step: "Grow", body: "Continuously improve performance and outcomes — monitoring, optimizing and evolving your digital platform to meet changing business needs and user expectations." },
];

const techStack = [
  "React",
  "Next.js",
  "Laravel",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "Node.js",
  "AWS",
  "Vercel",
  "Cloud Infrastructure",
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech brand with an outdated website that failed to communicate credibility, generate leads or support the customer journey — creating friction in a trust-dependent industry.",
    strategy:
      "Designed and developed a modern corporate website combining brand storytelling, intuitive user experience, lead capture systems and performance optimization — creating a digital presence that matched the company's ambitions.",
    outcome:
      "Improved brand credibility online, increased lead generation through the website and a digital platform that supports ongoing business growth and customer engagement.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand needing a comprehensive digital platform that communicated institutional values, managed student information, supported admissions and integrated with internal ERP systems.",
    strategy:
      "Developed a custom website with integrated CMS, student portal features and ERP connectivity — combining public-facing brand communication with operational functionality in a single platform.",
    outcome:
      "Streamlined admissions workflow, improved parent and student engagement and a digital infrastructure that reduced administrative burden while strengthening brand presence.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "An industrial manufacturer seeking a global-facing website that communicated technical capability, supported international distribution and created the digital credibility needed to compete with established international brands.",
    strategy:
      "Designed a premium manufacturing website combining technical product presentation, industry credibility signals, multi-region accessibility and SEO-optimized content — positioning the brand as a global quality leader.",
    outcome:
      "Stronger international enquiry generation, improved brand perception in overseas markets and a digital platform that supports ongoing export growth and distributor confidence.",
  },
  {
    img: caseKuwal,
    client: "Kuwal Sanam Architects",
    challenge:
      "A premium architecture practice needing a digital presence that communicated design philosophy, showcased portfolio work and created the kind of aesthetic credibility that attracts high-value residential and commercial commissions.",
    strategy:
      "Created a visually-driven architecture website combining immersive project presentation, brand storytelling, inquiry systems and performance optimization — ensuring the digital experience matched the firm's design standards.",
    outcome:
      "Increased project inquiries, stronger portfolio visibility and a digital platform that reinforces the firm's premium positioning among architects, developers and property owners.",
  },
];

const whyUs = [
  {
    t: "Strategy Before Design",
    b: "We begin with business objectives, audience insights and competitive context. Every design decision serves a strategic purpose — never decoration for its own sake.",
  },
  {
    t: "Design Before Development",
    b: "We design the experience before writing code. User journeys, visual systems and interaction patterns are defined first — ensuring the technology serves the experience.",
  },
  {
    t: "Marketing + Technology Expertise",
    b: "We combine marketing strategy with technical capability — building websites that are not just well-engineered, but also conversion-focused, search-ready and growth-oriented.",
  },
  {
    t: "SEO-Ready Foundations",
    b: "We build search optimization into the architecture from day one — technical SEO, content structure, performance and accessibility that create the foundation for organic visibility.",
  },
  {
    t: "Conversion-Focused Thinking",
    b: "We design for outcomes — enquiries, purchases, sign-ups, engagement. Every page, form and interaction is optimized to guide visitors toward meaningful action.",
  },
  {
    t: "Long-Term Support",
    b: "We do not disappear after launch. Our engagement includes ongoing support, performance monitoring, security maintenance and continuous improvement as your business evolves.",
  },
  {
    t: "No Template Thinking",
    b: "Every website is designed for your brand, your audience and your objectives. We do not modify templates — we create digital experiences that could only belong to you.",
  },
  {
    t: "No Technology For Technology's Sake",
    b: "We select technology based on business need, not trend. The right platform is the one that serves your goals, your team and your growth — not the one that sounds most impressive.",
  },
];

const faqs = [
  {
    q: "What types of websites do you build?",
    a: "We build corporate websites, lead generation platforms, custom web portals, CMS-driven sites, e-commerce stores and bespoke web applications. Every solution is designed around business objectives rather than technology preferences.",
  },
  {
    q: "Do you provide CMS solutions?",
    a: "Yes. We implement and customize content management systems — including headless CMS, WordPress and bespoke admin panels — that empower your team to manage content without technical dependency.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We specialize in strategic website revamps that modernize design, technology and user experience while preserving SEO value, brand equity and existing content investments.",
  },
  {
    q: "Do you support SEO during development?",
    a: "Yes. SEO is built into our development process — technical architecture, content structure, performance optimization and accessibility standards are all designed to support organic search visibility from launch.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes. We offer secure hosting, performance monitoring, security updates, content maintenance and ongoing optimization — ensuring your digital platform remains reliable, fast and effective over time.",
  },
  {
    q: "Can websites integrate with CRM and ERP systems?",
    a: "Yes. We design and develop integrations with CRM, ERP, marketing automation and business systems — creating connected digital experiences that streamline operations and improve data flow.",
  },
];

/* ---------- page ---------- */
function WebsiteDesignPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Website Design & Development</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Digital Experience & Growth Platform Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Websites designed to inspire trust, generate{" "}
              <em className="text-brand not-italic">opportunities</em>{" "}
              & support growth.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Your website is often the first interaction people have with your business.
              It should communicate credibility, create confidence and guide visitors
              toward meaningful action. At Ace360degree, we design and develop digital
              experiences that combine strategy, design and technology to help businesses
              strengthen their online presence and accelerate growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Start My Website Project <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Digital Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Platforms Built", v: "300+" },
                { k: "Focus", v: "Strategy · Design · Growth" },
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
                alt="Digital experience and growth platform partner building strategic websites"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Build Digital Experiences That Drive Business Growth.</p>
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
                The website question is almost always a growth question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                A website is not a brochure. It is a business platform — a place where
                credibility is established, relationships begin and opportunities are created.
                When your digital presence is strategic, every visit has the potential to
                become a conversation, a customer or a long-term relationship.
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
                  Our Website Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Digital platforms designed for business outcomes.
                </h2>
                <p className="mt-4 text-dark/70">
                  From corporate websites and lead generation platforms to custom portals
                  and e-commerce — we build digital experiences that combine strategic
                  thinking with technical excellence.
                </p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((sol) => (
                <div
                  key={sol.name}
                  className="bg-light border border-dark/5 p-8 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-serif text-xl">{sol.name}</h3>
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
                Our Digital Experience Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to digital platforms.
              </h2>
              <p className="mt-4 text-dark/70">
                Great digital experiences do not happen by accident. Our five-stage
                framework creates the strategic thinking, design discipline and technical
                rigour that turn websites into business assets.
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
                Modern technology. Future-ready foundations.
              </h2>
              <p className="mt-4 text-dark/70">
                We select and implement technology based on business need — not trend.
                Our expertise spans modern frameworks, enterprise platforms and cloud
                infrastructure that create the technical foundation for long-term growth.
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
                      alt={`${story.client} website design and development case study`}
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
                View Website Case Studies <span aria-hidden>→</span>
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
                Why businesses choose Ace360degree for website development.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not write code for its own sake. We build digital platforms — strategic
                experiences that strengthen credibility, generate opportunities and support
                sustainable business growth.
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
              Start Building Your Digital Platform
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Build a website that works as hard as your business.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Create a digital platform that strengthens credibility, supports growth and
              delivers exceptional customer experiences.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Request Website Proposal <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Digital Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
