import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/ai-content-marketing-systems")({
  component: AIContentMarketingSystemsPage,
  head: () => ({
    meta: [
      { title: "AI Content & Marketing Systems Partner — Ace360degree" },
      {
        name: "description",
        content:
          "Ace360degree helps businesses scale visibility, authority and marketing performance through intelligent content operations, multi-channel amplification and AI-powered marketing systems.",
      },
      {
        property: "og:title",
        content: "Create Once. Amplify Everywhere. Scale Intelligently. — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "AI-powered content operations and marketing systems: thought leadership, SEO/AEO/GEO, repurposing, automation and intelligence — engineered for growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-content-marketing-systems" },
    ],
    links: [{ rel: "canonical", href: "/ai-content-marketing-systems" }],
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
  { t: "Visibility At Scale", b: "Show up consistently across search, social, AI engines and inboxes — without scaling content teams linearly." },
  { t: "Authority That Compounds", b: "Thought leadership systems that turn founder and brand expertise into long-term market credibility." },
  { t: "Marketing Efficiency", b: "Reduce cost per asset and cost per channel by amplifying one insight across many formats and touchpoints." },
  { t: "Faster Speed-To-Market", b: "Campaigns, content and communications launch in days, not weeks — without compromising quality." },
  { t: "Search In The AI Era", b: "Be discoverable across Google (SEO), AI answer engines (AEO) and generative search experiences (GEO)." },
  { t: "Predictable Growth", b: "Marketing systems — not heroic effort — that generate consistent reach, leads and pipeline month after month." },
];

const challenges = [
  { q: "Content That Doesn't Travel Far Enough?", s: "Build amplification systems that turn every asset into dozens of touchpoints across channels and formats.", tag: "Reach" },
  { q: "Inconsistent Brand Voice & Output?", s: "Centralize voice, narrative and templates so every piece of content reflects the brand — at any volume.", tag: "Consistency" },
  { q: "Founder Expertise Locked Away?", s: "Capture founder and leadership insights and convert them into thought leadership across LinkedIn, blogs, video and email.", tag: "Authority" },
  { q: "Losing Visibility To Competitors?", s: "Modernize SEO with AEO and GEO strategies so the brand stays discoverable as search behavior evolves.", tag: "Discoverability" },
  { q: "Marketing Team Stretched Thin?", s: "Deploy AI-assisted workflows that multiply team capacity — without increasing headcount or quality risk.", tag: "Capacity" },
  { q: "Hard To Measure What's Working?", s: "Implement marketing intelligence systems that connect content, channels and outcomes for clear ROI.", tag: "Intelligence" },
];

const solutions = [
  {
    name: "AI Content Operations",
    outcome: "A high-velocity content engine — consistent, on-brand and scalable.",
    services: ["Editorial Strategy & Calendars", "AI-Assisted Production Workflows", "Brand Voice & Style Systems", "Review & Governance Frameworks", "Performance-Led Iteration"],
  },
  {
    name: "Thought Leadership Systems",
    outcome: "Founders and leaders established as recognized voices in their category.",
    services: ["Founder Branding", "Executive POV Development", "LinkedIn Authority Programs", "Long-Form Insight Articles", "Speaking & Podcast Positioning"],
  },
  {
    name: "Content Repurposing & Multiplication",
    outcome: "One insight → many assets → many channels — at a fraction of the effort.",
    services: ["Podcast & Webinar Repurposing", "Long-Form To Short-Form", "Video, Text & Audio Variants", "Channel-Specific Adaptation", "Asset Libraries"],
  },
  {
    name: "AI SEO, AEO & GEO",
    outcome: "Discoverability across traditional search, AI answers and generative experiences.",
    services: ["Search Strategy & Keyword Architecture", "AI Answer Engine Optimization", "Generative Engine Optimization", "Topical Authority Programs", "Technical & On-Page SEO"],
  },
  {
    name: "Marketing Automation",
    outcome: "Right message, right person, right moment — automated end-to-end.",
    services: ["Email & WhatsApp Journeys", "Lead Nurture Workflows", "Lifecycle Communication", "Campaign Triggers", "CRM-Connected Marketing"],
  },
  {
    name: "Marketing Intelligence",
    outcome: "Clarity on what's driving growth — and where to invest next.",
    services: ["Marketing Dashboards", "Channel Performance Reporting", "Content Performance Analytics", "Attribution Frameworks", "Executive Marketing Reviews"],
  },
];

const framework = [
  { step: "Strategize", body: "Define audience, narrative, channels and outcomes — so content investment is anchored to business growth." },
  { step: "Create", body: "Capture founder, brand and category insights through structured workflows designed for scale." },
  { step: "Multiply", body: "Expand every core asset into multiple formats and channel-native variants — engineered for amplification." },
  { step: "Distribute", body: "Deploy content across owned, earned and paid channels with automation and lifecycle workflows." },
  { step: "Measure & Optimize", body: "Track performance, sharpen the narrative and continuously evolve the system for compounding returns." },
];

const multiplication = [
  {
    source: "1 Podcast Episode",
    outputs: ["Long-form blog article", "LinkedIn carousel & posts", "Short-form video clips", "Email newsletter feature", "Quote graphics & audiograms", "SEO-optimized show notes"],
  },
  {
    source: "1 Webinar / Event",
    outputs: ["Multi-week social campaign", "Insight-led blog series", "Email nurture sequence", "Sales enablement assets", "On-demand video library", "Repurposed micro-content"],
  },
  {
    source: "1 Founder Insight",
    outputs: ["LinkedIn thought leadership post", "Long-form blog article", "Email POV to subscribers", "Short-form video reel", "Sales narrative talking point", "PR & media angle"],
  },
];

const channels = [
  { name: "Search (SEO)", desc: "Topical authority, on-page and technical SEO for sustained organic visibility." },
  { name: "AI Engines (AEO)", desc: "Optimization for AI answer engines so the brand surfaces inside generative responses." },
  { name: "Generative Search (GEO)", desc: "Visibility within AI-powered search experiences and discovery surfaces." },
  { name: "LinkedIn", desc: "Founder branding and B2B authority programs that build trust and demand." },
  { name: "YouTube & Short Video", desc: "Video-first storytelling, repurposed across platforms for compounding reach." },
  { name: "Email & WhatsApp", desc: "Owned-audience marketing with lifecycle automation and high-intent messaging." },
  { name: "Instagram & Social", desc: "Channel-native content that builds community, recall and brand affinity." },
  { name: "Podcasts & Audio", desc: "Long-form authority formats that fuel multi-channel content systems." },
];

const whyUs = [
  { t: "Marketing Systems, Not One-Off Assets", b: "We build content engines that compound — not isolated campaigns that need constant restart." },
  { t: "Brand + Strategy + AI", b: "We combine narrative thinking with intelligent workflows — so scale never dilutes brand quality." },
  { t: "Founder & Executive Voice Specialists", b: "Proven systems for translating leadership thinking into category-defining authority." },
  { t: "Built For The AI Search Era", b: "SEO, AEO and GEO designed for how customers actually discover brands today and tomorrow." },
  { t: "Performance-Linked Content", b: "Every system ties back to reach, leads, pipeline and brand impact — not vanity output metrics." },
  { t: "Long-Term Partnership", b: "Since 2009, we've built marketing systems that grow with our clients' ambitions." },
];

const faqs = [
  { q: "Is this AI replacing our content team?", a: "No. We design systems that amplify your team's capacity and expertise — capturing the brand voice and freeing creators from repetitive production work." },
  { q: "How is this different from hiring a content agency?", a: "Agencies typically deliver assets. We build the operating system — workflows, governance, repurposing and intelligence — so content becomes a compounding business asset." },
  { q: "What is AEO and GEO, and why now?", a: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) ensure your brand appears inside AI-generated answers. As search shifts toward AI, this is where future visibility is won." },
  { q: "How quickly will we see results?", a: "Output velocity improves within weeks; authority and search results compound over quarters. We design for both short-term momentum and long-term equity." },
  { q: "Can this work for B2B and enterprise brands?", a: "Yes. Our systems are particularly effective for B2B, founder-led and considered-purchase brands where trust, authority and consistent insight drive conversion." },
];

/* ---------- page ---------- */
function AIContentMarketingSystemsPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <Link to="/ai-transformation" className="hover:text-brand">AI &amp; Business Transformation</Link>
            <span className="mx-1">/</span>
            <span className="text-dark">AI Content &amp; Marketing Systems</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              AI Content Operations &amp; Marketing Systems Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Create once. Amplify everywhere. <em className="text-brand not-italic">Scale</em> intelligently.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Modern growth is won by brands that build content engines, not produce one-off assets.
              Ace360degree helps organizations design intelligent content and marketing systems —
              scaling visibility, authority and performance across every channel that matters.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition">
                Build My Content Engine <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition">
                Book Marketing Systems Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[{ k: "Content Programs", v: "200+" }, { k: "Channels Activated", v: "10+" }, { k: "Since", v: "2009" }].map((m) => (
                <div key={m.k}>
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/55">{m.k}</p>
                  <p className="mt-2 font-serif text-2xl">{m.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={heroImg} alt="AI-powered content and marketing systems" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">One insight. Many assets. Compounding growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY IT MATTERS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">Why Content Systems Matter</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Marketing has shifted from campaigns to compounding systems.</h2>
              <p className="mt-4 text-dark/70">
                Brands that win today don't out-produce their competitors — they out-design the
                content engine behind their growth. Intelligent systems unlock scale, authority
                and efficiency at the same time.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyMatters.map((w) => (
                <div key={w.t} className="border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors">
                  <h3 className="font-serif text-2xl">{w.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. CHALLENGES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">Business Challenges We Solve</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Start with the growth problem. The content system follows.</h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {challenges.map((c) => (
                <div key={c.q} className="bg-canvas p-8 hover:bg-brand/10 transition-colors">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">{c.tag}</p>
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
                <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">AI Content &amp; Marketing Solutions</span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Intelligent systems — engineered for visibility, authority and growth.</h2>
              </div>
              <Link to="/services" className="text-sm font-semibold hover:text-brand">See full capabilities →</Link>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <article key={s.name} className="group relative border border-dark/10 p-7 bg-canvas hover:border-dark transition-colors">
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/45">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-serif text-2xl">{s.name}</h3>
                  <p className="mt-3 text-brand font-medium text-sm">{s.outcome}</p>
                  <ul className="mt-4 space-y-2">
                    {s.services.map((svc) => (
                      <li key={svc} className="text-sm text-dark/70 leading-relaxed flex items-start gap-2">
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

      {/* 5. FRAMEWORK */}
      <Reveal>
        <section className="bg-dark text-canvas">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">The Ace360degree AI Marketing Framework</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">A disciplined path from content output to compounding growth.</h2>
            </div>
            <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
              {framework.map((f, i) => (
                <div key={f.step} className="bg-dark p-7 relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-serif text-3xl">{f.step}</h3>
                  <p className="mt-4 text-sm text-canvas/70 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. MULTIPLICATION */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">The Content Multiplication Engine</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">One source. Many assets. Every channel.</h2>
              <p className="mt-4 text-dark/70">
                The most efficient marketing teams don't create more — they multiply smarter.
                Here's how a single source asset becomes a full content campaign.
              </p>
            </div>
            <div className="mt-12 grid lg:grid-cols-3 gap-5">
              {multiplication.map((m) => (
                <article key={m.source} className="border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">Source</p>
                  <h3 className="mt-3 font-serif text-2xl">{m.source}</h3>
                  <p className="mt-4 font-serif text-3xl text-brand">→</p>
                  <ul className="mt-4 space-y-2">
                    {m.outputs.map((o) => (
                      <li key={o} className="text-sm text-dark/70 leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 size-1 rounded-full bg-brand shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. CHANNELS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">Marketing Channels Supported</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Visibility wherever your audience is paying attention.</h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {channels.map((c) => (
                <article key={c.name} className="border border-dark/10 bg-canvas p-6 hover:border-dark transition-colors">
                  <h3 className="font-serif text-xl">{c.name}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">Why Ace360degree</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">A growth systems partner — not a content vendor.</h2>
              <p className="mt-5 text-dark/70">
                Since 2009, we've helped brands build marketing capability that compounds. Our
                AI-powered content practice combines brand thinking, marketing strategy and
                operational design — turning content into a strategic business asset.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-brand">
                Read our story <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-dark/10 border-y border-dark/10">
                {whyUs.map((w, i) => (
                  <li key={w.t} className="py-6 flex gap-6">
                    <span className="font-serif text-xl text-brand w-8 shrink-0">0{i + 1}</span>
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

      {/* 9. FAQ */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">Executive FAQ</span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Answers for decision-makers.</h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-dark/10 border-y border-dark/10">
                {faqs.map((f) => (
                  <li key={f.q} className="py-6">
                    <h3 className="font-serif text-xl">{f.q}</h3>
                    <p className="mt-3 text-dark/70 text-sm leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 10. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">Ready To Build A Compounding Marketing Engine?</span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Scale your <em className="text-brand not-italic">visibility</em>. Build lasting authority.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Whether you're building thought leadership, modernizing SEO for the AI era or scaling
            multi-channel content, our team will help you design a marketing system built for
            durable growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition">
              Build My Content Engine <span aria-hidden>→</span>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition">
              Schedule Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
