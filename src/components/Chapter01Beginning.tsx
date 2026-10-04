import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter01Beginning() {
  return (
    <section
      id="beginning"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="hero" className="absolute -top-24 pointer-events-none" />
      <span id="about" className="absolute -top-24 pointer-events-none" />

      {/* Subtle warm ambient lighting */}
      <div className="ambient-glow w-[520px] h-[520px] bg-[#ff4d2e] top-[-100px] left-1/2 -translate-x-1/2 opacity-[0.08]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Chapter Indicator with subtle editorial line */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 01 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            The Beginning
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Human Story Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Building ideas <br className="hidden sm:inline" />
              into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2e] via-[#ff6e4d] to-[#ffaa75]">
                reality.
              </span>
            </h1>

            {/* Human Introduction */}
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-8 max-w-xl">
              <p>
                I&apos;m <span className="text-white font-medium">Aman Singh</span> — a founder, builder and technology entrepreneur from Patna, Bihar.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I have always believed that the best way to understand the world is to build things for it. Not to sit on the sidelines, not to analyze from a distance, but to take a raw idea, write the first lines of code, assemble a team, and see what happens when real people interact with what you’ve made.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#first-bet"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium text-sm shadow-lg shadow-[#ff4d2e]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Start the journey</span>
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

            {/* Quick 10-Second Orientation (WHO, WHAT, WHERE, WHAT HE BUILT) */}
            <div className="w-full pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff4d2e]" />
                <span>Patna, Bihar, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Founder @ Think11 · CEO @ IND Tech Mark</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Founder Portrait (No AI, Dignified Frontispiece) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Subtle warm backlight */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ff4d2e]/20 via-transparent to-amber-500/10 rounded-3xl blur-xl opacity-60 pointer-events-none" />

              {/* Dignified Photographic Plate */}
              <div className="relative rounded-2xl bg-[#0c0e15] border border-white/[0.12] overflow-hidden p-3 shadow-2xl max-w-full">
                <div className="relative aspect-square w-full max-w-full rounded-xl overflow-hidden bg-[#090a0f]">
                  <Image
                    src={SITE_DATA.personal.avatar}
                    alt="Aman Singh - Technology Entrepreneur and Founder"
                    width={460}
                    height={460}
                    priority
                    fetchPriority="high"
                    className="w-full h-full max-w-full object-cover object-center grayscale-[12%] hover:grayscale-0 transition-all duration-500"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Portrait Caption */}
                <div className="mt-3 p-3 bg-[#11131d]/90 rounded-xl border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white tracking-wide">
                      {SITE_DATA.personal.name}
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      Founder & Technology Builder
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-[#ff4d2e]/10 border border-[#ff4d2e]/30 text-[11px] font-mono text-[#ff8a65]">
                    Patna, Bihar
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
