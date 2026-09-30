"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about", id: "about" },
  { name: "Ventures", href: "#ventures", id: "ventures" },
  { name: "Work", href: "#work", id: "work" },
  { name: "Journey", href: "#journey", id: "journey" },
  { name: "Connect", href: "#connect", id: "connect" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle scroll detection for sticky navbar height & backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section scroll spy using IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "ventures", "work", "journey", "connect"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-20% 0px -50% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll while mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-2 focus:outline-none"
          aria-label="Aman Singh - Home"
        >
          <span className="font-bold tracking-tight text-white group-hover:text-[#ff4d2e] transition-colors text-xl font-mono">
            AMAN<span className="text-[#ff4d2e]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#10121a]/70 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white/[0.1] text-white shadow-sm font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#ff4d2e]/20"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg bg-[#141722] border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop & Container */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[56px] z-40 bg-black/60 backdrop-blur-sm flex flex-col justify-between"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={drawerRef}
            className="bg-[#090a0f] border-b border-white/[0.08] px-6 py-6 shadow-2xl flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-base font-medium px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#ff4d2e]/10 text-white font-semibold border border-[#ff4d2e]/30"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d2e]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 mt-2 border-t border-white/[0.06] flex flex-col gap-3">
              <a
                href="#connect"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#connect");
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium shadow-lg shadow-[#ff4d2e]/25 text-sm"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-center text-xs text-zinc-500 font-mono">
                Patna, Bihar, India
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
