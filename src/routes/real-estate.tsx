import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Landmark,
  Search,
  BadgeIndianRupee,
  Users,
  TimerReset,
  BarChart3,
  MapPinned,
  Megaphone,
  Palette,
  Smartphone,
  Phone,
  Plus,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroImg from "@/assets/case-living-concepts.jpg";

export const Route = createFileRoute("/real-estate")({
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
      { property: "og:url", content: "/real-estate" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/real-estate" }],
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

const capabilities = [
  {
    icon: Megaphone,
    title: "Growth Marketing",
    body: "Generate qualified property enquiries through search, performance marketing and conversion-focused campaigns.",
    services: ["Google Ads", "Meta Ads", "SEO", "Local SEO", "Landing Pages"],
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    body: "Build trust through premium project branding and compelling visual communication.",
    services: [
      "Brand Strategy",
      "Project Branding",
      "Marketing Communication",
      "Corporate Communication",
      "Corporate Films",
    ],
  },
  {
    icon: Smartphone,
    title: "Technology & Digital Platforms",
    body: "Create digital experiences that help buyers discover, evaluate and enquire.",
    services: ["Project Websites", "Landing Pages", "CRM Integration", "Mobile Apps", "Property Portals"],
  },
  {
    icon: Phone,
    title: "Business Automation",
    body: "Improve sales productivity through automation and centralized reporting.",
    services: [
      "CRM Automation",
      "Lead Distribution",
      "WhatsApp Automation",
      "Marketing Automation",
      "Performance Dashboards",
    ],
  },
];

const caseStudies = [
  {
    tag: "Case Study",
    title: "Living Concepts",
    body: "Designing a premium digital experience for a luxury interior and furniture brand.",
    href: "/portfolio/living-concepts",
  },
  {
    tag: "Case Study",
    title: "Kuwal Sanam Architects",
    body: "Building a premium architecture brand through Dream, Design, Develop, Deliver.",
    href: "/portfolio/kuwal-sanam-architects",
  },
];

const whyUs = [
  {
    title: "Marketing That Generates Buyers",
    body: "Every campaign is designed to deliver qualified enquiries — not vanity metrics.",
  },
  {
    title: "Brand + Marketing + Technology",
    body: "One strategic partner for branding, digital platforms and performance marketing.",
  },
  {
    title: "Conversion-Focused Systems",
    body: "From click to site visit to booking, every stage is optimized for better conversions.",
  },
  {
    title: "Leadership-Driven Execution",
    body: "Senior leadership remains actively involved throughout strategy and delivery.",
  },
];

const faqs = [
  {
    q: "How do you generate qualified property enquiries?",
    a: "We combine performance marketing, SEO and landing page optimization to attract buyers with real intent — not just high traffic volume.",
  },
  {
    q: "Do you work with multiple projects at once?",
    a: "Yes. We build portfolio-level strategy, messaging systems and centralized reporting so every project stays coordinated and visible.",
  },
  {
    q: "Can you handle branding, technology and marketing together?",
    a: "That's exactly how we work. Growth marketing, branding, digital platforms and automation are delivered as one connected system.",
  },
  {
    q: "How long does it take to see results after launch?",
    a: "Most developers start seeing qualified enquiry flow within the first 4–6 weeks, with momentum building through the full launch cycle.",
  },
  {
    q: "Can you integrate with our existing CRM or sales team workflow?",
    a: "Yes, we integrate with most major CRMs and can automate lead distribution and follow-up flows to match your sales process.",
  },
  {
    q: "What locations do you work in?",
    a: "We work with developers and real estate brands across India, with delivery models suited to both metro and emerging markets.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#181818]/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-sm font-medium text-[#181818] md:text-base">{question}</span>
        <Plus
          className={`h-4 w-4 shrink-0 text-[#ffb330] transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-5 text-sm leading-relaxed text-[#181818]/62">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function RealEstatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#181818]">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-[#181818]/8 bg-[radial-gradient(circle_at_top_left,rgba(255,179,48,0.16),transparent_30%),linear-gradient(180deg,#fffdfa_0%,#fcfbf8_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:pt-16">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#181818]/10 bg-white/80 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#181818]/60 backdrop-blur">
                  <Landmark className="h-3.5 w-3.5 text-[#ffb330]" />
                  Real Estate Industry Solutions
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-4 max-w-xl font-serif text-3xl leading-[1.1] tracking-tight md:text-[34px]">
                  Real Estate <span className="italic text-[#ffb330]">Industry Solutions</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-[#181818]/75">
                  Marketing, Technology & Growth Solutions for Real Estate Developers & Builders.
                </p>
                <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#181818]/55">
                  A strategic growth partner for real estate developers, builders and property
                  brands — combining demand generation, premium branding and technology to
                  accelerate project enquiries, sales velocity and long-term business growth.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#ffb330] px-5 py-2.5 text-sm font-medium text-[#181818] transition hover:bg-[#f0a419]"
                  >
                    Book Discovery Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-[#181818]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#181818] transition hover:bg-[#f8f5ee]"
                  >
                    View Real Estate Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-8 grid max-w-md grid-cols-2 gap-x-8 gap-y-5 border border-[#181818]/10 bg-white/60 p-5">
                  {[
                    { value: "15+", label: "Years in Digital Growth" },
                    { value: "300+", label: "Projects Delivered" },
                    { value: "1000+", label: "Qualified Property Leads Generated" },
                    { value: "4-in-1", label: "Growth · Brand · Technology · Digital" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="font-serif text-2xl text-[#ffb330]">{item.value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#181818]/45">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="lg:col-span-5">
              <div className="overflow-hidden border border-[#181818]/10 bg-white shadow-[0_10px_30px_rgba(24,24,24,0.06)]">
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

      {/* The Shift */}
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

      {/* Challenges We Solve */}
      <section className="bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Challenges We Solve
            </div>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              The growth challenges we solve for developers and real estate brands.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
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

      {/* Capabilities */}
      <section className="border-b border-[#181818]/8 bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              How Ace360degree Helps
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Four integrated capabilities. One strategic growth partner.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <Reveal key={cap.title} delay={index * 80}>
                  <div className="h-full border border-[#181818]/10 bg-white p-6">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#ffb330] text-[#181818]">
                      <Icon className="h-4.5 w-4.5" />
                    </span>

                    <h3 className="mt-5 font-serif text-2xl leading-snug tracking-tight text-[#181818]">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#181818]/62">{cap.body}</p>

                    <div className="mt-5 border-t border-[#181818]/8 pt-4">
                      <div className="text-[10px] uppercase tracking-[0.16em] text-[#181818]/40">
                        Services
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
                        {cap.services.map((service) => (
                          <div
                            key={service}
                            className="flex items-center gap-2 text-[13px] text-[#181818]/68"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[#ffb330]" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="border-b border-[#181818]/8 bg-[#f0ede4]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Success Stories
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Helping brands build visibility and drive enquiries.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#181818]/55">
              Related industry experience from architecture, interior and design partnerships.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 80}>
                <Link
                  to={study.href}
                  className="group block h-full border border-[#181818]/10 bg-[#fcfbf8] p-6 transition hover:border-[#ffb330]/40"
                >
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#ffb330]">
                    {study.tag}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight text-[#181818]">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#181818]/62">{study.body}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#ffb330]">
                    Read Case Study
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ace360degree */}
      <section className="border-b border-[#181818]/8 bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">
              Why Ace360degree
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Built for developers focused on sustainable growth.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="border-t border-[#181818]/15 pt-5">
                  <h3 className="text-sm font-medium tracking-tight text-[#181818]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#181818]/58">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffb330]">FAQ</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Frequently asked questions.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 max-w-3xl border-t border-[#181818]/10">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}