import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Cpu,
  Server,
  Shield,
  Database,
  Boxes,
  Rocket,
  Code2,
  Wrench,
  Building,
  Users,
  Layers,
  Target,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Workflow,
  Smartphone,
  Megaphone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/svc-technology1.jpg";

export const Route = createFileRoute("/industries_/saas")({
  component: SaasPage,
  head: () => ({
    meta: [
      { title: "Marketing, Branding & Technology Solutions for Software, SaaS & Technology Companies | Ace360degree" },
      {
        name: "description",
        content:
          "Ace360degree is a strategic growth partner for software, SaaS, AI and technology businesses—combining product positioning, demand generation and digital platforms to accelerate qualified pipeline and recurring revenue.",
      },
      { property: "og:title", content: "Software, SaaS & Technology Industry Solutions — Ace360degree" },
      {
        property: "og:description",
        content:
          "Positioning, demand generation and digital platforms built for software, SaaS and technology companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const stats = [
  { v: "15+", l: "Years Building Digital Businesses" },
  { v: "300+", l: "Projects Delivered" },
  { v: "Software + SaaS", l: "Industry Expertise" },
  { v: "4-in-1", l: "Growth • Brand • Technology • Digital" },
];

const challenges = [
  { n: "01", t: "Low Product Visibility", p: "Your software solves real problems—but your ideal customers never discover it.", s: "SEO, thought leadership, technical content and performance marketing that increase visibility where buyers search.", icon: Target },
  { n: "02", t: "Weak Product Positioning", p: "Complex technology is difficult to communicate.", s: "Brand strategy, messaging frameworks, product storytelling and positioning that simplify technical products for business buyers.", icon: Sparkles },
  { n: "03", t: "Low Demo & Trial Conversion", p: "Traffic reaches your website—but very few visitors request demos or start free trials.", s: "Conversion-focused websites, landing pages, UX optimization and customer journey design that increase demo requests.", icon: TrendingUp },
  { n: "04", t: "Long Enterprise Buying Cycles", p: "Enterprise software decisions involve multiple stakeholders and extended evaluation periods.", s: "Content marketing, nurture campaigns, CRM automation and remarketing strategies that keep prospects engaged throughout the buying journey.", icon: MessageSquare },
  { n: "05", t: "Fragmented Customer Journey", p: "Marketing, sales and product teams often operate in silos.", s: "CRM integration, marketing automation, analytics dashboards and connected customer experiences.", icon: Layers },
  { n: "06", t: "Scaling Without Systems", p: "Growth becomes difficult when internal operations remain manual.", s: "Business automation, workflow optimization, CRM implementation and scalable digital infrastructure.", icon: BarChart3 },
];

const segments = [
  { i: Cloud, t: "SaaS Platforms" },
  { i: Boxes, t: "Software Product Companies" },
  { i: Building, t: "Enterprise Software" },
  { i: Rocket, t: "AI Startups" },
  { i: Cpu, t: "IoT & Embedded Systems" },
  { i: Server, t: "Cloud Platforms" },
  { i: Shield, t: "Cybersecurity Companies" },
  { i: Database, t: "ERP & Business Applications" },
  { i: Wrench, t: "Engineering Technology" },
  { i: Cpu, t: "Electronics & Hardware" },
  { i: Rocket, t: "Product Startups" },
  { i: Users, t: "IT Services Companies" },
];

const framework = [
  { n: "01", t: "Discover", d: "Understand your product, target market, customer journey and competitive landscape." },
  { n: "02", t: "Position", d: "Develop clear product positioning, messaging and category differentiation." },
  { n: "03", t: "Build", d: "Create high-performing websites, product landing pages, customer portals and digital experiences." },
  { n: "04", t: "Generate", d: "Drive qualified traffic through SEO, Google Ads, LinkedIn marketing and product-led content strategies." },
  { n: "05", t: "Scale", d: "Improve acquisition, automate workflows and optimize customer lifecycle through CRM and marketing automation." },
];

const capabilities = [
  { icon: Megaphone, t: "Growth Marketing", d: "Demand generation systems built to increase qualified demos, product enquiries and enterprise opportunities.", s: ["Technical SEO", "Performance Marketing", "LinkedIn Marketing", "Product Content Marketing", "Conversion Optimization"] },
  { icon: Sparkles, t: "Branding & Creative", d: "Create a strong product identity that differentiates your solution in competitive markets.", s: ["Brand Strategy", "Product Positioning", "Product Messaging", "Logo & Visual Identity", "Product Storytelling"] },
  { icon: Code2, t: "Technology & Digital Platforms", d: "Build digital experiences engineered for product adoption and business growth.", s: ["SaaS Websites", "Product Websites", "Customer Portals", "UI / UX Product Engineering", "Mobile Applications"] },
  { icon: Workflow, t: "Business Automation", d: "Connect marketing, sales and customer success through intelligent automation.", s: ["CRM Solutions", "Marketing Automation", "Workflow Automation", "Analytics Dashboards", "Customer Journey Optimization"] },
];

const whys = [
  { t: "Product-First Thinking", d: "We understand technology products, buying journeys and enterprise decision-making." },
  { t: "Brand + Marketing + Technology", d: "One strategic partner for positioning, digital marketing and technology platforms." },
  { t: "Digital Experiences That Convert", d: "Every website, landing page and product experience is designed to increase demos, enquiries and customer acquisition." },
  { t: "Leadership-Led Strategy", d: "Work directly with experienced strategists who understand business growth—not just marketing execution." },
];

const faqs = [
  { q: "How can Ace360degree help generate more software product enquiries?", a: "Through technical SEO, thought leadership content, LinkedIn and Google campaigns, conversion-optimized product websites and CRM-driven nurturing—engineered around how software buyers research and evaluate solutions." },
  { q: "Do you work with SaaS startups and enterprise software companies?", a: "Yes. We support both early-stage SaaS startups and established enterprise software companies across positioning, demand generation and digital platforms." },
  { q: "Can you build SaaS websites and product portals?", a: "Yes. We design and engineer SaaS websites, product landing pages, customer portals and application UIs focused on conversion, clarity and product adoption." },
  { q: "Do you provide SEO for software companies?", a: "Yes. Technical SEO, product content, category positioning and comparison content strategies designed to capture high-intent software buyers." },
  { q: "Can you integrate CRM and marketing automation?", a: "Yes. We integrate HubSpot, Zoho, Salesforce and custom CRMs with marketing automation, LinkedIn and analytics for closed-loop reporting." },
  { q: "Do you support international technology companies?", a: "Yes. We work with software and technology companies across India, UAE, UK and USA." },
];

function SaasPage() {
  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      <section className="relative overflow-hidden bg-dark text-canvas">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Software and SaaS technology" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-6">Industry Solutions / Software, SaaS & Technology</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
            Software, SaaS & Technology <span className="italic text-brand">Solutions</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-canvas/80 max-w-3xl">
            Marketing, Branding & Technology Solutions for Software, SaaS & Technology Companies.
          </p>
          <p className="mt-6 text-canvas/70 max-w-2xl leading-relaxed">
            A strategic growth partner for software companies, SaaS platforms, AI startups and technology businesses—combining product positioning, demand generation, digital platforms and growth systems to accelerate qualified pipeline, product adoption and recurring revenue.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95">
              Book Discovery Call <ArrowRight className="size-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 border border-canvas/30 text-canvas px-6 py-3 font-semibold hover:bg-canvas hover:text-dark transition">
              View Technology Projects <ArrowUpRight className="size-4" />
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
            Great software doesn't sell itself.
            <br />
            <span className="italic text-dark/50">Great positioning does.</span>
          </h2>
          <div className="mt-10 space-y-6 text-lg text-dark/75 leading-relaxed max-w-3xl">
            <p>Today's software buyers research extensively before booking a demo. They compare competitors, explore product websites, read documentation, evaluate customer experience and expect a seamless buying journey before speaking with sales.</p>
            <p>The companies that scale aren't simply building better products—they're building stronger brands, clearer positioning, better digital experiences and smarter demand generation systems.</p>
            <p className="text-dark font-medium">That's the partnership Ace360degree delivers.</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dark/[0.03]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Challenges We Solve</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">The growth challenges we solve for software and technology businesses.</h2>
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
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Software & Technology Businesses We Support</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">Experience across modern software and technology companies.</h2>
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
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Software Growth Framework</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">A five-stage operating model for technology businesses.</h2>
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
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">Four integrated capabilities. One technology growth partner.</h2>
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
          <h2 className="font-serif text-4xl md:text-5xl">Helping software and technology companies build, position and grow.</h2>
          <p className="mt-4 text-dark/60">Active strategic partnerships across the technology ecosystem.</p>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="border border-dark/10 p-8 bg-canvas hover:border-brand transition">
              <div className="text-xs uppercase tracking-[0.22em] text-brand mb-3">Active Partnership</div>
              <h3 className="font-serif text-2xl mb-3">Smartosphere Solutions LLP</h3>
              <p className="text-dark/70 text-sm leading-relaxed">Technology partner delivering modern digital experiences for an engineering-driven company specializing in embedded systems, IoT, industrial automation and enterprise technology.</p>
            </div>
            <div className="border border-dark/10 p-8 bg-canvas hover:border-brand transition">
              <div className="text-xs uppercase tracking-[0.22em] text-brand mb-3">Active Partnership</div>
              <h3 className="font-serif text-2xl mb-3">Smartosphere Group</h3>
              <p className="text-dark/70 text-sm leading-relaxed">Designed and developed a premium digital ecosystem showcasing Smartosphere's investment, consulting and technology ventures through a unified digital experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">Why Ace360degree</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl">Built for ambitious technology companies.</h2>
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
              ["Search Engine Optimization", "/search-visibility"],
              ["Performance Marketing", "/performance-marketing"],
              ["Brand Strategy", "/brand-strategy"],
              ["UI / UX & Product Engineering", "/ui-ux-design-product-engineering"],
              ["CRM & ERP Solutions", "/crm-erp-solutions"],
              ["Marketing Automation", "/marketing-automation"],
              ["Content Marketing", "/content-marketing"],
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
          <Rocket className="mx-auto size-8 text-brand mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready to accelerate your <span className="italic text-brand">software or SaaS</span> business?
          </h2>
          <p className="mt-6 text-canvas/70 text-lg max-w-2xl mx-auto">
            Let's build a growth strategy that combines branding, digital platforms and demand generation to increase product visibility, qualified pipeline and long-term recurring revenue.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95">
              Book Discovery Call <ArrowRight className="size-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 border border-canvas/30 text-canvas px-6 py-3 font-semibold hover:bg-canvas hover:text-dark transition">
              View Technology Projects <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
