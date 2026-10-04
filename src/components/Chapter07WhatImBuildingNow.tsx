import { ArrowDown } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter07WhatImBuildingNow() {
  const { focusAreas } = SITE_DATA;

  return (
    <section
      id="building-now"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="focus" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 07 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Current Disciplines
          </span>
        </div>

        {/* Chapter Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          What I&apos;m Building Now
        </h2>

        {/* Story Intro */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-14 font-normal">
          Technology moves at an unprecedented pace. I spend my days exploring, prototyping, and building across several emerging domains—not as separate corporations, but as active disciplines of technical curiosity and software execution.
        </p>

        {/* Areas of Interest Ledger (Editorial rows, not dashboard cards) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
            >
              <div className="sm:w-4/12 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${item.dotColor} flex-shrink-0`} />
                <h3 className="text-lg font-bold text-white group-hover:text-[#ff8a65] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="sm:w-6/12">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="sm:w-2/12 flex sm:justify-end">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${item.actionStyle}`}
                >
                  {item.action}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Bridge to Chapter 08 */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex items-center justify-end">
          <a
            href="#road-ahead"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Next: The Road Ahead</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
