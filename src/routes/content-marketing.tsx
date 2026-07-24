import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.a16.jpg";
import caseCosmos from "@/assets/case-cosmos.a17.jpg";
import caseRexello from "@/assets/case-rexello.a18.jpg";
import caseAmigo from "@/assets/case-amigo.a19.jpg";
import caseMos from "@/assets/case-mos.a21.jpg";

export const Route = createFileRoute("/content-marketing")({
  component: ContentMarketingPage,
  head: () => ({
    meta: [
      {
        title:
          "Content Marketing Services Mumbai | Content Strategy & Thought Leadership | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Content Strategy & Thought Leadership Partner helping businesses build authority, improve search visibility, strengthen trust and create long-term growth through strategic content — SEO, AEO, GEO, thought leadership and multimedia storytelling.",
      },
      {
        property: "og:title",
        content:
          "Content Strategy & Thought Leadership Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Build authority, earn trust and drive growth through strategic content ecosystems — SEO content, thought leadership, founder branding, digital PR and multimedia storytelling.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/content-marketing" },
    ],
    links: [{ rel: "canonical", href: "/content-marketing" }],
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
    q: "Not Getting Found Online?",
    s: "Build content that improves discoverability across search engines and AI-powered search platforms — so customers find you before they find your competitors.",
    tag: "Discoverability",
  },
  {
    q: "Struggling To Build Authority?",
    s: "Position your business and leadership team as trusted industry voices through strategic content that demonstrates expertise and earns credibility.",
    tag: "Authority Building",
  },
  {
    q: "Creating Content Without Results?",
    s: "Align every piece of content with business goals and customer journeys — so content becomes a growth engine, not a cost centre.",
    tag: "Business Alignment",
  },
  {
    q: "Need Better Lead Generation?",
    s: "Use content to attract, educate and nurture prospects — building trust long before the first sales conversation.",
    tag: "Lead Generation",
  },
  {
    q: "Founder Not Visible Enough?",
    s: "Develop thought leadership content that builds influence, opens doors and creates opportunities for founders and executives.",
    tag: "Founder Branding",
  },
  {
    q: "Inconsistent Brand Messaging?",
    s: "Create content systems that strengthen communication across channels — ensuring clarity, consistency and confidence in every touchpoint.",
    tag: "Brand Consistency",
  },
];

const solutions = [
  {
    name: "SEO Content & Search Visibility",
    outcome: "Content designed for discoverability across every search environment.",
    services: [
      "SEO Articles",
      "Topic Clusters",
      "Pillar Pages",
      "FAQ Content",
      "Search Visibility Content",
    ],
  },
  {
    name: "Thought Leadership Content",
    outcome: "Position leaders and brands as authorities in their industry.",
    services: [
      "Founder Articles",
      "LinkedIn Thought Leadership",
      "Expert Commentary",
      "Industry Insights",
      "Authority Building Content",
    ],
  },
  {
    name: "Website & Conversion Content",
    outcome: "Content that supports customer acquisition and conversion.",
    services: [
      "Website Copywriting",
      "Landing Pages",
      "Service Pages",
      "Product Pages",
      "Conversion Content",
    ],
  },
  {
    name: "Digital PR & Brand Storytelling",
    outcome: "Strengthen visibility and credibility through strategic storytelling.",
    services: [
      "Press Releases",
      "Media Content",
      "Brand Stories",
      "Corporate Announcements",
      "PR Assets",
    ],
  },
  {
    name: "Email Marketing Content",
    outcome: "Build relationships and nurture leads through strategic communication.",
    services: [
      "Newsletters",
      "Lead Nurture Sequences",
      "Campaign Emails",
      "Customer Retention Content",
    ],
  },
  {
    name: "Video, Podcast & Multimedia Content",
    outcome: "Transform expertise into engaging, multi-format storytelling.",
    services: [
      "Podcast Scripts",
      "YouTube Scripts",
      "Video Content Strategy",
      "Webinar Content",
      "Repurposing Frameworks",
    ],
  },
];

const framework = [
  { step: "Research", body: "Understand audience needs, search intent and industry opportunities to find where content can create real business value." },
  { step: "Strategize", body: "Develop content plans aligned with business goals — mapping topics, formats and channels to customer journeys and growth objectives." },
  { step: "Create", body: "Produce content optimized for people and platforms — search engines, AI systems, social media and direct engagement." },
  { step: "Amplify", body: "Distribute through search, social, PR and multimedia channels to reach the right audience at the right moment." },
  { step: "Measure", body: "Track visibility, engagement, authority signals and business outcomes to continuously refine and improve." },
];

const discoveryPillars = [
  {
    label: "SEO",
    headline: "Search Engine Optimization",
    description: "Improve discoverability on Google and Bing through content designed for search intent, relevance and authority.",
  },
  {
    label: "AEO",
    headline: "Answer Engine Optimization",
    description: "Appear in featured snippets, AI overviews and voice search by structuring content to directly answer customer questions.",
  },
  {
    label: "GEO",
    headline: "Generative Engine Optimization",
    description: "Increase visibility in ChatGPT, Gemini, Perplexity and AI-generated responses by building entity authority and structured signals.",
  },
];

const stories = [
  {
    img: caseCosmos,
    client: "Cosmos Seals",
    challenge:
      "A specialised B2B manufacturer with deep technical expertise but almost no digital content presence, resulting in near-zero organic discovery.",
    strategy:
      "Developed a topical authority content strategy covering applications, industries and technical topics — with SEO-optimised articles, FAQ structures and AEO-ready content.",
    outcome:
      "Significant growth in organic visibility, stronger inbound discovery from global buyers and improved search presence across technical search categories.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "Heritage industrial brand with strong product reputation but limited digital authority and no systematic content marketing programme.",
    strategy:
      "Created product-focused content clusters, industry guides, technical blog content and conversion-optimised landing pages to support the sales team.",
    outcome:
      "Improved organic traffic, stronger sales-enablement content and clearer differentiation in global industrial markets through digital authority.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "Strong offline reputation in education but limited digital footprint in admissions-related search and weak content to support student decision journeys.",
    strategy:
      "Built content clusters for courses, careers and student outcomes — combined with FAQ content, local landing pages and voice-search-ready formats.",
    outcome:
      "Material lift in admissions enquiries, stronger content-supported decision journeys and improved discoverability for course-related searches.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "Growing fintech brand needing to build trust and authority through content in a category where credibility is the primary purchase driver.",
    strategy:
      "Developed thought leadership content, executive bylines, industry commentary and SEO content programme aligned with search demand and trust signals.",
    outcome:
      "Stronger industry recognition, improved stakeholder confidence and increased inbound partnership conversations from enterprise clients.",
  },
];

const whyUs = [
  {
    t: "Content + Search Expertise",
    b: "We create content that performs across SEO, AEO and GEO — not just readable articles, but discoverable, authoritative assets.",
  },
  {
    t: "Thought Leadership Focus",
    b: "We help founders, executives and brands build genuine authority — not generic blog posts, but influential voices in their industries.",
  },
  {
    t: "Marketing + Branding + Technology Perspective",
    b: "Content sits at the intersection of brand, marketing and technology. We bring all three perspectives to every strategy.",
  },
  {
    t: "Multi-Format Content Creation",
    b: "From written content to video scripts, podcasts and webinars — we create content ecosystems, not isolated pieces.",
  },
  {
    t: "Business-Oriented Storytelling",
    b: "Every story, article and asset is anchored to a business outcome — authority, trust, leads or growth — never content for its own sake.",
  },
  {
    t: "Long-Term Authority Building",
    b: "We focus on compounding authority and sustainable visibility — not short-term traffic spikes that fade as quickly as they arrive.",
  },
  {
    t: "No Content For The Sake Of Publishing",
    b: "We do not believe in content calendars filled for the sake of activity. Every piece must earn its place in your business strategy.",
  },
];

const faqs = [
  {
    q: "How often should businesses publish content?",
    a: "Frequency matters less than strategic consistency. We design content rhythms based on audience needs, search demand and business goals — not arbitrary publishing schedules. Quality and relevance always outperform volume.",
  },
  {
    q: "What types of content do you create?",
    a: "We create a wide range: SEO articles, thought leadership, website copy, landing pages, email sequences, press releases, video scripts, podcast content and multimedia storytelling. Everything is tailored to your audience and objectives.",
  },
  {
    q: "Can content improve SEO performance?",
    a: "Absolutely. Strategic content is the foundation of modern SEO. Well-structured, authoritative content improves rankings, earns backlinks and strengthens topical authority — which search engines reward over time.",
  },
  {
    q: "What is AEO?",
    a: "Answer Engine Optimization is the practice of structuring content so it appears in featured snippets, AI overviews and voice search results. It means being chosen as the answer — not just appearing in the results list.",
  },
  {
    q: "What is GEO?",
    a: "Generative Engine Optimization helps businesses become discoverable inside AI-powered platforms such as ChatGPT, Gemini and Perplexity. It involves building entity authority, structured signals and trusted references that AI systems cite.",
  },
  {
    q: "Do you create content for founders and executives?",
    a: "Yes. Founder branding and executive thought leadership are core to our approach. We develop content that builds influence, opens doors and positions leadership teams as credible industry voices.",
  },
  {
    q: "How do you measure content ROI?",
    a: "We track what matters: search visibility, engagement, authority signals, lead generation, conversion influence and business outcomes. Every content strategy includes clear KPIs and regular performance reporting.",
  },
];

/* ---------- page ---------- */
function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Content Marketing</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Content Strategy & Thought Leadership Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Content marketing that builds <em className="text-brand not-italic">authority,</em>{" "}
              visibility & business growth.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Content is no longer just a marketing asset. It is how customers discover your business,
              evaluate your expertise and build trust before making decisions. At Ace360degree, we help
              businesses create strategic content ecosystems that improve search visibility, establish
              authority and support long-term growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Create My Content Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Book Content Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Content Projects", v: "300+" },
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
                src={heroImg}
                alt="Strategic content marketing and thought leadership"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Build authority. Earn trust. Drive growth.</p>
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
                Content Challenges We Help Solve
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Start with the business problem. The content follows.
              </h2>
              <p className="mt-4 text-dark/70">
                Most content fails because it is created without a clear connection to business outcomes.
                We begin by diagnosing the real challenge — then design the content strategy that solves it.
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
                  Our Content Marketing Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete content practice — built for authority and growth.
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
                The Ace360degree Content Authority Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                How we build content that compounds authority — systematically.
              </h2>
            </div>

            <div className="mt-14 grid md:grid-cols-5 gap-px bg-canvas/10 border border-canvas/10">
              {framework.map((f, i) => (
                <div key={f.step} className="bg-dark p-7 group hover:bg-brand/10 transition-colors">
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

      {/* 5. CONTENT FOR MODERN DISCOVERY */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Content For Modern Discovery
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Content powers SEO, AEO & GEO.
              </h2>
              <p className="mt-4 text-dark/70">
                The future of content is not just ranking. It is being discovered, referenced and trusted
                across every search environment — from traditional engines to AI assistants.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
              {discoveryPillars.map((p) => (
                <div key={p.label} className="bg-canvas p-8 group hover:bg-brand/10 transition-colors">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                    {p.label}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-snug">{p.headline}</h3>
                  <p className="mt-4 text-sm text-dark/70 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 font-serif text-2xl md:text-3xl max-w-3xl">
              The future of content is not just ranking. It is being discovered, referenced and trusted
              across every search environment.
            </p>
          </div>
        </section>
      </Reveal>

      {/* 6. SUCCESS STORIES */}
      <Reveal>
        <section className="bg-light">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Content Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Authority, built through content — and measured in business outcomes.
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
                      alt={`${s.client} content marketing case study`}
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

      {/* 7. WHY ACE360DEGREE */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Ace360degree
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Why businesses choose Ace360degree for content marketing.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine strategic content expertise with search intelligence, brand thinking and
                technology perspective — built for organisations that want authority and growth,
                not just published pages.
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
                A clearer view of how strategic content marketing works — and how it drives real
                business outcomes.
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
            Build Authority. Earn Trust. Drive Growth.
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Turn expertise into <em className="text-brand not-italic">influence.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Build a content ecosystem that improves visibility, strengthens trust and supports
            sustainable business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
            >
              Create My Content Strategy <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-canvas/30 px-6 py-3.5 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-canvas hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
            >
              Book Content Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
