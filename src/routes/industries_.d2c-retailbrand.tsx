import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Sparkles,
  Shirt,
  Coffee,
  Gem,
  Sofa,
  Heart,
  Cpu,
  Footprints,
  Store,
  Target,
  TrendingUp,
  Layers,
  BarChart3,
  Workflow,
  Smartphone,
  Megaphone,
  CheckCircle2,
  ShoppingCart,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-branding.jpg";

export const Route = createFileRoute("/industries_/d2c-retailbrand")({
  component: D2CPage,
  head: () => ({
    meta: [
      { title: "Marketing, Branding & Commerce Solutions for D2C & Retail Brands | Ace360degree" },
      {
        name: "description",
        content:
          "Ace360degree is a strategic growth partner for D2C, retail and eCommerce brands—combining branding, performance marketing, digital commerce and CX to accelerate sales, loyalty and growth.",
      },
      { property: "og:title", content: "D2C & Retail Industry Solutions — Ace360degree" },
      {
        property: "og:description",
        content:
          "Brand-led growth, digital commerce and performance marketing for modern consumer brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const stats = [
  { v: "15+", l: "Years Building Consumer Brands" },
  { v: "300+", l: "Projects Delivered" },
  { v: "Omnichannel", l: "Commerce Experience" },
  { v: "4-in-1", l: "Growth • Brand • Technology • Digital" },
];

const challenges = [
  { n: "01", t: "High Customer Acquisition Costs", p: "Advertising costs continue to rise while returns become increasingly difficult to maintain.", s: "Performance marketing, SEO, landing pages and conversion optimization that improve ROAS and reduce acquisition costs.", icon: Target },
  { n: "02", t: "Low Brand Differentiation", p: "Products compete in crowded markets with little perceived difference.", s: "Brand strategy, visual identity, packaging design and storytelling that build emotional connections and premium positioning.", icon: Sparkles },
  { n: "03", t: "Poor eCommerce Conversion Rates", p: "Visitors browse products but fail to complete purchases.", s: "Conversion-focused websites, optimized product pages, checkout improvements and user experience optimization.", icon: ShoppingCart },
  { n: "04", t: "Low Customer Retention", p: "Acquiring customers is easier than retaining them.", s: "Email marketing, WhatsApp automation, loyalty journeys and lifecycle marketing designed to increase repeat purchases.", icon: Heart },
  { n: "05", t: "Inconsistent Brand Experience", p: "Customers experience different messaging across website, social media and marketplaces.", s: "Integrated branding, marketing communication and omnichannel creative systems.", icon: Layers },
  { n: "06", t: "Limited Business Insights", p: "Without accurate analytics, growth decisions become guesswork.", s: "Analytics dashboards, customer insights, marketing automation and performance reporting that support smarter decision-making.", icon: BarChart3 },
];

const segments = [
  { i: Shirt, t: "Fashion & Apparel" },
  { i: Sparkles, t: "Beauty & Cosmetics" },
  { i: Heart, t: "Skincare & Personal Care" },
  { i: Coffee, t: "Food & Beverage" },
  { i: ShoppingBag, t: "Lifestyle Brands" },
  { i: Sofa, t: "Furniture & Home Decor" },
  { i: Cpu, t: "Consumer Electronics" },
  { i: Heart, t: "Health & Wellness" },
  { i: Gem, t: "Luxury Brands" },
  { i: Gem, t: "Jewellery" },
  { i: Footprints, t: "Footwear" },
  { i: Store, t: "E-commerce Brands" },
];

const framework = [
  { n: "01", t: "Discover", d: "Understand your products, customers, competitors and growth opportunities." },
  { n: "02", t: "Position", d: "Develop a compelling brand identity and customer value proposition." },
  { n: "03", t: "Build", d: "Create high-converting eCommerce websites, landing pages and digital shopping experiences." },
  { n: "04", t: "Generate", d: "Drive traffic through SEO, Google Ads, Meta Ads, influencer campaigns and content marketing." },
  { n: "05", t: "Scale", d: "Improve customer lifetime value through automation, retention marketing and data-driven optimization." },
];

const capabilities = [
  { icon: Megaphone, t: "Growth Marketing", d: "Drive qualified traffic and increase online sales through measurable marketing strategies.", s: ["Performance Marketing", "Search Engine Optimization", "Content Marketing", "Social Media Marketing", "Conversion Optimization"] },
  { icon: Sparkles, t: "Branding & Creative", d: "Build memorable brands that customers recognize, trust and recommend.", s: ["Brand Strategy", "Logo & Visual Identity", "Packaging Design", "Marketing Communication", "Corporate Films & Product Videos"] },
  { icon: Smartphone, t: "Technology & Digital Platforms", d: "Build digital commerce experiences that convert visitors into loyal customers.", s: ["Shopify Development", "WooCommerce Development", "Custom eCommerce Websites", "Mobile Applications", "CRM Integration"] },
  { icon: Workflow, t: "Business Automation", d: "Automate customer engagement, retention and operational workflows.", s: ["Marketing Automation", "CRM Solutions", "Email Automation", "WhatsApp Automation", "Customer Analytics"] },
];

const whys = [
  { t: "Brand-Led Growth", d: "We combine branding and performance marketing to create businesses that customers remember—not just products they buy." },
  { t: "Commerce-First Thinking", d: "Every digital experience is designed to increase conversions, customer satisfaction and repeat purchases." },
  { t: "Growth + Brand + Technology", d: "One strategic partner managing your branding, digital marketing and commerce ecosystem." },
  { t: "Leadership-Led Strategy", d: "Work directly with experienced strategists focused on sustainable business growth—not vanity metrics." },
];

const faqs = [
  { q: "Can you build Shopify and eCommerce websites?", a: "Yes. We design and develop Shopify, WooCommerce and custom eCommerce websites engineered for conversion, speed and scale." },
  { q: "How do you reduce customer acquisition costs?", a: "Through performance marketing optimization, better landing pages, audience refinement, creative testing, SEO and improved on-site conversion rates that lift ROAS." },
  { q: "Do you manage Google Ads and Meta Ads for D2C brands?", a: "Yes. We run full-funnel Google, Meta, YouTube and influencer campaigns tied to product feeds, remarketing and CRM." },
  { q: "Can you redesign our brand and packaging?", a: "Yes. Brand strategy, visual identity, packaging design and product storytelling are core capabilities." },
  { q: "Do you help improve repeat purchases and customer retention?", a: "Yes. We build email, WhatsApp and lifecycle automation journeys to increase repeat purchases and customer lifetime value." },
  { q: "Which consumer industries do you specialize in?", a: "Fashion, beauty, skincare, food & beverage, lifestyle, furniture, wellness, luxury, jewellery, footwear and modern eCommerce brands." },
];

function D2CPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      <section className="relative overflow-hidden bg-dark text-canvas">
        <div className="absolute inset-0">
          <img src={heroImg} alt="D2C and retail brands" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-6">Industry Solutions / D2C & Retail Brands</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
            D2C & Retail <span className="italic text-brand">Industry Solutions</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-canvas/80 max-w-3xl">
            Marketing, Branding & Commerce Solutions for D2C & Retail Brands.
          </p>
          <p className="mt-6 text-canvas/70 max-w-2xl leading-relaxed">
            A strategic growth partner for direct-to-consumer, retail and eCommerce brands—combining branding, performance marketing, digital commerce and customer experience to accelerate sales, customer loyalty and sustainable business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95">
              Book Discovery Call <ArrowRight className="size-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 border border-canvas/30 text-canvas px-6 py-3 font-semibold hover:bg-canvas hover:text-dark transition">
              View Retail Success Stories <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-4xl md:text-5xl text-brand">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-canvas/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-canvas">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">The Shift</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Consumers don't just buy products.
            <br />
            <span className="italic text-dark/50">They buy brands they trust.</span>
          </h2>
          <div className="mt-10 space-y-6 text-lg text-dark/75 leading-relaxed max-w-3xl">
            <p>Today's customers discover brands through Google, Instagram, YouTube and online marketplaces long before making a purchase. They compare products, read reviews, watch videos and expect seamless shopping experiences across every touchpoint.</p>
            <p>Winning brands don't simply advertise more.</p>
            <p>They build memorable identities, frictionless shopping experiences, data-driven acquisition systems and customer journeys that encourage repeat purchases.</p>
            <p className="text-dark font-medium">That's the partnership Ace360degree delivers.</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dark/[0.03]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Challenges We Solve</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">The growth challenges we solve for D2C and retail brands.</h2>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {challenges.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.n} className="bg-canvas border border-dark/10 p-8 hover:border-brand transition">
                  <div className="flex items-start justify-between mb-6">
                    <div className="size-12 grid place-items-center bg-brand/10 text-brand rounded">
                      <Icon className="size-6" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.22em] text-dark/40 font-semibold">{c.n}</div>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{c.t}</h3>
                  <p className="text-dark/70 mb-5 leading-relaxed">{c.p}</p>
                  <div className="pt-5 border-t border-dark/10">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-semibold mb-2">How we solve it</div>
                    <p className="text-dark/80 text-sm leading-relaxed">{c.s}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">D2C & Retail Brands We Support</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">Experience across modern consumer brands.</h2>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {segments.map((s) => {
              const Icon = s.i;
              return (
                <div key={s.t} className="flex items-center gap-3 p-5 border border-dark/10 hover:border-brand hover:bg-brand/5 transition">
                  <Icon className="size-5 text-brand shrink-0" />
                  <span className="text-sm font-medium">{s.t}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">D2C Growth Framework</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">A five-stage operating model for modern consumer brands.</h2>
          <div className="mt-16 grid md:grid-cols-5 gap-6">
            {framework.map((f, i) => (
              <div key={f.n} className="relative">
                <div className="text-xs uppercase tracking-[0.22em] text-brand mb-4">Stage {f.n}</div>
                <h3 className="font-serif text-3xl mb-3">{f.t}</h3>
                <p className="text-canvas/70 text-sm leading-relaxed">{f.d}</p>
                {i < framework.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-8 size-5 text-brand/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">How Ace360degree Helps</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">Four integrated capabilities. One commerce growth partner.</h2>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.t} className="border border-dark/10 p-8 hover:border-brand transition bg-canvas">
                  <div className="size-12 grid place-items-center bg-brand text-dark rounded mb-6">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{c.t}</h3>
                  <p className="text-dark/70 mb-6 leading-relaxed">{c.d}</p>
                  <div className="pt-5 border-t border-dark/10">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-dark/50 font-semibold mb-3">Services</div>
                    <ul className="grid grid-cols-2 gap-y-2">
                      {c.s.map((s) => (
                        <li key={s} className="text-sm text-dark/80 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark/[0.03]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Success Stories</div>
          <h2 className="font-serif text-4xl md:text-5xl">Helping brands grow through strategy, creativity and digital commerce.</h2>
          <p className="mt-4 text-dark/60">Active strategic partnerships across the retail and lifestyle space.</p>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Link to="/case-living-concepts" className="group border border-dark/10 p-8 bg-canvas hover:border-brand transition">
              <div className="text-xs uppercase tracking-[0.22em] text-brand mb-3">Furniture & Interior Retail</div>
              <h3 className="font-serif text-2xl mb-2">Living Concepts</h3>
              <p className="text-dark/70 text-sm">Designing a premium digital experience for a luxury interior and furniture brand.</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:gap-3 transition-all">
                Read Case Study <ArrowRight className="size-4" />
              </div>
            </Link>
            <div className="border border-dashed border-dark/15 p-8 bg-canvas/50 flex items-center justify-center text-center">
              <p className="text-dark/50 text-sm italic">Future D2C & Retail success stories are added here as our portfolio grows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Why Ace360degree</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">Built for ambitious consumer brands.</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whys.map((w) => (
              <div key={w.t}>
                <div className="h-px w-12 bg-brand mb-5" />
                <h3 className="font-serif text-xl mb-3">{w.t}</h3>
                <p className="text-dark/70 text-sm leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dark/[0.03]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">FAQ</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Frequently asked questions.</h2>
          <div className="divide-y divide-dark/10 border-t border-b border-dark/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-serif text-xl pr-6">{f.q}</span>
                  <span className="text-brand text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-dark/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Related Services</div>
          <div className="flex flex-wrap gap-3">
            {[
              ["Website Design & Development", "/website-design-development"],
              ["Performance Marketing", "/performance-marketing"],
              ["Search Engine Optimization", "/search-visibility"],
              ["Brand Strategy", "/brand-strategy"],
              ["Packaging & Product Design", "/packaging-product-branding"],
              ["Content Marketing", "/content-marketing"],
              ["Marketing Automation", "/marketing-automation"],
              ["Conversion Optimization", "/conversion-optimization"],
            ].map(([t, to]) => (
              <Link key={to} to={to} className="border border-dark/15 px-4 py-2 text-sm hover:border-brand hover:text-brand transition">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dark text-canvas">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <TrendingUp className="mx-auto size-8 text-brand mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready to build a brand customers love and <span className="italic text-brand">products they keep buying?</span>
          </h2>
          <p className="mt-6 text-canvas/70 text-lg max-w-2xl mx-auto">
            Let's create a growth strategy that combines branding, digital commerce and performance marketing to increase sales, strengthen customer loyalty and accelerate long-term business growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95">
              Book Discovery Call <ArrowRight className="size-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 border border-canvas/30 text-canvas px-6 py-3 font-semibold hover:bg-canvas hover:text-dark transition">
              View Success Stories <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      
      <SiteFooter />
    </div>
  );
}
