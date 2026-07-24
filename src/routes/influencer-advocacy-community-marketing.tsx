import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";
import caseMos from "@/assets/case-mos.jpg";
import caseAmigo from "@/assets/case-amigo.jpg";
import caseRexello from "@/assets/case-rexello.jpg";

export const Route = createFileRoute("/influencer-advocacy-community-marketing")({
  component: InfluencerAdvocacyPage,
  head: () => ({
    meta: [
      {
        title:
          "Influencer, Advocacy & Community Marketing Services Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree is an Influence & Community Building Partner helping businesses create trust, strengthen relationships and build long-term advocacy through creators, customers, employees and communities.",
      },
      {
        property: "og:title",
        content: "Influencer, Advocacy & Community Marketing Partner | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Build Trust Through People, Not Advertising. Strategic influence and community programs that build advocacy, deepen relationships and support sustainable business growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/influencer-advocacy-community-marketing" },
    ],
    links: [{ rel: "canonical", href: "/influencer-advocacy-community-marketing" }],
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
    q: "Need Better Brand Trust?",
    s: "Leverage credible voices and authentic recommendations — building the kind of third-party confidence that no advertisement or self-claim can create.",
    tag: "Trust",
  },
  {
    q: "Influencer Campaigns Not Delivering Results?",
    s: "Focus on relationships, relevance and measurable outcomes — designing influence programs that prioritise authentic alignment over follower counts.",
    tag: "Relevance",
  },
  {
    q: "Struggling To Build Community?",
    s: "Create engagement systems that encourage participation and loyalty — turning audiences into active communities that advocate for your brand.",
    tag: "Community",
  },
  {
    q: "Need More Brand Advocates?",
    s: "Turn customers, employees and partners into ambassadors — creating the kind of organic advocacy that multiplies reach and strengthens credibility.",
    tag: "Advocacy",
  },
  {
    q: "Launching A New Product?",
    s: "Generate awareness through trusted voices and communities — building launch momentum with the authentic endorsement that drives consideration and trial.",
    tag: "Launch",
  },
  {
    q: "Looking For Long-Term Influence?",
    s: "Move beyond one-off campaigns and build sustainable advocacy — creating influence ecosystems that compound in value and strengthen over time.",
    tag: "Sustainability",
  },
];

const solutions = [
  {
    name: "Creator & Influencer Partnerships",
    outcome: "Strategic creator collaborations that align with brand values, reach the right audiences and generate authentic engagement that drives real business outcomes.",
    services: [
      "Influencer Identification",
      "Creator Outreach",
      "Campaign Management",
      "Content Collaboration",
      "Performance Monitoring",
    ],
  },
  {
    name: "Brand Advocacy Programs",
    outcome: "Systematic advocacy programs that turn satisfied customers and loyal followers into active ambassadors who recommend your brand with genuine enthusiasm.",
    services: [
      "Brand Ambassadors",
      "Customer Advocacy",
      "Referral Programs",
      "Loyalty Initiatives",
      "Community Champions",
    ],
  },
  {
    name: "Employee Advocacy",
    outcome: "Employee-driven influence that amplifies brand reach, strengthens employer reputation and turns your team into credible voices that audiences trust.",
    services: [
      "Employee Content Programs",
      "Employer Brand Ambassadors",
      "Internal Engagement Campaigns",
      "Thought Leadership Support",
    ],
  },
  {
    name: "Partner & Distributor Advocacy",
    outcome: "Channel partner and distributor advocacy programs that strengthen relationships, increase loyalty and turn business partners into active brand promoters.",
    services: [
      "Partner Enablement",
      "Dealer Engagement",
      "Distributor Advocacy",
      "Channel Marketing Support",
    ],
  },
  {
    name: "Community Building & Engagement",
    outcome: "Engaged communities that create belonging, generate user content and build the kind of loyalty that reduces acquisition costs and increases lifetime value.",
    services: [
      "Community Strategy",
      "User-Generated Content Programs",
      "Engagement Campaigns",
      "Loyalty Communities",
      "Member Activation",
    ],
  },
  {
    name: "Influence Analytics & Insights",
    outcome: "Data-driven measurement and insight that tracks community health, advocacy strength and business impact — not vanity metrics.",
    services: [
      "Engagement Tracking",
      "Community Health Metrics",
      "Advocacy Measurement",
      "Sentiment Analysis",
      "ROI Reporting",
    ],
  },
];

const framework = [
  { step: "Identify", body: "Discover the right voices — creators, customers, employees and partners whose values align with your brand and whose audiences match your goals." },
  { step: "Collaborate", body: "Build authentic relationships and co-create content, experiences and programs that feel genuine to both your brand and the advocate's community." },
  { step: "Amplify", body: "Extend reach through coordinated promotion, cross-channel distribution and strategic timing that maximises visibility and impact." },
  { step: "Engage", body: "Create ongoing interaction, dialogue and community participation that deepens relationships and builds lasting connection." },
  { step: "Advocate", body: "Convert engaged communities into active advocates — generating organic recommendations, referrals and the kind of loyalty that drives sustainable growth." },
];

const valuePillars = [
  { t: "Trust", b: "People trust recommendations from real voices far more than brand messaging. Influence built on credibility creates the confidence that drives purchase decisions." },
  { t: "Authenticity", b: "Authentic advocacy resonates because it comes from genuine belief. We build programs around real alignment, not manufactured endorsements." },
  { t: "Recommendations", b: "Word-of-mouth and personal recommendations remain the most powerful marketing channel. Advocacy programs create the systems that generate them at scale." },
  { t: "Community", b: "Communities create belonging, generate content and defend brands. A strong community is a moat that competitors cannot easily replicate." },
  { t: "Loyalty", b: "Advocates are not just customers — they are loyalists. They stay longer, spend more and bring others with them. Advocacy is loyalty at its highest expression." },
  { t: "Influence", b: "True influence is the ability to shape opinions and drive action. It is earned through consistency, authenticity and the trust built over time." },
];

const stories = [
  {
    img: caseMos,
    client: "MOS Utility",
    challenge:
      "A fintech brand seeking to build regional awareness and trust among target audiences who were unfamiliar with the brand — needing credible voices and community validation to accelerate adoption.",
    strategy:
      "Developed a regional creator campaign partnering with trusted voices in personal finance and entrepreneurship — designing content collaborations, community engagement programs and advocacy systems that built authentic credibility at scale.",
    outcome:
      "Improved brand awareness in target regions, stronger audience trust signals and a creator ecosystem that continued generating content and advocacy beyond the initial campaign period.",
  },
  {
    img: caseAmigo,
    client: "Amigo Academy",
    challenge:
      "An education brand needing to build social proof, increase referral confidence and create a community of advocates who could authentically represent the institution to prospective students and parents.",
    strategy:
      "Created a student ambassador program combining peer advocacy, user-generated content, community engagement and referral systems — empowering students and alumni to become genuine voices for the brand.",
    outcome:
      "Increased referral-driven inquiries, stronger social proof across digital channels and a community of advocates who contributed to brand storytelling and enrollment confidence.",
  },
  {
    img: caseRexello,
    client: "Rexello Castors",
    challenge:
      "An industrial manufacturer seeking to build thought leadership and industry influence among engineers, procurement professionals and distributors who influenced specification and purchase decisions.",
    strategy:
      "Developed an industry influencer engagement program targeting respected voices in manufacturing, engineering and logistics — combining expert content collaboration, technical advocacy and community participation to build industry authority.",
    outcome:
      "Stronger industry recognition, improved specification conversations and an influencer network that supported ongoing brand credibility in B2B decision-making contexts.",
  },
];

const whyUs = [
  {
    t: "Community-First Thinking",
    b: "We design influence programs around community value, not transactions. Every program strengthens relationships and creates belonging before asking for advocacy.",
  },
  {
    t: "Data-Driven Creator Selection",
    b: "We select creators and advocates based on audience alignment, engagement quality and brand fit — not follower counts. Relevance and authenticity drive results.",
  },
  {
    t: "Brand Advocacy Expertise",
    b: "We specialise in building advocacy systems — programs that turn customers, employees and partners into active ambassadors who generate organic growth.",
  },
  {
    t: "B2B & B2C Experience",
    b: "From consumer brands to industrial manufacturers, we understand the dynamics of different influence ecosystems and design programs suited to each audience and sector.",
  },
  {
    t: "Integrated PR + Social + Content Support",
    b: "Influence does not exist in isolation. We connect advocacy with PR, social media and content strategy — creating amplification systems that multiply impact.",
  },
  {
    t: "Long-Term Relationship Building",
    b: "We design for sustained advocacy, not one-off campaigns. Programs that deepen over time, compound in value and create lasting community assets.",
  },
  {
    t: "No Follower Obsession",
    b: "We do not chase large followings. We pursue genuine alignment. A smaller, engaged, relevant audience always outperforms a large, passive one.",
  },
  {
    t: "No Vanity Metrics",
    b: "We measure advocacy strength, community health, business impact and relationship depth — not likes, impressions or follower growth that means nothing without results.",
  },
];

const faqs = [
  {
    q: "What is influencer marketing?",
    a: "Influencer marketing is the strategic practice of partnering with credible voices — creators, industry experts, community leaders — to build trust, generate awareness and drive engagement through authentic recommendation. At Ace360degree, we focus on strategic alignment and relationship depth rather than follower counts.",
  },
  {
    q: "How do you select influencers?",
    a: "We select based on audience relevance, engagement quality, content authenticity and brand alignment — not follower size. We evaluate whether an influencer's community matches your target audience and whether their voice feels credible when recommending your brand.",
  },
  {
    q: "What is brand advocacy?",
    a: "Brand advocacy is the organic promotion of your brand by people who genuinely believe in it — customers, employees, partners and community members. We build systematic programs that identify, engage and empower advocates, creating the infrastructure for organic growth.",
  },
  {
    q: "Can employees become brand ambassadors?",
    a: "Yes. Employee advocacy is one of the most powerful and underutilised influence channels. We design programs that empower employees to share brand content, represent company values and build employer brand — all while maintaining authenticity and professional credibility.",
  },
  {
    q: "How do you measure ROI?",
    a: "We measure strategic outcomes — advocacy growth, community engagement quality, referral traffic, conversion attribution, sentiment improvement and business impact. We do not report vanity metrics. Success is influence that drives measurable business results.",
  },
  {
    q: "Can you build brand communities?",
    a: "Yes. Community building is a core part of our practice. We design engagement systems, content programs and participation frameworks that create belonging, encourage contribution and build the kind of loyalty that sustains long-term growth.",
  },
];

/* ---------- page ---------- */
function InfluencerAdvocacyPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Influencer, Advocacy & Community Marketing</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Influence & Community Building Partner
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Influencer & community programs that build{" "}
              <em className="text-brand not-italic">trust,</em>{" "}
              advocacy & growth.
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              People trust people more than they trust advertisements. At Ace360degree,
              we help businesses build meaningful influence through creators, customers,
              employees, partners and communities that genuinely believe in their brand.
              Whether launching products, increasing awareness or strengthening loyalty,
              we create influence ecosystems designed for long-term impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Build My Influence Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Book Community Consultation <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Advocacy Programs", v: "100+" },
                { k: "Focus", v: "Trust · Advocacy · Community" },
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
                alt="Influence and community building partner creating brand advocacy through trusted voices"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Build Trust Through People, Not Advertising.</p>
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
                The influence question is almost always a trust question in disguise.
              </h2>
              <p className="mt-4 text-dark/70">
                Influence marketing is not about follower counts. It is about building
                credible relationships — finding the voices your audience already trusts,
                creating authentic alignment and designing programs that turn that trust
                into business impact. Whether through creators, customers, employees or
                partners, influence is most powerful when it is genuine.
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
                  Our Influence & Community Solutions
                </span>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                  Strategic programs for trust and advocacy.
                </h2>
                <p className="mt-4 text-dark/70">
                  From creator partnerships and brand advocacy to employee enablement and
                  community building — we design the influence ecosystems that turn
                  trusted voices into business growth.
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
                Our Influence Framework
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                A systematic approach to building influence.
              </h2>
              <p className="mt-4 text-dark/70">
                Influence is not built through one-off posts. Our five-stage framework
                creates the systems that identify credible voices, build authentic
                relationships and turn engagement into lasting advocacy.
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

      {/* 5. WHY ADVOCACY WORKS */}
      <Reveal>
        <section className="bg-canvas">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Why Advocacy Works
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Advertising creates awareness. Advocacy creates belief.
              </h2>
              <p className="mt-4 text-dark/70">
                In a world of declining ad trust and growing scepticism, advocacy is the
                most credible form of marketing. When people recommend your brand because
                they genuinely believe in it, the message carries weight no advertisement
                can match.
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
                Real brands. Real advocates. Real influence.
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
                      alt={`${story.client} influencer and advocacy marketing case study`}
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
                View Influence Case Studies <span aria-hidden>→</span>
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
                Why businesses choose Ace360degree for influence & community marketing.
              </h2>
              <p className="mt-4 text-dark/70">
                We do not broker influencer deals. We build influence ecosystems — strategic
                programs that create trust, strengthen communities and turn relationships
                into sustainable business growth.
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
              Start Building Advocacy
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-tight">
              Turn audiences into advocates.
            </h2>
            <p className="mt-6 text-lg text-dark/70 max-w-2xl mx-auto">
              Create influence systems that strengthen trust, deepen relationships and
              support sustainable business growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-dark px-5 py-3 text-sm font-semibold text-canvas shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-dark/90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.35)]"
              >
                Build My Influence Strategy <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-dark/20 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-dark hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Book Community Consultation <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <SiteFooter />
    </div>
  );
}
