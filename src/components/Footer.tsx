import Link from "next/link";
import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { CHAPTERS } from "@/data/site-data";

export default function Footer() {
  const currentYear = 2026;

  const externalLinks = [
    { name: "Think11", url: "https://www.think11.in" },
    { name: "IND Tech Mark", url: "https://indtechmark.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/amanxthink11" },
    { name: "GitHub", url: "https://github.com/amanxthink11" },
    { name: "X", url: "https://x.com/amanxthink11" },
    { name: "Instagram", url: "https://instagram.com/amanxthink11" },
    { name: "Facebook", url: "https://facebook.com/amanxthink11" },
  ];

  return (
    <footer className="bg-[#08090d] border-t border-white/[0.08] py-14 sm:py-20 text-zinc-400 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row: Brand, Story chapters index & External links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Narrative Summary */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link
                href="#beginning"
                className="text-2xl font-bold font-mono tracking-tight text-white hover:text-[#ff4d2e] transition-colors inline-block mb-3"
                aria-label="Aman Singh Home"
              >
                AMAN<span className="text-[#ff4d2e]">.</span>
              </Link>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
                A personal digital story of a founder who keeps building. From Think11 to IND Tech Mark, software products, and open source.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span>Patna, Bihar, India · IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Story Chapters Index (Columns) */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-4">
              Story Structure
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono">
              {CHAPTERS.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <span className="text-zinc-600 font-bold">{ch.number}</span>
                  <span className="truncate">{ch.shortTitle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Verified External Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-4">
              Ecosystem & Verification
            </span>
            <div className="flex flex-col space-y-2 text-xs font-mono">
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between py-0.5 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Minimal Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} Aman Singh. All rights reserved. amanxthink11.com
          </div>

          <a
            href="#beginning"
            className="text-zinc-400 hover:text-[#ff4d2e] transition-colors flex items-center gap-1"
          >
            <span>Back to the beginning</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
