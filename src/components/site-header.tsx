import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/ace360-logo.png";

type NavItem = {
  label: string;
  to?: string;
  groups?: { title?: string; items: { label: string; to: string }[] }[];
};

const NAV: NavItem[] = [
  {
    label: "Services",
    to: "/services",
    groups: [
      {
        title: "Growth Marketing",
        items: [
          { label: "Overview", to: "/growth-marketing" },
          { label: "Performance Marketing", to: "/performance-marketing" },
          { label: "Search Visibility (SEO)", to: "/search-visibility" },
          { label: "Social Media Marketing", to: "/social-media-marketing" },
          { label: "Content Marketing", to: "/content-marketing" },
          { label: "Conversion Optimization", to: "/conversion-optimization" },
          { label: "Marketing Automation", to: "/marketing-automation" },
          { label: "Analytics & Growth Intelligence", to: "/analytics-growth-intelligence" },
          { label: "Influencer & Community", to: "/influencer-advocacy-community-marketing" },
          { label: "Corporate B2B Growth", to: "/corporate-b2b-growth-marketing" },
          { label: "PR & Reputation", to: "/public-relations-reputation-management" },
          { label: "Event Marketing", to: "/event-marketing-brand-experiences" },
          { label: "YouTube Growth", to: "/youtube-growth-channel-strategy" },
          { label: "Podcast Strategy", to: "/podcast-strategy-production" },
        ],
      },
      {
        title: "Branding & Creative",
        items: [
          { label: "Overview", to: "/branding-creative" },
          { label: "Brand Strategy", to: "/brand-strategy" },
          { label: "Logo & Visual Identity", to: "/logo-visual-identity" },
          { label: "Packaging & Product", to: "/packaging-product-branding" },
          { label: "Corporate Communication Design", to: "/corporate-communication-design" },
          { label: "Marketing Communication", to: "/marketing-communication" },
          { label: "Motion Graphics & Animation", to: "/motion-graphics-animation" },
          { label: "Corporate Films & Video", to: "/corporate-films-video-production" },
        ],
      },
      {
        title: "Technology",
        items: [
          { label: "Overview", to: "/technology" },
          { label: "Website Design & Development", to: "/website-design-development" },
          { label: "UI/UX & Product Engineering", to: "/ui-ux-design-product-engineering" },
          { label: "Mobile App Development", to: "/mobile-app-development" },
          { label: "CRM & ERP Solutions", to: "/crm-erp-solutions" },
        ],
      },
      {
        title: "AI Transformation",
        items: [
          { label: "Overview", to: "/ai-transformation" },
          { label: "AI Strategy & Readiness", to: "/ai-strategy-readiness-assessment" },
          { label: "AI Workflow Automation", to: "/ai-workflow-automation" },
          { label: "AI Content Marketing Systems", to: "/ai-content-marketing-systems" },
          { label: "AI Customer Experience", to: "/ai-customer-experience-solutions" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    groups: [
      {
        items: [
          { label: "All Industries", to: "/industries" },
          { label: "Manufacturing", to: "/industries/manufacturing" },
          { label: "Healthcare", to: "/industries/healthcare" },
          { label: "Education", to: "/industries/education" },
          { label: "Fintech", to: "/industries/fintech" },
          { label: "Architecture & Interiors", to: "/industries/architecture" },
        ],
      },
    ],
  },
  {
    label: "Casestudies",
    to: "/portfolio",
    groups: [
      {
        title: "Active Partnerships",
        items: [
          { label: "All Case Studies", to: "/portfolio" },
          { label: "Amigo Academy", to: "/case-amigo-academy" },
          { label: "MOS Utility", to: "/case-mos-utility" },
          { label: "Cosmos Seals India", to: "/case-cosmos-seals" },
          { label: "Rexello Castors", to: "/case-rexello-castors" },
          { label: "Living Concepts", to: "/case-living-concepts" },
        ],
      },
      {
        title: "Enterprise Experience",
        items: [
          { label: "2009–2025 Legacy", to: "/success-stories/enterprise-experience" },
        ],
      },
    ],
  },
  { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || openMenu
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-white border-b border-gray-100"
        }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Ace360degree" className="h-10 w-auto" width={140} height={40} />
        </Link>

        {/* Centered Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => {
            const hasMenu = !!item.groups?.length;
            const isOpen = openMenu === item.label;

            if (!hasMenu) {
              return (
                <a
                  key={item.label}
                  href={item.to}
                  className="px-4 py-2 text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors rounded-md"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a
                  href={item.to}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-normal rounded-md transition-colors ${isOpen ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>

                {isOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                    style={{
                      minWidth: item.groups!.length > 1 ? "min(880px, 90vw)" : "240px",
                    }}
                  >
                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-5">
                      <div
                        className={`grid gap-6 ${item.groups!.length >= 3
                          ? "grid-cols-2 md:grid-cols-4"
                          : item.groups!.length === 2
                            ? "grid-cols-2"
                            : "grid-cols-1"
                          }`}
                      >
                        {item.groups!.map((group, gi) => (
                          <div key={gi}>
                            {group.title && (
                              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                                {group.title}
                              </div>
                            )}
                            <ul className="space-y-1">
                              {group.items.map((sub) => (
                                <li key={sub.to}>
                                  <a
                                    href={sub.to}
                                    className="block text-sm text-gray-500 hover:text-gray-900 transition-colors py-1"
                                  >
                                    {sub.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/#cta"
            className="hidden sm:inline-flex items-center bg-[#FFB330] hover:bg-[#E09010] text-[#181818] text-sm font-semibold px-5 py-2.5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Book a Strategy Call
          </a>

          <button
            className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
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
            {NAV.map((item) => (
              <div key={item.label}>
                <a
                  href={item.to}
                  className="block text-sm font-semibold text-gray-800 uppercase tracking-[0.15em]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.groups?.map((group, gi) => (
                  <div key={gi} className="mt-3 pl-3 border-l-2 border-gray-100">
                    {group.title && (
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                        {group.title}
                      </div>
                    )}
                    <ul className="space-y-1.5">
                      {group.items.map((sub) => (
                        <li key={sub.to}>
                          <a
                            href={sub.to}
                            className="block text-sm text-gray-500 hover:text-gray-800 py-0.5 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <a
              href="/#cta"
              className="flex w-full justify-center items-center bg-[#FFB330] hover:bg-[#E09010] text-[#181818] text-sm font-semibold px-5 py-3 rounded-2xl transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
