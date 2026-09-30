import Link from "next/link";
import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = [
    { name: "Think11", url: "https://www.think11.in", isExternal: true },
    { name: "IND Tech Mark", url: "https://indtechmark.com", isExternal: true },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/amanxthink11", isExternal: true },
    { name: "GitHub", url: "https://github.com/amanxthink11", isExternal: true },
    { name: "Instagram", url: "https://instagram.com/amanxthink11", isExternal: true },
    { name: "X", url: "https://x.com/amanxthink11", isExternal: true },
  ];

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] py-12 sm:py-16 text-zinc-400 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Minimal Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Brand & Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link
              href="#hero"
              className="text-2xl font-bold font-mono tracking-tight text-white hover:text-[#ff4d2e] transition-colors"
              aria-label="Aman Singh Home"
            >
              AMAN<span className="text-[#ff4d2e]">.</span>
            </Link>

            <span className="hidden sm:inline text-zinc-600">•</span>

            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span>Patna, Bihar, India</span>
            </div>
          </div>

          {/* Curated Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium" aria-label="Footer Navigation">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            ))}
          </nav>
        </div>

        {/* Minimal Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} Aman Singh. All rights reserved. amanxthink11.com
          </div>

          <a
            href="#hero"
            className="text-zinc-400 hover:text-[#ff4d2e] transition-colors flex items-center gap-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
