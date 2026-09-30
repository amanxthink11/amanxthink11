import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Building2, Code2 } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-between pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden"
    >
      {/* Cinematic subtle ambient lighting behind elements */}
      <div className="ambient-glow w-[550px] h-[550px] bg-[#ff4d2e] top-[-120px] left-1/2 -translate-x-1/2 opacity-[0.09]" />
      <div className="ambient-glow w-[450px] h-[450px] bg-[#f59e0b] top-1/3 right-[-120px] opacity-[0.06]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Concise Narrative & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-widest uppercase text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff4d2e] animate-pulse" />
              <span>FOUNDER · BUILDER · TECHNOLOGY</span>
            </div>

            {/* Large Cinematic Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Building ideas <br className="hidden sm:inline" />
              into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2e] via-[#ff6b4a] to-[#ffaa75]">
                reality.
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed font-normal mb-8 max-w-xl">
              I&apos;m <span className="text-white font-medium">Aman Singh</span>, a technology entrepreneur and builder based in Patna, Bihar. I build companies, software, and products around ideas that solve real problems.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium text-sm shadow-lg shadow-[#ff4d2e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#connect"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#141724] border border-white/[0.12] text-zinc-200 hover:text-white hover:bg-[#1a1e2f] hover:border-white/[0.2] font-medium text-sm transition-all"
              >
                <span>Let&apos;s connect</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Micro-Credentials Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg pt-6 border-t border-white/[0.08]">
              <div className="flex flex-col">
                <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">Foundation</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#ff4d2e]" />
                  Think11 (2020)
                </span>
                <span className="text-[11px] text-zinc-400">Sports Tech Venture</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">Enterprise</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#ff4d2e]" />
                  IND Tech Mark
                </span>
                <span className="text-[11px] text-zinc-400">CEO & Co-Founder</span>
              </div>

              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">Discipline</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 mt-0.5">
                  <Code2 className="w-3.5 h-3.5 text-[#ff4d2e]" />
                  Product Studio
                </span>
                <span className="text-[11px] text-zinc-400">Software & Utilities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Founder Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Subtle restrained ambient backlight behind the card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff4d2e]/25 via-white/[0.03] to-[#f59e0b]/15 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              {/* Portrait Card */}
              <div className="relative rounded-2xl bg-[#0e1017] border border-white/[0.12] overflow-hidden shadow-2xl p-2.5">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#090a0f]">
                  <Image
                    src={SITE_DATA.personal.avatar}
                    alt="Aman Singh - Technology Entrepreneur and Founder"
                    width={460}
                    height={460}
                    priority
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-50" />
                </div>

                {/* Metadata Hierarchy */}
                <div className="p-3.5 mt-2 bg-[#12141e]/95 rounded-xl border border-white/[0.06] backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white tracking-wide">
                        {SITE_DATA.personal.name}
                      </div>
                      <div className="text-xs text-zinc-400">
                        Aman Kumar Singh
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-[#ff4d2e]/10 border border-[#ff4d2e]/30 text-[11px] font-medium text-[#ff8a65]">
                      Active Founder
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#ff7849]" />
                      Technology & Products
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      Patna, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator at the bottom */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors"
          aria-label="Scroll to about section"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-[#ff4d2e] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
