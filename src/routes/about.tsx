import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutStory from "@/assets/about-storyy1.jpg";
import founderAsset from "@/assets/founder-altaf.jpg.asset.png";
import aboutTeam from "@/assets/about-team.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Ace360degree | Growth, Technology & AI Partner" },
      {
        name: "description",
        content:
          "Since 2009, Ace360degree has helped businesses grow through marketing, technology, automation and AI — a trusted growth partner across healthcare, education, manufacturing, hospitality and fintech.",
      },
      { property: "og:title", content: "About — Ace360degree" },
      {
        property: "og:description",
        content:
          "Growth, Technology & AI Partner since 2009. 300+ projects, 45+ clients, across multiple industries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
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

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const { ref, seen } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)] ${
        seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative bg-canvas pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] tracking-[0.22em] uppercase text-dark/50 mb-10">
          <a href="/" className="hover:text-brand">Home</a>
          <span className="mx-2">/</span>About
        </p>
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-brand mb-6">
              About Ace360degree
            </span>
            <h1 className="text-balance font-medium leading-[1.04] tracking-tight text-5xl md:text-6xl lg:text-[5.25rem]">
              Building business growth through marketing, technology &amp;{" "}
             <br/> <span className="font-serif italic text-dark/90">AI</span> 
            </h1>
            <p className="mt-8 max-w-[60ch] text-lg text-dark/65 leading-relaxed">
              Ace360degree is a growth-focused marketing, technology and AI partner
              helping businesses attract customers, strengthen brands, streamline
              operations and scale with confidence. For over a decade, we have partnered
              with organizations across healthcare, education, manufacturing,
              hospitality, fintech and service industries to create measurable business
              outcomes through integrated digital solutions.
            </p>
            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-dark text-canvas px-6 py-3.5 text-sm font-semibold hover:bg-brand hover:text-dark transition"
            >
              Schedule Discovery Call
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="lg:col-span-5">
                 <img
                src={aboutHero}
                alt="Ace360degree creative team collaborating"
                className="h-full w-full object-cover"
                width={1024}
                height={1280}
              />
            {/* <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] aspect-[4/5]"> </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Our Story ---------- */
function Story() {
  return (
    <section className="bg-canvas py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl aspect-[4/5]">
            <img
              src={aboutStory}
              alt="Ace360degree studio workspace"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={120}>
          <span className="text-[11px] tracking-[0.22em] uppercase text-dark/50">
            Our Story
          </span>
<h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
  The <span className="font-serif italic">Ace</span><br/>
  <span className="block ml-40">Journey.</span>
</h2>
          <div className="mt-8 space-y-5 text-dark/70 text-lg leading-relaxed max-w-[54ch]">
            <p>
              Founded in 2009, Ace360degree began with creative and web projects for
              forward-thinking organizations like Bayer, Häfele, Schott Kaisha, ARCIL
              and Rexello — building the trust that would shape the next decade.
            </p>
            <p>
              From those early engagements, we evolved into digital marketing, then
              expanded into branding, technology, CRM, ERP, automation and AI — growing
              alongside the businesses we serve and the markets they compete in.
            </p>
            <p>
              We navigated shifting digital landscapes and the COVID period through
              long-term partnerships, not short-term wins. Today we work with companies
              across healthcare, education, manufacturing, hospitality, fintech and
              service industries — helping them grow with clarity and confidence.
            </p>
          </div>
          <p className="mt-10 pt-8 border-t border-dark/10 text-base font-medium tracking-tight text-dark">
            Established 2009. 300+ Projects. <span className="text-brand">One mission</span> —
            help businesses grow through marketing, technology and AI.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
function Founder() {
  return (
    <section className="bg-canvas pb-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-7 order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
            Founder &amp; <span className="font-serif italic">Vision</span>
          </h2>
          <p className="mt-5 text-[11px] tracking-[0.22em] uppercase text-brand font-semibold">
            Altaf Shaikh — Founder &amp; CEO
          </p>
          <div className="mt-8 space-y-5 text-dark/70 text-lg leading-relaxed max-w-[60ch]">
            <p>
              Altaf founded Ace360degree in 2009 with a simple conviction — businesses
              don't need more vendors, they need a partner who can solve real growth
              problems end to end.
            </p>
            <p>
              Over 15+ years, that conviction has shaped the company's evolution from
              creative services into an integrated growth, technology and AI practice —
              one that connects strategy, marketing, platforms and automation into a
              single engine for business outcomes.
            </p>
            <p>
              His long-term vision is to help ambitious businesses transform digitally
              through pragmatic AI adoption, modern digital ecosystems and
              partnerships built to compound over years, not quarters.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-dark text-canvas px-6 py-3.5 text-sm font-semibold hover:bg-brand hover:text-dark transition"
            >
              Book Discovery Call <span aria-hidden>→</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-dark/15 px-6 py-3.5 text-sm font-semibold hover:border-brand hover:text-brand transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5 order-1 lg:order-2" delay={120}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-brand/15 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[oklch(0.94_0.01_80)]">
              <img
                src={founderAsset}
                alt="Altaf Shaikh, Founder & CEO of Ace360degree"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Values ---------- */
// function Values() {
//   const items = [
//     {
//       t: "Growth Before Deliverables",
//       d: "We measure success by business outcomes — leads, revenue and retention — not output volume.",
//     },
//     {
//       t: "Strategy Before Execution",
//       d: "Every campaign, platform and system begins with a clear thesis on how it moves the business.",
//     },
//     {
//       t: "Technology With Purpose",
//       d: "We adopt platforms, automation and AI only where they create real leverage for our clients.",
//     },
//     {
//       t: "Partnership Over Projects",
//       d: "We invest in long-term relationships that compound results across years, not quarters.",
//     },
//   ];
//   return (
//     <section className="bg-dark text-canvas py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         <Reveal className="max-w-3xl">
//           <span className="text-[11px] tracking-[0.22em] uppercase text-brand">
//             Our Values
//           </span>
//           <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
//             Principles that drive{" "}
//             <span className="font-serif italic">measurable growth.</span>
//           </h2>
//           <p className="mt-5 text-canvas/65 text-lg leading-relaxed">
//             Continuous evolution, strategic thinking and accountability guide every
//             engagement we take on.
//           </p>
//         </Reveal>
//         <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
//           {items.map((it, i) => (
//             <Reveal
//               key={it.t}
//               delay={i * 90}
//               className="bg-dark p-8 group hover:bg-white/[0.04] transition-colors"
//             >
//               <div className="size-10 grid place-items-center rounded-full bg-brand/15 text-brand mb-8 group-hover:bg-brand group-hover:text-dark transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//                   <path d="M5 12l5 5 9-11" />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-medium tracking-tight">{it.t}</h3>
//               <p className="mt-3 text-sm text-canvas/60 leading-relaxed">{it.d}</p>
//               <div className="mt-8 text-[10px] tracking-[0.22em] uppercase text-canvas/30">
//                 0{i + 1}
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Expertise ---------- */
// function Expertise() {
//   const cards = [
//     {
//       n: "01",
//       t: "Customer Acquisition & Visibility",
//       d: "SEO, performance marketing, social and content engines that bring qualified customers to your business.",
//     },
//     {
//       n: "02",
//       t: "Brand Growth & Positioning",
//       d: "Identity systems, storytelling and campaigns that build category leadership and pricing power.",
//     },
//     {
//       n: "03",
//       t: "Digital Platforms & Technology",
//       d: "Websites, mobile apps, portals and SaaS — engineered as durable digital assets.",
//     },
//     {
//       n: "04",
//       t: "Business Automation & AI",
//       d: "CRM, ERP, workflow automation and AI adoption that streamline operations and unlock leverage.",
//     },
//   ];
//   return (
//     <section className="bg-canvas py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         <Reveal className="max-w-3xl">
//           <span className="text-[11px] tracking-[0.22em] uppercase text-dark/50">
//             What We Do Best
//           </span>
//           <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
//             Outcomes our partners hire us for —{" "}
//             <span className="font-serif italic">under one roof.</span>
//           </h2>
//         </Reveal>
//         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cards.map((c, i) => (
//             <Reveal key={c.n} delay={i * 100}>
//               <article className="group relative h-full bg-white border border-dark/8 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)] transition-all duration-500">
//                 <div className="text-[11px] tracking-[0.22em] text-brand font-semibold">
//                   {c.n}
//                 </div>
//                 <h3 className="mt-6 text-2xl font-medium tracking-tight">{c.t}</h3>
//                 <p className="mt-4 text-dark/60 leading-relaxed">{c.d}</p>
//                 <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-dark group-hover:text-brand transition">
//                   Learn more <span aria-hidden>→</span>
//                 </div>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//         <div className="mt-14 flex justify-center">
//           <a
//             href="/#services"
//             className="inline-flex items-center gap-3 border-b border-dark pb-1 text-sm font-semibold hover:text-brand hover:border-brand transition"
//           >
//             Explore Our Services <span aria-hidden>→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Approach ---------- */
function Approach() {
  const steps = [
    {
      k: "01",
      t: "Growth Before Deliverables",
      d: "We measure success by business outcomes — leads, revenue and retention — not output volume.",
    },
    {
      k: "02",
      t: "Strategy Before Execution",
      d: "Every campaign, platform and system begins with a clear thesis on how it moves the business.",
    },
    {
      k: "03",
      t: "Technology With Purpose",
      d: "We adopt platforms, automation and AI only where they create real leverage for our clients.",
    },
    {
      k: "04",
      t: "Partnership Over Projects",
      d: "We invest in long-term relationships that compound results across years, not quarters.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#181818] text-[#f5f5f3]">
      <div className="mx-auto max-w-[1536px] px-5 py-10 md:px-8 md:py-14 lg:px-9">
        {/* Heading */}
        <Reveal className="max-w-[850px]">
          <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#d7a333]">
            Our Values
          </span>

          <h2 className="mt-4 text-[30px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[38px] lg:text-[48px]">
            Principles that drive{" "}
            <span className="font-serif font-normal italic">
              measurable growth.
            </span>
          </h2>

          <p className="mt-5 max-w-[830px] text-[12px] leading-6 text-white/50 sm:text-[14px]">
            Continuous evolution, strategic thinking and accountability guide
            every engagement we take on.
          </p>
        </Reveal>

        {/* Values */}
        <div className="mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.k} delay={index * 120}>
              <article
                className={[
                  "relative flex min-h-[260px] flex-col px-4 py-5",
                  "border-t border-white/[0.07]",
                  "md:min-h-[315px] md:border-t-0 md:px-8 md:py-8",
                  index !== 0 ? "md:border-l md:border-white/[0.07]" : "",
                ].join(" ")}
              >
                {/* Check icon */}
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#3b2f1d] text-[#d9a433]">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.5 10.1 8.8 12.4 13.7 7.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-[15px] font-medium leading-snug tracking-[-0.02em] text-[#f5f5f3] lg:text-[17px]">
                  {step.t}
                </h3>

                <p className="mt-4 max-w-[29ch] text-[12px] leading-[1.75] text-white/45 lg:text-[13px]">
                  {step.d}
                </p>

                {/* Step number */}
                <span className="mt-auto pt-8 text-[9px] tracking-[0.18em] text-white/20">
                  {step.k}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Achievements ---------- */
// function Achievements() {
//   const items: Array<{ n?: number; text?: string; l: string }> = [
//     { text: "2009", l: "Established" },
//     { n: 300, l: "Projects Delivered" },
//     { n: 45, l: "Clients Served" },
//     { text: "Multi", l: "Industries Supported" },
//   ];
//   return (
//     <section className="bg-canvas py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         <Reveal className="max-w-2xl">
//           <span className="text-[11px] tracking-[0.22em] uppercase text-dark/50">
//             The Journey So Far
//           </span>
//           <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
//             Credibility, built <span className="font-serif italic">year over year.</span>
//           </h2>
//           <p className="mt-5 text-dark/65 text-lg leading-relaxed">
//             India based. Globally minded. Marketing, technology and AI expertise under
//             one roof since 2009.
//           </p>
//         </Reveal>
//         <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/10 border border-dark/10 rounded-2xl overflow-hidden">
//           {items.map((it, i) => (
//             <Reveal
//               key={it.l}
//               delay={i * 90}
//               className="bg-canvas p-10"
//             >
//               <div className="text-[56px] md:text-[72px] font-medium tracking-tight leading-none text-dark">
//                 {typeof it.n === "number" ? <Counter to={it.n} /> : it.text}
//               </div>
//               <div className="mt-4 text-[11px] tracking-[0.22em] uppercase text-dark/50">
//                 {it.l}
//               </div>
//               <div className="mt-6 h-px w-10 bg-brand" />
//             </Reveal>
//           ))}
//         </div>
//         <Reveal className="mt-14">
//           <p className="font-serif italic text-2xl md:text-3xl text-dark/70 max-w-3xl">
//             "Every milestone is a story of partnership, learning and transformation."
//           </p>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

/* ---------- Testimonials ---------- */
// function Testimonials() {
//   const data = [
//     {
//       q: "Ace360degree has been a true growth partner. Prompt, strategic and consistently effective — our campaigns deliver real business outcomes year after year.",
//       n: "Irfaan Shaikh",
//       r: "Director, Amigo Academy",
//     },
//     {
//       q: "From brand to digital platforms, the Ace team thinks like owners. A long-term partnership that has compounded into measurable growth.",
//       n: "Marketing Lead",
//       r: "Rexello Castors",
//     },
//     {
//       q: "Strategic, accountable and outcome-driven. They treat our growth like their own — exactly what a modern business partner should be.",
//       n: "Founder",
//       r: "Hospitality Brand, UAE",
//     },
//   ];
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setI((p) => (p + 1) % data.length), 6500);
//     return () => clearInterval(t);
//   }, [data.length]);
//   return (
//     <section className="relative bg-canvas py-28 overflow-hidden">
//       <div className="pointer-events-none absolute inset-x-0 top-10 text-center">
//         <span className="font-serif italic text-[18vw] leading-none text-dark/[0.04] tracking-tight">
//           Testimonials
//         </span>
//       </div>
//       <div className="relative mx-auto max-w-7xl px-6">
//         <Reveal className="max-w-2xl">
//           <span className="text-[11px] tracking-[0.22em] uppercase text-dark/50">
//             Testimonials
//           </span>
//           <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
//             What our <span className="font-serif italic">clients</span> say.
//           </h2>
//         </Reveal>
//         <div className="mt-16 grid md:grid-cols-3 gap-6">
//           {data.map((t, idx) => (
//             <article
//               key={t.n}
//               className={`relative bg-white border border-dark/8 rounded-2xl p-8 transition-all duration-500 ${
//                 idx === i
//                   ? "shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] -translate-y-1"
//                   : "opacity-80"
//               }`}
//             >
//               <div className="text-brand text-4xl font-serif leading-none">"</div>
//               <p className="mt-3 text-dark/80 leading-relaxed">{t.q}</p>
//               <div className="mt-8 pt-6 border-t border-dark/10">
//                 <div className="font-medium">{t.n}</div>
//                 <div className="text-sm text-dark/55">{t.r}</div>
//               </div>
//             </article>
//           ))}
//         </div>
//         <div className="mt-10 flex items-center gap-2">
//           {data.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setI(idx)}
//               aria-label={`Show testimonial ${idx + 1}`}
//               className={`h-1.5 rounded-full transition-all ${
//                 idx === i ? "w-10 bg-dark" : "w-4 bg-dark/20"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Team ---------- */
function Team() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]">
            <img
              src={aboutTeam}
              alt="Ace360degree team brainstorming"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </Reveal>
        <div className="mt-14 grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.22em] uppercase text-dark/50">
              Our Culture
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
              A cross-functional team built for{" "}
              <span className="font-serif italic">what's next.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-dark/70 text-lg leading-relaxed">
              Marketing, design and technology collaborate as one team — bound by a
              learning culture, an innovation mindset and active AI adoption. We invest
              in our people so they can invest in your growth.
            </p>
            <a
              href="/careers"
              className="mt-6 inline-flex items-center gap-3 border-b border-dark pb-1 text-sm font-semibold hover:text-brand hover:border-brand transition"
            >
              Join Our Team <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCta() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#181818] text-canvas px-8 md:px-16 py-24 text-center">
          {/* Radial orange glow - matches Figma: FFB330 35% -> 0% */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 80% at 50% 100%, rgba(255,179,48,0.35) 0%, rgba(255,179,48,0) 60%)',
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-[11px] tracking-[0.22em] uppercase text-brand">
              Let's Build What's Next
            </span>
            <h2 className="mt-5 text-balance text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
              Let's build <span className="font-serif italic">what's next.</span>
            </h2>
            <p className="mt-6 text-canvas/65 text-lg leading-relaxed">
              Whether you're looking to attract customers, strengthen your brand,
              modernize operations or explore AI opportunities — our team is ready to help.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-brand justify-center rounded-xl border text-dark px-7 py-3.5 text-sm font-semibold hover:brightness-95 transition"
              >
                Book Discovery Call <span aria-hidden>→</span>
              </a>
              <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition hover:bg-gray-100"
                  >
                 Start A Project
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutPage() {
  return (
    <main className="bg-canvas font-sans text-dark">
      <SiteHeader />
      <Hero />
      <Story />
      <Founder />
      {/* <Values /> */}
      {/* <Expertise /> */}
      <Approach />
      {/* <Achievements /> */}
      {/* <Testimonials /> */}
      <Team />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
