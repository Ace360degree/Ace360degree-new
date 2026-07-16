import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type PolicyPageProps = {
  title: string;
  summary: string;
  updatedLabel?: string;
  updatedValue?: string;
  sections: PolicySection[];
  calloutTitle?: string;
  calloutText?: string;
};

export function PolicyPage({
  title,
  summary,
  updatedLabel = "Last updated",
  updatedValue = "July 16, 2026",
  sections,
  calloutTitle = "Need a tailored version?",
  calloutText = "Share the final policy copy and we will drop it into this page structure without changing the shared header and footer layout.",
}: PolicyPageProps) {
  return (
    <main className="bg-canvas font-sans text-dark">
      <SiteHeader />

      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-dark/5" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-xs uppercase tracking-[0.22em] text-dark/45">
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Policies</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                Policies
              </span>
              <h1 className="mt-5 max-w-3xl text-5xl font-medium tracking-tight text-balance md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dark/70">
                {summary}
              </p>
        </div>

          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-dark/10 bg-dark/10 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="bg-canvas p-8 md:p-10">
                <h2 className="text-2xl font-medium tracking-tight">{section.title}</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-dark/70">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-dark/70">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-dark px-8 py-10 text-canvas md:px-12 md:py-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
              {calloutTitle}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-canvas/75">
              {calloutText}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
