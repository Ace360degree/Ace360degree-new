import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/blog-heroy1.jpg";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import b4 from "@/assets/blog-4.jpg";
import b5 from "@/assets/blog-5.jpg";
import b6 from "@/assets/blog-6.jpg";

import a1 from "@/assets/blog-y1.jpg";
import a2 from "@/assets/blog-y2.jpg";
import a3 from "@/assets/blog-y3.jpg";
import a4 from "@/assets/blog-y4.jpg";
import a5 from "@/assets/blog-y5.jpg";
import a6 from "@/assets/blog-y6.jpg";
import a7 from "@/assets/blog-y7.jpg";
import a8 from "@/assets/blog-y8.jpg";
import a9 from "@/assets/blog-y9.jpg";
import a10 from "@/assets/blog-y10.jpg";
import a11 from "@/assets/blog-y11.jpg";
import a12 from "@/assets/blog-y12.jpg";


export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Ace360degree Blog & Insights | Digital Marketing, Branding & Tech Trends" },
      {
        name: "description",
        content:
          "Read the latest insights from Ace360degree — expert articles on digital marketing, branding, web technology, and business growth strategies that work.",
      },
      { property: "og:title", content: "Ace360degree Blog & Insights" },
      {
        property: "og:description",
        content:
          "Ideas. Insights. Impact. Where creativity meets technology — explore how brands grow, scale and stay ahead.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const CATEGORIES = [
  "All",
  "Digital Marketing",
  "Branding & Design",
  "Technology",
  "Case Studies",
  "Industry Trends",
  "Inside Ace360degree",
];

type Article = {
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  image: string;
  href: string;
};

const FEATURED: Article = {
  title: "How to Promote a Digital Marketing Agency on Social Media: Proven Strategies for Growth and Client Acquisition",
  category: "Digital Marketing",
  date: "12 May 2026",
  read: "9 min read",
  excerpt:
    "Understanding the importance of social media promotion for agencies — promoting a digital marketing agency on social media is no longer optional. A practical playbook on positioning, content cadence, and lead acquisition.",
  image: b1,
  href: "https://ace360degree.com/blog/how-to-promote-digital-marketing-agency-on-social-media",
};

const TRENDING: Article[] = [
  { title: "Cosmos Seals SEO Case Study: How Industrial SEO Actually Works (India + UAE and More Countries)", category: "Case Studies", date: "09 May 2026", read: "8 min", excerpt: "", image: b5, href: "https://ace360degree.com/blog/industrial-seo-case-study-b2b-india-uae" },
  { title: "How to Run a Social Media Marketing Agency Successfully: A Complete Step-by-Step Guide", category: "Inside Ace360degree", date: "20 Apr 2026", read: "10 min", excerpt: "", image: b6, href: "https://ace360degree.com/blog/how-to-run-a-social-media-marketing-agency-successfully-a-complete-step-by-step-guide" },
  { title: "Benefits of Hiring a Social Media Marketing Agency for Ecommerce Businesses", category: "Digital Marketing", date: "01 Apr 2026", read: "6 min", excerpt: "", image: b3, href: "https://ace360degree.com/blog/benefits-of-hiring-social-media-marketing-agency-for-ecommerce" },
  { title: "How Can a Digital Marketing Agency Help Dentists Increase Patient Appointments?", category: "Industry Trends", date: "06 Mar 2026", read: "7 min", excerpt: "", image: b2, href: "https://ace360degree.com/blog/digital-marketing-agency-for-dentists" },
  { title: "Conversion Rate Optimization: Turning Website Visitors into Real Business Enquiries", category: "Technology", date: "25 Feb 2026", read: "8 min", excerpt: "", image: b4, href: "https://ace360degree.com/blog/conversion-rate-optimization-enquiries" },
];

