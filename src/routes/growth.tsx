import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroMesh from "@/assets/hero-mesh.jpg";
import showreel from "@/assets/showreel.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseCosmos from "@/assets/case-cosmos.jpg";
import caseRexello from "@/assets/case-rexello.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseKsa from "@/assets/case-ksa.jpg";
import caseLiving from "@/assets/case-living.jpg";
import blogFeatured from "@/assets/blog-featured.jpg";
import whyTeam from "@/assets/why-team.jpg";
import founderAsset from "@/assets/founder-altaf.jpg.asset.json";
const founder = founderAsset.url;

export const Route = createFileRoute("/growth")({
  component: GrowthHome,
  head: () => ({
    meta: [
      { title: "Ace360degree — Business Growth, Technology & AI Partner Since 2009" },
      {
        name: "description",
        content:
          "Ace360degree partners with businesses to grow through Marketing, Branding, Technology and AI. Trusted across healthcare, education, manufacturing, hospitality, BFSI and services since 2009.",
      },
      { property: "og:title", content: "Ace360degree — Growth, Technology & AI Partner" },
      {
        property: "og:description",
        content:
          "Helping businesses grow through Marketing, Technology & AI. Established 2009. 300+ projects across multiple industries.",
      },
    ],
  }),
});

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-16 pb-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="mb-6 inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-dark/50">
            Growth · Technology · AI Partner · Since 2009
          </span>
          <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
            Helping Businesses Grow Through{" "}
            <span className="font-serif italic font-normal">Marketing</span>, Technology &{" "}
            <span className="font-serif italic font-normal">AI</span>
          </h1>
          <p className="mt-8 max-w-[58ch] text-pretty text-lg text-ink leading-relaxed">
            Since 2009, Ace360degree has partnered with businesses across healthcare, education,
            manufacturing, hospitality, fintech and service industries to attract customers,
            strengthen brands, streamline operations and accelerate growth.
          </p>
          <p className="mt-4 max-w-[58ch] text-pretty text-base text-ink/80 leading-relaxed">
            By combining marketing, branding, technology, automation and AI, we help organizations
            navigate digital transformation and achieve measurable business outcomes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-brand py-3 pr-5 pl-2.5 text-sm font-semibold text-dark ring-1 ring-brand hover:brightness-95 transition"
            >
              <span className="grid place-items-center size-6 rounded-full bg-dark/10">
                <span className="size-1.5 rounded-full bg-dark" />
              </span>
              Schedule Discovery Call
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-dark border border-dark/15 hover:bg-dark hover:text-canvas transition"
            >
              Explore Success Stories
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={heroMesh}
              alt="Business growth visualization"
              width={1024}
              height={1024}
              className="w-full aspect-square object-cover rounded-md outline outline-1 -outline-offset-1 outline-dark/5 shadow-xl shadow-dark/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-canvas p-5 ring-1 ring-dark/5 shadow-xl shadow-dark/5 max-w-[220px]">
              <div className="text-3xl font-serif italic text-brand leading-none">15+ Yrs</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-dark/50 mt-2">
                Growth Partnerships
              </div>
            </div>
            <div className="absolute -top-5 right-4 bg-dark text-canvas px-4 py-2 text-[10px] uppercase tracking-[0.2em]">
              Marketing · Tech · AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ticker ---------------- */
