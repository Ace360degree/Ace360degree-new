import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/legaacyy1hero.jpg";
import lessonsBanner from "@/assets/legaacyy2banner.png";

export const Route = createFileRoute("/success-stories/enterprise-experience")({
  head: () => ({
    meta: [
      {
        title:
          "Enterprise Experience That Built Our Foundation — Ace360degree",
      },
      {
        name: "description",
        content:
          "Bayer, Häfele, Schott Kaisha, ARCIL and Al-Nuaim — the enterprise engagements that shaped Ace360degree into the Growth, Branding, Technology and AI partner it is today.",
      },
      {
        property: "og:title",
        content: "Enterprise Experience That Built Our Foundation",
      },
      {
        property: "og:description",
        content:
          "An executive story of how enterprise engagements with Bayer, Häfele, Schott Kaisha, ARCIL and Al-Nuaim shaped our growth, technology and AI practice.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: EnterpriseExperiencePage,
});

/* ---------------- Data ---------------- */

const enterprises = [
  {
    n: "01",
    brand: "Bayer India",
    sector: "Pharmaceuticals & Life Sciences",
    title: "Corporate Communication & Digital Activation",
    body: "Developed multiple internal digital platforms and communication initiatives supporting employee engagement and enterprise communication across business units.",
  },
  {
    n: "02",
    brand: "Häfele India",
    sector: "Architectural Hardware",
    title: "Product Storytelling & Creative Communication",
    body: "Delivered creative campaigns and digital communication assets supporting one of the world's leading architectural hardware brands across India.",
  },
  {
    n: "03",
    brand: "Schott Kaisha",
    sector: "Specialty Glass · Pharma Packaging",
    title: "Corporate Website & B2B Communication",
    body: "Supported the digital presence of a global specialty glass manufacturer through corporate website development and structured B2B communication.",
  },
  {
    n: "04",
    brand: "ARCIL India",
    sector: "Financial Services",
    title: "Corporate Identity & Digital Foundation",
    body: "Designed a professional digital presence aligned with the organization's enterprise positioning within India's regulated financial services sector.",
  },
  {
    n: "05",
    brand: "Al-Nuaim",
    sector: "Premium Lifestyle",
    title: "Premium Brand Experience",
    body: "Created premium branding and digital communication assets reflecting the company's positioning, heritage and presence in international markets.",
  },
];

const lessons = [
  {
    t: "Enterprise Delivery Standards",
    b: "Working with established organizations taught us the importance of structured processes, governance and long-term thinking.",
  },
  {
    t: "Strategic Communication",
    b: "Large organizations require consistency across branding, messaging and stakeholder communication at every touchpoint.",
  },
  {
    t: "Scalable Digital Systems",
    b: "Enterprise projects demand technology that balances usability, scalability and performance under real-world load.",
  },
  {
    t: "Cross-Functional Collaboration",
    b: "Success depends on close collaboration between leadership, marketing, IT and business teams across geographies.",
  },
  {
    t: "Quality Without Compromise",
    b: "Every detail matters — from design systems and editorial tone to deployment standards and post-launch governance.",
  },
];

const timeline = [
  { year: "2009", t: "Foundation of Ace Interactives", b: "Focused on creative communication, websites and digital experiences." },
  { year: "2010", t: "Enterprise Beginnings", b: "Started collaborating with larger organizations, learning enterprise delivery standards." },
  { year: "2010–13", t: "Creative & Brand Expansion", b: "Strengthened capabilities across corporate branding, communication and digital design." },
  { year: "2012", t: "Manufacturing & B2B", b: "Expanded into industrial communication, corporate websites and technical storytelling." },
  { year: "2014", t: "Financial Services", b: "Built digital foundations for organizations in regulated industries." },
  { year: "2018", t: "Education & Learning", b: "Shifted toward long-term partnerships and technology-enabled education initiatives." },
  { year: "2022", t: "Growth Transformation", b: "Expanded into Growth Marketing, SEO, Performance Marketing and Digital Transformation." },
  { year: "2025+", t: "Growth, Technology & AI", b: "Evolved into an integrated consulting partner delivering Growth, Branding, Technology and AI solutions." },
];

const shapes = [
  { t: "Strategic Thinking", b: "Every project begins with understanding business objectives — not deliverables." },
  { t: "Long-Term Partnerships", b: "We focus on sustainable growth rather than one-time implementations." },
  { t: "Multi-Disciplinary Execution", b: "Branding, marketing, technology and AI work as one integrated ecosystem." },
  { t: "Scalable Solutions", b: "We build platforms designed to evolve with changing business needs." },
];

const activePartners = [
  { brand: "MOS Utility", to: "/case-mos-utility" },
  { brand: "Rexello Castors", to: "/case-rexello-castors" },
  { brand: "Cosmos Seals India", to: "/case-cosmos-seals" },
  { brand: "Amigo Academy", to: "/case-amigo-academy" },
  { brand: "Living Concepts", to: "/case-living-concepts" },
] as const;

const compare = [
  ["Corporate Communication", "Growth Marketing"],
  ["Website Development", "Technology Platforms"],
  ["Brand Design", "Brand Strategy"],
  ["Digital Campaigns", "Business Transformation"],
  ["Enterprise Projects", "Long-Term Strategic Partnerships"],
  ["Digital Solutions", "AI & Business Intelligence"],
];

/* ---------------- Page ---------------- */

function EnterpriseExperiencePage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />
      <main>
        <Hero />
        <Featured />
        <Lessons />
        <Timeline />
        <Shapes />
        <ActivePartners />
        <ThenToday />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="bg-white text-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-7">
            <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
              Success Stories &middot; Enterprise Experience
            </div>

            <h1 className="mt-5 font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-dark sm:text-[48px] md:text-[54px]">
              Enterprise Experience That
              <br />
              <span className="text-brand">Built Our Foundation</span>
              <span className="text-brand">.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-[1.6] text-dark/90">
              Every engagement strengthened our thinking. Every partnership expanded our capabilities.
            </p>

            <div className="mt-10 grid gap-6 text-[14.5px] leading-[1.7] text-dark/75 sm:grid-cols-2 sm:gap-10">
              <p>
                Before Ace360degree became a Growth, Branding, Technology and AI partner, we
                worked with leading enterprise organizations across pharmaceuticals,
                manufacturing, financial services, architecture and lifestyle brands.
              </p>
              <p>
                These collaborations challenged us to think beyond execution — to understand
                governance, large-scale digital communication, stakeholder management and
                enterprise-grade delivery. While these projects represent an earlier chapter of
                our journey, the experience continues to shape every client engagement today.
              </p>
            </div>
          </div>

          {/* Right column: image */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-[420px] overflow-hidden lg:ml-auto">
              <img
                src={heroImg}
                alt="Enterprise experience boardroom collaboration"
                className="h-full w-full object-cover"
                width={900}
                height={620}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------------- Featured Enterprise Cards ---------------- */

function Featured() {
  return (
    <section className="bg-dark text-canvas py-24 lg:py-32 border-t border-canvas/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand">
              Featured Enterprise Experience
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight">
              Five engagements that{" "}
              <em className="text-brand not-italic">shaped how we work</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-canvas/65 leading-relaxed max-w-xl">
            Each of these organizations brought a distinct discipline,
            governance model and standard of execution that became part of our
            DNA as a consulting partner.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-canvas/10">
          {enterprises.map((e) => (
            <article
              key={e.brand}
              className="group bg-dark p-8 lg:p-10 hover:bg-canvas/[0.03] transition relative flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.24em] text-brand">
                  {e.n}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-canvas/45">
                  {e.sector}
                </div>
              </div>
              <h3 className="mt-10 font-serif text-3xl tracking-tight">
                {e.brand}
              </h3>
              <div className="mt-3 text-sm font-medium text-canvas/80">
                {e.title}
              </div>
              <p className="mt-5 text-sm text-canvas/65 leading-relaxed">
                {e.body}
              </p>
              <div className="mt-10 pt-6 border-t border-canvas/10 text-[11px] uppercase tracking-[0.22em] text-canvas/40">
                Enterprise Engagement · Past Chapter
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-canvas/55 max-w-3xl leading-relaxed">
          These brands are presented as milestones in Ace360degree's evolution,
          not as active client relationships.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Lessons ---------------- */

function Lessons() {
  const lessonTiles = [...lessons, null];

  return (
    <section className="bg-[#fbfaf7] py-14 md:py-18 lg:py-20">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.34em] text-dark/40">
              What These Projects Taught Us
            </div>
            <h2 className="mt-4 max-w-[15ch] font-serif text-[38px] leading-[0.94] tracking-[-0.04em] text-dark sm:text-[50px] md:text-[50px]">
              The disciplines we{" "}
              <span className="text-brand">carried forward.</span>
            </h2>

            <div className="mt-10 overflow-hidden rounded-[12px] bg-[#eee6dc] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <img
                src={lessonsBanner}
                alt="Wooden growth staircase representing enterprise lessons"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {lessonTiles.map((l, index) => {
                const isPlaceholder = l === null;
                const isRightColumn = index % 2 === 1;
                const isLowerRow = index >= 2;

                return (
                  <div
                    key={isPlaceholder ? "lesson-placeholder" : l.t}
                    className={[
                      "min-h-[132px] px-6 py-7 md:px-8 md:py-8",
                      isLowerRow ? "border-t border-[#e6e1d9]" : "",
                      isRightColumn ? "md:border-l" : "",
                      isPlaceholder ? "bg-[#e3e3e1]" : "bg-transparent",
                    ].join(" ")}
                  >
                    {isPlaceholder ? null : (
                      <>
                        <h3 className="max-w-[16ch] font-serif text-[18px] leading-[1.15] tracking-[-0.02em] text-dark">
                          {l.t}
                        </h3>
                        <p className="mt-3 max-w-[27ch] text-[14px] leading-[1.7] text-dark/60">
                          {l.b}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */

function Timeline() {
  return (
    <section className="bg-dark text-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-[11px] uppercase tracking-[0.22em] text-brand">
          Our Evolution · 2009 — 2025+
        </div>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight max-w-3xl">
          From Corporate Communication to{" "}
          <em className="text-brand not-italic">
            Growth, Technology & AI
          </em>
          .
        </h2>

        <div className="mt-16 relative">
          <div
            className="absolute left-0 right-0 top-3 h-px bg-canvas/15 hidden md:block"
            aria-hidden
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {timeline.map((m, i) => (
              <li key={i} className="relative">
                <div className="hidden md:block size-2.5 rounded-full bg-brand mb-5 relative z-10" />
                <div className="text-brand font-serif text-2xl tracking-tight">
                  {m.year}
                </div>
                <div className="mt-2 text-sm font-medium text-canvas">
                  {m.t}
                </div>
                <p className="mt-2 text-sm text-canvas/65 leading-relaxed">
                  {m.b}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Shapes ---------------- */

function Shapes() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-[11px] uppercase tracking-[0.22em] text-dark/55">
          How This Experience Shapes Our Work Today
        </div>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight max-w-3xl text-balance">
          Capabilities that continue to{" "}
          <em className="text-brand not-italic">benefit every client</em>.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/10">
          {shapes.map((s, i) => (
            <div key={s.t} className="bg-canvas p-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand">
                0{i + 1}
              </div>
              <div className="mt-6 font-serif text-2xl tracking-tight">
                {s.t}
              </div>
              <p className="mt-3 text-sm text-dark/70 leading-relaxed">
                {s.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Active Partners ---------------- */

function ActivePartners() {
  return (
    <section className="bg-dark text-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand">
              From Enterprise Experience to Active Partnerships
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight">
              Today's{" "}
              <em className="text-brand not-italic">long-term partners</em>.
            </h2>
            <p className="mt-6 text-canvas/70 leading-relaxed max-w-lg">
              The knowledge gained through enterprise engagements supports
              ongoing collaborations with growth-stage and established
              organizations across categories.
            </p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-canvas/10">
            {activePartners.map((p) => (
              <li key={p.brand}>
                <Link
                  to={p.to}
                  className="group block bg-dark p-7 hover:bg-canvas/[0.04] transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl tracking-tight">
                      {p.brand}
                    </span>
                    <span className="text-brand text-sm group-hover:translate-x-1 transition">
                      Read story →
                    </span>
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-canvas/45">
                    Active Strategic Partnership
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-canvas/70 leading-relaxed max-w-3xl">
          This progression reflects the evolution of Ace360degree — from a
          creative and digital execution company to a strategic Growth,
          Branding, Technology and AI partner.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Then vs Today ---------------- */

function ThenToday() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-[11px] uppercase tracking-[0.22em] text-dark/55">
          Our Journey at a Glance
        </div>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight max-w-3xl text-balance">
          Then{" "}
          <span className="text-dark/30">vs</span>{" "}
          <em className="text-brand not-italic">Today</em>.
        </h2>

        <div className="mt-14 overflow-hidden border border-dark/10">
          <div className="grid grid-cols-2 bg-dark/[0.04] text-[11px] uppercase tracking-[0.22em] text-dark/55">
            <div className="px-6 py-4">Then</div>
            <div className="px-6 py-4 border-l border-dark/10">Today</div>
          </div>
          {compare.map(([a, b], i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-t border-dark/10 text-base md:text-lg"
            >
              <div className="px-6 py-5 font-serif text-dark/70">{a}</div>
              <div className="px-6 py-5 border-l border-dark/10 font-serif text-dark">
                <span className="text-brand mr-2">→</span>
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="bg-dark text-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
          Every project builds experience.{" "}
          <em className="text-brand not-italic">
            Every partnership builds the future.
          </em>
        </h2>
        <div className="mt-8 space-y-2 text-canvas/75 text-lg leading-relaxed">
          <p>Our enterprise experience gave us the discipline.</p>
          <p>Our active partnerships demonstrate the impact.</p>
          <p>
            Today, we combine both to help businesses accelerate growth
            through strategy, branding, technology and AI.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 text-sm font-semibold hover:brightness-95 transition"
          >
            Explore Success Stories
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-canvas/30 text-canvas px-6 py-3 text-sm font-semibold hover:bg-canvas/5 transition"
          >
            Book Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}


