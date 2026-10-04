"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X, BookOpen } from "lucide-react";
import { CHAPTERS, StoryChapter } from "@/data/site-data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState<string>("beginning");
  const drawerRef = useRef<HTMLDivElement>(null);
  const indexDropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for tracking active chapter
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    CHAPTERS.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveChapterId(chapter.id);
            }
          });
        },
        {
          rootMargin: "-25% 0px -45% 0px",
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

  // Close index dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        indexDropdownRef.current &&
        !indexDropdownRef.current.contains(e.target as Node)
      ) {
        setIsIndexOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isOpen) setIsOpen(false);
        if (isIndexOpen) setIsIndexOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isIndexOpen]);

  // Prevent body scroll when mobile drawer is open
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

  const handleNavClick = (chapterId: string) => {
    setIsOpen(false);
    setIsIndexOpen(false);
    const targetElement = document.getElementById(chapterId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentChapter =
    CHAPTERS.find((c) => c.id === activeChapterId) || CHAPTERS[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090d]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link
          href="#beginning"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("beginning");
          }}
          className="group flex items-center gap-2 focus:outline-none"
          aria-label="Aman Singh - Home"
        >
          <span className="font-bold tracking-tight text-white group-hover:text-[#ff4d2e] transition-colors text-xl font-mono">
            AMAN<span className="text-[#ff4d2e]">.</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-zinc-500 border border-white/[0.08] px-2 py-0.5 rounded-full bg-white/[0.02]">
            Story
          </span>
        </Link>

        {/* Desktop Chapter Tracker & Dropdown Trigger */}
        <div className="hidden md:flex items-center relative" ref={indexDropdownRef}>
          <button
            type="button"
            onClick={() => setIsIndexOpen(!isIndexOpen)}
            className="flex items-center gap-3 bg-[#11131c]/80 hover:bg-[#161924] border border-white/[0.1] px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-mono transition-all text-zinc-300 hover:text-white cursor-pointer shadow-sm"
            aria-expanded={isIndexOpen}
            aria-label="Open story chapter index"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff4d2e] animate-pulse" />
            <span className="text-[#ff8a65] font-semibold">
              {currentChapter.number}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-white font-medium truncate max-w-[180px]">
              {currentChapter.title}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 ${
                isIndexOpen ? "rotate-180 text-white" : ""
              }`}
            />
          </button>

          {/* Chapter Index Dropdown Menu */}
          {isIndexOpen && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-72 bg-[#0c0e16] border border-white/[0.12] rounded-2xl p-2 shadow-2xl backdrop-blur-xl z-50">
              <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500 border-b border-white/[0.06] mb-1 flex items-center justify-between">
                <span>Story Chapters</span>
                <span>10 Chapters</span>
              </div>
              <div className="max-h-[360px] overflow-y-auto space-y-0.5 pr-1">
                {CHAPTERS.map((chap) => {
                  const isActive = activeChapterId === chap.id;
                  return (
                    <button
                      key={chap.id}
                      type="button"
                      onClick={() => handleNavClick(chap.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#ff4d2e]/10 text-white font-semibold border border-[#ff4d2e]/30"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-zinc-500 font-bold">
                          {chap.number}
                        </span>
                        <span className="truncate">{chap.title}</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d2e] flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("connect");
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#ff4d2e]/20"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Chapter Tag & Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.08]">
            <span className="text-[#ff4d2e] font-semibold">
              {currentChapter.number}
            </span>{" "}
            {currentChapter.shortTitle}
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-2 rounded-lg bg-[#141722] border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Container */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[56px] z-40 bg-black/70 backdrop-blur-sm flex flex-col justify-between"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={drawerRef}
            className="bg-[#090a0f] border-b border-white/[0.1] px-5 py-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#ff4d2e]" />
                Story Chapters
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Aman Singh Portfolio
              </span>
            </div>

            <nav className="flex flex-col gap-1 py-1" aria-label="Mobile navigation">
              {CHAPTERS.map((chap) => {
                const isActive = activeChapterId === chap.id;
                return (
                  <a
                    key={chap.id}
                    href={`#${chap.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(chap.id);
                    }}
                    className={`text-sm font-mono px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#ff4d2e]/10 text-white font-semibold border border-[#ff4d2e]/30"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 font-bold">
                        {chap.number}
                      </span>
                      <span>{chap.title}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d2e]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 mt-3 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href="#connect"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("connect");
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
