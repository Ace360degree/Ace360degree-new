import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import servicesHero from "@/assets/services-hero.jpg";
import svcBranding from "@/assets/svc-branding.jpg";
import svcDigital from "@/assets/svc-digital.jpg";
import svcSpecialized from "@/assets/svc-specialized.jpg";
import svcTechnology from "@/assets/svc-technology.jpg";
import caseMos from "@/assets/case-mosy1.jpg";
import caseRexello from "@/assets/rexelloy1.jpg";
import caseAmigo from "@/assets/case-amigoy1.jpg";
import servicesHero1 from "@/assets/services-hero1.jpg";
import servicesHero2 from "@/assets/services-hero2.jpg";
import servicesHero3 from "@/assets/services-hero3.jpg";
import servicesHero4 from "@/assets/services-hero4.jpg";
import servicesHero5 from "@/assets/services-hero5.jpg";
import servicesHero6 from "@/assets/services-hero6.jpg";
import servicesHero7 from "@/assets/services-hero7.jpg";
import servicesHero8 from "@/assets/services-hero8.jpg";
import servicesHero9 from "@/assets/services-hero9.jpg";
import servicesHero10 from "@/assets/services-hero10.jpg";
import servicesHero12 from "@/assets/services-hero12.jpg";
import servicesHero13 from "@/assets/services-hero13.jpg";
import servicesHero14 from "@/assets/services-hero14.jpg";
import servicesHero15 from "@/assets/services-hero15.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Growth Solutions — Marketing, Technology & AI | Ace360degree" },
      {
        name: "description",
        content:
          "Ace360degree is a Growth, Technology & AI partner helping businesses solve customer acquisition, brand visibility, digital transformation, operational efficiency and AI adoption challenges.",
      },
      { property: "og:title", content: "Growth Solutions — Ace360degree" },
      {
        property: "og:description",
        content:
          "Integrated growth marketing, branding, technology and AI solutions — engineered to solve real business challenges and accelerate measurable outcomes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
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
      { threshold: 0.15 },
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
const solutions = [
  {
    n: "01",
    tag: "WEBSITE DESIGN & DEVELOPMENT",
    title: "Need a Website That Actually Grows Your Business?",
    copy:
      "Build high-performance websites designed to attract the right audience, strengthen your brand credibility and convert visitors into qualified enquiries.",
    items: ["Corporate Websites", "WordPress", "Shopify", "Laravel", "React JS","Business Websites","Landing Pages"],
    cta: "Explore Website Development",
    href: "/growth-marketing",
    image: svcDigital,
  },
  {
    n: "02",
    tag: "SEARCH ENGINE OPTIMIZATION",
    title: "Want More Qualified Traffic from Google & GPTS?",
    copy:
      "Increase your online visibility with data-driven SEO, AEO & GEO strategies that improve rankings, attract high-intent visitors, and generate sustainable organic growth.",
    items: ["SEO Audits", "Technical SEO", "On-Page SEO", "Local SEO", "E-Commerce SEO","GEO","AEO"],
    cta: "Explore SEO / AEO / GEO Services",
    href: "/branding-creative",
    image: svcBranding,
  },
  {
    n: "03",
    tag: "PERFORMANCE MARKETING",
    title: "Every Click Should Drive Business Growth.",
    copy:
      "Create data-driven advertising campaigns across Google and Meta that generate high-quality leads, increase conversions, and deliver measurable return on investment.",
    items: ["Google Ads", "Meta Ads", "Shopping Ads", "Remarketing", "Performance Analytics"],
    cta: "Explore Performance Marketing",
    href: "/technology",
    image: svcTechnology,
  },
  {
    n: "04",
    tag: "MOBILE APP DEVELOPMENT",
    title: "Build Mobile Apps Your Customers Love to Use.",
    copy:
      "Leverage practical AI solutions that improve productivity, decision-making and customer experiences across the business.",
    items: ["Android", "iOS", "Flutter", "React Native", "API Integration"],
    cta: "Explore Mobile App Development",
    href: "/ai-transformation",
    image: servicesHero1,
  },
    {
    n: "05",
    tag: "CRM & ERP SOLUTIONS",
    title: "Streamline Operations. Accelerate Business Growth.",
    copy:
      "Digitize and automate your business processes with custom CRM and ERP solutions that improve productivity, enhance collaboration, and provide complete operational visibility.",
    items: ["Custom CRM", "ERP Solutions", "Workflow Automation", "Dashboard & Analytics  ", "System Integration"],
    cta: "Explore CRM & ERP Solutions",
    href: "/ai-transformation",
    image: servicesHero2,
  },
    {
    n: "06",
    tag: "BRAND STRATEGY",
    title: "Build a Brand That Inspires Trust & Drives Growth.",
    copy:
      "Develop a clear brand strategy that defines your positioning, messaging, and identity to create meaningful connections and long-term business value.",
    items: ["Brand Positioning", "Brand Messaging", "Brand Architecture", "Market Research", "Brand Guidelines"],
    cta: "Explore Brand Strategy",
    href: "/ai-transformation",
    image: servicesHero3,
  },
    {
    n: "07",
    tag: "LOGO & VISUAL IDENTITY",
    title: "Create a Visual Identity That Makes Your Brand Memorable.",
    copy:
      "Design distinctive logos and cohesive visual identity systems that build recognition, communicate your brand values ",
    items: ["Logo Design", "Brand Identity", "UI/Color Palette Design", "Typography", "Brand Guidelines"],
    cta: "Explore Logo & Visual Identity",
    href: "/ai-transformation",
    image: servicesHero4,
  },
    {
    n: "08",
    tag: "UI / UX & PRODUCT ENGINEERING",
    title: "Design Digital Experiences Users Love to Interact With.",
    copy:
      "Create intuitive user interfaces and seamless digital experiences that improve usability, increase engagement, and transform ideas.",
    items: ["UX Research", "UI Design", "Wireframing", "Prototyping", "Design Systems"],
    cta: "Explore UI / UX & Product Engineering",
    href: "/ai-transformation",
    image: servicesHero5,
  },
    {
    n: "09",
    tag: "CONTENT MARKETING",
    title: "Turn Valuable Content Into Qualified Business Opportunities.",
    copy:
      "Create strategic content that educates, builds authority, improves search visibility & nurtures prospects throughout every stage of customer Journey.",
    items: ["SEO Content", "Website Copywriting", "Blogs", "Case Studies", "Email Marketing"],
    cta: "Explore Content Marketing",
    href: "/ai-transformation",
    image: servicesHero6,
  },
    {
    n: "10",
    tag: "Marketing automation",
    title: "Automate Customer Journeys. Accelerate Business Growth.",
    copy:
      "Streamline marketing processes with intelligent automation that nurtures leads, improves engagement, and delivers personalized customer experiences at scale.",
    items: ["Email Automation", "WhatsApp Automation", "Lead Nurturing", "CRM Integration", "Workflow Automation"],
    cta: "Explore Marketing Automation",
    href: "/ai-transformation",
    image: servicesHero7,
  },
    {
    n: "11",
    tag: "CONVERSION OPTIMIZATION",
    title: "Turn More Visitors Into Customers.",
    copy:
      "Optimize every stage of your digital journey with data-driven strategies that improve user experience, increase conversions & maximize your marketing ROI.",
    items: ["Landing Page Optimization", "A/B Testing", "Conversion Tracking", "Heatmaps", "User Journey Analysis"],
    cta: "Explore Conversion Optimization",
    href: "/ai-transformation",
    image: servicesHero8,
  },
   {
    n: "12",
    tag: "SOCIAL MEDIA MARKETING",
    title: "Build Meaningful Connections Beyond the Feed.",
    copy:
      "Create strategic social media campaigns that strengthen your brand presence, engage the right audience, and support long-term business growth across every platform.",
    items: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Content Strategy", "Community Management"],
    cta: "Explore Social Media Marketing",
    href: "/ai-transformation",
    image: servicesHero9,
  },
   {
    n: "13",
    tag: "MARKETING COMMUNICATION",
    title: "Communicate the Right Message. Inspire the Right Action.",
    copy:
      "Develop impactful marketing communication that strengthens your brand, supports campaigns, and delivers consistent messaging across every customer touchpoint.",
    items: ["Campaign Strategy", "Marketing Collateral", "Sales Presentations", "Brochures", "Digital Creatives"],
    cta: "Explore Marketing Communication",
    href: "/ai-transformation",
    image: servicesHero10,
  },
   {
    n: "14",
    tag: "CORPORATE COMMUNICATION DESIGN",
    title: "Communicate Your Business with Clarity & Confidence.",
    copy:
      "Create professional corporate communication materials that strengthen credibility, build stakeholder trust, and ensure consistent brand communication across every business touchpoint.",
    items: ["Company Profile", "Corporate Brochures", "Annual Reports", "Corporate Collateral", "Investor Presentations"],
    cta: "Explore Corporate Communication Design",
    href: "/ai-transformation",
    image: servicesHero12,
  },
   {
    n: "15",
    tag: "PACKAGING & PRODUCT DESIGN",
    title: "Packaging That Captures Attention and Drives Purchase Decisions.",
    copy:
      "Design distinctive packaging and product visuals that enhance shelf appeal, strengthen brand recognition, and create memorable customer experiences across retail and digital marketplaces.",
    items: ["Packaging Design", "Label Design", "Product Branding", "Retail Packaging", "Print Production"],
    cta: "Explore Packaging & Product Design",
    href: "/ai-transformation",
    image: servicesHero13,
  },
   {
    n: "16",
    tag: "MOTION GRAPHICS & ANIMATION",
    title: "Bring Ideas to Life Through Motion.",
    copy:
      "Create engaging motion graphics and animations that simplify complex messages, capture attention, and elevate your brand across digital marketing, presentations, and social media.",
    items: ["2D Animation", "Motion Graphics", "Explainer Videos", "Product Animation", "API IntegrationSocial Media Reels"],
    cta: "Explore Motion Graphics & Animation",
    href: "/ai-transformation",
    image: servicesHero14,
  },
   {
    n: "17",
    tag: "CORPORATE FILMS & VIDEOS",
    title: "Tell Your Brand Story Through Powerful Visual.",
    copy:
      "Produce high-quality corporate films and videos that showcase your business, engage your audience, and build trust through authentic visual storytelling.",
    items: ["Corporate Films", "Brand Videos", "Product Videos", "Testimonial Videos", "Drone Shoots"],
    cta: "Explore Corporate Films & Videos",
    href: "/ai-transformation",
    image: servicesHero15,
  },
  
];

const whyUs = [
  { t: "Discovery-Led Approach", d: "We understand the challenge before recommending the solution." },
  { t: "Integrated Expertise", d: "Marketing, Branding, Technology and AI under one roof." },
  { t: "Growth-Oriented Thinking", d: "Focused on business outcomes rather than isolated deliverables." },
  { t: "Proven Experience", d: "Helping businesses grow since 2009." },
  { t: "Long-Term Partnerships", d: "Built through trust, consistency and measurable results." },
];

const caseStudies = [
  {
    img: caseMos,
    brand: "MOS Utility",
    tag: "Challenge → Solution → Outcome",
    challenge: "Fragmented lead capture and low engagement across campaigns.",
    solution: "Integrated marketing automation with multi-channel campaigns and CRM workflows.",
    metric: "160% engagement growth",
  },
  {
    img: caseRexello,
    brand: "Rexello",
    tag: "Challenge → Solution → Outcome",
    challenge: "Limited organic visibility and weak content authority in a competitive category.",
    solution: "SEO foundation, content engine and YouTube growth program built for compounding traffic.",
    metric: "3× organic traffic growth",
  },
  {
    img: caseAmigo,
    brand: "Amigo Academy",
    tag: "Challenge → Solution → Outcome",
    challenge: "Manual operations and disconnected acquisition limiting scale.",
    solution: "ERP-driven operations connected with performance marketing for predictable growth.",
    metric: "6× return on ad spend",
  },
];

const faqs = [
  {
    q: "How is Ace360degree different from a traditional agency?",
    a: "We operate as a Growth, Technology & AI partner — not a service vendor. Every engagement begins with a discovery process to understand your business challenge, then we deploy the right mix of marketing, branding, technology and AI to solve it. The outcome we are accountable for is business growth, not deliverables.",
  },
  {
    q: "Do you only work on marketing, or also on digital transformation?",
    a: "Both. Many of our long-term clients started with marketing and expanded into websites, CRM/ERP, automation and AI as their business matured. Our integrated model is designed to support businesses across their entire digital transformation journey.",
  },
  {
    q: "What kind of business challenges do you typically solve?",
    a: "Customer acquisition, brand visibility, digital platform modernization, operational efficiency and practical AI adoption. If growth is constrained anywhere across marketing, technology or operations, our team can diagnose and solve it.",
  },
  {
    q: "How do you approach technology and AI enablement?",
    a: "We focus on practical, business-aligned technology — websites, applications, automation, AI workflows and integrations that directly improve revenue, productivity or customer experience. We avoid technology for the sake of technology.",
  },
  {
    q: "Do you prefer long-term partnerships or one-off projects?",
    a: "We do both, but our strongest results come from long-term partnerships. Several of our clients have grown with us for over a decade because integrated growth, branding, technology and AI work compounds over time.",
  },
  {
    q: "How do we get started?",
    a: "Book a discovery call. We'll spend time understanding your business, current challenges and growth ambitions before recommending any solution or scope.",
  },
];

/* ---------- page ---------- */
function ServicesPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 lg:pt-20 lg:pb-32">
          <nav className="text-xs uppercase tracking-[0.2em] text-ink/70 mb-10">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-2 text-ink/40">/</span>
            <span className="text-dark">Solutions</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-brand font-semibold mb-6">
                <span className="size-1.5 rounded-full bg-brand" />
                Growth Solutions
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.02] tracking-tight text-dark text-balance">
                Growth Solutions Powered by{" "}
                <em className="italic text-brand">Marketing, Technology & AI</em>.
              </h1>
              <p className="mt-7 text-lg text-ink/85 max-w-2xl text-pretty leading-relaxed">
                Every business faces growth challenges. Some need more leads. Some need stronger brand visibility. Some need better digital platforms. Some need operational efficiency. Others need practical AI adoption.
              </p>
              <p className="mt-4 text-lg text-ink/85 max-w-2xl text-pretty leading-relaxed">
                Ace360degree helps businesses solve these challenges through integrated marketing, branding, technology and automation solutions.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#spectrum"
                  className="inline-flex items-center gap-2 bg-dark text-canvas px-6 py-3.5 text-sm font-semibold hover:bg-brand hover:text-dark transition-colors"
                >
                  Explore Solutions
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 border border-dark/15 px-6 py-3.5 text-sm font-semibold text-dark hover:border-dark transition-colors"
                >
                  Book Discovery Call
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={servicesHero}
                  alt="Ace360degree growth solutions — marketing, technology and AI"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1280}
                  height={1280}
                />
                <div className="absolute bottom-5 left-5 right-5 bg-canvas/90 backdrop-blur-sm p-5">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ink/70">Growth Partner</div>
                  <div className="font-serif text-2xl text-dark mt-1">Marketing · Technology · AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INTRO */}
      <section id="spectrum" className="border-t border-dark/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-4">Solution Framework</div>
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-tight text-dark text-balance">
                What business challenge are you <em className="italic">trying to solve?</em>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-ink/85 leading-relaxed text-pretty">
                Our solutions are organized around the real challenges businesses face — not around services we sell. Choose the outcome you want to unlock, and we'll bring the right mix of strategy, creativity, technology and AI to deliver it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="group relative bg-card overflow-hidden border border-dark/5 hover:border-dark/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] h-full">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.tag}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-7 lg:p-9">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-ink/70">{s.tag}</span>
                    <span className="font-serif italic text-ink/40 text-sm">{s.n}</span>
                  </div>
                  <h3 className="font-serif text-3xl lg:text-[2rem] leading-[1.1] text-dark text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-ink/85 leading-relaxed text-pretty">{s.copy}</p>
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {s.items.map((it) => (
                      <li key={it} className="text-xs px-2.5 py-1 border border-dark/10 text-ink/80">
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={s.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-dark group/link"
                  >
                    <span className="border-b border-dark/20 group-hover/link:border-brand pb-0.5 transition-colors">
                      {s.cta}
                    </span>
                    <span className="transition-transform group-hover/link:translate-x-1" aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DARK STRIP — INTEGRATED MODEL */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">Integrated Growth Model</div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-tight text-balance">
              One partner for <em className="italic text-brand">growth, technology and AI.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-canvas/75 text-lg leading-relaxed text-pretty">
              Most businesses juggle separate vendors for marketing, branding, technology and AI. We bring it all under one strategic team — so every initiative compounds toward growth, not silos.
            </p>
            <a
              href="#cta"
              className="mt-7 inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Discovery Call <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-3xl mb-14">
            <div className="text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-4">Why Ace360degree</div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-tight text-dark text-balance">
              Why businesses choose <em className="italic">Ace360degree.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10">
            {whyUs.map((w, i) => (
              <Reveal key={w.t} delay={i * 60}>
                <div className="bg-canvas p-8 lg:p-10 h-full hover:bg-card transition-colors">
                  <div className="font-serif italic text-brand text-2xl mb-6">0{i + 1}</div>
                  <h3 className="font-serif text-2xl text-dark mb-3">{w.t}</h3>
                  <p className="text-ink/80 leading-relaxed">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES / CASE IMPACT */}
      <section className="border-t border-dark/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-4">Outcomes</div>
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-tight text-dark text-balance">
                Business outcomes, <em className="italic">not just deliverables.</em>
              </h2>
            </div>
            <a href="/portfolio" className="text-sm font-semibold text-dark border-b border-dark/20 hover:border-brand pb-0.5">
              View More Case Studies →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((c, i) => (
              <Reveal key={c.brand} delay={i * 80}>
                <article className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={c.img}
                      alt={c.brand}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-2">{c.tag}</div>
                    <h3 className="font-serif text-2xl text-dark">{c.brand}</h3>
                    <dl className="mt-3 space-y-2 text-sm text-ink/80 leading-relaxed">
                      <div>
                        <dt className="inline font-semibold text-dark">Challenge: </dt>
                        <dd className="inline">{c.challenge}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold text-dark">Solution: </dt>
                        <dd className="inline">{c.solution}</dd>
                      </div>
                    </dl>
                    <div className="mt-3 text-brand font-semibold">Outcome: {c.metric}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY CTA */}
      <section id="cta" className="bg-brand text-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-balance">
              Let's identify your <em className="italic">growth bottlenecks.</em>
            </h2>
            <p className="mt-5 text-dark/80 text-lg max-w-xl leading-relaxed">
              Every business is different. Our discovery process helps uncover growth opportunities across customer acquisition, branding, technology, automation and AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact-form" className="bg-dark text-canvas px-6 py-3.5 text-sm font-semibold hover:bg-dark/90 transition">
                Book Discovery Call
              </a>
              <a href="#contact-form" className="border border-dark px-6 py-3.5 text-sm font-semibold hover:bg-dark hover:text-canvas transition">
                Download Company Profile
              </a>
            </div>
          </div>

          {/* <form
            id="contact-form"
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-5 bg-canvas p-7 lg:p-8 space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              <input className="border border-dark/15 bg-canvas px-4 py-3 text-sm focus:outline-none focus:border-dark" placeholder="Name" />
              <input className="border border-dark/15 bg-canvas px-4 py-3 text-sm focus:outline-none focus:border-dark" placeholder="Work Email" type="email" />
            </div>
            <input className="w-full border border-dark/15 bg-canvas px-4 py-3 text-sm focus:outline-none focus:border-dark" placeholder="Phone" />
            <select className="w-full border border-dark/15 bg-canvas px-4 py-3 text-sm focus:outline-none focus:border-dark">
              <option>Growth Challenge</option>
              <option>Customer Acquisition</option>
              <option>Brand Visibility</option>
              <option>Digital Platforms</option>
              <option>Operational Efficiency</option>
              <option>AI Adoption</option>
            </select>
            <textarea rows={3} className="w-full border border-dark/15 bg-canvas px-4 py-3 text-sm focus:outline-none focus:border-dark resize-none" placeholder="Tell us about your business and growth goals" />
            <button className="w-full bg-dark text-canvas px-6 py-3.5 text-sm font-semibold hover:bg-dark/90 transition">
              Request Discovery Call →
            </button>
          </form> */}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <div className="text-center mb-14">
            <div className="text-[11px] uppercase tracking-[0.28em] text-ink/70 mb-4">FAQ</div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-tight text-dark text-balance">
              Frequently asked <em className="italic">questions.</em>
            </h2>
          </div>
          <div className="divide-y divide-dark/10 border-y border-dark/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6 px-1">
                <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                  <h3 className="font-serif text-xl lg:text-2xl text-dark">{f.q}</h3>
                  <span className="grid place-items-center size-9 rounded-full border border-dark/15 text-dark transition-transform group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink/85 leading-relaxed max-w-3xl text-pretty">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 text-center">
          <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] tracking-tight max-w-4xl mx-auto text-balance">
            Ready to <em className="italic text-brand">accelerate growth?</em>
          </h2>
          <p className="mt-6 text-canvas/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to generate more leads, strengthen your brand, modernize operations or explore AI opportunities, our team is ready to help.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#cta" className="bg-brand text-dark px-7 py-4 text-sm font-semibold hover:brightness-95 transition">
              Schedule Discovery Call
            </a>
            <a href="/portfolio" className="border border-canvas/30 px-7 py-4 text-sm font-semibold hover:bg-canvas hover:text-dark transition">
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
