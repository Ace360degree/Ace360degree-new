import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import portfolioHero from "@/assets/herostories.jpg";
import caseMos from "@/assets/case-mossy1.jpg";
import caseKsa from "@/assets/case-mossy6.jpg";
import caseAmigo from "@/assets/case-mossy2.jpg";
import caseRexello from "@/assets/case-mossy3.jpg";
import caseCosmos from "@/assets/case-mossy4.jpg";
import caseLiving from "@/assets/case-mossy5.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Business Growth Stories & Digital Transformation Case Studies — Ace360degree" },
      {
        name: "description",
        content:
          "Explore how Ace360degree partners with businesses across manufacturing, healthcare, education, fintech, architecture and retail to solve growth challenges through marketing, technology and AI.",
      },
      { property: "og:title", content: "Business Growth Stories — Ace360degree" },
      {
        property: "og:description",
        content:
          "Real partnerships. Real transformation. Real outcomes. Discover how Ace360degree powers business growth since 2009.",
      },
      { property: "og:image", content: "/src/assets/portfolio-hero.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

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

type CaseStudy = {
  client: string;
  category: string;
  positioning: string;
  headline: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote?: string;
  image: string;
  href: string;
};

const cases: CaseStudy[] = [
  {
    client: "MOS Utility Ltd.",
    category: "Fintech & B2B",
    positioning: "Digital Transformation · Customer Acquisition",
    headline: "Growth Through Integrated Digital Transformation",
    challenge:
      "Multiple brands, fragmented digital presence and inconsistent lead flow were limiting MOS Utility's ability to scale financial inclusion across India.",
    solution:
      "Built an integrated digital ecosystem across websites, video, SEO, social media and performance marketing — managing multi-brand visibility and acquisition under one strategic team.",
    outcome:
      "Consistent lead generation, 10–15 monthly videos and a unified digital ecosystem powering long-term business growth.",
    quote: "Ace360degree is our one-stop digital partner.",
    image: caseMos,
    href: "/case-mos-utility",
  },
  {
    client: "Amigo Academy",
    category: "Education & Aviation",
    positioning: "Operational Efficiency · Revenue Enablement",
    headline: "Building a Scalable Education Ecosystem",
    challenge:
      "Manual student operations, disconnected acquisition channels and low ROI on marketing spend were capping growth.",
    solution:
      "Deployed a CRM that evolved into a full ERP, integrated with SEO, performance marketing and creative production to align operations with acquisition.",
    outcome:
      "₹12L+ revenue from ₹2L Meta spend, streamlined student lifecycle operations and compounding marketing ROI.",
    image: caseAmigo,
    href: "/case-amigo-academy",
  },
  {
    client: "Rexello Castors",
    category: "Manufacturing",
    positioning: "Brand Growth · Market Expansion",
    headline: "Transforming a Legacy Manufacturer Into a Modern Digital Brand",
    challenge:
      "An established manufacturer needed to reach a new generation of global buyers without losing its legacy credibility.",
    solution:
      "Long-term partnership since 2010 spanning brand identity, packaging, mobile, SEO and marketing — re-engineering the brand for global digital discovery.",
    outcome:
      "3× engagement growth, expanded global visibility and a 15-year strategic partnership that continues to scale.",
    quote: "My one-stop shop for everything digital.",
    image: caseRexello,
    href: "/case-rexello-castors",
  },
  {
    client: "Cosmos Seals",
    category: "Industrial Manufacturing",
    positioning: "Business Visibility · Customer Acquisition",
    headline: "Engineering Digital Growth For Industrial Manufacturing",
    challenge:
      "Cosmos Seals' engineering excellence wasn't matched by digital discoverability in a competitive global category.",
    solution:
      "Rebuilt the website, 3D product visuals, SEO foundation and brand identity to reflect a modern industrial leader.",
    outcome:
      "#1 ranking for Mechanical Seal keywords, qualified inbound leads and a global-grade digital identity.",
    quote: "Ace360degree made us look and perform like a global brand.",
    image: caseCosmos,
    href: "/case-cosmos-seals",
  },
  {
    client: "Living Concepts",
    category: "Lifestyle & Retail",
    positioning: "Digital Transformation · Brand Growth",
    headline: "Creating Premium Digital Experiences For Lifestyle Brands",
    challenge:
      "An evolving lifestyle brand needed a digital experience worthy of its physical retail design language.",
    solution:
      "Platform migration, catalogue systems, video content and ongoing digital management built around content consistency and a refined user experience.",
    outcome:
      "A premium, content-rich online experience that mirrors the brand's design philosophy and supports retail growth.",
    image: caseLiving,
    href: "/case-living-concepts",
  },
  {
    client: "KSA — Kuwal Sanam Architects",
    category: "Architecture & Design",
    positioning: "Brand Growth · Digital Experience",
    headline: "Designing a Digital Experience Worth Admiring",
    challenge:
      "A leading architecture studio needed a digital presence that reflected the craft, restraint and quality of its built work.",
    solution:
      "Engineered a premium website using React, Next.js and a Laravel CMS — designed for motion, performance and quiet elegance.",
    outcome:
      "A signature digital identity that wins client trust before the first meeting and elevates inbound positioning.",
    quote: "Whatever we dreamt, they created exactly the same.",
    image: caseKsa,
    href: "/case-kuwal-sanam",
  },
];

const legacy = [
  { brand: "Bayer India", category: "Pharma & Healthcare", impact: "Corporate communication & digital activations" },
  { brand: "Häfele", category: "Architecture & Hardware", impact: "Product storytelling & creative campaigns" },
  { brand: "Schott Kaisha", category: "Pharma Packaging", impact: "Digital presence & B2B communication" },
  { brand: "ARCIL India", category: "Financial Services", impact: "Brand identity & web foundation" },
  { brand: "Al-Nuaim", category: "Lifestyle & Retail", impact: "Premium brand experience" },
];

const timeline = [
  { year: "2009", label: "Foundation of Ace Interactives" },
  { year: "2010", label: "Bayer engagement begins" },
  { year: "2010–13", label: "Häfele creative partnership" },
  { year: "2012", label: "Schott Kaisha digital programs" },
  { year: "2014", label: "ARCIL brand & web foundation" },
  { year: "2018", label: "Amigo Academy — education tech" },
  { year: "2022", label: "Growth & digital transformation expansion" },
  { year: "2025+", label: "AI solutions & business transformation" },
];

const industries = [
  "Healthcare",
  "Education",
  "Manufacturing",
  "Fintech",
  "Architecture",
  "Retail",
  "Technology",
  "Hospitality",
  "Service Businesses",
];

const testimonials = [
  {
    quote:
      "Ace360degree has been a long-term growth partner — they understand our business, not just our marketing.",
    name: "MOS Utility Ltd.",
    role: "Fintech & B2B",
  },
  {
    quote:
      "A 15-year partnership that has evolved with our business — from brand to digital to global market expansion.",
    name: "Rexello Castors",
    role: "Manufacturing",
  },
  {
    quote:
      "From operations to acquisition, the team turned scattered initiatives into a measurable business engine.",
    name: "Amigo Academy",
    role: "Education & Aviation",
  },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedCases />
        <Legacy />
        <MoreStories />
        <Industries />
        <Testimonials />
        <WhyStay />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-dark/5">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <nav className="text-xs tracking-wide text-dark/55">
          <Link to="/" className="hover:text-brand">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-dark/80">Case Studies</span>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-dark/55">
              <span className="size-1.5 rounded-full bg-brand" /> Business Growth Stories
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
              Business Growth Stories. <br />
              <span className="italic text-dark/85">Digital Transformation</span> <br />
              <span className="bg-brand/95 px-2 -mx-2 text-dark">Results.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-dark/65 text-pretty">
               healthcare,
              education, fintech, architecture, hospitality and service industries to solve growth
              challenges through marketing, branding, technology and AI.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-dark/65 text-pretty">
              Every project showcased here represents a business challenge solved, an opportunity
              unlocked, and a partnership built on measurable outcomes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#cases"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark py-3 px-5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Explore Success Stories →
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/15 bg-white py-3 px-5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark/40 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
              >
                Book Discovery Call →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative">
              <div className="absolute -inset-6 bg-brand/15 blur-2xl rounded-full" aria-hidden />
              <img
                src={portfolioHero}
                alt="Editorial montage of Ace360degree business growth stories"
                width={1280}
                height={1280}
                className="relative w-full aspect-square object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED CASES ---------------- */
function FeaturedCases() {
  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-dark/55">Featured Success Stories</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight">
              Business outcomes, <em>not just deliverables</em>.
            </h2>
          </div>
          <p className="max-w-md text-dark/60 text-pretty">
            Each story below is a long-term partnership — built around a real business challenge, a
            strategic solution and measurable transformation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {cases.map((c, i) => (
            <CaseCard key={c.client} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`group relative bg-white border border-dark/5 transition-all duration-700 ${
        seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]`}
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-dark/5">
        <img
          src={item.image}
          alt={item.client}
          loading="lazy"
          width={1280}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-7 lg:p-9">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-dark/55">
          <span>{item.category}</span>
          <span className="text-dark/40">{item.positioning}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl md:text-[28px] leading-snug tracking-tight">
          {item.headline}
        </h3>

        <dl className="mt-5 space-y-3 text-dark/75 leading-relaxed">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.22em] text-dark/50">Challenge</dt>
            <dd className="mt-1 text-pretty">{item.challenge}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.22em] text-dark/50">Solution</dt>
            <dd className="mt-1 text-pretty">{item.solution}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.22em] text-brand">Outcome</dt>
            <dd className="mt-1 text-pretty font-medium text-dark">{item.outcome}</dd>
          </div>
        </dl>

        {item.quote && (
          <blockquote className="mt-6 border-l-2 border-brand pl-4 italic text-dark/75">
            “{item.quote}”
          </blockquote>
        )}

        <div className="mt-7 flex items-center justify-between gap-4 pt-6 border-t border-dark/5">
          <div className="text-xs uppercase tracking-[0.22em] text-dark/40">{item.client}</div>
          <Link
            to={item.href}
            className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-dark hover:text-brand transition"
          >
            Discuss a Similar Story <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------------- LEGACY ---------------- */
function Legacy() {
  return (
    <section className="bg-dark text-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-canvas/55">Enterprise Experience</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight">
              The enterprise engagements that <em className="text-brand not-italic">shaped how we work</em>.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-canvas/70 text-pretty leading-relaxed text-lg max-w-2xl">
            <p>
              Before Ace360degree evolved into a Growth, Branding, Technology and AI partner,
              we worked with leading enterprise organizations that helped shape our capabilities and values.
            </p>
            <p>
              These engagements taught us how enterprise organizations approach governance,
              branding, communication and digital transformation — and continue to influence how we
              serve clients today.
            </p>
            <p>
              <Link
                to="/success-stories/enterprise-experience"
                className="inline-flex items-center gap-2 text-brand hover:underline underline-offset-4 text-base font-medium"
              >
                Read the full enterprise experience story →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-canvas/10">
          {legacy.map((l, i) => (
            <div
              key={l.brand}
              className="group bg-dark p-7 lg:p-8 hover:bg-canvas/[0.03] transition relative"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-canvas/40">
                0{i + 1} — {l.category}
              </div>
              <div className="mt-8 font-serif text-2xl">{l.brand}</div>
              <p className="mt-3 text-sm text-canvas/65 leading-relaxed">{l.impact}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="text-[11px] uppercase tracking-[0.22em] text-canvas/55">Our Evolution</div>
          <h3 className="mt-4 font-serif text-3xl md:text-4xl tracking-tight max-w-3xl">
            From corporate communication to a <em className="text-brand not-italic">Growth, Technology & AI partner</em>.
          </h3>

          <div className="mt-12 relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-canvas/15 hidden md:block" aria-hidden />
            <ol className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-10 gap-x-4">
              {timeline.map((m, i) => (
                <li key={i} className="relative">
                  <div className="hidden md:block size-2.5 rounded-full bg-brand mb-4 relative z-10" />
                  <div className="text-brand font-serif text-xl md:text-2xl tracking-tight">{m.year}</div>
                  <div className="mt-2 text-sm text-canvas/70 leading-snug">{m.label}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MORE STORIES ---------------- */
function MoreStories() {
  return (
    <section className="py-24 lg:py-32 bg-canvas">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-dark/55">More Stories</div>
        <h2 className="mt-5 font-serif text-4xl md:text-6xl tracking-tight text-balance">
          More Partnerships. <em className="text-brand not-italic">More Transformation.</em>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-dark/65 text-lg text-pretty">
          We've partnered with 45+ businesses across industries — building integrated growth,
          technology and AI programs designed to compound over time.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#cases"
            className="inline-flex items-center gap-2 rounded-2xl bg-dark py-3 px-5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
          >
            See All Stories →
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-dark/15 bg-white py-3 px-5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark/40 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
          >
            Book Discovery Call →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  return (
    <section className="py-24 lg:py-28 border-t border-dark/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.22em] text-dark/55">Industries</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight">
              A cross-industry <em className="text-brand not-italic">growth partner</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-dark/65 text-pretty">
            We partner across regulated, technical and consumer-facing categories — wherever
            marketing, technology and AI can unlock measurable business growth.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 border-t border-l border-dark/10">
          {industries.map((name) => (
            <div
              key={name}
              className="group border-r border-b border-dark/10 aspect-[2/1] flex items-center justify-center text-center p-4 hover:bg-brand/10 transition"
            >
              <span className="font-serif text-lg md:text-xl tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[active];
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 top-10 text-center font-serif text-[18vw] leading-none tracking-tight text-dark/[0.04]"
      >
        Partnerships
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-dark/55">Long-term partnerships</div>
        <blockquote
          key={active}
          className="mt-10 font-serif text-3xl md:text-4xl leading-snug tracking-tight text-balance animate-fade-up"
        >
          “{t.quote}”
        </blockquote>
        <div className="mt-10 text-sm">
          <div className="font-semibold">{t.name}</div>
          <div className="text-dark/55">{t.role}</div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-dark" : "w-3 bg-dark/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY BUSINESSES STAY ---------------- */
function WhyStay() {
  return (
    <section className="py-20 lg:py-24 border-t border-dark/5 bg-canvas">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-dark/55">Why Businesses Stay With Us</div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-tight text-balance">
              A partnership that <em className="text-brand not-italic">evolves with your business</em>.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-dark/70 text-lg leading-relaxed text-pretty">
            <p>
              Many of our client relationships span multiple years because our role extends beyond
              execution.
            </p>
            <p>
              We continuously help businesses adapt, evolve and grow through changing markets,
              technologies and customer expectations — operating as a long-term growth partner, not a
              vendor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-canvas border-t border-dark/5">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">
          Let's build your next <br />
          <em className="not-italic">growth</em> <span className="bg-brand px-2 -mx-2">story.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-dark/65 text-lg text-pretty">
          Whether you're looking to generate more leads, strengthen your brand, modernize operations,
          build digital products or explore AI opportunities, we're ready to help.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-dark py-3 px-5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
          >
            Book Discovery Call →
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand py-3 px-5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
          >
            View Service Capabilities →
          </Link>
        </div>
      </div>
    </section>
  );
}
