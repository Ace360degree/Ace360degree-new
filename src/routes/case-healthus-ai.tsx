import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/case-healthus.123.jpg";

export const Route = createFileRoute("/case-healthus-ai")({
  head: () => ({
    meta: [
      { title: "Healthus.ai Case Study | Healthcare Growth — Ace360degree" },
      {
        name: "description",
        content:
          "How Ace360degree supported Healthus.ai with healthcare growth strategy, digital marketing and patient acquisition systems.",
      },
      { property: "og:title", content: "Healthus.ai Healthcare Growth Case Study" },
      {
        property: "og:description",
        content:
          "A healthcare growth story focused on trust, patient acquisition and digital visibility.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HealthusCaseStudyPage,
});

const highlights = [
  "Healthcare growth strategy",
  "Patient acquisition planning",
  "Digital visibility and trust building",
  "Performance-led marketing direction",
];

const outcomes = [
  "Clearer healthcare positioning",
  "Improved digital communication foundation",
  "More focused patient acquisition journey",
  "Scalable growth marketing roadmap",
];

function HealthusCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60 bg-foreground/[0.02]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-primary">
              Success Story / HealthTech
            </div>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Building a focused healthcare growth foundation for Healthus.ai.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A strategic healthcare marketing engagement designed to strengthen digital trust,
              improve patient acquisition clarity and support long-term HealthTech growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/industries/healthcare"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
              >
                Healthcare Solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-2xl border border-foreground/15 bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.18)]"
              >
                View Portfolio <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroImg}
              alt="Healthus.ai healthcare growth case study"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:py-24">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-primary">
            Engagement Focus
          </div>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
            Healthcare growth built around trust and discoverability.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            HealthTech brands need more than campaigns. They need credible positioning, clear
            patient journeys and measurable systems that help people discover and trust the
            healthcare experience.
          </p>
        </div>
        <div className="grid gap-4">
          {highlights.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl border border-border/60 bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30">
        <div className="container mx-auto px-6 py-20">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">Outcomes</div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item} className="rounded-xl border border-border/60 bg-background p-5">
                <div className="font-medium leading-snug">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
            Ready to build a healthcare growth system?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_18px_35px_-18px_rgba(0,0,0,0.28)]"
          >
            Book Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
