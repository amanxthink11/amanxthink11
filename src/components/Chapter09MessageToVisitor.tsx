import { ArrowDown, Flame } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter09MessageToVisitor() {
  const { messageToVisitor } = SITE_DATA;

  return (
    <section
      id="message"
      className="py-28 sm:py-40 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="gratitude" className="absolute -top-24 pointer-events-none" />

      {/* Subtle warm center glow */}
      <div className="ambient-glow w-[550px] h-[550px] bg-[#ff4d2e] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 09 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Personal Note
          </span>
        </div>

        {/* Chapter Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          {messageToVisitor.title}
        </h2>

        {/* Warm Personal Opener */}
        <p className="text-xl sm:text-2xl font-serif italic text-zinc-200 mb-8 leading-snug">
          &ldquo;{messageToVisitor.opener}&rdquo;
        </p>

        {/* Narrative Flow (Humble, confident, human, curious) */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          {messageToVisitor.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Closing Motto Inset (Emotional centerpiece) */}
        <div className="mt-14 p-8 sm:p-12 rounded-2xl bg-[#0c0e16]/90 border border-white/[0.08] text-center relative shadow-2xl">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ff4d2e]/10 border border-[#ff4d2e]/30 text-[#ff4d2e] mb-4">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            &ldquo;{messageToVisitor.closingMotto}&rdquo;
          </blockquote>

          <div className="flex flex-col items-center justify-center pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
            <span className="text-white font-medium text-sm">
              {messageToVisitor.signature}
            </span>
            <span className="text-zinc-500 mt-0.5">
              {messageToVisitor.signatureLocation}
            </span>
          </div>
        </div>

        {/* Narrative Bridge to Chapter 10 */}
        <div className="mt-12 pt-6 flex items-center justify-center">
          <a
            href="#connect"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Final Chapter: Let&apos;s Connect</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
