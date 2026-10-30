"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";

/**
 * A ring that trails the pointer and swells over links. Decorative only: the native cursor
 * stays visible, and the ring never renders on touch devices or with reduced motion.
 */
export default function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const capable = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!ring || !capable.matches) return;

    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let frame = 0;

    const loop = () => {
      // Ease towards the pointer; stop the loop once the ring has caught up.
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;
      ring.style.translate = `${current.x}px ${current.y}px`;
      const settled = Math.abs(target.x - current.x) < 0.1 && Math.abs(target.y - current.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(loop);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      ring.dataset.visible = "true";
      ring.dataset.active = String(event.target instanceof Element && !!event.target.closest(INTERACTIVE));
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      ring.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      data-visible="false"
      className="pointer-events-none fixed top-0 left-0 z-[100] -mt-4 -ml-4 size-8 rounded-full border border-ink/60 opacity-0 mix-blend-difference transition-[opacity,scale,background-color] duration-300 data-[active=true]:scale-[1.8] data-[active=true]:border-transparent data-[active=true]:bg-ink data-[visible=true]:opacity-100"
    />
  );
}
