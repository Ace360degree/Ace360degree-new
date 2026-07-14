import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-brandingy4.jpg";
import caseRexello from "@/assets/case-rexelloy3.jpg";
import caseKsa from "@/assets/case-ksay2.jpg";
import caseAmigo from "@/assets/case-amigoy5.jpg";

export const Route = createFileRoute("/logo-visual-identity")({
  component: VisualIdentityPage,
  head: () => ({
    meta: [
      {
        title:
          "Logo Design & Visual Identity Services Mumbai | Brand Identity | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Visual Identity Partner helping businesses create recognizable, consistent and memorable brand experiences. From logos and color systems to complete brand guidelines.",
      },
      {
        property: "og:title",
        content: "Visual Identity Partner | Logo & Brand Identity Design | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Design Recognition. Build Trust. Create Consistency. Complete visual identity systems that strengthen brand recall and support long-term growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/logo-visual-identity" },
    ],
    links: [{ rel: "canonical", href: "/logo-visual-identity" }],
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
    q: "Brand Not Easily Recognizable?",
    s: "Create a distinctive visual identity that improves recall and helps your audience spot you instantly across any channel.",
    tag: "Recognition",
  },
  {
    q: "Inconsistent Brand Appearance?",
    s: "Develop clear visual systems and guidelines for consistency across every platform, channel and customer touchpoint.",
    tag: "Consistency",
  },
  {
    q: "Outdated Brand Visuals?",
    s: "Modernize your identity while preserving brand equity — refreshed visuals that signal relevance without losing familiarity.",
    tag: "Modernization",
  },
  {
    q: "Launching A New Business?",
    s: "Create a strong first impression from day one with a visual identity built on strategy, not guesswork.",
    tag: "New Ventures",
  },
  {
    q: "Managing Multiple Touchpoints?",
    s: "Ensure visual consistency across digital, print and physical environments so your brand feels the same everywhere.",
    tag: "Omnichannel",
  },
  {
    q: "Need Stronger Market Perception?",
    s: "Build a professional visual identity that reflects your brand value and shifts perception in your favour.",
    tag: "Perception",
  },
];

const solutions = [
  {
    name: "Logo Design & Brand Marks",
    outcome: "Custom-designed logos built around strategy, symbolism and long-term flexibility.",
    services: [
      "Wordmarks",
      "Monograms",
      "Icons & Pictograms",
      "Abstract Brandmarks",
      "Adaptive Logo Systems",
    ],
  },
  {
    name: "Color & Typography Systems",
    outcome: "Create visual consistency through carefully selected, scalable design elements.",
    services: [
      "Brand Color Palettes",
      "Typography Selection",
      "Visual Language Rules",
      "Design Hierarchy",
      "Accessibility Considerations",
    ],
  },
  {
    name: "Visual Identity Systems",
    outcome: "Develop complete brand ecosystems with supporting graphic language.",
    services: [
      "Identity Systems",
      "Graphic Elements",
      "Patterns & Textures",
      "Icon Libraries",
      "Brand Asset Libraries",
    ],
  },
  {
    name: "Brand Guidelines & Brand Books",
    outcome: "Maintain consistency across all communications with clear governance.",
    services: [
      "Brand Guidelines",
      "Usage Rules & Don'ts",
      "Design Standards",
      "Application Examples",
      "Governance Systems",
    ],
  },
  {
    name: "Digital & Print Applications",
    outcome: "Ensure identities perform beautifully across every medium and format.",
    services: [
      "Website Applications",
      "Social Media Assets",
      "Stationery Design",
      "Packaging Applications",
      "Presentation Templates",
    ],
  },
  {
    name: "Rebranding & Identity Refresh",
    outcome: "Modernize existing brands for changing markets while protecting equity.",
    services: [
      "Logo Refresh",
      "Identity Evolution",
      "Brand Modernization",
      "Legacy Brand Updates",
      "Rollout Strategy",
    ],
  },
];

const framework = [
  { step: "Research", body: "Understand your business, audience and competitive landscape before a single pixel is placed." },
  { step: "Conceptualize", body: "Explore strategic visual directions rooted in positioning, not personal taste." },
  { step: "Design", body: "Create identity systems aligned with brand strategy and engineered for real-world use." },
  { step: "Refine", body: "Optimize for flexibility, scalability and consistency across every possible application." },
  { step: "Deploy", body: "Deliver production-ready assets, brand governance tools and rollout support." },
];

const valuePillars = [
  { t: "Recognition", b: "Become instantly familiar in the markets and minds that matter most to your business." },
  { t: "Consistency", b: "Every touchpoint reinforces the same visual story — no drift, no confusion, no dilution." },
  { t: "Trust", b: "A polished, professional visual identity signals competence and reduces buying friction." },
  { t: "Professionalism", b: "Visual quality shapes how prospects, partners and talent perceive your organisation." },
  { t: "Brand Recall", b: "Strong identity systems make your brand easier to remember and easier to recommend." },
  { t: "Customer Experience", b: "Visual consistency creates smoother, more confident journeys across every channel." },
];

const stories = [
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "A legacy industrial manufacturer with deep technical credibility but a visual identity that under-represented its global stature and product leadership.",
    strategy:
      "Refreshed the logo system, introduced a modern color palette and typography framework, and created comprehensive brand guidelines aligned with a repositioned B2B narrative.",
    outcome:
      "A cohesive visual identity that matches the business — stronger brand recognition at trade shows, sharper sales collateral and a more confident presence in export markets.",
  },
  {
    img: caseKsa,
    client: "Kuwal Sanam Architects",
    challenge:
      "An accomplished architectural practice with a strong portfolio but a visual identity that did not communicate the studio's design philosophy or premium positioning.",
    strategy:
      "Designed a refined wordmark and visual system rooted in architectural precision, paired with a restrained color palette and typography that communicates craft, intent and authority.",
    outcome:
      "A distinctive visual presence that reflects the calibre of the practice's work — stronger first impressions, more confident client conversations and elevated brand perception.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "A growing ed-tech brand with a friendly name but a scattered visual presence that lacked the consistency needed to build trust with parents and students at scale.",
    strategy:
      "Created a warm, structured identity system with a friendly brand mark, unified color and typography standards, and scalable digital assets for websites, social media and learning platforms.",
    outcome:
      "A recognizable, trustworthy brand face across all channels — improved engagement, stronger parent confidence and a foundation ready for multi-location expansion.",
  },
];

const whyUs = [
  {
    t: "Strategy-Led Design",
    b: "Every visual decision begins with brand strategy — so your identity supports positioning, not just aesthetics.",
  },
  {
    t: "Brand-First Thinking",
    b: "We design identities as business tools — built to strengthen trust, recognition and long-term brand equity.",
  },
  {
    t: "Cross-Industry Experience",
    b: "From manufacturing and B2B to education and professional services — we understand how visual identity needs vary by sector.",
  },
  {
    t: "Scalable Identity Systems",
    b: "We build identities that grow with your business — flexible systems that adapt to new products, markets and channels.",
  },
  {
    t: "Creative + Business Perspective",
    b: "We balance creative ambition with commercial reality — delivering identities that are both distinctive and practical.",
  },
  {
    t: "Complete Brand Ecosystems",
    b: "Logos are just the beginning. We deliver color, typography, graphics, guidelines and application-ready assets.",
  },
  {
    t: "No Trend-Chasing",
    b: "We avoid fleeting design fads. Every identity is built for longevity, not the next design awards cycle.",
  },
  {
    t: "No Generic Templates",
    b: "Every identity is custom-crafted for your brand. No stock symbols, no reused concepts, no shortcuts.",
  },
];

const faqs = [
  {
    q: "Why is visual identity important?",
    a: "Visual identity is how your brand is seen, recognized and remembered. A strong identity system improves recall, builds trust, creates consistency across touchpoints and shapes market perception — all of which directly influence customer behaviour and business growth.",
  },
  {
    q: "How is visual identity different from a logo?",
    a: "A logo is a single identifying mark. Visual identity is the complete system — colors, typography, imagery, graphic elements, patterns and usage rules — that ensures your brand looks, feels and behaves consistently everywhere it appears.",
  },
  {
    q: "Do you provide brand guidelines?",
    a: "Yes. Every visual identity project includes comprehensive brand guidelines or a brand book documenting logo usage, color values, typography rules, spacing standards, application examples and governance — so your team and partners can apply the identity correctly.",
  },
  {
    q: "Can you redesign existing logos?",
    a: "Yes. We handle identity refreshes and full rebrands — modernizing existing logos while protecting brand equity, or evolving identities to match new positioning, markets and growth stages.",
  },
  {
    q: "What deliverables are included?",
    a: "Deliverables vary by scope but typically include logo files in multiple formats, color and typography systems, graphic element libraries, digital and print application templates, social media assets, stationery designs and a brand guidelines document.",
  },
  {
    q: "How long does a visual identity project take?",
    a: "A focused logo and identity system typically takes 4–6 weeks. Full visual identity programmes with guidelines, digital assets and print applications generally run 8–12 weeks depending on complexity and stakeholder involvement.",
  },
];

/* ---------- page ---------- */
function VisualIdentityPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Logo & Visual Identity Design</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Visual Identity Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Visual identity systems that make brands{" "}
              <em className="text-brand not-italic">memorable.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              A logo is only one part of a much larger visual story. At Ace360degree,
              we design complete visual identity systems that help businesses create
              stronger recognition, build trust and communicate consistently across
              every customer touchpoint — from logos and typography to color systems
              and brand guidelines.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Start My Identity Project <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Design Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Identities Created", v: "150+" },
                { k: "Focus", v: "Recognition · Trust · Consistency" },
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
                alt="Visual identity design, logo systems and brand guidelines"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Great brands are recognized before they are read.</p>
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
              <span className="text-[11px] tracking-[0.45em] uppercase text-brand font-semibold">
                Business Challenges We Help Solve
              </span>
              <h2 className="mt-4 font-serif text-[40px] md:text-[58px] leading-[1.06] tracking-[-0.02em] text-dark">
                The visual question is almost always a business question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Visual identity is not about making things look pretty. It is about
                creating recognition, building trust and shaping perception — consistently
                and at scale.
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
                  Our Visual Identity Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete visual identity practice — built around business outcomes.
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
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.45em] uppercase text-brand font-semibold">
                The Ace360degree Visual Identity Framework
              </span>
              <h2 className="mt-4 font-serif text-[40px] md:text-[58px] leading-[1.06] tracking-[-0.02em] text-dark">
                Research. Conceptualize. Design. Refine. Deploy.
              </h2>
              <p className="mt-5 text-canvas/70">
                Strategy first. Creative execution second. A disciplined process for
                building visual identities that are recognized, remembered and respected.
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
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Visual Identity In Action
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Visual identity is a business investment — not a creative indulgence.
              </h2>
              <p className="mt-6 max-w-2xl text-sm md:text-[15px] leading-7 text-dark/65">
                The compounding return of recognition, consistency and trust â€” measured in recall, preference and customer
                shaping perception — consistently and at scale..
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px border border-dark/10 bg-dark/10">
              {valuePillars.map((p, i) => (
                <div key={p.t} className="bg-canvas p-6 md:p-7 min-h-[168px]">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-dark/45">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-serif text-[28px] leading-[1.15] text-dark">{p.t}</h3>
                  <p className="mt-4 text-sm md:text-[15px] leading-5 text-dark/65">{p.b}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-dark/10 pt-10">
              <p className="font-serif text-3xl md:text-[44px] max-w-3xl leading-tight">
                Great brands are recognized{" "}
                <span className="text-brand">before they are read.</span>
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
                Visual Identity Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Stronger recognition. Sharper perception. Real business impact.
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
                      alt={`${s.client} visual identity and logo design case study`}
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
                View Branding Case Studies <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-dark/55">More visual identity projects coming soon.</p>
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
                Why businesses choose Ace360degree for visual identity design.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine strategic thinking, creative discipline and business perspective —
                building visual identities that are both distinctive and commercially effective.
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
                A clearer view of how visual identity design strengthens recognition,
                trust and long-term brand value.
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
            Create A Brand People Instantly Recognize
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Build a visual identity system that{" "}
            <em className="text-brand not-italic">strengthens trust.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Build a visual identity system that strengthens trust, improves recognition
            and supports long-term growth — for the long run, not the next design trend.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Request Design Proposal <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Book Design Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
