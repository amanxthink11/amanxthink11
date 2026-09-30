import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Building2, Code2 } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle cinematic ambient glows */}
      <div className="ambient-glow w-[500px] h-[500px] bg-[#ff4d2e] top-[-100px] left-1/2 -translate-x-1/2 opacity-[0.08]" />
      <div className="ambient-glow w-[400px] h-[400px] bg-[#f59e0b] bottom-10 right-[-100px] opacity-[0.05]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12141d] border border-white/[0.08] text-xs font-medium text-zinc-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span>Patna, Bihar, India</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Founder & Builder</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Building ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ff7849]">
                reality.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal mb-8 max-w-xl">
              I&apos;m <span className="text-white font-medium">Aman Singh</span>, a technology entrepreneur and builder from Patna, Bihar. I build companies, products and technology around ideas that solve real problems.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#ventures"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium text-sm shadow-lg shadow-[#ff4d2e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#141724] border border-white/[0.12] text-zinc-200 hover:text-white hover:bg-[#1a1e2f] hover:border-white/[0.2] font-medium text-sm transition-all"
              >
                <span>Let&apos;s connect</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Quick Micro-Credentials */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/[0.08]">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Venture 01</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#ff4d2e]" />
                  Think11 (2020)
                </span>
                <span className="text-[11px] text-zinc-400">Sports Technology</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Venture 02</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#ff4d2e]" />
                  IND Tech Mark
                </span>
                <span className="text-[11px] text-zinc-400">CEO & Co-Founder</span>
              </div>

              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Discipline</span>
                <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 mt-0.5">
                  <Code2 className="w-3.5 h-3.5 text-[#ff4d2e]" />
                  Product Studio
                </span>
                <span className="text-[11px] text-zinc-400">Software & Apps</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Founder Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ff4d2e]/30 via-white/[0.05] to-[#f59e0b]/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl bg-[#0f1118] border border-white/[0.12] overflow-hidden shadow-2xl p-2.5">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#090a0f]">
                  <Image
                    src={SITE_DATA.personal.avatar}
                    alt="Aman Singh - Technology Entrepreneur and Founder"
                    width={460}
                    height={460}
                    priority
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Meta Card inside image border */}
                <div className="p-3.5 mt-2 bg-[#12141e]/90 rounded-xl border border-white/[0.06] backdrop-blur-md">
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
                    <span>Patna, Bihar, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
