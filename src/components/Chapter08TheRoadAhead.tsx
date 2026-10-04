import { ArrowDown } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter08TheRoadAhead() {
  const { roadAhead } = SITE_DATA;

  return (
    <section
      id="road-ahead"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="journey" className="absolute -top-24 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bg-[#ff4d2e] top-1/2 right-[-100px] opacity-[0.05]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 08 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Looking Forward
          </span>
        </div>

        {/* Chapter Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          The Road Ahead
        </h2>

        {/* Editorial Pull Quote */}
        <blockquote className="border-l-2 border-[#ff4d2e] pl-5 sm:pl-6 my-10 text-xl sm:text-2xl font-serif italic text-zinc-200 leading-snug">
          &ldquo;{roadAhead.hook}&rdquo;
        </blockquote>

        {/* Narrative Flow (Grounded & optimistic, emotional weight) */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          <p>
            Looking back from where I started in 2020 to where I stand today, nothing about the journey has been linear. There were miscalculations, systems that failed under pressure, products that didn&apos;t take off, and bets that demanded every ounce of resolve.
          </p>

          <p>
            I don&apos;t make speculative predictions about where the technology industry will be in five or ten years. Trends flare up and burn out; jargon shifts with every season. But the fundamental craft remains steady.
          </p>

          <p>
            What I know with certainty is that I will continue to be here: writing code, testing new ideas, assembling small determined teams, and creating tools that solve real human friction points. Whether it involves autonomous agents, mobile utilities, or enterprise infrastructure, the work is always the same—take an idea, build it thoughtfully, and ship it into reality.
          </p>
        </div>

        {/* Commitment Badge & Narrative Bridge to Chapter 09 */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff4d2e] animate-pulse" />
            <span className="text-white font-medium">Continuous Building:</span>
            <span>Technology · Products · Open Source</span>
          </div>

          <a
            href="#message"
            className="inline-flex items-center gap-1 text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Next: A Message to the Visitor</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
