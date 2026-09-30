import { Quote, Flame, Target, Compass, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="ambient-glow w-[500px] h-[500px] bg-[#ff4d2e] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400">
            <span className="text-[#ff4d2e]">07</span>
            <span>/</span>
            <span>FOUNDER STATEMENT</span>
          </div>
        </div>

        {/* Large Statement Quote */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ff4d2e]/10 border border-[#ff4d2e]/30 text-[#ff4d2e] mb-8 shadow-lg shadow-[#ff4d2e]/20">
            <Flame className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            &ldquo;The chapter may change. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2e] via-[#ff7849] to-[#ffaa75]">
              The fire to build doesn&apos;t.&rdquo;
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Ventures evolve, market dynamics pivot, and technologies shift. But the core instinct—to identify a friction point and write code, design experiences, and mobilize teams to solve it—remains constant.
          </p>
        </div>

        {/* Founder Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-white/[0.08]">
          {SITE_DATA.philosophy.principles.map((principle) => (
            <div
              key={principle.number}
              className="p-6 rounded-xl bg-[#0f111a]/80 border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold text-[#ff4d2e]">
                  {principle.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/[0.2]" />
                <h3 className="text-base font-bold text-white">
                  {principle.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
