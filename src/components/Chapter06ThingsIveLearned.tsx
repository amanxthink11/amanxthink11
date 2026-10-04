import { ArrowDown } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter06ThingsIveLearned() {
  const { principles } = SITE_DATA;

  return (
    <section
      id="things-learned"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="principles" className="absolute -top-24 pointer-events-none" />
      <span id="philosophy" className="absolute -top-24 pointer-events-none" />

      {/* Subtle ambient glow */}
      <div className="ambient-glow w-[550px] h-[550px] bg-[#ff4d2e] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 06 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Founder Principles
          </span>
        </div>

        {/* Chapter Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Things I&apos;ve Learned
        </h2>

        {/* Editorial Introduction */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-16 font-normal">
          Founding companies and writing software quickly strips away romantic theories. These are five core principles forged through real mistakes, production pressure, and shipped systems.
        </p>

        {/* 5 Editorial Principles with Large Typography and Minimal UI */}
        <div className="divide-y divide-white/[0.08]">
          {principles.map((item) => (
            <div
              key={item.number}
              className="py-10 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-baseline justify-between gap-6 group"
            >
              {/* Left Column: Number & Title */}
              <div className="md:w-5/12 flex-shrink-0">
                <span className="font-mono text-xs font-bold text-[#ff4d2e] tracking-wider block mb-2">
                  {item.number} / 05
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#ff8a65] transition-colors uppercase font-mono">
                  {item.title}
                </h3>
              </div>

              {/* Right Column: Statement & Narrative Explanation */}
              <div className="md:w-7/12 space-y-3">
                <p className="text-lg font-serif italic text-zinc-200 leading-snug">
                  &ldquo;{item.statement}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                  {item.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Bridge to Chapter 07 */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex items-center justify-end">
          <a
            href="#building-now"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Next: What I&apos;m Building Now</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
