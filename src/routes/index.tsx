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

export const Route = createFileRoute("/")({
  component: Index,
});


/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-16 pb-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="mb-6 inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-dark/50">
            Digital Marketing Agency in Mumbai, India
          </span>
          <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
            Where Strategy Meets{" "}
            <span className="font-serif italic font-normal">Creativity</span> — And Brands Grow{" "}
            <span className="font-serif italic font-normal">Fearlessly</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-pretty text-lg text-ink leading-relaxed">
            At Ace360degree, we help ambitious brands grow through AI-powered, data-driven digital
            marketing, impactful branding, and scalable technology solutions. From startups to
            enterprises — our team crafts measurable digital success stories across India, UAE, UK,
            and USA.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-brand py-3 pr-5 pl-2.5 text-sm font-semibold text-dark ring-1 ring-brand hover:brightness-95 transition"
            >
              <span className="grid place-items-center size-6 rounded-full bg-dark/10">
                <span className="size-1.5 rounded-full bg-dark" />
              </span>
              Get Free Digital Audit
            </a>
            <a
              href="#cta"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-dark border border-dark/15 hover:bg-dark hover:text-canvas transition"
            >
              Schedule Consultation
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={heroMesh}
              alt="AI growth visualization"
              width={1024}
              height={1024}
              className="w-full aspect-square object-cover rounded-md outline outline-1 -outline-offset-1 outline-dark/5 shadow-xl shadow-dark/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-canvas p-5 ring-1 ring-dark/5 shadow-xl shadow-dark/5 max-w-[220px]">
              <div className="text-3xl font-serif italic text-brand leading-none">+142%</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-dark/50 mt-2">
                Avg. Conversion Lift
              </div>
            </div>
            <div className="absolute -top-5 right-4 bg-dark text-canvas px-4 py-2 text-[10px] uppercase tracking-[0.2em]">
              AI · Data · Growth
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
    "Digital Marketing",
    "Branding",
    "Technology",
    "AI-Powered Campaigns",
    "SEO",
    "Performance Marketing",
    "Web Development",
    "Analytics",
    "Growth",
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

