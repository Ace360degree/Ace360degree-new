import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-brandingy5.jpg";
import caseMos from "@/assets/case-mosy7.jpg";
import caseRexello from "@/assets/case-rexelloy7.jpg";
import caseAmigo from "@/assets/case-amigoy7.jpg";

export const Route = createFileRoute("/corporate-communication-design")({
  component: CorporateCommunicationPage,
  head: () => ({
    meta: [
      {
        title:
          "Company Profile & Corporate Communication Design Mumbai | Business Presentations | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Corporate Communication Design Partner helping businesses communicate professionally, present effectively and strengthen stakeholder confidence through strategic communication assets.",
      },
      {
        property: "og:title",
        content: "Corporate Communication Design Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Communicate Clearly. Present Professionally. Influence Effectively. Corporate communication assets that build credibility and drive business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/corporate-communication-design" },
    ],
    links: [{ rel: "canonical", href: "/corporate-communication-design" }],
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
    q: "Company Materials Look Outdated?",
    s: "Modernize communication assets and improve perception — so every document reflects the current calibre of your business.",
    tag: "Modernization",
  },
  {
    q: "Sales Teams Struggling To Present Effectively?",
    s: "Create persuasive presentations and sales tools that equip teams to communicate value with clarity and confidence.",
    tag: "Sales Enablement",
  },
  {
    q: "Need Stronger Corporate Credibility?",
    s: "Develop communication assets that inspire confidence among clients, partners, investors and stakeholders.",
    tag: "Credibility",
  },
  {
    q: "Investor Presentations Not Making Impact?",
    s: "Build decks that communicate business value clearly — turning complex propositions into compelling investment stories.",
    tag: "Investor Confidence",
  },
  {
    q: "Brand Communication Inconsistent?",
    s: "Align every document, presentation and publication with your brand identity for a unified, professional impression.",
    tag: "Consistency",
  },
  {
    q: "Expanding Into New Markets?",
    s: "Create professional materials that support growth — making the right impression in new geographies and sectors.",
    tag: "Market Expansion",
  },
];

const solutions = [
  {
    name: "Company Profiles & Corporate Brochures",
    outcome: "Create authoritative documents that tell your business story with clarity and confidence.",
    services: [
      "Corporate Profiles",
      "Company Brochures",
      "Capability Statements",
      "Brand Story Documents",
      "Executive Summaries",
    ],
  },
  {
    name: "Sales Presentations & Pitch Decks",
    outcome: "Equip your team to present persuasively and close with confidence.",
    services: [
      "Sales Decks",
      "Business Presentations",
      "Investor Decks",
      "Proposal Presentations",
      "Pitch Narratives",
    ],
  },
  {
    name: "Product Catalogues & Marketing Materials",
    outcome: "Showcase offerings with structure, clarity and visual authority.",
    services: [
      "Product Catalogues",
      "Service Brochures",
      "Marketing Collaterals",
      "Trade Show Materials",
      "Specification Sheets",
    ],
  },
  {
    name: "Reports & Corporate Publications",
    outcome: "Transform data and achievements into compelling, readable publications.",
    services: [
      "Annual Reports",
      "Business Reports",
      "Impact Reports",
      "Corporate Publications",
      "Performance Reviews",
    ],
  },
  {
    name: "Corporate Stationery Systems",
    outcome: "Ensure every written touchpoint reinforces professionalism and brand consistency.",
    services: [
      "Business Cards",
      "Letterheads",
      "Email Signatures",
      "Corporate Templates",
      "Document Formats",
    ],
  },
  {
    name: "Digital Communication Assets",
    outcome: "Create interactive, shareable assets that extend your reach across digital channels.",
    services: [
      "Interactive PDFs",
      "Digital Brochures",
      "Presentation Templates",
      "Downloadable Resources",
      "Web-Ready Assets",
    ],
  },
];

const framework = [
  { step: "Understand", body: "Learn your business, audience and communication objectives before designing a single page." },
  { step: "Structure", body: "Organise information for clarity, persuasion and logical flow — content architecture first." },
  { step: "Design", body: "Create communication assets aligned with brand identity and engineered for impact." },
  { step: "Refine", body: "Optimise messaging, visuals and usability for the intended audience and medium." },
  { step: "Deploy", body: "Deliver production-ready files, templates and guidelines for consistent future use." },
];

const valuePillars = [
  { t: "Trust", b: "Polished, professional communication assets signal competence and reduce scepticism." },
  { t: "Professionalism", b: "Every document, deck and brochure reinforces the calibre of your organisation." },
  { t: "Consistency", b: "Unified communication standards ensure your brand looks and sounds the same everywhere." },
  { t: "Clarity", b: "Structured information design helps audiences understand, remember and act on your message." },
  { t: "Influence", b: "Strategic communication assets shape decisions — from investor meetings to sales conversations." },
  { t: "Business Development", b: "Strong collateral accelerates pipelines by making the right impression at every stage." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A fast-growing utility brand with strong operational performance but corporate communication that failed to reflect its scale, professionalism or market ambition.",
    strategy:
      "Developed a comprehensive company profile, capability brochure and sales presentation system aligned with the brand's premium positioning and growth narrative.",
    outcome:
      "Sharper corporate presence, stronger first impressions with institutional partners and a communication toolkit that supports scalable business development.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "A legacy industrial manufacturer with deep credibility but dated company materials that did not communicate engineering excellence or international relevance.",
    strategy:
      "Redesigned the company profile, created product specification sheets and built a professional investor presentation that aligned with the modernised brand identity.",
    outcome:
      "A corporate communication suite that matches the business — improved partner confidence, stronger trade show presence and clearer value communication.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand with a warm identity but inconsistent communication materials that weakened parent confidence and failed to support franchise expansion.",
    strategy:
      "Created a unified corporate profile, parent communication kit and franchise presentation system with consistent visual language and clear value messaging.",
    outcome:
      "Professional, trustworthy communication across all channels — stronger parent engagement, clearer franchise proposition and faster expansion support.",
  },
];

const whyUs = [
  {
    t: "Strategy-Led Communication",
    b: "Every asset is designed around a business objective — not just a layout brief. We start with what you need to communicate and why.",
  },
  {
    t: "Brand-Aligned Design",
    b: "All communication assets are built within your brand identity system — consistent in colour, typography, tone and visual language.",
  },
  {
    t: "Business Development Perspective",
    b: "We understand how communication assets support sales cycles, investor conversations and partnership building — and we design accordingly.",
  },
  {
    t: "Cross-Industry Experience",
    b: "From manufacturing and B2B to education and professional services — we know how corporate communication needs vary by sector and audience.",
  },
  {
    t: "Executive-Level Presentation Thinking",
    b: "We design for boardrooms, investor meetings and C-suite conversations — where clarity, credibility and polish matter most.",
  },
  {
    t: "Creative + Content Expertise",
    b: "We bring together strategic writing, information design and visual craft — so your assets are strong in both substance and presentation.",
  },
  {
    t: "No Generic Templates",
    b: "Every document is custom-built for your brand and objectives. No reused layouts, no off-the-shelf designs, no shortcuts.",
  },
  {
    t: "No Design Without Purpose",
    b: "We do not decorate. Every visual choice serves a communication goal — clarity, credibility, persuasion or action.",
  },
];

const faqs = [
  {
    q: "What is corporate communication design?",
    a: "Corporate communication design is the strategic creation of business documents, presentations, publications and digital assets that communicate your organisation's value, credibility and professionalism. It goes beyond graphic design to ensure every asset serves a business objective and reinforces brand perception.",
  },
  {
    q: "How is it different from graphic design?",
    a: "Graphic design focuses on visual aesthetics. Corporate communication design focuses on business outcomes — structuring information for clarity, aligning messaging with strategy and creating assets that influence decisions. The visual layer serves the communication goal, not the other way around.",
  },
  {
    q: "Do you create company profiles?",
    a: "Yes. We design corporate profiles, capability statements and brand story documents that present your business with authority and clarity — tailored for investor meetings, partnership conversations and sales enablement.",
  },
  {
    q: "Can you develop investor presentations?",
    a: "Yes. We build investor decks, pitch presentations and funding proposals that structure your business story, financial narrative and market opportunity into a compelling, professional format.",
  },
  {
    q: "Do you provide editable templates?",
    a: "Yes. We deliver presentation templates, document formats and design systems that your internal teams can use to maintain consistency without starting from scratch every time.",
  },
  {
    q: "Can you manage content creation too?",
    a: "Yes. We offer end-to-end support including content strategy, copywriting, information architecture and visual design — so your communication assets are strong in both message and presentation.",
  },
];

/* ---------- page ---------- */
function CorporateCommunicationPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Corporate Communication Design</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Corporate Communication Design Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Corporate communication assets that build{" "}
              <em className="text-brand not-italic">confidence.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Every presentation, proposal, brochure and company profile shapes how
              your business is perceived. At Ace360degree, we help organisations create
              communication assets that strengthen credibility, improve clarity and
              support business development — from company profiles and sales presentations
              to annual reports and investor decks.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Create My Communication Kit <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Communication Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Assets Created", v: "500+" },
                { k: "Focus", v: "Credibility · Clarity · Influence" },
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
                alt="Corporate communication design, presentations and business profiles"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Every communication shapes perception. Every perception influences decisions.</p>
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
                The communication question is almost always a business question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Corporate communication design is not about making documents look nice.
                It is about shaping perception, building credibility and influencing
                decisions — consistently and at scale.
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
                  Our Corporate Communication Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete corporate communication practice — built around business outcomes.
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
                The Ace360degree Communication Design Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Understand. Structure. Design. Refine. Deploy.
              </h2>
              <p className="mt-5 text-canvas/70">
                Strategy first. Communication effectiveness second. A disciplined
                process for building assets that inform, persuade and build confidence.
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
                Communication Impact
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Corporate communication is a business investment — not a creative indulgence.
              </h2>
              <p className="mt-4 text-dark/70">
                The compounding return of credibility, clarity and consistency — measured in
                stakeholder confidence, sales velocity and business growth.
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
                Every communication shapes perception.{" "}
                <span className="text-brand">Every perception influences decisions.</span>
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
                Communication Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Sharper communication. Stronger credibility. Real business impact.
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
                      alt={`${s.client} corporate communication design case study`}
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
                        <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Strategy</dt>
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
                View Communication Projects <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-dark/55">More corporate communication projects coming soon.</p>
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
                Why businesses choose Ace360degree for corporate communication design.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine strategic thinking, brand discipline and communication expertise —
                building assets that are both professionally polished and commercially effective.
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
                A clearer view of how corporate communication design strengthens
                credibility, clarity and business growth.
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
            Present Your Business With Confidence
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Build communication assets that{" "}
            <em className="text-brand not-italic">drive growth.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Build communication assets that strengthen credibility, support business growth
            and create lasting impressions — for the long run, not the next meeting.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Request Communication Proposal <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Book Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
