import { Link } from "@tanstack/react-router";
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
