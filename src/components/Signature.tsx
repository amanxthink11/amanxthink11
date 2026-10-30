"use client";

import { useEffect, useId, useRef } from "react";
import { SIGNATURE_STROKES, SIGNATURE_VIEWBOX } from "@/data/signature";

interface SignatureProps {
  className?: string;
  /** Draw when the page loads, or the first time the signature scrolls into view. */
  trigger?: "load" | "view";
  /** Seconds to write the whole signature. */
  duration?: number;
  /** Stroke thickness in CSS pixels, kept constant at any rendered size. */
  thickness?: number;
  /** Show a glowing pen tip while writing. */
  pen?: boolean;
  /** Window event to dispatch once the signature is fully written. */
  doneEvent?: string;
}

// While the pen is lifted between strokes it still travels, at this fraction of writing speed.
const PEN_LIFT_COST = 0.35;

// Gentle ease-in-out over the whole signature, mostly linear so the pen keeps a steady pace.
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2) * 0.35 + t * 0.65;

/**
 * Aman's signature, written out stroke by stroke in order, like a pen. Each stroke is its own path:
 * browsers restart the dash pattern for every subpath, so a single multi-stroke path would make all
 * strokes draw at once. Decorative: the name is always in the page text.
 */
export default function Signature({
  className = "",
  trigger = "load",
  duration = 3.4,
  thickness = 2.2,
  pen = true,
  doneEvent,
}: SignatureProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const inkRef = useRef<SVGGElement>(null);
  const tipRef = useRef<SVGGElement>(null);
  const glowId = useId();

  useEffect(() => {
    const svg = svgRef.current;
    const ink = inkRef.current;
    const tip = tipRef.current;
    if (!svg || !ink) return;

    const paths = Array.from(ink.querySelectorAll("path"));
    const viewWidth = Number(SIGNATURE_VIEWBOX.split(" ")[2]);

    // Lay every stroke on one timeline measured in pen travel: ink while writing, plus the
    // (cheaper) distance flown between strokes while the pen is lifted.
    const strokes: { path: SVGPathElement; start: number; length: number }[] = [];
    let travel = 0;
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      if (i > 0) {
        const prev = strokes[i - 1];
        const from = prev.path.getPointAtLength(prev.length);
        const to = path.getPointAtLength(0);
        travel += Math.hypot(to.x - from.x, to.y - from.y) * PEN_LIFT_COST;
      }
      strokes.push({ path, start: travel, length });
      path.style.strokeDasharray = `${length} ${length}`;
      travel += length;
    });

    // Keep the pen width and nib constant in screen pixels whatever size the SVG renders at.
    const sizeStroke = () => {
      const scale = svg.getBoundingClientRect().width / viewWidth || 1;
      ink.style.strokeWidth = String(thickness / scale);
      tip?.querySelectorAll("circle").forEach((circle) => {
        circle.setAttribute("r", String(Number(circle.dataset.px) / scale));
      });
    };
    sizeStroke();
    const resize = new ResizeObserver(sizeStroke);
    resize.observe(svg);

    // Show the signature written up to `distance` along the timeline.
    const render = (distance: number) => {
      let tipPoint: DOMPoint | null = null;
      strokes.forEach(({ path, start, length }, i) => {
        const drawn = Math.min(length, Math.max(0, distance - start));
        // Fully hide unstarted strokes: a zero-length dash with round caps still paints a dot.
        path.style.visibility = drawn > 0 ? "visible" : "hidden";
        path.style.strokeDashoffset = String(length - drawn);
        if (distance >= start && distance <= start + length) tipPoint = path.getPointAtLength(drawn);
        // Between strokes: glide from this stroke's end to the next stroke's start.
        const next = strokes[i + 1];
        if (!tipPoint && next && distance > start + length && distance < next.start) {
          const from = path.getPointAtLength(length);
          const to = next.path.getPointAtLength(0);
          const t = (distance - start - length) / (next.start - start - length);
          tipPoint = new DOMPoint(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
        }
      });
      if (tip && tipPoint) tip.setAttribute("transform", `translate(${(tipPoint as DOMPoint).x} ${(tipPoint as DOMPoint).y})`);
    };

    const announce = () => {
      if (doneEvent) window.dispatchEvent(new Event(doneEvent));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      render(travel);
      announce();
      return () => resize.disconnect();
    }

    let frame = 0;
    let started = false;
    const write = () => {
      if (started) return;
      started = true;
      if (tip) tip.style.opacity = "1";
      const begin = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - begin) / (duration * 1000));
        render(ease(t) * travel);
        if (t < 1) {
          frame = requestAnimationFrame(step);
        } else {
          frame = 0;
          if (tip) tip.style.opacity = "0";
          announce();
        }
      };
      frame = requestAnimationFrame(step);
    };

    let observer: IntersectionObserver | undefined;
    let delay = 0;
    if (trigger === "view") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          write();
          observer?.disconnect();
        },
        { threshold: 0.6 },
      );
      observer.observe(svg);
    } else {
      // A short beat after load before the pen touches down.
      delay = window.setTimeout(write, 300);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(delay);
      observer?.disconnect();
      resize.disconnect();
    };
  }, [trigger, duration, thickness, doneEvent]);

  return (
    <svg ref={svgRef} viewBox={SIGNATURE_VIEWBOX} aria-hidden="true" focusable="false" className={className}>
      <defs>
        <radialGradient id={glowId}>
          <stop offset="0" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="0.35" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g ref={inkRef} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {SIGNATURE_STROKES.map((d, i) => (
          // Hidden until the effect starts writing (or reveals it all for reduced motion).
          <path key={i} d={d} style={{ visibility: "hidden" }} />
        ))}
      </g>
      {pen && (
        <g ref={tipRef} style={{ opacity: 0, transition: "opacity 0.6s" }}>
          {/* data-px is the radius in screen pixels; sizeStroke converts it to viewBox units. */}
          <circle data-px="18" r="18" fill={`url(#${glowId})`} />
          <circle data-px="2.5" r="2.5" fill="currentColor" />
        </g>
      )}
    </svg>
  );
}
