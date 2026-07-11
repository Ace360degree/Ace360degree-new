import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseRexello from "@/assets/case-rexello.jpg";

export const Route = createFileRoute("/youtube-growth-channel-strategy")({
  component: YouTubeGrowthPage,
  head: () => ({
    meta: [
      {
        title:
          "YouTube Growth & Channel Strategy Services Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a YouTube Growth & Audience Development Partner helping businesses, founders and brands build visibility, authority and communities through strategic video ecosystems, YouTube SEO and content strategy.",
      },
      {
        property: "og:title",
        content: "YouTube Growth & Channel Strategy Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Build Authority. Grow Audiences. Create Influence. Strategic YouTube ecosystems that attract audiences, strengthen authority and support long-term business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/youtube-growth-channel-strategy" },
    ],
    links: [{ rel: "canonical", href: "/youtube-growth-channel-strategy" }],
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
    q: "No Consistent Audience Growth?",
    s: "Build sustainable subscriber and viewer growth through strategic content ecosystems designed for long-term community development.",
    tag: "Growth",
  },
  {
    q: "Videos Getting Views But No Business Results?",
    s: "Align every piece of content with business objectives — turning attention into authority, and authority into enquiry.",
    tag: "Alignment",
  },
  {
    q: "Struggling To Build Authority?",
    s: "Create educational and thought leadership content that positions your brand as the voice others reference and audiences trust.",
    tag: "Authority",
  },
  {
    q: "Founder Not Visible Enough?",
    s: "Use YouTube to strengthen personal and executive brands — building the kind of visibility that opens doors and accelerates trust.",
    tag: "Visibility",
  },
  {
    q: "Low Discoverability?",
    s: "Improve visibility through YouTube SEO, search optimization and strategic metadata that places your content in front of the right audiences.",
    tag: "Discoverability",
  },
  {
    q: "Need Better Content Direction?",
    s: "Develop content systems aligned with audience interests — turning sporadic uploads into consistent, purpose-driven publishing.",
    tag: "Direction",
  },
];

const solutions = [
  {
    name: "Channel Strategy & Positioning",
    outcome: "A clearly defined channel identity that attracts the right audience and supports business goals.",
    services: [
      "Channel Architecture",
      "Audience Strategy",
      "Content Positioning",
      "Growth Roadmaps",
    ],
  },
  {
    name: "YouTube SEO",
    outcome: "Improved discoverability through search-optimized titles, metadata and thumbnail strategy.",
    services: [
      "Keyword Research",
      "Title Optimization",
      "Thumbnail Strategy",
      "Metadata Optimization",
      "Video Discoverability",
    ],
  },
  {
    name: "Content Planning",
    outcome: "Editorial systems that remove guesswork and build sustainable publishing momentum.",
    services: [
      "Editorial Calendars",
      "Series Development",
      "Content Pillars",
      "Topic Research",
    ],
  },
  {
    name: "Founder & Thought Leadership Channels",
    outcome: "Executive branding that turns founders and leaders into recognised industry voices.",
    services: [
      "Executive Branding",
      "Industry Commentary",
      "Educational Content",
      "Authority Building",
    ],
  },
  {
    name: "Corporate YouTube Channels",
    outcome: "Brand channels that educate customers, showcase expertise and strengthen market presence.",
    services: [
      "Brand Channels",
      "Product Education",
      "Customer Success Stories",
      "Knowledge Content",
    ],
  },
  {
    name: "Analytics & Channel Growth",
    outcome: "Data-driven insights that inform strategy and accelerate channel performance.",
    services: [
      "Subscriber Analysis",
      "Watch Time Optimization",
      "Audience Retention",
      "Growth Reporting",
    ],
  },
];

const framework = [
  { step: "Research", body: "Analyse the audience, the competition and the content landscape to identify where authority and opportunity intersect." },
  { step: "Position", body: "Define the channel identity, content pillars and strategic narrative that differentiate and attract." },
  { step: "Create", body: "Develop content systems, editorial calendars and production workflows built for consistency and quality." },
  { step: "Optimize", body: "Apply YouTube SEO, metadata strategy and thumbnail systems to maximise discoverability and click-through." },
  { step: "Grow", body: "Measure, iterate and amplify — using analytics and audience insight to compound growth over time." },
];

const valuePillars = [
  { t: "Visibility", b: "YouTube is the world's second-largest search engine. Strategic presence puts your brand where audiences already go to learn." },
  { t: "Authority", b: "Educational and thought leadership content positions your brand as the expert others reference — before the first conversation." },
  { t: "Trust", b: "Video builds human connection at scale. Seeing a leader speak, a product work or a story unfold creates confidence that copy alone cannot." },
  { t: "Education", b: "YouTube is where people go to understand. Brands that teach earn attention, loyalty and long-term preference." },
  { t: "Community", b: "Consistent, valuable content turns viewers into subscribers, subscribers into advocates, and advocates into a brand community." },
  { t: "Lead Generation", b: "Strategic content ecosystems guide audiences from awareness to enquiry — generating qualified interest without hard selling." },
];

const stories = [
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "An industrial manufacturer with deep product expertise but limited digital visibility — struggling to reach engineers, specifiers and procurement professionals through traditional channels alone.",
    strategy:
      "Developed a YouTube content ecosystem centred on product education, application guides and industry insight — positioning the brand as a technical authority in the castor and wheel market.",
    outcome:
      "Increased inbound enquiries from specification professionals, stronger dealer confidence and a growing library of evergreen content that continues to attract qualified audiences.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand needing to reach parents and students beyond its immediate geography — building awareness and trust before families ever visited the campus.",
    strategy:
      "Built a YouTube channel strategy combining campus tours, faculty insights, student stories and educational content — creating a virtual window into the institution's culture and quality.",
    outcome:
      "Expanded reach to out-of-city and international audiences, higher-quality admissions enquiries and a digital presence that reflects the institution's standards.",
  },
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech with a multi-product ecosystem that was difficult to explain through static content — needing a channel that could educate partners, customers and stakeholders at scale.",
    strategy:
      "Created a strategic YouTube presence combining product explainers, founder commentary and industry insight — building authority in the fintech space while supporting business development.",
    outcome:
      "Stronger partner onboarding, increased investor understanding and a content library that supports sales, marketing and brand communication across channels.",
  },
];

