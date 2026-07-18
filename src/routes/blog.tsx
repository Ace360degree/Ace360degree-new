import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/blog-heroy1.jpg";
import { getBlogEntries, toBlogCard, type BlogCard } from "@/lib/wp";

export const Route = createFileRoute("/blog")({
  loader: async () => {
    const posts = await getBlogEntries();
    return { posts };
  },
  head: () => ({
    meta: [
      { title: "Ace360degree Blog & Insights | Digital Marketing, Branding & Tech Trends" },
      {
        name: "description",
        content:
          "Read the latest insights from Ace360degree - expert articles on digital marketing, branding, web technology, and business growth strategies that work.",
      },
      { property: "og:title", content: "Ace360degree Blog & Insights" },
      {
        property: "og:description",
        content:
          "Ideas. Insights. Impact. Where creativity meets technology - explore how brands grow, scale and stay ahead.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { posts } = Route.useLoaderData();
  const articles = posts.map((post) => ({
    ...toBlogCard(post, heroImg),
    kind: post._embedded?.["wp:term"] ? "post" : "page",
  }));
  const featured = articles[0];
  const shelfCategories = ["All", ...new Set(articles.map((article) => article.category))]
    .filter((category) => category !== "All")
    .slice(0, 3);
  const latestArticles = articles.slice(0, 20);

  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 lg:pt-20 lg:pb-28">
          <nav className="mb-10 text-xs uppercase tracking-[0.22em] text-ink/70">
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-dark">Insights</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="animate-fade-up lg:col-span-7">
              <div className="mb-6 text-[11px] uppercase tracking-[0.28em] text-brand font-semibold">
                - Ace360degree Blog
              </div>
              <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Ideas. <em className="not-italic text-brand">Insights.</em>{" "}
                <span className="font-sans italic font-light">Impact.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink text-pretty">
                Where creativity meets technology - explore how brands grow, scale,
                and stay ahead in the digital era. Every article below is sourced
                from WordPress so the team can manage titles, slugs, images, and
                copy without touching the frontend.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#latest"
                  className="inline-flex items-center gap-2 bg-dark px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-brand hover:text-dark"
                >
                  Explore Insights <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center gap-2 border border-dark/15 px-6 py-3 text-sm font-semibold transition hover:border-dark"
                >
                  Subscribe <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[5/6] overflow-hidden bg-muted">
                <img
                  src={heroImg}
                  alt="Editorial collage representing where strategy becomes insight"
                  width={1600}
                  height={1200}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-canvas mix-blend-difference">
                  <span>Vol. 06 / 2026</span>
                  <span>The Insight Issue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="border-y border-dark/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10 flex items-end justify-between border-b border-dark/10 pb-6">
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.28em] text-brand font-semibold">
                Featured by WordPress
              </div>
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                Latest stories pulled from the CMS
              </h2>
            </div>
            <a
              href="#latest"
              className="hidden cursor-pointer items-center gap-2 border-b border-dark pb-1 text-sm font-semibold transition hover:border-brand hover:text-brand md:inline-flex"
            >
              View All <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {featured ? (
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <ArticleCard a={featured} large />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {articles.slice(1, 5).map((article) => (
                  <ArticleCard key={article.slug} a={article} />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-dark/20 px-6 py-12 text-center text-ink">
              WordPress posts will appear here once the API is connected.
            </div>
          )}
        </div>
      </section> */}

      {/* <section className="bg-white">
        <div className="mx-auto max-w-7xl space-y-20 px-6 py-20 lg:py-28">
          {shelfCategories.map((category) => {
            const items = articles.filter((article) => article.category === category).concat(articles).slice(0, 4);

            return (
              <div key={category}>
                <div className="mb-10 flex items-end justify-between border-b border-dark/10 pb-6">
                  <div>
                    <div className="mb-2 text-[11px] uppercase tracking-[0.28em] text-brand font-semibold">
                      {category}
                    </div>
                    <h3 className="font-serif text-3xl tracking-tight md:text-4xl">
                      {category === "Digital Marketing" && "Strategies that drive measurable growth"}
                      {category === "Branding & Design" && "Identity, story, and the craft behind it"}
                      {category === "Technology" && "Web, apps, and AI that ship"}
                      {category === "Case Studies" && "Real client outcomes and the work behind them"}
                      {category === "Inside Ace360degree" && "How the team thinks, builds, and ships"}
                      {category === "Industry Trends" && "What is changing across the market"}
                    </h3>
                  </div>
                  <a className="hidden cursor-pointer items-center gap-2 border-b border-dark pb-1 text-sm font-semibold transition hover:border-brand hover:text-brand md:inline-flex">
                    View All <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {items.map((article) => (
                    <ArticleCard key={article.slug} a={article} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section> */}

      <section id="latest" className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-ink">
                Latest Insights
              </div>
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                Fresh ideas. Field-tested results.
              </h2>
              <p className="mt-4 max-w-xl text-ink">
                Practical tips to help your brand grow.
              </p>
            </div>
            <a className="inline-flex cursor-pointer items-center gap-2 border-b border-dark pb-1 text-sm font-semibold transition hover:border-brand hover:text-brand">
              Read All Articles <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {latestArticles.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {latestArticles.map((article) => (
                <ArticleCard key={article.slug} a={article} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-dark/20 px-6 py-12 text-center text-ink">
              No WordPress posts were returned from the API.
            </div>
          )}

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 border border-dark/20 px-7 py-3 text-sm font-semibold transition hover:bg-dark hover:text-canvas">
              Load More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
          <div className="mb-8 text-[11px] uppercase tracking-[0.28em] text-brand font-semibold">
            From the Ace360degree Desk
          </div>
          <blockquote className="font-serif text-3xl leading-[1.15] tracking-tight text-balance md:text-5xl">
            "Marketing without creativity is noise. Technology without empathy is
            cold.
            <span className="mt-4 block text-brand italic">
              The real magic happens when they meet.
            </span>"
          </blockquote>
          <div className="mt-10 text-sm uppercase tracking-[0.22em] text-canvas/70">
            - Altaf Shaikh, Founder - Ace360degree
          </div>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 border border-canvas/20 px-6 py-3 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-dark"
          >
            Discover Our Story <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <section id="newsletter" className="border-y border-dark/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-brand font-semibold">
              The Insight Letter
            </div>
            <h2 className="font-serif text-4xl tracking-tight leading-[1.05] md:text-5xl">
              Stay Ahead of the <em className="not-italic text-brand">Curve.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink">
              Join marketers, founders, and professionals who get Ace360degree
              insights delivered monthly.
            </p>
          </div>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="border border-dark/10 bg-canvas p-8 lg:p-10"
          >
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <input
                placeholder="Your name"
                className="border-b border-dark/20 bg-transparent py-3 text-sm focus:border-brand focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="border-b border-dark/20 bg-transparent py-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <button className="mt-4 w-full bg-brand py-3.5 text-sm font-semibold text-dark transition hover:bg-dark hover:text-canvas">
              Subscribe Now &rarr;
            </button>
            <p className="mt-4 text-xs text-ink">
              No spam. Just fresh insights, trends, and strategies that help your
              brand grow.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-ink">
                Discover
              </div>
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                Browse More Insights
              </h2>
              <p className="mt-4 max-w-sm text-ink">
                Learn. Evolve. Lead. Because staying relevant starts with staying
                informed.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-1 lg:col-span-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                "SEO & Organic Growth",
                "Performance Marketing",
                "Design & Branding Tips",
                "Tech & Automation",
                "Case Studies",
                "Client Stories",
              ].map((label) => (
                <a
                  key={label}
                  className="group flex items-center justify-between border-b border-dark/10 py-4"
                >
                  <span className="text-sm font-medium transition group-hover:text-brand">
                    {label}
                  </span>
                  <span
                    className="text-ink transition group-hover:translate-x-1 group-hover:text-brand"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-2 md:flex">
        <a className="group inline-flex cursor-pointer items-center gap-2 bg-dark px-4 py-3 text-xs font-semibold text-canvas shadow-lg transition hover:bg-brand hover:text-dark">
          Talk to a Marketing Expert
        </a>
        <a
          href="#newsletter"
          className="inline-flex items-center gap-2 bg-brand px-4 py-3 text-xs font-semibold text-dark shadow-lg transition hover:bg-dark hover:text-canvas"
        >
          Subscribe to Insights
        </a>
      </div>
    </div>
  );
}

function ArticleCard({ a, large = false }: { a: BlogCard; large?: boolean }) {
  const hardcodedPath =
    a.slug === "why-businesses-need-growth-partner-not-marketing-agency"
      ? "/blog/why-businesses-need-growth-partner-not-marketing-agency"
      : null;

  return (
    <Link
      to={hardcodedPath ?? "/blog/$slug"}
      {...(hardcodedPath ? {} : { params: { slug: a.slug } })}
      className="group block cursor-pointer"
    >
      <article>
        <div className={`relative mb-5 overflow-hidden bg-muted ${large ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
          <img
            src={a.image}
            alt={a.title}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-ink">
          <span className="font-semibold text-brand">{a.category}</span>
          <span className="opacity-30">/</span>
          <span>{a.date}</span>
          {a.read ? (
            <>
              <span className="opacity-30">/</span>
              <span>{a.read}</span>
            </>
          ) : null}
        </div>
        <h3 className="font-serif text-xl leading-snug tracking-tight transition group-hover:text-brand md:text-2xl">
          {a.title}
        </h3>
        {a.excerpt ? (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink">
            {a.excerpt}
          </p>
        ) : null}
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-dark transition group-hover:text-brand">
          Read More <span aria-hidden="true" className="transition group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </article>
    </Link>
  );
}
