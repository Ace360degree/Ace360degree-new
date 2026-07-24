import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Landmark,
  Plus,
  Search,
  BadgeIndianRupee,
  Users,
  TimerReset,
  MapPinned,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroImg from "@/assets/icase-living-concepts1.jpg";
import caseLivingHero from "@/assets/case-living-concepts.jpg";
import caseKuwal from "@/assets/case-kuwal-sanam.jpg";

export const Route = createFileRoute("/industries_/real-estate")({
  component: RealEstatePage,
  head: () => ({
    meta: [
      {
        title:
          "Real Estate Industry Solutions | Marketing, Technology & AI for Developers | Ace360degree",
      },
      {
        name: "description",
        content:
          "Marketing, technology and AI growth solutions for real estate developers and builders. Premium branding, digital launch systems, qualified lead generation and buyer journey optimization.",
      },
      {
        property: "og:title",
        content: "Real Estate Industry Solutions | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Strategic growth partner for developers and real estate brands building project visibility, qualified enquiries and stronger buyer journeys.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries/real-estate" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/industries/real-estate" }],
  }),
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, seen };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, seen } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        seen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const challengeCards = [
  {
    icon: BadgeIndianRupee,
    title: "Low Quality Project Enquiries",
    body: "High enquiry volume means little without real buyer intent. We help attract serious buyers, investors and channel-ready prospects instead of noisy lead lists.",
  },
  {
    icon: Building2,
    title: "Slow Sales Velocity",
    body: "Inventory sits longer when launch communication, digital presence and follow-up journeys are disconnected. We tighten the path from first interest to site visit.",
  },
  {
    icon: Search,
    title: "Weak Digital Presence",
    body: "Projects disappear in crowded markets when websites, search visibility and launch assets fail to communicate trust, location value and differentiation.",
  },
  {
    icon: Users,
    title: "Multiple Projects, No Unified Market",
    body: "Developers often run scattered campaigns across projects and channels. We bring structure with portfolio-level strategy, messaging systems and reporting clarity.",
  },
  {
    icon: TimerReset,
    title: "Long Buyer Decision Cycles",
    body: "Property buyers need repeated reassurance across months. We design remarketing, nurture flows and content systems that keep the project top of mind.",
  },
  {
    icon: MapPinned,
    title: "Poor Marketing Visibility",
    body: "Location advantage, price positioning and amenity stories often get buried. We sharpen project communication so the right audiences notice and act faster.",
  },
];

const experienceSegments = [
  "Residential Developers",
  "Commercial Projects",
  "Luxury Residences",
  "Township Developers",
  "Mixed-Use Projects",
  "Multi-Phase Projects",
  "Office Towers",
  "Retail & Mall Mix",
  "Industrial Parks",
  "Property Consultants",
  "Build-to-Suit Spaces",
  "Redevelopment Projects",
];

const operatingModel = [
  {
    step: "Stage 01",
    title: "Plan",
    body: "Market and audience research, launch planning and positioning benchmarks.",
  },
  {
    step: "Stage 02",
    title: "Position",
    body: "Category narrative, messaging architecture and project differentiation systems.",
  },
  {
    step: "Stage 03",
    title: "Build",
    body: "Campaign assets, websites, landing pages and digital infrastructure.",
  },
  {
    step: "Stage 04",
    title: "Generate",
    body: "Performance growth, search visibility and campaign-driven enquiry pipelines.",
  },
  {
    step: "Stage 05",
    title: "Scale",
    body: "Lead nurturing, reporting, remarketing and conversion optimization.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Growth Marketing",
    body: "Generate qualified buyer and investor enquiries with search, performance media, remarketing and conversion-led project campaigns.",
    points: ["Google Ads", "Meta Ads", "Local Search", "Lead Nurture"],
  },
  {
    number: "02",
    title: "Branding & Creative",
    body: "Build a stronger project presence with premium storytelling, launch communication and marketing collateral that sells the vision well.",
    points: [
      "Brand Strategy",
      "Project Storytelling",
      "Marketing Collateral",
      "Campaign Communication",
    ],
  },
  {
    number: "03",
    title: "Technology & Digital Systems",
    body: "Create digital experiences that improve buyer confidence and make project discovery, enquiries and follow-up much easier.",
    points: ["Project Websites", "Landing Pages", "CRM Integration", "Lead Forms"],
  },
  {
    number: "04",
    title: "Business Innovation",
    body: "Improve sales visibility through automation and structured workflows around developer operations, nurture journeys and dashboards.",
    points: ["CRM Workflows", "Lead Distribution", "Performance Dashboards", "Data Visibility"],
  },
];

const successStories = [
  {
    tag: "Case Study",
    title: "Living Concepts",
    body: "Premium digital storytelling and lead generation for a luxury interior and furniture brand.",
    image: caseLivingHero,
    to: "/case-living-concepts",
    cta: "Read Case Study",
  },
  {
    tag: "Case Study",
    title: "Kuwal Sanam Architects",
    body: "Luxury design presence and qualified lead visibility for a premium design studio.",
    image: caseKuwal,
    to: "/case-kuwal-sanam",
    cta: "Read Case Study",
  },
];

const valuePillars = [
  "Marketing That Generates Enquiries",
  "Brand + Technology + Strategy",
  "Conversion-Focused Systems",
  "Leadership-Driven Execution",
];

const faqs = [
  "How can digital marketing help real estate projects sell faster?",
  "Do you generate qualified property enquiries?",
  "Can you build project websites and landing pages?",
  "Do you improve SEO for real estate and local search?",
  "Can you manage marketing for multiple projects under one brand?",
  "Which locations do you serve?",
];

const relatedServices = [
  "Service Design Consultation",
  "Performance Marketing",
  "Brand Strategy Experience",
  "Event Strategy",
  "CRM & ERP Solutions",
  "Marketing Automation",
  "Content Marketing",
  "Corporate Films & Video",
];

function RealEstatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#181818]">
      <SiteHeader />

      <section className="border-b border-[#181818]/8 bg-[radial-gradient(circle_at_top_left,rgba(255,179,48,0.16),transparent_30%),linear-gradient(180deg,#fffdfa_0%,#fcfbf8_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#181818]/10 bg-white/80 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#181818]/60 backdrop-blur">
                  <Landmark className="h-3.5 w-3.5 text-[#ffb330]" />
                  Real Estate Industry Solutions
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                  Real Estate <span className="italic text-[#ffb330]">Industry Solutions</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#181818]/68 md:text-xl">
                  Marketing, Technology & Growth Solutions for Real Estate Developers & Builders.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#181818]/62">
                  A strategic growth partner for premium and mid-market real estate developers
                  building project visibility, qualified buyer pipelines and smarter digital
                  experiences across every launch cycle.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#ffb330] px-6 py-3 text-sm font-medium text-[#181818] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f0a419] hover:shadow-[0_18px_35px_-18px_rgba(24,24,24,0.35)]"
                  >
                    Book Discovery Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-2xl border border-[#181818]/10 bg-white px-6 py-3 text-sm font-medium text-[#181818] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f8f5ee] hover:shadow-[0_18px_35px_-18px_rgba(24,24,24,0.22)]"
                  >
                    View Real Estate Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border border-[#181818]/8 bg-white/80 p-6 backdrop-blur md:grid-cols-4">
                  {[
                    { value: "15+", label: "Years in Digital Growth" },
                    { value: "300+", label: "Projects Delivered" },
                    { value: "100%", label: "Data-Led Reporting" },
                    { value: "4-in-1", label: "Brand / Tech / Media / AI" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="font-serif text-3xl text-[#181818]">{item.value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#181818]/50">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="lg:col-span-5">
              <div className="overflow-hidden border border-[#181818]/10 bg-white shadow-[0_24px_80px_rgba(24,24,24,0.08)]">
                <img
                  src={heroImg}
                  alt="Real estate professionals reviewing a project model"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[#181818]/8 bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid gap-10 lg:max-w-4xl">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
                The Shift
              </div>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Real estate marketing has changed. <br />
                Most developers haven&apos;t.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[#181818]/68">
                <p>
                  Today&apos;s buyers discover projects online long before visiting a site. They
                  compare locations, amenities, design, trust signals and developer credibility
                  across multiple digital touchpoints.
                </p>
                <p>
                  Launch brochures and portal listings alone no longer create enough momentum.
                  Winning developers combine powerful brand storytelling, high-intent performance
                  marketing, search visibility and conversion-led digital journeys.
                </p>
                <p className="font-medium text-[#181818]">
                  That is the partnership Ace360degree delivers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Challenges We Solve
            </div>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              The growth challenges we solve for developers and real estate brands.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {challengeCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal key={card.title} delay={index * 70}>
                  <div className="group h-full border border-[#e9dfcf] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ffddb0] hover:shadow-[0_20px_50px_rgba(24,24,24,0.06)]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb330]/25 bg-[#fff6e8] text-[#ffb330]">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[#181818]/35">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-2xl leading-snug tracking-tight text-[#181818]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#181818]/62">{card.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#181818]/8 bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Experience Across Segments
            </div>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Experience across residential, commercial and mixed-use developments.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {experienceSegments.map((segment, index) => (
              <Reveal key={segment} delay={index * 35}>
                <div className="flex items-center gap-3 border border-[#eadfce] bg-white px-4 py-3 text-sm text-[#181818]/72">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#fff1d9] text-[#ffb330]">
                    <Landmark className="h-3.5 w-3.5" />
                  </span>
                  {segment}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#181818] text-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              The Property Growth Operating System
            </div>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              A five-stage operating model for property marketing.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {operatingModel.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="border-t border-[#ffb330]/30 pt-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]/80">
                    {item.step}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl leading-none text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Integrated Capabilities
            </div>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Four integrated capabilities. One strategic growth partner.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 70}>
                <div className="h-full border border-[#eadfce] bg-white p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1d9] text-sm font-medium text-[#ffb330]">
                    {capability.number}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl tracking-tight text-[#181818]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#181818]/64">
                    {capability.body}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
                    {capability.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#181818]/52"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ffb330]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#181818]/8 bg-[#f8f6f1]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Success Stories
            </div>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Helping brands build visibility and drive enquiries.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#181818]/58">
              Selected industry experience from architecture, interior and design-led growth
              projects.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {successStories.map((story, index) => (
              <Reveal key={story.title} delay={index * 90}>
                <Link
                  to={story.to}
                  className="group block border border-[#e6dccb] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(24,24,24,0.05)]"
                >
                  <div className="aspect-[16/8.5] overflow-hidden border-b border-[#e6dccb]">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#ffb330]">
                      {story.tag}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl tracking-tight text-[#181818]">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#181818]/62">{story.body}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#ffb330]">
                      {story.cta}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#181818]/8 bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Built for Growth
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Built for developers focused on sustainable growth.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 border-t border-[#ece2d3] pt-6 md:grid-cols-2 xl:grid-cols-4">
            {valuePillars.map((pillar, index) => (
              <Reveal key={pillar} delay={index * 60}>
                <div>
                  <h3 className="font-serif text-xl leading-snug text-[#181818]">{pillar}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#181818]/58">
                    Strategic support built to improve project visibility, trust and long-term
                    pipeline quality.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#181818]/8 bg-[#f8f6f1]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Frequently Asked Questions
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Frequently asked questions.
            </h2>
          </Reveal>

          <div className="mt-10 border-t border-[#e9dfcf]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <Reveal key={faq} delay={index * 40}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 border-b border-[#e9dfcf] py-4 text-left"
                  >
                    <span className="text-sm text-[#181818]/72 md:text-[15px]">{faq}</span>
                    <span className="shrink-0 text-[#ffb330]">
                      <Plus
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-b border-[#e9dfcf] pb-4 pr-8 text-sm leading-relaxed text-[#181818]/58">
                      We tailor strategy, content, campaign execution and reporting to the project
                      stage, market and sales goal rather than using a one-size-fits-all real estate
                      template.
                    </div>
                  ) : null}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#181818]/8 bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Related Services
            </div>
          </Reveal>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {relatedServices.map((service, index) => (
              <Reveal key={service} delay={index * 25}>
                <div className="border border-[#e8dece] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#181818]/64">
                  {service}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#181818] text-[#fcfbf8]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-28">
          <Reveal>
            <div className="flex justify-center">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#ffb330]/30 bg-[#201d17] text-[#ffb330]">
                <Landmark className="h-3 w-3" />
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Ready to accelerate your real estate sales <br className="hidden sm:block" />
              with <span className="italic text-[#ffb330]">smarter marketing</span> and technology?
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              Let&apos;s build a growth roadmap for your next launch, strengthen your visibility and
              deploy platforms to generate qualified enquiries, improve decision velocity and
              maximize project success.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#ffb330] px-5 py-3 text-sm font-medium text-[#181818] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f0a419] hover:shadow-[0_18px_35px_-18px_rgba(24,24,24,0.35)]"
              >
                Book Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/16 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.22)]"
              >
                View Case Studies
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
