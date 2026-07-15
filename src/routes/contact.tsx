import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import contactHero from "@/assets/contact-hero.a1.jpg";
import whatappIcon from "@/assets/whatappiconcontant.png";
import mailIcon from "@/assets/mailiconcontant.png";
import handIcon from "@/assets/handiconcontant.png";
import starIcon from "@/assets/stariconcontant.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Ace360degree | Get in Touch with Mumbai's Leading Digital Agency",
      },
      {
        name: "description",
        content:
          "Get in touch with Ace360degree — India's full-service digital marketing and technology agency. We respond within 24 hours.",
      },
      {
        property: "og:title",
        content: "Contact Ace360degree",
      },
      {
        property: "og:description",
        content:
          "Let's talk about your next big idea — branding, digital marketing, web, AI automation.",
      },
      {
        property: "og:image",
        content: contactHero,
      },
    ],
  }),
  component: ContactPage,
});

const services = [
  "Digital Marketing",
  "Branding & Design",
  "Website / App Development",
  "Automation & AI Tools",
  "Other",
];

const quickActions = [
  {
    label: "WhatsApp",
    value: "+91 98201 65488",
    href: "https://wa.me/919820165488",
    icon: whatappIcon,
  },
  {
    label: "Business Enquiries",
    value: "sales@a360pl.com",
    href: "mailto:sales@a360pl.com",
    icon: mailIcon,
  },
  {
    label: "Partnerships",
    value: "connect@ace360degree.com",
    href: "mailto:connect@ace360degree.com",
    icon: handIcon,
  },
  {
    label: "Careers",
    value: "careers@ace360degree.com",
    href: "mailto:careers@ace360degree.com",
    icon: starIcon,
  },
];

