import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/heroRexelloy1.jpg";
import aboutImg from "@/assets/bannerRexelloy1.jpg";
import bannerImg from "@/assets/bannerRexelloy2.jpg";

export const Route = createFileRoute("/case-rexello-castors")({
  head: () => ({
    meta: [
      { title: "Rexello Castors Case Study | Manufacturing Branding, Website & SEO — Ace360degree" },
      {
        name: "description",
        content:
          "How Ace360degree partnered with Rexello Castors to transform a traditional industrial manufacturer into a modern digital-first brand through branding, technology, SEO and growth marketing.",
      },
      { property: "og:title", content: "Rexello Castors — A Manufacturing Growth Blueprint" },
      {
        property: "og:description",
        content:
          "A long-term strategic partnership modernizing digital presence, product communication and lead generation for a legacy industrial manufacturer.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: RexelloCaseStudyPage,
});

/* ---------------- Data ---------------- */

const snapshot = [
  { k: "Industry", v: "Industrial Manufacturing · Castors & Material Handling" },
  { k: "Engagement", v: "Active Strategic Partnership" },
  { k: "Primary Objective", v: "Strengthen Digital Presence & Sustainable Growth" },
  { k: "Core Services", v: "Growth Marketing · Branding · Website · SEO · Content" },
];

const aboutPoints = [
  "Decades of manufacturing expertise",
  "Trusted reputation in industrial markets",
  "Diverse product portfolio",
  "Quality engineering products",
  "Long-term lead generation systems",
];

const challenges = [
  {
    t: "Limited Digital Visibility",
    b: "Despite a strong offline reputation, digital discoverability was limited, reducing opportunities to attract new industrial buyers.",
  },
  {
    t: "Outdated Digital Experience",
    b: "The existing digital presence did not fully communicate the scale, expertise and product capabilities of the business.",
  },
  {
    t: "Product Communication",
    b: "Complex industrial products required structured presentation, technical information and easier navigation for buyers.",
  },
  {
    t: "Search Visibility",
    b: "Improve organic visibility for product and industry-specific searches through a long-term SEO strategy.",
  },
  {
    t: "Brand Positioning",
    b: "Strengthen Rexello's positioning as a trusted, modern and innovation-driven manufacturing company.",
  },
  {
    t: "Scalable Growth Systems",
    b: "Create a digital ecosystem capable of supporting future marketing initiatives, lead generation and customer engagement.",
  },
];

const phases = [
  { n: "01", t: "Discover", b: "Understanding the business, product portfolio, target industries, buyer personas and competitive landscape." },
  { n: "02", t: "Define", b: "Developing a digital strategy aligned with Rexello's growth objectives and long-term vision." },
  { n: "03", t: "Design", b: "Creating a modern user experience that reflects engineering excellence and simplifies product discovery." },
  { n: "04", t: "Develop", b: "Building scalable digital platforms, SEO foundations and content structures that support business growth." },
  { n: "05", t: "Grow", b: "Driving continuous optimization through SEO, content marketing, analytics and strategic consulting." },
];

const disciplines = [
  {
    t: "Growth Marketing",
    items: ["Manufacturing SEO", "GEO (Generative Engine Optimization)", "AEO (Answer Engine Optimization)", "Content Marketing", "B2B Lead Generation", "Google Business Optimization"],
  },
  {
    t: "Branding & Creative",
    items: ["Brand Positioning", "Product Communication", "Corporate Identity Support", "Marketing Collateral", "Technical Content Strategy"],
  },
  {
    t: "Technology & Digital Platforms",
    items: ["Corporate Website", "Product Catalogue Experience", "Responsive Design", "Lead Capture Systems", "Analytics Integration"],
  },
  {
    t: "Business Intelligence & Optimization",
    items: ["Performance Tracking", "User Behaviour Insights", "SEO Monitoring", "Continuous Digital Improvements"],
  },
];

const outcomes = [
  { t: "Stronger Digital Brand", b: "A modern online presence that reflects Rexello's manufacturing expertise and market leadership." },
  { t: "Better Product Discovery", b: "Improved navigation and structured presentation make it easier for industrial buyers to explore products." },
  { t: "Improved Search Foundation", b: "A robust SEO strategy designed to increase long-term organic visibility for industrial searches." },
  { t: "Enhanced Customer Experience", b: "A faster, cleaner and more informative experience for customers, distributors and procurement professionals." },
  { t: "Scalable Marketing Ecosystem", b: "A digital foundation that supports ongoing marketing, lead generation and future business expansion." },
  { t: "Long-Term Strategic Partnership", b: "An ongoing collaboration focused on continuous improvement rather than one-time project delivery." },
];

const unfolded = [
  "Business Discovery & Market Analysis",
  "Digital Strategy & Brand Positioning",
  "Website Experience & Product Architecture",
  "SEO, Content & Lead Generation Foundation",
  "Performance Monitoring & Optimization",
  "Ongoing Strategic Growth Partnership",
];

const proofs = [
  { t: "Strategy Before Execution", b: "Every recommendation was driven by business objectives rather than isolated deliverables." },
  { t: "Long-Term Partnerships", b: "We focus on continuous growth through strategic collaboration, not one-time implementations." },
  { t: "Manufacturing Expertise", b: "Our understanding of industrial buying behaviour enables us to build marketing and digital experiences that resonate with engineers, procurement teams and decision-makers." },
  { t: "Integrated Growth", b: "Branding, marketing, technology and optimization work together to create sustainable competitive advantage." },
];

const stack = [
  { t: "Growth Marketing", items: ["Manufacturing SEO", "GEO", "AEO", "Content Marketing", "Lead Generation"] },
  { t: "Branding", items: ["Brand Positioning", "Product Storytelling", "Corporate Communication", "Visual Consistency"] },
  { t: "Technology", items: ["Website Development", "Product Catalogue Architecture", "Lead Capture", "Analytics"] },
  { t: "Business Optimization", items: ["SEO Performance", "Conversion Tracking", "User Insights", "Continuous Improvement"] },
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

function RexelloCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/5 bg-white">
        
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl lg:max-w-[58%]">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              Success Story
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Transforming a Traditional Industrial Manufacturer into a Modern Digital-First Brand
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
              How Ace360degree partnered with{" "}
              <span className="text-foreground font-medium">Rexello Castors</span> to strengthen brand positioning,
              digital visibility and long-term business growth.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {snapshot.map((s) => (
                <div key={s.k} className="rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
                  <div className="mt-1 text-sm font-medium">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-1 hidden lg:block lg:absolute lg:right-6 lg:top-1/2 lg:w-[40%] lg:max-w-[600px] lg:-translate-y-1/2">
              <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
                <img
                  src={heroImg}
                  alt="Rexello Castors growth and digital-first brand visual"
                  className="h-full w-full object-cover object-center"
                  width={1200}
                  height={720}
                  loading="lazy"
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
              Manufacturing excellence alone is no longer enough.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Today's industrial buyers research suppliers online, compare technical capabilities, evaluate credibility
              and expect seamless digital experiences before initiating an enquiry.
            </p>
            <p>
              For a legacy manufacturing brand like Rexello Castors, the opportunity wasn't just to modernize its
              website—it was to build a stronger digital foundation capable of supporting future growth.
            </p>
            <p>
              Ace360degree partnered with Rexello Castors as a long-term strategic growth partner, combining branding,
              technology, SEO and digital marketing to help the company evolve into a modern, digitally competitive
              industrial brand.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section className="border-b border-black/5 bg-[#fbfaf7]">
  <div className="mx-auto max-w-[1460px] px-7 py-10 md:px-8 md:py-12 lg:py-14">
    <div className="grid items-start gap-10 lg:grid-cols-[1.55fr_0.65fr] lg:gap-16">
      {/* Left Content */}
      <div className="pt-10 lg:pt-11">
        <div className="text-[9px] font-medium uppercase tracking-[0.34em] text-[#e7a62a]">
          About the Client
        </div>

        <h2 className="mt-3 max-w-[720px] text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#1f1f1f] sm:text-[32px] lg:text-[35px]">
          Engineering Reliable Mobility Solutions for Industries Worldwide.
        </h2>

        <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Rexello Castors Pvt. Ltd. is one of India&apos;s trusted
            manufacturers of industrial castors and material handling mobility
            solutions, serving diverse industries with high-quality engineering
            products.
          </p>

          <p>
            With decades of manufacturing expertise and a strong reputation in
            the market, the next stage of growth required a stronger digital
            presence that reflected the company&apos;s leadership and technical
            capabilities.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-start lg:justify-center">
        <div className="h-[300px] w-full max-w-[310px] overflow-hidden bg-[#eee9e1]">
          <img
            src={aboutImg}
            alt="Rexello Castors industrial logistics visual"
            className="h-full w-full object-cover object-center"
            width={900}
            height={900}
            loading="lazy"
          />
        </div>
      </div>
    </div>

    {/* Feature Cards */}
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {aboutPoints.map((item) => (
        <div
          key={item}
          className="
            flex min-h-[80px] items-center
            rounded-[6px]
            border border-[#efebe5]
            bg-white
            px-5 py-4
          "
        >
          <div className="text-sm font-medium">
            {item}
          </div>
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
            Industrial buyers have changed significantly. The project focused on solving business challenges rather than
            simply redesigning digital assets.
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
              A Five-Phase Growth Framework Built Around Manufacturing Excellence
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
              Rather than focusing on short-term campaigns, the engagement was designed to create long-term business
              value.
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
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">How the Partnership Unfolded</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">From Discovery to Long-Term Growth</h2>
            <ol className="mt-12 relative border-l border-border/60 ml-3">
              {unfolded.map((u, i) => (
                <li key={u} className="pl-8 pb-8 relative last:pb-0">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phase {i + 1}</div>
                  <div className="mt-1 text-lg font-medium">{u}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:pl-8">
            <div className="overflow-hidden rounded-[22px] bg-muted shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src={bannerImg}
                alt="Rexello Castors manufacturing and digital growth banner"
                className="h-full w-full object-cover"
                width={1200}
                height={760}
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
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">A Manufacturing Growth Blueprint</h2>
            <p className="mt-4 text-muted-foreground">
              Many manufacturers invest separately in branding, websites, SEO and lead generation. Rexello Castors
              demonstrates the value of integrating these capabilities into one cohesive strategy. By aligning
              marketing, technology and business objectives, the company established a stronger foundation for
              sustainable digital growth.
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

      {/* STACK */}
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

      {/* PROOFS */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
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
        </div>
      </section>

      {/* RELATED */}
      <section className="container mx-auto px-6 py-20 md:py-28">
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
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl
      border border-black/5
      bg-[linear-gradient(163deg,rgba(255,179,48,0.25)_20%,rgba(255,179,48,0.08)_50%,#ffffff_65%,#ffffff_100%)]
      p-10 md:p-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Building Industrial Brands That Engineers Trust and Buyers Choose.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Whether you're a manufacturer, OEM, engineering company or industrial supplier, Ace360degree helps you
              combine branding, marketing, technology and AI into a scalable growth ecosystem that drives long-term
              business success.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
              >
                Request Manufacturing Growth Audit
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-muted hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                Book Discovery Call
              </Link>
              <Link
                to="/industries/manufacturing"
                className="inline-flex items-center rounded-2xl px-6 py-3 text-sm font-medium shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-muted hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.14)]"
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
