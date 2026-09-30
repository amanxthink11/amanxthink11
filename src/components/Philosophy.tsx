import { Flame } from "lucide-react";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 lg:py-40 relative border-t border-white/[0.06] overflow-hidden scroll-mt-20"
    >
      {/* Cinematic subtle warm ambient lighting */}
      <div className="ambient-glow w-[600px] h-[600px] bg-[#ff4d2e] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
      <div className="ambient-glow w-[400px] h-[400px] bg-[#f59e0b] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-10">
          <span className="text-[#ff4d2e]">07</span>
          <span>/</span>
          <span>FOUNDER MOTTO</span>
        </div>

        {/* Minimal Flame Symbol */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#ff4d2e]/10 border border-[#ff4d2e]/30 flex items-center justify-center text-[#ff4d2e] shadow-lg shadow-[#ff4d2e]/25">
            <Flame className="w-7 h-7 animate-pulse" />
          </div>
        </div>

        {/* Large Typography — The Emotional Center of the Website */}
        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-8">
          &ldquo;The chapter may change. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2e] via-[#ff7849] to-[#ffaa75]">
            The fire to build doesn&apos;t.&rdquo;
          </span>
        </blockquote>

        {/* Concise Supporting Narrative */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Ventures evolve, market dynamics pivot, and technologies shift. But the core instinct—to identify a friction point and write code, design experiences, and mobilize teams to solve it—remains constant.
        </p>

        {/* Restrained Attribution */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>Aman Singh</span>
          <span>•</span>
          <span>Patna, Bihar, India</span>
        </div>

      </div>
    </section>
  );
}
