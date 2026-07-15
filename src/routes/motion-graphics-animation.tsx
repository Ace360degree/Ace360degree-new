import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.23.jpg";
import caseMos from "@/assets/case-mos.1114.jpg";
import caseAmigo from "@/assets/case-amigo.1115.jpg";
import caseRexello from "@/assets/case-rexello.121.jpg";

export const Route = createFileRoute("/motion-graphics-animation")({
  component: MotionGraphicsAnimationPage,
  head: () => ({
    meta: [
      {
        title:
          "Motion Graphics & Animation Services Mumbai | 2D, 3D & Explainer Videos | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Motion Graphics & Visual Storytelling Partner helping businesses communicate complex ideas, strengthen brand recall and create memorable audience experiences through 2D, 3D and explainer animation.",
      },
      {
        property: "og:title",
        content: "Motion Graphics & Animation Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Transform Ideas Into Visual Experiences. Motion graphics, 2D & 3D animation, explainer videos and corporate storytelling engineered for attention, understanding and recall.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/motion-graphics-animation" },
    ],
    links: [{ rel: "canonical", href: "/motion-graphics-animation" }],
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
    q: "Complex Products Difficult To Explain?",
    s: "Use animation and motion storytelling to translate complexity into clarity — so customers, partners and stakeholders understand value at first watch.",
    tag: "Clarity",
  },
  {
    q: "Struggling To Capture Attention?",
    s: "Create visual experiences engineered to stop scrolling, hold focus and drive deeper engagement across every channel and screen.",
    tag: "Attention",
  },
  {
    q: "Need Better Product Demonstrations?",
    s: "Show features, workflows and benefits through motion — visualising what static imagery and copy cannot fully convey.",
    tag: "Demonstration",
  },
  {
    q: "Brand Story Not Connecting?",
    s: "Build emotional engagement through visual storytelling that translates positioning, purpose and personality into experiences people feel.",
    tag: "Story",
  },
  {
    q: "Presentations Lack Impact?",
    s: "Enhance corporate communication with animated visuals that strengthen retention, persuasion and stakeholder confidence.",
    tag: "Impact",
  },
  {
    q: "Launching Something New?",
    s: "Create launch content that generates excitement, drives awareness and gives campaigns the visual energy they need to land.",
    tag: "Launch",
  },
];

const solutions = [
  {
    name: "2D Motion Graphics",
    outcome: "Branded motion content that simplifies ideas and strengthens recognition.",
    services: [
      "Brand Animations",
      "Animated Infographics",
      "Social Motion Content",
      "Explainer Graphics",
      "Presentation Animations",
    ],
  },
  {
    name: "3D Animation & Visualization",
    outcome: "Photoreal motion experiences that showcase products, processes and spaces.",
    services: [
      "Product Visualizations",
      "Industrial Animations",
      "Architectural Animations",
      "3D Motion Content",
      "Launch Visuals",
    ],
  },
  {
    name: "Explainer Videos",
    outcome: "Short-form narratives that turn complex offerings into clear understanding.",
    services: [
      "Product Explainers",
      "Service Explainers",
      "Process Videos",
      "Educational Content",
      "Animated Presentations",
    ],
  },
  {
    name: "Corporate Storytelling",
    outcome: "Films and brand stories that build trust, pride and stakeholder confidence.",
    services: [
      "Brand Stories",
      "Corporate Films",
      "Company Overviews",
      "Culture Videos",
      "Employer Branding Videos",
    ],
  },
  {
    name: "Social & Digital Motion Content",
    outcome: "Scroll-stopping motion engineered for performance across digital channels.",
    services: [
      "Reels",
      "Short-Form Motion",
      "Campaign Visuals",
      "Digital Advertisements",
      "Promotional Videos",
    ],
  },
  {
    name: "Event & Launch Visuals",
    outcome: "High-impact motion content built for stages, screens and live audiences.",
    services: [
      "Event Openers",
      "LED Screen Content",
      "Product Launch Videos",
      "Conference Visuals",
      "Exhibition Content",
    ],
  },
];

const framework = [
  { step: "Understand", body: "Define communication goals, audience and the single most important idea the motion must land." },
  { step: "Conceptualize", body: "Develop visual narratives, scripts and creative direction that translate strategy into story." },
  { step: "Design", body: "Create visual systems, frames and storyboards that pre-visualise the final experience end-to-end." },
  { step: "Animate", body: "Bring concepts to life through motion, sound and pacing — engineered for clarity and emotion." },
  { step: "Amplify", body: "Deploy content across channels and platforms with cuts, ratios and edits built for each environment." },
];

const valuePillars = [
  { t: "Attention", b: "Motion is the first language of the screen. It earns the second of focus that copy and stills cannot." },
  { t: "Understanding", b: "Animation simplifies complexity — turning features, flows and concepts into clear, memorable visuals." },
  { t: "Engagement", b: "Movement, pacing and sound deepen interaction and increase the time audiences spend with your message." },
  { t: "Recall", b: "Visual stories encode better than text. Motion strengthens brand memory and long-term recognition." },
  { t: "Emotion", b: "Story, rhythm and tone create emotional resonance — the foundation of preference and advocacy." },
  { t: "Action", b: "Clear narrative and confident craft move audiences from interest to enquiry, consideration and decision." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech with a multi-product ecosystem that was difficult to explain through static collateral, slowing partner conversations and stakeholder onboarding.",
    strategy:
      "Built a connected motion system — explainer videos, animated product walkthroughs and corporate storytelling content — translating complex flows into clear, branded narratives.",
    outcome:
      "Faster comprehension of the product suite, stronger pitch performance with partners and a scalable motion language that supports new launches across the ecosystem.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand struggling to communicate programme value across digital channels where attention windows are short and competitor noise is constant.",
    strategy:
      "Developed a motion content engine — social reels, animated explainers and campaign films — engineered for scroll-stopping attention and clear value communication.",
    outcome:
      "Higher engagement on digital channels, stronger enquiry quality and a recognisable visual language that compounds brand recall across every campaign.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "An industrial manufacturer with technically rich products that were hard to differentiate or demonstrate through traditional brochures and static imagery.",
    strategy:
      "Created 3D product and industrial animations that visualise features, applications and engineering value — supporting sales, trade shows and digital channels.",
    outcome:
      "Stronger sales conversations, more confident dealer pitches and a motion asset library that elevates the brand across exhibitions, digital and B2B touchpoints.",
  },
];

const whyUs = [
  {
    t: "Story-First Approach",
    b: "We start with the message, not the medium. Every frame, cut and motion choice exists to land a specific idea — not to decorate.",
  },
  {
    t: "Creative + Strategic Thinking",
    b: "We treat motion as a communication tool, not an output. Strategy shapes story, story shapes design, design shapes motion.",
  },
  {
    t: "2D & 3D Expertise",
    b: "From animated infographics to photoreal product visualisations — one partner, one visual language, across formats and dimensions.",
  },
  {
    t: "Brand-Aligned Visual Systems",
    b: "Motion content built on top of your identity — colour, typography, tone — so every asset reinforces recognition, not dilutes it.",
  },
  {
    t: "Cross-Industry Experience",
    b: "Fintech, education, industrial, FMCG, real estate and B2B — motion calibrated to audience, channel and category.",
  },
  {
    t: "End-To-End Production",
    b: "Scripting, storyboarding, design, animation, sound and delivery — managed under one roof with one accountable team.",
  },
  {
    t: "No Generic Templates",
    b: "No stock kits, no reused assets, no template-driven shortcuts. Every project earns its own visual system.",
  },
  {
    t: "No Motion Without Purpose",
    b: "We do not animate for movement's sake. Every second of motion is designed to inform, engage or persuade.",
  },
];

const faqs = [
  {
    q: "What types of animation do you create?",
    a: "We produce 2D motion graphics, 3D animation and visualisation, explainer videos, corporate films, social and digital motion content, and event or launch visuals. Each format is selected based on the communication goal, audience and channel — not the other way around.",
  },
  {
    q: "Do you produce corporate films?",
    a: "Yes. We create corporate storytelling films — brand stories, company overviews, culture and employer branding videos — designed to build trust with customers, partners, investors and prospective employees.",
  },
  {
    q: "Can you create 3D product animations?",
    a: "Yes. We build photoreal 3D product, industrial and architectural animations that visualise features, processes and spaces — ideal for launches, exhibitions, sales presentations and digital channels.",
  },
  {
    q: "Do you create social media motion content?",
    a: "Yes. We design reels, short-form motion, campaign visuals and digital advertisements engineered for the attention windows, ratios and behaviours of each platform — always grounded in a consistent brand language.",
  },
  {
    q: "Can you handle scripting and storyboarding?",
    a: "Yes. Our process begins with strategy, scripting and storyboarding — so the story, structure and visual direction are aligned before any frame is animated. This is where the communication value is built.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on format, complexity and scope. Short social motion content typically takes two to three weeks; explainer videos and 3D animations take longer. We share an exact production timeline after the discovery conversation.",
  },
];

/* ---------- page ---------- */
function MotionGraphicsAnimationPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Motion Graphics & Animation</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Motion Graphics & Visual Storytelling Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Motion graphics that bring brands{" "}
              <em className="text-brand not-italic">to life.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              In a world filled with information, motion helps businesses capture attention,
              simplify complexity and create memorable experiences. At Ace360degree, we combine
              storytelling, design and animation to create visual content that strengthens
              communication and drives engagement — whether you are explaining a product,
              showcasing a service or building brand awareness.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Start My Motion Project <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Creative Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Motion Projects", v: "400+" },
                { k: "Focus", v: "Story · Motion · Recall" },
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
                alt="Motion graphics and animation studio for 2D, 3D, explainer and corporate storytelling"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Transform ideas into visual experiences.</p>
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
                The motion question is almost always a communication question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Motion is not about making things move. It is about making ideas land — capturing
                attention, simplifying complexity and building the kind of recall that compounds
                into recognition, preference and growth.
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
                  Our Motion Graphics & Animation Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete visual storytelling practice — built around clarity and recall.
                </h2>
              </div>
              <Link to="/services" className="text-sm font-semibold hover:text-brand">
                See full capabilities →
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <article
                  key={s.name}
                  className="group relative border border-dark/10 p-7 bg-canvas hover:border-dark transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/45">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{s.name}</h3>
                  <p className="mt-3 text-brand font-medium text-sm">{s.outcome}</p>
                  <ul className="mt-4 space-y-2">
                    {s.services.map((svc) => (
                      <li
                        key={svc}
                        className="text-sm text-dark/70 leading-relaxed flex items-start gap-2"
                      >
                        <span className="mt-1.5 size-1 rounded-full bg-brand shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. FRAMEWORK */}
      <Reveal>
        <section className="bg-dark text-canvas">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                The Ace360degree Visual Storytelling Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Understand. Conceptualize. Design. Animate. Amplify.
              </h2>
              <p className="mt-5 text-canvas/70">
                Story first. Motion second. A disciplined creative process for building
                visual content that communicates, engages and is remembered.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
              {framework.map((f, i) => (
                <div key={f.step} className="bg-dark p-7 group hover:bg-brand/10 transition-colors">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                    Stage {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl">{f.step}</h3>
                  <p className="mt-4 text-sm text-canvas/70 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 5. VALUE PILLARS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Motion Works
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Motion is how modern audiences understand, remember and decide.
              </h2>
              <p className="mt-4 text-dark/70">
                Six compounding effects that turn well-crafted motion into a strategic
                communication asset — measured in attention, recall and action.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {valuePillars.map((p, i) => (
                <div key={p.t} className="bg-canvas p-8 hover:bg-brand/10 transition-colors">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-dark/45 font-semibold">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{p.b}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-dark/10 pt-10">
              <p className="font-serif text-3xl md:text-4xl max-w-3xl leading-tight">
                People remember stories.{" "}
                <span className="text-brand">Motion helps tell them better.</span>
              </p>
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
                Motion Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Sharper understanding. Stronger recall. Real commercial impact.
              </h2>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {stories.map((s) => (
                <article
                  key={s.client}
                  className="border border-dark/10 bg-canvas overflow-hidden hover:border-dark transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={s.img}
                      alt={`${s.client} motion graphics and animation case study`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-brand font-semibold">
                      Case Study
                    </p>
                    <h3 className="mt-2 font-serif text-3xl">{s.client}</h3>
                    <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Challenge</dt>
                        <dd className="mt-1 text-dark/75">{s.challenge}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Solution</dt>
                        <dd className="mt-1 text-dark/75">{s.strategy}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Outcome</dt>
                        <dd className="mt-1 text-dark/75">{s.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                View Creative Case Studies <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-dark/55">More motion projects coming soon.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose Ace360degree for motion graphics & animation.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine story, design and motion craft — building visual content that
                communicates clearly, strengthens recall and earns attention in every
                environment it lives.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-brand"
              >
                Read our story <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-dark/10 border-y border-dark/10">
                {whyUs.map((w, i) => (
                  <li key={w.t} className="py-6 flex gap-6">
                    <span className="font-serif text-xl text-brand w-8 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl">{w.t}</h3>
                      <p className="mt-2 text-dark/70 text-sm leading-relaxed">{w.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. FAQ */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                FAQ
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Questions, answered.
              </h2>
              <p className="mt-5 text-dark/70">
                A clearer view of how motion graphics and animation strengthen communication,
                recall and engagement across your brand.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-dark/10 border-y border-dark/10">
                {faqs.map((f) => (
                  <li key={f.q} className="py-6">
                    <h3 className="font-serif text-xl md:text-2xl">{f.q}</h3>
                    <p className="mt-2 text-dark/70 leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 9. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Bring Your Story To Life
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Transform ideas into{" "}
            <em className="text-brand not-italic">visual experiences.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Create visual experiences that capture attention, improve understanding and
            strengthen brand impact across every audience and channel.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Request Motion Proposal <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Book Creative Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
