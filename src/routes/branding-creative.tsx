import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import svcBranding from "@/assets/svc-branding.jpg";
import caseKsa from "@/assets/case-ksa.jpg";
import caseRexello from "@/assets/case-rexello.jpg";
import caseLiving from "@/assets/case-living.jpg";

export const Route = createFileRoute("/branding-creative")({
  component: BrandingCreativePage,
  head: () => ({
    meta: [
      {
        title:
          "Strategic Branding & Creative Services — Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a strategic branding partner helping businesses build trust, create differentiation, improve market perception and strengthen brand value through brand strategy, identity, design and creative systems.",
      },
      {
        property: "og:title",
        content: "Strategic Branding That Builds Trust & Differentiation",
      },
      {
        property: "og:description",
        content:
          "Discovery-led branding combining strategy, identity, creative and technology — built for businesses that want to stand out and stay remembered.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/branding-creative" },
    ],
    links: [{ rel: "canonical", href: "/branding-creative" }],
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
    q: "Struggling To Stand Out?",
    s: "In crowded markets, being invisible is expensive. We define what makes your business unmistakable — and build every touchpoint around that difference.",
    tag: "Differentiation",
  },
  {
    q: "Inconsistent Brand Communication?",
    s: "Mixed messages erode trust. We create unified brand systems, messaging frameworks and design rules that keep your story consistent across every channel.",
    tag: "Consistency",
  },
  {
    q: "Launching A New Business?",
    s: "First impressions are permanent. We build brand foundations — positioning, identity, voice and visual system — that earn credibility from day one.",
    tag: "New Launch",
  },
  {
    q: "Rebranding An Existing Organization?",
    s: "Change without losing equity. We manage repositioning, visual refreshes and stakeholder communication to modernize while preserving what audiences already trust.",
    tag: "Rebranding",
  },
  {
    q: "Need Better Marketing Creative?",
    s: "Creative that looks good but doesn't perform is art, not business. We design marketing assets grounded in strategy — engineered to attract, persuade and convert.",
    tag: "Creative Performance",
  },
  {
    q: "Looking To Strengthen Customer Trust?",
    s: "Trust is built through every interaction. We design brand experiences, communication systems and visual credibility signals that deepen confidence in your business.",
    tag: "Trust Building",
  },
];

const solutions = [
  {
    name: "Brand Strategy & Positioning",
    outcome: "A brand that occupies the right space in your customer's mind.",
    detail:
      "Market research, competitive mapping, audience definition and brand architecture that clarifies who you are, who you serve and why you're different.",
  },
  {
    name: "Brand Naming & Identity Development",
    outcome: "A name and identity system that is ownable, memorable and scalable.",
    detail:
      "Strategic naming, trademark screening, logo systems, colour palettes, typography and visual language built for recognition across every medium.",
  },
  {
    name: "Logo Design & Visual Identity",
    outcome: "Instant recognition and visual authority.",
    detail:
      "Crafted mark systems, responsive logos, iconography and visual guidelines that make your brand identifiable at a glance — on screen, in print and in the wild.",
  },
  {
    name: "Corporate Communication & Marketing Collaterals",
    outcome: "Professional touchpoints that reinforce credibility.",
    detail:
      "Brochures, proposals, stationery, reports and campaign assets designed to convert attention into confidence — and confidence into action.",
  },
  {
    name: "Packaging & Product Branding",
    outcome: "Shelf presence and unboxing experiences that drive preference.",
    detail:
      "Structural design, label systems and packaging storytelling that turns your product into the one customers reach for — and remember.",
  },
  {
    name: "Motion Graphics & Visual Storytelling",
    outcome: "Dynamic content that captures attention and communicates value fast.",
    detail:
      "Animated explainers, social motion systems and kinetic identity that bring your brand to life in a world of scrolling thumbs.",
  },
  {
    name: "Corporate Films & Brand Videos",
    outcome: "Emotional connection and authority through moving image.",
    detail:
      "Brand films, culture videos, testimonial content and product storytelling that humanize your business and build trust at scale.",
  },
  {
    name: "Presentation & Sales Enablement Design",
    outcome: "Pitch materials that close deals.",
    detail:
      "Investor decks, sales presentations, proposal templates and training materials designed to persuade — not just inform.",
  },
  {
    name: "Employer Branding",
    outcome: "A brand that attracts the right talent and retains your best people.",
    detail:
      "Internal communication systems, recruitment creative, culture content and EVP messaging that position your company as a place people want to build their careers.",
  },
];

const framework = [
  {
    step: "Discover",
    body: "Audit the market, competition, audience and internal perceptions to find the strategic opportunity.",
  },
  {
    step: "Define",
    body: "Clarify positioning, personality, messaging architecture and brand promise — the foundation everything builds on.",
  },
  {
    step: "Design",
    body: "Craft visual identity, creative systems and brand assets that express the strategy with precision and beauty.",
  },
  {
    step: "Deploy",
    body: "Launch across touchpoints — digital, print, environment, motion — with guidelines that protect consistency.",
  },
  {
    step: "Grow",
    body: "Evolve the brand as the business grows. Refreshes, extensions and campaigns that keep relevance alive.",
  },
];

const stories = [
  {
    img: caseKsa,
    client: "Kuwal Sanam Architects",
    challenge:
      "A respected architecture practice with an outdated visual identity that didn't reflect the sophistication of its built work.",
    solution:
      "Complete brand repositioning — refined identity system, editorial portfolio language, corporate stationery and digital presence aligned to high-end clientele.",
    outcome:
      "Elevated market perception, stronger client confidence and a brand identity as considered as the architecture itself.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "A 50-year industrial brand with strong product credibility but limited emotional brand equity and dated visual communication.",
    solution:
      "Heritage-modern identity refresh, product storytelling system, corporate communication templates and brand film content for global markets.",
    outcome:
      "Renewed brand relevance in international markets and a cohesive visual system across product literature, digital and trade presence.",
  },
  {
    img: caseLiving,
    client: "Living Concepts",
    challenge:
      "A growing interior design brand needing stronger differentiation and premium positioning in a saturated lifestyle market.",
    solution:
      "Brand strategy, refined visual identity, packaging systems for home products, and content design that communicates curated taste.",
    outcome:
      "Clearer brand positioning, higher perceived value and stronger customer connection across retail and digital channels.",
  },
];

const whyUs = [
  {
    t: "Strategy Before Design",
    b: "Every colour, typeface and layout decision is anchored in business strategy — not personal taste.",
  },
  {
    t: "Consistency Across Channels",
    b: "We build brand systems, not one-off assets — so your story stays coherent on a business card, a billboard or a board deck.",
  },
  {
    t: "Marketing + Branding + Technology",
    b: "Brand identity that connects to your website, your campaigns and your CRM — not files that sit in a folder.",
  },
  {
    t: "Industry Experience",
    b: "From architects and manufacturers to healthcare and hospitality — we bring sector intelligence to every creative decision.",
  },
  {
    t: "Long-Term Partnerships",
    b: "Most branding relationships with us last years because brands evolve — and we evolve with them.",
  },
];

const industries = [
  {
    name: "Architecture & Design",
    context:
      "Portfolio-driven identity, editorial systems and client presentation design for practices that sell expertise and taste.",
  },
  {
    name: "Manufacturing & Industrial",
    context:
      "B2B brand authority, technical literature systems and trade-show presence for engineering and production-led businesses.",
  },
  {
    name: "Healthcare & Wellness",
    context:
      "Trust-first identity, patient communication and compliance-aware design for clinics, devices and wellness brands.",
  },
  {
    name: "Education & Institutions",
    context:
      "Reputation building, recruitment branding and stakeholder communication for schools, universities and training organizations.",
  },
  {
    name: "Hospitality & Lifestyle",
    context:
      "Experience-led identity, sensory branding and guest-touchpoint design for hotels, restaurants and consumer lifestyle brands.",
  },
  {
    name: "Real Estate & Development",
    context:
      "Project branding, sales gallery systems and investor communication that elevates developments from commodities to destinations.",
  },
  {
    name: "Fintech & Technology",
    context:
      "Credibility-driven identity, product storytelling and UX-adjacent brand systems for financial and technology ventures.",
  },
  {
    name: "Professional Services",
    context:
      "Authority-building identity, proposal design and partner-profile systems for consulting, legal and advisory firms.",
  },
  {
    name: "E-Commerce & D2C",
    context:
      "Packaging identity, unboxing experience and social-first brand systems for consumer product brands selling direct.",
  },
];

/* ---------- page ---------- */
function BrandingCreativePage() {
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
            <span className="text-dark">Branding &amp; Creative</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Strategic Branding Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Build trust. Strengthen identity.{" "}
              <em className="text-brand not-italic">Differentiate</em> your brand.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              We help businesses solve trust, perception and differentiation challenges — through
              strategic branding, creative systems and identity design that turns your business into
              a brand people remember and choose.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book Brand Discovery Call <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Brand Audit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Brands Shaped", v: "150+" },
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
                src={svcBranding}
                alt="Branding and creative strategy workspace"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Strategy first. Design second. Results always.</p>
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
                Brand Challenges We Help Solve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Start with the perception problem. The creative follows.
              </h2>
              <p className="mt-4 text-dark/70">
                Most branding fails because it starts with aesthetics, not strategy. We begin by
                diagnosing what's weakening your brand — and build the solution around that insight.
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
                  Branding &amp; Creative Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A connected brand system — engineered for trust and differentiation.
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
                The Ace360degree Branding Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                How we build brands — systematically.
              </h2>
              <p className="mt-4 text-canvas/70">
                A five-stage model that turns branding from a creative exercise into a strategic
                business discipline.
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
                  Brands We've Helped Shape
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Real businesses. Real brand challenges. Real transformation.
                </h2>
              </div>
              <Link to="/portfolio" className="text-sm font-semibold hover:text-brand">
                View all brand stories →
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                A branding partner — not a design vendor.
              </h2>
              <p className="mt-5 text-dark/70">
                Since 2009, we've helped businesses across industries build brands that command
                attention, earn trust and drive commercial value — through strategy-led creative
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
                Industries We Help Build
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Sector-aware branding, across categories.
              </h2>
              <p className="mt-4 text-dark/70">
                We bring industry context to every engagement — buyer psychology, competitive
                dynamics and sector norms shape how we design brands that resonate.
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
            Let's Build a Brand That Lasts
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Ready to strengthen <em className="text-brand not-italic">your brand?</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Tell us where your brand stands today. We'll diagnose the perception gaps and show you
            what a strategic branding partnership with Ace360degree could unlock.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Brand Discovery Call <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Brand Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
