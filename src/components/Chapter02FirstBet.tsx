import { ArrowDown, ArrowUpRight, Flame, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter02FirstBet() {
  const { think11 } = SITE_DATA;

  return (
    <section
      id="first-bet"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="think11" className="absolute -top-24 pointer-events-none" />
      <span id="ventures" className="absolute -top-24 pointer-events-none" />

      {/* Subtle ambient warm lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bg-amber-500/10 top-1/4 right-[-120px] opacity-[0.06]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 02 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            The First Bet · {think11.year}
          </span>
        </div>

        {/* Chapter Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Think11 &amp; The Crucible of Concurrency
        </h2>

        {/* Editorial Pull Quote */}
        <blockquote className="border-l-2 border-[#ff4d2e] pl-5 sm:pl-6 my-10 text-xl sm:text-2xl font-serif italic text-zinc-200 leading-snug">
          &ldquo;Every founder remembers the first time they put something of their own on the line.&rdquo;
        </blockquote>

        {/* Narrative Flow (Personal story, not a company card) */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          <p>
            In 2020, sports and digital technology were colliding across India with unprecedented velocity. Hundreds of millions of people lived and breathed cricket every single evening, but the digital experience was largely passive. I wanted to build something dynamic—an interactive platform where game intelligence, fan intuition, and real-time contest engagement met. That conviction became <strong>Think11</strong>.
          </p>

          <p>
            Building Think11 was an unforgiving masterclass. It was my first true venture into high-concurrency systems. When the match toss happened at 7:00 PM, hundreds of thousands of users rushed into contests in a matter of seconds. I had to learn how databases choke under write pressure, how payment gateways fail during peak traffic, how milliseconds of latency trigger user panic, and how real-time fraud mitigation must work without breaking user trust.
          </p>

          <p>
            More than the server architecture, Think11 taught me about entrepreneurship in its rawest form: recruiting developers when you are just getting started, sitting with customer support past midnight during IPL tournaments, listening to frustrated users, and taking personal, undivided accountability whenever something broke.
          </p>
        </div>

        {/* Historical Context Callout (Editorial memoir framing, not a corporate badge) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0c0e16]/80 border border-white/[0.08] relative">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Foundational Chapter · Historical Context</span>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            {think11.clarification}
          </p>

          {/* Key Lessons Learned */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              High-Concurrency Architecture
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              Live Payment Pipelines
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              Crisis Leadership
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              Customer Experience
            </span>
          </div>
        </div>

        {/* Verification Links */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              href={think11.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-500" />
              <span>Think11.in</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>

            <span className="text-zinc-700">•</span>

            <a
              href={think11.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>Think11 Profile</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>
          </div>

          <a
            href="#building-again"
            className="hidden sm:inline-flex items-center gap-1 text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Next: Building Again</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
