import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroMesh from "@/assets/hero-mesh.1.jpg";
import caseMos from "@/assets/case-mos.2.jpg";
import caseCosmos from "@/assets/case-cosmos.4.jpg";
import caseRexello from "@/assets/case-rexello.7.jpg";
import caseAmigo from "@/assets/case-amigo.5.jpg";

export const Route = createFileRoute("/marketing-communication")({
  component: MarketingCommunicationPage,
  head: () => ({
    meta: [
      {
        title:
          "Specialized Marketing & Communication Services — Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a strategic communication and influence partner helping businesses build authority, strengthen relationships, shape perception and improve stakeholder engagement through corporate marketing, PR, video, employer branding and community marketing.",
      },
      {
        property: "og:title",
        content: "Influence Markets. Build Authority. Drive Engagement.",
      },
      {
        property: "og:description",
        content:
          "Strategic communication and influence programs that help businesses shape perception, build authority and deepen stakeholder relationships — not just run campaigns.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/marketing-communication" },
    ],
    links: [{ rel: "canonical", href: "/marketing-communication" }],
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
    q: "Struggling To Build Industry Authority?",
    s: "Being unknown is a strategic liability. We design authority-building programs that position your business as the voice buyers and stakeholders trust — before the conversation even starts.",
    tag: "Authority Building",
  },
  {
    q: "Need Better Corporate Visibility?",
    s: "Your expertise deserves an audience. We create visibility systems — content, PR and digital presence — that put your business in front of the people who matter to your growth.",
    tag: "Corporate Visibility",
  },
  {
    q: "Launching A Product Or Initiative?",
    s: "Launch noise is cheap. Launch impact is rare. We design go-to-market communication that creates anticipation, earns coverage and converts attention into adoption.",
    tag: "Launch Communication",
  },
  {
    q: "Need Stronger Customer Engagement?",
    s: "Attention is finite and trust is earned. We build community, content and conversation systems that turn passive audiences into active advocates and repeat customers.",
    tag: "Engagement",
  },
  {
    q: "Looking To Improve Brand Reputation?",
    s: "Reputation is built in public. We design perception-shaping communication — PR, thought leadership and stakeholder messaging — that protects and elevates how your brand is understood.",
    tag: "Reputation Management",
  },
  {
    q: "Need Better Talent Attraction?",
    s: "The best people choose employers they believe in. We build employer brand and recruitment marketing that communicate culture, purpose and growth — so you attract talent that fits.",
    tag: "Talent Attraction",
  },
];

const solutions = [
  {
    name: "Corporate & B2B Marketing",
    outcome: "Professional presence that earns trust and opens doors.",
    detail:
      "LinkedIn authority programs, executive content, sales-enablement collateral and account-based visibility designed for decision-makers in complex B2B buying journeys.",
  },
  {
    name: "YouTube & Video Marketing",
    outcome: "Authority and reach through long-form visual storytelling.",
    detail:
      "Strategic video content — explainers, thought leadership, product storytelling and culture films — that builds trust at scale and ranks where your audience searches.",
  },
  {
    name: "Employer Branding & Recruitment Marketing",
    outcome: "A company the right people want to join — and stay with.",
    detail:
      "EVP messaging, culture content, careers-page design and recruitment campaigns that communicate purpose and attract talent aligned to your values.",
  },
  {
    name: "Event Marketing & Brand Activations",
    outcome: "Moments that create memory, momentum and media coverage.",
    detail:
      "Launch events, trade presence, experiential activations and virtual programs designed to generate buzz, build relationships and convert attendance into business outcomes.",
  },
  {
    name: "Public Relations & Reputation Management",
    outcome: "Perception shaped by design, not left to chance.",
    detail:
      "Media relations, crisis communication planning, stakeholder messaging and narrative development that protect reputation and build credibility with press, investors and regulators.",
  },
  {
    name: "Influencer & Community Marketing",
    outcome: "Trust transferred at scale through the voices your audience already follows.",
    detail:
      "Strategic influencer partnerships, ambassador programs and community-building initiatives that extend your reach through authentic advocacy and peer recommendation.",
  },
  {
    name: "Corporate Communication",
    outcome: "Clear, consistent messaging that aligns stakeholders and builds confidence.",
    detail:
      "Internal communication systems, investor relations content, annual reports, leadership messaging and change communication that keeps teams, boards and markets aligned.",
  },
];

const framework = [
  {
    step: "Understand",
    body: "Audit your audiences, perception gaps, competitive narrative and current communication channels to find the real influence opportunity.",
  },
  {
    step: "Strategize",
    body: "Define messaging architecture, channel strategy and content pillars that align communication to business goals — not vanity metrics.",
  },
  {
    step: "Create",
    body: "Produce content, campaigns and touchpoints — from thought leadership to video to PR — that express strategy with precision and credibility.",
  },
  {
    step: "Amplify",
    body: "Distribute through owned, earned and shared channels — media, partnerships, platforms and communities — to reach the right people at scale.",
  },
  {
    step: "Measure",
    body: "Track sentiment, engagement, authority signals and business outcomes to continuously refine what you say, where you say it and who hears it.",
  },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "Limited brand authority in a crowded fintech category where trust determines customer choice and regulatory credibility matters.",
    solution:
      "Corporate communication strategy, executive thought leadership program, media relations and video content that positioned MOS as a trusted voice in financial services.",
    outcome:
      "Stronger industry recognition, improved stakeholder confidence and increased inbound partnership conversations from enterprise clients.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "High competition in education marketing with low differentiation and weak community engagement beyond paid acquisition.",
    solution:
      "Community-driven content strategy, YouTube education channel, influencer partnerships with education creators and student success storytelling program.",
    outcome:
      "Engaged learner community, organic enrolment growth and reduced dependency on paid advertising for student acquisition.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "Technical B2B business with strong product capability but limited market visibility and no systematic corporate communication.",
    solution:
      "Corporate marketing program including industry content, trade PR, technical video explainers and sales-enablement materials for distributor and OEM audiences.",
    outcome:
      "Increased market visibility in target sectors, stronger distributor relationships and inbound enquiries from procurement teams.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "Heritage industrial brand with strong product reputation but limited digital authority and weak employer brand in competitive manufacturing talent markets.",
    solution:
      "Corporate communication refresh, employer branding campaign, culture video content and LinkedIn B2B presence to strengthen reputation with buyers and talent alike.",
    outcome:
      "Improved employer brand perception, stronger digital corporate presence and clearer differentiation in global industrial markets.",
  },
];

const whyUs = [
  {
    t: "Business-First Communication",
    b: "Every message, campaign and channel choice is anchored to a business outcome — authority, trust, talent or revenue — not vanity engagement.",
  },
  {
    t: "Cross-Channel Integration",
    b: "PR, content, video, social and events work as one system — not siloed campaigns that compete for attention and budget.",
  },
  {
    t: "Influence Through Credibility",
    b: "We build authority through substance — expert content, stakeholder alignment and strategic narrative — not promotional noise.",
  },
  {
    t: "Industry Context",
    b: "From manufacturing and healthcare to fintech and education — we bring sector intelligence to every communication strategy we design.",
  },
  {
    t: "Long-Term Partnerships",
    b: "Communication is relationship. Most of our clients work with us for years because trust and authority compound over time.",
  },
];

const industries = [
  {
    name: "Healthcare & Life Sciences",
    context:
      "Trust-building communication, patient engagement and stakeholder messaging for hospitals, device makers, pharma and wellness brands navigating compliance and credibility.",
  },
  {
    name: "Education & EdTech",
    context:
      "Recruitment marketing, community content, parent engagement and institutional reputation programs for schools, universities and learning platforms.",
  },
  {
    name: "Manufacturing & Industrial",
    context:
      "B2B corporate communication, trade PR, employer branding and technical content for engineering-led businesses selling to procurement and OEM buyers.",
  },
  {
    name: "Fintech & Financial Services",
    context:
      "Credibility-driven PR, regulatory communication, investor relations and trust-building content for payments, lending, insurance and wealth platforms.",
  },
  {
    name: "Real Estate & Development",
    context:
      "Project launch communication, investor relations, sales-enablement content and corporate reputation management for developers and property firms.",
  },
  {
    name: "Hospitality & Travel",
    context:
      "Experience storytelling, review management, influencer partnerships and destination content for hotels, resorts, airlines and experience brands.",
  },
  {
    name: "Professional Services",
    context:
      "Thought leadership, LinkedIn authority, pitch communication and employer branding for consulting, legal, audit and advisory firms selling expertise.",
  },
  {
    name: "SaaS & Technology",
    context:
      "Product storytelling, founder-led content, community building and launch communication for B2B and B2C technology companies.",
  },
  {
    name: "E-Commerce & D2C",
    context:
      "Community marketing, influencer strategy, launch campaigns and brand storytelling for consumer brands selling direct to customers.",
  },
];

/* ---------- page ---------- */
function MarketingCommunicationPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">
              Home
            </a>
            <span className="mx-1">/</span>
            <span className="text-dark">Marketing &amp; Communication</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Strategic Communication Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Influence markets. Build <em className="text-brand not-italic">authority.</em>{" "}
              Drive engagement.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              We help businesses solve influence, perception and communication challenges — through
              strategic marketing, PR, video, employer branding and community programs that build
              authority, strengthen relationships and shape how your brand is understood.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book Communication Discovery Call <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Influence Audit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Campaigns Run", v: "500+" },
                { k: "Retention", v: "5+ yrs" },
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
                src={heroMesh}
                alt="Strategic communication and influence planning"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Credibility first. Influence second. Impact always.</p>
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
                Communication Challenges We Help Solve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Start with the influence gap. The channels follow.
              </h2>
              <p className="mt-4 text-dark/70">
                Most communication fails because it starts with tactics, not perception. We begin by
                diagnosing what's weakening your authority — and design the program around that insight.
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
                  Specialized Marketing &amp; Communication Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A connected influence system — engineered for authority and engagement.
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
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{s.detail}</p>
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
                The Ace360degree Communication Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                How we build influence — systematically.
              </h2>
              <p className="mt-4 text-canvas/70">
                A five-stage model that turns communication from promotional activity into a
                strategic business function that shapes perception and deepens relationships.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
              {framework.map((f, i) => (
                <div key={f.step} className="bg-dark p-7 relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl">{f.step}</h3>
                  <p className="mt-4 text-sm text-canvas/70 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 5. STORIES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                  Communication Success Stories
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Real businesses. Real influence challenges. Real outcomes.
                </h2>
              </div>
              <Link to="/portfolio" className="text-sm font-semibold hover:text-brand">
                View all success stories →
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {stories.map((s) => (
                <article key={s.client} className="bg-canvas border border-dark/10 overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={s.img} alt={s.client} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-7">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-brand font-semibold">
                      {s.client}
                    </p>
                    <dl className="mt-5 space-y-4 text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.2em] text-dark/50">Challenge</dt>
                        <dd className="mt-1 text-dark/80">{s.challenge}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.2em] text-dark/50">Solution</dt>
                        <dd className="mt-1 text-dark/80">{s.solution}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.2em] text-dark/50">Outcome</dt>
                        <dd className="mt-1 font-serif text-lg text-dark">{s.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Businesses Choose Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A communication partner — not a marketing vendor.
              </h2>
              <p className="mt-5 text-dark/70">
                Since 2009, we've helped businesses across industries build authority, strengthen
                stakeholder relationships and shape market perception — through strategic communication
                and long-term partnership.
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

      {/* 7. INDUSTRIES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Industries We Help Influence
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Sector-aware communication, across categories.
              </h2>
              <p className="mt-4 text-dark/70">
                We bring industry context to every engagement — stakeholder dynamics, regulatory
                realities and buyer psychology shape how we design communication that resonates and
                builds authority.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind) => (
                <article
                  key={ind.name}
                  className="group border border-dark/10 bg-canvas p-7 hover:border-dark transition-colors"
                >
                  <h3 className="font-serif text-2xl">{ind.name}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{ind.context}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Let's Build Influence That Lasts
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Ready to strengthen <em className="text-brand not-italic">your influence?</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Tell us where your communication stands today. We'll diagnose the authority gaps and show you
            what a strategic communication partnership with Ace360degree could unlock.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Communication Discovery Call <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Influence Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
