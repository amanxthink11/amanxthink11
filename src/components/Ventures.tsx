import { ArrowUpRight, Building2, Globe, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import { LinkedinIcon } from "@/components/SocialIcons";

export default function Ventures() {
  return (
    <section id="ventures" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="ambient-glow w-[600px] h-[600px] bg-[#ff4d2e] top-1/3 left-[-200px] opacity-[0.06]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">03</span>
            <span>/</span>
            <span>CORE ENTERPRISES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Ventures
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            The two flagship entities founded and led by Aman Singh—bridging consumer sports gaming and scalable enterprise technology solutions.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SITE_DATA.ventures.map((venture) => (
            <div
              key={venture.id}
              className="founder-card p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top ambient highlight inside card */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: venture.accentColor }}
              />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                      <Building2 className="w-5 h-5 text-[#ff4d2e]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {venture.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">
                        {venture.period}
                      </span>
                    </div>
                  </div>

                  <span className="founder-pill text-xs">
                    {venture.role}
                  </span>
                </div>

                {/* Quoted Tagline */}
                <blockquote className="text-base sm:text-lg font-medium text-zinc-200 border-l-2 border-[#ff4d2e] pl-4 py-1 mb-5 leading-snug">
                  &ldquo;{venture.tagline}&rdquo;
                </blockquote>

                {/* Detailed Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {venture.description}
                </p>

                <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                  {venture.longDescription}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {venture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#161926] text-zinc-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-[#ff4d2e] text-white hover:text-white text-xs font-semibold tracking-wide transition-all border border-white/[0.1] hover:border-[#ff4d2e]"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit {venture.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={venture.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400 hover:text-[#0077b5]" />
                  <span>Company LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
