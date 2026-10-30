"use client";

import { useEffect, useRef, useState } from "react";
import SevenSegment from "@/components/ui/SevenSegment";

const COUNT_MS = 1400;
const easeOut = (t: number) => 1 - (1 - t) ** 3;

/** Counts up from `from` to `value` the first time it scrolls into view. */
export default function LedCounter({ value, from = 0, className = "" }: { value: number; from?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);
  const digits = String(value).length;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    setShown(from);

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / COUNT_MS);
        setShown(Math.round(from + (value - from) * easeOut(t)));
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, from]);

  return (
    <span ref={ref} className={className}>
      {/* Pad to the final width so the board doesn't jump as digits are added. */}
      <SevenSegment value={String(shown).padStart(digits, "0")} className="h-full w-auto" />
      <span className="sr-only">{value}</span>
    </span>
  );
}
