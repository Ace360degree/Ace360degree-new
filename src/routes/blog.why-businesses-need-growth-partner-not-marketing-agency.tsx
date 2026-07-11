import { createFileRoute, Link } from "@tanstack/react-router";
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
  Eye,
  ShieldCheck,
  Sparkles,
  Cpu,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Quote,
} from "lucide-react";

export const Route = createFileRoute(
  "/blog/why-businesses-need-growth-partner-not-marketing-agency"
)({
  head: () => ({
    meta: [
      {
        title:
          "Why Most Businesses Don't Need Another Marketing Agency. They Need A Growth Partner. | Ace360degree",
      },
      {
        name: "description",
        content:
          "Marketing alone doesn't drive sustainable growth. Discover why founders and CEOs are moving from marketing agencies to integrated growth partners across branding, technology and AI.",
      },
      {
        name: "keywords",
        content:
          "Growth Partner, Business Growth Strategy, Growth Marketing Agency, Business Growth Consultant, Business Transformation, Digital Transformation, AI Business Strategy, Marketing Technology",
      },
      {
        property: "og:title",
        content:
          "Why Most Businesses Don't Need Another Marketing Agency. They Need A Growth Partner.",
      },
      {
        property: "og:description",
        content:
          "A founder's perspective on why integrated growth partners are replacing traditional marketing agencies.",
      },
      {
        property: "og:url",
        content:
          "/blog/why-businesses-need-growth-partner-not-marketing-agency",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: ArticlePage,
});

const TOC = [
  { id: "broken", label: "The Traditional Agency Model Is Broken" },
  { id: "outcomes", label: "Businesses Don't Buy Marketing. They Buy Outcomes." },
  { id: "rise", label: "The Rise Of The Growth Partner" },
  { id: "pillars", label: "The Five Pillars Of Sustainable Growth" },
  { id: "technology", label: "Why Technology Has Become Part Of Marketing" },
  { id: "ai", label: "How AI Is Changing Business Growth" },
  { id: "checklist", label: "What To Look For In A Growth Partner" },
  { id: "future", label: "The Future Belongs To Integrated Growth" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

function ArticlePage() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>(TOC[0].id);
  const publishDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      let current = TOC[0].id;
      for (const t of TOC) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < 160) current = t.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const share = (network: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title =
      "Why Most Businesses Don't Need Another Marketing Agency. They Need A Growth Partner.";
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
              Business Growth
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> 8–10 min read
            </span>
            <span className="text-xs text-muted-foreground">{publishDate}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Why Most Businesses Don't Need Another Marketing Agency. They Need A
            Growth Partner.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Marketing activities alone rarely create sustainable business
            growth. Discover why successful businesses are moving beyond
            traditional agency relationships and partnering with organizations
            that combine growth marketing, branding, technology and AI.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-semibold">
                AS
              </div>
              <div>
                <div className="font-semibold">Altaf Shaikh</div>
                <div className="text-xs text-muted-foreground">
                  Founder & CEO, Ace360degree
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

      {/* Body + TOC */}
      <section className="container mx-auto px-6 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_60px] gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                On this page
              </div>
              <nav className="space-y-2 border-l border-border">
                {TOC.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className={`block pl-4 -ml-px border-l-2 text-sm transition-colors py-1 ${
                      active === t.id
                        ? "border-primary text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-foreground">
            <Section id="broken" eyebrow="01" title="The Traditional Agency Model Is Broken">
              <p>
                Walk into most growing businesses today and you'll find a
                familiar pattern. There's an SEO agency on retainer. A social
                media agency producing posts. A website agency that built the
                last redesign. A branding agency that delivered a logo and a
                deck. Each of them is competent. Each of them is busy. And yet,
                the business owner is still asking the same question every
                quarter: <em>"Why aren't we growing faster?"</em>
              </p>
              <p>
                The traditional agency model was designed for an era when
                marketing was a department, not a system. It rewarded outputs —
                campaigns shipped, posts published, ads launched — and quietly
                disconnected those outputs from the only thing that actually
                matters: business outcomes. The result is a fragmented stack of
                vendors, each optimizing their own metric, none accountable for
                growth.
              </p>
              <p>
                For founders and CEOs, that fragmentation has a cost. It shows
                up as misaligned messaging, duplicated effort, slow
                decision-making, and a brand that feels different depending on
                where you encounter it.
              </p>
            </Section>

            <Callout>
              The problem isn't that agencies are bad at what they do. The
              problem is that what they do is no longer enough.
            </Callout>

            <Section id="outcomes" eyebrow="02" title="Businesses Don't Buy Marketing. They Buy Outcomes.">
              <p>
                When you talk to a founder about marketing, the conversation
                rarely stays on marketing. Within minutes you're discussing
                pipeline, conversion, retention, hiring, product positioning,
                pricing, customer experience. Because that's what they're
                actually buying — outcomes, not activities.
              </p>
              <div className="not-prose my-10 grid md:grid-cols-2 gap-4">
                <ComparePanel
                  tone="muted"
                  title="What businesses are sold"
                  items={[
                    "Posts per month",
                    "Keywords ranked",
                    "Ad impressions",
                    "Followers gained",
                    "Decks and reports",
                  ]}
                />
                <ComparePanel
                  tone="primary"
                  title="What businesses actually want"
                  items={[
                    "More qualified leads",
                    "Stronger visibility & authority",
                    "Trust with the right buyers",
                    "Better customer experience",
                    "Operational efficiency",
                    "Sustainable business growth",
                  ]}
                />
              </div>
            </Section>

            <Section id="rise" eyebrow="03" title="The Rise Of The Growth Partner">
              <p>
                A growth partner is not a bigger agency. It's a different
                operating model. Instead of selling channels, a growth partner
                takes ownership of the business outcome and assembles the
                strategy, brand, technology and AI required to deliver it.
              </p>
              <div className="not-prose my-10 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Marketing Agency
                  </div>
                  <div className="mt-2 font-serif text-2xl">Activities</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {["Campaigns", "Posts", "Ads", "Reports"].map((x) => (
                      <li key={x} className="flex items-center gap-2 text-muted-foreground">
                        <XCircle className="h-4 w-4 shrink-0" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-primary/30 bg-primary/[0.04] p-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Growth Partner
                  </div>
                  <div className="mt-2 font-serif text-2xl">Systems & Outcomes</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {[
                      "Growth Strategy",
                      "Brand Positioning",
                      "Technology",
                      "Automation",
                      "AI",
                      "Business Outcomes",
                    ].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="pillars" eyebrow="04" title="The Five Pillars Of Sustainable Growth">
              <p>
                Sustainable growth doesn't come from one channel performing
                well. It comes from five interconnected pillars working in
                concert.
              </p>
              <div className="not-prose my-10 grid sm:grid-cols-2 gap-4">
                <PillarCard icon={<Eye className="h-5 w-5" />} title="Visibility">
                  Being found by the right audience across search, social,
                  earned media and AI-driven discovery.
                </PillarCard>
                <PillarCard icon={<ShieldCheck className="h-5 w-5" />} title="Trust">
                  Brand authority, credibility signals, thought leadership and
                  reputation that compound over time.
                </PillarCard>
                <PillarCard icon={<Sparkles className="h-5 w-5" />} title="Digital Experience">
                  Website, product, content and customer journeys engineered
                  to convert and retain.
                </PillarCard>
                <PillarCard icon={<Cpu className="h-5 w-5" />} title="Operational Efficiency">
                  CRM, automation and integrated workflows that reduce cost to
                  serve and accelerate sales velocity.
                </PillarCard>
                <PillarCard icon={<TrendingUp className="h-5 w-5" />} title="Innovation">
                  AI capability, new product motions and experimentation
                  embedded into the growth engine.
                </PillarCard>
              </div>
            </Section>

            <Section id="technology" eyebrow="05" title="Why Technology Has Become Part Of Marketing">
              <p>
                Every modern customer journey runs on technology. The question
                is whether your growth function controls that technology or
                fights against it.
              </p>
              <div className="not-prose my-10 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                  The modern customer acquisition journey
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  {["Search", "Website", "Lead Capture", "CRM", "Automation", "Customer"].map(
                    (step, i, arr) => (
                      <div key={step} className="flex items-center gap-3 md:gap-4">
                        <div className="px-4 py-2.5 rounded-lg bg-background border border-border font-medium text-sm shadow-sm">
                          {step}
                        </div>
                        {i < arr.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
              <p>
                If marketing produces leads that the CRM can't nurture, or a
                website that automation can't trigger, growth leaks at every
                seam. Marketing and technology can no longer operate as
                separate disciplines — they are the same discipline, viewed
                from different angles.
              </p>
            </Section>

            <Section id="ai" eyebrow="06" title="How AI Is Changing Business Growth">
              <p>
                AI is not a tool category. It's a new layer running underneath
                every function of the business — and it's changing how growth
                gets created.
              </p>
              <ul>
                <li><strong>Marketing:</strong> personalization, content velocity, SEO/AEO/GEO visibility.</li>
                <li><strong>Customer Experience:</strong> faster response, smarter conversations, 24/7 engagement.</li>
                <li><strong>Operations:</strong> automated workflows, fewer manual handoffs, lower cost-to-serve.</li>
                <li><strong>Decision Making:</strong> data synthesized into insight, not dashboards.</li>
                <li><strong>Productivity:</strong> teams that ship more without scaling headcount linearly.</li>
                <li><strong>Growth:</strong> compounding advantage for businesses that build AI into their systems early.</li>
              </ul>
              <PullQuote>
                The businesses that win with AI won't be those using the most
                tools. They'll be the ones using AI strategically.
              </PullQuote>
            </Section>

            <Section id="checklist" eyebrow="07" title="What To Look For In A Growth Partner">
              <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
                {[
                  ["Business Understanding", "Listens for outcomes before proposing activities."],
                  ["Integrated Capabilities", "Strategy, brand, tech and AI under one roof."],
                  ["Long-Term Thinking", "Builds compounding systems, not quarterly campaigns."],
                  ["Technology Expertise", "Comfortable across web, CRM, automation and data."],
                  ["AI Readiness", "Treats AI as infrastructure, not a buzzword."],
                  ["Outcome Focus", "Measures business impact, not activity volume."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="future" eyebrow="08" title="The Future Belongs To Integrated Growth">
              <p>
                Growth marketing, branding, technology, automation and AI are
                no longer separate budgets. They are interconnected drivers of
                the same business outcome. The companies that will lead the
                next decade are the ones that stop hiring vendors per channel
                and start partnering with organizations capable of orchestrating
                growth across all of them.
              </p>
            </Section>

            <Section id="final-thoughts" eyebrow="09" title="Final Thoughts: Growth Requires More Than Services.">
              <p>The question is no longer:</p>
              <p className="font-serif text-2xl md:text-3xl text-foreground">
                "Which agency should I hire?"
              </p>
              <p>The better question is:</p>
              <p className="font-serif text-2xl md:text-3xl text-primary">
                "Who can help me solve my growth challenges?"
              </p>
              <p>Growth requires strategy, systems and partnership.</p>
            </Section>
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

      {/* About Ace360degree */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            About Ace360degree
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 tracking-tight">
            Helping Businesses Grow Smarter.
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Growth Marketing",
            "Branding & Creative",
            "Specialized Marketing & Communication",
            "Technology & Digital Platforms",
            "AI & Business Transformation",
          ].map((p, i) => (
            <div
              key={p}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <div className="text-xs text-muted-foreground">0{i + 1}</div>
              <div className="mt-2 font-semibold">{p}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services">
            <Button size="lg" className="gap-2">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-20 max-w-6xl">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              Related Articles
            </h2>
            <Link to="/blog" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Why SEO Alone Is Not Enough In 2026",
              "The Future Of AI In Business Growth",
              "How To Build A Growth-Focused Brand",
              "Why CRM Systems Drive Revenue Growth",
              "Marketing Automation For SMBs",
            ].map((t) => (
              <Link
                key={t}
                to="/blog"
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Business Growth
                </div>
                <div className="mt-3 font-serif text-xl leading-snug group-hover:text-primary transition-colors">
                  {t}
                </div>
                <div className="mt-6 text-sm text-muted-foreground inline-flex items-center gap-1">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
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
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                Request Growth Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mt-16 first:mt-0">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary not-prose mb-3">
        Section {eyebrow}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl tracking-tight mt-0">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-10 rounded-2xl border-l-4 border-primary bg-primary/5 p-6 md:p-8">
      <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
        {children}
      </p>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-12 text-center">
      <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
      <blockquote className="font-serif text-2xl md:text-3xl leading-snug max-w-3xl mx-auto tracking-tight">
        {children}
      </blockquote>
      <div className="mt-6 text-sm text-muted-foreground">— Altaf Shaikh</div>
    </div>
  );
}

function ComparePanel({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "muted" | "primary";
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        tone === "primary"
          ? "border-primary/30 bg-primary/[0.04]"
          : "border-border bg-card"
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-wider ${
          tone === "primary" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            {tone === "primary" ? (
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            ) : (
              <XCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            )}
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PillarCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-all">
      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
        {icon}
      </div>
      <div className="mt-4 font-serif text-xl">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {children}
      </p>
    </div>
  );
}
