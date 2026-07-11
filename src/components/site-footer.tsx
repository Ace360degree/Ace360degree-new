import { MapPin, Mail, Phone, Linkedin, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[#181818] relative overflow-hidden pt-24 pb-12 font-sans">
      {/* Yellow Ring */}
      <div className="absolute top-1/2 right-0 translate-x-[55%] -translate-y-[50%] opacity-90 pointer-events-none z-0">
        <div className="w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] border-[120px] md:border-[200px] border-[#FFA20B] rounded-full shadow-[0_0_80px_rgba(255,162,11,0.6)]"></div>
      </div>

      <div className="mx-auto max-w-[1400px] px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

          {/* Contact Info Column */}
          <div className="lg:col-span-4 lg:pr-8">
            <img src={footerLogo} alt="Ace 360" className="h-16 w-auto mb-12" />

            <div className="space-y-6 text-sm">
              <div className="flex gap-4 items-start">
                <MapPin className="size-5 shrink-0 mt-0.5 text-white" />
                <div>
                  <div className="uppercase font-medium tracking-widest mb-1.5 text-white/80">Registered Office</div>
                  <p className="text-white/50 leading-relaxed max-w-[280px]">2882, hasham house, kharodi, Ali Talao Rd, Malad West, Mumbai, Maharashtra 400095</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="size-5 shrink-0 mt-0.5 text-white" />
                <div>
                  <div className="uppercase font-medium tracking-widest mb-1.5 text-white/80">Corporate Office</div>
                  <p className="text-white/50 leading-relaxed max-w-[280px]">12 Upper, Mindspace, Chincholi Bunder Road, New Link Rd, Malad West, Mumbai, Maharashtra 400064</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="size-5 shrink-0 mt-0.5 text-white" />
                <div>
                  <div className="uppercase font-medium tracking-widest mb-1.5 text-white/80">UAE Office</div>
                  <p className="text-white/50 leading-relaxed max-w-[280px]">Block B, C-48-112, SRTIP, SHARJAH, UAE</p>
                </div>
              </div>

              <div className="pt-2 space-y-4">
                <div className="flex gap-4 items-center">
                  <Mail className="size-5 shrink-0 text-white" />
                  <a href="mailto:Growth@ace360pl.com" className="text-white/50 hover:text-white transition">Growth@ace360pl.com</a>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="size-5 shrink-0 text-white" />
                  <a href="mailto:ClientSuccess@ace360pl.com" className="text-white/50 hover:text-white transition">ClientSuccess@ace360pl.com</a>
                </div>
              </div>

              <div className="pt-2 space-y-4">
                <div className="flex gap-4 items-center">
                  <Phone className="size-5 shrink-0 text-white" />
                  <a href="tel:+917045360360" className="text-white/50 hover:text-white transition">+91-7045 360 360</a>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="size-5 shrink-0 text-white" />
                  <a href="tel:+971562161563" className="text-white/50 hover:text-white transition">+971 56 216 1563</a>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="size-5 shrink-0 text-white" />
                  <a href="tel:+02246020360" className="text-white/50 hover:text-white transition">+022-46 020 360</a>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex gap-4 items-center">
                  <div className="w-5 text-white text-[14px] font-bold">CIN</div>
                  <div className="text-white/60 font-semibold tracking-wide text-[12px]">U72901MH2022PTC382331</div>
                </div>
                <div className="text-[12px] uppercase font-semibold text-white/60">Altreen 360 Creative Solutions Private Limited</div>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3.5 text-sm text-white/50">
              <li><a className="hover:text-white transition cursor-pointer">Website Design & Development</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Search Engine Optimization</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Performance Marketing</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Mobile App Development</a></li>
              <li><a className="hover:text-white transition cursor-pointer">CRM & ERP Solutions</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Brand Strategy</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Logo & Visual Identity</a></li>
              <li><a className="hover:text-white transition cursor-pointer">UI / UX & Product Engineering</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Content Marketing</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Marketing Automation</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Conversion Optimization</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Social Media Marketing</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Marketing Communication</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Corporate Communication Design</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Packaging & Product</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Motion Graphics & Animation</a></li>
              <li><a className="hover:text-white transition cursor-pointer">Corporate Films & Videos</a></li>
            </ul>
          </div>

          {/* Industries & Location Column */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h4 className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-6">Industries We Serve</h4>
              <ul className="space-y-3.5 text-sm text-white/50">
                <li><a className="hover:text-white transition cursor-pointer">Healthcare</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Education</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Manufacturing</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Fintech & BFSI</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Real Estate</a></li>
                <li><a className="hover:text-white transition cursor-pointer">SaaS & Technology</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Architecture / Interior / Furniture</a></li>
                <li><a className="hover:text-white transition cursor-pointer">D2C & Retail Brand</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-6">Location</h4>
              <ul className="space-y-3.5 text-sm text-white/50">
                <li><a className="hover:text-white transition cursor-pointer">India</a></li>
                <li><a className="hover:text-white transition cursor-pointer">UAE</a></li>
                <li><a className="hover:text-white transition cursor-pointer">UK</a></li>
                <li><a className="hover:text-white transition cursor-pointer">USA</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Canada</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Australia</a></li>
              </ul>
            </div>
          </div>

          {/* About Us & Policies Column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h4 className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-6">About Us</h4>
              <ul className="space-y-3.5 text-sm text-white/50">
                <li><a className="hover:text-white transition cursor-pointer">Our Story</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Case Studies</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Why Ace360degree</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Insights</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Careers</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-6">Policies</h4>
              <ul className="space-y-3.5 text-sm text-white/50">
                <li><a className="hover:text-white transition cursor-pointer">Terms & Condition</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Privacy</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Disclaimer</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Approvals</a></li>
                <li><a className="hover:text-white transition cursor-pointer">Refunds</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between pb-8 pt-4 border-b border-white/10 mt-4 text-xs uppercase tracking-widest text-white/40">
          <p>© 2026 ACE360DEGREE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-3 mt-6 md:mt-0">
            <a className="size-10 rounded-full border border-white/20 grid place-items-center text-white/60 hover:bg-[#FFA20B] hover:text-[#181818] hover:border-[#FFA20B] transition cursor-pointer">
              <Linkedin className="size-4" />
            </a>
            <a className="size-10 rounded-full border border-white/20 grid place-items-center text-white/60 hover:bg-[#FFA20B] hover:text-[#181818] hover:border-[#FFA20B] transition cursor-pointer">
              <Instagram className="size-4" />
            </a>
            <a className="size-10 rounded-full border border-white/20 grid place-items-center text-white/60 hover:bg-[#FFA20B] hover:text-[#181818] hover:border-[#FFA20B] transition cursor-pointer">
              <Youtube className="size-4" />
            </a>
            <a className="size-10 rounded-full border border-white/20 grid place-items-center text-white/60 hover:bg-[#FFA20B] hover:text-[#181818] hover:border-[#FFA20B] transition cursor-pointer">
              <Facebook className="size-4" />
            </a>
            <a className="size-10 rounded-full border border-white/20 grid place-items-center text-white/60 hover:bg-[#FFA20B] hover:text-[#181818] hover:border-[#FFA20B] transition cursor-pointer">
              <Twitter className="size-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 relative z-10 text-center px-4">
          <p className="text-[10px] text-white/30 leading-relaxed max-w-5xl mx-auto tracking-widest">
            300+ PROJECTS DELIVERED. 15+ YEARS EXPERIENCE. 5+ COUNTRIES SERVED. 50+ ACTIVE CLIENTS. BUILDING BRANDS. DRIVING GROWTH. ENGINEERING DIGITAL EXPERIENCES THAT DELIVER MEASURABLE BUSINESS RESULTS.
          </p>
        </div>
      </div>
    </footer>
  );
}
