import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Link as LinkIcon,
  Quote,
} from "lucide-react";
import { formatWpDate, getFeaturedImage, getPageBySlug, stripHtml } from "@/lib/wp";

type TocItem = {
  id: string;
  label: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getReadTimeFromHtml(html: string) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function buildArticleContent(html: string) {
  const toc: TocItem[] = [];
  let headingIndex = 0;

  const contentHtml = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (_match, attrs: string, inner: string) => {
      const label = stripHtml(inner);
      if (!label) {
        return `<h2${attrs}>${inner}</h2>`;
      }

      const id = `section-${slugify(label)}-${headingIndex++}`;
      toc.push({ id, label });
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    },
  );

  return { contentHtml, toc };
}

export const Route = createFileRoute("/content/$slug")({
  loader: async ({ params: { slug } }) => {
    const page = await getPageBySlug(slug);
    if (!page) {
      throw notFound();
    }

    const { contentHtml, toc } = buildArticleContent(page.content.rendered);

    return {
      page,
      toc,
      contentHtml,
      publishDate: formatWpDate(page.date),
      readTime: getReadTimeFromHtml(page.content.rendered),
      imageUrl: getFeaturedImage(page),
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
        { property: "og:url", content: `/content/${page.slug}` },
        { property: "og:type", content: "article" },
        ...(imageUrl ? [{ property: "og:image", content: imageUrl }] : []),
      ],
      links: [{ rel: "canonical", href: `/content/${page.slug}` }],
    };
  },
  component: ContentPage,
});

function ContentPage() {
  const { page, toc, contentHtml, publishDate, readTime } = Route.useLoaderData();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      let current = toc[0]?.id ?? "";
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top < 160) {
          current = item.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  const share = (network: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = stripHtml(page.title.rendered);
    const links: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (network === "copy") {
      navigator.clipboard?.writeText(url);
      return;
    }

    window.open(links[network], "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/40">
        <div
          className="h-full bg-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/40 to-background">
        <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="container mx-auto max-w-5xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              WordPress Page
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> {readTime}
            </span>
            <span className="text-xs text-muted-foreground">{publishDate}</span>
          </div>

          <h1
            className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />

          {page.excerpt.rendered ? (
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {stripHtml(page.excerpt.rendered)}
            </p>
          ) : null}

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                WP
              </div>
              <div>
                <div className="font-semibold">Ace360degree</div>
                <div className="text-xs text-muted-foreground">
                  WordPress content template
                </div>
              </div>
            </div>
            <Link to="/blog">
              <Button size="lg" className="gap-2">
                Back to Blog <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr_60px]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                On this page
              </div>
              <nav className="space-y-2 border-l border-border">
                {toc.length > 0 ? (
                  toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block -ml-px border-l-2 py-1 pl-4 text-sm transition-colors ${
                        active === item.id
                          ? "border-primary font-medium text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))
                ) : (
                  <div className="border-l border-border pl-4 text-sm text-muted-foreground">
                    This page has no headings yet.
                  </div>
                )}
              </nav>
            </div>
          </aside>

          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-foreground prose-img:rounded-2xl prose-img:shadow-sm">
            <div
              className="rounded-3xl border border-border bg-card p-6 md:p-10"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col items-center gap-3">
              <div className="mb-2 rotate-180 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground [writing-mode:vertical-rl]">
                Share
              </div>
              {[
                { icon: <Linkedin className="h-4 w-4" />, key: "linkedin" },
                { icon: <Twitter className="h-4 w-4" />, key: "twitter" },
                { icon: <Facebook className="h-4 w-4" />, key: "facebook" },
                { icon: <LinkIcon className="h-4 w-4" />, key: "copy" },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => share(item.key)}
                  aria-label={`Share on ${item.key}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto max-w-5xl px-6 py-16">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-primary/10 font-serif text-3xl text-primary">
              WP
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Written for WordPress
              </div>
              <div className="mt-1 font-serif text-2xl">
                Ace360degree Content Team
              </div>
              <div className="text-sm text-muted-foreground">
                Published on WordPress and rendered in the article template
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                This page is managed in WordPress, but it now uses the same
                editorial layout as the hardcoded blog article so the inner
                experience stays consistent.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/contact">
                <Button className="gap-2 w-full">
                  Book Discovery Call <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="w-full">
                  View Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="container relative mx-auto max-w-4xl px-6 py-24 text-center">
          <Quote className="mx-auto mb-4 h-8 w-8 text-primary" />
          <blockquote className="font-serif text-3xl leading-[1.15] tracking-tight text-balance md:text-5xl">
            "Marketing without creativity is noise. Technology without empathy
            is cold."
            <span className="mt-4 block text-primary italic">
              The real magic happens when they meet.
            </span>
          </blockquote>
          <div className="mt-10 text-sm uppercase tracking-[0.22em] text-background/70">
            Ace360degree
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
