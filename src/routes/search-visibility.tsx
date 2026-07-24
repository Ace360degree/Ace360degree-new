import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.a1.jpg";

export const Route = createFileRoute("/search-visibility")({
  component: SearchVisibilityPage,
  head: () => ({
    meta: [
      {
        title:
          "SEO, AEO & GEO Services in Mumbai | Search Visibility Experts | Ace360degree",
      },
      {
        name: "description",
        content:
          "Improve visibility across Google, AI search engines and answer platforms with Ace360degree's SEO, AEO and GEO services. Build discoverability, authority and sustainable business growth.",
      },
      {
        property: "og:title",
        content:
          "Search Visibility Partner — SEO + AEO + GEO | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Be found everywhere your customers search — Google, ChatGPT, Gemini, Perplexity, AI Overviews and Voice. Integrated SEO, AEO and GEO strategies engineered for business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/search-visibility" },
    ],
    links: [{ rel: "canonical", href: "/search-visibility" }],
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
const solutions = [
  {
    name: "Technical SEO",
    outcome: "A healthy, fast, crawlable foundation for discoverability.",
    services: [
      "Technical Audits",
      "Site Architecture",
      "Core Web Vitals",
      "Speed Optimization",
      "Schema Markup",
    ],
  },
  {
    name: "On-Page SEO",
    outcome: "Content and structure aligned to real search intent.",
    services: [
      "Keyword Strategy",
      "Content Optimization",
      "Meta Optimization",
      "Internal Linking",
      "Search Intent Mapping",
    ],
  },
  {
    name: "Local SEO",
    outcome: "Stronger map presence and local discoverability.",
    services: [
      "Google Business Profile Optimization",
      "Local Citations",
      "Review Management",
      "Local Landing Pages",
    ],
  },
  {
    name: "Content & Topical Authority",
    outcome: "Expertise and trust that compounds over time.",
    services: [
      "SEO Content Strategy",
      "Pillar Pages",
      "Topic Clusters",
      "Industry Authority Content",
      "Blog Optimization",
    ],
  },
  {
    name: "AEO — Answer Engine Optimization",
    outcome: "Be chosen as the answer, not just a result.",
    services: [
      "Featured Snippet Optimization",
      "FAQ Optimization",
      "Voice Search Optimization",
      "AI Overview Optimization",
      "Structured Content Design",
    ],
  },
  {
    name: "GEO — Generative Engine Optimization",
    outcome: "Visibility inside AI-generated responses.",
    services: [
      "Entity Optimization",
      "Brand Authority Building",
      "Knowledge Graph Optimization",
      "AI Search Visibility",
      "Generative Search Readiness",
    ],
  },
  {
    name: "Analytics & Search Intelligence",
    outcome: "Performance measured across traditional and AI search.",
    services: [
      "Search Visibility Reporting",
      "AI Search Monitoring",
      "Keyword Tracking",
      "Conversion Analytics",
      "Executive Dashboards",
    ],
  },
];

const pillars = [
  {
    label: "SEO",
    headline: "Be visible in traditional search engines.",
    surfaces: ["Google", "Bing"],
  },
  {
    label: "AEO",
    headline: "Be selected as the answer.",
    surfaces: ["Featured Snippets", "AI Overviews", "Voice Search"],
  },
  {
    label: "GEO",
    headline: "Be referenced by AI systems.",
    surfaces: ["ChatGPT", "Gemini", "Perplexity", "Claude"],
  },
];

const framework = [
  { step: "Discover", body: "Research customer intent, market opportunities and search demand." },
  { step: "Optimize", body: "Implement technical SEO and content optimization." },
  { step: "Structure", body: "Build content designed for answer engines." },
  { step: "Authority", body: "Strengthen entities, trust signals and digital authority." },
  { step: "Measure", body: "Track visibility, traffic, leads and AI discoverability." },
];

const tools = [
  "Google Search Console",
  "Google Analytics 4",
  "SEMrush",
  "Ahrefs",
  "Screaming Frog",
  "Surfer SEO",
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Schema Tools",
  "Structured Data Platforms",
];

const stories = [
  {
    client: "Rexello Castors",
    challenge:
      "A category-leading manufacturer with limited organic visibility against larger competitors and weak presence in product-specific searches.",
    solution:
      "Technical SEO overhaul, product-led content architecture, schema implementation and AEO-ready FAQ structures for high-intent queries.",
    outcome:
      "Sustained growth in qualified organic traffic, stronger inbound enquiries and visibility across long-tail industrial search terms.",
  },
  {
    client: "Cosmos Seals",
    challenge:
      "A specialised B2B brand invisible to engineers researching solutions through Google and emerging AI search tools.",
    solution:
      "Topical authority build-out across applications and industries, structured content for answer engines and authority signals for AI discoverability.",
    outcome:
      "Improved share of voice in technical search categories and consistent inbound discovery from global buyers.",
  },
  {
    client: "Amigo Academy",
    challenge:
      "Strong reputation offline but limited digital footprint in admissions and course-related search journeys.",
    solution:
      "Local SEO, content clusters for courses, voice and FAQ optimisation, and Google Business Profile activation.",
    outcome:
      "Material lift in admissions enquiries, stronger local visibility and improved discoverability inside AI answer experiences.",
  },
  {
    client: "MOS Utility",
    challenge:
      "A growing fintech brand needing visibility across both performance keywords and AI-driven research queries.",
    solution:
      "Integrated SEO + AEO + GEO programme: technical optimisation, entity building, AI Overview readiness and analytics infrastructure.",
    outcome:
      "Compounding organic growth, stronger brand authority and presence inside AI-generated responses for category questions.",
  },
];

const whyUs = [
  { t: "Search Visibility Expertise", b: "We focus on discoverability across every surface your customers use — not just Google rankings." },
  { t: "SEO + AEO + GEO Capability", b: "Integrated strategies built for traditional search, answer engines and generative AI platforms." },
  { t: "AI-Ready Search Strategies", b: "Content, entities and structure engineered for how AI systems read, retrieve and cite the web." },
  { t: "Transparent Reporting", b: "Executive dashboards covering visibility, traffic, conversions and AI search presence." },
  { t: "Marketing + Technology + AI Expertise", b: "Search visibility connected to your wider marketing, brand and technology systems." },
  { t: "Long-Term Growth Focus", b: "No ranking gimmicks. No shortcuts. No black-hat SEO. Sustainable authority that compounds." },
];

const faqs = [
  {
    q: "How long does SEO take?",
    a: "Meaningful results typically build over 3–6 months and compound from there. Search visibility is an authority game, not a quick fix — we focus on durable growth rather than short-lived rankings.",
  },
  {
    q: "What is AEO?",
    a: "Answer Engine Optimization helps your content appear in AI-generated answers, featured snippets and voice search results — so your business is chosen as the answer, not just listed.",
  },
  {
    q: "What is GEO?",
    a: "Generative Engine Optimization helps businesses become discoverable inside AI-powered platforms such as ChatGPT, Gemini and Perplexity by strengthening entities, authority and structured signals.",
  },
  {
    q: "Do businesses still need SEO?",
    a: "Yes. SEO remains foundational. Modern strategies combine SEO, AEO and GEO so your business is visible across both traditional search engines and AI-driven discovery experiences.",
  },
  {
    q: "Do you provide content creation?",
    a: "Yes — including SEO content strategy, pillar pages, topic clusters, FAQs and authority content engineered for both search engines and answer engines.",
  },
  {
    q: "How is ROI measured?",
    a: "We measure what matters to your business: traffic, visibility, conversions, qualified leads and AI search presence — reported through clear executive dashboards.",
  },
];

/* ---------- page ---------- */
function SearchVisibilityPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">SEO, AEO &amp; GEO Services</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Search Visibility Partner — SEO + AEO + GEO
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Be found <em className="text-brand not-italic">everywhere</em> your customers search.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              At Ace360degree, we help businesses become discoverable across traditional search
              engines and AI-powered platforms. Our integrated SEO, AEO and GEO approach ensures
              your brand appears where customers search, ask questions and interact with AI
              assistants — from Google and Bing to ChatGPT, Gemini, Perplexity, Claude and Voice.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Get Search Visibility Audit <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Talk To A Search Strategy Expert <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Search Surfaces", v: "10+" },
                { k: "Industries", v: "12+" },
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-dark/10 bg-light">
              <img
                src={heroImg}
                alt="Search visibility across Google, AI search engines and voice assistants"
                className="h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 p-6 flex flex-col">
                <p className="text-[11px] uppercase tracking-[0.3em] text-brand font-semibold">
                  Search Ecosystem
                </p>
                <p className="mt-2 font-serif text-2xl leading-snug">
                  Visibility, mapped across every surface that matters.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {[
                    "Google",
                    "Bing",
                    "AI Overviews",
                    "ChatGPT",
                    "Gemini",
                    "Perplexity",
                    "Claude",
                    "Voice Search",
                  ].map((s) => (
                    <div
                      key={s}
                      className="border border-dark/15 bg-canvas/80 backdrop-blur px-3 py-2 text-xs font-semibold tracking-wide"
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div className="mt-auto bg-canvas/90 backdrop-blur p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                  <p className="font-serif text-xl mt-1">
                    We don't chase rankings. We build digital authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Overview
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Search visibility is the new competitive advantage.
              </h2>
            </div>
            <div className="lg:col-span-7 text-dark/75 text-lg leading-relaxed space-y-4">
              <p>
                Search behaviour is evolving rapidly. Customers no longer rely only on Google.
                They ask questions to ChatGPT. They scan AI Overviews. They research through
                Gemini and Perplexity. They get recommendations from voice assistants.
              </p>
              <p>
                Businesses need visibility across all of these environments — not just one.
                Ace360degree helps organisations build long-term discoverability through
                integrated SEO, AEO and GEO strategies designed for how people actually search today.
              </p>
              <p className="font-serif text-2xl text-dark pt-2">
                We don't chase rankings. We build digital authority.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. SERVICES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                  Our Search Visibility Services
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete discipline — built for traditional and AI search.
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

      {/* 4. WHY SEO IS EVOLVING */}
      <Reveal>
        <section className="bg-dark text-canvas">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                The Future Of Search
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                The future of search is SEO + AEO + GEO.
              </h2>
              <p className="mt-4 text-canvas/70">
                Three disciplines, one outcome — be found, be chosen, be referenced. The
                businesses that win tomorrow will optimise for all three today.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-px bg-canvas/10 border border-canvas/10">
              {pillars.map((p) => (
                <div key={p.label} className="bg-dark p-8 group hover:bg-brand/10 transition-colors">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                    {p.label}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">{p.headline}</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.surfaces.map((s) => (
                      <span
                        key={s}
                        className="border border-canvas/25 px-3 py-1 text-xs tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 font-serif text-2xl md:text-3xl max-w-3xl">
              The businesses that win tomorrow will optimise for all three today.
            </p>
          </div>
        </section>
      </Reveal>

      {/* 5. FRAMEWORK */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                The Ace360degree Search Visibility Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                How we build durable visibility — systematically.
              </h2>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-px bg-dark/10 border border-dark/10">
              {framework.map((f, i) => (
                <div key={f.step} className="bg-canvas p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl">{f.step}</h3>
                  <p className="mt-4 text-sm text-dark/70 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. TOOLS */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                  Tools &amp; Technologies
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Data-driven decisions. Not guesswork.
                </h2>
              </div>
              <p className="max-w-md text-dark/70">
                An integrated stack covering traditional search, technical health, content
                intelligence and emerging AI search platforms.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-dark/10 border border-dark/10">
              {tools.map((t) => (
                <div
                  key={t}
                  className="bg-canvas px-5 py-6 text-sm font-semibold tracking-wide hover:bg-brand/10 transition-colors"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. SUCCESS STORIES */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Search Visibility Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Visibility, translated into measurable business outcomes.
              </h2>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {stories.map((s) => (
                <article
                  key={s.client}
                  className="border border-dark/10 p-8 bg-canvas hover:border-dark transition-colors"
                >
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
                      <dd className="mt-1 text-dark/75">{s.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.25em] text-dark/55">Outcome</dt>
                      <dd className="mt-1 text-dark/75">{s.outcome}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                View Full Case Studies <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose Ace360degree for search visibility.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine strategic SEO, answer engine optimisation and generative search
                expertise with deep marketing and technology capability — built for organisations
                that want sustainable visibility, not short-term tricks.
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

      {/* 9. FAQ */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                FAQ
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Questions, answered.
              </h2>
              <p className="mt-5 text-dark/70">
                A clearer view of how modern search visibility — across SEO, AEO and GEO —
                actually works.
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

      {/* 10. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
            Be Found. Be Chosen. Be Remembered.
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Be found. Be <em className="text-brand not-italic">chosen</em>. Be remembered.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Build sustainable search visibility across Google, AI search engines and emerging
            discovery platforms — engineered for long-term business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
              >
              Schedule Search Strategy Consultation <span aria-hidden>→</span>
            </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-canvas/30 px-6 py-3.5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-canvas hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
              Get Free Search Visibility Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