const ARTICLES: Article[] = [
  { title: "How to Promote a Digital Marketing Agency on Social Media", category: "Digital Marketing", date: "12 May 2026", read: "9 min", excerpt: "Proven strategies for growth and client acquisition — positioning, content cadence, and lead-gen tactics for modern agencies.", image: a11, href: "https://ace360degree.com/blog/how-to-promote-digital-marketing-agency-on-social-media" },
  { title: "Cosmos Seals SEO Case Study: Industrial SEO That Actually Works", category: "Case Studies", date: "09 May 2026", read: "8 min", excerpt: "Why industrial SEO feels slow but compounds — a B2B case study across India, UAE and more.", image: a7, href: "https://ace360degree.com/blog/industrial-seo-case-study-b2b-india-uae" },
  { title: "How to Run a Social Media Marketing Agency Successfully", category: "Inside Ace360degree", date: "20 Apr 2026", read: "10 min", excerpt: "A complete step-by-step guide to building a foundation that lasts beyond the first ten clients.", image: a8, href: "https://ace360degree.com/blog/how-to-run-a-social-media-marketing-agency-successfully-a-complete-step-by-step-guide" },
  { title: "Benefits of Hiring a Social Media Marketing Agency for Ecommerce", category: "Digital Marketing", date: "01 Apr 2026", read: "6 min", excerpt: "Why social media has become essential for ecommerce growth — and what to look for in a partner.", image: a2, href: "https://ace360degree.com/blog/benefits-of-hiring-social-media-marketing-agency-for-ecommerce" },
  { title: "How a Digital Marketing Agency Helps Dentists Increase Appointments", category: "Industry Trends", date: "06 Mar 2026", read: "7 min", excerpt: "Recognizing the real problem — empty chairs and irregular bookings rarely look like a marketing issue at first.", image: a5, href: "https://ace360degree.com/blog/digital-marketing-agency-for-dentists" },
  { title: "Conversion Rate Optimization: Turning Visitors into Enquiries", category: "Technology", date: "25 Feb 2026", read: "8 min", excerpt: "Why traffic alone does not grow a business — a CRO framework rooted in real funnel diagnostics.", image: a9, href: "https://ace360degree.com/blog/conversion-rate-optimization-enquiries" },
  { title: "The Future of Digital Agencies: AI, Branding & Technology in 2025", category: "Industry Trends", date: "26 Nov 2025", read: "7 min", excerpt: "Why digital agencies must evolve — ad-only shops won't survive the next era of integrated brand and tech.", image: a7, href: "https://ace360degree.com/blog/future-digital-agencies-2025-ai-branding-technology" },
  { title: "Why Every Brand Needs a Content Marketing Strategy in 2025", category: "Branding & Design", date: "18 Nov 2025", read: "6 min", excerpt: "Ads stop. Content doesn't. If your ad budget vanished today, how long would your brand survive online?", image: a5, href: "https://ace360degree.com/blog/content-marketing-strategy-2025" },
  { title: "Top 5 Website Mistakes That Kill SEO & Conversions in 2025", category: "Technology", date: "10 Nov 2025", read: "5 min", excerpt: "Your website is still the center of your digital ecosystem — here are the silent failures most teams miss.", image: a10, href: "https://ace360degree.com/blog/top-5-website-mistakes-that-kill-seo-conversions" },
  { title: "Meta Ads vs Google Ads: Which Drives Better ROI in 2025?", category: "Digital Marketing", date: "07 Nov 2025", read: "6 min", excerpt: "The big question every brand is asking — a practical breakdown by stage, intent, and category.", image: a3, href: "https://ace360degree.com/blog/meta-ads-vs-google-ads-which-drives-better-roi" },
];

function BlogPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);

  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 lg:pt-20 lg:pb-28">
          <nav className="text-xs uppercase tracking-[0.22em] text-ink/70 mb-10">
            <Link to="/" className="hover:text-brand">Home</Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-dark">Insights</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="text-[11px] uppercase tracking-[0.28em] text-brand font-semibold mb-6">
                — Ace360degree Blog
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
                Ideas. <em className="not-italic text-brand">Insights.</em>{" "}
                <span className="font-sans italic font-light">Impact.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed text-pretty">
                Where creativity meets technology — explore how brands grow, scale, and stay ahead in the digital era.
                From marketing strategies to product innovation, every article is written by people who actually do it every day.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#latest" className="inline-flex items-center gap-2 bg-dark text-canvas px-6 py-3 text-sm font-semibold hover:bg-brand hover:text-dark transition">
                  Explore Insights <span aria-hidden>→</span>
                </a>
                <a href="#newsletter" className="inline-flex items-center gap-2 border border-dark/15 px-6 py-3 text-sm font-semibold hover:border-dark transition">
                  Subscribe <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[5/6] overflow-hidden bg-muted">
                <img src={heroImg} alt="Editorial collage representing where strategy becomes insight" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-canvas mix-blend-difference">
                  <span>Vol. 06 / 2026</span>
                  <span>The Insight Issue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-t border-dark/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink mb-3">Featured</div>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Featured Reads from Our Experts</h2>
              <p className="mt-4 max-w-xl text-ink">Get inspired by what's working right now — in marketing, branding, and business growth.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Hero card */}
            <a href={FEATURED.href} target="_blank" rel="noopener" className="lg:col-span-7 group cursor-pointer block">
              <article>
              <div className="relative aspect-[16/10] overflow-hidden bg-muted mb-6">
                <img src={FEATURED.image} alt={FEATURED.title} loading="lazy" width={1280} height={896}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink mb-4">
                <span className="text-brand font-semibold">{FEATURED.category}</span>
                <span className="opacity-30">/</span>
                <span>{FEATURED.date}</span>
                <span className="opacity-30">/</span>
                <span>{FEATURED.read}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight group-hover:text-brand transition">
                {FEATURED.title}
              </h3>
              <p className="mt-4 text-ink text-lg leading-relaxed max-w-2xl">{FEATURED.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold border-b border-dark pb-1 group-hover:border-brand group-hover:text-brand transition">
                Read More <span aria-hidden>→</span>
              </span>
              </article>
            </a>

            {/* Trending */}
            <aside className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink mb-6 pb-4 border-b border-dark/10">Trending Now</div>
              <ul className="divide-y divide-dark/10">
                {TRENDING.map((a, i) => (
                  <li key={i}>
                    <a href={a.href} target="_blank" rel="noopener" className="group flex items-start gap-5 py-5 cursor-pointer">
                      <div className="relative size-20 shrink-0 overflow-hidden bg-muted">
                        <img src={a.image} alt={a.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-brand font-semibold mb-1">{a.category}</div>
                        <h4 className="font-medium leading-snug group-hover:text-brand transition line-clamp-2">{a.title}</h4>
                        <div className="mt-1 text-xs text-ink">{a.date} · {a.read}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER (sticky) */}
      <section id="categories" className="sticky top-20 z-30 bg-canvas/90 backdrop-blur border-y border-dark/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center gap-6 overflow-x-auto">
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink shrink-0">Explore</span>
          <div className="flex items-center gap-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative px-4 py-2 text-sm whitespace-nowrap transition ${
                  active === c ? "text-dark" : "text-ink hover:text-dark"
                }`}
              >
                {c}
                <span
                  className={`absolute left-4 right-4 -bottom-px h-0.5 bg-brand transition-transform origin-left ${
                    active === c ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY SHELVES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 space-y-20">
          {CATEGORIES.filter((c) => c !== "All").slice(0, 3).map((cat) => {
            const items = ARTICLES.filter((a) => a.category === cat).concat(ARTICLES).slice(0, 4);
            return (
              <div key={cat}>
                <div className="flex items-end justify-between mb-10 pb-6 border-b border-dark/10">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-brand font-semibold mb-2">{cat}</div>
                    <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
                      {cat === "Digital Marketing" && "Strategies that drive measurable growth"}
                      {cat === "Branding & Design" && "Identity, story, and the craft behind it"}
                      {cat === "Technology" && "Web, apps, and AI that ship"}
                    </h3>
                  </div>
                  <a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold border-b border-dark pb-1 hover:border-brand hover:text-brand transition cursor-pointer">
                    View All <span aria-hidden>→</span>
                  </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {items.map((a, i) => (
                    <ArticleCard key={i} a={a} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* THOUGHT LEADERSHIP */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-brand font-semibold mb-8">From the Ace360degree Desk</div>
          <blockquote className="font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight text-balance">
            "Marketing without creativity is noise. Technology without empathy is cold.
            <span className="block mt-4 text-brand italic">The real magic happens when they meet.</span>"
          </blockquote>
          <div className="mt-10 text-sm uppercase tracking-[0.22em] text-canvas/70">
            — Altaf Shaikh, Founder · Ace360degree
          </div>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 border border-canvas/20 px-6 py-3 text-sm font-semibold hover:bg-brand hover:text-dark hover:border-brand transition">
            Discover Our Story <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section id="latest" className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink mb-3">{active === "All" ? "Latest Insights" : active}</div>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
                {active === "All" ? "Fresh ideas. Field-tested results." : `In ${active}`}
              </h2>
              <p className="mt-4 max-w-xl text-ink">Practical tips to help your brand grow.</p>
            </div>
            <a className="inline-flex items-center gap-2 text-sm font-semibold border-b border-dark pb-1 hover:border-brand hover:text-brand transition cursor-pointer">
              Read All Articles <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((a, i) => (
              <ArticleCard key={i} a={a} large />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 border border-dark/20 px-7 py-3 text-sm font-semibold hover:bg-dark hover:text-canvas transition">
              Load More <span aria-hidden>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="bg-white border-y border-dark/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-brand font-semibold mb-4">The Insight Letter</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.05]">
              Stay Ahead of the <em className="text-brand not-italic">Curve.</em>
            </h2>
            <p className="mt-6 text-ink text-lg max-w-xl">
              Join marketers, founders, and professionals who get Ace360degree insights delivered monthly.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-canvas p-8 lg:p-10 border border-dark/10"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Your name"
                className="bg-transparent border-b border-dark/20 py-3 text-sm focus:outline-none focus:border-brand transition"
              />
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-dark/20 py-3 text-sm focus:outline-none focus:border-brand transition"
              />
            </div>
            <button className="mt-4 w-full bg-brand text-dark py-3.5 text-sm font-semibold hover:bg-dark hover:text-canvas transition">
              Subscribe Now →
            </button>
            <p className="mt-4 text-xs text-ink">
              No spam. Just fresh insights, trends, and strategies that help your brand grow.
            </p>
          </form>
        </div>
      </section>

      {/* SEO QUICK LINKS */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ink mb-3">Discover</div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Browse More Insights</h2>
              <p className="mt-4 text-ink max-w-sm">
                Learn. Evolve. Lead. Because staying relevant starts with staying informed.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
              {[
                "SEO & Organic Growth",
                "Performance Marketing",
                "Design & Branding Tips",
                "Tech & Automation",
                "Case Studies",
                "Client Stories",
              ].map((l) => (
                <a
                  key={l}
                  className="group flex items-center justify-between py-4 border-b border-dark/10 cursor-pointer"
                >
                  <span className="text-sm font-medium group-hover:text-brand transition">{l}</span>
                  <span className="text-ink group-hover:text-brand group-hover:translate-x-1 transition" aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2">
        <a className="group inline-flex items-center gap-2 bg-dark text-canvas px-4 py-3 text-xs font-semibold shadow-lg hover:bg-brand hover:text-dark transition cursor-pointer">
          📞 Talk to a Marketing Expert
        </a>
        <a href="#newsletter" className="inline-flex items-center gap-2 bg-brand text-dark px-4 py-3 text-xs font-semibold shadow-lg hover:bg-dark hover:text-canvas transition">
          ✉ Subscribe to Insights
        </a>
      </div>
    </div>
  );
}

function ArticleCard({ a, large = false }: { a: Article; large?: boolean }) {
  return (
    <a href={a.href} target="_blank" rel="noopener" className="group cursor-pointer block">
      <article>
      <div className={`relative overflow-hidden bg-muted ${large ? "aspect-[4/3]" : "aspect-[4/3]"} mb-5`}>
        <img
          src={a.image}
          alt={a.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-ink mb-3">
        <span className="text-brand font-semibold">{a.category}</span>
        <span className="opacity-30">/</span>
        <span>{a.date}</span>
        {a.read && <><span className="opacity-30">/</span><span>{a.read}</span></>}
      </div>
      <h3 className="font-serif text-xl md:text-2xl leading-snug tracking-tight group-hover:text-brand transition">
        {a.title}
      </h3>
      {a.excerpt && <p className="mt-3 text-sm text-ink leading-relaxed line-clamp-2">{a.excerpt}</p>}
      <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-dark group-hover:text-brand transition">
        Read More <span aria-hidden className="transition group-hover:translate-x-1">→</span>
      </span>
      </article>
    </a>
  );
}
