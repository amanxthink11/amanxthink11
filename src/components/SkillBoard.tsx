"use client";

import { useRef, useState, type PointerEvent } from "react";
import { RotateCcw } from "lucide-react";

const COLORS = ["bg-yellow", "bg-cyan", "bg-pink", "bg-green", "bg-lamp", "bg-red", "bg-paper"];
const SHAPES = ["rounded-md", "rounded-full", "rounded-md", "rounded-xl"];
const TILTS = [-6, 4, -2, 7, -5, 2, -8, 5, -3, 6];

type Offset = { x: number; y: number };

/**
 * Stickers laid out in natural rows (so they fit any width), each draggable anywhere on the board.
 * Dragging only moves a sticker visually; the list order stays the readable order.
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
    const x = d.origin.x + event.clientX - d.startX;
    const y = d.origin.y + event.clientY - d.startY;
    setOffsets((prev) => ({ ...prev, [d.index]: { x, y } }));
  };

  const endDrag = () => {
    drag.current = null;
  };

  return (
    <div data-reveal className="relative rounded-2xl border border-line bg-asphalt/60 p-6 sm:p-10">
      <button
        type="button"
        onClick={() => {
          setOffsets({});
          setOrder([]);
        }}
        className="absolute top-4 right-4 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-line-strong px-3 py-1.5 label-sign text-fog transition-colors hover:text-chalk"
      >
        <RotateCcw className="size-3.5" aria-hidden="true" />
        Stick them back
      </button>

      <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-7 pt-12 pb-4 sm:gap-x-7">
        {skills.map((skill, i) => {
          const offset = offsets[i] ?? { x: 0, y: 0 };
          const z = order.indexOf(i) + 1;
          return (
            <li
              key={skill}
              onPointerDown={onPointerDown(i)}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) rotate(${TILTS[i % TILTS.length]}deg)`,
                zIndex: z,
              }}
              className={`relative cursor-grab touch-none border-2 border-tray px-4 py-2.5 text-center text-tray shadow-sticker select-none active:cursor-grabbing ${COLORS[i % COLORS.length]} ${SHAPES[i % SHAPES.length]} ${
                i % 3 === 1 ? "font-tag text-lg" : "font-sign text-sm"
              }`}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
