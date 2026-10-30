"use client";

import { Children, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Vertical padding of the pinned frame (pin:pt-20 + pin:pb-8), added when measuring fit.
const FRAME_PADDING = 80 + 32;

const pad = (n: number) => String(n).padStart(3, "0");

/**
 * On screens where the tallest project fits, pins the projects in place and swaps them as you
 * scroll — one screen of scrolling per project. Otherwise the panels simply stack.
 * `data-mode` drives the `pin:` variant in globals.css.
 */
export default function WorkShowcase({ labels, children }: { labels: string[]; children: ReactNode }) {
  const panels = Children.toArray(children);
  const count = panels.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"stack" | "pin">("stack");
  const [active, setActive] = useState(0);
  const pinned = mode === "pin";

  // Decide the mode by laying the content out pinned, measuring it, and checking it fits.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;
    if (!root || !content) return;
    const wide = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    const decide = () => {
      frame = 0;
      if (!wide.matches) return setMode("stack");
      const current = root.dataset.mode;
      root.dataset.mode = "pin";
      const needed = content.offsetHeight + FRAME_PADDING;
      root.dataset.mode = current;
      setMode(needed <= window.innerHeight ? "pin" : "stack");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(decide);
    };

    decide();
    // Web fonts change text height, so re-measure once they have loaded.
    document.fonts?.ready.then(schedule);
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!pinned || !root) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
      root.style.setProperty("--progress", progress.toFixed(4));
      setActive(Math.min(count - 1, Math.floor(progress * count)));
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
  }, [pinned, count]);

  function jumpTo(index: number) {
    const root = rootRef.current;
    if (!root) return;
    const travel = root.offsetHeight - window.innerHeight;
    // Land in the middle of the project's scroll range so it is fully settled.
    const top = root.getBoundingClientRect().top + window.scrollY + ((index + 0.5) / count) * travel;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div
      ref={rootRef}
      data-mode={mode}
      style={{ "--count": count } as CSSProperties}
      className="relative pin:h-[calc(var(--count)*100svh)]"
    >
      <div className="pin:sticky pin:top-0 pin:flex pin:h-svh pin:flex-col pin:justify-center pin:pt-20 pin:pb-8">
        <div ref={contentRef}>
          <div className="mb-8 hidden items-end justify-between gap-8 pin:flex">
            <p className="flex items-baseline gap-3 font-display italic" aria-live="polite">
              <span className="text-5xl text-accent">{pad(active + 1)}</span>
              <span className="text-xl text-ink-dim">/ {pad(count)}</span>
              <span className="sr-only">{labels[active]}</span>
            </p>
            <div className="flex items-center gap-6 text-sm">
              {labels.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => jumpTo(i)}
                  aria-current={i === active ? "true" : undefined}
                  className="cursor-pointer text-ink-dim transition-colors hover:text-ink aria-[current]:text-ink"
                >
                  {label}
                </button>
              ))}
              <span aria-hidden="true" className="relative h-px w-32 bg-line">
                <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-[var(--progress,0)] bg-accent" />
              </span>
            </div>
          </div>

          {/* Pinned: every panel shares one grid cell, so the frame is as tall as the tallest panel. */}
          <div className="pin:grid">
            {panels.map((panel, i) => (
              <div
                key={labels[i]}
                data-state={i === active ? "active" : i < active ? "past" : "next"}
                inert={pinned && i !== active}
                className="border-t border-line pt-12 first:border-t-0 first:pt-0 [&+&]:mt-14 pin:[grid-area:1/1] pin:border-t-0 pin:pt-0 pin:transition-[opacity,translate] pin:duration-700 pin:ease-[cubic-bezier(0.2,0.7,0.2,1)] pin:[&+&]:mt-0 pin:data-[state=next]:translate-y-16 pin:data-[state=next]:opacity-0 pin:data-[state=past]:-translate-y-16 pin:data-[state=past]:opacity-0"
              >
                {panel}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
