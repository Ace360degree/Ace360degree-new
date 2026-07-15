import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/livingconceptsheroace.png";
import bannerImg from "@/assets/livingconceptsace1.png";

export const Route = createFileRoute("/case-living-concepts")({
  head: () => ({
    meta: [
      { title: "Living Concepts Case Study | Luxury Interior Branding, Website & Digital Experience — Ace360degree" },
      {
        name: "description",
        content:
          "How Ace360degree helped Living Concepts elevate its digital presence, strengthen brand perception and create an online experience that reflects premium craftsmanship.",
      },
      { property: "og:title", content: "Living Concepts — A Luxury Digital Experience Blueprint" },
      {
        property: "og:description",
        content:
          "A strategic partnership transforming a premium interior design brand into an elegant, high-performance digital experience.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: LivingConceptsCaseStudyPage,
});

/* ---------------- Data ---------------- */

const snapshot = [
  { k: "Industry", v: "Luxury Interiors · Premium Furniture · Interior Design" },
  { k: "Engagement", v: "Strategic Digital Transformation" },
  { k: "Primary Objective", v: "Strengthen Premium Brand Positioning & Customer Experience" },
  { k: "Core Services", v: "Brand Strategy · Website · Content · Creative Direction · Digital Experience" },
];

const aboutPoints = [
  "Premium interior design expertise",
  "Luxury furniture craftsmanship",
  "Elegant living environments",
  "Refined aesthetic philosophy",
  "High-value client relationships",
];

const challenges = [
  {
    t: "Premium Brand Perception",
    b: "The digital presence needed to reflect the quality and sophistication of the brand.",
  },
  {
    t: "Project Storytelling",
    b: "Completed projects required better visual storytelling to inspire confidence among prospective clients.",
  },
  {
    t: "Customer Journey",
    b: "Simplify the journey from inspiration to consultation.",
  },
  {
    t: "Luxury Positioning",
    b: "Differentiate the brand within a competitive premium interior market.",
  },
  {
    t: "Mobile Experience",
    b: "Ensure seamless browsing across every device without compromising aesthetics.",
  },
  {
    t: "Future Growth",
    b: "Create a scalable platform supporting future collections, campaigns and digital initiatives.",
  },
];

const phases = [
  { n: "01", t: "Discover", b: "Understanding the brand philosophy, customer personas and premium market positioning." },
  { n: "02", t: "Define", b: "Crafting a digital strategy that reflects Living Concepts' commitment to design excellence." },
  { n: "03", t: "Design", b: "Creating an immersive digital experience focused on elegance, simplicity and visual storytelling." },
  { n: "04", t: "Develop", b: "Building a responsive, high-performance website with intuitive navigation and scalable architecture." },
  { n: "05", t: "Grow", b: "Supporting continuous optimization through content strategy, analytics and long-term digital consulting." },
];

const disciplines = [
  {
    t: "Brand Strategy",
    items: ["Premium Brand Positioning", "Customer Experience Strategy", "Brand Messaging", "Content Planning"],
  },
  {
    t: "Creative & Visual Design",
    items: ["Website UI/UX", "Project Storytelling", "Portfolio Presentation", "Creative Direction", "Lifestyle Content"],
  },
  {
    t: "Technology & Digital Platforms",
    items: ["Responsive Website", "Portfolio Management", "Lead Capture", "Performance Optimization", "Analytics"],
  },
  {
    t: "Growth & Optimization",
    items: ["SEO Foundation", "GEO Readiness", "AEO Readiness", "Content Strategy", "Customer Journey Optimization"],
  },
];

const outcomes = [
  { t: "Elevated Brand Perception", b: "A digital experience aligned with the premium quality of the brand." },
  { t: "Better Portfolio Presentation", b: "Projects presented through immersive layouts that showcase craftsmanship and design thinking." },
  { t: "Improved Customer Journey", b: "Simplified navigation from inspiration to enquiry." },
  { t: "Stronger Digital Foundation", b: "Created a scalable platform capable of supporting future campaigns and product expansion." },
  { t: "Enhanced Customer Confidence", b: "Professional storytelling strengthens trust before the first consultation." },
  { t: "Future-Ready Experience", b: "Prepared the brand for continued digital growth and evolving customer expectations." },
];

const unfolded = [
  "Brand Discovery & Customer Research",
  "Digital Strategy & Luxury Positioning",
  "Experience Design & Storytelling",
  "Website Development & Optimization",
  "Launch & Performance Enhancement",
  "Ongoing Digital Growth Support",
];

const proofs = [
  { t: "Design With Purpose", b: "Beautiful interfaces are only valuable when they support business growth." },
  { t: "Customer Experience First", b: "Every decision focused on creating trust, confidence and engagement." },
  { t: "Strategy Before Design", b: "Brand positioning guided every creative and technical decision." },
  { t: "Long-Term Thinking", b: "We build digital platforms that continue to support growth as businesses evolve." },
];

const stack = [
  { t: "Brand", items: ["Positioning", "Messaging", "Storytelling", "Visual Identity"] },
  { t: "Creative", items: ["UI/UX Design", "Portfolio Experience", "Lifestyle Imagery", "Digital Communication"] },
  { t: "Technology", items: ["Responsive Website", "CMS", "Portfolio Management", "Lead Generation", "Analytics"] },
  { t: "Growth", items: ["SEO Foundation", "GEO Readiness", "AEO Readiness", "Customer Journey", "Performance Optimization"] },
];

const relatedServices = [
  { t: "Brand Strategy & Positioning", to: "/brand-strategy" },
  { t: "Website Design & Development", to: "/website-design-development" },
  { t: "Corporate Communication Design", to: "/corporate-communication-design" },
  { t: "Motion Graphics & Animation", to: "/motion-graphics-animation" },
  { t: "SEO Services", to: "/search-visibility" },
  { t: "AI Customer Experience Solutions", to: "/ai-customer-experience-solutions" },
] as const;

/* ---------------- Page ---------------- */

function LivingConceptsCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
       <section className="border-b border-black/5 bg-[#fbfaf7]">
      <div className="mx-auto max-w-[1540px] px-6 py-8 md:py-10 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center rounded-full border border-[#f2d9af] bg-[#fff8ef] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#e7a62a]">
              Success Story
            </div>
 
            <h1 className="mt-4 max-w-[70ch] text-balance font-sans text-[34px] font-semibold leading-[0.94] tracking-[-0.055em] text-[#1f1f1f] sm:text-[46px] md:text-[54px] lg:text-[60px]">
              Designing a Premium Digital Experience for a Luxury Interior &
              Furniture Brand
            </h1>
 
            <p className="mt-5 max-w-[55ch] text-[14px] leading-[1.55] text-[#66615a] sm:text-[15px]">
              How Ace360degree helped{" "}
              <span className="font-medium text-[#222]">Living Concepts</span>{" "}
              elevate its digital presence, strengthen brand perception and
              create an online experience that reflects premium craftsmanship.
            </p>
 
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {snapshot.map((s) => (
                <div
                  key={s.k}
                  className="min-h-[84px] rounded-[10px] border border-[#ece7df] bg-white px-4 py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                >
                  <div className="text-[9px] uppercase tracking-[0.28em] text-[#a8a29b]">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[11px] leading-[1.35] text-[#1f1f1f]">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          <div className="lg:col-span-5 lg:pt-1">
            <div className="ml-auto w-full max-w-[620px] overflow-hidden rounded-[8px] bg-[#efe8df] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <img
                src={heroImg}
                alt="Living Concepts premium living room concept"
                className="h-full w-full object-cover object-center"
                width={1200}
                height={900}
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
              Luxury isn't sold through products.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              It's experienced through every interaction. From the first website visit to the final consultation,
              customers evaluate design quality, craftsmanship, attention to detail and brand credibility long before
              making a purchase.
            </p>
            <p>
              For Living Concepts, the challenge wasn't simply creating a new website — it was creating a digital
              experience worthy of the premium spaces they design.
            </p>
            <p>
              Ace360degree partnered with Living Concepts to transform their digital presence into an elegant,
              high-performance platform that reflects the sophistication of their brand while supporting long-term
              business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">About the Client</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
            Creating Timeless Spaces Through Exceptional Design.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Living Concepts is a premium interior design and luxury furniture brand known for delivering elegant
              living environments that combine craftsmanship, functionality and refined aesthetics.
            </p>
            <p>
              As customer expectations evolved, the brand recognized that its digital experience needed to reflect the
              same level of sophistication found in its physical products and completed projects.
            </p>
            <p>
              Ace360degree partnered with Living Concepts to bridge the gap between exceptional design and exceptional
              digital experiences.
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
            Luxury customers don't purchase products. They invest in confidence, trust, lifestyle and experience.
            Every digital interaction influences that decision.
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
              A Five-Phase Framework Built Around Luxury Customer Experience
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
              The objective was to create more than a beautiful website. The goal was to strengthen how customers
              perceive the Living Concepts brand.
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
      <section className="bg-[#fbfaf7] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.34em] text-[#e7a62a]">
                How the Partnership Unfolded
              </div>
              <h2 className="mt-3 max-w-[12ch] text-[36px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1f1f1f] sm:text-[44px] md:text-[50px]">
                From Discovery to Long-Term Growth
              </h2>

              <ol className="mt-10 space-y-6">
                {unfolded.map((u, i) => (
                  <li key={u} className="relative pl-9">
                    <span className="absolute left-[2px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#ffb22f]" />
                    <span className="absolute left-[7px] top-7 bottom-[-22px] w-px bg-[#ece4d8]" />
                    <div className="text-[9px] uppercase tracking-[0.34em] text-[#a8a29b]">
                      Phase {i + 1}
                    </div>
                    <div className="mt-1 text-[17px] leading-[1.2] text-[#1f1f1f]">
                      {u}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-6 lg:pt-4">
              <div className="ml-auto w-full max-w-[370px] overflow-hidden rounded-[8px] bg-[#efe8df] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <img
                  src={bannerImg}
                  alt="Living Concepts luxury interior experience"
                  className="h-full w-full object-cover object-center"
                  width={1200}
                  height={900}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUEPRINT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">More Than A Success Story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">A Blueprint for Luxury Digital Experiences</h2>
            <p className="mt-4 text-muted-foreground">
              Luxury brands succeed when every interaction communicates quality. Living Concepts demonstrates how
              thoughtful branding, elegant design, compelling storytelling and seamless technology work together to
              create memorable customer experiences. This engagement reflects Ace360degree's belief that digital
              experiences should be as refined as the brands they represent.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Branding", "Website", "Portfolio", "Content", "SEO", "Analytics"].map((t) => (
              <span key={t} className="rounded-full border border-border/60 bg-card px-4 py-1.5 text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY INSIGHT */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Industry Insight</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Luxury Buyers Choose Brands Before They Choose Products.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Today's premium customers compare brands online long before requesting a consultation. They evaluate
              design philosophy, project quality, customer experience and digital credibility.
            </p>
            <p>
              Brands that combine exceptional design with exceptional digital experiences create stronger emotional
              connections and convert more high-value enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
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
                See how Ace360degree supports luxury design brands across services and industries.
              </p>
              <Link
                to="/industries_/architecture"
                className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Architecture, Interior Design & Real Estate →
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
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-card p-10 md:p-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Design a Digital Experience That Reflects the Quality of Your Brand.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Whether you're an architecture firm, interior designer, luxury furniture brand or premium lifestyle
              business, Ace360degree helps transform your expertise into digital experiences that inspire confidence
              and generate high-value opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Request Brand Experience Audit
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                Book Discovery Call
              </Link>
              <Link
                to="/industries_/architecture"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                Explore Architecture & Design Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

