import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseCosmos from "@/assets/case-cosmos.jpg";

export const Route = createFileRoute("/public-relations-reputation-management")({
  component: PublicRelationsPage,
  head: () => ({
    meta: [
      {
        title:
          "Public Relations & Reputation Management Services Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Reputation, Visibility & Influence Partner helping businesses, founders and brands build credibility, strengthen public perception and create long-term trust through strategic public relations and thought leadership.",
      },
      {
        property: "og:title",
        content: "Public Relations & Reputation Management Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Shape Perception. Build Credibility. Influence Markets. Strategic PR, reputation management and thought leadership that strengthen trust, visibility and long-term authority.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/public-relations-reputation-management" },
    ],
    links: [{ rel: "canonical", href: "/public-relations-reputation-management" }],
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
    q: "Low Brand Visibility?",
    s: "Increase awareness through strategic media and industry exposure — placing your brand in the publications, conversations and channels where decision-makers already pay attention.",
    tag: "Visibility",
  },
  {
    q: "Struggling To Build Trust?",
    s: "Strengthen credibility through third-party validation and thought leadership — creating the kind of confidence that no advertisement or self-claim can match.",
    tag: "Trust",
  },
  {
    q: "Negative Search Results?",
    s: "Improve online reputation and brand perception — managing what people find when they search, and ensuring your digital presence reflects the quality of your business.",
    tag: "Reputation",
  },
  {
    q: "Founder Not Visible Enough?",
    s: "Build executive visibility and personal authority — turning founders and leaders into recognised industry voices that attract media coverage, partnerships and opportunity.",
    tag: "Authority",
  },
  {
    q: "Launching A New Product Or Initiative?",
    s: "Create visibility and momentum through strategic communication — building awareness, shaping perception and generating the kind of interest that supports successful launches.",
    tag: "Momentum",
  },
  {
    q: "Need Crisis Communication Support?",
    s: "Protect reputation through structured response planning — ensuring that when challenges arise, your communication is calm, clear and confidence-building.",
    tag: "Protection",
  },
];

const solutions = [
  {
    name: "Media Relations & PR",
    outcome: "Strategic media presence that places your brand in the right publications, conversations and channels to reach decision-makers.",
    services: [
      "Media Outreach",
      "Press Releases",
      "Story Development",
      "Media Placements",
      "Industry Publications",
    ],
  },
  {
    name: "Online Reputation Management",
    outcome: "A managed digital reputation that reflects brand quality, responds to feedback and protects perception across search and social.",
    services: [
      "Review Monitoring",
      "Brand Mentions",
      "Sentiment Analysis",
      "Reputation Recovery",
      "Search Reputation Management",
    ],
  },
  {
    name: "Founder & Executive Visibility",
    outcome: "Executive branding that turns founders and leaders into recognised, authoritative voices within their industries.",
    services: [
      "Executive Branding",
      "Media Interviews",
      "Thought Leadership Articles",
      "Industry Commentary",
      "Leadership Positioning",
    ],
  },
  {
    name: "Thought Leadership Programs",
    outcome: "Industry authority built through expert content, opinion and insight that shapes perception and opens doors.",
    services: [
      "Industry Articles",
      "Expert Opinions",
      "Opinion Pieces",
      "Authority Building",
      "Content Distribution",
    ],
  },
  {
    name: "Crisis Communication",
    outcome: "Reputation protection through structured response planning, stakeholder communication and calm, confident messaging.",
    services: [
      "Reputation Protection",
      "Response Planning",
      "Communication Frameworks",
      "Issue Management",
      "Stakeholder Communication",
    ],
  },
  {
    name: "Digital PR & Search Visibility",
    outcome: "Enhanced digital authority through strategic publications, mentions and search-optimised reputation building.",
    services: [
      "Digital Publications",
      "Backlink Acquisition",
      "Brand Mentions",
      "Search Reputation Optimization",
      "Authority Building",
    ],
  },
];

const framework = [
  { step: "Monitor", body: "Track brand mentions, sentiment, search results and media coverage — understanding how your business is perceived before shaping it." },
  { step: "Manage", body: "Actively manage reputation through response, content and strategic communication that addresses perception and builds confidence." },
  { step: "Amplify", body: "Increase visibility through media placements, thought leadership and digital authority — ensuring your story reaches the right audiences." },
  { step: "Influence", body: "Shape industry conversations and public perception through expert commentary, opinion leadership and strategic narrative development." },
  { step: "Lead", body: "Build long-term credibility and trust that positions your brand and leadership as the reference point your industry turns to." },
];

const valuePillars = [
  { t: "Trust", b: "Reputation is the foundation of trust. A well-managed public presence creates the confidence that drives customer decisions, partnerships and investment." },
  { t: "Credibility", b: "Third-party validation — media coverage, expert commentary, industry recognition — builds credibility that self-promotion never can." },
  { t: "Authority", b: "Thought leadership positions your brand as the expert others reference, the voice journalists seek and the leader peers follow." },
  { t: "Visibility", b: "Strategic PR places your brand in the channels, publications and conversations where your audience already pays attention." },
  { t: "Influence", b: "A strong reputation gives your opinions weight, your announcements impact and your perspective the power to shape industry direction." },
  { t: "Business Growth", b: "Every business outcome — sales, partnerships, talent, investment — is easier when your reputation precedes you and works in your favour." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech in a crowded market where trust is the deciding factor — needing to build credibility with partners, regulators and enterprise clients who had not yet experienced the brand firsthand.",
    strategy:
      "Developed an integrated reputation and visibility strategy combining founder thought leadership, industry commentary, media placements and strategic digital PR — building third-party validation at every stage of growth.",
    outcome:
      "Stronger partner confidence, improved investor perception and a brand reputation that matches the quality of the product — supporting business development across every channel.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand competing against established institutions where parental trust and institutional credibility were the primary decision factors — and where the brand needed to build reputation from the ground up.",
    strategy:
      "Created a comprehensive PR and reputation strategy combining media coverage, educator thought leadership, success story development and review management — building trust with parents, students and the community.",
    outcome:
      "Improved brand perception in the market, stronger admissions confidence and a reputation foundation that supports long-term institutional growth and recognition.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "An industrial manufacturer with strong technical capability but limited industry visibility — struggling to differentiate from international competitors and build the brand recognition needed to win large-volume contracts.",
    strategy:
      "Developed a reputation-building program combining industry publication presence, technical thought leadership, executive visibility and digital authority — positioning the brand as a quality leader in precision sealing.",
    outcome:
      "Increased industry recognition, stronger specification conversations and a brand perception that supports premium positioning against both domestic and international competitors.",
  },
];

const whyUs = [
  {
    t: "Strategic Communication Expertise",
    b: "We design PR and reputation strategies around business outcomes — not media clips. Every placement, article and narrative serves a strategic purpose.",
  },
  {
    t: "Founder Branding Capability",
    b: "We specialise in building founder and executive visibility — the kind of personal authority that opens media doors, attracts partnerships and strengthens company reputation.",
  },
  {
    t: "Digital + Traditional PR Approach",
    b: "We combine media relations, thought leadership, digital publications and search reputation — creating a holistic presence that works across every channel your audience uses.",
  },
  {
    t: "Industry-Specific Positioning",
    b: "Fintech, education, manufacturing, healthcare, technology and B2B — reputation strategies shaped to the media landscape, decision-makers and dynamics of each sector.",
  },
  {
    t: "Reputation Monitoring Systems",
    b: "We track mentions, sentiment, search results and coverage — giving you visibility into perception and the intelligence to respond with precision.",
  },
  {
    t: "Long-Term Credibility Building",
    b: "We design for sustained authority, not short-term spikes. Reputation strategies that compound in value and strengthen over months and years.",
  },
  {
    t: "No PR Stunts",
    b: "We do not create noise for attention. We build credibility through substance — expert insight, genuine stories and strategic communication that earns respect.",
  },
  {
    t: "No Short-Term Attention Seeking",
    b: "We do not chase viral moments or fleeting headlines. We build the kind of reputation that opens doors, closes deals and sustains growth over time.",
  },
];

const faqs = [
  {
    q: "What is Public Relations?",
    a: "Public Relations is the strategic practice of managing communication between an organisation and its audiences — including media, customers, investors, partners, employees and the public. It focuses on building credibility, shaping perception and creating trust through earned media, thought leadership and strategic messaging.",
  },
  {
    q: "How is PR different from advertising?",
    a: "Advertising is paid placement where you control the message. PR is earned credibility — third-party validation through media coverage, expert commentary and industry recognition. PR builds trust because someone else is saying it, not because you paid for the space.",
  },
  {
    q: "What is Online Reputation Management?",
    a: "Online Reputation Management (ORM) is the practice of monitoring, managing and improving how your brand is perceived across digital channels — search results, reviews, social media mentions and online publications. It ensures that when people look for you, they find credibility and confidence.",
  },
  {
    q: "Can you help founders build visibility?",
    a: "Yes. Founder and executive visibility is a core part of our practice. We build personal authority through media interviews, thought leadership articles, industry commentary and strategic positioning — creating the kind of recognition that opens doors and accelerates trust.",
  },
  {
    q: "Do you manage crisis communication?",
    a: "Yes. We develop crisis communication frameworks, response plans and stakeholder messaging strategies that protect reputation when challenges arise. Our approach is calm, structured and designed to build confidence — not create more noise.",
  },
  {
    q: "How is PR success measured?",
    a: "We measure strategic outcomes — brand credibility, media quality, sentiment improvement, search reputation, stakeholder confidence and business opportunities generated — not vanity metrics like clip counts or impressions. Success is influence and trust, not volume.",
  },
];

/* ---------- page ---------- */
function PublicRelationsPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Public Relations & Reputation Management</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Reputation, Visibility & Influence Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Public relations that build trust, visibility &{" "}
              <em className="text-brand not-italic">influence.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              In today's digital world, perception influences decisions. Customers,
              investors, partners and prospective employees often form opinions long
              before the first conversation. At Ace360degree, we help businesses shape
              public perception, strengthen credibility and build long-term trust through
              strategic public relations, reputation management and thought leadership.
              Whether launching a brand, managing growth or protecting reputation, we help
              organizations tell the right story to the right audience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Request PR Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Reputation Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "PR Programs", v: "150+" },
                { k: "Focus", v: "Trust · Visibility · Influence" },
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
                alt="Public relations and reputation management partner for building credibility and trust"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Shape Perception. Build Credibility. Influence Markets.</p>
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
                The PR question is almost always a trust question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Public relations is not about press releases. It is about building
                credibility — shaping how your business is perceived, strengthening the
                trust that drives decisions and creating the kind of reputation that
                opens doors before the first conversation.
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
                  Our PR & Reputation Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Strategic solutions for reputation and influence.
                </h2>
                <p className="mt-4 text-dark/70">
                  From media relations and thought leadership to crisis communication
                  and digital reputation — we build the strategic infrastructure that
                  turns perception into a competitive advantage.
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
                Our Reputation Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to building reputation.
              </h2>
              <p className="mt-4 text-dark/70">
                Reputation is not built overnight. Our five-stage framework creates
                the monitoring, management and amplification systems that turn perception
                into a strategic asset.
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

      {/* 5. WHY REPUTATION MATTERS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Reputation Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Reputation is not built overnight. But it can influence every business decision.
              </h2>
              <p className="mt-4 text-dark/70">
                In a world where every search, review and mention shapes perception,
                reputation is one of the most valuable — and most fragile — assets
                a business can hold.
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
                Real brands. Real reputation. Real influence.
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
                      alt={`${story.client} PR and reputation management case study`}
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
                View Reputation Case Studies <span aria-hidden>→</span>
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
                Why businesses choose Ace360degree for PR & reputation management.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not distribute press releases. We build reputation — strategic
                credibility and influence that strengthens trust, opens doors and protects
                your brand over the long term.
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
              Start Building Your Reputation
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Build a reputation that opens doors.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Create trust, strengthen visibility and position your business as a
              credible leader within your industry.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Request PR Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Reputation Consultation <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
