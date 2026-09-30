"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Ventures", href: "#ventures" },
  { name: "Products", href: "#products" },
  { name: "Journey", href: "#journey" },
  { name: "Code", href: "#code" },
  { name: "Focus", href: "#focus" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090d]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Aman Singh Homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff4d2e] to-[#ff7849] flex items-center justify-center font-bold text-white text-sm shadow-md shadow-[#ff4d2e]/20 group-hover:scale-105 transition-transform">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-white group-hover:text-[#ff7849] transition-colors text-base">
              Aman Singh
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase -mt-0.5">
              Patna • Founder
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (large screens) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#10121a]/80 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm shadow-inner">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#ff4d2e]/25"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 rounded-lg bg-[#141722] border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#08090d]/95 backdrop-blur-xl border-t border-white/[0.08] z-40 p-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-2 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-zinc-200 hover:text-[#ff4d2e] p-3 rounded-lg hover:bg-white/[0.04] transition-colors border-b border-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-8 pb-10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium shadow-lg shadow-[#ff4d2e]/25 text-sm"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs text-zinc-500 font-mono pt-2">
              Patna, Bihar, India
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
