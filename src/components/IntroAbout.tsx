import { Compass, Cpu, Flame, Layers, Rocket, ShieldCheck } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function IntroAbout() {
  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">01</span>
            <span>/</span>
            <span>PHILOSOPHY & IDENTITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Founder. Builder. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2e] to-[#ff8a3d]">
              Problem Solver.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            I don&apos;t just manage projects from the sidelines—I build them. My journey as an entrepreneur started with an obsession to understand how complex systems work and how thoughtful software can eliminate friction in the physical and digital world.
          </p>
        </div>

        {/* Core Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Entrepreneurship & Ventures */}
          <div className="founder-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ff4d2e]/10 border border-[#ff4d2e]/30 flex items-center justify-center text-[#ff4d2e] mb-6">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Entrepreneurship First
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Founding Think11 in 2020 taught me the ground realities of running a consumer product: real-time concurrency, customer trust, operational resilience, and relentless market execution.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-500">
              Venture Building • Patna HQ
            </div>
          </div>

          {/* Card 2: Technology & Product Depth */}
          <div className="founder-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Learning by Building
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I believe theory only goes so far. Every line of code, database schema, and mobile UI in my products is an experiment to discover what works, what scales, and what creates real utility for users.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-500">
              Rapid Prototyping • Code Craft
            </div>
          </div>

          {/* Card 3: Long-term Thinking */}
          <div className="founder-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Long-Term Compounding
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Incorporating IND Tech Mark in 2023 was a step toward institutionalizing high-quality technology solutions. We engineer sustainable digital products and software infrastructure built for endurance.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-500">
              Sustainable Value • Enterprise Tech
            </div>
          </div>

        </div>

        {/* Location & Geographic Root Note */}
        <div className="p-6 rounded-2xl bg-[#0c0e15] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff4d2e]" />
            <span className="text-sm font-medium text-zinc-200">
              Anchored in Patna, Bihar — Engineering for Global Standards
            </span>
          </div>
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-4">
            <span>Coordinates: {SITE_DATA.personal.coordinates}</span>
            <span>•</span>
            <span>Indian Technology Ecosystem</span>
          </div>
        </div>

      </div>
    </section>
  );
}