const whyUs = [
  {
    t: "YouTube + Business Strategy",
    b: "We do not think in videos. We think in business outcomes — and design channel strategy, content systems and growth plans to serve them.",
  },
  {
    t: "SEO Expertise",
    b: "Deep understanding of YouTube search, metadata, keyword strategy and algorithm dynamics — built on years of content marketing and search visibility experience.",
  },
  {
    t: "Thought Leadership Focus",
    b: "We specialise in building authority channels — educational, insight-driven content that positions brands and founders as voices worth following.",
  },
  {
    t: "Founder Branding Capability",
    b: "We help founders and executives build personal brands on YouTube — the kind of visibility that accelerates trust, opens partnerships and strengthens company reputation.",
  },
  {
    t: "Growth-Oriented Planning",
    b: "Every recommendation is tied to a growth metric — subscribers, watch time, retention, enquiry quality — not vanity views or viral chasing.",
  },
  {
    t: "Long-Term Community Building",
    b: "We design for compounding value. Content systems that build audiences over months and years, not one-off campaigns that spike and fade.",
  },
  {
    t: "No Viral Content Chasing",
    b: "We do not optimise for trends or algorithm tricks. We build sustainable, strategic channels that grow through value and consistency.",
  },
  {
    t: "No Vanity Metrics",
    b: "Views without business impact are noise. We focus on metrics that matter — authority, retention, enquiry quality and long-term audience value.",
  },
];

