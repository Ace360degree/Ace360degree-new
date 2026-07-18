import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Linkedin, Twitter, Facebook, Link as LinkIcon, PhoneCall, ChevronRight, User, Calendar } from "lucide-react";
import { getBlogEntryBySlug, getFeaturedImage, getPrimaryCategory, getReadTime, stripHtml } from "@/lib/wp";
import { BlogFAQ } from "@/components/blog-faq";

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
  const [active, setActive] = useState("");

  const publishDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryName = getPrimaryCategory(post);
  const heroImage = getFeaturedImage(post);
  const readTime = getReadTime(post);

  const { htmlWithIds, toc, dynamicFaqs } = useMemo(() => {
    let html = post.content.rendered;
    const extractedToc: { id: string; label: string }[] = [];
    const parsedFaqs: { question: string; answerHtml: string }[] = [];
    
    // 1. Extract FAQ section dynamically
    const faqSplitRegex = /<(h[234])[^>]*>.*?FAQ.*?<\/\1>/i;
    const splitMatch = html.match(faqSplitRegex);
    
    if (splitMatch && splitMatch.index !== undefined) {
      const faqStartIndex = splitMatch.index;
      const faqSectionHtml = html.substring(faqStartIndex);
      html = html.substring(0, faqStartIndex); // Remove from main article
      
      const faqContent = faqSectionHtml.replace(faqSplitRegex, '');
      
      const tokenRegex = /(?:>|\b|;|\s|^)(Q|A)\d*\s*[:.]/gi;
      const matches = [...faqContent.matchAll(tokenRegex)];
      
      if (matches.length > 0) {
        for (let m = 0; m < matches.length; m++) {
           const type = matches[m][1].toUpperCase();
           if (type === 'Q') {
              const startQ = matches[m].index + matches[m][0].length;
              let endQ = faqContent.length;
              if (m + 1 < matches.length) endQ = matches[m+1].index;
              
              let qText = faqContent.substring(startQ, endQ).replace(/<[^>]*$/g, '').replace(/<[^>]+>/g, '').trim();
              
              if (m + 1 < matches.length && matches[m+1][1].toUpperCase() === 'A') {
                 const startA = matches[m+1].index + matches[m+1][0].length;
                 let endA = faqContent.length;
                 if (m + 2 < matches.length) endA = matches[m+2].index;
                 const aHtml = faqContent.substring(startA, endA).trim();
                 if (qText && aHtml) {
                    parsedFaqs.push({ question: qText, answerHtml: aHtml });
                 }
              }
           }
        }
      }
    }

    // 2. Add IDs to headings and build TOC
    let counter = 0;
    const finalHtml = html.replace(/<(h[234])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
      const plainText = stripHtml(content).trim();
      if (!plainText) return match;
      counter++;
      const id = `section-${counter}`;
      extractedToc.push({ id, label: plainText });
      return `<${tag} id="${id}"${attrs}>${content}</${tag}>`;
    });

    return { htmlWithIds: finalHtml, toc: extractedToc, dynamicFaqs: parsedFaqs };
  }, [post.content.rendered]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      // TOC active state
      let current = "";
      for (const t of toc) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < 150) {
          current = t.id;
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
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="container mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 max-w-5xl text-center relative z-10">
          <nav className="flex flex-wrap items-center justify-center gap-2 mb-8 text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blogs</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{categoryName}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="truncate max-w-[200px] md:max-w-[500px]" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </nav>

          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-foreground mb-10 mx-auto max-w-5xl" 
            dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
          />

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span>Altaf Shaikh</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container mx-auto px-6 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20 mx-auto">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 pb-12">
              
              {/* TOC */}
              {toc.length > 0 && (
                <div className="mb-12">
                  <div className="text-xs font-normal uppercase tracking-wider text-muted-foreground mb-4">
                    On this page
                  </div>
                  <nav className="space-y-2 border-l border-border max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
                    {toc.map((t) => (
                      <a
                        key={t.id}
                        href={`#${t.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(t.id);
                          if (el) {
                            const top = el.getBoundingClientRect().top + window.scrollY - 120;
                            window.scrollTo({ top, behavior: 'smooth' });
                          }
                          window.history.pushState(null, '', `#${t.id}`);
                        }}
                        className={`block pl-4 -ml-px border-l-2 text-sm transition-colors py-1 ${
                          active === t.id
                            ? "border-primary text-foreground font-normal"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t.label}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Form Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm mb-12">
                <div className="flex items-center gap-2 text-xs font-normal uppercase tracking-wider text-primary mb-3">
                  <PhoneCall className="h-3.5 w-3.5" />
                  Get a call back
                </div>
                <h3 className="font-serif font-normal text-xl tracking-tight mb-6">
                  Speak with a growth strategist.
                </h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                  <Button className="w-full gap-2 mt-2 font-normal">
                    Request Call Back <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
                <p className="text-[10px] text-muted-foreground mt-4 text-center leading-relaxed">
                  No spam. Confidential. We reply within one business day.
                </p>
              </div>

              {/* Share */}
              <div>
                <div className="text-xs font-normal uppercase tracking-wider text-muted-foreground mb-4">
                  Share
                </div>
                <div className="flex items-center gap-3">
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
              </div>
            </div>
          </aside>

          {/* Article */}
          <style>{`
            .prose-article {
              counter-reset: wp-section;
            }
            .prose-article h2,
            .prose-article h3,
            .prose-article h4 {
              counter-increment: wp-section;
              margin-top: 4rem !important;
              margin-bottom: 1.5rem !important;
              font-size: 1.875rem !important;
              line-height: 2.25rem !important;
              letter-spacing: -0.025em !important;
              font-family: "Instrument Serif", serif !important;
              font-weight: 400 !important;
              scroll-margin-top: 120px !important;
            }
            @media (min-width: 768px) {
              .prose-article h2,
              .prose-article h3,
              .prose-article h4 {
                font-size: 2.25rem !important;
                line-height: 2.5rem !important;
              }
            }
            .prose-article .first-heading {
              margin-top: 0 !important;
            }
            .prose-article h2::before,
            .prose-article h3::before,
            .prose-article h4::before {
              content: "SECTION " counter(wp-section, decimal-leading-zero);
              display: block;
              font-size: 0.75rem !important;
              line-height: 1rem !important;
              font-weight: 400 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.05em !important;
              color: var(--primary) !important;
              margin-bottom: 0.75rem !important;
              font-family: ui-sans-serif, system-ui, sans-serif !important;
            }
            .prose-article blockquote {
              margin-top: 2.5rem !important;
              margin-bottom: 2.5rem !important;
              border-radius: 1rem;
              border-left-width: 4px;
              border-color: hsl(var(--primary));
              background-color: hsl(var(--primary) / 0.05);
              padding: 1.5rem 2rem !important;
              font-family: "Instrument Serif", serif !important;
              font-size: 1.25rem !important;
              line-height: 1.375 !important;
              color: hsl(var(--foreground)) !important;
              font-style: normal !important;
              font-weight: 400 !important;
            }
            @media (min-width: 768px) {
              .prose-article blockquote {
                font-size: 1.5rem !important;
                padding: 2rem !important;
              }
            }
            .prose-article blockquote p {
              margin: 0 !important;
            }
            .prose-article blockquote::before, .prose-article blockquote::after {
              display: none !important;
            }
          `}</style>
          <article className="prose-article prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-headings:scroll-mt-24 prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
            {heroImage && (
              <img src={heroImage} alt={stripHtml(post.title.rendered)} className="w-full h-auto object-cover rounded-2xl mb-10 aspect-video" />
            )}
            <div dangerouslySetInnerHTML={{ __html: htmlWithIds }} />
            <BlogFAQ faqs={dynamicFaqs.length > 0 ? dynamicFaqs : undefined} />
          </article>
        </div>
      </section>

      {/* Author */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
            <div className="h-24 w-24 rounded-full bg-primary/10 text-primary grid place-items-center font-serif text-3xl">
              AS
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Written by
              </div>
              <div className="font-serif text-2xl mt-1">Altaf Shaikh</div>
              <div className="text-sm text-muted-foreground">
                Founder & CEO, Ace360degree
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Altaf Shaikh is the Founder & CEO of Ace360degree, helping
                businesses grow through integrated strategies across Growth
                Marketing, Branding, Technology and AI Transformation.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 w-full">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Button>
              </a>
              <Link to="/contact">
                <Button className="gap-2 w-full">Book Discovery Call</Button>
              </Link>
            </div>
          </div>
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
