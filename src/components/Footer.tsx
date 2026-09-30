import Link from "next/link";
import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] pt-16 pb-12 text-zinc-400 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="Aman Singh Home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff4d2e] to-[#ff7849] flex items-center justify-center font-bold text-white text-sm">
                AS
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#ff7849] transition-colors">
                AMAN.
              </span>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Official personal website of Aman Singh (Aman Kumar Singh), technology entrepreneur and product builder.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span>Patna, Bihar, India</span>
            </div>
          </div>

          {/* Quick Links Column 1: Ventures & Products */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-zinc-300 uppercase tracking-wider mb-4">
              Ventures & Products
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="https://www.think11.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Think11 <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://indtechmark.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  IND Tech Mark Pvt Ltd <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  ThinkScore / StumpTalk
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  CardLedger & MDR Calc
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  ArrowZen Puzzle Game
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Socials */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-zinc-300 uppercase tracking-wider mb-4">
              Connect Across Channels
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {SITE_DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-1"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {currentYear} Aman Singh. All rights reserved. amanxthink11.com
          </div>

          <div className="flex items-center gap-4">
            <span>Built with Next.js & Tailwind</span>
            <span>•</span>
            <a
              href="#hero"
              className="text-[#ff8a65] hover:text-[#ff4d2e] transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
