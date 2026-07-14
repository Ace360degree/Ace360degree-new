import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.a1.jpg";
import caseKsa from "@/assets/case-ksa.a2.jpg";
import caseRexello from "@/assets/case-rexello.a3.jpg";
import caseLiving from "@/assets/case-living.a4.jpg";

export const Route = createFileRoute("/brand-strategy")({
  component: BrandStrategyPage,
  head: () => ({
    meta: [
      {
        title:
          "Brand Strategy & Positioning Services Mumbai | Brand Consulting | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Brand Strategy & Positioning Partner helping businesses define who they are, how they are perceived and why customers choose them. Build trust, create differentiation and drive preference.",
      },
      {
        property: "og:title",
        content: "Brand Strategy & Positioning Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Build Trust. Create Differentiation. Drive Preference. Strategic brand positioning, messaging and architecture for ambitious businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/brand-strategy" },
    ],
    links: [{ rel: "canonical", href: "/brand-strategy" }],
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
    q: "Struggling To Differentiate?",
    s: "Develop a unique market position that separates your business from competitors — built on substance, not slogans.",
    tag: "Differentiation",
  },
  {
    q: "Customers Comparing Only On Price?",
    s: "Build stronger value perception and brand preference so the conversation shifts from cost to choice.",
    tag: "Value Perception",
  },
  {
    q: "Brand Message Not Clear?",
    s: "Create a consistent communication framework that aligns leadership, sales, marketing and customer touchpoints.",
    tag: "Message Clarity",
  },
  {
    q: "Expanding Into New Markets?",
    s: "Develop positioning strategies that travel — relevant locally, coherent globally, ready for the next stage of growth.",
    tag: "Market Expansion",
  },
  {
    q: "Launching A New Business?",
    s: "Build a strong brand foundation from day one — positioning, narrative and identity engineered for traction.",
    tag: "New Ventures",
  },
  {
    q: "Managing Multiple Brands?",
    s: "Create clear brand architecture and hierarchy so portfolios scale without confusing customers or diluting equity.",
    tag: "Brand Architecture",
  },
];

const solutions = [
  {
    name: "Brand Discovery & Research",
    outcome: "Understand the market, the customer and the category before defining the brand.",
    services: [
      "Competitor Analysis",
      "Audience Research",
      "Market Insights",
      "Brand Audits",
      "Category Mapping",
    ],
  },
  {
    name: "Brand Positioning Strategy",
    outcome: "Define a clear, defensible position that earns preference — not just attention.",
    services: [
      "Unique Value Proposition",
      "Differentiation Strategy",
      "Category Positioning",
      "Brand Promise",
      "Positioning Statement",
    ],
  },
  {
    name: "Brand Messaging Framework",
    outcome: "Translate strategy into a consistent narrative across every audience and channel.",
    services: [
      "Brand Voice",
      "Messaging Pillars",
      "Taglines",
      "Communication Strategy",
      "Narrative Architecture",
    ],
  },
  {
    name: "Brand Naming & Identity Strategy",
    outcome: "Names and identities built on positioning — not aesthetics in isolation.",
    services: [
      "Business Naming",
      "Product Naming",
      "Tagline Development",
      "Naming Validation",
      "Identity Direction",
    ],
  },
  {
    name: "Brand Architecture",
    outcome: "Structure portfolios so each brand reinforces the next instead of competing internally.",
    services: [
      "Corporate Brands",
      "Sub-Brands",
      "Product Portfolios",
      "Brand Hierarchy",
      "Endorsement Models",
    ],
  },
  {
    name: "Go-To-Market Branding",
    outcome: "Move from strategy to market with positioning that lands inside and outside the business.",
    services: [
      "Launch Positioning",
      "Brand Rollout Strategy",
      "Internal Alignment",
      "Market Activation",
      "Sales Enablement",
    ],
  },
];

const framework = [
  { step: "Discover", body: "Audit the business, the market and the customer — surfacing the truths a brand must be built on." },
  { step: "Define", body: "Articulate positioning, promise and personality — the strategic foundation everything else flows from." },
  { step: "Differentiate", body: "Sharpen what makes the brand distinctive, defensible and worth choosing in its category." },
  { step: "Design", body: "Translate strategy into identity, messaging and expression — creative in service of meaning." },
  { step: "Deploy", body: "Roll out the brand internally and externally so it is lived, not just launched." },
];

const valuePillars = [
  { t: "Recognition", b: "Become familiar in the markets and minds that matter most to the business." },
  { t: "Trust", b: "Reduce buying risk and shorten decision cycles through clarity and consistency." },
  { t: "Differentiation", b: "Stand for something specific in a category crowded with sameness." },
  { t: "Preference", b: "Move from being considered to being chosen — for reasons beyond price." },
  { t: "Loyalty", b: "Build deeper relationships that compound into repeat business and advocacy." },
  { t: "Business Value", b: "Strengthen the intangible asset that lifts margins, valuation and resilience." },
];

const stories = [
  {
    img: caseKsa,
    client: "Kuwal Sanam Architects",
    challenge:
      "An accomplished architectural practice with a strong body of work but limited articulation of what made the studio distinctive in a competitive design market.",
    strategy:
      "Defined a clear positioning rooted in the studio's design philosophy, refined the brand narrative and built an identity system that communicated craft, intent and authority.",
    outcome:
      "Sharper market perception, stronger client conversations and a brand presence that reflects the calibre of the practice's actual work.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "A legacy industrial manufacturer with deep technical credibility but a brand presence that under-represented its global stature and product leadership.",
    strategy:
      "Repositioned the company around engineering excellence and international relevance, rebuilt the messaging framework and aligned the brand expression to a modern B2B audience.",
    outcome:
      "A brand that finally matches the business — stronger differentiation, sharper enquiries and a more confident position in export markets.",
  },
  {
    img: caseLiving,
    client: "Living Concepts",
    challenge:
      "A premium interior brand competing in a category dominated by aesthetic noise, where price comparisons too often overshadowed design value.",
    strategy:
      "Built positioning around a distinct point of view on living spaces, defined the brand voice and created a consistent narrative across showroom, digital and sales touchpoints.",
    outcome:
      "Higher perceived value, stronger preference among design-led customers and a brand that competes on meaning — not discounting.",
  },
];

const whyUs = [
  {
    t: "Strategy-First Thinking",
    b: "Every brand decision begins with the business question behind it — never with a moodboard or a logo sketch.",
  },
  {
    t: "Marketing + Branding Expertise",
    b: "We bring positioning, demand generation and growth strategy into the same conversation — so brands are built to perform.",
  },
  {
    t: "Business-Focused Positioning",
    b: "We position brands around what unlocks growth, defends margin and earns preference — not around what is trending this quarter.",
  },
  {
    t: "Research-Driven Decisions",
    b: "Positioning is grounded in customer, competitor and category insight — not opinion masquerading as instinct.",
  },
  {
    t: "Creative + Strategic Collaboration",
    b: "Strategy informs creative; creative sharpens strategy. Both disciplines work as one practice, not separate silos.",
  },
  {
    t: "Long-Term Brand Building",
    b: "We build brands designed to compound over years — not campaigns designed to peak in a quarter.",
  },
  {
    t: "No Trend-Chasing. No Surface-Level Branding.",
    b: "We don't refresh logos for the sake of it. We define meaning, perception and preference — and let the expression follow.",
  },
];

const faqs = [
  {
    q: "What is brand positioning?",
    a: "Brand positioning is the strategic decision of what your business stands for, who it is for and why it deserves preference over alternatives. It is the foundation every brand expression, message and campaign should flow from.",
  },
  {
    q: "How is brand strategy different from logo design?",
    a: "A logo is an identifier. Brand strategy is the underlying definition of meaning, positioning and promise that makes the logo — and everything around it — actually mean something to customers. Strategy comes first; design executes it.",
  },
  {
    q: "Do you help with naming?",
    a: "Yes. We handle business and product naming as part of broader positioning work — ensuring names are strategically aligned, legally viable and built to support long-term brand equity.",
  },
  {
    q: "Can you support rebranding initiatives?",
    a: "Yes. We support repositioning and rebranding for businesses that have outgrown their original identity, are entering new markets, have merged or acquired, or whose current brand no longer reflects their strategy.",
  },
  {
    q: "Do you create brand guidelines?",
    a: "Yes. We document positioning, messaging, voice, visual identity and usage standards in clear brand guidelines so teams across marketing, sales and operations can express the brand consistently.",
  },
  {
    q: "How long does a branding project take?",
    a: "A focused positioning engagement typically takes 4–6 weeks. Full brand strategy and identity programmes, including research, architecture and rollout, generally run 10–16 weeks depending on scope and stakeholders.",
  },
];

/* ---------- page ---------- */
function BrandStrategyPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Brand Strategy & Positioning</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Brand Strategy & Positioning Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Build trust. Create differentiation. Drive <em className="text-brand not-italic">preference.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              A strong brand is more than a logo. It is how customers perceive your business,
              how employees represent your organisation and how markets remember you. We help
              businesses define their positioning, clarify their messaging and create distinctive
              brand identities engineered for long-term growth — whether launching, repositioning
              or preparing for expansion.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Define My Brand Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Brand Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Brands Positioned", v: "150+" },
                { k: "Focus", v: "Meaning · Trust · Preference" },
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
                alt="Brand strategy, positioning and identity development"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Strong brands don't compete for attention. They earn preference.</p>
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
                The brand question is almost always a business question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Brand strategy is not about looking different. It is about being chosen — clearly,
                consistently and for the right reasons.
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
                  Our Brand Strategy Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete brand strategy practice — built around business outcomes.
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
                The Ace360degree Brand Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Discover. Define. Differentiate. Design. Deploy.
              </h2>
              <p className="mt-5 text-canvas/70">
                Strategy first. Creative execution second. A disciplined process for building
                brands that mean something — and keep meaning something.
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

      {/* 5. WHY BRANDING MATTERS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Branding Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A brand is the most valuable asset most businesses never measure.
              </h2>
              <p className="mt-4 text-dark/70">
                The compounding return of clarity, consistency and meaning — measured in
                preference, pricing power and longevity.
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
                Strong brands don't compete for attention.
                <span className="text-brand"> They earn preference.</span>
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
                Brand Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Sharper positioning. Stronger perception. Real business impact.
              </h2>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {stories.map((s) => (
                <article
                  key={s.client}
                  className="border border-dark/10 bg-canvas overflow-hidden hover:border-dark transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={s.img}
                      alt={`${s.client} brand strategy and positioning case study`}
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
                View Full Case Studies <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-dark/55">More rebranding and positioning projects coming soon.</p>
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
                Why businesses choose Ace360degree for brand strategy.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine strategic rigour, marketing depth and creative discipline — built for
                organisations that want brands to drive business outcomes, not just look the part.
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
                A clearer view of how brand strategy translates into stronger trust,
                differentiation and growth.
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
            Define What Your Brand Stands For
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Create a brand built to <em className="text-brand not-italic">earn preference.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Build a brand strategy that strengthens trust, improves differentiation and supports
            sustainable business growth — for the long run, not the next campaign.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Brand Consultation <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Brand Strategy Proposal <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
