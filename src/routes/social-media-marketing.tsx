import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/services-hero.a23.jpg";

export const Route = createFileRoute("/social-media-marketing")({
  component: SocialMediaMarketingPage,
  head: () => ({
    meta: [
      {
        title:
          "Social Media Marketing & Growth Services in Mumbai | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps businesses build visibility, trust and influence through strategic social media marketing. LinkedIn, Instagram, Facebook, YouTube and emerging platforms — built for business growth.",
      },
      {
        property: "og:title",
        content: "Social Media Growth & Authority Partner — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Turn social presence into business influence with strategic content, community building and founder branding.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/social-media-marketing" },
    ],
    links: [{ rel: "canonical", href: "/social-media-marketing" }],
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
    q: "Need Better Brand Visibility?",
    s: "Increase awareness across the platforms where your audience spends time — with strategies designed for discoverability and recognition.",
    tag: "Visibility",
  },
  {
    q: "Low Audience Engagement?",
    s: "Create content and conversations that strengthen relationships and turn passive followers into active community members.",
    tag: "Engagement",
  },
  {
    q: "Struggling To Build Trust?",
    s: "Develop educational and authority-building content that positions your brand as a credible, trusted industry voice.",
    tag: "Trust",
  },
  {
    q: "Need More Qualified Leads?",
    s: "Support customer acquisition through strategic content, targeted campaigns and platform-native lead generation systems.",
    tag: "Lead Generation",
  },
  {
    q: "Founder Not Visible Enough?",
    s: "Build executive and founder-led personal brands that create opportunities, influence and trust in the market.",
    tag: "Founder Branding",
  },
  {
    q: "Inconsistent Social Presence?",
    s: "Create structured content systems aligned with business objectives — not sporadic posting without purpose.",
    tag: "Consistency",
  },
];

const solutions = [
  {
    name: "Organic Social Media Growth",
    outcome: "Build sustainable visibility and engagement.",
    services: ["Content Strategy", "Content Planning", "Platform Management", "Community Building", "Audience Engagement"],
  },
  {
    name: "Founder & Executive Branding",
    outcome: "Position business leaders as trusted industry voices.",
    services: ["LinkedIn Personal Branding", "Founder Content", "Thought Leadership", "Authority Building", "Executive Visibility"],
  },
  {
    name: "LinkedIn Marketing",
    outcome: "Strengthen professional visibility and B2B engagement.",
    services: ["Corporate Pages", "Thought Leadership Campaigns", "Employee Advocacy", "Lead Nurturing", "LinkedIn Growth"],
  },
  {
    name: "Instagram & Facebook Marketing",
    outcome: "Build awareness, engagement and community.",
    services: ["Content Creation", "Reels Strategy", "Campaign Support", "Community Management", "Audience Growth"],
  },
  {
    name: "YouTube Growth Support",
    outcome: "Expand authority through video content.",
    services: ["YouTube Strategy", "Channel Optimization", "Video Content Planning", "Distribution", "Audience Development"],
  },
  {
    name: "Social Media Automation",
    outcome: "Use intelligent systems to improve consistency and efficiency.",
    services: ["Scheduling Systems", "Automated Responses", "Social Listening", "Sentiment Tracking", "Engagement Automation"],
  },
  {
    name: "Social Advertising Support",
    outcome: "Amplify reach and accelerate growth.",
    services: ["Meta Advertising", "LinkedIn Advertising", "YouTube Advertising", "Audience Building", "Remarketing"],
  },
];

const framework = [
  { step: "Discover", body: "Understand audience behavior, competitor positioning and content opportunities across platforms." },
  { step: "Create", body: "Develop content aligned with business objectives — educational, engaging and strategically positioned." },
  { step: "Engage", body: "Build conversations, respond to communities and foster relationships that strengthen brand trust." },
  { step: "Amplify", body: "Support growth through strategic promotion, targeted campaigns and cross-platform visibility." },
  { step: "Grow", body: "Measure performance, analyze engagement patterns and optimize continuously for long-term impact." },
];

const platforms = [
  "LinkedIn",
  "Instagram",
  "Facebook",
  "YouTube",
  "X (Twitter)",
  "Threads",
  "Pinterest",
  "Emerging Platforms",
];

const stories = [
  {
    client: "MOS Utility",
    challenge: "Limited brand awareness in a competitive utility services market with inconsistent social presence.",
    strategy: "LinkedIn thought leadership for the founder, Instagram community building and platform-specific content systems.",
    outcome: "Increased brand visibility, stronger founder authority and improved inbound enquiries through social channels.",
  },
  {
    client: "Rexello Castors",
    challenge: "B2B industrial brand with minimal social presence and untapped professional network potential.",
    strategy: "LinkedIn corporate page optimization, employee advocacy program and industry-focused content strategy.",
    outcome: "Established professional brand presence, improved industry credibility and new business conversations from social discovery.",
  },
  {
    client: "Amigo Academy",
    challenge: "Education brand needing student engagement and parent trust through social platforms.",
    strategy: "Instagram and Facebook community building, testimonial content and targeted campaigns for admissions support.",
    outcome: "Stronger brand trust, increased community engagement and measurable contribution to admissions pipeline.",
  },
  {
    client: "Pain Cure Physiotherapy",
    challenge: "Healthcare brand struggling to differentiate and build patient trust through social media.",
    strategy: "Educational content strategy, patient success stories and community engagement focused on health awareness.",
    outcome: "Improved brand authority, stronger patient trust and increased appointment bookings through social channels.",
  },
  {
    client: "Living Concepts",
    challenge: "Interior design brand with beautiful work but limited social visibility and engagement.",
    strategy: "Visual-first Instagram strategy, project showcase content and Pinterest distribution for discovery.",
    outcome: "Significant increase in social visibility, stronger audience engagement and new project enquiries from social platforms.",
  },
];

const whyUs = [
  { t: "Business-Driven Content Strategy", b: "Every content decision connects to a business objective — visibility, trust, leads or authority." },
  { t: "Founder Branding Expertise", b: "We specialize in building executive and founder brands that create real market influence and opportunities." },
  { t: "Marketing + Branding + Technology Thinking", b: "Social media doesn't exist in isolation. We integrate it with your broader marketing and technology ecosystem." },
  { t: "Creative + Strategic Execution", b: "Beautiful content matters. But only when it's backed by strategy, consistency and measurable intent." },
  { t: "Community-Focused Growth", b: "We build communities, not just follower counts. Real engagement creates lasting brand value." },
  { t: "Long-Term Brand Building", b: "We focus on sustainable social presence that compounds over time — not short-term vanity spikes." },
  { t: "Data-Driven Decision Making", b: "Insights inform every strategy shift. We measure what matters and optimize based on evidence." },
  { t: "No Vanity Metrics", b: "We report on business impact — awareness, engagement quality, lead generation and brand authority." },
  { t: "No Content For The Sake Of Content", b: "Every post has a purpose. Every campaign has a goal. Every platform has a strategic reason." },
];

const faqs = [
  {
    q: "Which platforms should my business focus on?",
    a: "We recommend platforms based on where your audience is most active and where your business objectives can be best served. B2B brands often thrive on LinkedIn. B2C and visual brands see strong results on Instagram and Facebook. Video authority builds on YouTube. We assess your audience, competitors and goals before recommending a platform strategy.",
  },
  {
    q: "Do you create content?",
    a: "Yes. We develop content strategies, create content plans and produce platform-optimized content. This includes written posts, visual content, video support and thought leadership pieces. Everything is aligned with your brand voice and business objectives.",
  },
  {
    q: "Can social media generate leads?",
    a: "Absolutely. When approached strategically, social media is a powerful lead generation channel. We design content and campaign systems that move audiences from awareness to consideration to action — whether that's enquiries, sign-ups or direct purchases.",
  },
  {
    q: "Do you help founders build personal brands?",
    a: "Yes. Founder and executive branding is one of our core specialties. We help business leaders establish thought leadership, build professional authority and create content that opens doors to opportunities, partnerships and industry influence.",
  },
  {
    q: "How do you measure success?",
    a: "We focus on metrics that indicate business impact — audience growth quality, engagement rates, website traffic from social, lead generation, brand mention sentiment and authority indicators. We avoid vanity metrics that don't connect to your goals.",
  },
  {
    q: "Do you manage community engagement?",
    a: "Yes. Community management is part of our organic growth approach. We respond to comments, participate in relevant conversations and build relationships that strengthen brand loyalty and trust.",
  },
  {
    q: "Can social media support B2B growth?",
    a: "Social media is increasingly essential for B2B growth. LinkedIn is particularly powerful for professional networking, thought leadership and lead generation. We design B2B social strategies that support sales cycles and relationship building.",
  },
];

/* ---------- page ---------- */
function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <nav className="text-xs text-dark/50 tracking-wide">
            <a href="/" className="hover:text-brand">Home</a>
            <span className="mx-1">/</span>
            <span className="text-dark">Social Media Marketing</span>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Growth Marketing
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Social Media Marketing That Builds{" "}
              <em className="text-brand not-italic">Visibility, Trust & Growth.</em>
            </h1>
            <p className="mt-6 text-lg text-dark/70 max-w-xl">
              Social media has evolved from a communication channel into one of the most powerful
              platforms for building brand awareness, industry authority and customer engagement.
              At Ace360degree, we help businesses create social media ecosystems that strengthen
              brand presence, support customer acquisition and build lasting relationships with audiences.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-dark text-canvas px-5 py-3 text-sm font-semibold hover:bg-dark/90 transition"
              >
                Book Social Media Strategy Session <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold hover:border-dark transition"
              >
                Request Social Media Audit <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "Since", v: "2009" },
                { k: "Platforms", v: "LinkedIn · Instagram · YouTube" },
                { k: "Focus", v: "Growth & Authority" },
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
                alt="Social media marketing and brand growth"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">Operating Principle</p>
                <p className="font-serif text-xl mt-1">Every post should strengthen your brand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGES */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Business Challenges We Help Solve
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Start with the visibility problem. The strategy follows.
            </h2>
            <p className="mt-4 text-dark/70">
              Social media success fails when it starts with posting frequency, not business outcomes.
              We begin by understanding what's limiting your visibility and engagement — then architect
              the right social ecosystem to solve it.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10 border border-dark/10">
            {challenges.map((c) => (
              <div key={c.q} className="bg-canvas p-8 hover:bg-brand/10 transition-colors group">
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

      {/* 3. SOLUTIONS */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Our Social Media Solutions
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Growth systems designed for influence — not just activity.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-semibold hover:text-brand">
              See full service capabilities →
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
                    <li key={svc} className="text-sm text-dark/70 flex items-start gap-2">
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

      {/* 4. FRAMEWORK */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              The Ace360degree Social Growth Framework
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              How we turn social presence into business influence — systematically.
            </h2>
            <p className="mt-4 text-canvas/70">
              A five-stage model that transforms social media from sporadic posting into a structured,
              measurable engine for visibility, trust and growth.
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

      {/* 5. PLATFORMS */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Platforms We Work With
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Right Platform. Right Audience. Right Strategy.
            </h2>
            <p className="mt-4 text-dark/70">
              We don't chase every platform. We identify where your audience is most engaged and
              where your business objectives can be best served — then build strategies that win there.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-dark/10 border border-dark/10">
            {platforms.map((p) => (
              <div key={p} className="bg-canvas p-6 flex items-center gap-3">
                <span className="size-2 rounded-full bg-brand shrink-0" />
                <span className="text-sm font-medium">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-dark text-canvas p-8 md:p-10">
            <p className="font-serif text-2xl md:text-3xl leading-tight">
              "We don't believe in being everywhere. We believe in being exactly where your
              audience is — with the right message, at the right time."
            </p>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
                Social Media Success Stories
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
                Real brands. Real visibility. Real influence.
              </h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold hover:text-brand">
              View all case studies →
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.client} className="bg-light border border-dark/10 overflow-hidden">
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
                      <dt className="text-xs uppercase tracking-[0.2em] text-dark/50">Strategy</dt>
                      <dd className="mt-1 text-dark/80">{s.strategy}</dd>
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

      {/* 7. WHY ACE360DEGREE */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Why Ace360degree
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Why businesses choose Ace360degree for social media growth.
            </h2>
            <p className="mt-5 text-dark/70">
              We don't manage social media accounts. We build social growth systems that strengthen
              brand authority, deepen customer relationships and create measurable business value.
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
                    <h4 className="font-semibold text-dark">{w.t}</h4>
                    <p className="mt-1 text-sm text-dark/70 leading-relaxed">{w.b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Common questions about social media marketing.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border border-dark/10 bg-light open:border-dark/20"
              >
                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                  <span className="font-semibold text-dark">{f.q}</span>
                  <span className="text-brand text-lg leading-none shrink-0 group-open:hidden">+</span>
                  <span className="text-brand text-lg leading-none shrink-0 hidden group-open:inline">−</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-dark/70 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Build Visibility. Create Trust.{" "}
            <em className="text-brand not-italic">Drive Engagement.</em>
          </h2>
          <p className="mt-6 text-canvas/70 max-w-2xl mx-auto">
            Create a social media presence that supports business growth, strengthens authority
            and builds meaningful relationships with customers.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition"
            >
              Book Social Media Strategy Session <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/20 px-6 py-3.5 text-sm font-semibold hover:border-canvas transition"
            >
              Request Social Media Audit <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
