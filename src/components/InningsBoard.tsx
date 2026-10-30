"use client";

import { useState } from "react";
import ExternalLink from "@/components/ui/ExternalLink";
import SevenSegment from "@/components/ui/SevenSegment";
import Tape from "@/components/ui/Tape";
import { MILESTONES } from "@/data/site-data";

const pad = (n: number) => String(n).padStart(2, "0");

/** The journey as a cricket scoreboard: pick an innings, the board and the paper card follow. */
export default function InningsBoard() {
  const [selected, setSelected] = useState(MILESTONES.length - 1);
  const current = MILESTONES[selected];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      {/* Scoreboard */}
      <div data-reveal className="rounded-2xl border border-line bg-tray p-6 shadow-paper sm:p-8 lg:col-span-5 lg:self-start">
        <div className="flex items-center justify-between label-sign text-fog-2">
          <span>
            Innings <span className="text-lamp">{pad(selected + 1)}</span> / {pad(MILESTONES.length)}
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-red" aria-hidden="true" />
            Patna
          </span>
        </div>
        <div className="mt-6 h-24 text-red [filter:drop-shadow(0_0_12px_currentColor)] sm:h-28">
          <SevenSegment value={current.year} className="h-full w-auto" />
        </div>
        <p className="mt-6 font-sign text-xl leading-tight text-chalk">{current.title}</p>
        {/* Overs-style progress pips. */}
        <div className="mt-6 flex gap-2" aria-hidden="true">
          {MILESTONES.map((m, i) => (
            <span key={m.year} className={`h-1.5 flex-1 rounded-full ${i <= selected ? "bg-green" : "bg-line-strong"}`} />
          ))}
        </div>
      </div>

      <div className="lg:col-span-7">
        <ol data-reveal className="divide-y divide-line border-y border-line">
          {MILESTONES.map((m, i) => {
            const active = i === selected;
            return (
              <li key={m.year}>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={active}
                  className={`grid w-full cursor-pointer grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 px-2 py-4 text-left transition-colors hover:bg-asphalt ${
                    active ? "bg-asphalt" : ""
                  }`}
                >
                  <span
                    className={`grid size-8 place-items-center rounded label-sign ${active ? "bg-red text-tray" : "text-fog-2"}`}
                  >
                    {pad(i + 1)}
                  </span>
                  <span className={`font-sign text-lg leading-tight ${active ? "text-red" : "text-chalk"}`}>{m.title}</span>
                  <span className="label-sign text-fog-2">{m.year}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* The selected innings, on paper. */}
        <article aria-live="polite" className="relative mt-8 bg-paper p-6 text-paper-ink shadow-paper sm:p-8 lg:rotate-1">
          <Tape className="-top-3 left-10 -rotate-3 bg-red/80" />
          <p className="label-sign text-red">{current.year}</p>
          <h3 className="mt-2 font-sign text-2xl leading-tight">{current.title}</h3>
          <p className="mt-4 leading-relaxed text-paper-meta">{current.body}</p>
          {current.links && (
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
              {current.links.map((link) => (
                <li key={link.url}>
                  <ExternalLink href={link.url} className="underline decoration-paper-ink/30 underline-offset-4 hover:decoration-red">
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </div>
  );
}
