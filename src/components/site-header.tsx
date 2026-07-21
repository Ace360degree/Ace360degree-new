import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/ace360-logo.png";

type NavItem = {
  label: string;
  to?: string;
  groups?: { title?: string; items: { label: string; to: string }[] }[];
};

const NAV: NavItem[] = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Casestudies", to: "/portfolio" },
  { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const SERVICES = [
  "Website Design & Development",
  "Search Engine Optimization",
  "Performance Marketing",
  "Mobile App Development",
  "CRM & ERP Solutions",
  "Brand Strategy",
  "Logo & Visual Identity",
  "UI / UX & Product Engineering",
  "Content Marketing",
  "Marketing Automation",
  "Conversion Optimization",
  "Social Media Marketing",
  "Marketing Communication",
  "Corporate Communication Design",
  "Packaging & Product Branding",
  "Motion Graphics & Animation",
  "Corporate Films & Video Production",
  "AI & Business Transformation",
  "Other",
];

const SERVICE_LINKS = [
  { label: "Website Design & Development", to: "/website-design-development" },
  { label: "Search Engine Optimization", to: "/search-visibility" },
  { label: "Performance Marketing", to: "/performance-marketing" },
  { label: "Mobile App Development", to: "/mobile-app-development" },
  { label: "CRM & ERP Solutions", to: "/crm-erp-solutions" },
  { label: "Brand Strategy", to: "/brand-strategy" },
  { label: "Logo & Visual Identity", to: "/logo-visual-identity" },
  { label: "UI / UX & Product Engineering", to: "/ui-ux-design-product-engineering" },
  { label: "Content Marketing", to: "/content-marketing" },
  { label: "Marketing Automation", to: "/marketing-automation" },
  { label: "Conversion Optimization", to: "/conversion-optimization" },
  { label: "Social Media Marketing", to: "/social-media-marketing" },
  { label: "Marketing Communication", to: "/marketing-communication" },
  { label: "Corporate Communication Design", to: "/corporate-communication-design" },
  { label: "Packaging & Product Branding", to: "/packaging-product-branding" },
  { label: "Motion Graphics & Animation", to: "/motion-graphics-animation" },
  { label: "Corporate Films & Video Production", to: "/corporate-films-video-production" },
];

const INDUSTRY_LINKS = [
  { label: "Healthcare", to: "/industries/healthcare" },
  { label: "Education", to: "/industries/education" },
  { label: "Manufacturing", to: "/industries/manufacturing" },
  { label: "Fintech & BFSI", to: "/industries/fintech" },
  { label: "Real Estate", to: "/industries/real-estate" },
  { label: "SaaS & Technology", to: "/industries/saas" },
  { label: "Architecture / Interior / Furniture", to: "/industries/architecture" },
  { label: "D2C & Retail Brand", to: "/industries/d2c-retailbrand" },
];

const CASE_STUDY_LINKS = [
  { label: "MOS Utility", to: "/case-mos-utility" },
  { label: "Amigo Academy", to: "/case-amigo-academy" },
  { label: "Rexello Castors", to: "/case-rexello-castors" },
  { label: "Cosmos Seals India", to: "/case-cosmos-seals" },
  { label: "Living Concepts", to: "/case-living-concepts" },
  { label: "Kuwal Sanam Architects", to: "/case-kuwal-sanam" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!strategyOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setStrategyOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [strategyOpen]);

  const openStrategyForm = () => {
    setSubmitted(false);
    setOtpSent(false);
    setStrategyOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileCaseStudiesOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || openMenu
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-gray-100"
          }`}
      >
        <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Ace360degree" className="h-16 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => {
              const hasMenu = !!item.groups?.length;

              if (!hasMenu) {
                return (
                  <a
                    key={item.label}
                    href={item.to}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FFA20B] transition-colors rounded-md"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                >
                  <a
                    href={item.to}
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FFA20B] transition-colors rounded-md"
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              className="hidden sm:inline-flex items-center bg-[#FFB330] hover:bg-[#E09010] text-[#181818] text-sm font-semibold px-5 py-2.5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              onClick={openStrategyForm}
            >
              Book a Strategy Call
            </button>

            <button
              className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              onClick={() => {
                setMobileOpen((v) => !v);
                setMobileServicesOpen(false);
                setMobileIndustriesOpen(false);
                setMobileCaseStudiesOpen(false);
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-lg">
            <div className="px-6 py-6 space-y-5">
              {NAV.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left text-sm font-semibold text-gray-800 uppercase tracking-[0.15em]"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => {
                          setMobileServicesOpen((v) => !v);
                          setMobileIndustriesOpen(false);
                          setMobileCaseStudiesOpen(false);
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            mobileServicesOpen ? "rotate-180 text-[#FFA20B]" : "text-gray-500"
                          }`}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div className="mt-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                          <a
                            href="/services"
                            className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFA20B]"
                            onClick={closeMobileMenu}
                          >
                            View All Services
                          </a>
                          <ul className="grid gap-2">
                            {SERVICE_LINKS.map((service) => (
                              <li key={service.to}>
                                <a
                                  href={service.to}
                                  className="block rounded-xl px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
                                  onClick={closeMobileMenu}
                                >
                                  {service.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Industries") {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left text-sm font-semibold text-gray-800 uppercase tracking-[0.15em]"
                        aria-expanded={mobileIndustriesOpen}
                        onClick={() => {
                          setMobileIndustriesOpen((v) => !v);
                          setMobileServicesOpen(false);
                          setMobileCaseStudiesOpen(false);
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            mobileIndustriesOpen ? "rotate-180 text-[#FFA20B]" : "text-gray-500"
                          }`}
                        />
                      </button>

                      {mobileIndustriesOpen && (
                        <div className="mt-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                          <a
                            href="/industries"
                            className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFA20B]"
                            onClick={closeMobileMenu}
                          >
                            View All Industries
                          </a>
                          <ul className="grid gap-2">
                            {INDUSTRY_LINKS.map((industry) => (
                              <li key={industry.to}>
                                <a
                                  href={industry.to}
                                  className="block rounded-xl px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
                                  onClick={closeMobileMenu}
                                >
                                  {industry.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Casestudies") {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left text-sm font-semibold text-gray-800 uppercase tracking-[0.15em]"
                        aria-expanded={mobileCaseStudiesOpen}
                        onClick={() => {
                          setMobileCaseStudiesOpen((v) => !v);
                          setMobileServicesOpen(false);
                          setMobileIndustriesOpen(false);
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            mobileCaseStudiesOpen ? "rotate-180 text-[#FFA20B]" : "text-gray-500"
                          }`}
                        />
                      </button>

                      {mobileCaseStudiesOpen && (
                        <div className="mt-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                          <a
                            href="/portfolio"
                            className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFA20B]"
                            onClick={closeMobileMenu}
                          >
                            View All Case Studies
                          </a>
                          <ul className="grid gap-2">
                            {CASE_STUDY_LINKS.map((study) => (
                              <li key={study.to}>
                                <a
                                  href={study.to}
                                  className="block rounded-xl px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
                                  onClick={closeMobileMenu}
                                >
                                  {study.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={item.label}>
                    <a
                      href={item.to}
                      className="block text-sm font-semibold text-gray-800 uppercase tracking-[0.15em]"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  </div>
                );
              })}
              <button
                type="button"
                className="flex w-full justify-center items-center bg-[#FFB330] hover:bg-[#E09010] text-[#181818] text-sm font-semibold px-5 py-3 rounded-2xl transition-all duration-200"
                onClick={() => {
                  closeMobileMenu();
                  openStrategyForm();
                }}
              >
                Book a Strategy Call
              </button>
            </div>
          </div>
        )}
      </header>

      {strategyOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="strategy-form-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setStrategyOpen(false);
          }}
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/60 bg-canvas p-6 text-dark shadow-2xl sm:p-9">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#FFB330] via-[#E09010] to-[#FFB330]" />
            <button
              type="button"
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-dark/10 bg-white text-dark/70 shadow-sm transition hover:bg-dark hover:text-white"
              aria-label="Close enquiry form"
              onClick={() => setStrategyOpen(false)}
            >
              <X className="size-5" />
            </button>

            {submitted ? (
              <div className="py-16 pr-12">
                <h2 id="strategy-form-title" className="text-3xl font-bold tracking-tight">
                  Thank you.
                </h2>
                <p className="mt-3 max-w-xl text-lg text-dark/70">
                  Your enquiry has been noted. Our team will connect with you shortly.
                </p>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#FFB330] px-6 py-3 text-sm font-semibold text-[#181818] transition hover:bg-[#E09010]"
                  onClick={() => setStrategyOpen(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                className="pr-0 sm:pr-12"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h2 id="strategy-form-title" className="text-3xl font-bold tracking-tight">
                  Have Any Enquiries?
                </h2>
                <p className="mt-1 text-xl text-dark/70">We are always ready to help you.</p>

                <div className="mt-8 space-y-3">
                  <label className="block text-sm font-medium" htmlFor="strategy-name">
                    Your Name*
                  </label>
                  <input
                    id="strategy-name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-[#181818] shadow-sm outline-none transition focus:border-[#FFB330] focus:ring-2 focus:ring-[#FFB330]/30"
                  />

                  <label className="block text-sm font-medium" htmlFor="strategy-email">
                    Email ID*
                  </label>
                  <div className="flex">
                    <input
                      id="strategy-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      className="min-w-0 flex-1 rounded-l-2xl border border-r-0 border-dark/10 bg-white px-4 py-3 text-[#181818] shadow-sm outline-none transition focus:border-[#FFB330] focus:ring-2 focus:ring-[#FFB330]/30"
                    />
                    <button
                      type="button"
                      className="shrink-0 rounded-r-2xl border border-dark bg-dark px-4 py-3 text-sm font-medium text-white transition hover:bg-[#FFB330] hover:text-[#181818]"
                      onClick={() => setOtpSent(true)}
                    >
                      {otpSent ? "OTP Sent" : "Send OTP"}
                    </button>
                  </div>

                  <label className="block text-sm font-medium" htmlFor="strategy-phone">
                    Phone No.*
                  </label>
                  <input
                    id="strategy-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your Phone"
                    className="w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-[#181818] shadow-sm outline-none transition focus:border-[#FFB330] focus:ring-2 focus:ring-[#FFB330]/30"
                  />

                  <label className="block text-sm font-medium" htmlFor="strategy-service">
                    Select Service*
                  </label>
                  <select
                    id="strategy-service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-[#181818] shadow-sm outline-none transition focus:border-[#FFB330] focus:ring-2 focus:ring-[#FFB330]/30"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <label className="block text-sm font-medium" htmlFor="strategy-message">
                    Send us a Message
                  </label>
                  <textarea
                    id="strategy-message"
                    name="message"
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-2xl border border-dark/10 bg-white px-4 py-3 text-[#181818] shadow-sm outline-none transition focus:border-[#FFB330] focus:ring-2 focus:ring-[#FFB330]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-[#FFB330] px-6 py-3 text-base font-bold text-[#181818] shadow-sm transition hover:bg-[#E09010] hover:shadow-md"
                >
                  Send Enquiry <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
