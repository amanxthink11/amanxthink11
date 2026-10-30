"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/data/site-data";

export default function SiteNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    let frame = 0;

    // The current section is the last one whose top has passed 40% of the viewport.
    // Reading positions on scroll (instead of an IntersectionObserver band) stays
    // correct after jumps, resizes and fast flings.
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-ink focus:px-3 focus:py-1.5 focus:text-paper"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="shrink-0 font-display text-xl tracking-tight sm:text-2xl">
          {PROFILE.name}
          <span className="text-accent">.</span>
        </a>
        <ul className="flex items-center gap-3.5 text-[0.8125rem] min-[400px]:gap-5 sm:gap-8 sm:text-sm">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id} className={id === "principles" ? "hidden sm:block" : undefined}>
              <a
                href={`#${id}`}
                aria-current={activeId === id ? "true" : undefined}
                className="relative py-1 text-ink-muted transition-colors hover:text-ink aria-[current]:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform aria-[current]:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
