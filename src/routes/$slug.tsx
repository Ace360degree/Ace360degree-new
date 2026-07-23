import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Fragment } from "react";
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
  Search,
  Smartphone,
  Zap,
  Shield,
  LifeBuoy,
  Sparkles,
  Gauge,
  TrendingUp,
  Rocket,
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
import { getLocationPageBySlug, getLocationChildPages, stripHtml, getFeaturedImage } from "@/lib/wp";

import designImg from "@/assets/svc-website-us-design.jpg";
import processImg from "@/assets/svc-website-us-processy1.jpg";

/* ---------------- Logos ---------------- */
const brandGlob = import.meta.glob<{ default: string }>(
  "@/assets/index/brands/*",
  { eager: true }
);

const brandLogos = Object.entries(brandGlob).map(([path, mod]) => ({
  src: mod.default,
  alt: path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ") ?? "",
}));

function Logos() {
  return (
    <section className="py-12 bg-background border-y border-dark/5">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <p className="text-center text-s font-semibold uppercase tracking-[0.22em] text-dark/50">
          Brands That Trust Us
        </p>
      </div>

      {/* overflow-hidden only on the scroll wrapper — prevents vertical clipping */}
      <div className="overflow-hidden logo-row">
        <div className="flex items-center gap-14 animate-marquee">
          {[...brandLogos, ...brandLogos].map((logo, i) => (
            <div
              key={i}
              className="logo-item flex-shrink-0 h-36 w-80 flex items-center justify-center p-2"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain grayscale opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const allowedCountries = ["india", "uae", "uk", "united-states", "canada", "australia"];

function isValidCountrySlug(slug: string) {
  if (allowedCountries.includes(slug)) return true;
  return allowedCountries.some((country) => slug.endsWith(`-${country}`));
}

const countryDisplayNames: Record<string, string> = {
  india: "India",
  uae: "UAE",
  uk: "UK",
  "united-states": "United States",
  canada: "Canada",
  australia: "Australia",
};

const countryCities: Record<string, string[]> = {
  india: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune"],
  uae: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
  uk: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow"],
  "united-states": ["New York", "Los Angeles", "Chicago", "Houston", "Washington, D.C."],
  canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
};





export const Route = createFileRoute("/$slug")({
  loader: async ({ params: { slug } }) => {
    let page = await getLocationPageBySlug(slug);
    
    if (!page) {
      if (!isValidCountrySlug(slug)) {
        throw notFound();
      }
      let fallbackTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      if (countryDisplayNames[slug]) {
        fallbackTitle = countryDisplayNames[slug];
      }

      console.warn(`[Dynamic Route] WP page for slug "${slug}" not found. Falling back to mock data.`);
      page = {
        id: 0,
        date: new Date().toISOString(),
        slug,
        title: { rendered: fallbackTitle },
        content: { rendered: "" },
        excerpt: { rendered: "" }
      };
    }

    let childPages: any[] = [];
    if (page.id !== 0 && allowedCountries.includes(slug)) {
      childPages = await getLocationChildPages(page.id);
    }

    return {
      page,
      childPages,
      imageUrl: getFeaturedImage(page, ""),
    };
  },
  head: ({ loaderData }) => {
    const page = loaderData?.page;
    if (!page) return { meta: [] };

    const title = stripHtml(page.title.rendered);
    const description = stripHtml(page.excerpt.rendered || page.content.rendered).slice(0, 160);
    const imageUrl = loaderData?.imageUrl;

    return {
      meta: [
        { title: `${title} | Ace360degree` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/${page.slug}` },
        { property: "og:type", content: "website" },
        ...(imageUrl ? [{ property: "og:image", content: imageUrl }] : []),
      ],
      links: [{ rel: "canonical", href: `/${page.slug}` }],
    };
  },
  component: DynamicCountryPage,
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
        alt="Workflow"
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

export function DynamicCountryPage() {
  const { page, childPages } = Route.useLoaderData();
  const slug = page.slug;

  if (allowedCountries.includes(slug)) {
    return <CountryIndexLayout page={page} countrySlug={slug} childPages={childPages} />;
  }

  return <ServiceInnerLayout page={page} />;
}

function CountryIndexLayout({ page, countrySlug, childPages }: { page: any; countrySlug: string; childPages: any[] }) {
  const countryName = countryDisplayNames[countrySlug] || "Country";
  const cities = countryCities[countrySlug] || [];

  return (
    <div className="min-h-screen bg-[#101010] text-canvas font-sans">
      <SiteHeader />

      {/* Header Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-canvas/45 font-semibold">
            Home <span className="mx-2">&gt;</span> {countryName}
          </p>
          <h1
            className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
          {page.excerpt.rendered ? (
            <div
              className="mt-6 text-lg md:text-xl text-canvas/70 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
            />
          ) : null}
        </div>
      </section>

      {/* WordPress Content (Above Grids) */}
      {page.content.rendered && (
        <section className="py-8 bg-[#101010]">
          <div className="mx-auto max-w-4xl px-6">
            <article
              className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-brand"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          </div>
        </section>
      )}

      {/* Services Grid */}
      {childPages && childPages.length > 0 && (
        <section className="py-12 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {childPages.map((child) => (
                <Link
                  key={child.slug}
                  to={`/${child.slug}`}
                  className="group flex items-center justify-between rounded-[20px] border border-white/10 bg-[#161616] px-6 py-6 transition hover:bg-brand hover:text-dark hover:border-brand"
                >
                  <span className="font-medium text-[15px]" dangerouslySetInnerHTML={{ __html: child.title.rendered }} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cities Grid */}
      {cities.length > 0 && (
        <section className="py-24 bg-dark">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-serif text-3xl md:text-4xl mb-12 text-white">City In {countryName}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {cities.map((city) => (
                <div
                  key={city}
                  className="rounded-[20px] border border-white/10 bg-[#161616] px-6 py-6 text-center transition hover:bg-white/10"
                >
                  <span className="font-medium text-[15px] text-white/90">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function formatColumns(html: string) {
  if (!html) return html;
  const metricsRegex = /(<h[1-6][^>]*>.*?PERFORMANCE\s*METRICS.*?<\/h[1-6]>|<p[^>]*>.*?PERFORMANCE\s*METRICS.*?<\/p>)/i;
  if (!html.includes("wp-block-columns") && html.match(metricsRegex)) {
    const splitParts = html.split(metricsRegex);
    if (splitParts.length >= 3) {
      const leftCol = splitParts[0];
      const rightCol = splitParts.slice(1).join("");
      return `<div class="wp-block-columns"><div class="wp-block-column">${leftCol}</div><div class="wp-block-column">${rightCol}</div></div>`;
    }
  }
  return html;
}

function ServiceInnerLayout({ page }: { page: any }) {
  const matchingCountry = allowedCountries.find((country) => page.slug.endsWith(`-${country}`));
  const countryName = matchingCountry ? countryDisplayNames[matchingCountry] : "";

  const breadcrumb = matchingCountry
    ? `Home / ${countryName} / ${stripHtml(page.title.rendered)}`
    : `Home / ${stripHtml(page.title.rendered)}`;

  let formattedTitle = page.title.rendered;
  if (countryName) {
    const regex = new RegExp(`(${countryName})`, "i");
    formattedTitle = formattedTitle.replace(regex, `<span class="text-brand italic block font-normal mt-2">$1</span>`);
  }

  // Split the entire content by separators to support inline CTAs anywhere on the page
  // Even indexes (0, 2, 4) will be standard content (Hero + Images).
  // Odd indexes (1, 3, 5) will be rendered as Dark CTA sections.
  const contentChunks = (page.content.rendered || "").split(/(?:<hr[^>]*>|<p[^>]*>\s*section\s*<\/p>)/i);

  // Parse the very first chunk to extract the Hero and SEO text
  const firstChunkParts = contentChunks[0].split(/(<figure[^>]*>[\s\S]*?<\/figure>|<img[^>]*>)/i);
  const initialHtml = firstChunkParts[0];

  // Count the number of HTML blocks in the initial chunk to determine if we have SEO content
  const initialBlockCount = (initialHtml.match(/<\/(p|ul|ol|h[1-6]|div|blockquote)>/gi) || []).length;
  const hasSeoContent = initialBlockCount > 2;

  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark text-canvas">
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-semibold mb-6">
                {breadcrumb}
              </div>
              <h1
                className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl"
                dangerouslySetInnerHTML={{ __html: formattedTitle }}
              />

              {initialHtml ? (
                <div
                  className="mt-6 max-w-3xl [&>*:first-child]:text-xl [&>*:first-child]:md:text-2xl [&>*:first-child]:text-canvas/90 [&>*:first-child]:mb-6 [&>*]:text-base [&>*]:text-canvas/70 [&>*]:mb-4 [&>*:nth-child(n+3)]:hidden"
                  dangerouslySetInnerHTML={{ __html: initialHtml }}
                />
              ) : null}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand text-dark px-6 py-3 font-semibold hover:brightness-95"
                >
                  Schedule a Free Consultation <ArrowRight className="size-4" />
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

      <Logos />

      {/* WORDPRESS CONTENT INJECTION */}
      {hasSeoContent && (
        <section className="py-16 bg-canvas text-dark border-b border-dark/10">
          <div className="mx-auto max-w-5xl px-6">
            <article
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:text-dark/80 prose-p:leading-relaxed prose-strong:text-dark prose-a:text-brand hover:prose-a:text-dark prose-img:rounded-2xl prose-img:shadow-sm [&>*:nth-child(1)]:hidden [&>*:nth-child(2)]:hidden"
              dangerouslySetInnerHTML={{ __html: initialHtml }}
            />
          </div>
        </section>
      )}

      {/* DYNAMIC CONTENT CHUNKS */}
      {contentChunks.map((chunk, chunkIndex) => {
        const hasImage = /(<figure[^>]*>|<img[^>]*>)/i.test(chunk);
        const isCtaChunk = chunkIndex % 2 === 1 && !hasImage;

        if (isCtaChunk) {
          return (
            <section key={chunkIndex} className="py-24 md:py-32 bg-dark text-canvas">
              <div className="mx-auto max-w-5xl px-6 text-center">
                <article
                  className="prose prose-lg max-w-none prose-p:text-canvas/70 prose-p:text-lg prose-p:leading-relaxed prose-p:max-w-3xl prose-p:mx-auto prose-strong:text-canvas prose-a:text-brand hover:prose-a:text-canvas text-canvas
                  [&>h6]:text-[10px] [&>h6]:uppercase [&>h6]:tracking-[0.28em] [&>h6]:text-brand [&>h6]:font-semibold [&>h6]:mb-6 [&>h6]:mt-0 [&>h6]:font-sans
                  [&>h2]:font-serif [&>h2]:text-4xl md:[&>h2]:text-[4rem] [&>h2]:leading-[1.1] [&>h2]:text-canvas [&>h2]:max-w-4xl [&>h2]:mx-auto [&>h2]:mb-8 [&>h2]:font-normal
                  [&_em]:text-brand [&_em]:not-italic md:[&_em]:italic"
                  dangerouslySetInnerHTML={{ __html: chunk }}
                />
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {chunkIndex === contentChunks.length - 1 ? (
                    <>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-brand text-dark px-8 py-3.5 font-semibold hover:brightness-95 w-full sm:w-auto"
                      >
                        Schedule Your Free Website Strategy Session <ArrowRight className="size-4" />
                      </Link>
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 px-8 py-3.5 font-semibold transition-colors w-full sm:w-auto text-canvas"
                      >
                        View Case Studies <ArrowUpRight className="size-4" />
                      </Link>
                    </>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-brand text-dark px-8 py-3.5 font-semibold hover:brightness-95 w-full sm:w-auto"
                    >
                      Book Your Strategy Call <ArrowRight className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        }

        // It's a standard chunk (Index 0, 2, 4...)
        const parts = chunk.split(/(<figure[^>]*>[\s\S]*?<\/figure>|<img[^>]*>)/i);
        const dynamicSections: { imageHtml: string; textHtml: string }[] = [];

        for (let i = 1; i < parts.length; i += 2) {
          dynamicSections.push({
            imageHtml: parts[i],
            textHtml: parts[i + 1] || ""
          });
        }

        return (
          <Fragment key={chunkIndex}>
            {/* Render any standalone text that comes BEFORE the first image in this chunk (skip for chunk 0 since it's the Hero) */}
            {chunkIndex > 0 && parts[0].trim() && (
              <section className="py-24 bg-canvas text-dark border-b border-dark/5">
                <div className="mx-auto max-w-5xl px-6">
                  <article
                    className="prose prose-lg max-w-none prose-p:text-dark/75 prose-p:leading-relaxed prose-strong:text-dark prose-a:text-brand hover:prose-a:text-dark custom-dynamic-section custom-dynamic-section-full"
                    dangerouslySetInnerHTML={{ __html: formatColumns(parts[0]) }}
                  />
                </div>
              </section>
            )}

            {dynamicSections.length > 0 && (
              <style>{`
                /* Headings styling */
                .custom-dynamic-section h1,
                .custom-dynamic-section h2,
                .custom-dynamic-section h3,
                .custom-dynamic-section h4 {
                  font-family: var(--font-serif);
                  letter-spacing: -0.025em;
                  font-size: 2.25rem;
                  line-height: 1.1;
                  margin-bottom: 1rem;
                  color: var(--color-dark);
                  margin-top: 0;
                  font-weight: 400;
                }
                @media (min-width: 768px) {
                  .custom-dynamic-section h1,
                  .custom-dynamic-section h2,
                  .custom-dynamic-section h3,
                  .custom-dynamic-section h4 {
                    font-size: 3rem;
                  }
                }
                .custom-dynamic-section h6 {
                  font-size: 10px;
                  text-transform: uppercase;
                  letter-spacing: 0.28em;
                  color: #f59e0b;
                  font-weight: 600;
                  margin-bottom: 1rem;
                  margin-top: 0;
                  font-family: var(--font-sans);
                }

                /* Unordered list styling (checkmarks) */
                .custom-dynamic-section ul {
                  list-style: none !important;
                  padding-left: 0 !important;
                  display: grid;
                  grid-template-columns: repeat(1, minmax(0, 1fr));
                  gap: 1rem;
                  margin-top: 2.5rem;
                }
                @media (min-width: 640px) {
                  .custom-dynamic-section ul {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                  }
                }
                .custom-dynamic-section ul li {
                  position: relative;
                  padding-left: 1.75rem !important;
                  margin: 0 !important;
                  font-size: 0.875rem;
                  color: rgba(22, 22, 22, 0.85);
                  font-weight: 500;
                  line-height: 1.4;
                  display: flex;
                  align-items: flex-start;
                }
                .custom-dynamic-section ul li::before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 0.15rem;
                  width: 1.1rem;
                  height: 1.1rem;
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/%3E%3Cpolyline points='22 4 12 14.01 9 11.01'/%3E%3C/svg%3E");
                  background-size: contain;
                  background-repeat: no-repeat;
                }

                /* WordPress Block Columns */
                .custom-dynamic-section .wp-block-columns {
                  display: flex;
                  flex-direction: column;
                  gap: 2rem;
                  margin-top: 3rem;
                  margin-bottom: 2rem;
                }
                @media (min-width: 768px) {
                  .custom-dynamic-section .wp-block-columns {
                    flex-direction: row;
                    gap: 4rem;
                    align-items: center;
                  }
                }
                .custom-dynamic-section .wp-block-column {
                  flex-basis: 0;
                  flex-grow: 1;
                }
                
                /* 6th Section: Left Column Bordered List */
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul {
                  display: flex;
                  flex-direction: column;
                  padding-left: 0 !important;
                  margin-top: 2rem;
                  gap: 0;
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li {
                  padding: 1.25rem 0 !important;
                  margin: 0 !important;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                  display: flex;
                  align-items: center;
                  font-size: 1.125rem;
                  font-weight: 400;
                  font-family: var(--font-serif);
                  color: var(--color-dark);
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li:first-child {
                  border-top: 1px solid rgba(0, 0, 0, 0.05);
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li::before {
                  content: "";
                  display: block;
                  min-width: 2.5rem;
                  width: 2.5rem;
                  height: 2.5rem;
                  background-color: rgba(245, 158, 11, 0.1);
                  border-radius: 0.5rem;
                  margin-right: 1rem;
                  background-size: 1.25rem;
                  background-position: center;
                  background-repeat: no-repeat;
                  /* Default icon */
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E");
                  top: auto;
                  position: relative;
                }
                /* Custom icons for each item in the left column list */
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li:nth-child(2)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li:nth-child(3)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li:nth-child(4)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'/%3E%3Cpolyline points='16 7 22 7 22 13'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li:nth-child(5)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m12 14 4-4'/%3E%3Cpath d='M3.34 16A10 10 0 1 1 20.66 16'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:first-child ul li:nth-child(6)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10'/%3E%3C/svg%3E");
                }

                /* 6th Section: Right Column Metric Grid */
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child > *:first-child {
                  font-size: 10px !important;
                  text-transform: uppercase !important;
                  letter-spacing: 0.28em !important;
                  color: #f59e0b !important;
                  font-weight: 600 !important;
                  margin-bottom: 1.5rem !important;
                  margin-top: 0 !important;
                  font-family: var(--font-sans) !important;
                  line-height: 1.5 !important;
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul {
                  display: grid;
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                  gap: 1.5rem;
                  padding-left: 0 !important;
                  margin-top: 2rem;
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul li {
                  padding: 2rem 1.5rem !important;
                  margin: 0 !important;
                  background-color: rgba(255, 255, 255, 0.4);
                  border: 1px solid rgba(0, 0, 0, 0.05);
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: center;
                  font-size: 0.75rem;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  color: rgba(22, 22, 22, 0.5);
                  font-weight: 600;
                  font-family: var(--font-sans);
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul li p {
                  margin: 0 !important;
                  line-height: 1.4 !important;
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul li strong {
                  font-family: var(--font-serif);
                  font-size: 2.75rem;
                  font-weight: 400;
                  color: var(--color-dark);
                  line-height: 1;
                  margin-bottom: 0.5rem;
                  text-transform: none;
                  letter-spacing: normal;
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul li::before {
                  content: "";
                  display: block;
                  width: 1.5rem;
                  height: 1.5rem;
                  margin-bottom: 0.75rem;
                  background-size: contain;
                  background-repeat: no-repeat;
                  /* Default icon: Rocket */
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'/%3E%3Cpath d='m12 15-3-3a22 22 0 0 1 3.8-8.35L14 3l4 4 1.15-1.2A22 22 0 0 1 15 12l-3 3z'/%3E%3Cpath d='M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/%3E%3C/svg%3E");
                  top: auto;
                  position: relative;
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul li:nth-child(2)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='14' height='20' x='5' y='2' rx='2' ry='2'/%3E%3Cpath d='M12 18h.01'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul li:nth-child(3)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child ul li:nth-child(4)::before {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10'/%3E%3C/svg%3E");
                }
                
                /* Dark CTA Box in Right Column (Blockquote) */
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child blockquote {
                  background-color: var(--color-dark);
                  color: var(--color-canvas);
                  padding: 2.5rem;
                  margin-top: 1.5rem;
                  margin-left: 0;
                  margin-right: 0;
                  margin-bottom: 0;
                  font-size: 0.95rem;
                  line-height: 1.6;
                  border: none;
                  border-radius: 0;
                  font-style: normal;
                  position: relative;
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child blockquote::before {
                  content: "";
                  display: block;
                  width: 1.5rem;
                  height: 1.5rem;
                  margin-bottom: 1.5rem;
                  background-size: contain;
                  background-repeat: no-repeat;
                  /* Lifebuoy icon */
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cline x1='4.93' y1='4.93' x2='9.17' y2='9.17'/%3E%3Cline x1='14.83' y1='14.83' x2='19.07' y2='19.07'/%3E%3Cline x1='14.83' y1='9.17' x2='19.07' y2='4.93'/%3E%3Cline x1='14.83' y1='9.17' x2='18.36' y2='5.64'/%3E%3Cline x1='4.93' y1='19.07' x2='9.17' y2='14.83'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full .wp-block-columns .wp-block-column:last-child blockquote p {
                  margin: 0;
                  color: rgba(255, 255, 255, 0.7);
                }

                /* Ordered list styling (Service Cards Grid - Full Width) */
                .custom-dynamic-section-full ol {
                  list-style: none !important;
                  padding-left: 0 !important;
                  display: grid;
                  grid-template-columns: repeat(1, minmax(0, 1fr));
                  gap: 1.5rem;
                  margin-top: 3rem;
                  counter-reset: service-counter;
                }
                @media (min-width: 768px) {
                  .custom-dynamic-section-full ol {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                  }
                }
                @media (min-width: 1024px) {
                  .custom-dynamic-section-full ol {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                  }
                }
                .custom-dynamic-section-full ol li {
                  position: relative;
                  counter-increment: service-counter;
                  padding: 2.5rem 2rem !important;
                  margin: 0 !important;
                  background-color: rgba(255, 255, 255, 0.4);
                  border: 1px solid rgba(0, 0, 0, 0.05);
                  display: flex;
                  flex-direction: column;
                  font-size: 0.95rem;
                  line-height: 1.6;
                  color: rgba(22, 22, 22, 0.7);
                }
                .custom-dynamic-section-full ol li::before {
                  content: "0" counter(service-counter);
                  position: absolute;
                  top: 2rem;
                  right: 2rem;
                  font-size: 0.8rem;
                  font-weight: 600;
                  letter-spacing: 0.1em;
                  color: rgba(22, 22, 22, 0.4);
                }
                /* Decorative icon box for ordered list items */
                .custom-dynamic-section-full ol li::after {
                  content: "";
                  display: block;
                  width: 3rem;
                  height: 3rem;
                  background-color: rgba(245, 158, 11, 0.1);
                  border-radius: 0.5rem;
                  margin-bottom: 1.5rem;
                  order: -1;
                  background-size: 1.25rem;
                  background-position: center;
                  background-repeat: no-repeat;
                  /* Default zig-zag */
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 12h-4l-3 9L9 3l-3 9H2'/%3E%3C/svg%3E");
                }
                /* Specific icons matching the design */
                .custom-dynamic-section-full ol li:nth-child(1)::after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3Cpath d='M2 12h20'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full ol li:nth-child(2)::after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='21' r='1'/%3E%3Ccircle cx='19' cy='21' r='1'/%3E%3Cpath d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full ol li:nth-child(3)::after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Cline x1='3' y1='9' x2='21' y2='9'/%3E%3Cline x1='9' y1='21' x2='9' y2='9'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full ol li:nth-child(4)::after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3Cpolyline points='9 22 9 12 15 12 15 22'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full ol li:nth-child(5)::after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='16 18 22 12 16 6'/%3E%3Cpolyline points='8 6 2 12 8 18'/%3E%3C/svg%3E");
                }
                .custom-dynamic-section-full ol li:nth-child(6)::after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/%3E%3C/svg%3E");
                }
                /* Style strong text in ol as the card title */
                .custom-dynamic-section-full ol li strong {
                  font-family: var(--font-serif);
                  font-size: 1.5rem;
                  font-weight: 400;
                  color: var(--color-dark);
                  display: block;
                  margin-bottom: 0.75rem;
                  line-height: 1.2;
                }
                /* Hide the redundant line break generated by Shift+Enter since strong is a block */
                .custom-dynamic-section-full ol li strong + br {
                  display: none;
                }

                /* Ordered list styling (Process Vertical List - Side-by-Side) */
                .custom-dynamic-section-side ol {
                  list-style: none !important;
                  padding-left: 0 !important;
                  margin-top: 2.5rem;
                  counter-reset: process-counter;
                  display: flex;
                  flex-direction: column;
                  gap: 2rem;
                }
                .custom-dynamic-section-side ol li {
                  position: relative;
                  counter-increment: process-counter;
                  padding-left: 3.5rem !important;
                  margin: 0 !important;
                  font-size: 0.95rem;
                  line-height: 1.6;
                  color: rgba(22, 22, 22, 0.7);
                }
                .custom-dynamic-section-side ol li::before {
                  content: "0" counter(process-counter);
                  position: absolute;
                  left: 0;
                  top: 0;
                  font-size: 1.5rem;
                  font-family: var(--font-serif);
                  color: var(--color-brand);
                  line-height: 1.2;
                }
                .custom-dynamic-section-side ol li strong {
                  font-family: var(--font-serif);
                  font-size: 1.25rem;
                  font-weight: 400;
                  color: var(--color-dark);
                  display: block;
                  margin-bottom: 0.25rem;
                  line-height: 1.3;
                }
                /* Hide the redundant line break generated by Shift+Enter since strong is a block */
                .custom-dynamic-section-side ol li strong + br {
                  display: none;
                }
              `}</style>
            )}

            {dynamicSections.map((section, index) => {
              const isFullWidth = section.imageHtml.includes("aligncenter") || section.imageHtml.includes("align-center");

              if (isFullWidth) {
                return (
                  <Fragment key={index}>
                    <section className="py-16 md:py-24 bg-canvas">
                      <div className="mx-auto max-w-7xl px-6 [&_img]:w-full [&_img]:rounded-none [&_img]:shadow-sm">
                        <div dangerouslySetInnerHTML={{ __html: section.imageHtml }} />
                      </div>
                    </section>
                    {section.textHtml.trim() && (
                      <section className="py-16 bg-canvas text-dark border-b border-dark/5">
                        <div className="mx-auto max-w-5xl px-6">
                          <article
                            className="prose prose-lg max-w-none prose-p:text-dark/75 prose-p:leading-relaxed prose-strong:text-dark prose-a:text-brand hover:prose-a:text-dark custom-dynamic-section custom-dynamic-section-full"
                            dangerouslySetInnerHTML={{ __html: formatColumns(section.textHtml) }}
                          />
                        </div>
                      </section>
                    )}
                  </Fragment>
                );
              }

              const isAlignRight = section.imageHtml.includes("alignright") || section.imageHtml.includes("align-right");
              const isAlignLeft = section.imageHtml.includes("alignleft") || section.imageHtml.includes("align-left");

              // By default, alternate image left/right based on the chunk index to create a zigzag pattern across sections
              let isImageLeft = (Math.floor(chunkIndex / 2) + index) % 2 !== 0;

              // Respect explicit alignment set in WordPress
              if (isAlignRight) isImageLeft = false;
              if (isAlignLeft) isImageLeft = true;

              return (
                <section key={index} className="py-24 md:py-32 bg-canvas border-b border-dark/5">
                  <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div
                      className={`w-full h-full [&>figure]:m-0 [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:shadow-sm ${!isImageLeft ? "md:order-last" : ""}`}
                      dangerouslySetInnerHTML={{ __html: section.imageHtml }}
                    />
                    <div>
                      <article
                        className="prose prose-lg max-w-none prose-p:text-dark/75 prose-p:leading-relaxed prose-strong:text-dark prose-a:text-brand hover:prose-a:text-dark custom-dynamic-section custom-dynamic-section-side"
                        dangerouslySetInnerHTML={{ __html: formatColumns(section.textHtml) }}
                      />
                    </div>
                  </div>
                </section>
              );
            })}
          </Fragment>
        );
      })}



      {/* FINAL CTA REMOVED (now handled dynamically via WordPress content chunks) */}
      <SiteFooter />
    </div>
  );
}
