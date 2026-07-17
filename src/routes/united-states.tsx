import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/united-states")({
  component: UnitedStatesPage,
  head: () => ({
    meta: [
      { title: "United States - Ace360degree" },
      {
        name: "description",
        content:
          "United States hub page for Ace360degree with city and service links.",
      },
      { property: "og:title", content: "United States - Ace360degree" },
      {
        property: "og:description",
        content: "Yellow-themed United States landing page for Ace360degree.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/united-states" },
    ],
    links: [{ rel: "canonical", href: "/united-states" }],
  }),
});

const serviceLinks = [
  "Medical SEO in United States",
  "Doctor SEO in United States",
  "Healthcare SEO in United States",
  "Clinic SEO in United States",
  "Medical Clinic SEO in United States",
  "Clinic Marketing in United States",
  "SEO for Clinic in United States",
  "Cardiologist Marketing in United States",
  "Cardiologist SEO in United States",
  "Dermatologist SEO in United States",
  "Dermatologist Marketing in United States",
  "Plastic Surgeon SEO in United States",
  "Plastic Surgeon Marketing in United States",
  "Digital Marketing for Plastic Surgeons in United States",
  "Dentist Marketing in United States",
  "Dentist SEO in United States",
  "Local SEO for Dentists in United States",
  "Dentist SEO Agency in United States",
  "Dentist SEO Company in United States",
  "Orthodontist Marketing in United States",
  "Orthodontist SEO in United States",
  "Digital Marketing for Audiologist in United States",
  "Audiologist SEO in United States",
  "Physician SEO in United States",
  "Physician Marketing in United States",
  "Surgeon SEO in United States",
  "Surgeon Marketing in United States",
  "Ophthalmologist Marketing in United States",
  "Cosmetic Surgeon SEO in United States",
  "Cosmetic Surgeon Marketing in United States",
  "Orthopedic Surgeon Marketing in United States",
];

const cityLinks = [
  "Chicago",
  "Houston",
  "Los Angeles",
  "New York",
  "Washington, D.C.",
];

function UnitedStatesPage() {
  return (
    <main className="min-h-screen bg-[#120f09] text-canvas">
      <SiteHeader />

      <section className="relative overflow-hidden py-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,176,43,0.18)_0%,rgba(255,176,43,0.06)_18%,rgba(18,15,9,0)_58%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-canvas/45">
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>United States</span>
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight md:text-6xl">
              United States
            </h1>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="group rounded-2xl border border-[#3c3118] bg-[#1a150d] px-5 py-4 text-center text-[13px] font-medium leading-snug text-canvas/90 shadow-[0_0_0_1px_rgba(255,176,43,0.04),0_18px_40px_-26px_rgba(0,0,0,0.85)] transition hover:border-brand/55 hover:bg-[#231c10] hover:text-canvas hover:shadow-[0_0_0_1px_rgba(255,176,43,0.1),0_20px_50px_-28px_rgba(255,176,43,0.16)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-2">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand/70">
              Locations
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              City In United States
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityLinks.map((city) => (
              <a
                key={city}
                href="#"
                className="rounded-2xl border border-[#3c3118] bg-[#1a150d] px-5 py-4 text-center text-[13px] font-medium text-canvas/90 transition hover:border-brand/55 hover:bg-[#231c10]"
              >
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
