import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";

export const Route = createFileRoute("/podcast-strategy-production")({
  component: PodcastStrategyPage,
  head: () => ({
    meta: [
      {
        title:
          "Podcast Strategy & Production Services Mumbai | Business & Founder Podcasts | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Podcast Strategy & Thought Leadership Partner helping businesses, founders and industry experts build authority, create influence and strengthen relationships through meaningful podcast conversations and content ecosystems.",
      },
      {
        property: "og:title",
        content: "Podcast Strategy & Thought Leadership Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Turn Conversations Into Influence. Strategic podcast ecosystems that strengthen credibility, expand networks and position founders and brands as trusted voices within their industries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/podcast-strategy-production" },
    ],
    links: [{ rel: "canonical", href: "/podcast-strategy-production" }],
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
    q: "Founder Not Visible Enough?",
    s: "Build a platform that showcases expertise and perspectives — turning knowledge and experience into the kind of visibility that opens doors and accelerates trust.",
    tag: "Visibility",
  },
  {
    q: "Need Stronger Industry Authority?",
    s: "Create content that positions you as a trusted voice — the expert others reference, the perspective journalists seek and the leader peers follow.",
    tag: "Authority",
  },
  {
    q: "Difficult To Build Relationships With Decision-Makers?",
    s: "Use podcasting as a relationship-building and networking tool — creating meaningful conversations with industry leaders, partners and prospective clients.",
    tag: "Networking",
  },
  {
    q: "Creating Content Is Time Consuming?",
    s: "Repurpose conversations into multiple content formats — turning a single recording into LinkedIn posts, articles, videos, newsletters and social assets that work across channels.",
    tag: "Efficiency",
  },
  {
    q: "Need Better Personal Branding?",
    s: "Develop a consistent thought leadership platform that communicates who you are, what you believe and why your perspective matters — at scale and over time.",
    tag: "Branding",
  },
  {
    q: "Looking To Build A Community?",
    s: "Create ongoing engagement through meaningful conversations that attract listeners who share your interests, values and ambitions — building a community around your ideas.",
    tag: "Community",
  },
];

const solutions = [
  {
    name: "Podcast Strategy & Positioning",
    outcome: "A clearly defined podcast identity that attracts the right audience and supports business and personal brand goals.",
    services: [
      "Podcast Concept Development",
      "Audience Definition",
      "Format Selection",
      "Content Pillars",
      "Growth Roadmaps",
    ],
  },
  {
    name: "Podcast Production",
    outcome: "Professional podcast content delivered with quality and consistency that reflects your brand standards.",
    services: [
      "Recording Support",
      "Editing",
      "Audio Enhancement",
      "Video Podcast Production",
      "Publishing",
    ],
  },
  {
    name: "Guest Strategy & Outreach",
    outcome: "Strategic guest relationships that strengthen authority, expand networks and create content worth sharing.",
    services: [
      "Guest Identification",
      "Industry Experts",
      "Partner Outreach",
      "Relationship Development",
      "Interview Planning",
    ],
  },
  {
    name: "Founder & Executive Podcasts",
    outcome: "Executive branding that turns founders and leaders into recognised industry voices with growing influence.",
    services: [
      "Personal Branding Podcasts",
      "Thought Leadership Series",
      "Industry Commentary",
      "Executive Visibility Programs",
    ],
  },
  {
    name: "Podcast Marketing & Distribution",
    outcome: "Strategic distribution and audience development that ensures your podcast reaches the people who matter.",
    services: [
      "Platform Distribution",
      "Podcast SEO",
      "Audience Growth",
      "Promotion Strategy",
      "Community Building",
    ],
  },
  {
    name: "Content Repurposing",
    outcome: "Maximum return on every conversation — transforming recordings into multi-channel content that compounds value.",
    services: [
      "LinkedIn Content",
      "YouTube Clips",
      "Short-Form Videos",
      "Blog Articles",
      "Newsletter Content",
      "Social Assets",
    ],
  },
];

const framework = [
  { step: "Position", body: "Define the podcast concept, audience, format and content pillars that align with your authority goals and brand positioning." },
  { step: "Record", body: "Create high-quality recordings with professional support — from guest preparation and interview guidance to technical production." },
  { step: "Publish", body: "Distribute across platforms with optimised metadata, compelling show notes and strategic scheduling designed for discoverability." },
  { step: "Repurpose", body: "Transform every episode into multiple content formats — clips, articles, posts, newsletters and social assets that extend reach." },
  { step: "Grow", body: "Build audience, engagement and authority over time through consistent value, strategic promotion and community development." },
];

const valuePillars = [
  { t: "Authority", b: "Podcasts position hosts and brands as experts — creating the kind of credibility that opens partnerships, media coverage and speaking opportunities." },
  { t: "Trust", b: "Long-form conversation reveals expertise, character and perspective in ways no advertisement or brochure ever can — building genuine confidence." },
  { t: "Relationships", b: "Every episode is a conversation with a decision-maker, industry leader or potential partner — turning content creation into relationship building." },
  { t: "Networking", b: "Podcasts create reasons to connect with the people you most want to know — guest relationships that often extend far beyond the recording." },
  { t: "Influence", b: "Consistent, valuable content builds an audience that listens, shares and acts — creating influence that compounds with every episode." },
  { t: "Content Multiplication", b: "One conversation becomes dozens of assets — clips, articles, posts and newsletters that work across every channel your audience uses." },
];

const stories = [
  {
    client: "Founder Branding Initiative",
    challenge:
      "A technology founder with deep industry expertise but limited public visibility — struggling to build the personal authority needed to attract investors, partners and enterprise clients.",
    strategy:
      "Developed a founder podcast strategy combining industry interviews, technical commentary and leadership perspectives — creating a consistent platform that communicates expertise and builds trust at scale.",
    outcome:
      "Increased inbound partnership conversations, stronger investor awareness and a growing content library that supports personal brand building across LinkedIn, events and media opportunities.",
  },
  {
    client: "Industry Conversation Series",
    challenge:
      "A professional services firm seeking to differentiate in a crowded market where technical capability alone was not creating the visibility needed to win high-value engagements.",
    strategy:
      "Created an industry-focused podcast series featuring conversations with clients, sector experts and industry leaders — positioning the firm as a thoughtful voice at the centre of its market.",
    outcome:
      "Stronger enquiry quality from prospects who discovered the firm through content, improved client retention through ongoing value and a brand perception shift from service provider to industry authority.",
  },
  {
    client: "Business Networking Program",
    challenge:
      "A business community struggling to create meaningful connections between members — where traditional networking events were superficial and digital engagement was declining.",
    strategy:
      "Built a podcast-powered networking program where member conversations became content — creating natural relationship-building, shared visibility and ongoing community engagement.",
    outcome:
      "Deeper member relationships, increased community participation and a content engine that attracts new members while giving existing ones a platform to showcase their expertise.",
  },
];

const whyUs = [
  {
    t: "Thought Leadership Expertise",
    b: "We design podcast strategies around authority and influence — not downloads and vanity metrics. Every episode serves a strategic purpose.",
  },
  {
    t: "Founder Branding Focus",
    b: "We specialise in building founder and executive voices — the kind of personal platforms that accelerate trust, open doors and strengthen company reputation.",
  },
  {
    t: "Content Repurposing Systems",
    b: "We do not just record and publish. We transform every conversation into a multi-channel content ecosystem that maximises return on creative investment.",
  },
  {
    t: "Business Networking Perspective",
    b: "We see podcasts as relationship engines — creating opportunities to connect with decision-makers, industry leaders and partners through meaningful conversation.",
  },
  {
    t: "Marketing + Branding Integration",
    b: "Podcast content feeds every other marketing channel. We design systems where audio becomes social, articles, videos, newsletters and executive visibility.",
  },
  {
    t: "Long-Term Authority Building",
    b: "We design for compounding value. A podcast library that grows in authority over months and years — not campaigns that spike and fade.",
  },
  {
    t: "No Vanity Downloads",
    b: "We do not celebrate download numbers. We measure authority, relationship quality, inbound opportunities and the business outcomes podcasts create.",
  },
  {
    t: "No Content Without Purpose",
    b: "Every episode, every clip, every article serves a strategic objective. We do not create content for content's sake — only for influence.",
  },
];

const faqs = [
  {
    q: "Why should a business start a podcast?",
    a: "Podcasts build authority, strengthen relationships and create ongoing visibility with decision-makers. They position founders and brands as trusted voices, generate networking opportunities and produce reusable content that supports every marketing channel. In B2B contexts, podcasts often open doors that advertising cannot.",
  },
  {
    q: "How does podcasting support founder branding?",
    a: "Founder podcasts create a direct channel for expertise, perspective and personality — building the kind of personal authority that accelerates trust with investors, partners, clients and employees. They turn knowledge into influence and conversation into opportunity.",
  },
  {
    q: "Do you handle production and editing?",
    a: "Yes. Our production support covers recording guidance, editing, audio enhancement, video podcast production and publishing — all managed to professional standards that reflect your brand quality and executive positioning.",
  },
  {
    q: "Can you help source guests?",
    a: "Yes. We develop guest strategies that identify industry experts, potential partners, clients and thought leaders who strengthen your podcast's authority and expand your network. We also support outreach, relationship development and interview planning.",
  },
  {
    q: "How is podcast success measured?",
    a: "We measure strategic outcomes — authority growth, relationship development, inbound enquiries, content reach and business opportunities generated — not vanity metrics like downloads alone. Success is influence and impact, not numbers.",
  },
  {
    q: "Can podcast content be repurposed?",
    a: "Absolutely. Content repurposing is central to our podcast strategy. Every episode becomes LinkedIn posts, YouTube clips, short-form videos, articles, newsletters and social assets — multiplying the value of every conversation across channels.",
  },
];

/* ---------- page ---------- */
function PodcastStrategyPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Podcast Strategy & Production</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Podcast Strategy & Thought Leadership Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Podcasts that build authority, influence &{" "}
              <em className="text-brand not-italic">meaningful connections.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              The most powerful business opportunities often begin with conversations.
              At Ace360degree, we help founders, executives and brands create podcast
              ecosystems that strengthen credibility, expand networks and position them
              as trusted voices within their industries. Whether launching a new podcast
              or scaling an existing one, we combine strategy, production and distribution
              to maximize impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Launch My Podcast <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Podcast Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Programs Built", v: "50+" },
                { k: "Focus", v: "Authority · Influence · Relationships" },
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
                alt="Podcast strategy and thought leadership partner for founders, executives and brands"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Turn Conversations Into Influence.</p>
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
                The podcast question is almost always an authority question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Podcasting is not about recording audio. It is about creating strategic
                conversation platforms — ones that build credibility, expand networks
                and position founders and brands as the voices their industries listen to.
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
                  Our Podcast Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Strategic solutions for podcast authority.
                </h2>
                <p className="mt-4 text-dark/70">
                  From concept to distribution, guest strategy to content repurposing —
                  we provide the strategic infrastructure that turns podcasting into a
                  powerful platform for influence and growth.
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
                Our Podcast Growth Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to building podcast authority.
              </h2>
              <p className="mt-4 text-dark/70">
                Every successful podcast is built on strategic foundations. Our five-stage
                framework ensures every episode serves a purpose — and every conversation
                compounds into influence.
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

      {/* 5. WHY PODCASTS MATTER */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Podcasts Matter
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                The best podcasts don't just attract listeners. They create opportunities.
              </h2>
              <p className="mt-4 text-dark/70">
                Podcasts are one of the most intimate and trusted content formats available.
                They build authority, deepen relationships and create influence that other
                channels simply cannot match.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {valuePillars.map((p) => (
                <div
                  key={p.t}
                  className="bg-light p-8 hover:bg-brand/10 transition-colors"
                >
                  <h3 className="font-serif text-2xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{p.b}</p>
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
                How strategic podcasting creates business value.
              </h2>
            </div>

            <div className="mt-12 space-y-12">
              {stories.map((story) => (
                <div
                  key={story.client}
                  className="bg-canvas border border-dark/5 p-8 lg:p-10"
                >
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
              ))}
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
                Why businesses choose Ace360degree for podcast strategy.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not produce podcasts. We build podcast ecosystems — strategic platforms
                that create authority, relationships and influence for founders, executives
                and brands.
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
              Start Building Your Podcast
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Start conversations that create opportunities.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Build a podcast platform that strengthens authority, expands networks and
              supports long-term business growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Launch My Podcast <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Podcast Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
