"use client";

import { useEffect, useState } from "react";
import LocalClock from "@/components/LocalClock";
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
      <div className="container-page flex h-16 items-center justify-between gap-4 text-[0.8125rem] leading-snug md:grid md:h-20 md:grid-cols-12 md:items-start md:pt-5">
        <a href="#top" aria-label={`${PROFILE.name}, back to top`} className="font-display text-3xl leading-none italic md:col-span-3">
          A<span className="text-accent">.</span>S
        </a>

        <dl className="hidden md:col-span-3 md:block">
          <dt className="text-ink-dim">Currently:</dt>
          <dd>{PROFILE.role}</dd>
        </dl>
        <dl className="hidden md:col-span-3 md:block">
          <dt className="text-ink-dim">Based in:</dt>
          <dd>
            Patna, India <LocalClock />
          </dd>
        </dl>

        <nav aria-label="Primary" className="md:col-span-3">
          <p className="hidden text-ink-dim md:block">Navigation:</p>
          <ul className="flex gap-4 min-[400px]:gap-5 md:gap-x-1">
            {NAV_LINKS.map(({ id, label }, i) => (
              <li key={id} className={id === "principles" ? "hidden sm:block" : undefined}>
                <a
                  href={`#${id}`}
                  aria-current={activeId === id ? "true" : undefined}
                  className="text-ink-muted transition-colors hover:text-ink aria-[current]:text-accent"
                >
                  {label}
                </a>
                {i < NAV_LINKS.length - 1 && <span className="hidden text-ink-dim md:inline">,</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
