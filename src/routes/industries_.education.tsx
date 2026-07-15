import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  School,
  BookOpen,
  Users,
  Building2,
  Briefcase,
  Laptop,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Cpu,
  Target,
  Plus,
  Minus,
  Search,
  Star,
  Smartphone,
  FileText,
  Sparkles,
  LineChart,
  MessagesSquare,
  CalendarCheck,
  Mic,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroImg from "@/assets/industry-education.1111.jpg";
import caseAmigo from "@/assets/case-amigo-academy.117.jpg";

export const Route = createFileRoute("/industries_/education")({
  component: EducationPage,
  head: () => ({
    meta: [
      {
        title:
          "Marketing, Technology & AI Solutions for Educational Institutions & EdTech Companies | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps schools, colleges, universities, coaching institutes and EdTech companies increase admissions, strengthen institutional branding and modernize operations through Growth Marketing, Technology and AI.",
      },
      {
        property: "og:title",
        content:
          "Education Marketing, Technology & AI Solutions — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Strategic growth partner for schools, colleges, universities, coaching institutes, skill development institutes and EdTech companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-[900ms] ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground/10 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <span className="text-base font-medium text-foreground sm:text-lg">
          {q}
        </span>
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      {open && (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/70 sm:text-base">
          {a}
        </p>
      )}
    </div>
  );
}

function EducationPage() {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Low Student Enquiries",
      body: "Generate consistent admission enquiries through education SEO, GEO, paid media and admissions-focused campaigns.",
    },
    {
      icon: Search,
      title: "Weak Google Visibility",
      body: "Help schools, colleges and coaching institutes rank for course, location and competitive exam searches.",
    },
    {
      icon: Laptop,
      title: "Outdated Website",
      body: "Modernize websites into high-trust digital experiences that convert visitors into qualified applicants.",
    },
    {
      icon: MessagesSquare,
      title: "Poor Parent Communication",
      body: "Automate parent communication, updates and admission journeys using CRM and AI assistants.",
    },
    {
      icon: Workflow,
      title: "Manual Admission Process",
      body: "Digitize the entire admissions funnel with online applications, document collection and counsellor workflows.",
    },
    {
      icon: Users,
      title: "Low Student Engagement",
      body: "Strengthen student communities, learning experiences and digital touchpoints across the journey.",
    },
    {
      icon: Sparkles,
      title: "Weak Institutional Branding",
      body: "Build an aspirational education brand with positioning, identity, faculty branding and campus storytelling.",
    },
    {
      icon: Cpu,
      title: "No Marketing Automation",
      body: "Implement CRM, lead scoring and journey automation to convert enquiries into admissions at scale.",
    },
  ];

  const segments = [
    {
      icon: School,
      title: "Schools",
      body: "CBSE, ICSE, State Boards and International Schools — admissions growth, parent trust and digital experiences.",
    },
    {
      icon: GraduationCap,
      title: "Colleges & Universities",
      body: "Private colleges, autonomous institutions, professional colleges and universities — branding, admissions and digital transformation.",
    },
    {
      icon: BookOpen,
      title: "Coaching Institutes",
      body: "JEE, NEET, UPSC, CA and Commerce coaching — lead generation, faculty branding and student community building.",
    },
    {
      icon: Briefcase,
      title: "Skill Development Institutes",
      body: "Vocational training, professional certification and government training programs — visibility, enrolment and placement marketing.",
    },
    {
      icon: Laptop,
      title: "EdTech Companies",
      body: "Learning platforms, online courses and AI-led EdTech — growth marketing, positioning and product-led acquisition.",
    },
    {
      icon: Building2,
      title: "Corporate Training Companies",
      body: "Leadership development, technical training and employee learning platforms — B2B marketing and demand generation.",
    },
  ];

  const journey = [
    "Student Awareness",
    "Website Visit",
    "Course Exploration",
    "Lead Enquiry",
    "Counselling",
    "Admission",
    "Student Experience",
    "Alumni Advocacy",
  ];

  const pillars = [
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      items: [
        "Education SEO",
        "GEO",
        "AEO",
        "Google Ads",
        "Performance Marketing",
        "Social Media",
        "Content Marketing",
        "Admissions Marketing",
      ],
    },
    {
      icon: Sparkles,
      title: "Branding & Creative",
      items: [
        "Institution Branding",
        "Faculty Branding",
        "Course Brochures",
        "Campus Videos",
        "Corporate Communication",
        "Presentation Design",
      ],
    },
    {
      icon: Cpu,
      title: "Technology & Digital Platforms",
      items: [
        "Website Development",
        "Student Portal",
        "Admission CRM",
        "Learning Platforms",
        "Mobile Apps",
        "ERP Integration",
      ],
    },
    {
      icon: BrainCircuit,
      title: "AI & Business Transformation",
      items: [
        "AI Admission Assistant",
        "AI Student Chatbot",
        "AI FAQ Assistant",
        "AI Faculty Knowledge Base",
        "AI Content Assistant",
        "AI Analytics",
        "AI Workflow Automation",
      ],
    },
  ];

  const aiBenefits = [
    "Personalized learning experiences",
    "Admission automation and enquiry qualification",
    "24x7 student and parent support",
    "Faculty productivity and content creation",
    "Learning analytics and outcome tracking",
    "Institutional knowledge management",
    "Generative content for courses and marketing",
    "Virtual counsellors and assistants",
  ];

  const whyUs = [
    "Experience Since 2009",
    "Marketing + Technology + AI",
    "Education Industry Understanding",
    "Admissions-Focused Strategy",
    "End-to-End Execution",
    "Long-Term Growth Partner",
    "Future-Ready Solutions",
  ];

  const futureTopics = [
    { icon: BrainCircuit, label: "AI Tutors" },
    { icon: Sparkles, label: "Personalized Learning" },
    { icon: Laptop, label: "Hybrid Education" },
    { icon: Building2, label: "Digital Campuses" },
    { icon: LineChart, label: "Learning Analytics" },
    { icon: Users, label: "Student Communities" },
    { icon: MessagesSquare, label: "Virtual Counselling" },
    { icon: Search, label: "Generative Search" },
    { icon: Mic, label: "Voice Search" },
    { icon: BrainCircuit, label: "AI Student Assistants" },
  ];

  const faqs = [
    {
      q: "How can schools increase admissions?",
      a: "Schools increase admissions by combining education SEO, Google Ads, parent-focused content, virtual campus experiences, online application journeys and CRM-led nurturing — supported by strong institutional branding and faculty visibility that build trust with parents.",
    },
    {
      q: "How can colleges generate more enquiries?",
      a: "Colleges generate more enquiries through course-level SEO, programme landing pages, performance marketing across Google and Meta, alumni storytelling, placement-driven content and admission CRM systems that capture, qualify and convert enquiries into applications.",
    },
    {
      q: "What is Education SEO?",
      a: "Education SEO is the practice of optimizing institutional websites so they rank for course, exam, location and career-oriented searches. It blends technical SEO, programme pages, faculty pages, campus content, local SEO and E-E-A-T signals search engines reward for education topics.",
    },
    {
      q: "How does AI help educational institutions?",
      a: "AI helps institutions automate admission enquiries, deliver 24x7 student and parent support, personalize learning, generate course content, surface insights from learning analytics and reduce manual workload across admissions, academics and operations.",
    },
    {
      q: "How can coaching institutes improve online visibility?",
      a: "Coaching institutes improve visibility through exam-specific SEO (JEE, NEET, UPSC, CA), faculty branding, YouTube content, structured topic clusters, Google Business Profile, paid campaigns and review systems — combined with conversion-optimized landing pages for batch enrolments.",
    },
    {
      q: "What is GEO?",
      a: "GEO (Generative Engine Optimization) ensures your institution is correctly cited by AI search experiences like ChatGPT, Google AI Overviews and Perplexity. It involves structured content, authoritative sourcing, entity optimization and faculty/programme-level information that LLMs can confidently reference.",
    },
    {
      q: "What is AEO?",
      a: "AEO (Answer Engine Optimization) prepares your content for direct-answer surfaces — featured snippets, voice search and AI assistants. For education brands it means clear FAQ structures, programme details, fee information and admissions guidance formatted for answer extraction.",
    },
    {
      q: "What marketing channels work best for educational institutions?",
      a: "The most effective channels combine SEO, Google and Meta Ads, YouTube, Instagram, faculty-led content, school-fair and counsellor-led offline activations, WhatsApp communication and CRM nurturing — sequenced across the awareness, consideration and admission stages.",
    },
    {
      q: "Can AI automate admissions?",
      a: "Yes. AI admission assistants can answer programme questions, qualify enquiries, capture documents, schedule counselling, send reminders and hand off to human counsellors at the right moment — significantly improving response times and admission conversion rates.",
    },
  ];

  const relatedServices = [
    { label: "SEO Services", to: "/search-visibility" },
    { label: "Performance Marketing", to: "/performance-marketing" },
    { label: "Content Marketing", to: "/content-marketing" },
    { label: "Website Development", to: "/website-design-development" },
    { label: "CRM & ERP Solutions", to: "/crm-erp-solutions" },
    { label: "AI Strategy", to: "/ai-strategy-readiness-assessment" },
    { label: "AI Workflow Automation", to: "/ai-workflow-automation" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-foreground/10 bg-gradient-to-b from-background via-background to-primary/5">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="container relative mx-auto grid gap-12 px-4 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Industry Solutions / Education & EdTech</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Marketing, Technology & AI Solutions
                <span className="block italic text-foreground/80">
                  for Educational Institutions & EdTech Companies.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
                <p>
                  Today's students and parents research online before choosing an
                  educational institution. They compare courses, faculty, campus life,
                  placements, reviews and digital experiences before making an enquiry.
                </p>
                <p>
                  Ace360degree helps schools, colleges, universities, coaching institutes
                  and EdTech companies build digital ecosystems that increase admissions,
                  strengthen institutional branding and improve student engagement through
                  Growth Marketing, Technology and AI.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                >
                  Request Education Growth Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground/5"
                >
                  Book Discovery Call
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl">
                <img
                  src={heroImg}
                  alt="Modern educational institution digital experience"
                  className="aspect-[4/5] w-full object-cover"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Built for admissions. Designed for trust. Powered by AI.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Education Has Changed */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  02 — The Shift
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Education Has Changed.
                  <span className="block italic text-foreground/70">
                    Has Your Institution Kept Up?
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
                  Students research online. Parents compare institutions across cities.
                  Digital trust shapes admissions. AI is rewriting how learning is
                  delivered. Institutions now compete beyond geography — and branding,
                  faculty visibility and digital experience increasingly decide who
                  parents and students choose.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="mb-5 text-sm font-medium uppercase tracking-wider text-foreground/60">
                  Today's student decision journey:
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Search, label: "Students research online" },
                    { icon: Users, label: "Parents compare institutions" },
                    { icon: ShieldCheck, label: "Digital trust influences choice" },
                    { icon: BrainCircuit, label: "AI is changing how we learn" },
                    { icon: Building2, label: "Competition beyond geography" },
                    { icon: Sparkles, label: "Branding drives admissions" },
                    { icon: Star, label: "Reviews & rankings matter" },
                    { icon: Smartphone, label: "Mobile-first applications" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-background/60 px-4 py-3.5 transition-colors hover:border-foreground/25 hover:bg-foreground/[0.02]"
                    >
                      <item.icon className="h-5 w-5 text-foreground/70" />
                      <span className="text-sm font-medium text-foreground/85 sm:text-base">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Challenges */}
      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              03 — Challenges We Solve
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Challenges Educational Institutions Face
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-foreground/10 bg-background p-7 transition-all hover:-translate-y-1 hover:border-foreground/25 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03] transition-colors group-hover:border-foreground/30">
                    <c.icon className="h-6 w-6 text-foreground/80" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Segments */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              04 — Segments We Serve
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Educational Institutions We Support
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-foreground/10 p-7 transition-all hover:border-foreground/30 hover:bg-foreground/[0.02]">
                  <s.icon className="h-7 w-7 text-foreground/80" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Student Journey Framework */}
      <section className="relative border-b border-foreground/10 bg-gradient-to-b from-primary/5 via-background to-background py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              05 — Framework
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Student Journey Framework
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
              Every admission moves through a predictable journey. We design marketing,
              technology and AI systems for each step — from awareness to alumni advocacy.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-3 lg:grid-cols-8">
            {journey.map((step, i) => (
              <Reveal key={step} delay={i * 80}>
                <div className="group relative h-full">
                  <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-foreground/10 bg-background p-5 transition-all hover:border-foreground/30 hover:shadow-lg">
                    <div className="text-xs font-mono uppercase tracking-wider text-foreground/50">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-4 text-base font-semibold leading-snug text-foreground">
                      {step}
                    </div>
                  </div>
                  {i < journey.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-foreground/30 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — How Ace360degree Helps */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              06 — Our Capabilities
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              How Ace360degree Helps Educational Institutions
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-foreground/10 bg-background p-8 transition-all hover:border-foreground/25 hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03]">
                      <p.icon className="h-6 w-6 text-foreground/80" />
                    </div>
                    <h3 className="font-serif text-2xl tracking-tight text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/75"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — AI in Education */}
      <section className="border-b border-foreground/10 bg-foreground py-20 text-background sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-background/60">
                  07 — Intelligence
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  AI in Education
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-background/75">
                  AI is helping educational institutions personalize learning, automate
                  admissions, support students 24x7 and unlock faculty productivity —
                  while creating measurable advantages in admissions and brand trust.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {aiBenefits.map((b, i) => (
                  <Reveal key={b} delay={i * 60}>
                    <div className="flex items-start gap-3 rounded-xl border border-background/15 bg-background/[0.04] p-4">
                      <Workflow className="mt-0.5 h-5 w-5 text-background/80" />
                      <span className="text-sm leading-relaxed text-background/90">
                        {b}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Success Story */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              08 — Education Industry Experience
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Success Story
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={caseAmigo}
                      alt="Amigo Academy strategic partnership"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={1024}
                      height={640}
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                      Active Strategic Partnership
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="text-xs uppercase tracking-wider text-foreground/55">
                  Featured Engagement
                </div>
                <h3 className="mt-2 font-serif text-3xl tracking-tight text-foreground">
                  Amigo Academy
                </h3>
                <p className="mt-5 text-base leading-relaxed text-foreground/75">
                  Helping build a future-ready education brand through integrated
                  marketing, branding, technology and AI initiatives focused on
                  admissions, student engagement and digital transformation.
                </p>
                <p className="mt-5 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4 text-sm leading-relaxed text-foreground/70">
                  Our experience also includes supporting educational brands, training
                  institutes and learning organizations with digital growth initiatives.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Why Choose */}
      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  09 — Why Ace360degree
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Why Educational Institutions Choose Ace360degree
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((w, i) => (
                  <Reveal key={w} delay={i * 60}>
                    <div className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-background p-5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/70" />
                      <span className="text-sm font-medium text-foreground/85 sm:text-base">
                        {w}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — Future of Education */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              10 — Outlook
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              The Future of Education
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
              The next decade of education will be shaped by AI tutors, personalized
              learning, hybrid models, digital campuses, learning analytics, generative
              search and voice-led student experiences. We help institutions prepare
              today for the classrooms of tomorrow.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {futureTopics.map((t, i) => (
              <Reveal key={t.label} delay={i * 50}>
                <div className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-background p-5 transition-colors hover:border-foreground/30">
                  <t.icon className="h-5 w-5 text-foreground/75" />
                  <span className="text-sm font-medium text-foreground/85">
                    {t.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  11 — FAQ
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/70">
                  Common questions from school trustees, college directors, coaching
                  institute owners and EdTech founders considering a strategic growth
                  partner.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <div>
                  {faqs.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — Related Services */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              12 — Related Services
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Capabilities Powering Education Growth
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s, i) => (
              <Reveal key={s.label} delay={i * 50}>
                <Link
                  to={s.to}
                  className="group flex items-center justify-between rounded-xl border border-foreground/10 bg-background px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md"
                >
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {s.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background sm:py-32">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal>
            <Target className="mx-auto h-10 w-10 text-background/80" />
            <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Build an Institution That
              <span className="block italic text-background/75">
                Inspires, Educates & Grows.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              Whether you're a school, university, coaching institute or EdTech company,
              Ace360degree helps you combine marketing, technology and AI to increase
              admissions, strengthen your brand and deliver exceptional learning
              experiences.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-background/90"
              >
                Request Education Growth Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-background/10"
              >
                Book Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