const globalPresence = [
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇦🇪", name: "UAE" },
];

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: FieldProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const isActive = focused || value.length > 0;
  const fieldId = `contact-${name}`;

  return (
    <div className="relative">
      <label
        htmlFor={fieldId}
        className={`pointer-events-none absolute left-0 transition-all duration-200 ${
          isActive
            ? "top-0 text-[11px] tracking-wide uppercase text-dark/60"
            : "top-4 text-base text-dark/55"
        }`}
      >
        {label}

        {required && (
          <span className="text-dark" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          required={required}
          value={value}
          rows={4}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full resize-none border-b border-dark/25 bg-transparent pb-2 pt-5 text-dark outline-none transition-colors focus:border-dark"
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full border-b border-dark/25 bg-transparent pb-2 pt-5 text-dark outline-none transition-colors focus:border-dark"
        />
      )}
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-dark">
      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-10">
          <nav
            className="text-xs tracking-wide text-dark/50"
            aria-label="Breadcrumb"
          >
            <a href="/" className="hover:text-brand">
              Home
            </a>

            <span className="mx-1" aria-hidden="true">
              /
            </span>

            <span className="text-dark">Contact</span>
          </nav>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
              Contact Ace360degree
            </span>

            <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Let's talk about your{" "}
              <em className="not-italic text-brand">next big idea.</em>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-dark/70">
              Whether you're looking to grow your brand, build a website, or
              automate your business — we'd love to hear from you. Our team will
              get back within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-dark px-5 py-3 text-sm font-semibold text-canvas transition hover:bg-dark/90"
              >
                Schedule a Call
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#form"
                className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold transition hover:border-dark"
              >
                Send a Message
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="https://wa.me/919820165488"
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full bg-brand text-dark transition hover:brightness-95"
                aria-label="Contact Ace360degree on WhatsApp"
              >
                <span aria-hidden="true">💬</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={contactHero}
                alt="Ace360degree team in conversation"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/60">
                  Where conversations begin
                </p>

                <p className="mt-1 font-serif text-xl">Mumbai · India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT AND FORM */}
      <section id="form" className="bg-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-dark/55">
              Reach us directly
            </span>

            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Prefer talking first?
            </h2>

            <p className="mt-4 text-dark/70">
              We're just a call, email, or WhatsApp away. No bots, no queues —
              real humans, real fast.
            </p>

            <div className="mt-10 border-t border-dark/10">
              <div className="border-b border-dark/10 py-6">
                <p className="text-xs uppercase tracking-[0.25em] text-dark/55">
                  Head Office · India
                </p>

                <p className="mt-2 font-medium">
                  Office No. 12, Evershine Mall
                </p>

                <p className="text-dark/70">
                  New Link Road, Malad West, Mumbai – 400064
                </p>
              </div>

              <div className="flex justify-between border-b border-dark/10 py-6">
                <span className="text-dark/60">Phone</span>

                <a
                  href="tel:+919820165488"
                  className="font-medium hover:text-brand"
                >
                  +91 98201 65488
                </a>
              </div>

              <div className="flex justify-between border-b border-dark/10 py-6">
                <span className="text-dark/60">Email</span>

                <a
                  href="mailto:info@ace360degree.com"
                  className="font-medium hover:text-brand"
                >
                  info@ace360degree.com
                </a>
              </div>

              <div className="flex justify-between py-6">
                <span className="text-dark/60">Hours</span>

                <span className="font-medium">
                  Mon – Sat · 10:00 – 19:00 IST
                </span>
              </div>
            </div>

            {/* GLOBAL PRESENCE */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-dark/55">
                Global Presence
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {globalPresence.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 border border-dark/15 bg-canvas px-3 py-1.5 text-sm"
                  >
                    <span aria-hidden="true">{item.flag}</span>
                    {item.name}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm italic text-dark/60">
                Expanding globally — because great ideas know no borders.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-brand p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] md:p-12">
              <h3 className="font-serif text-4xl leading-[1.05] text-dark md:text-5xl">
                Got Ideas?
                <br />
                We've got the skills.
              </h3>

              <p className="mt-4 max-w-md text-dark/80">
                Tell us a little about your project and we'll connect you with
                the right team.
              </p>

              {submitted ? (
                <div
                  className="mt-10 rounded-lg bg-canvas p-8"
                  role="status"
                  aria-live="polite"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                    Received
                  </p>

                  <p className="mt-3 font-serif text-2xl">
                    Thank you for reaching out.
                  </p>

                  <p className="mt-2 text-dark/70">
                    Our team will connect within 24 hours. In the meantime,
                    explore our recent{" "}
                    <a href="/portfolio" className="underline">
                      case studies
                    </a>{" "}
                    or{" "}
                    <a href="/services" className="underline">
                      services
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  className="mt-10 space-y-7"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-7 md:grid-cols-2">
                    <Field label="Name" name="name" required />

                    <Field label="Company Name" name="company" />

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />

                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      required
                    />
                  </div>

                  {/* SERVICE SELECT */}
                  <div className="relative">
                    <label
                      htmlFor="service-interest"
                      className="mb-2 block text-[11px] uppercase tracking-wide text-dark/70"
                    >
                      Service Interest
                      <span aria-hidden="true">*</span>
                    </label>

                    <select
                      id="service-interest"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full border-b border-dark/30 bg-transparent py-3 text-dark outline-none focus:border-dark"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Field
                    label="Message / Project Brief"
                    name="message"
                    required
                    textarea
                  />

                  {/* FILE UPLOAD */}
                  <div>
                    <label
                      htmlFor="project-file"
                      className="mb-2 block text-[11px] uppercase tracking-wide text-dark/70"
                    >
                      Upload File (Optional)
                    </label>

                    <input
                      id="project-file"
                      name="projectFile"
                      type="file"
                      className="block w-full text-sm text-dark/80 file:mr-4 file:cursor-pointer file:border-0 file:bg-dark file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-wider file:text-canvas hover:file:bg-dark/90"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-dark px-6 py-3.5 text-sm font-semibold text-canvas transition hover:bg-dark/90"
                  >
                    Send Inquiry

                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>

                  <p className="text-xs text-dark/70">
                    We respect your time — and your inbox. No spam. Just
                    solutions that work.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT OPTIONS */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
                Quick Actions
              </span>

              <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                Pick the channel that fits you best.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={
                  action.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  action.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group block border border-dark/10 bg-light p-6 transition-all duration-300 hover:bg-yellow-500 hover:text-canvas"
              >
                <span className="grid size-12 place-items-center rounded-full bg-canvas/90 p-2 shadow-sm transition-colors group-hover:bg-white">
                  <img
                    src={action.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </span>

                <p className="mt-6 text-xs uppercase tracking-[0.25em] opacity-70">
                  {action.label}
                </p>

                <p className="mt-1 break-all font-medium">
                  {action.value}
                </p>

                <p className="mt-6 flex items-center gap-1 text-xs uppercase tracking-[0.2em]">
                  Connect

                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 pt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
                Visit Us
              </span>

              <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                Find us in the heart of Mumbai.
              </h2>

              <p className="mt-2 italic text-dark/60">
                Where creativity meets caffeine ☕
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Evershine+Mall+Malad+West+Mumbai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-dark/20 px-5 py-3 text-sm font-semibold transition hover:border-dark"
            >
              Get Directions
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-10 h-[460px] w-full">
          <iframe
            title="Ace360degree office map"
            src="https://www.google.com/maps?q=Evershine+Mall,+Malad+West,+Mumbai&output=embed"
            className="h-full w-full border-0 grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-dark text-canvas">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
            Let's Build
          </span>

          <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Ready to start something{" "}
            <em className="not-italic text-brand">awesome?</em>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-canvas/70">
            Book a discovery call today and let's discuss how Ace360degree can
            help you grow through strategy, creativity, and technology.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-brand px-6 py-3.5 text-sm font-semibold text-dark transition hover:brightness-95"
            >
              Schedule a Call
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#form"
              className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-sm font-semibold transition hover:border-canvas"
            >
              Send Your Brief
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
            Stay Connected
          </span>

          <h3 className="mt-3 font-serif text-3xl md:text-4xl">
            Let's stay in touch.
          </h3>

          <p className="mt-3 text-dark/70">
            Follow us for ideas, case studies, and behind-the-scenes moments
            from the Ace360degree team.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["LinkedIn", "Instagram", "YouTube", "Facebook", "X"].map(
              (social) => (
                <a
                  key={social}
                  href="#"
                  className="border border-dark/15 px-5 py-2.5 text-sm transition hover:bg-dark hover:text-canvas"
                >
                  {social}
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* STICKY UTILITY BAR */}
      <div className="fixed bottom-4 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-dark px-2 py-2 text-canvas shadow-2xl backdrop-blur md:flex">
        <a
          href="tel:+919820165488"
          className="px-4 py-2 text-xs uppercase tracking-wider hover:text-brand"
        >
          <span aria-hidden="true">📞</span> Call
        </a>

        <span
          className="h-4 w-px bg-canvas/20"
          aria-hidden="true"
        />

        <a
          href="https://wa.me/919820165488"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs uppercase tracking-wider hover:text-brand"
        >
          <span aria-hidden="true">💬</span> WhatsApp
        </a>

        <span
          className="h-4 w-px bg-canvas/20"
          aria-hidden="true"
        />

        <a
          href="mailto:info@ace360degree.com"
          className="px-4 py-2 text-xs uppercase tracking-wider hover:text-brand"
        >
          <span aria-hidden="true">✉</span> Email
        </a>
      </div>
    </div>
  );
}