/* ---------------- Showreel ---------------- */
function Showreel() {
  return (
    <section className="py-28 bg-canvas">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative group cursor-pointer">
          <img
            src={showreel}
            alt="Ace360 team at work"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full aspect-video object-cover rounded-md outline outline-1 -outline-offset-1 outline-dark/5"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div className="size-20 rounded-full bg-brand grid place-items-center shadow-2xl shadow-dark/30 group-hover:scale-110 transition-transform">
              <div className="size-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-dark ml-1" />
            </div>
          </div>
          <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-canvas/80 bg-dark/60 px-2 py-1">
            Identity Showreel
          </span>
        </div>
        <div>
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            The Ace360 Story
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Stories That <span className="font-serif italic">Inspire</span>. Results That{" "}
            <span className="font-serif italic">Speak</span>.
          </h2>
          <p className="mt-6 text-ink leading-relaxed max-w-[52ch]">
            Here's a glimpse into how Ace360degree blends creativity, technology, and strategy to
            transform ideas into measurable business growth. Every brand, campaign, and platform we
            build is engineered for performance and built to scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 bg-dark text-canvas py-3 pr-5 pl-2.5 text-sm font-semibold hover:bg-dark/90 transition">
              <span className="grid place-items-center size-6 rounded-full bg-canvas/10">
                <span className="size-1.5 rounded-full bg-canvas" />
              </span>
              Start a Project
            </a>
            <a href="#cta" className="inline-flex items-center px-6 py-3 text-sm font-semibold border border-dark/15 hover:bg-dark hover:text-canvas transition">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { cat: "Digital Marketing", title: "SEO", line: "Rank Higher. Get Found.", desc: "Optimizing your digital footprint to dominate search results and capture high-intent traffic." },
    { cat: "Digital Marketing", title: "Performance Marketing", line: "Clicks That Convert.", desc: "Data-driven campaigns engineered for ROI, lead generation, and aggressive scale." },
    { cat: "Branding", title: "Social Media", line: "Build. Engage. Grow.", desc: "Strategic storytelling that turns followers into brand advocates across every platform." },
    { cat: "Branding", title: "Visual Identity", line: "Iconic Brand Presence.", desc: "Distinct identity systems — logos, colors, typography — built to outlast trends." },
    { cat: "Technology", title: "Web Development", line: "Fast. Scalable. Future-Ready.", desc: "High-performance digital architectures with seamless UX across every device." },
    { cat: "Technology", title: "AI & Automation", line: "Work Smarter. Scale Faster.", desc: "Machine learning and custom workflows that eliminate bottlenecks and accelerate growth." },
  ];
  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute top-12 left-6 text-[18vw] md:text-[14vw] font-bold text-dark/[0.04] select-none pointer-events-none tracking-tighter leading-none uppercase">
        Services
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Our Expertise
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Where Strategy Meets <span className="font-serif italic">Creativity</span> — and
            Technology Drives <span className="font-serif italic">Growth</span>
          </h2>
          <p className="mt-6 text-ink leading-relaxed max-w-[58ch]">
            AI-powered marketing, branding, and technology solutions engineered for measurable
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/5 border border-dark/5">
          {services.map((s, i) => (
            <div
              key={s.title}
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
              <h3 className="text-2xl font-medium tracking-tight">{s.title}</h3>
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

/* ---------------- SaaS Products ---------------- */
function SaaS() {
  const products = [
    { n: "01", title: "Task Master", desc: "Enterprise-grade task tracking and workflow optimization for remote-first teams." },
    { n: "02", title: "Lead Management", desc: "End-to-end lead lifecycle tracking — acquisition to conversion with AI scoring." },
    { n: "03", title: "Visitor Management", desc: "Secure digital check-ins and access control for modern, security-conscious offices." },
  ];
  return (
    <section className="bg-dark text-canvas py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Smart SaaS Solutions
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Future-Proof Your Business With{" "}
            <span className="font-serif italic text-brand">Smart SaaS</span> Solutions
          </h2>
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
              <a className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand opacity-80 group-hover:opacity-100">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Achievements ---------------- */
function Achievements() {
  const stats = [
    { n: "6+", label: "Years of Experience" },
    { n: "300+", label: "Projects Completed" },
    { n: "45+", label: "Clients" },
    { n: "∞", label: "Cups of Coffee" },
  ];
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.22em] font-semibold text-dark/70 mb-10">
          Trusted by Businesses · Driven by Results
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
    { n: "01", title: "Dream", desc: "Defining the vision and uncovering market gaps." },
    { n: "02", title: "Design", desc: "Crafting the visual and strategic blueprint." },
    { n: "03", title: "Develop", desc: "Engineering scalable solutions with precision." },
    { n: "04", title: "Deliver", desc: "Launching and optimizing for sustainable growth." },
  ];
  return (
    <section className="bg-dark text-canvas py-28 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            How We Do It
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight">
            Simple, Quick &amp; <span className="font-serif italic text-brand">Successful</span>
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

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "Ace360degree transformed our digital footprint. Their AI-led campaigns lifted our qualified lead volume by 3x within a single quarter.",
      author: "Director, MOS Utility",
      brand: "MOS Utility",
    },
    {
      quote:
        "Strategy, design, technology — all from one team. The Amigo Academy launch was the smoothest roll-out we've ever done.",
      author: "Founder, Amigo Academy",
      brand: "Amigo Academy",
    },
    {
      quote:
        "Their team understood the nuance of our regional market and delivered a brand presence that truly resonates across KSA.",
      author: "Marketing Head, KSA",
      brand: "KSA Group",
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
          Testimonials
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
          What Our Clients <span className="font-serif italic">Say</span>
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
          Brands That Trust Us
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
    { img: caseMos, name: "MOS Utility", cat: "Fintech · Branding & UX" },
    { img: caseCosmos, name: "Cosmos", cat: "E-Commerce · Web Architecture" },
    { img: caseRexello, name: "Rexello Castors", cat: "Manufacturing · SEO" },
    { img: caseAmigo, name: "Amigo Academy", cat: "Education · Platform" },
    { img: caseKsa, name: "KSA Group", cat: "Hospitality · Brand & Web" },
    { img: caseLiving, name: "Living Concepts", cat: "Lifestyle · Digital" },
  ];
  return (
    <section id="portfolio" className="relative py-32 bg-canvas overflow-hidden">
      <div className="absolute top-10 right-0 text-[18vw] md:text-[13vw] font-bold text-dark/[0.04] select-none pointer-events-none tracking-tighter leading-none uppercase">
        Portfolio
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
              Featured Work
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
              Let's Build Your <span className="font-serif italic">Success Story</span>
            </h2>
          </div>
          <a className="text-xs font-semibold uppercase tracking-[0.22em] border-b-2 border-brand pb-1 cursor-pointer hover:text-brand">
            View All Projects →
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

/* ---------------- Why Ace360 ---------------- */
function WhyAce() {
  const points = [
    { t: "AI-Powered Strategy", d: "Decisions backed by real-time data, not guesswork." },
    { t: "Full-Stack Capability", d: "Marketing, branding and engineering under one roof." },
    { t: "ROI-Obsessed", d: "Every campaign is measured and optimized for outcomes." },
    { t: "Global Delivery", d: "Servicing brands across India, UAE, UK and USA." },
    { t: "Transparent Reporting", d: "Live dashboards keep you in the loop, always." },
    { t: "Senior Talent", d: "Strategists, designers and engineers — never juniors on autopilot." },
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
            Why Leading Brands{" "}
            <span className="font-serif italic">Choose Ace360degree</span>
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

/* ---------------- Blog ---------------- */
function Blog() {
  const cats = ["All", "Marketing", "Branding", "SEO", "Technology"];
  const [active, setActive] = useState("All");
  const posts = [
    { cat: "SEO", title: "How AI is Rewriting the Rules of Search Optimization", date: "May 2026", read: "6 min" },
    { cat: "Branding", title: "Why Visual Identity Still Wins in a Performance-First Era", date: "Apr 2026", read: "5 min" },
    { cat: "Technology", title: "Building Web Architectures That Scale Past 10M Users", date: "Apr 2026", read: "8 min" },
    { cat: "Marketing", title: "The 2026 Performance Marketing Playbook for D2C Brands", date: "Mar 2026", read: "7 min" },
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
              Digital Marketing, Branding &amp;{" "}
              <span className="font-serif italic">Technology Insights</span>
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
              Featured · Marketing
            </p>
            <h3 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight leading-snug text-balance">
              The State of AI-Powered Performance Marketing in 2026
            </h3>
            <p className="mt-4 text-ink max-w-[60ch]">
              How predictive bidding, generative creative and first-party data are reshaping how
              modern brands acquire customers — and what that means for your roadmap.
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
    { t: "BFSI", d: "Banking, Financial Services & Insurance" },
    { t: "Manufacturing", d: "Industrial & B2B" },
    { t: "Education", d: "EdTech & Institutions" },
    { t: "Healthcare", d: "Hospitals, Clinics & HealthTech" },
    { t: "Real Estate", d: "Developers & PropTech" },
    { t: "Lifestyle", d: "Retail, Fashion & D2C" },
  ];
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-brand font-semibold text-xs tracking-[0.22em] uppercase">
            Industries
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium leading-tight text-balance">
            Industries We Empower Through{" "}
            <span className="font-serif italic">Digital Innovation</span>
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
              <p className="text-sm text-ink mt-2">{it.d}</p>
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
          Let's Talk
        </span>
        <h2 className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-balance">
          Transform Ideas Into{" "}
          <span className="font-serif italic">Measurable Growth</span>
        </h2>
        <p className="mt-6 text-lg text-ink max-w-[52ch] mx-auto">
          Mumbai's AI-powered, ROI-driven agency partner — ready to build your next chapter.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a className="inline-flex items-center gap-2 bg-brand py-3 pr-5 pl-2.5 text-sm font-semibold text-dark ring-1 ring-brand hover:brightness-95 transition cursor-pointer">
            <span className="grid place-items-center size-6 rounded-full bg-dark/10">
              <span className="size-1.5 rounded-full bg-dark" />
            </span>
            Let's Collaborate
          </a>
          <a className="inline-flex items-center px-6 py-3 text-sm font-semibold border border-dark/15 hover:bg-dark hover:text-canvas transition cursor-pointer">
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Page ---------------- */
function Index() {
  return (
    <main className="bg-canvas font-sans text-dark">
      <SiteHeader />
      <Hero />
      <Ticker />
      <Showreel />
      <Services />
      <SaaS />
      <Achievements />
      <Process />
      <Testimonials />
      <Logos />
      <Portfolio />
      <WhyAce />
      <Blog />
      <Industries />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
