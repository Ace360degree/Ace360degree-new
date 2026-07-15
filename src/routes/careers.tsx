import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import careersHero from "@/assets/careers-heroy1.jpg";
import life1 from "@/assets/careers-life-1.jpg";
import life2 from "@/assets/careers-life-2.jpg";
import life3 from "@/assets/careers-life-3.jpg";
import life4 from "@/assets/careers-life-4.jpg";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers at Ace360degree | Join Mumbai's Leading Digital Agency" },
      {
        name: "description",
        content:
          "Explore career opportunities at Ace360degree — work with creative, tech, and marketing experts driving digital transformation.",
      },
      { property: "og:title", content: "Careers at Ace360degree" },
      {
        property: "og:description",
        content:
          "Join a team building the future of digital. Open roles across marketing, design, technology and operations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { property: "og:image", content: careersHero },
      { property: "twitter:image", content: careersHero },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
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
    <section className="relative bg-canvas pt-12 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] tracking-[0.22em] uppercase text-dark/50 mb-10">
          <a href="/" className="hover:text-brand">Home</a>
          <span className="mx-2">/</span>Careers
        </p>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-6">
              <span className="size-1.5 rounded-full bg-brand" /> Careers at Ace360degree
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.98] tracking-tight text-dark">
              Build What's Next in <em className="text-brand not-italic">Digital.</em> Together.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-dark/70 leading-relaxed">
              Join a team where ideas turn into campaigns, code turns into experiences, and every project makes an impact.
            </p>
            <p className="mt-4 max-w-xl text-base text-dark/60 leading-relaxed">
              At Ace360degree, we blend creativity, technology, and strategy — and we're always looking for minds that do the same.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#openings"
                className="group inline-flex items-center gap-2 bg-dark px-5 py-3 text-sm font-semibold text-canvas hover:bg-brand hover:text-dark transition"
              >
                View Open Positions
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#open-application"
                className="inline-flex items-center gap-2 border border-dark/15 px-5 py-3 text-sm font-semibold text-dark hover:border-dark transition"
              >
                Send Your CV →
              </a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative">
              <div className="absolute -inset-2 bg-brand/30 -z-10 translate-x-3 translate-y-3" />
              <img
                src={careersHero}
                alt="Ace360degree team collaborating in studio"
                width={1600}
                height={1100}
                className="w-full h-[440px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Culture ---------- */
const HIGHLIGHTS = [
  { icon: "✦", title: "Flexible & Creative Environment", body: "Space to think, experiment, and make work you're proud of." },
  { icon: "◇", title: "Cross-Functional Collaboration", body: "Marketers, designers and engineers building together — not in silos." },
  { icon: "↗", title: "Real Projects. Real Impact.", body: "Ship campaigns and platforms that move metrics for real brands." },
  { icon: "○", title: "Continuous Learning", body: "Workshops, mentorship and budget for tools that sharpen your craft." },
  { icon: "★", title: "Recognition & Growth", body: "Visible career paths, fair rewards, and credit where it's due." },
];

