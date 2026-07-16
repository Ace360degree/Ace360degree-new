import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  ShoppingCart,
  Layout,
  Store,
  Code2,
  Wrench,
  Rocket,
  Search,
  Smartphone,
  Zap,
  Shield,
  LifeBuoy,
  Sparkles,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import heroImg from "@/assets/svc-website-us-hero.jpg";
import designImg from "@/assets/svc-website-us-design.jpg";
import processImg from "@/assets/svc-website-us-processy1.jpg";
export const Route = createFileRoute("/website-development-united-states")({
  component: WebsiteDevUSPage,
  head: () => ({
    meta: [
      {
        title:
          "Website Development Company in United States | Custom Business Websites | Ace360degree",
      },
      {
        name: "description",
        content:
          "Looking for a professional website development company in the United States? Ace360degree builds responsive, SEO-friendly, high-performance websites, ecommerce platforms, and custom web applications designed to grow your business.",
      },
      {
        property: "og:title",
        content:
          "Website Development Company in United States | Ace360degree",
      },
      {
        property: "og:description",
        content:
          "High-performance websites that convert visitors into customers. Custom websites, ecommerce and web applications for businesses across the United States.",
      },
      { property: "og:type", content: "website" },
     // { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/website-development-united-states" }],
  }),
});
const advantages = [
  "Custom UI/UX Design",
  "Mobile-First Responsive Development",
  "SEO-Optimized Architecture",
  "Lightning Fast Performance",
  "Secure & Scalable Technology",
  "Ongoing Support & Maintenance",
];
const services = [
  {
    n: "01",
    icon: Globe,
    t: "Corporate Website Development",
    d: "Professional websites that establish trust, communicate your brand, and generate qualified business enquiries.",
  },
  {
    n: "02",
    icon: ShoppingCart,
    t: "Ecommerce Website Development",
    d: "Scalable online stores with secure payment gateways, inventory management, and conversion-focused shopping experiences.",
  },
  {
    n: "03",
    icon: Layout,
    t: "WordPress Development",
    d: "Easy-to-manage websites with custom themes, optimized performance, and flexible content management.",
  },
  {
    n: "04",
    icon: Store,
    t: "Shopify Development",
    d: "Modern ecommerce stores designed to maximize online sales and deliver exceptional customer experiences.",
  },
  {
    n: "05",
    icon: Code2,
    t: "Custom Web Applications",
    d: "Business portals, CRM dashboards, booking systems, vendor portals, and workflow automation tailored to your operations.",
  },
  {
    n: "06",
    icon: Wrench,
    t: "Website Maintenance & Optimization",
    d: "Continuous updates, performance monitoring, security improvements, backups, and technical support to keep your website performing at its best.",
  },
];
const process = [
  {
    n: "01",
    t: "Discovery & Strategy",
    d: "Understanding your business, audience, competitors, and growth goals.",
  },
  {
    n: "02",
    t: "Design & User Experience",
    d: "Creating intuitive wireframes and modern interfaces focused on engagement and conversions.",
  },
  {
    n: "03",
    t: "Development & Testing",
    d: "Building secure, responsive, high-performance websites with rigorous quality assurance.",
  },
  {
    n: "04",
    t: "Launch & Growth",
    d: "Deploying your website with SEO optimization, analytics integration, and ongoing support.",
  },
];
const outcomes = [
  { icon: Search, t: "Higher Search Visibility" },
  { icon: Sparkles, t: "Improved User Experience" },
  { icon: Zap, t: "Faster Website Speed" },
  { icon: TrendingUp, t: "Increased Lead Generation" },
  { icon: Gauge, t: "Better Conversion Rates" },
  { icon: Shield, t: "Stronger Brand Credibility" },
];
const metrics = [
  { v: "60%", l: "Faster Page Load Speed", icon: Rocket },
  { v: "100%", l: "Mobile Responsive", icon: Smartphone },
  { v: "SEO", l: "Ready Architecture", icon: Search },
  { v: "Enterprise", l: "Level Security", icon: Shield },
];

function HeroForm() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#181818] p-4 shadow-[0_30px_100px_-35px_rgba(0,0,0,0.75)]">
      <img
        src={processImg}
        alt="Website development workflow"
        className="absolute inset-0 h-full w-full object-cover opacity-12"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,24,0.90)_0%,rgba(24,24,24,0.98)_100%)]" />

      <div className="relative rounded-[24px] border border-white/8 bg-[rgba(255,255,255,0.02)] p-5 md:p-6 backdrop-blur-sm">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas/85">
              Name *
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-sm text-canvas placeholder:text-canvas/28 outline-none ring-1 ring-inset ring-white/8 transition focus:ring-brand/60"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas/85">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-sm text-canvas placeholder:text-canvas/28 outline-none ring-1 ring-inset ring-white/8 transition focus:ring-brand/60"
              />
            </div>
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas/85">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 88888 88888"
                className="w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-sm text-canvas placeholder:text-canvas/28 outline-none ring-1 ring-inset ring-white/8 transition focus:ring-brand/60"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas/85">
              Select Service *
            </label>
            <Select>
              <SelectTrigger className="h-auto w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-sm text-canvas outline-none ring-1 ring-inset ring-white/8 transition focus:ring-brand/60 data-[placeholder]:text-canvas/28">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-[#181818] text-canvas">
                <SelectItem value="Corporate Website Development">
                  Corporate Website Development
                </SelectItem>
                <SelectItem value="Ecommerce Website Development">
                  Ecommerce Website Development
                </SelectItem>
                <SelectItem value="WordPress Development">
                  WordPress Development
                </SelectItem>
                <SelectItem value="Shopify Development">
                  Shopify Development
                </SelectItem>
                <SelectItem value="Custom Web Applications">
                  Custom Web Applications
                </SelectItem>
                <SelectItem value="Website Maintenance & Optimization">
                  Website Maintenance & Optimization
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas/85">
              Website URL
            </label>
            <input
              type="url"
              placeholder="Your website URL"
              className="w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-sm text-canvas placeholder:text-canvas/28 outline-none ring-1 ring-inset ring-white/8 transition focus:ring-brand/60"
            />
          </div>

          <button
            type="button"
            className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-brand px-8 text-sm font-bold uppercase tracking-[0.18em] text-dark transition hover:brightness-95"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}

function WebsiteDevUSPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark text-canvas">
        {/* <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Website development company in United States"
            className="w-full h-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />
        </div> */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-6">
                Services / Website Development / United States
              </div>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
                Website Development Company in{" "}
                <span className="italic text-brand">United States</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-canvas/80 max-w-3xl">
                High-Performance Websites That Convert Visitors Into Customers.
              </p>
              <p className="mt-6 text-canvas/70 max-w-2xl leading-relaxed">
                Whether you're a startup, growing business, or established
                enterprise, Ace360degree builds fast, secure, SEO-ready websites
                designed to generate leads, increase conversions, and support
                long-term business growth across the United States.
              </p>
              <p className="mt-4 text-canvas/70 max-w-2xl leading-relaxed">
                Our websites combine modern design, powerful technology, and
                conversion-focused user experiences to help businesses stand out
                in competitive markets.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95"
                >
                  Schedule a Free Website Consultation{" "}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 border border-canvas/30 text-canvas px-6 py-3 font-semibold hover:bg-canvas hover:text-dark transition"
                >
                  View Our Work <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark py-16 md:py-20 text-canvas">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-canvas/50 font-semibold">
            Trusted By Growing Businesses Worldwide
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Bayer", "Hafele", "Schott Kaisha", "ARCIL", "Al-Nuaim"].map((n) => (
              <div
                key={n}
                className="font-serif text-2xl text-canvas/60 border border-white/10 py-4 text-center"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 2 — Why Businesses Choose Us */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={designImg}
              alt="Custom website design and development"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">
              Why Businesses In United States Choose Ace360degree
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Websites Designed For Business Growth,{" "}
              <span className="italic text-dark/50">
                Not Just Beautiful Design.
              </span>
            </h2>
            <div className="mt-8 space-y-5 text-dark/75 leading-relaxed">
              <p>
                At Ace360degree, we believe a website is more than an online
                brochure—it's your most valuable digital asset. Every website
                we build is strategically planned to attract visitors, build
                trust, and convert prospects into customers.
              </p>
              <p>
                From corporate websites and ecommerce platforms to custom web
                applications and business portals, our solutions are tailored
                to your industry, audience, and growth objectives.
              </p>
            </div>
            <div className="mt-10">
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-semibold mb-4">
                Why Choose Us
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {advantages.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-dark/85">
                    <CheckCircle2 className="size-4 text-brand shrink-0 mt-1" />
                    <span className="text-sm">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3 — Full Width CTA */}
      <section className="py-24 md:py-32 bg-dark text-canvas">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-6">
            Build With Purpose
          </div>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Build A Website That Works As{" "}
            <span className="italic text-brand">Hard As Your Business.</span>
          </h2>
          <p className="mt-8 text-canvas/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Your website should do more than look good. It should generate
            enquiries, build credibility, improve search visibility, and
            support your sales team every day.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95"
            >
              Book Your Strategy Call <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* SECTION 4 — Services */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">
            Our Services
          </div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">
            Website Development Services In United States.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className="group border border-dark/10 p-8 hover:border-brand transition bg-canvas"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="size-12 grid place-items-center bg-brand/10 text-brand rounded">
                      <Icon className="size-6" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.22em] text-dark/40 font-semibold">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
                  <p className="text-dark/70 leading-relaxed text-sm">{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* SECTION 5 — Process */}
      <section className="py-24 md:py-32 bg-dark/[0.03]">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">
              Our Approach
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Our Website Development{" "}
              <span className="italic text-dark/50">Process.</span>
            </h2>
            <p className="mt-6 text-dark/75 leading-relaxed max-w-lg">
              Building successful digital platforms requires more than coding.
              We follow a structured process that ensures every project
              delivers measurable business value.
            </p>
            <div className="mt-10 space-y-6">
              {process.map((p) => (
                <div key={p.n} className="flex gap-5">
                  <div className="text-brand font-serif text-2xl w-10 shrink-0">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-1">{p.t}</h3>
                    <p className="text-dark/70 text-sm leading-relaxed">
                      {p.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={processImg}
              alt="Website development process"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* SECTION 6 — Outcomes & Metrics */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">
            Outcomes That Matter
          </div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">
            Delivering Websites That Drive Business Results.
          </h2>
          <p className="mt-4 text-dark/70 max-w-2xl">
            Instead of simply building websites, we create digital platforms
            that contribute directly to business growth.
          </p>
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-semibold mb-6">
                Expected Business Outcomes
              </div>
              <ul className="space-y-4">
                {outcomes.map((o) => {
                  const Icon = o.icon;
                  return (
                    <li
                      key={o.t}
                      className="flex items-center gap-4 border-b border-dark/10 pb-4"
                    >
                      <div className="size-10 grid place-items-center bg-brand/10 text-brand rounded shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-serif text-lg">{o.t}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-semibold mb-6">
                Performance Metrics
              </div>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.l}
                      className="border border-dark/10 p-6 bg-canvas hover:border-brand transition"
                    >
                      <Icon className="size-6 text-brand mb-4" />
                      <div className="font-serif text-3xl text-dark">
                        {m.v}
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-dark/60">
                        {m.l}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 p-6 bg-dark text-canvas">
                <LifeBuoy className="size-5 text-brand mb-3" />
                <p className="text-sm text-canvas/80 leading-relaxed">
                  Dedicated support and continuous optimization keep your
                  website performing at its best long after launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-dark text-canvas">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Rocket className="mx-auto size-8 text-brand mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready To Build Your Next Website In{" "}
            <span className="italic text-brand">United States?</span>
          </h2>
          <p className="mt-6 text-canvas/70 text-lg max-w-2xl mx-auto">
            Whether you need a corporate website, ecommerce platform, custom
            web application, or complete digital transformation, Ace360degree
            helps businesses create websites that deliver measurable results.
          </p>
          <p className="mt-4 text-canvas/60 max-w-2xl mx-auto">
            Let's discuss your project and build a digital experience that
            supports your long-term growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95"
            >
              Schedule Your Free Website Strategy Session{" "}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-canvas/30 text-canvas px-6 py-3 font-semibold hover:bg-canvas hover:text-dark transition"
            >
              View Case Studies <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
