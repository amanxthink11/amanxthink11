import { ArrowDown, ArrowUpRight, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter05BuildingInPublic() {
  const { github } = SITE_DATA;

  return (
    <section
      id="building-in-public"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="github" className="absolute -top-24 pointer-events-none" />
      <span id="builder" className="absolute -top-24 pointer-events-none" />
      <span id="code" className="absolute -top-24 pointer-events-none" />

      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bg-blue-500/10 bottom-10 right-[-140px] opacity-[0.05]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 05 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Open Source &amp; Repositories
          </span>
        </div>

        {/* Section Header with exact requested message */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Building in Public
            </h2>

            {/* Core Message Hook */}
            <p className="text-xl sm:text-2xl font-serif italic text-zinc-200 mb-4">
              &ldquo;{github.tagline}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              {github.narrative}
            </p>
          </div>

          {/* Requested Prominent CTA */}
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#141724] border border-white/[0.12] hover:border-[#ff4d2e] text-white text-sm font-medium hover:bg-[#1a1f30] transition-all self-start sm:self-auto shadow-md flex-shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>Explore my GitHub →</span>
          </a>
        </div>

        {/* Verified Repositories Ledger (Refined editorial list) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {github.repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3">
                <FolderGit2 className="w-4 h-4 text-[#ff4d2e] mt-1 sm:mt-0 flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-semibold text-white group-hover:text-[#ff7849] transition-colors">
                      {repo.name}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      /{repo.language}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                    {repo.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors self-end sm:self-center">
                <span>View Code</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Narrative Bridge to Chapter 06 */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex items-center justify-end">
          <a
            href="#things-learned"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Next: Things I&apos;ve Learned</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
