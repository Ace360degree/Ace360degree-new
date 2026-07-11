import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Building2,
  Compass,
  Palette,
  Code2,
  Rocket,
  Sparkles,
  Layers,
  Search,
  Wrench,
  ShieldCheck,
  TrendingUp,
  Quote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/case-ksa-hero.jpg";
import interiorImg from "@/assets/case-ksa-interior.jpg";
import facadeImg from "@/assets/case-ksa-facade.jpg";
import blueprintImg from "@/assets/case-ksa-blueprint.jpg";
import staircaseImg from "@/assets/case-ksa-staircase.jpg";

export const Route = createFileRoute("/case-kuwal-sanam")({
  head: () => ({
    meta: [
      { title: "Kuwal Sanam Architects Case Study | Premium React Website by Ace360degree" },
      {
        name: "description",
        content:
          "Discover how Ace360degree turned KSA's vision into a world-class architecture website — built on React, Next.js, and Laravel CMS, reflecting the firm's design excellence and philosophy.",
      },
      { property: "og:title", content: "Kuwal Sanam Architects — A Digital Masterpiece" },
      {
        property: "og:description",
        content:
          "A collaboration of vision and precision — where an architect's imagination met Ace360degree's engineering.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: KSACaseStudyPage,
});

const snapshot = [
  { k: "Client", v: "Kuwal Sanam Architects", Icon: Building2 },
  { k: "Industry", v: "Architecture & Design", Icon: Compass },
  { k: "Partnership", v: "2023 – Ongoing", Icon: ShieldCheck },
  { k: "Tech Stack", v: "React · Next.js · Laravel", Icon: Code2 },
];

const services = [
  { t: "Website Design & Development", Icon: Palette },
  { t: "UI/UX Consulting", Icon: Layers },
  { t: "SEO Setup", Icon: Search },
  { t: "Hosting & Maintenance", Icon: Wrench },
];

const results = [
  { t: "Premium Experience", b: "An award-worthy website experience that mirrors KSA's design language.", Icon: Sparkles },
  { t: "Seamless CMS", b: "Effortless content management for projects, images and research work.", Icon: Layers },
  { t: "Organic Visibility", b: "Strong discoverability among architecture and design audiences.", Icon: TrendingUp },
];

const needs = [
  { t: "Visually Stunning, Technically Sound", b: "A website that felt like an extension of KSA's design language.", Icon: Sparkles },
  { t: "Custom CMS", b: "Effortless uploads for projects, images and research work.", Icon: Layers },
  { t: "Architectural User Journey", b: "Minimal, spacious, elegant — order and sophistication in every scroll.", Icon: Compass },
];

const phases = [
  { n: "01", t: "Dream", b: "We immersed ourselves in KSA's design world — understanding their philosophy, visual rhythm and how users should feel while browsing.", Icon: Compass },
  { n: "02", t: "Design", b: "Awwwards-level interactions: precise typography, white space balance and grid-based visual harmony — each section reflecting architectural order.", Icon: Palette },
  { n: "03", t: "Develop", b: "React.js and Next.js for front-end fluidity and performance, paired with Laravel CMS for flexible backend control and internal content management.", Icon: Code2 },
  { n: "04", t: "Deliver", b: "After multiple review cycles and pixel-perfect refinements, we launched one of the most premium architecture websites in India.", Icon: Rocket },
];

const impacts = [
  { t: "Premium Web Presence", b: "A digital experience that reflects KSA's brand essence.", Icon: Sparkles },
  { t: "Elevated Credibility", b: "Strengthened online authority among peers and potential clients.", Icon: ShieldCheck },
  { t: "Trusted Referrals", b: "Kuwal continues to recommend Ace360degree as \"the best company to work with.\"", Icon: TrendingUp },
];

const outcomes = [
  { k: "Tech Stack", v: "React.js · Next.js · Laravel CMS" },
  { k: "User Experience", v: "Awwwards-level premium feel" },
  { k: "Recommendation", v: "Multiple client referrals from KSA" },
  { k: "Client Feedback", v: "Dream. Design. Develop. Deliver — perfectly delivered." },
];

function KSACaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Kuwal Sanam Architects — minimal luxury interior"
            className="h-full w-full object-cover opacity-30"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              <Building2 className="h-3.5 w-3.5" />
              Success Story · Architecture
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              A Masterpiece of Design and Technology for One of India's Most Refined Architecture Firms.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
              A collaboration of vision and precision — where an architect's imagination met{" "}
              <span className="text-foreground font-medium">Ace360degree's</span> engineering to
              create a digital masterpiece.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {snapshot.map(({ k, v, Icon }) => (
                <div key={k} className="rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur">
                  <Icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{k}</div>
                  <div className="mt-1 text-sm font-medium">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE STRIP */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          <img src={interiorImg} alt="Luxury interior architecture" width={1600} height={1000} loading="lazy" className="w-full h-64 md:h-72 object-cover rounded-2xl border border-border/60" />
          <img src={facadeImg} alt="Modern architectural facade" width={1200} height={1500} loading="lazy" className="w-full h-64 md:h-72 object-cover rounded-2xl border border-border/60" />
          <img src={staircaseImg} alt="Elegant staircase composition" width={1200} height={1500} loading="lazy" className="w-full h-64 md:h-72 object-cover rounded-2xl border border-border/60" />
        </div>
      </section>

      {/* SERVICES + RESULTS */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Services Delivered</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              A full-stack digital experience — designed, built and maintained.
            </h2>
            <ul className="mt-8 space-y-3">
              {services.map(({ t, Icon }) => (
                <li key={t} className="flex items-center gap-3 text-sm rounded-lg border border-border/60 bg-card/40 px-4 py-3">
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {results.map(({ t, b, Icon }) => (
              <div key={t} className="rounded-2xl border border-border/60 bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">About the Client</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
                Where refined aesthetics meet timeless design philosophy.
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kuwal Sanam Architects (KSA) is a multidisciplinary architecture and design studio
                  led by <span className="text-foreground font-medium">Ar. Kuwal Sanam</span> and{" "}
                  <span className="text-foreground font-medium">Ar. Neha Sanam</span> — known for their
                  refined aesthetics, attention to detail, and timeless design philosophy.
                </p>
                <p>
                  Their work blends form and function with cultural context, creating spaces that
                  inspire and endure. In 2023, they approached Ace360degree with a clear vision: to
                  build a premium digital experience that reflects their creative excellence and
                  professionalism.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img src={blueprintImg} alt="Architectural blueprint flat lay" width={1200} height={900} loading="lazy" className="w-full rounded-2xl border border-border/60 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">The Challenge</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            This was not just a website — it was a design statement.
          </h2>
          <p className="mt-4 text-muted-foreground">
            As designers themselves, Kuwal and Neha had a deep sense of visual taste and were
            inspired by the curated showcase platform{" "}
            <span className="text-foreground font-medium">Awwwards.com</span>, where the world's
            most creative websites are featured.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {needs.map(({ t, b, Icon }, i) => (
            <div key={t} className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary" />
                <div className="text-xs text-muted-foreground font-mono">0{i + 1}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION — 4D */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Our Solution</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Dream · Design · Develop · Deliver
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ace360degree collaborated closely with the founders to translate their vision into a
              seamless, high-performance digital experience.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map(({ n, t, b, Icon }) => (
              <div key={n} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-semibold text-primary">{n}</div>
                </div>
                <div className="mt-4 text-lg font-semibold">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <figure className="max-w-4xl mx-auto text-center">
          <Quote className="h-10 w-10 text-primary mx-auto mb-6" />
          <blockquote className="text-2xl md:text-4xl font-serif italic leading-snug tracking-tight">
            "Whatever we had dreamt, they created exactly the same — truly a first-class premium
            website."
          </blockquote>
          <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            — Ar. Kuwal Sanam, Founder, KSA
          </figcaption>
        </figure>
      </section>

      {/* IMPACT */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">The Impact</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              A digital masterpiece that keeps compounding value.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {impacts.map(({ t, b, Icon }) => (
              <div key={t} className="rounded-2xl border border-border/60 bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME TABLE */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">At a Glance</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Outcomes That Speak For Themselves
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Feature</th>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((o, i) => (
                <tr key={o.k} className={i % 2 ? "bg-muted/20" : ""}>
                  <td className="px-6 py-4 font-medium">
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {o.k}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{o.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ROAD AHEAD */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">The Road Ahead</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Great design inspires. Great execution delivers.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                KSA's website continues to set benchmarks for visual storytelling and digital design
                excellence in the architecture space. Ace360degree now supports them with ongoing SEO
                and content updates, ensuring their masterpiece reaches the audience it deserves.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img src={facadeImg} alt="Architectural facade detail" width={1200} height={1500} loading="lazy" className="w-full h-80 object-cover rounded-2xl border border-border/60" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-card p-10 md:p-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Your Vision Deserves a Digital Masterpiece.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Let's craft something timeless — where design meets performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition"
              >
                View More Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
