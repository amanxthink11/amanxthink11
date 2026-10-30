"use client";

import { useEffect, useRef } from "react";
import { moduleStyle, portraitCells } from "@/lib/qr-portrait";

interface Module {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  // 0–1 scale of the square inside its cell; brighter areas get fuller squares.
  fill: number;
  // Per-module random direction used when the field scatters on scroll.
  driftX: number;
  driftY: number;
}

const POINTER_RADIUS = 90;

/**
 * Redraws a portrait as a field of QR-style square modules. Modules assemble on load,
 * get pushed away by the pointer and scatter as the hero scrolls out of view.
 */
export default function PortraitField({ src, label }: { src: string; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const inkColor = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();

    let modules: Module[] = [];
    let cell = 0;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const pointer = { x: -1e4, y: -1e4 };
    const image = new Image();

    function build() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Wide screens: a large portrait rising from the bottom edge behind the name.
      // Narrow screens: the portrait sits up under the nav, and Hero reserves the same
      // min(105vw, 50svh) of top padding so the copy always starts below it.
      const narrow = width < 768;
      const grid = narrow ? 56 : 80;
      const size = narrow
        ? Math.min(width * 1.05, window.innerHeight * 0.5)
        : Math.min(height * 0.9, width * 0.62);
      cell = size / grid;
      const originX = (width - size) / 2;
      const originY = narrow ? 64 : height - size;

      const sampler = document.createElement("canvas");
      sampler.width = sampler.height = grid;
      const sctx = sampler.getContext("2d", { willReadFrequently: true })!;
      sctx.drawImage(image, 0, 0, grid, grid);
      const pixels = sctx.getImageData(0, 0, grid, grid).data;
      const luminance = (x: number, y: number) => {
        const i = (y * grid + x) * 4;
        return (0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2]) / 255;
      };

      modules = portraitCells(luminance, grid).map(({ x, y, brightness }) => {
        const homeX = originX + x * cell;
        const homeY = originY + y * cell;
        return {
          homeX,
          homeY,
          x: reduceMotion ? homeX : Math.random() * width,
          y: reduceMotion ? homeY : Math.random() * height,
          vx: 0,
          vy: 0,
          ...moduleStyle(brightness),
          driftX: Math.random() - 0.5,
          driftY: Math.random() - 0.8,
        };
      });
    }

    function draw() {
      const scatter = reduceMotion ? 0 : Math.min(1, window.scrollY / (height * 0.9));
      ctx!.clearRect(0, 0, width, height);
      ctx!.fillStyle = inkColor;

      for (const m of modules) {
        if (!reduceMotion) {
          const targetX = m.homeX + m.driftX * width * scatter;
          const targetY = m.homeY + m.driftY * height * scatter;
          const dx = m.x - pointer.x;
          const dy = m.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_RADIUS && dist > 0) {
            const push = (1 - dist / POINTER_RADIUS) * 2.4;
            m.vx += (dx / dist) * push;
            m.vy += (dy / dist) * push;
          }
          m.vx = (m.vx + (targetX - m.x) * 0.045) * 0.84;
          m.vy = (m.vy + (targetY - m.y) * 0.045) * 0.84;
          m.x += m.vx;
          m.y += m.vy;
        }

        const side = cell * m.fill;
        const inset = (cell - side) / 2;
        ctx!.globalAlpha = m.alpha * (1 - scatter * 0.85);
        ctx!.fillRect(m.x + inset, m.y + inset, side, side);
      }
      ctx!.globalAlpha = 1;
    }

    function loop() {
      draw();
      frame = visible && !reduceMotion ? requestAnimationFrame(loop) : 0;
    }

    function start() {
      if (!frame) frame = requestAnimationFrame(loop);
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = pointer.y = -1e4;
    };

    let resizeTimer = 0;
    const resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (!image.complete) return;
        build();
        draw();
      }, 120);
    });

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });

    image.onload = () => {
      build();
      draw();
      start();
      resizeObserver.observe(canvas);
      visibility.observe(canvas);
    };
    image.src = src;

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [src]);

  return <canvas ref={canvasRef} role="img" aria-label={label} className="absolute inset-0 size-full" />;
}
