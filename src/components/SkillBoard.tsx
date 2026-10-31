"use client";

import { useRef, useState, type PointerEvent } from "react";
import { RotateCcw } from "lucide-react";

const COLORS = ["bg-yellow", "bg-cyan", "bg-pink", "bg-green", "bg-lamp", "bg-red", "bg-paper"];
const TILTS = [-7, 5, -3, 8, -5, 3, -9, 6, -2, 7];

type Offset = { x: number; y: number };

// A fixed scatter (same on every visit): small nudges so neighbours overlap like a sticker wall.
const jitter = (i: number) => ({ x: ((i * 53) % 61) - 30, y: ((i * 29) % 31) - 15 });

/**
 * A collage of stickers. Each sits in its own grid cell (so the board fits any width), nudged off
 * centre and tilted so they overlap like a sticker wall; any sticker can be dragged anywhere.
 */
export default function SkillBoard({ skills }: { skills: string[] }) {
  const [offsets, setOffsets] = useState<Record<number, Offset>>({});
  const [order, setOrder] = useState<number[]>([]); // most recently grabbed last, so it sits on top
  const drag = useRef<{ index: number; startX: number; startY: number; origin: Offset } | null>(null);

  const onPointerDown = (index: number) => (event: PointerEvent<HTMLLIElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { index, startX: event.clientX, startY: event.clientY, origin: offsets[index] ?? { x: 0, y: 0 } };
    setOrder((prev) => [...prev.filter((i) => i !== index), index]);
  };

  const onPointerMove = (event: PointerEvent<HTMLLIElement>) => {
    const d = drag.current;
    if (!d) return;
    setOffsets((prev) => ({
      ...prev,
      [d.index]: { x: d.origin.x + event.clientX - d.startX, y: d.origin.y + event.clientY - d.startY },
    }));
  };

  const endDrag = () => {
    drag.current = null;
  };

  return (
    // No box: the stickers sit straight on the section's corrugated panel.
    <div data-reveal className="relative pt-14 pb-6">
      <button
        type="button"
        onClick={() => {
          setOffsets({});
          setOrder([]);
        }}
        className="absolute top-0 right-0 z-[60] inline-flex cursor-pointer items-center gap-2 rounded-lg border border-line-strong bg-night px-3 py-1.5 label-sign text-fog transition-colors hover:text-chalk"
      >
        <RotateCcw className="size-3.5" aria-hidden="true" />
        Stick them back
      </button>

      <ul className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-x-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-4">
        {skills.map((skill, i) => {
          const moved = offsets[i] ?? { x: 0, y: 0 };
          const nudge = jitter(i);
          const round = skill.length <= 7 && i % 3 === 0;
          const z = order.indexOf(i) + 1;
          return (
            <li
              key={skill}
              onPointerDown={onPointerDown(i)}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              style={{
                transform: `translate(${nudge.x + moved.x}px, ${nudge.y + moved.y}px) rotate(${TILTS[i % TILTS.length]}deg)`,
                zIndex: z,
              }}
              className={`relative cursor-grab touch-none border-2 border-tray text-center leading-tight text-tray shadow-sticker select-none active:cursor-grabbing ${
                COLORS[i % COLORS.length]
              } ${i % 2 ? "justify-self-end" : "justify-self-start"} lg:justify-self-center ${
                round
                  ? "grid size-24 place-items-center rounded-full p-2 text-sm sm:size-28 lg:size-32 lg:text-base"
                  : `${i % 4 === 1 ? "rounded-full" : "rounded-lg"} px-5 py-3 text-base sm:text-lg lg:px-6 lg:py-4 lg:text-xl`
              } ${i % 3 === 1 ? "font-tag" : "font-sign"}`}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
