import { CheckCircle2, Milestone, Calendar, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function FounderJourney() {
  return (
    <section id="journey" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">02</span>
            <span>/</span>
            <span>TIMELINE OF EXECUTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Founder Journey
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A chronological timeline of ventures, incorporations, and technology expansion. Milestones with exact legal or registration dates are marked with verified verification indicators.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central/left line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[1px] bg-gradient-to-b from-[#ff4d2e] via-white/[0.15] to-transparent pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {SITE_DATA.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#08090d] border-2 border-[#ff4d2e] flex items-center justify-center shadow-md shadow-[#ff4d2e]/30 z-20 top-0 sm:top-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff7849]" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pl-10" : "sm:pr-10"
                    }`}
                  >
                    <div className="founder-card p-6 sm:p-7 relative group">
                      
                      {/* Top Bar with Year & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 font-mono tracking-tight">
                          {item.year}
                        </span>

                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                          {item.type === "Incorporation" || item.type === "Venture" ? (
                            <span className="flex items-center gap-1 text-[#ff8a65]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4d2e]" />
                              Verified Milestone
                            </span>
                          ) : (
                            <span className="text-zinc-400">Narrative Era</span>
                          )}
                        </div>
                      </div>

                      {/* Title & Role */}
                      <h3 className="text-xl font-bold text-white group-hover:text-[#ff7849] transition-colors mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#ff4d2e] font-medium tracking-wide uppercase font-mono mb-4">
                        {item.role}
                      </div>

                      {/* Narrative Text */}
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {item.narrative}
                      </p>

                      {/* Verified Date Footer */}
                      {item.verifiedDate && (
                        <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Recorded: {item.verifiedDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