function Ticker() {
  const items = [
    "Business Growth",
    "Digital Transformation",
    "Marketing",
    "Branding",
    "Technology",
    "Automation",
    "AI Adoption",
    "CRM & ERP",
    "Web & Apps",
  ];
  const Strip = () => (
    <div className="flex items-center gap-12 px-6 text-canvas/95 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
      {items.map((t) => (
        <span key={t} className="flex items-center gap-12 whitespace-nowrap">
          {t}
          <span className="text-brand">✴</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-dark py-6 border-y border-white/5">
      <div className="animate-marquee">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}

/* ---------------- Story ---------------- */
function Story() {
  return (
    <section className="py-28 bg-canvas">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative group">
          <img
            src={showreel}
            alt="Ace360 growth journey"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full aspect-video object-cover rounded-md outline outline-1 -outline-offset-1 outline-dark/5"
          />
          <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-canvas/80 bg-dark/60 px-2 py-1">
            Since 2009
          </span>
        </div>
        <div>
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            The Ace360 Story
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Growth Journeys.{" "}
            <span className="font-serif italic">Real Transformations</span>. Lasting Partnerships.
          </h2>
          <p className="mt-6 text-ink leading-relaxed max-w-[58ch]">
            For over 15 years, we've walked alongside founders, leaders and growth teams — helping
            them solve real business challenges, modernize operations and unlock new revenue. From
            ambitious SMEs to established corporates, our partnerships are built on outcomes,
            referrals and long-term trust.
          </p>
          <p className="mt-4 text-ink leading-relaxed max-w-[58ch]">
            We don't sell services. We co-create growth — combining marketing, branding, technology
            and AI to move businesses forward, measurably.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 bg-dark text-canvas py-3 pr-5 pl-2.5 text-sm font-semibold hover:bg-dark/90 transition">
              <span className="grid place-items-center size-6 rounded-full bg-canvas/10">
                <span className="size-1.5 rounded-full bg-canvas" />
              </span>
              Start a Growth Conversation
            </a>
            <a href="#portfolio" className="inline-flex items-center px-6 py-3 text-sm font-semibold border border-dark/15 hover:bg-dark hover:text-canvas transition">
              See Outcomes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Expertise ---------------- */
function Expertise() {
  const pillars = [
    {
      cat: "Grow Your Visibility",
      title: "SEO · Performance · Social · Content",
      line: "Attract qualified audiences.",
      desc: "Multi-channel marketing engineered to bring the right customers to your business and generate consistent growth opportunities.",
    },
    {
      cat: "Strengthen Your Brand",
      title: "Brand Strategy · Identity · Creative",
      line: "Build trust and differentiation.",
      desc: "Brand systems that establish authority, command premium recall and create lasting market presence.",
    },
    {
      cat: "Build Digital Assets",
      title: "Websites · Apps · E-Commerce · Portals",
      line: "Platforms that convert.",
      desc: "Scalable digital products that drive engagement, conversion and long-term customer relationships.",
    },
    {
      cat: "Streamline Operations",
      title: "CRM · ERP · Workflow Automation",
      line: "Efficiency you can measure.",
      desc: "Integrated systems that remove bottlenecks, improve visibility and free your team to focus on growth.",
    },
    {
      cat: "Enable AI Adoption",
      title: "AI Consulting · Workflows · Integration",
      line: "Practical AI, real impact.",
      desc: "We help organizations move from AI curiosity to AI advantage — with workflows, automation and integrations tailored to your business.",
    },
    {
      cat: "Discovery-Led Strategy",
      title: "Growth Diagnostics · Roadmaps",
      line: "Problem first. Solution next.",
      desc: "Every engagement starts with understanding your business — then designing the right blend of marketing, brand, tech and AI.",
    },
  ];
  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute top-12 left-6 text-[18vw] md:text-[14vw] font-bold text-dark/[0.04] select-none pointer-events-none tracking-tighter leading-none uppercase">
        Expertise
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Our Expertise
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            One Partner. Every Lever of{" "}
            <span className="font-serif italic">Business Growth</span>.
          </h2>
          <p className="mt-6 text-ink leading-relaxed max-w-[58ch]">
            Marketing, Branding, Technology and AI — integrated under one roof and orchestrated
            around your business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/5 border border-dark/5">
          {pillars.map((s, i) => (
            <div
              key={s.cat}
              className="bg-background p-10 group hover:bg-canvas transition-colors relative"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="size-10 bg-brand/15 grid place-items-center">
                  <div className="size-3.5 bg-brand" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-dark/40">
                  0{i + 1}
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand font-semibold mb-2">
                {s.cat}
              </p>
              <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm font-medium text-dark/60">{s.line}</p>
              <p className="mt-4 text-sm text-ink leading-relaxed">{s.desc}</p>
              <div className="mt-8 h-px w-12 bg-brand transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SaaS ---------------- */
function SaaS() {
  const products = [
    { n: "01", title: "Task Master", desc: "Operational visibility and productivity for distributed teams — built to remove busywork." },
    { n: "02", title: "Lead Management", desc: "A growth engine for sales teams — capture, qualify and convert with AI-assisted workflows." },
    { n: "03", title: "Visitor Management", desc: "Modern, secure check-ins that bring operational excellence to every front desk." },
  ];
  return (
    <section className="bg-dark text-canvas py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Smart SaaS Solutions
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Software That Quietly{" "}
            <span className="font-serif italic text-brand">Compounds Growth</span>
          </h2>
          <p className="mt-6 text-canvas/60 max-w-[56ch]">
            Productivity, visibility and automation — our SaaS suite helps operations teams run
            cleaner and growth teams scale faster.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="p-8 ring-1 ring-white/10 hover:ring-brand/60 hover:bg-white/[0.02] transition-all group"
            >
              <div className="text-brand font-serif italic text-3xl mb-6">{p.n}</div>
              <h3 className="text-2xl font-medium mb-3">{p.title}</h3>
              <p className="text-canvas/55 text-sm leading-relaxed mb-8">{p.desc}</p>
              <div className="aspect-[16/10] rounded bg-gradient-to-br from-white/5 to-transparent ring-1 ring-white/5 grid place-items-center">
                <div className="size-12 rounded-full bg-brand/20 grid place-items-center">
                  <div className="size-3 bg-brand rounded-full" />
                </div>
              </div>
              <a className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand opacity-80 group-hover:opacity-100 cursor-pointer">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust ---------------- */
function Trust() {
  const stats = [
    { n: "2009", label: "Established" },
    { n: "300+", label: "Projects Delivered" },
    { n: "45+", label: "Clients Served" },
    { n: "15+", label: "Years Entrepreneurial Journey" },
  ];
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.22em] font-semibold text-dark/70 mb-10">
          Trusted Across Industries · Driven by Outcomes
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-5xl md:text-6xl font-medium text-dark mb-2 tabular-nums">
                {s.n}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-dark/65">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Discover", desc: "Understanding your business, market and growth challenges before recommending anything." },
    { n: "02", title: "Strategize", desc: "Designing the right blend of marketing, brand, technology and AI for your goals." },
    { n: "03", title: "Execute", desc: "Building, launching and integrating solutions with senior, multidisciplinary teams." },
    { n: "04", title: "Optimize", desc: "Measuring outcomes, iterating relentlessly, and compounding results over time." },
  ];
  return (
    <section className="bg-dark text-canvas py-28 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            How We Partner
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight">
            Discover. Strategize. Execute.{" "}
            <span className="font-serif italic text-brand">Optimize.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-dark p-10 group hover:bg-white/[0.02] transition-colors">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-canvas/30 text-xs font-mono">{s.n}</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="text-3xl font-serif italic text-brand mb-4">{s.title}.</h3>
              <p className="text-sm text-canvas/55 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why ---------------- */
function WhyAce() {
  const points = [
    { t: "Discovery-Led Approach", d: "We diagnose business problems before recommending solutions." },
    { t: "Integrated Expertise", d: "Marketing, branding, technology and AI under one roof." },
    { t: "Long-Term Partnerships", d: "Focused on sustainable growth, not one-off projects." },
    { t: "Outcome-Oriented Execution", d: "Measured through business impact, not vanity activity." },
    { t: "Trusted Since 2009", d: "Built on relationships, referrals and long-term client success." },
    { t: "Senior, Multidisciplinary Teams", d: "Strategists, designers, engineers and AI specialists — never juniors on autopilot." },
  ];
  return (
    <section id="why" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <img
            src={whyTeam}
            alt="The Ace360 team"
            width={1200}
            height={1400}
            loading="lazy"
            className="w-full aspect-[5/6] object-cover rounded-md outline outline-1 -outline-offset-1 outline-dark/5"
          />
        </div>
        <div className="lg:col-span-7">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Why Ace360degree
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            A Growth Partner, Not Just a{" "}
            <span className="font-serif italic">Vendor</span>
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {points.map((p) => (
              <div key={p.t} className="flex gap-4">
                <div className="mt-1 size-7 grid place-items-center bg-brand/15 shrink-0">
                  <svg className="size-4 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base tracking-tight">{p.t}</h3>
                  <p className="text-sm text-ink leading-relaxed mt-1">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Founder ---------------- */
function Founder() {
  return (
    <section className="py-32 bg-canvas">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={founder}
              alt="Altaf Shaikh, Founder & CEO of Ace360degree"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-md outline outline-1 -outline-offset-1 outline-dark/5 shadow-xl shadow-dark/5"
            />
            <div className="absolute -bottom-5 -right-5 bg-dark text-canvas px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-semibold">Founder & CEO</div>
              <div className="text-base font-medium mt-1">Altaf Shaikh</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Meet the Founder
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Building a Growth Partner,{" "}
            <span className="font-serif italic">One Business at a Time</span>
          </h2>
          <p className="mt-6 text-ink leading-relaxed max-w-[60ch]">
            Since establishing Ace360degree in 2009, Altaf Shaikh has worked with businesses across
            healthcare, education, manufacturing, hospitality, BFSI and service industries.
          </p>
          <p className="mt-4 text-ink leading-relaxed max-w-[60ch]">
            Over the years, Ace360degree has evolved from a digital services provider into a
            growth-focused partner — combining marketing, branding, technology and AI to solve real
            business challenges.
          </p>
          <p className="mt-4 text-ink leading-relaxed max-w-[60ch]">
            Under his leadership, the company has delivered solutions for startups, SMEs and
            established organizations across India and international markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-dark text-canvas py-3 pr-5 pl-2.5 text-sm font-semibold hover:bg-dark/90 transition"
            >
              <span className="grid place-items-center size-6 rounded-full bg-canvas/10">
                <span className="size-1.5 rounded-full bg-canvas" />
              </span>
              Connect on LinkedIn
            </a>
            <a
              href="#cta"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold border border-dark/15 hover:bg-dark hover:text-canvas transition"
            >
              Book Discovery Call
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold border border-dark/15 hover:bg-dark hover:text-canvas transition"
            >
              Read Founder Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "Ace360degree doesn't think like a vendor — they think like a growth partner. From strategy to execution, every conversation is rooted in our business outcomes.",
      author: "Director, MOS Utility",
    },
    {
      quote:
        "Marketing, brand, tech and now AI — all from one team. They've quietly become an extension of our leadership.",
      author: "Founder, Amigo Academy",
    },
    {
      quote:
        "They understood the nuance of our market and delivered a brand and platform presence that genuinely moves the needle.",
      author: "Marketing Head, KSA Group",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-28 bg-canvas">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
          Client Voices
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
          Partnerships That <span className="font-serif italic">Compound</span>
        </h2>
        <div className="mt-14 relative min-h-[260px]">
          {items.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="bg-background border border-dark/5 shadow-sm p-10 md:p-14 max-w-3xl mx-auto">
                <div className="text-brand text-3xl font-serif italic mb-6">"</div>
                <p className="text-xl md:text-2xl font-medium leading-snug text-dark text-balance">
                  {t.quote}
                </p>
                <div className="mt-8 text-xs uppercase tracking-[0.22em] text-dark/60 font-semibold">
                  — {t.author}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 transition-all ${
                idx === i ? "w-8 bg-brand" : "w-4 bg-dark/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Logos ---------------- */
function Logos() {
  const brands = ["MOS", "Cosmos", "Rexello", "Amigo", "KSA", "Living", "Hertels", "Aspire", "Verde", "Nimbus"];
  return (
    <section className="py-20 bg-background border-y border-dark/5">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-dark/55 mb-10">
          Trusted by Ambitious Businesses
        </p>
        <div className="overflow-hidden">
          <div className="animate-marquee">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-10 py-4 text-2xl font-serif italic text-dark/30 hover:text-brand transition-colors whitespace-nowrap"
              >
                {b}.
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */
function Portfolio() {
  const projects = [
    { img: caseMos, name: "MOS Utility", cat: "Fintech · Brand + Growth Platform", out: "Stronger market presence & qualified pipeline" },
    { img: caseCosmos, name: "Cosmos", cat: "E-Commerce · Digital Asset", out: "Modernized commerce experience" },
    { img: caseRexello, name: "Rexello Castors", cat: "Manufacturing · Visibility", out: "Inbound demand from B2B buyers" },
    { img: caseAmigo, name: "Amigo Academy", cat: "Education · Platform & Growth", out: "Scalable learner acquisition engine" },
    { img: caseKsa, name: "KSA Group", cat: "Hospitality · Brand & Web", out: "Premium positioning across markets" },
    { img: caseLiving, name: "Living Concepts", cat: "Lifestyle · Integrated Digital", out: "Consistent omni-channel growth" },
  ];
  return (
    <section id="portfolio" className="relative py-32 bg-canvas overflow-hidden">
      <div className="absolute top-10 right-0 text-[18vw] md:text-[13vw] font-bold text-dark/[0.04] select-none pointer-events-none tracking-tighter leading-none uppercase">
        Outcomes
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
              Selected Work
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
              Real Brands. Real Challenges.{" "}
              <span className="font-serif italic">Real Outcomes.</span>
            </h2>
          </div>
          <a href="/portfolio" className="text-xs font-semibold uppercase tracking-[0.22em] border-b-2 border-brand pb-1 cursor-pointer hover:text-brand">
            View All Case Studies →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.name} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-lg tracking-tight">{p.name}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-dark/55 mt-1">{p.cat}</p>
                  <p className="text-sm text-ink mt-2">{p.out}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] underline underline-offset-4 decoration-brand decoration-2 whitespace-nowrap">
                  Case Study
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Insights ---------------- */
function Insights() {
  const cats = ["All", "Business Growth", "Digital Transformation", "AI Adoption", "Branding", "Founder Insights"];
  const [active, setActive] = useState("All");
  const posts = [
    { cat: "AI Adoption", title: "From Curiosity to Advantage: A Practical AI Roadmap for SMEs", date: "May 2026", read: "7 min" },
    { cat: "Digital Transformation", title: "Why Operations is the New Growth Lever for Mid-Market Businesses", date: "Apr 2026", read: "6 min" },
    { cat: "Branding", title: "Brand Trust in a Performance-First Era", date: "Apr 2026", read: "5 min" },
    { cat: "Business Growth", title: "The Discovery-Led Playbook for Sustainable Customer Acquisition", date: "Mar 2026", read: "8 min" },
  ];
  const filtered = active === "All" ? posts : posts.filter((p) => p.cat === active);
  return (
    <section id="blog" className="py-32 bg-canvas">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
              Insights
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
              Perspectives on{" "}
              <span className="font-serif italic">Growth, Tech & AI</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] border transition ${
                  active === c
                    ? "bg-dark text-canvas border-dark"
                    : "border-dark/15 text-dark/70 hover:border-dark"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <article className="lg:col-span-7 group cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={blogFeatured}
                alt="Featured insight"
                width={1400}
                height={900}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand font-semibold">
              Featured · Founder Insights
            </p>
            <h3 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight leading-snug text-balance">
              What 15 Years of Building Businesses Has Taught Us About Real Growth
            </h3>
            <p className="mt-4 text-ink max-w-[60ch]">
              A founder's perspective on why integrated marketing, technology and AI is becoming
              the new operating model for ambitious businesses.
            </p>
          </article>

          <div className="lg:col-span-5 space-y-8">
            {filtered.slice(0, 4).map((p) => (
              <article key={p.title} className="group cursor-pointer border-b border-dark/10 pb-6 last:border-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-brand font-semibold">
                  {p.cat}
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight group-hover:text-brand transition-colors text-balance">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-dark/50 uppercase tracking-[0.18em]">
                  {p.date} · {p.read} read
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */
function Industries() {
  const items = [
    { t: "Healthcare", d: "Hospitals, clinics & healthtech — patient acquisition, brand trust and digital operations." },
    { t: "Education", d: "Institutions & edtech — learner acquisition, platform & enrollment growth." },
    { t: "Manufacturing", d: "B2B & industrial — visibility, lead generation and ERP-driven efficiency." },
    { t: "Hospitality", d: "Hotels, F&B & lifestyle — premium brand presence and direct demand." },
    { t: "BFSI", d: "Banking, financial services & insurance — trust-led marketing and digital compliance." },
    { t: "Service Businesses & SMEs", d: "Agencies, professional services and mid-market — integrated growth systems." },
  ];
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Industries
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Deep Industry Context. Tailored{" "}
            <span className="font-serif italic">Growth Playbooks</span>.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-dark/5 border border-dark/5">
          {items.map((it) => (
            <div
              key={it.t}
              className="bg-background p-10 group hover:bg-canvas transition-colors"
            >
              <div className="size-12 grid place-items-center bg-brand/15 mb-6">
                <div className="size-4 bg-brand" />
              </div>
              <h3 className="text-xl font-medium tracking-tight">{it.t}</h3>
              <p className="text-sm text-ink mt-2 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  return (
    <section id="cta" className="py-32 bg-canvas border-t border-dark/5">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
          Let's Talk Growth
        </span>
        <h2 className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-balance">
          Ready To{" "}
          <span className="font-serif italic">Accelerate Growth?</span>
        </h2>
        <p className="mt-6 text-lg text-ink max-w-[60ch] mx-auto">
          Whether you're looking to generate leads, strengthen your brand, modernize operations,
          implement AI or build scalable digital platforms — our team is ready to help.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="/contact" className="inline-flex items-center gap-2 bg-brand py-3 pr-5 pl-2.5 text-sm font-semibold text-dark ring-1 ring-brand hover:brightness-95 transition cursor-pointer">
            <span className="grid place-items-center size-6 rounded-full bg-dark/10">
              <span className="size-1.5 rounded-full bg-dark" />
            </span>
            Schedule Discovery Call
          </a>
          <a href="/portfolio" className="inline-flex items-center px-6 py-3 text-sm font-semibold border border-dark/15 hover:bg-dark hover:text-canvas transition cursor-pointer">
            Explore Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
function GrowthHome() {
  return (
    <main className="bg-canvas font-sans text-dark">
      <SiteHeader />
      <Hero />
      <Ticker />
      <Story />
      <Expertise />
      <SaaS />
      <Trust />
      <Process />
      <WhyAce />
      <Founder />
      <Testimonials />
      <Logos />
      <Portfolio />
      <Insights />
      <Industries />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}