function Culture() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-4">Culture</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-dark">
              Work That Inspires.<br />
              <em className="text-brand not-italic">Culture That Empowers.</em>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-4" delay={120}>
            <p className="text-lg text-dark/75 leading-relaxed">
              We believe great work starts with great people — people who are curious, collaborative, and committed to growing every day.
            </p>
            <p className="mt-5 text-base text-dark/65 leading-relaxed">
              Here, you'll work with marketers, developers, designers, and storytellers shaping how brands connect in the digital world.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-dark/10 md:grid-cols-2 lg:grid-cols-5 border border-dark/10">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 60} className="bg-white p-7 hover:bg-canvas transition-colors">
              <div className="text-2xl text-brand mb-5">{h.icon}</div>
              <h3 className="font-semibold text-dark text-[15px] leading-snug mb-2">{h.title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{h.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 max-w-3xl font-serif text-2xl md:text-3xl text-dark leading-snug">
            Because at Ace360degree, we don't just work — <em className="text-brand not-italic">we build what we believe in.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Life @ Ace ---------- */
function LifeAtAce() {
  const captions = [
    { src: life1, caption: "Team Huddles Before Big Pitches", tag: "☕" },
    { src: life2, caption: "Creative Chaos in Progress", tag: "💡" },
    { src: life3, caption: "Launch Day Feels", tag: "🚀" },
    { src: life4, caption: "Growth Talks. Friday Fun. Repeat.", tag: "✦" },
  ];
  return (
    <section className="relative bg-canvas py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-10 text-center font-serif italic text-dark/[0.06] whitespace-nowrap select-none"
        style={{ fontSize: "clamp(80px, 14vw, 220px)", lineHeight: 1 }}
        aria-hidden
      >
        #LifeAtAce360degree
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-4">Behind the Screens</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-dark">
            A look behind the screens.
          </h2>
          <p className="mt-5 text-base text-dark/65 leading-relaxed">
            Brainstorming sessions, client wins, shoots, team lunches, and all the chaos that makes creativity worth it.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          {captions.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={i * 80}
              className={`group relative overflow-hidden ${
                i === 0
                  ? "md:col-span-7 md:row-span-2"
                  : i === 1
                  ? "md:col-span-5"
                  : i === 2
                  ? "md:col-span-5"
                  : "md:col-span-7"
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 || i === 3 ? "h-[500px]" : "h-[240px]"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-dark/80 to-transparent">
                <p className="text-canvas text-sm font-medium">
                  {item.caption} <span className="ml-1">{item.tag}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Openings ---------- */
type Job = { title: string; type: string; location: string; summary: string };
type Dept = { id: string; label: string; jobs: Job[] };

const DEPTS: Dept[] = [
  {
    id: "marketing",
    label: "Marketing & Strategy",
    jobs: [
      { title: "Digital Marketing Executive", type: "Full-time", location: "Mumbai", summary: "Run multi-channel campaigns across SEO, paid and content — own performance from brief to ROI." },
      { title: "Performance Marketing Specialist", type: "Full-time", location: "Mumbai", summary: "Plan, execute and scale Google, Meta and programmatic campaigns with sharp analytical instincts." },
      { title: "Social Media Strategist", type: "Full-time", location: "Mumbai", summary: "Craft platform-native content strategies for ambitious B2B and consumer brands." },
    ],
  },
  {
    id: "creative",
    label: "Creative & Design",
    jobs: [
      { title: "Graphic Designer", type: "Full-time", location: "Mumbai", summary: "Design brand systems, social creatives and campaign visuals with editorial polish." },
      { title: "Video Editor / Motion Designer", type: "Full-time", location: "Mumbai", summary: "Edit reels, ads and brand films — turn raw footage into stories that perform." },
      { title: "Copywriter", type: "Full-time", location: "Mumbai", summary: "Write voice, taglines and long-form for brands you'll be proud to put on your reel." },
    ],
  },
  {
    id: "tech",
    label: "Technology",
    jobs: [
      { title: "Web Developer", type: "Full-time", location: "Mumbai", summary: "Build fast, scalable websites and landing pages with React, Next.js and a sharp eye for craft." },
      { title: "App Developer", type: "Full-time", location: "Mumbai", summary: "Ship native and cross-platform mobile apps for our SaaS and client portfolio." },
      { title: "UI/UX Designer", type: "Full-time", location: "Mumbai", summary: "Design interfaces that feel obvious — for products people use every day." },
    ],
  },
  {
    id: "ops",
    label: "Project & Operations",
    jobs: [
      { title: "Client Servicing", type: "Full-time", location: "Mumbai", summary: "Be the trusted bridge between clients and our internal teams — keep work and relationships moving." },
      { title: "HR Executive", type: "Full-time", location: "Mumbai", summary: "Help us attract, hire and grow the best creative and tech talent in Mumbai." },
      { title: "Business Development", type: "Full-time", location: "Mumbai / UAE", summary: "Open new conversations, build pipelines and shape proposals with the leadership team." },
    ],
  },
];

function JobCard({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 50}>
      <div className="group bg-white border border-dark/10 hover:border-dark transition-colors">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-start justify-between gap-6 p-6 text-left"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-dark/55 mb-3">
              <span>{job.type}</span>
              <span className="size-1 rounded-full bg-dark/30" />
              <span>{job.location}</span>
            </div>
            <h3 className="font-serif text-2xl md:text-[26px] leading-tight text-dark">{job.title}</h3>
          </div>
          <span
            className={`mt-1 grid place-items-center size-9 rounded-full border border-dark/15 text-dark transition-all ${
              open ? "rotate-45 bg-brand border-brand" : "group-hover:bg-dark group-hover:text-canvas group-hover:border-dark"
            }`}
            aria-hidden
          >
            +
          </span>
        </button>
        <div
          className={`grid transition-all duration-500 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-0 border-t border-dark/10">
              <p className="text-[15px] text-dark/70 leading-relaxed mt-5 max-w-2xl">{job.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:careers@ace360degree.com?subject=Application — ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 bg-dark px-5 py-2.5 text-sm font-semibold text-canvas hover:bg-brand hover:text-dark transition"
                >
                  Apply Now →
                </a>
                <a
                  href="#open-application"
                  className="inline-flex items-center gap-2 border border-dark/15 px-5 py-2.5 text-sm font-semibold text-dark hover:border-dark transition"
                >
                  Refer a Friend
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Openings() {
  const [active, setActive] = useState(DEPTS[0].id);
  const dept = DEPTS.find((d) => d.id === active)!;
  return (
    <section id="openings" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-4">Current Openings</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-dark">
            We're Hiring. <em className="text-brand not-italic">Be Part of the Growth.</em>
          </h2>
          <p className="mt-5 text-base text-dark/65 leading-relaxed">
            If you love solving problems, thinking out loud, and building something every day — we'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-dark/10">
          {DEPTS.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`relative px-5 py-3 text-sm font-medium transition-colors ${
                active === d.id ? "text-dark" : "text-dark/50 hover:text-dark"
              }`}
            >
              {d.label}
              <span className="ml-2 text-xs text-dark/40">{DEPTS.find((x) => x.id === d.id)!.jobs.length}</span>
              {active === d.id && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 bg-brand" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4">
          {dept.jobs.map((j, i) => (
            <JobCard key={j.title} job={j} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Open Application ---------- */
function OpenApplication() {
  return (
    <section id="open-application" className="bg-canvas py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative bg-white border border-dark/10 p-10 md:p-14">
            <div className="absolute -top-px left-10 right-10 h-px bg-brand" />
            <div className="grid gap-8 md:grid-cols-12 items-end">
              <div className="md:col-span-7">
                <p className="text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-4">Open Application</p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight text-dark">
                  Don't see your role?
                </h2>
                <p className="mt-4 text-base text-dark/65 leading-relaxed max-w-lg">
                  We're always open to exceptional talent. Write to us with your resume and portfolio — we read every application.
                </p>
                <p className="mt-4 text-sm text-dark/55">
                  <span className="text-dark/80 font-medium">Email:</span>{" "}
                  <a href="mailto:careers@ace360degree.com" className="text-brand hover:underline underline-offset-4">
                    careers@ace360degree.com
                  </a>
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col gap-3">
                <a
                  href="mailto:careers@ace360degree.com?subject=Open Application"
                  className="inline-flex items-center justify-between gap-2 bg-dark px-5 py-3.5 text-sm font-semibold text-canvas hover:bg-brand hover:text-dark transition"
                >
                  Submit Resume <span>→</span>
                </a>
                <a
                  href="mailto:careers@ace360degree.com?subject=Talk to HR"
                  className="inline-flex items-center justify-between gap-2 border border-dark/15 px-5 py-3.5 text-sm font-semibold text-dark hover:border-dark transition"
                >
                  Talk to HR <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Growth & Why ---------- */
function Growth() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-4">Learning</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-dark">
            Grow With Us. <em className="text-brand not-italic">Learn Without Limits.</em>
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={120}>
          <p className="text-lg text-dark/75 leading-relaxed">
            We encourage curiosity — whether it's learning a new AI tool, exploring design trends, or experimenting with performance data.
          </p>
          <p className="mt-5 text-base text-dark/65 leading-relaxed">
            With mentorship, client exposure, and real projects, learning becomes part of everyday work.
          </p>
          <blockquote className="mt-10 border-l-2 border-brand pl-6 font-serif text-2xl md:text-[26px] leading-snug text-dark">
            "At Ace360degree, every project is a classroom — and every challenge is a chance to level up."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

const STATS = [
  { v: "15+", l: "Years Experience" },
  { v: "300+", l: "Projects Delivered" },
  { v: "45+", l: "Clients Served" },
  { v: "2", l: "India + UAE Presence" },
  { v: "∞", l: "Cross-functional Teams" },
];

function WhyJoin() {
  return (
    <section className="bg-dark py-24 text-canvas">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-4">Why Join Ace</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl">
            A foundation built on <em className="text-brand not-italic">trust, scale and craft.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-canvas/10 md:grid-cols-5 border border-canvas/10">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 70} className="bg-dark p-8">
              <div className="font-serif text-5xl md:text-6xl text-brand leading-none">{s.v}</div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-canvas/60">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="bg-canvas py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.22em] uppercase text-brand font-semibold mb-6">Join The Team</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.98] tracking-tight text-dark">
            Your next chapter <em className="text-brand not-italic">starts here.</em>
          </h2>
          <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-dark/65 leading-relaxed">
            We're not just hiring talent — we're building a team that creates the future of digital. Ready to join? Let's talk.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 bg-dark px-6 py-3.5 text-sm font-semibold text-canvas hover:bg-brand hover:text-dark transition"
            >
              View Open Positions →
            </a>
            <a
              href="mailto:careers@ace360degree.com?subject=Send Your CV"
              className="inline-flex items-center gap-2 border border-dark/15 px-6 py-3.5 text-sm font-semibold text-dark hover:border-dark transition"
            >
              Send Your CV →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Sticky Apply ---------- */
function StickyApply() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#openings"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-brand text-dark px-5 py-3 text-sm font-semibold shadow-lg shadow-dark/20 transition-all ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <span className="size-2 rounded-full bg-dark animate-pulse" />
      Apply Now
    </a>
  );
}

/* ---------- Page ---------- */
function CareersPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />
      <main>
        <Hero />
        <Culture />
        <LifeAtAce />
        <Openings />
        <OpenApplication />
        <Growth />
        <WhyJoin />
        <FinalCTA />
      </main>
      <SiteFooter />
      <StickyApply />
    </div>
  );
}
