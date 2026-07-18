import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Linkedin, Twitter, Facebook, Link as LinkIcon } from "lucide-react";
import { getBlogEntryBySlug, getFeaturedImage, getPrimaryCategory, getReadTime, stripHtml } from "@/lib/wp";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params: { slug } }) => {
    const post = await getBlogEntryBySlug(slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [] };
    
    const plainExcerpt = stripHtml(post.excerpt.rendered);
    const imageUrl = getFeaturedImage(post);
    const plainTitle = stripHtml(post.title.rendered);

    return {
      meta: [
        { title: `${plainTitle} | Ace360degree Blog` },
        { name: "description", content: plainExcerpt },
        { property: "og:title", content: plainTitle },
        { property: "og:description", content: plainExcerpt },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "og:type", content: "article" },
        ...(imageUrl ? [{ property: "og:image", content: imageUrl }] : [])
      ]
    };
  },
  component: DynamicBlogPost
});

function DynamicBlogPost() {
  const { post } = Route.useLoaderData();
  const [progress, setProgress] = useState(0);

  const publishDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryName = getPrimaryCategory(post);
  const heroImage = getFeaturedImage(post);
  const readTime = getReadTime(post);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const share = (network: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = post.title.rendered;
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
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/40">
        <div
          className="h-full bg-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/40 to-background">
        <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
              {categoryName}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> {readTime}
            </span>
            <span className="text-xs text-muted-foreground">{publishDate}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          
          {post.excerpt.rendered && (
            <div className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          )}

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-semibold">
                AS
              </div>
              <div>
                <div className="font-semibold">Ace360degree Team</div>
                <div className="text-xs text-muted-foreground">
                  Insights & Strategy
                </div>
              </div>
            </div>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Book Discovery Call <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container mx-auto px-6 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px] gap-12 max-w-4xl mx-auto">
          {/* Article */}
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
            {heroImage && (
              <img src={heroImage} alt={post.title.rendered} className="w-full h-auto object-cover rounded-2xl mb-10 aspect-video" />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </article>

          {/* Share rail */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col items-center gap-3">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground rotate-180 [writing-mode:vertical-rl] mb-2">
                Share
              </div>
              {[
                { icon: <Linkedin className="h-4 w-4" />, key: "linkedin" },
                { icon: <Twitter className="h-4 w-4" />, key: "twitter" },
                { icon: <Facebook className="h-4 w-4" />, key: "facebook" },
                { icon: <LinkIcon className="h-4 w-4" />, key: "copy" },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => share(s.key)}
                  aria-label={`Share on ${s.key}`}
                  className="h-10 w-10 grid place-items-center rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="container mx-auto px-6 py-24 max-w-4xl text-center relative">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
            Looking For A Growth Partner?
          </h2>
          <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your business challenges and build a roadmap for
            sustainable growth.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Book Discovery Call <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
