import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/Cosmoshero1.png";
import bannerImg from "@/assets/Cosmosbannery2.png";
export const Route = createFileRoute("/case-cosmos-seals")({
  head: () => ({
    meta: [
      { title: "Cosmos Seals India Case Study | Industrial Branding, Website & SEO — Ace360degree" },
      {
        name: "description",
        content:
          "How Ace360degree partnered with Cosmos Seals India to build a digitally competitive industrial brand through strategy, technology, SEO and growth marketing.",
      },
      { property: "og:title", content: "Cosmos Seals India — An Industrial Digital Transformation Blueprint" },
      {
        property: "og:description",
        content:
          "A strategic partnership strengthening digital presence, technical product communication and long-term B2B growth for a legacy sealing solutions manufacturer.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: CosmosSealsCaseStudyPage,
});

/* ---------------- Data ---------------- */

const snapshot = [
  { k: "Industry", v: "Industrial Manufacturing · Sealing Solutions · Engineering Products" },
  { k: "Engagement", v: "Active Strategic Partnership" },
  { k: "Primary Objective", v: "Digital Transformation & Industrial Brand Growth" },
  { k: "Core Services", v: "Growth Marketing · Brand Strategy · Website · SEO · Corporate Communication" },
];

const aboutPoints = [
  "High-performance sealing solutions",
  "Trusted across demanding sectors",
  "Strong engineering foundation",
  "Established industry reputation",
  "Long-term business development focus",
];

const challenges = [
  {
    t: "Limited Digital Authority",
    b: "Although technically strong, the company's online presence did not fully reflect its industry expertise.",
  },
  {
    t: "Complex Product Communication",
    b: "Industrial buyers require technical clarity, product specifications and application-focused content.",
  },
  {
    t: "Low Organic Visibility",
    b: "Increase visibility for high-intent industrial and product-specific search queries.",
  },
  {
    t: "Traditional Buyer Experience",
    b: "Modern procurement teams expect intuitive websites, downloadable resources and easy enquiry processes.",
  },
  {
    t: "Brand Consistency",
    b: "Create a professional and consistent brand experience across digital communication.",
  },
  {
    t: "Foundation for Future Growth",
    b: "Develop scalable digital assets capable of supporting marketing, exports and long-term lead generation.",
  },
];

const phases = [
  { n: "01", t: "Discover", b: "Understanding products, industries served, customer personas and competitive positioning." },
  { n: "02", t: "Define", b: "Building a digital strategy aligned with Cosmos Seals India's business objectives and market opportunities." },
  { n: "03", t: "Design", b: "Creating a premium user experience that simplifies technical product discovery and strengthens buyer confidence." },
  { n: "04", t: "Develop", b: "Building a scalable website architecture, SEO foundation and structured product communication system." },
  { n: "05", t: "Grow", b: "Supporting continuous optimization through SEO, content strategy, analytics and long-term consulting." },
];

const disciplines = [
  {
    t: "Growth Marketing",
    items: ["Industrial SEO", "GEO (Generative Engine Optimization)", "AEO (Answer Engine Optimization)", "Content Marketing", "Technical SEO", "B2B Lead Generation"],
  },
  {
    t: "Branding & Creative",
    items: ["Brand Positioning", "Corporate Communication", "Technical Content", "Product Storytelling", "Marketing Collateral"],
  },
  {
    t: "Technology & Digital Platforms",
    items: ["Corporate Website", "Product Architecture", "Technical Resource Library", "Lead Capture System", "Analytics Integration"],
  },
  {
    t: "Business Intelligence & Optimization",
    items: ["Search Performance Monitoring", "User Behaviour Analysis", "Content Performance", "Continuous Optimization"],
  },
];

const outcomes = [
  { t: "Stronger Digital Credibility", b: "Created a professional digital presence aligned with the company's engineering expertise." },
  { t: "Better Product Communication", b: "Structured technical information that makes product discovery easier for engineers, consultants and procurement teams." },
  { t: "Improved Search Foundation", b: "Established a long-term SEO strategy focused on industrial and technical search visibility." },
  { t: "Better Buyer Experience", b: "Simplified navigation, enquiry journeys and product exploration." },
  { t: "Future-Ready Marketing Platform", b: "Created a scalable foundation supporting future campaigns, exports and business development." },
  { t: "Strategic Growth Partnership", b: "Continuing collaboration focused on continuous improvement and long-term digital growth." },
];

const unfolded = [
  "Business Discovery & Product Understanding",
  "Brand Positioning & Digital Strategy",
  "Website Experience & Technical Architecture",
  "SEO, Content & Product Communication",
  "Performance Optimization",
  "Long-Term Strategic Partnership",
];

const proofs = [
  { t: "Strategy Before Execution", b: "Every recommendation aligned with long-term business objectives." },
  { t: "Technical Understanding", b: "We translate engineering expertise into compelling digital experiences that resonate with industrial buyers." },
  { t: "Integrated Thinking", b: "Marketing, branding, technology and optimization work together to create measurable business value." },
  { t: "Partnerships That Evolve", b: "Our role extends beyond project delivery to continuous strategic support and growth." },
];

const stack = [
  { t: "Growth Marketing", items: ["Industrial SEO", "GEO", "AEO", "Content Strategy", "Analytics"] },
  { t: "Branding", items: ["Corporate Communication", "Product Messaging", "Visual Identity Support", "Marketing Collateral"] },
  { t: "Technology", items: ["Website Development", "Product Information Architecture", "Lead Capture", "Performance Analytics"] },
  { t: "Business Growth", items: ["Digital Visibility", "Customer Experience", "Technical Authority", "Continuous Improvement"] },
];

const relatedServices = [
  { t: "SEO Services", to: "/search-visibility" },
  { t: "Website Design & Development", to: "/website-design-development" },
  { t: "Content Marketing", to: "/content-marketing" },
  { t: "Corporate Communication Design", to: "/corporate-communication-design" },
  { t: "Analytics & Growth Intelligence", to: "/analytics-growth-intelligence" },
  { t: "AI Strategy & Readiness Assessment", to: "/ai-strategy-readiness-assessment" },
] as const;

/* ---------------- Page ---------------- */

function CosmosSealsCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/5 bg-[#fbfaf7]">
      
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl lg:max-w-[58%]">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              Success Story
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Building a Digitally Competitive Industrial Brand Through Strategy, Technology & Growth Marketing
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
              How Ace360degree helped{" "}
              <span className="text-foreground font-medium">Cosmos Seals India</span>{" "}
              strengthen its digital presence, improve technical product communication and establish a scalable foundation for long-term B2B growth.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {snapshot.map((s) => (
                <div key={s.k} className="rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
                  <div className="mt-1 text-sm font-medium">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 hidden lg:block lg:absolute lg:right-6 lg:top-1/2 lg:w-[34%] lg:max-w-[620px] lg:-translate-y-1/2">
              <div className="overflow-hidden rounded-[8px] bg-[#efe8df] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <img
                  src={heroImg}
                  alt="Cosmos Seals India premium industrial branding visual"
                  className="h-full w-full object-cover object-center"
                  width={1200}
                  height={1400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">The Context</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Industrial buyers don't purchase based on price alone.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              They evaluate engineering capabilities. Technical expertise. Product reliability. Industry certifications. Digital credibility. Before they ever speak with a sales representative.
            </p>
            <p>
              For Cosmos Seals India, the opportunity wasn't simply to redesign a website—it was to create a digital ecosystem that reflected decades of engineering excellence while supporting future business growth.
            </p>
            <p>
              Ace360degree partnered with Cosmos Seals India to align its marketing, branding and technology with evolving buyer expectations and modern B2B purchasing behaviour.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">About the Client</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
            Engineering High-Performance Sealing Solutions for Critical Industries.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cosmos Seals India Pvt. Ltd. is a trusted manufacturer of industrial sealing solutions serving demanding sectors where quality, precision and reliability are critical.
            </p>
            <p>
              With a strong engineering foundation and established industry reputation, the company recognized the need to strengthen its digital presence to better communicate technical capabilities, improve discoverability and support long-term business development.
            </p>
            <p>
              Ace360degree partnered with Cosmos Seals India to bridge the gap between engineering excellence and digital excellence.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {aboutPoints.map((i) => (
              <div key={i} className="rounded-xl border border-border/60 bg-card p-5">
                <div className="text-sm font-medium">{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Strategic Challenges</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            The Business Challenges We Set Out To Solve
          </h2>
          <p className="mt-4 text-muted-foreground">
            Manufacturing companies are increasingly evaluated long before a sales conversation begins. Our objective was to strengthen every digital touchpoint that influences buyer confidence.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((c, i) => (
            <div key={c.t} className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/50 transition-colors">
              <div className="text-xs text-primary font-mono">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GROWTH MODEL */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Our Growth Model</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              A Five-Phase Framework Built Around Industrial Growth
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {phases.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="text-3xl font-semibold text-primary">{p.n}</div>
                <div className="mt-3 text-lg font-semibold">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">One Partner · Multiple Disciplines</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">One Outcome.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {disciplines.map((d) => (
            <div key={d.t} className="rounded-2xl border border-border/60 bg-card p-7">
              <h3 className="text-xl font-semibold">{d.t}</h3>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {d.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Outcomes</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Outcomes That Compounded Over Time
            </h2>
            <p className="mt-4 text-muted-foreground">
              The objective was never simply to launch a website. It was to create a digital foundation capable of supporting long-term industrial growth.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o) => (
              <div key={o.t} className="rounded-2xl border border-border/60 bg-card p-6">
                <h3 className="text-lg font-semibold">{o.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TIMELINE */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.28em] text-[#e7a62a]">How the Partnership Unfolded</div>
            <h2 className="mt-3 text-xl md:text-4xl font-semibold tracking-tight">
              From Discovery to Long-Term Growth
            </h2>
            <ol className="mt-12 relative ml-3 border-l border-[#ece7df]">
              {unfolded.map((u, i) => (
                <li key={u} className="relative pb-8 pl-8 last:pb-0">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#ffb133] ring-4 ring-white" />
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[#a8a29b]">
                    Phase {i + 1}
                  </div>
                  <div className="mt-1 text-[18px] leading-[1.35] text-[#1f1f1f]">
                    {u}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7">
            <div className="ml-auto w-full max-w-[640px] overflow-hidden rounded-[24px] bg-[#091d3c] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <img
                src={bannerImg}
                alt="Cosmos Seals India growth partnership visual"
                className="h-full w-full object-cover object-center"
                width={1200}
                height={900}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUEPRINT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">More Than A Success Story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">A Blueprint for Industrial Digital Transformation</h2>
            <p className="mt-4 text-muted-foreground">
              Manufacturing companies often invest separately in websites, branding and marketing. Cosmos Seals India demonstrates how integrating strategy, communication, technology and search visibility creates a stronger and more sustainable competitive advantage.
            </p>
            <p className="mt-4 text-muted-foreground">
              This engagement reflects Ace360degree's belief that digital transformation is not a project—it's an ongoing business capability.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Branding", "Website", "SEO", "Content", "Lead Generation", "Analytics"].map((t) => (
              <span key={t} className="rounded-full border border-border/60 bg-card px-4 py-1.5 text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AT A GLANCE / STACK */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">At a Glance</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            The Scalable Stack Behind The Partnership
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stack.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="text-base font-semibold text-primary">{s.t}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRY INSIGHT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Industry Insight</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Modern Industrial Buyers Research Before They Reach Out.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Today's engineers, consultants and procurement professionals compare suppliers online before initiating conversations.
              </p>
              <p>
                Companies that invest in technical content, search visibility and professional digital experiences earn trust earlier in the buying journey and create stronger opportunities for long-term business growth.
              </p>
              <p>
                This shift is why manufacturing organizations increasingly view digital transformation as a business strategy—not simply a marketing initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOFS */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">How We Work</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            What This Engagement Proves
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {proofs.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border/60 bg-card p-7">
              <h3 className="text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Related</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Explore the broader ecosystem
              </h2>
              <p className="mt-4 text-muted-foreground">
                See how Ace360degree supports industrial brands across services and industries.
              </p>
              <Link
                to="/industries/manufacturing"
                className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Manufacturing & Industrial →
              </Link>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.t}
                  to={s.to}
                  className="rounded-xl border border-border/60 bg-card px-5 py-4 text-sm font-medium hover:border-primary/50 hover:bg-muted/40 transition-colors"
                >
                  {s.t} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 pb-24 md:pb-32">
        
        <div className=" relative overflow-hidden rounded-3xl
      border border-black/5
      bg-[linear-gradient(163deg,rgba(255,179,48,0.25)_20%,rgba(255,179,48,0.08)_50%,#ffffff_65%,#ffffff_100%)]
      p-10 md:p-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Engineering Stronger Digital Foundations for Manufacturing Growth.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Whether you're a manufacturer, OEM, engineering company or industrial supplier, Ace360degree helps transform technical expertise into digital experiences that build trust, generate enquiries and support long-term business success.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Request Manufacturing Growth Audit
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                Book Discovery Call
              </Link>
              <Link
                to="/industries/manufacturing"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                Explore Manufacturing Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