const faqs = [
  {
    q: "What is YouTube Marketing?",
    a: "YouTube marketing is the strategic use of YouTube to build brand visibility, authority and audience. It encompasses channel strategy, content planning, YouTube SEO, audience development and analytics — designed to create long-term business value, not short-term views.",
  },
  {
    q: "How does YouTube help businesses?",
    a: "YouTube is the world's second-largest search engine and a powerful education platform. Businesses use it to build authority, educate customers, strengthen founder visibility, improve discoverability and generate qualified leads — all through content that compounds in value over time.",
  },
  {
    q: "Can founders build personal brands on YouTube?",
    a: "Absolutely. Founder and executive YouTube channels are one of the most effective ways to build personal authority, share industry insight and create the kind of visibility that accelerates trust and opens business opportunities.",
  },
  {
    q: "Do you manage corporate channels?",
    a: "Yes. We design and build corporate YouTube channels that align with brand strategy — covering product education, customer success stories, knowledge content and industry commentary. Every channel is built to serve business objectives.",
  },
  {
    q: "How do you measure growth?",
    a: "We track metrics that reflect strategic value — subscriber growth, watch time, audience retention, click-through rates, search visibility and, most importantly, the business outcomes they drive: enquiries, partnerships and brand authority.",
  },
  {
    q: "Do you provide content strategy?",
    a: "Yes. Content strategy is at the heart of our YouTube practice. We develop editorial calendars, content pillars, series frameworks and topic research systems — all designed to create consistent, valuable content that grows audiences and strengthens authority.",
  },
];

/* ---------- page ---------- */
function YouTubeGrowthPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">YouTube Growth & Channel Strategy</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              YouTube Growth & Audience Development Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              YouTube strategies that build visibility, authority &{" "}
              <em className="text-brand not-italic">business growth.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              YouTube is no longer just a video platform. It is the world's second-largest
              search engine, a powerful education platform and one of the most effective
              channels for building trust at scale. At Ace360degree, we help businesses,
              brands and founders develop YouTube ecosystems that attract audiences,
              strengthen authority and support long-term growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book YouTube Strategy Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Channel Audit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Channels Built", v: "100+" },
                { k: "Focus", v: "Growth · Authority · Community" },
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
                alt="YouTube growth and channel strategy partner for businesses, founders and brands"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Build Authority. Grow Audiences. Create Influence.</p>
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
                The YouTube question is almost always an audience question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                YouTube is not about uploading videos. It is about building a strategic
                content ecosystem — one that attracts the right audience, strengthens
                authority and supports long-term business growth through visibility,
                education and community.
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
                  Our YouTube Growth Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Strategic solutions for every stage of channel growth.
                </h2>
                <p className="mt-4 text-dark/70">
                  From channel architecture to content systems, SEO and analytics — we provide
                  the strategic infrastructure businesses need to build sustainable YouTube
                  presence.
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
                Our YouTube Growth Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to building channels that grow.
              </h2>
              <p className="mt-4 text-dark/70">
                Every successful YouTube channel is built on strategic foundations — not
                guesswork. Our five-stage framework ensures every decision is informed,
                every action is aligned and every outcome is measurable.
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

      {/* 5. WHY YOUTUBE MATTERS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why YouTube Matters
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Great channels don't chase views. They build influence.
              </h2>
              <p className="mt-4 text-dark/70">
                YouTube is where audiences go to learn, research and decide. Brands that
                show up with value earn attention, trust and long-term loyalty.
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
                Real brands. Real channels. Real growth.
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
                      alt={`${story.client} YouTube growth case study`}
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
                View Growth Case Studies <span aria-hidden>→</span>
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
                The difference between a video service and a growth partner.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not create content for views. We build strategic video ecosystems
                that compound in value — strengthening authority, growing audiences and
                supporting long-term business growth.
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
              Start Building Your Channel
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Turn Videos Into Influence.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Build a YouTube presence that strengthens authority, grows audiences and
              supports long-term business growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book YouTube Strategy Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Channel Audit <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
