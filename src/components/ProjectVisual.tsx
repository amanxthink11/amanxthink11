import Image from "next/image";
import type { FeaturedProject } from "@/data/site-data";

function BrowserFrame({ project }: { project: FeaturedProject }) {
  const shot = project.screenshot!;

  return (
    <figure className="overflow-hidden rounded-md border border-line bg-paper-raised shadow-[0_24px_60px_-30px_rgb(22_20_15/0.35)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
        </span>
        <span className="mx-auto truncate rounded-full bg-paper px-4 py-1 font-mono text-[11px] text-ink-dim">
          {shot.displayUrl}
        </span>
        <span aria-hidden="true" className="w-[2.625rem]" />
      </div>
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={`${project.name} homepage`}
        sizes="(min-width: 1152px) 1088px, calc(100vw - 2.5rem)"
        className="w-full"
      />
    </figure>
  );
}

// Deterministic 21×21 QR-like pattern with the three finder squares. Purely decorative.
function QrGlyph() {
  const size = 21;
  const cells: [number, number][] = [];
  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x > size - 9 && y < 8) || (x < 8 && y > size - 9);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!inFinder(x, y) && ((x * 7 + y * 13 + x * y) % 5 < 2)) cells.push([x, y]);
    }
  }

  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" />
      <rect x={x + 1} y={y + 1} width="5" height="5" className="fill-paper" />
      <rect x={x + 2} y={y + 2} width="3" height="3" />
    </g>
  );

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="size-16 fill-ink" shapeRendering="crispEdges" aria-hidden="true">
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
      ))}
      {finder(0, 0)}
      {finder(size - 7, 0)}
      {finder(0, size - 7)}
    </svg>
  );
}

function ReceiptIllustration() {
  const rows = [
    ["Notebook A5 × 2", "240.00"],
    ["Gel pen pack × 1", "85.00"],
  ];
  const taxes = [
    ["Subtotal", "325.00"],
    ["CGST 9%", "29.25"],
    ["SGST 9%", "29.25"],
  ];

  return (
    <figure className="relative flex items-center justify-center overflow-hidden rounded-md border border-line bg-paper-raised py-14 sm:aspect-[4/3] sm:py-0 lg:aspect-[16/10]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:18px_18px]"
      />
      <div
        aria-hidden="true"
        className="relative w-[13.5rem] -rotate-2 bg-paper px-5 pt-5 pb-6 font-mono text-[10px] leading-relaxed shadow-[0_24px_50px_-20px_rgb(22_20_15/0.45)] sm:w-60 sm:text-[11px]"
      >
        <p className="text-center font-semibold tracking-widest">TAX INVOICE</p>
        <p className="text-center text-ink-dim">Your Shop · Patna</p>
        <p className="mt-3 border-y border-dashed border-ink/30 py-2">
          {rows.map(([item, amount]) => (
            <span key={item} className="flex justify-between">
              <span>{item}</span>
              <span>{amount}</span>
            </span>
          ))}
        </p>
        <p className="py-2 text-ink-muted">
          {taxes.map(([label, amount]) => (
            <span key={label} className="flex justify-between">
              <span>{label}</span>
              <span>{amount}</span>
            </span>
          ))}
        </p>
        <p className="flex justify-between border-t border-ink pt-2 text-xs font-semibold">
          <span>TOTAL</span>
          <span>₹383.50</span>
        </p>
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <QrGlyph />
          <span className="text-ink-dim">Pay via UPI</span>
        </div>
      </div>
      <figcaption className="eyebrow absolute bottom-3 left-4 text-[10px]">
        Illustration · 80 mm thermal invoice
      </figcaption>
    </figure>
  );
}

export default function ProjectVisual({ project }: { project: FeaturedProject }) {
  return project.screenshot ? <BrowserFrame project={project} /> : <ReceiptIllustration />;
}
