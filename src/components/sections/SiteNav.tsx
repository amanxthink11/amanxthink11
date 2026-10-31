"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import LogoMark from "@/components/ui/LogoMark";
import { NAV_LINKS, PROFILE } from "@/data/site-data";

export default function SiteNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    let frame = 0;

    // The current section is the last one whose top has passed 40% of the viewport.
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const current = atBottom
        ? sections.at(-1)
        : sections.findLast((section) => section.getBoundingClientRect().top <= line);
      setActiveId(current?.id ?? null);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass =
    "relative py-1 text-[0.8125rem] font-bold tracking-wide text-fog uppercase transition-colors hover:text-chalk aria-[current]:text-chalk after:absolute after:inset-x-0 after:-bottom-1 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-full after:bg-pink after:transition-transform aria-[current]:after:scale-x-100";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-night/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-yellow focus:px-3 focus:py-1.5 focus:text-night"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label={`${PROFILE.name}, back to top`} className="flex items-center gap-3">
          <LogoMark className="h-7 w-auto" />
          <span className="font-tag text-xl text-yellow">Aman</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={activeId === id ? "true" : undefined} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-tray bg-green px-3.5 py-2 font-sign text-xs text-tray shadow-sticker transition-transform hover:-rotate-2"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Email me</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line-strong text-chalk lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line lg:hidden">
          <ul className="container-page grid grid-cols-2 gap-x-6 gap-y-1 py-5">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === id ? "true" : undefined}
                  className="block py-2 font-sign text-2xl text-fog transition-colors hover:text-yellow aria-[current]:text-yellow"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
