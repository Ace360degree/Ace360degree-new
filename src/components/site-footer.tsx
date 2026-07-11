export function SiteFooter() {
  return (
    <footer className="bg-dark text-canvas/55 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          <div className="col-span-2 lg:col-span-2">
            <div className="text-canvas font-medium text-xl tracking-tight mb-4">
              ace360<span className="font-serif italic text-brand">degree</span>
            </div>
            <p className="max-w-[34ch] text-sm leading-relaxed mb-6">
              Mumbai-based, globally minded. AI-powered digital marketing, branding and
              technology — engineered for measurable growth.
            </p>
            <div className="flex gap-3">
              {["In", "Ig", "X", "Be"].map((s) => (
                <a
                  key={s}
                  className="size-9 grid place-items-center rounded-full border border-white/10 text-canvas/70 hover:bg-brand hover:text-dark hover:border-brand transition cursor-pointer text-xs font-semibold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-canvas text-[10px] font-semibold uppercase tracking-[0.22em] mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="hover:text-brand cursor-pointer">Digital Marketing</a></li>
              <li><a className="hover:text-brand cursor-pointer">Branding</a></li>
              <li><a className="hover:text-brand cursor-pointer">Technology</a></li>
              <li><a className="hover:text-brand cursor-pointer">SaaS Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-canvas text-[10px] font-semibold uppercase tracking-[0.22em] mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="hover:text-brand cursor-pointer" href="/portfolio">Case Studies</a></li>
              <li><a className="hover:text-brand cursor-pointer" href="/about">About</a></li>
              <li><a className="hover:text-brand cursor-pointer" href="/#blog">Blog</a></li>
              <li><a className="hover:text-brand cursor-pointer">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-canvas text-[10px] font-semibold uppercase tracking-[0.22em] mb-5">Mumbai HQ</h4>
            <p className="text-sm leading-relaxed">
              Andheri East,<br />
              Mumbai 400069,<br />
              Maharashtra, India
            </p>
            <p className="mt-4 text-sm text-brand font-semibold">hello@ace360degree.com</p>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.22em]">
          <p>© 2026 Ace360degree. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-brand cursor-pointer">Privacy</a>
            <a className="hover:text-brand cursor-pointer">Terms</a>
            <a className="hover:text-brand cursor-pointer">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
