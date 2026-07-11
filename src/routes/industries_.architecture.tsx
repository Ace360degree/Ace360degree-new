import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Home,
  Hammer,
  Sofa,
  Lightbulb,
  TreePine,
  Compass,
  Layers,
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
  Sparkles,
  LineChart,
  MessagesSquare,
  Camera,
  Mic,
  Image as ImageIcon,
  Ruler,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroImg from "@/assets/industry-architecture.jpg";
import caseLiving from "@/assets/case-living-concepts.jpg";
import caseKuwal from "@/assets/case-kuwal-sanam.jpg";

export const Route = createFileRoute("/industries_/architecture")({
  component: ArchitecturePage,
  head: () => ({
    meta: [
      {
        title:
          "Growth, Branding, Technology & AI Solutions for Architecture, Interior Design & Real Estate Businesses | Ace360degree",
      },
      {
        name: "description",
        content:
          "Ace360degree helps architecture firms, interior designers, real estate developers and luxury design brands generate high-value enquiries through premium branding, websites, marketing and AI.",
      },
      {
        property: "og:title",
        content:
          "Architecture, Interior Design & Real Estate Marketing, Technology & AI — Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Strategic growth partner for architects, interior designers, developers and luxury design brands. Premium branding, websites, SEO and AI systems built for design-led businesses.",
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

function ArchitecturePage() {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Poor Lead Generation",
      body: "Generate consistent, high-value enquiries through SEO, GEO, performance media and portfolio-led campaigns built for design-led businesses.",
    },
    {
      icon: Sparkles,
      title: "Weak Brand Positioning",
      body: "Build a premium brand that signals creativity, trust and authority — so clients perceive you as a market leader before the first meeting.",
    },
    {
      icon: Search,
      title: "Low Google Visibility",
      body: "Rank for architect, interior designer, luxury home and project-type searches across cities and high-intent client queries.",
    },
    {
      icon: ImageIcon,
      title: "Outdated Portfolio Website",
      body: "Transform your website into an editorial portfolio experience that showcases work, philosophy and credibility at a luxury standard.",
    },
    {
      icon: Layers,
      title: "No Premium Brand Identity",
      body: "Create a sophisticated identity system — logo, typography, colour, photography and tone — that matches the quality of your projects.",
    },
    {
      icon: Camera,
      title: "Poor Project Presentation",
      body: "Strengthen project storytelling through photography, video, case-study design and presentation systems that win client confidence.",
    },
    {
      icon: MessagesSquare,
      title: "Weak Social Media Presence",
      body: "Build an Instagram, Pinterest and YouTube presence that influences premium clients and positions you as a design authority.",
    },
    {
      icon: Workflow,
      title: "No Marketing Automation",
      body: "Implement CRM, lead qualification and nurturing workflows so enquiries convert into consultations and signed projects.",
    },
    {
      icon: Target,
      title: "Low Consultation Conversion",
      body: "Optimize the journey from enquiry to consultation with proposals, presentation kits and follow-up systems that close projects.",
    },
  ];

  const segments = [
    {
      icon: Compass,
      title: "Architecture Firms",
      body: "Residential, commercial and institutional practices — premium positioning, portfolio storytelling and high-value lead generation.",
    },
    {
      icon: Home,
      title: "Interior Design Studios",
      body: "Luxury, residential and commercial design studios — brand identity, portfolio websites and Instagram-led client acquisition.",
    },
    {
      icon: Sparkles,
      title: "Luxury Interior Brands",
      body: "High-end design houses — editorial branding, magazine-grade content and curated digital experiences for HNI clients.",
    },
    {
      icon: Building2,
      title: "Real Estate Developers",
      body: "Premium and luxury developers — project micro-sites, lead generation campaigns, CRM and channel partner platforms.",
    },
    {
      icon: Hammer,
      title: "Builders & Construction",
      body: "Construction companies and contractors — corporate branding, project showcase, B2B marketing and digital credibility.",
    },
    {
      icon: Layers,
      title: "Building Material Brands",
      body: "Tiles, surfaces, fittings and finish brands — architect-led B2B marketing, specifier outreach and brand experience.",
    },
    {
      icon: Sofa,
      title: "Furniture & Modular Brands",
      body: "Furniture houses, modular kitchen and wardrobe brands — D2C growth, catalogue commerce and showroom-led marketing.",
    },
    {
      icon: Lightbulb,
      title: "Lighting & Home Automation",
      body: "Decorative lighting, smart-home and luxury lifestyle brands — premium positioning and experience-led storytelling.",
    },
    {
      icon: TreePine,
      title: "Landscape & Urban Design",
      body: "Landscape architects and urban planning consultants — thought leadership, project credibility and government/B2B visibility.",
    },
  ];

  const journey = [
    "Awareness",
    "Google Search",
    "Website",
    "Portfolio",
    "Trust",
    "Consultation",
    "Proposal",
    "Project",
  ];

  const pillars = [
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      items: [
        "SEO for Architects & Designers",
        "GEO",
        "AEO",
        "Performance Marketing",
        "Instagram Marketing",
        "Pinterest Marketing",
        "YouTube Marketing",
        "Google Business Profile",
      ],
    },
    {
      icon: Sparkles,
      title: "Branding & Creative",
      items: [
        "Brand Strategy",
        "Logo Design",
        "Visual Identity",
        "Portfolio Design",
        "Corporate Brochure",
        "Project Presentation",
        "Architecture Photography",
        "Video Production",
      ],
    },
    {
      icon: Cpu,
      title: "Technology & Digital Platforms",
      items: [
        "Luxury Websites",
        "Portfolio CMS",
        "Project Galleries",
        "CRM",
        "Lead Management",
        "Appointment Booking",
        "Mobile Apps",
      ],
    },
    {
      icon: BrainCircuit,
      title: "AI & Business Transformation",
      items: [
        "AI Design Assistant",
        "AI Lead Qualification",
        "AI Customer Support",
        "AI Content Systems",
        "AI Workflow Automation",
        "Knowledge Management",
      ],
    },
  ];

  const aiBenefits = [
    "AI lead qualification for enquiries",
    "AI assistants for client FAQs",
    "Project knowledge assistant for teams",
    "Proposal and quotation generation",
    "Content generation for social and blogs",
    "Design inspiration and moodboarding",
    "Marketing automation across channels",
    "Client onboarding and document workflows",
  ];

  const whyUs = [
    "Premium branding expertise",
    "Luxury website design",
    "Lead generation systems",
    "Portfolio storytelling",
    "Marketing + Technology + AI",
    "Long-term partnership",
    "Industry understanding",
  ];

  const futureTopics = [
    { icon: BrainCircuit, label: "AI-powered Design" },
    { icon: Layers, label: "Digital Twins" },
    { icon: Sparkles, label: "VR Walkthroughs" },
    { icon: ImageIcon, label: "AR Visualization" },
    { icon: Building2, label: "Smart Buildings" },
    { icon: Mic, label: "Voice Search" },
    { icon: Search, label: "Generative Search" },
    { icon: Star, label: "Personal Branding" },
    { icon: LineChart, label: "Thought Leadership" },
    { icon: ShieldCheck, label: "Luxury CX" },
  ];

  const faqs = [
    {
      q: "How can architects generate more leads?",
      a: "Architects generate more leads through a combination of SEO for project-type and city-level searches, a portfolio-led website, Instagram and Pinterest content, Google Ads for high-intent enquiries, thought leadership and CRM-driven follow-up — supported by strong brand positioning that justifies premium fees.",
    },
    {
      q: "How do interior designers rank on Google?",
      a: "Interior designers rank by combining local SEO, Google Business Profile optimization, project pages, location pages, design-style content (e.g. modern, luxury, minimalist), photography-rich case studies and authoritative backlinks from publications — alongside reviews, schema markup and a fast, well-structured portfolio site.",
    },
    {
      q: "Why is branding important for architecture firms?",
      a: "Architecture is a trust-led, high-consideration purchase. Clients evaluate philosophy, taste, credibility and confidence before scheduling a meeting. A premium brand identity, narrative and digital presence signal authority, justify higher fees and shape perception long before the first conversation.",
    },
    {
      q: "How can AI help architects and designers?",
      a: "AI helps with lead qualification, client FAQs, proposal generation, content creation, moodboarding, project knowledge management and marketing automation. Practical AI applications free up senior designers from repetitive work and create a measurably better client experience.",
    },
    {
      q: "What is GEO?",
      a: "GEO (Generative Engine Optimization) ensures that AI search experiences — ChatGPT, Google AI Overviews, Perplexity — correctly cite your firm when potential clients ask about architects, interior designers or developers. It uses structured content, entities, authoritative sourcing and project-level information that LLMs can confidently reference.",
    },
    {
      q: "What is AEO?",
      a: "AEO (Answer Engine Optimization) prepares your content for direct-answer surfaces — featured snippets, voice search and AI assistants. For design firms it means clear FAQ structures, service pages, project information and design guidance formatted so engines can extract precise answers.",
    },
    {
      q: "How can portfolio websites generate enquiries?",
      a: "A portfolio website generates enquiries when it combines editorial-grade project storytelling, clear positioning, fast performance, structured SEO, strong calls to action, intuitive enquiry forms, social proof and integration with a CRM that routes leads to the right team member within minutes.",
    },
    {
      q: "Which marketing channels work best for design businesses?",
      a: "The most effective mix combines SEO, Google Ads, Instagram, Pinterest, YouTube, PR, premium content and CRM-led nurturing — sequenced across the awareness, consideration and consultation stages. Offline credibility (publications, awards, exhibitions) is amplified through digital storytelling.",
    },
    {
      q: "Do you work with real estate developers and luxury brands?",
      a: "Yes. We partner with premium developers, builders, furniture houses, modular kitchen brands, lighting brands and luxury lifestyle businesses on branding, project micro-sites, performance marketing, CRM, channel partner platforms and AI-led customer experience.",
    },
  ];

  const relatedServices = [
    { label: "SEO & Search Visibility", to: "/search-visibility" },
    { label: "Brand Strategy", to: "/brand-strategy" },
    { label: "Website Development", to: "/website-design-development" },
    { label: "Corporate Films", to: "/corporate-films-video-production" },
    { label: "Social Media Marketing", to: "/social-media-marketing" },
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
                <Ruler className="h-3.5 w-3.5" />
                <span>Industry Solutions / Architecture, Interiors & Real Estate</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Growth, Branding, Technology & AI Solutions
                <span className="block italic text-foreground/80">
                  for Architecture, Interior Design & Real Estate Businesses.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
                <p>
                  Modern clients research online before selecting architects or
                  designers. They compare portfolios, evaluate credibility, review
                  completed projects, explore design philosophy and read testimonials
                  — and only then schedule consultations.
                </p>
                <p>
                  Ace360degree helps design-led businesses build premium brands, create
                  exceptional digital experiences and generate high-value enquiries
                  through Growth Marketing, Branding, Technology and AI.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                >
                  Request Growth Audit
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
                  alt="Premium architecture and interior design experience"
                  className="aspect-[4/5] w-full object-cover"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Built for design. Crafted for trust. Powered by AI.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Design Industry Has Changed */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  02 — The Shift
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  The Design Industry Has Changed.
                  <span className="block italic text-foreground/70">
                    Have You Kept Up?
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
                  Clients no longer buy projects — they buy trust, vision and
                  confidence. Digital portfolios decide perception. Instagram and
                  Google shape buying. Premium branding now matters more than
                  proximity. Thought leadership builds credibility. And AI is
                  rapidly changing how design itself is conceived and delivered.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="mb-5 text-sm font-medium uppercase tracking-wider text-foreground/60">
                  Today's client decision behaviours:
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: ShieldCheck, label: "Clients buy trust" },
                    { icon: ImageIcon, label: "Digital portfolios matter" },
                    { icon: MessagesSquare, label: "Instagram influences buying" },
                    { icon: Search, label: "Google influences buying" },
                    { icon: Sparkles, label: "Premium branding matters" },
                    { icon: Smartphone, label: "Websites shape perception" },
                    { icon: Star, label: "Thought leadership builds credibility" },
                    { icon: BrainCircuit, label: "AI is changing design workflows" },
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
              Challenges Architecture & Design Businesses Face
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              04 — Industries We Support
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Design-Led Businesses We Partner With
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

      {/* SECTION 5 — Decision Journey */}
      <section className="relative border-b border-foreground/10 bg-gradient-to-b from-primary/5 via-background to-background py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              05 — Framework
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Client Decision Journey
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
              Every architecture, interior and real estate enquiry moves through a
              predictable journey. We design marketing, branding, technology and AI
              systems for each step — from first awareness to signed project.
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
              How Ace360degree Helps Design Businesses
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

      {/* SECTION 7 — AI for Architecture & Interior Businesses */}
      <section className="border-b border-foreground/10 bg-foreground py-20 text-background sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.18em] text-background/60">
                  07 — Intelligence
                </div>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  AI for Architecture & Interior Businesses
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-background/75">
                  AI is helping design-led firms qualify leads, support clients 24×7,
                  generate proposals, automate content and unlock studio productivity
                  — while delivering a measurably better client experience from
                  first enquiry to project handover.
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

      {/* SECTION 8 — Success Stories */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              08 — Design Industry Experience
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Success Stories
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={caseLiving}
                    alt="Living Concepts premium digital brand transformation"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={640}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    Premium Digital Brand Transformation
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl tracking-tight text-foreground">
                    Living Concepts
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    Helping strengthen brand perception, digital experience and
                    customer engagement across the luxury interior journey.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={caseKuwal}
                    alt="Kuwal Sanam Architects brand growth"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={640}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    Architecture Brand Growth
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl tracking-tight text-foreground">
                    Kuwal Sanam Architects
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    Supporting premium positioning, portfolio presentation and
                    digital visibility for an architecture practice serving
                    discerning clients.
                  </p>
                </div>
              </div>
            </Reveal>
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
                  Why Design Businesses Choose Ace360degree
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

      {/* SECTION 10 — Future */}
      <section className="border-b border-foreground/10 py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/60">
              10 — Outlook
            </div>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              The Future of Architecture & Interior Industry
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
              The next decade of design will be shaped by AI-powered creativity,
              digital twins, VR walkthroughs, AR visualization, smart buildings,
              generative and voice search, personal branding and luxury customer
              experiences. We help studios and developers prepare today for the
              practice of tomorrow.
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
                  Common questions from architecture partners, interior design
                  founders, developers and luxury brand leaders evaluating a
                  strategic growth partner.
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
              Capabilities Powering Design Industry Growth
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
              Build A Brand Clients
              <span className="block italic text-background/75">
                Remember Before They Meet You.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              Whether you're an architect, interior designer, developer or luxury
              design brand, Ace360degree helps you create premium digital experiences
              that attract high-value clients and support sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-background/90"
              >
                Request Growth Audit
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
