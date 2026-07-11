import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseRexello from "@/assets/case-rexello.jpg";
import caseCosmos from "@/assets/case-cosmos.jpg";

export const Route = createFileRoute("/packaging-product-branding")({
  component: PackagingProductBrandingPage,
  head: () => ({
    meta: [
      {
        title:
          "Packaging Design & Product Branding Services Mumbai | Retail & Luxury Packaging | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Packaging & Product Branding Partner helping businesses improve product perception, strengthen shelf presence and create memorable customer experiences across retail, e-commerce and B2B.",
      },
      {
        property: "og:title",
        content: "Packaging & Product Branding Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Create Preference Before Purchase. Packaging and product branding systems that strengthen recognition, improve shelf impact and influence buying decisions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/packaging-product-branding" },
    ],
    links: [{ rel: "canonical", href: "/packaging-product-branding" }],
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
    q: "Products Not Standing Out On The Shelf?",
    s: "Create distinctive packaging that earns attention, breaks category sameness and improves shelf visibility where decisions are made.",
    tag: "Shelf Impact",
  },
  {
    q: "Customers Perceive Competitors As More Premium?",
    s: "Elevate product perception through strategic structure, material and visual design that signals quality before the box is opened.",
    tag: "Premium Perception",
  },
  {
    q: "Inconsistent Product Presentation?",
    s: "Build packaging systems aligned with your brand identity — so every SKU reinforces the same recognition and trust.",
    tag: "Consistency",
  },
  {
    q: "Launching A New Product?",
    s: "Create packaging that supports market entry, communicates value clearly and accelerates first-time adoption.",
    tag: "New Launch",
  },
  {
    q: "Expanding Product Lines?",
    s: "Develop scalable product branding systems that extend cleanly across categories, variants and future SKUs.",
    tag: "Scalability",
  },
  {
    q: "Need Stronger Retail Presence?",
    s: "Improve shelf impact and purchase consideration with packaging engineered for the moment of choice — physical or digital.",
    tag: "Retail Presence",
  },
];

const solutions = [
  {
    name: "Product Packaging Design",
    outcome: "Distinctive packaging that earns attention and communicates value at first glance.",
    services: [
      "Box Design",
      "Label Design",
      "Sleeve Packaging",
      "Carton Packaging",
      "Structural Packaging Concepts",
    ],
  },
  {
    name: "Retail & FMCG Packaging",
    outcome: "Shelf-ready systems engineered for visibility, recall and purchase influence.",
    services: [
      "Retail Packaging Systems",
      "Shelf Visibility Design",
      "Consumer Packaging",
      "Product Line Extensions",
      "Packaging Architecture",
    ],
  },
  {
    name: "Luxury & Premium Packaging",
    outcome: "High-end packaging experiences that signal craft, quality and prestige.",
    services: [
      "Luxury Packaging",
      "Embossing & Foiling Concepts",
      "Premium Materials",
      "Gift Packaging",
      "High-End Product Presentation",
    ],
  },
  {
    name: "Product Branding Systems",
    outcome: "Unified identity systems that scale cleanly across SKUs, variants and categories.",
    services: [
      "Product Identity Design",
      "Label Systems",
      "Product Families",
      "Visual Hierarchies",
      "Brand Extensions",
    ],
  },
  {
    name: "Print Communication Support",
    outcome: "Aligned collateral that supports retail, distribution and trade engagement.",
    services: [
      "Catalogues",
      "Brochures",
      "Product Sheets",
      "Retail Communication",
      "Trade Show Materials",
    ],
  },
  {
    name: "3D Packaging Visualization",
    outcome: "Photoreal mockups and renders that accelerate decisions and power launches.",
    services: [
      "3D Mockups",
      "Product Renders",
      "Packaging Simulations",
      "Launch Visuals",
      "Presentation Assets",
    ],
  },
];

const framework = [
  { step: "Research", body: "Understand the product, audience and competitive set before a single concept is sketched." },
  { step: "Position", body: "Define how the product should be perceived — premium, accessible, expert, modern — and design to that brief." },
  { step: "Design", body: "Create visual and structural packaging concepts engineered for shelf, hand and unboxing." },
  { step: "Prototype", body: "Validate appearance, materials and usability through mockups and pre-production samples." },
  { step: "Launch", body: "Deliver production-ready dielines, assets and visuals for confident market rollout." },
];

const valuePillars = [
  { t: "Shelf Visibility", b: "Packaging engineered to break category sameness and win the three-second glance." },
  { t: "Recognition", b: "Consistent visual language across SKUs builds instant identification at point of sale." },
  { t: "Trust", b: "Considered structure, materials and detailing signal quality before the product is experienced." },
  { t: "Premium Perception", b: "Strategic design elevates how customers value — and price — your product." },
  { t: "Purchase Influence", b: "Hierarchy, clarity and craft guide customers from consideration to checkout." },
  { t: "Customer Experience", b: "Memorable unboxing and use moments turn one-time buyers into repeat advocates." },
];

const stories = [
  {
    img: caseAmigo,
    client: "Al Nuaim Perfumes",
    challenge:
      "A heritage perfumery with strong product quality but packaging that did not communicate the craft, prestige or premium positioning the brand deserved across modern retail and gifting channels.",
    strategy:
      "Developed a refined product branding system with elevated typography, premium materials and structural detailing — extending consistently across signature lines, gifting packs and new launches.",
    outcome:
      "Sharper shelf presence, stronger premium perception and a packaging language that supports higher price positioning, gifting demand and international market expansion.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "A legacy industrial brand with strong engineering credibility but commodity-grade product packaging that weakened perception in B2B channels and dealer touchpoints.",
    strategy:
      "Built a unified product branding and packaging architecture across SKUs — with clear visual hierarchy, technical clarity and a premium industrial design language.",
    outcome:
      "Stronger product perception at dealer, distributor and end-customer level, sharper category differentiation and packaging assets that support trade and export presence.",
  },
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "A specialised manufacturer with a broad SKU portfolio but inconsistent labels and packaging that diluted brand recognition and made the range hard to navigate.",
    strategy:
      "Created a scalable label and packaging system with clear product family logic, visual hierarchy and consistent identity — engineered for production efficiency and shelf clarity.",
    outcome:
      "Cleaner product line presentation, faster recognition across SKUs and a packaging system that scales effortlessly as new variants and categories are added.",
  },
];

const whyUs = [
  {
    t: "Brand-Led Packaging Strategy",
    b: "We design packaging as an extension of brand strategy — not as a standalone creative exercise. Every choice ladders back to positioning.",
  },
  {
    t: "Product Positioning Expertise",
    b: "We help define how a product should be perceived — premium, accessible, expert, modern — and design packaging that earns that perception.",
  },
  {
    t: "Retail & B2B Experience",
    b: "From FMCG and luxury to industrial and B2B — we know how packaging needs differ by channel, audience and purchase context.",
  },
  {
    t: "Creative + Commercial Thinking",
    b: "Beautiful packaging that does not sell is a failed brief. We balance aesthetic craft with shelf logic, hierarchy and purchase influence.",
  },
  {
    t: "3D Visualization Capabilities",
    b: "Photoreal renders and mockups for stakeholder reviews, e-commerce, trade presentations and launch campaigns — without waiting on production.",
  },
  {
    t: "Production-Ready Execution",
    b: "Dielines, specifications and print-ready files engineered for clean production across vendors, materials and geographies.",
  },
  {
    t: "No Generic Packaging Templates",
    b: "Every product gets a tailored packaging system. No reused layouts, no off-the-shelf shells, no commodity treatments.",
  },
  {
    t: "No Design Without Strategy",
    b: "We do not decorate boxes. Every structural and visual choice serves perception, recognition or purchase influence.",
  },
];

const faqs = [
  {
    q: "Why is packaging important for branding?",
    a: "Packaging is often the first physical interaction a customer has with your brand. It shapes perception of quality, signals positioning and influences purchase decisions before the product is ever experienced. Strong packaging compounds into stronger pricing power, repeat purchase and category authority.",
  },
  {
    q: "Can you design packaging for new products?",
    a: "Yes. We work with brands launching new products from concept onward — defining positioning, creating product identity, designing primary and secondary packaging and preparing launch assets for both retail and e-commerce environments.",
  },
  {
    q: "Do you provide 3D packaging visualization?",
    a: "Yes. We produce photoreal 3D mockups and renders for stakeholder approvals, e-commerce listings, trade presentations and launch campaigns — accelerating decisions without waiting on physical samples.",
  },
  {
    q: "Can you coordinate print production?",
    a: "Yes. We deliver production-ready dielines and specifications, and we support coordination with print and packaging vendors to ensure colour, material and finish accuracy at production stage.",
  },
  {
    q: "Do you create packaging systems for multiple SKUs?",
    a: "Yes. We specialise in scalable packaging architectures — unified visual systems with clear product family logic, variant hierarchy and rules that extend cleanly as new SKUs, sizes and categories are introduced.",
  },
  {
    q: "How long does a packaging project take?",
    a: "Timelines depend on scope, SKU count and complexity. A single-product packaging project typically takes four to six weeks; multi-SKU systems, luxury structural packaging and full product branding programmes take longer. We share an exact timeline after the discovery conversation.",
  },
];

/* ---------- page ---------- */
function PackagingProductBrandingPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Packaging & Product Branding</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Packaging & Product Branding Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Packaging that influences{" "}
              <em className="text-brand not-italic">buying decisions.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Packaging is often the first physical interaction customers have with your
              brand. It shapes perception, communicates quality and influences purchase
              decisions before a product is ever experienced. At Ace360degree, we create
              packaging and product branding systems that strengthen recognition, improve
              shelf presence and enhance customer experience across retail, e-commerce and
              B2B environments.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Start My Packaging Project <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Product Branding Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Products Branded", v: "300+" },
                { k: "Focus", v: "Perception · Shelf · Preference" },
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
                alt="Packaging and product branding systems for retail, e-commerce and B2B"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Create preference before purchase.</p>
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
                The packaging question is almost always a perception question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Packaging is not about printing pretty boxes. It is about shaping perception,
                earning shelf attention and influencing the buying decision — quietly,
                consistently and at scale.
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
                  Our Packaging & Product Branding Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete product branding practice — built around perception and preference.
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
                The Ace360degree Product Branding Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Research. Position. Design. Prototype. Launch.
              </h2>
              <p className="mt-5 text-canvas/70">
                Strategy first. Shelf effectiveness second. A disciplined process
                for building packaging that earns attention, preference and purchase.
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
                Why Packaging Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Packaging is a commercial asset — not a finishing touch.
              </h2>
              <p className="mt-4 text-dark/70">
                The compounding return of recognition, perception and preference — measured
                in shelf wins, pricing power and repeat purchase.
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
                Customers often decide before they experience.{" "}
                <span className="text-brand">Packaging helps shape that decision.</span>
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
                Packaging Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Stronger perception. Sharper shelf presence. Real commercial impact.
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
                      alt={`${s.client} packaging and product branding case study`}
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
                View Branding Case Studies <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-dark/55">More packaging projects coming soon.</p>
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
                Why businesses choose Ace360degree for packaging & product branding.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine brand strategy, product positioning and packaging craft —
                building systems that look premium, sell on the shelf and scale across SKUs.
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
                A clearer view of how packaging and product branding strengthen perception,
                preference and commercial growth.
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
            Turn Products Into Brands
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Create preference{" "}
            <em className="text-brand not-italic">before purchase.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Create packaging experiences that strengthen perception, increase recognition
            and support long-term business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Request Packaging Proposal <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Book Product Branding Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
