import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseRexello from "@/assets/case-rexello.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";

export const Route = createFileRoute("/event-marketing-brand-experiences")({
  component: EventMarketingPage,
  head: () => ({
    meta: [
      {
        title:
          "Event Marketing & Brand Experiences Services Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is an Event Marketing & Brand Experience Partner helping businesses create memorable experiences, strengthen relationships and amplify brand impact through strategic event marketing, experiential campaigns and brand activations.",
      },
      {
        property: "og:title",
        content: "Event Marketing & Brand Experiences Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Create Moments That Move People And Brands. Strategic event experiences that build connections, strengthen visibility and support long-term business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/event-marketing-brand-experiences" },
    ],
    links: [{ rel: "canonical", href: "/event-marketing-brand-experiences" }],
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
    q: "Need Better Audience Engagement?",
    s: "Create experiences that encourage participation and interaction — designing moments that invite your audience to be part of the story, not just spectators.",
    tag: "Engagement",
  },
  {
    q: "Launching A Product Or Service?",
    s: "Build excitement and visibility through launch experiences that generate anticipation, capture attention and position your offering with impact from day one.",
    tag: "Launch",
  },
  {
    q: "Trade Shows Not Delivering Results?",
    s: "Create exhibition experiences that generate meaningful business opportunities — turning foot traffic into qualified conversations and brand impressions into relationships.",
    tag: "Exhibition",
  },
  {
    q: "Need Stronger Brand Recall?",
    s: "Use immersive experiences to create memorable impressions — building the kind of emotional connection that keeps your brand top-of-mind long after the event ends.",
    tag: "Recall",
  },
  {
    q: "Building Customer Communities?",
    s: "Create events that strengthen relationships and loyalty — turning customers into advocates and one-time attendees into long-term community members.",
    tag: "Community",
  },
  {
    q: "Want To Extend Event Impact?",
    s: "Amplify reach through social media, PR and video content — turning a single event into a multi-channel campaign that continues generating value for weeks and months.",
    tag: "Amplification",
  },
];

const solutions = [
  {
    name: "Corporate Events & Conferences",
    outcome: "Professional gatherings that strengthen internal culture, engage stakeholders and position your brand as a leader within your industry.",
    services: [
      "Corporate Gatherings",
      "Annual Events",
      "Leadership Summits",
      "Conferences",
    ],
  },
  {
    name: "Product Launches",
    outcome: "Launch experiences that generate excitement, capture media attention and position new products with maximum impact and market visibility.",
    services: [
      "Launch Strategy",
      "Product Reveals",
      "Media Events",
      "Customer Launch Experiences",
    ],
  },
  {
    name: "Brand Activations",
    outcome: "Experiential marketing campaigns that bring brands to life through interactive engagement, creating memorable consumer moments and emotional connections.",
    services: [
      "Experiential Marketing",
      "Consumer Engagement",
      "Interactive Campaigns",
      "On-Ground Activations",
    ],
  },
  {
    name: "Trade Shows & Exhibitions",
    outcome: "Exhibition experiences that attract the right visitors, generate qualified leads and create lasting brand impressions in competitive industry environments.",
    services: [
      "Expo Strategy",
      "Stall Design",
      "Exhibition Marketing",
      "Lead Generation Programs",
    ],
  },
  {
    name: "Hybrid & Virtual Events",
    outcome: "Digital and hybrid experiences that extend your reach, engage remote audiences and create meaningful connections across geographic boundaries.",
    services: [
      "Virtual Conferences",
      "Hybrid Events",
      "Live Streaming",
      "Digital Engagement",
    ],
  },
  {
    name: "Event Amplification",
    outcome: "Post-event marketing that extends the life of your experience through content, coverage and strategic distribution across digital channels.",
    services: [
      "Social Media Coverage",
      "PR Support",
      "Video Highlights",
      "Post-Event Marketing",
    ],
  },
];

const framework = [
  { step: "Imagine", body: "Define the experience objective — understanding your audience, brand story and business goals to design moments that create real impact." },
  { step: "Design", body: "Craft the experience blueprint — from concept and narrative to spatial design, interaction points and the emotional journey you want guests to feel." },
  { step: "Execute", body: "Deliver with precision — managing every detail from guest experience to brand touchpoints, ensuring the execution matches the vision." },
  { step: "Amplify", body: "Extend the experience beyond the venue through social media, PR, video content and digital marketing that multiplies reach and impact." },
  { step: "Measure", body: "Evaluate engagement, sentiment, reach and business outcomes — learning what worked and building intelligence for future experiences." },
];

const valuePillars = [
  { t: "Engagement", b: "Events create the kind of active participation that no advertisement can match. When people experience your brand firsthand, engagement becomes genuine and lasting." },
  { t: "Trust", b: "Face-to-face experiences build trust faster than any digital touchpoint. Personal interactions create the confidence that drives business relationships forward." },
  { t: "Community", b: "Events transform customers, partners and employees into communities. Shared experiences create bonds that strengthen loyalty and advocacy over time." },
  { t: "Visibility", b: "A well-executed event generates visibility across channels — social media, press coverage, word-of-mouth — creating awareness that extends far beyond the guest list." },
  { t: "Brand Recall", b: "People remember experiences far longer than messages. A memorable brand experience creates the kind of emotional imprint that keeps your brand top-of-mind." },
  { t: "Business Opportunities", b: "Every event is a business opportunity — whether generating leads, strengthening partnerships, launching products or building the relationships that drive growth." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech brand needing to celebrate its 14th anniversary with an event that reinforced internal culture, demonstrated company growth to stakeholders and created content for ongoing brand communication.",
    strategy:
      "Designed a corporate celebration combining milestone storytelling, leadership messaging, employee recognition and content capture — creating an experience that strengthened internal pride while generating months of marketing material.",
    outcome:
      "Stronger internal culture alignment, stakeholder confidence in brand trajectory and a library of content that supported subsequent communication and recruitment efforts.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "An industrial manufacturer exhibiting at major trade shows where competition for attention was intense — needing to create an exhibition experience that generated qualified conversations and differentiated the brand from international competitors.",
    strategy:
      "Developed an expo activation strategy combining strategic stall design, product demonstration experiences, visitor engagement programs and lead qualification systems — turning exhibition presence into measurable business opportunity.",
    outcome:
      "Increased qualified leads from exhibition participation, stronger brand differentiation on the show floor and improved ROI from trade show investments.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand seeking to engage prospective students, parents and the community through events that communicated institutional values, showcased outcomes and built emotional connections with families.",
    strategy:
      "Created a series of education event activations including open experiences, community programs, student showcases and parent engagement events — designing each touchpoint to communicate brand promise and build enrollment confidence.",
    outcome:
      "Stronger community relationships, improved parent engagement and event experiences that became reference points for prospective families evaluating educational options.",
  },
];

const whyUs = [
  {
    t: "Brand-Led Event Strategy",
    b: "We design experiences around brand objectives — not logistics. Every event serves a strategic purpose, whether building awareness, strengthening relationships or driving business outcomes.",
  },
  {
    t: "Marketing + Experience Thinking",
    b: "We combine experiential design with marketing strategy — ensuring that every event is not just well-executed, but also well-promoted, well-covered and well-remembered.",
  },
  {
    t: "Integrated Promotion Support",
    b: "We do not stop at the venue door. Our events include amplification through social media, PR, video content and digital marketing that extends reach and multiplies impact.",
  },
  {
    t: "Corporate & B2B Expertise",
    b: "We understand the dynamics of corporate events, leadership gatherings, trade shows and product launches — designing experiences that match the professionalism and expectations of business audiences.",
  },
  {
    t: "Nationwide Execution Capability",
    b: "From Mumbai to across India, we have the network and capability to execute brand experiences at scale — whether a single city activation or a multi-location campaign.",
  },
  {
    t: "Creative + Operational Excellence",
    b: "We balance bold creative vision with precise execution — ensuring that imaginative concepts are delivered with the professionalism your brand demands.",
  },
  {
    t: "No Cookie-Cutter Events",
    b: "Every experience is designed for your brand, your audience and your objectives. We do not recycle concepts — we create experiences that could only belong to you.",
  },
  {
    t: "No Experiences Without Purpose",
    b: "We do not create spectacle for its own sake. Every element serves a strategic goal — engagement, relationship, recall or conversion. Experiences with intention.",
  },
];

const faqs = [
  {
    q: "What types of events do you manage?",
    a: "We design and execute corporate events, product launches, brand activations, trade show exhibitions, hybrid events, virtual conferences and community-building experiences. Our focus is on events that serve strategic brand and business objectives — not logistics management for its own sake.",
  },
  {
    q: "Can you handle hybrid and virtual events?",
    a: "Yes. We design hybrid and virtual experiences that engage remote audiences with the same intentionality as in-person events — using digital platforms, interactive elements and content strategies that create genuine connection across screens.",
  },
  {
    q: "Do you support exhibitions and trade shows?",
    a: "Yes. We develop exhibition strategies, stall experiences and trade show activations designed to generate qualified leads, differentiate your brand and create meaningful business opportunities on the show floor.",
  },
  {
    q: "Can you manage event promotion?",
    a: "Yes. Every event we create includes amplification support — social media coverage, PR coordination, video content and post-event marketing that extends the life and reach of your experience across channels.",
  },
  {
    q: "How do you measure event success?",
    a: "We measure strategic outcomes — engagement quality, lead generation, brand sentiment, social reach, content performance and business opportunities created — rather than simple attendance numbers. Success is impact, not headcount.",
  },
  {
    q: "Do you provide stall and experience design?",
    a: "Yes. We design stall experiences, interactive installations and spatial concepts that create immersive brand moments — combining visual design, interaction planning and visitor journey mapping to deliver memorable experiences.",
  },
];

/* ---------- page ---------- */
function EventMarketingPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Event Marketing & Brand Experiences</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Event Marketing & Brand Experience Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Event experiences that build{" "}
              <em className="text-brand not-italic">connections,</em>{" "}
              visibility & impact.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Events are more than gatherings. They are opportunities to create meaningful
              interactions, strengthen relationships and bring brands to life. At Ace360degree,
              we help businesses design and execute event experiences that generate engagement,
              strengthen recall and support business objectives. Whether launching products,
              engaging customers or building communities, we create experiences people remember.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Plan My Brand Experience <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Book Event Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Events Delivered", v: "200+" },
                { k: "Focus", v: "Experience · Engagement · Growth" },
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
                alt="Event marketing and brand experience partner creating memorable business experiences"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Create Moments That Move People And Brands.</p>
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
                The event question is almost always a relationship question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Event marketing is not about logistics. It is about creating meaningful
                interactions — moments that strengthen relationships, build communities and
                turn brand presence into brand loyalty. Every experience is an opportunity to
                communicate values, demonstrate capability and create the kind of emotional
                connection that drives long-term business growth.
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
                  Our Event Marketing Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Strategic experiences for engagement and growth.
                </h2>
                <p className="mt-4 text-dark/70">
                  From corporate events and product launches to brand activations and trade
                  show experiences — we design the strategic experiences that turn gatherings
                  into growth opportunities.
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
                Our Event Experience Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to creating experiences.
              </h2>
              <p className="mt-4 text-dark/70">
                Great experiences do not happen by accident. Our five-stage framework creates
                the strategic thinking, creative design and amplification systems that turn
                events into powerful brand and business assets.
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

      {/* 5. WHY EXPERIENCES MATTER */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Experiences Matter
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                People may forget advertisements. They remember experiences.
              </h2>
              <p className="mt-4 text-dark/70">
                In a world of digital noise and shrinking attention spans, experiences create
                the kind of emotional imprint that advertising cannot buy. When people feel
                your brand, they remember it. When they remember it, they choose it.
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
                Real brands. Real experiences. Real impact.
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
                      alt={`${story.client} event marketing and brand experience case study`}
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
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                View Event Case Studies <span aria-hidden>→</span>
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
                Why businesses choose Ace360degree for event marketing.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not manage events. We create strategic experiences — designed to strengthen
                relationships, build communities and turn brand presence into business impact.
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
              Start Creating Memorable Experiences
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Create experiences that people remember.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Design event experiences that strengthen relationships, increase visibility and
              support long-term business growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Request Event Proposal <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Book Event Strategy Session <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
