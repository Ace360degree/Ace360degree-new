import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/case-amigo-academy-hero.jpg";

export const Route = createFileRoute("/case-amigo-academy")({
  head: () => ({
    meta: [
      { title: "Amigo Academy Case Study | Education Marketing, Technology & AI — Ace360degree" },
      {
        name: "description",
        content:
          "How Ace360degree partnered with Amigo Academy to build a future-ready education brand combining Growth Marketing, Branding, Technology and AI into one integrated growth strategy.",
      },
      { property: "og:title", content: "Amigo Academy — Building a Future-Ready Education Brand" },
      {
        property: "og:description",
        content:
          "A long-term strategic partnership transforming admissions, student engagement, institutional branding and digital learning systems.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AmigoCaseStudyPage,
});

/* ---------------- Data ---------------- */

const snapshot = [
  { k: "Industry", v: "Education · Skill Development · AI Education" },
  { k: "Engagement", v: "Active Strategic Partnership" },
  { k: "Primary Objective", v: "Build a Future-Ready Education Ecosystem" },
  { k: "Core Services", v: "Growth Marketing · Branding · Technology · AI" },
];

const challenges = [
  {
    t: "Limited Digital Visibility",
    b: "Prospective students were discovering competing institutions before finding Amigo Academy.",
  },
  {
    t: "Traditional Admissions Process",
    b: "The admissions journey required modernization and automation.",
  },
  {
    t: "Weak Brand Differentiation",
    b: "The academy needed stronger positioning in an increasingly competitive education market.",
  },
  {
    t: "Student Engagement",
    b: "Modern learners expect digital communication, online resources and seamless experiences.",
  },
  {
    t: "Technology Infrastructure",
    b: "The institution required scalable platforms capable of supporting long-term growth.",
  },
  {
    t: "AI Readiness",
    b: "Preparing students for the future also meant integrating AI into institutional operations.",
  },
];

const phases = [
  { n: "01", t: "Discover", b: "Understanding institutional objectives, target students, competition and growth opportunities." },
  { n: "02", t: "Define", b: "Building a positioning strategy aligned with the institution's long-term vision." },
  { n: "03", t: "Design", b: "Creating the digital identity, communication systems and student experiences." },
  { n: "04", t: "Develop", b: "Implementing websites, admissions workflows, CRM and digital learning infrastructure." },
  { n: "05", t: "Grow", b: "Supporting ongoing marketing, student acquisition, AI initiatives and institutional growth." },
];

const disciplines = [
  {
    t: "Growth Marketing",
    items: ["Education SEO", "GEO", "AEO", "Student Lead Generation", "Performance Marketing", "Content Marketing", "Social Media"],
  },
  {
    t: "Branding & Creative",
    items: ["Institutional Branding", "Prospectus Design", "Presentation Design", "Faculty Branding", "Corporate Communication"],
  },
  {
    t: "Technology & Digital Platforms",
    items: ["Website Development", "Admission CRM", "Student Portal", "Digital Learning Infrastructure", "Mobile Experience"],
  },
  {
    t: "AI & Business Transformation",
    items: ["AI Readiness Strategy", "AI Student Assistant", "AI Knowledge Systems", "AI Workflow Automation", "AI Learning Support"],
  },
];

const outcomes = [
  { t: "Stronger Brand", b: "Created a modern identity aligned with the future of education." },
  { t: "Better Admissions Foundation", b: "Built systems supporting scalable student acquisition." },
  { t: "Digital Student Experience", b: "Improved communication and engagement across the student journey." },
  { t: "Technology Ecosystem", b: "Created scalable digital infrastructure supporting institutional growth." },
  { t: "AI Readiness", b: "Positioned the academy for future AI adoption." },
  { t: "Long-Term Partnership", b: "Supporting continuous innovation rather than one-time project delivery." },
];

const unfolded = [
  "Institution Discovery & Strategic Planning",
  "Brand Development & Positioning",
  "Website & Student Experience",
  "Admissions Growth Systems",
  "AI Integration Roadmap",
  "Ongoing Strategic Growth Partnership",
];

const proofs = [
  { t: "Strategy Before Execution", b: "Every recommendation began with institutional objectives—not marketing tactics." },
  { t: "Long-Term Partnerships", b: "We focus on sustainable growth rather than isolated campaigns." },
  { t: "Cross-Disciplinary Expertise", b: "Marketing, branding, technology and AI operate together—not in silos." },
  { t: "Future-Ready Thinking", b: "Our work prepares institutions not only for today's admissions challenges but for tomorrow's AI-driven education landscape." },
];

const stack = [
  { t: "Growth Marketing", items: ["SEO", "GEO", "AEO", "Performance Marketing"] },
  { t: "Branding", items: ["Identity", "Communication", "Presentations", "Creative Assets"] },
  { t: "Technology", items: ["Website", "CRM", "Student Portal", "Automation"] },
  { t: "AI", items: ["Student Assistant", "Knowledge Systems", "Workflow Automation", "Learning Support"] },
];

/* ---------------- Page ---------------- */

function AmigoCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Amigo Academy — modern education ecosystem"
            className="h-full w-full object-cover opacity-25"
            width={1600}
            height={912}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              Success Story
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Building a Future-Ready Education Brand Through Marketing, Technology & AI
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
              Transforming admissions, student engagement, institutional branding and digital learning systems for{" "}
              <span className="text-foreground font-medium">Amigo Academy Pvt. Ltd.</span>
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {snapshot.map((s) => (
                <div key={s.k} className="rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
                  <div className="mt-1 text-sm font-medium">{s.v}</div>
                </div>
              ))}
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
              Education today is no longer about classrooms alone.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>Students expect digital experiences. Parents expect transparency. Institutions compete beyond geography.</p>
            <p>Technology and AI are reshaping how educational organizations attract, engage and retain students.</p>
            <p>
              Ace360degree partnered with Amigo Academy to build a modern education ecosystem combining Growth Marketing,
              Branding, Technology and AI into one integrated growth strategy.
            </p>
            <p>Rather than executing isolated campaigns, we became a long-term strategic partner focused on institutional growth.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">About the Client</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
            Building Future-Ready Professionals Through Modern Learning.
          </h2>
          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            Amigo Academy is an education and skill development institution focused on preparing students for future careers
            through practical learning and technology-enabled education. The institution recognized that attracting today's
            students requires more than academic excellence.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {["Strong institutional branding", "Better digital experiences", "Modern admissions systems", "AI readiness", "Continuous student engagement"].map(
              (i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-card p-5">
                  <div className="text-sm font-medium">{i}</div>
                </div>
              ),
            )}
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
            Education institutions today compete with hundreds of alternatives. Our focus extended beyond marketing to
            solving the business challenges that directly impact admissions, engagement and institutional growth.
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
              A Five-Phase Framework Built Around Educational Outcomes
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
              Rather than measuring success by individual deliverables, we focused on creating long-term institutional
              capabilities.
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
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">How the Partnership Unfolded</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">From Discovery to Long-Term Growth</h2>
        </div>
        <ol className="mt-12 relative border-l border-border/60 max-w-3xl ml-3">
          {unfolded.map((u, i) => (
            <li key={u} className="pl-8 pb-8 relative">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phase {i + 1}</div>
              <div className="mt-1 text-lg font-medium">{u}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* BLUEPRINT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">More Than A Success Story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">A Digital Education Blueprint</h2>
            <p className="mt-4 text-muted-foreground">
              Most educational institutions invest separately in Marketing, Technology, Admissions, Branding, Automation and
              AI. Amigo Academy demonstrates the advantage of integrating all these disciplines into a single long-term
              growth strategy.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Marketing", "Technology", "Admissions", "Branding", "Automation", "AI"].map((t) => (
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

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-card p-10 md:p-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Ready To Build The Future Of Education?
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Whether you're a school, university, coaching institute, EdTech company or skill development organization,
              Ace360degree helps educational institutions create stronger brands, attract more students and build
              future-ready digital ecosystems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Request Education Growth Audit
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                Book Discovery Call
              </Link>
              <Link
                to="/industries/education"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                Explore Education Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
