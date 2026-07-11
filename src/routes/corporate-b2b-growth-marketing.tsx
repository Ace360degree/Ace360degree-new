import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseRexello from "@/assets/case-rexello.jpg";
import caseCosmos from "@/assets/case-cosmos.jpg";

export const Route = createFileRoute("/corporate-b2b-growth-marketing")({
  component: CorporateB2BGrowthPage,
  head: () => ({
    meta: [
      {
        title:
          "Corporate & B2B Growth Marketing Services Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Corporate & B2B Growth Partner helping organizations build relationships, influence decision-makers, generate qualified opportunities and accelerate business growth through strategic B2B marketing.",
      },
      {
        property: "og:title",
        content: "Corporate & B2B Growth Marketing Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Build Relationships. Create Opportunities. Accelerate Growth. Strategic B2B marketing systems that attract decision-makers, nurture opportunities and support long-term business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/corporate-b2b-growth-marketing" },
    ],
    links: [{ rel: "canonical", href: "/corporate-b2b-growth-marketing" }],
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
    q: "Long Sales Cycles?",
    s: "Build structured nurture programs that support complex buying journeys — keeping prospects engaged, informed and moving forward at every stage.",
    tag: "Nurture",
  },
  {
    q: "Difficulty Reaching Decision-Makers?",
    s: "Create targeted outreach and visibility strategies that place your brand in front of the stakeholders who actually sign contracts and approve investments.",
    tag: "Access",
  },
  {
    q: "Need Better Lead Quality?",
    s: "Focus on qualified opportunities rather than lead volume — designing systems that attract prospects with genuine intent, authority and budget.",
    tag: "Quality",
  },
  {
    q: "Looking For Channel Partners Or Distributors?",
    s: "Develop acquisition programs that identify, engage and convert the right partners — supporting geographic and channel expansion with precision.",
    tag: "Expansion",
  },
  {
    q: "Struggling To Build Authority?",
    s: "Establish thought leadership within your industry — creating the kind of credibility that opens doors before the first conversation ever happens.",
    tag: "Authority",
  },
  {
    q: "Sales & Marketing Not Aligned?",
    s: "Create integrated growth systems that connect awareness to opportunity — so marketing generates what sales can actually close.",
    tag: "Alignment",
  },
];

const solutions = [
  {
    name: "B2B Demand Generation",
    outcome: "Qualified pipeline built through strategic campaigns that attract the right prospects and nurture them toward conversion.",
    services: [
      "Lead Generation Campaigns",
      "Multi-Channel Outreach",
      "Inbound Marketing",
      "Lead Qualification",
    ],
  },
  {
    name: "Account-Based Marketing (ABM)",
    outcome: "Precision-targeted programs that engage specific accounts and decision-makers with personalised, high-value communication.",
    services: [
      "Target Account Strategy",
      "Personalized Outreach",
      "Decision-Maker Engagement",
      "Enterprise Prospecting",
    ],
  },
  {
    name: "LinkedIn & Thought Leadership",
    outcome: "Executive visibility and industry authority that opens doors, builds trust and positions your brand as the voice others follow.",
    services: [
      "Executive Branding",
      "LinkedIn Campaigns",
      "Industry Content",
      "Authority Building",
    ],
  },
  {
    name: "Channel & Partner Acquisition",
    outcome: "Strategic programs that identify, recruit and activate the channel partners and distributors who accelerate market reach.",
    services: [
      "Dealer Recruitment",
      "Distributor Programs",
      "Partner Acquisition",
      "Channel Development",
    ],
  },
  {
    name: "Marketing Automation & Nurturing",
    outcome: "Automated systems that move prospects through the funnel with timely, relevant communication — without losing the human touch.",
    services: [
      "Lead Nurture Workflows",
      "CRM Integration",
      "Sales Enablement",
      "Lifecycle Marketing",
    ],
  },
  {
    name: "Corporate Positioning & Visibility",
    outcome: "Industry presence and executive visibility that strengthen reputation, attract partnerships and support enterprise growth.",
    services: [
      "Industry Authority Building",
      "Corporate Communication",
      "PR Support",
      "Executive Visibility",
    ],
  },
];

const framework = [
  { step: "Identify", body: "Map the market, define ideal accounts and understand the decision-making landscape within target organisations." },
  { step: "Engage", body: "Create targeted visibility and outreach strategies that place your brand in front of the right stakeholders at the right time." },
  { step: "Nurture", body: "Build structured nurture programs that educate, inform and guide prospects through complex buying journeys with patience and precision." },
  { step: "Influence", body: "Establish authority and credibility through thought leadership, social proof and strategic content that shapes perception before the pitch." },
  { step: "Convert", body: "Align sales and marketing to convert qualified opportunities into meaningful business relationships and long-term partnerships." },
];

const industries = [
  { name: "Manufacturing Companies", desc: "Reach engineers, procurement professionals and enterprise buyers with technical authority and trust." },
  { name: "Fintech Organizations", desc: "Build credibility with financial decision-makers, institutions and enterprise clients in regulated markets." },
  { name: "Technology Companies", desc: "Engage CIOs, CTOs and IT leaders with content that demonstrates expertise and solves real problems." },
  { name: "Professional Services Firms", desc: "Position partners and consultants as thought leaders who command premium fees and high-trust engagements." },
  { name: "Healthcare Organizations", desc: "Connect with administrators, clinicians and procurement teams through authoritative, compliance-aware communication." },
  { name: "Education Institutions", desc: "Engage parents, students, administrators and funding bodies with institutional credibility and outcome-driven messaging." },
  { name: "Industrial Brands", desc: "Communicate scale, capability and reliability to distributors, specifiers and large-volume buyers." },
  { name: "Enterprise Businesses", desc: "Support complex, multi-stakeholder sales with integrated marketing systems designed for enterprise cycles." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech with innovative payment and utility solutions struggling to reach enterprise decision-makers and financial institutions at scale through traditional sales approaches.",
    strategy:
      "Built an integrated B2B growth system combining account-based marketing, executive thought leadership on LinkedIn and targeted demand generation — creating multiple touchpoints with CIOs, CFOs and procurement heads.",
    outcome:
      "Increased qualified enterprise conversations, stronger partner recruitment pipeline and a measurable growth system that connects marketing investment to sales opportunity quality.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "An industrial manufacturer with strong domestic presence but limited visibility among architects, specifiers and international distributors who influence large-volume purchasing decisions.",
    strategy:
      "Developed a B2B positioning and channel acquisition program — combining industry authority content, distributor recruitment campaigns and technical marketing that speaks the language of engineers and procurement professionals.",
    outcome:
      "Expanded distributor network, stronger specification conversations and a brand presence that matches the company's engineering depth and manufacturing scale.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "A precision sealing solutions company competing in a crowded industrial market where technical differentiation was not translating into market visibility or partner interest.",
    strategy:
      "Created a corporate positioning and B2B outreach strategy that elevated technical expertise into industry authority — through targeted content, decision-maker engagement and partner acquisition programs.",
    outcome:
      "Improved partner enquiries, stronger positioning against international competitors and a marketing system that supports both direct sales and channel growth.",
  },
];

const whyUs = [
  {
    t: "B2B-Focused Expertise",
    b: "We understand complex buying journeys, multiple stakeholders and long sales cycles. Our strategies are built for how B2B decisions actually get made.",
  },
  {
    t: "Marketing + Technology Integration",
    b: "We combine strategic marketing with marketing automation, CRM integration and analytics — creating systems that scale without losing the human intelligence behind them.",
  },
  {
    t: "Decision-Maker Engagement Strategies",
    b: "We design programs specifically to reach and influence the people who sign contracts — not just generate impressions among audiences who cannot act.",
  },
  {
    t: "Enterprise Growth Thinking",
    b: "Every recommendation is calibrated for enterprise context — multi-stakeholder alignment, compliance awareness, brand reputation and long-term relationship value.",
  },
  {
    t: "Long-Term Relationship Building",
    b: "We design for lifetime value, not quick wins. Our nurture systems, content strategies and engagement programs are built to compound over quarters and years.",
  },
  {
    t: "Cross-Industry Experience",
    b: "Fintech, manufacturing, healthcare, education, technology and industrial — B2B strategies shaped to the dynamics of each sector and its decision-makers.",
  },
  {
    t: "No Vanity Metrics",
    b: "We do not celebrate impressions, clicks or traffic. We measure qualified conversations, pipeline quality, partner acquisitions and revenue-influenced outcomes.",
  },
  {
    t: "No Lead Quantity Obsession",
    b: "We do not chase lead volume. We pursue the right opportunities — the accounts, partners and decision-makers who actually move your business forward.",
  },
];

const faqs = [
  {
    q: "What is B2B marketing?",
    a: "B2B marketing is the strategic practice of promoting products and services to other businesses and organisations. It focuses on building relationships, establishing credibility and creating qualified opportunities through targeted engagement with decision-makers rather than mass consumer advertising.",
  },
  {
    q: "How is B2B different from B2C?",
    a: "B2B involves longer sales cycles, multiple decision-makers, higher transaction values and relationship-driven purchasing. B2C is typically faster, more emotional and aimed at individual consumers. B2B marketing requires patience, precision and content that educates and builds trust over time.",
  },
  {
    q: "What is Account-Based Marketing?",
    a: "Account-Based Marketing (ABM) is a targeted approach where marketing and sales collaborate to identify and engage specific high-value accounts with personalised strategies. Instead of broad campaigns, ABM creates tailored experiences for the organisations and decision-makers that matter most to your business.",
  },
  {
    q: "Can you help us acquire distributors and partners?",
    a: "Yes. We design channel and partner acquisition programs that identify, engage and recruit the right distributors, dealers and strategic partners — supporting geographic expansion and market reach with targeted outreach and compelling value propositions.",
  },
  {
    q: "Do you support LinkedIn growth strategies?",
    a: "Yes. LinkedIn is one of the most powerful B2B channels. We develop executive branding, thought leadership content, organic engagement strategies and targeted campaigns that place your brand and leadership in front of the professionals who matter.",
  },
  {
    q: "How do you measure success?",
    a: "We measure business outcomes — qualified conversations, pipeline quality, partner acquisitions, decision-maker engagement and revenue-influenced opportunities. We do not optimise for vanity metrics like impressions or traffic that do not translate into growth.",
  },
];

/* ---------- page ---------- */
function CorporateB2BGrowthPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Corporate & B2B Growth Marketing</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Corporate & B2B Growth Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              B2B marketing that connects businesses with{" "}
              <em className="text-brand not-italic">decision-makers.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              B2B growth is rarely driven by impulse. It is built through trust,
              visibility, credibility and consistent engagement with the right stakeholders.
              At Ace360degree, we help organizations create strategic marketing systems
              that attract decision-makers, nurture opportunities and support long-term
              business growth. Whether your goal is enterprise sales, channel expansion,
              distributor acquisition or partner development, we create programs designed
              around measurable business outcomes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Build My B2B Growth Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Executive Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "B2B Programs", v: "200+" },
                { k: "Focus", v: "Growth · Relationships · Opportunity" },
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
                alt="Corporate and B2B growth marketing partner for enterprise sales and channel expansion"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Build Relationships. Create Opportunities. Accelerate Growth.</p>
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
                The B2B marketing question is almost always a relationship question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                B2B growth does not come from campaigns. It comes from trust — built through
                consistent visibility, credible authority and strategic engagement with the
                people who shape purchasing decisions, partnership choices and investment outcomes.
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
                  Our B2B Growth Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Strategic solutions for complex B2B growth.
                </h2>
                <p className="mt-4 text-dark/70">
                  From demand generation to account-based marketing, partner acquisition
                  and thought leadership — we build the strategic infrastructure that turns
                  marketing into measurable business growth.
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
                Our B2B Growth Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to B2B growth.
              </h2>
              <p className="mt-4 text-dark/70">
                B2B relationships are not built in a single touch. Our five-stage framework
                designs every interaction to move prospects closer to partnership — with
                patience, precision and measurable progress.
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

      {/* 5. WHO WE HELP */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Who We Help
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Every industry has decision-makers. We help you reach them.
              </h2>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="bg-light border border-dark/5 p-6 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-serif text-xl">{ind.name}</h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed">{ind.desc}</p>
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
                Real B2B growth. Real relationships. Real outcomes.
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
                      alt={`${story.client} B2B growth case study`}
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
                View B2B Growth Case Studies <span aria-hidden>→</span>
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
                Why businesses choose Ace360degree for B2B growth.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not sell campaigns. We build strategic growth systems designed for the
                complexity, patience and precision that B2B success demands.
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
              Start Building B2B Growth
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Create opportunities that lead to growth.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Build strategic marketing systems that connect your business with the right
              people, strengthen relationships and support sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book B2B Growth Consultation <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Growth Assessment <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
