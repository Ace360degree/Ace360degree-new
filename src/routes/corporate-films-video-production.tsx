import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.222.jpg";
import caseMos from "@/assets/case-mos.414.jpg";
import  caseRexello from "@/assets/case-amigo.151.jpg";
import  caseAmigo from "@/assets/case-rexello.515.jpg";
import casePain from "@/assets/case-living.212.jpg";

export const Route = createFileRoute("/corporate-films-video-production")({
  component: CorporateFilmsPage,
  head: () => ({
    meta: [
      {
        title:
          "Corporate Film Production Mumbai | Brand Films & Corporate Storytelling | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is a Corporate Storytelling & Brand Film Partner helping businesses build trust, credibility and connection through corporate films, founder stories, employer branding videos and customer testimonials.",
      },
      {
        property: "og:title",
        content: "Corporate Films & Brand Storytelling Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Tell The Story Behind The Brand. Corporate films, founder stories, employer branding and testimonial videos that strengthen trust, credibility and stakeholder confidence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/corporate-films-video-production" },
    ],
    links: [{ rel: "canonical", href: "/corporate-films-video-production" }],
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
    q: "Potential Customers Don't Understand What You Do?",
    s: "Translate your business into a story people grasp in minutes — clarifying what you offer, who you serve and why it matters, long before the first sales conversation.",
    tag: "Clarity",
  },
  {
    q: "Need Stronger Brand Credibility?",
    s: "Build trust through authentic visual narratives that put real people, real work and real outcomes on screen — not stock language or hollow claims.",
    tag: "Credibility",
  },
  {
    q: "Sales Teams Need Better Presentation Assets?",
    s: "Equip business development with films that open doors — corporate stories that travel into pitches, proposals, partner meetings and investor rooms.",
    tag: "Sales Enablement",
  },
  {
    q: "Employer Brand Not Strong Enough?",
    s: "Showcase culture, values and the people behind the business — attracting talent that aligns with who you are and how you work.",
    tag: "Talent",
  },
  {
    q: "Complex Operations Difficult To Explain?",
    s: "Use visual storytelling to simplify scale, capability and process — turning what is hard to describe into something easy to believe.",
    tag: "Simplification",
  },
  {
    q: "Need Better Corporate Visibility?",
    s: "Create branded video content that strengthens presence across digital, social, sales and investor channels — keeping your story consistent everywhere it travels.",
    tag: "Visibility",
  },
];

const solutions = [
  {
    name: "Corporate Brand Films",
    outcome: "Films that introduce who you are, what you do and why you matter — with clarity and conviction.",
    services: [
      "Corporate Profiles",
      "Company Overview Films",
      "Brand Story Videos",
      "Leadership Films",
    ],
  },
  {
    name: "Founder & Leadership Stories",
    outcome: "Human-led narratives that put vision, conviction and credibility at the centre of the brand.",
    services: [
      "Founder Interviews",
      "Vision Videos",
      "Executive Communication",
      "Thought Leadership Videos",
    ],
  },
  {
    name: "Client Testimonials & Success Stories",
    outcome: "Authentic customer voices that translate satisfaction into trust and consideration.",
    services: [
      "Customer Testimonials",
      "Case Study Videos",
      "Success Stories",
      "Client Interviews",
    ],
  },
  {
    name: "Manufacturing & Facility Films",
    outcome: "Visual stories that communicate scale, capability and process to partners, customers and investors.",
    services: [
      "Factory Walkthroughs",
      "Process Videos",
      "Plant Tours",
      "Industrial Storytelling",
    ],
  },
  {
    name: "Employer Branding Videos",
    outcome: "Culture-led films that strengthen recruitment, retention and pride in the workplace.",
    services: [
      "Culture Films",
      "Recruitment Videos",
      "Employee Stories",
      "Workplace Showcases",
    ],
  },
  {
    name: "Event & Corporate Coverage",
    outcome: "Curated visual stories that extend the value of moments long after they happen.",
    services: [
      "Corporate Events",
      "Conferences",
      "Launch Events",
      "Milestone Celebrations",
    ],
  },
];

const framework = [
  { step: "Discover", body: "Understand the business, the audience and the single most important message the film must communicate." },
  { step: "Script", body: "Shape the narrative — structure, tone and storyline — so every minute of film earns its place." },
  { step: "Capture", body: "Bring people, places and proof on screen with calm direction and an executive-friendly process." },
  { step: "Edit", body: "Craft pacing, emotion and clarity in post — building a film that informs, persuades and is remembered." },
  { step: "Amplify", body: "Deliver cuts, formats and edits tailored to sales, social, investor and recruitment channels." },
];

const valuePillars = [
  { t: "Trust", b: "Real people, real work and real outcomes on screen build a level of confidence claims and copy never can." },
  { t: "Authenticity", b: "Story-led films make a business feel human — and human is what audiences choose to engage with." },
  { t: "Connection", b: "Visual storytelling closes the distance between a business and the people it serves, hires and partners with." },
  { t: "Credibility", b: "Seeing a leader speak, a team work and a customer endorse converts interest into belief." },
  { t: "Memory", b: "Story, emotion and pacing encode brand meaning into long-term recall and recognition." },
  { t: "Influence", b: "Films travel — into boardrooms, inboxes, feeds and meetings — carrying your message exactly as intended." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A growing fintech with a strong product story that was difficult to convey in static pitch decks during partner conversations and stakeholder onboarding.",
    strategy:
      "Created a suite of corporate communication and event films — brand story, leadership voice and event coverage — that translate vision, scale and momentum into one consistent narrative.",
    outcome:
      "Stronger partner conversations, sharper investor positioning and a film library that supports business development across markets.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "An industrial manufacturer whose decades of capability, craftsmanship and scale were not visible to customers and partners through brochures alone.",
    strategy:
      "Produced manufacturing and product storytelling films that walk audiences through facility, process and people — turning engineering depth into a brand asset.",
    outcome:
      "Higher confidence in dealer and B2B conversations, stronger trade-show presence and a brand presence aligned with the size of the business.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand that needed to communicate culture, outcomes and learning experience to parents and students considering admissions.",
    strategy:
      "Built an education-focused storytelling library — campus stories, faculty voices and student journeys — that support admissions, digital and recruitment efforts.",
    outcome:
      "Better-quality enquiries, stronger admissions conversations and a brand presence that mirrors the institution's standards.",
  },
  {
    img: casePain,
    client: "Pain Cure Physiotherapy",
    challenge:
      "A healthcare brand where trust is the deciding factor — and where prospective patients needed to feel confident before walking in for the first time.",
    strategy:
      "Created trust-building content centred on patient stories, clinician voices and care philosophy — humanising the practice across digital touchpoints.",
    outcome:
      "Higher patient confidence at first contact, stronger digital presence and a brand that feels as caring as the experience inside the clinic.",
  },
];

const whyUs = [
  {
    t: "Business-First Storytelling",
    b: "We start with business goals — sales, trust, talent, investor confidence — and design the film to serve them, not the other way around.",
  },
  {
    t: "Brand-Led Communication",
    b: "Every film is built on top of your brand — voice, tone, visual language — so corporate content reinforces identity instead of diluting it.",
  },
  {
    t: "Corporate Communication Expertise",
    b: "Years of working with leadership teams, sales heads, HR functions and founders — calibrated to how decisions actually get made inside organisations.",
  },
  {
    t: "Cross-Industry Experience",
    b: "Fintech, manufacturing, healthcare, education, real estate and B2B services — storytelling shaped to the audience and category in front of us.",
  },
  {
    t: "Creative + Strategic Thinking",
    b: "We treat film as a communication asset, not a creative experiment. Strategy shapes story, story shapes structure, structure shapes screen.",
  },
  {
    t: "End-To-End Execution",
    b: "Discovery, scripting, direction, production, edit, sound and delivery — managed under one roof with one accountable team.",
  },
  {
    t: "No Generic Videos",
    b: "No stock storylines, no template scripts, no interchangeable corporate films. Every project earns its own narrative.",
  },
  {
    t: "No Storytelling Without Purpose",
    b: "We do not produce film for film's sake. Every minute is shaped to inform a decision, build belief or strengthen a relationship.",
  },
];

const faqs = [
  {
    q: "What is a corporate film?",
    a: "A corporate film is a branded narrative that communicates who a business is, what it does and why it matters — designed for customers, partners, investors, employees and prospective talent. It is a long-lived business asset, not a one-off advertisement.",
  },
  {
    q: "How is a corporate film different from an advertisement?",
    a: "An advertisement sells a product or campaign in a moment. A corporate film builds a relationship over time — establishing trust, credibility and understanding that supports sales, hiring, partnerships and investor conversations across many touchpoints.",
  },
  {
    q: "Do you create founder story videos?",
    a: "Yes. Founder and leadership films are some of the most powerful corporate storytelling formats. We work closely with leaders to shape vision, voice and on-screen presence — building films that strengthen brand credibility and personal authority.",
  },
  {
    q: "Can you produce manufacturing and factory films?",
    a: "Yes. We create manufacturing, facility and process storytelling films that translate scale, craftsmanship and capability into clear visual narratives — ideal for B2B sales, partner onboarding, exhibitions and investor conversations.",
  },
  {
    q: "Do you handle scripting and production?",
    a: "Yes. Our process is end-to-end — discovery, narrative design, scripting, direction, production, editing, sound and delivery. You work with a single accountable team from the first brief to the final cut.",
  },
  {
    q: "How long does a corporate film project take?",
    a: "Timelines depend on format, scope and approvals. A focused testimonial or founder film typically takes three to four weeks; corporate profiles and manufacturing films take longer. We share an exact production timeline after the storytelling consultation.",
  },
];

/* ---------- page ---------- */
function CorporateFilmsPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Corporate Films & Video Production</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Corporate Storytelling & Brand Film Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Corporate films that build trust, credibility &{" "}
              <em className="text-brand not-italic">connection.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Every business has a story. The challenge is telling it in a way that inspires
              confidence, creates emotional connection and communicates value. At Ace360degree,
              we create corporate films and branded video content that help organizations
              showcase their people, culture, expertise and impact — from corporate profiles and
              founder stories to testimonials and employer branding films.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Create My Corporate Film <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Book Storytelling Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Corporate Films", v: "250+" },
                { k: "Focus", v: "Story · Trust · Influence" },
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
                alt="Corporate film and brand storytelling partner for company profiles, founder stories and employer branding videos"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Tell the story behind the brand.</p>
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
                The film question is almost always a trust question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Corporate film is not about producing video. It is about giving a business a
                voice — one that customers, partners, investors and employees can hear, believe
                and remember.
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
                  Our Corporate Film Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  A complete corporate storytelling practice — built around trust and credibility.
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
                The Ace360degree Storytelling Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Discover. Script. Capture. Edit. Amplify.
              </h2>
              <p className="mt-5 text-canvas/70">
                Story first. Production second. A disciplined process for building corporate
                films that earn attention, build belief and serve the business long after the
                edit is locked.
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

      {/* 5. WHY VIDEO STORYTELLING WORKS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Video Storytelling Works
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Video is how modern audiences decide whether to believe a business.
              </h2>
              <p className="mt-4 text-dark/70">
                Six compounding effects that turn corporate film into a strategic trust
                asset — measured in credibility, recall and confidence.
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
                People trust people.{" "}
                <span className="text-brand">Stories help businesses become human.</span>
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
                Corporate Film Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Stronger trust. Sharper positioning. Real business impact.
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
                      alt={`${s.client} corporate film and brand storytelling case study`}
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
                View Video Case Studies <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-dark/55">More corporate film projects coming soon.</p>
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
                Why businesses choose Ace360degree for corporate films.
              </h2>
              <p className="mt-5 text-dark/70">
                We combine business thinking, brand discipline and storytelling craft — building
                films that strengthen trust, support sales and represent the organisation the
                way leadership wants it seen.
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
                A clearer view of how corporate film strengthens trust, credibility and
                business relationships.
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
            Tell The Story Behind The Brand
          </span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Tell a story worth{" "}
            <em className="text-brand not-italic">remembering.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-canvas/70 text-lg">
            Create films that strengthen trust, communicate value and help your business
            build meaningful relationships with customers, partners, employees and investors.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Request Corporate Film Proposal <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Book Storytelling Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
