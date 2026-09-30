import { ArrowUpRight, FolderGit2, GitFork, Star, Terminal } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import { GithubIcon } from "@/components/SocialIcons";

export default function GithubBuilder() {
  return (
    <section id="code" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bg-emerald-500/10 bottom-10 right-[-150px] opacity-[0.05]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
              <span className="text-[#ff4d2e]">05</span>
              <span>/</span>
              <span>OPEN SOURCE & ENGINEERING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Builder Footprint
            </h2>
            <p className="text-base sm:text-lg text-zinc-400">
              Verified public repositories and software architecture directly synced from the GitHub profile of Aman Singh.
            </p>
          </div>

          <a
            href="https://github.com/amanxthink11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141724] border border-white/[0.1] hover:border-[#ff4d2e] text-white text-xs font-mono hover:bg-[#1a1f30] transition-all self-start sm:self-auto"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>github.com/amanxthink11</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Terminal Header Bar */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0d14] overflow-hidden shadow-xl mb-10">
          <div className="px-4 py-3 bg-[#11131c] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-zinc-400">
                aman@think11-engine:~$ git status --builder
              </span>
            </div>
            <div className="text-[11px] font-mono text-zinc-500 hidden sm:block">
              PUBLIC REPOSITORIES • PATNA NODE
            </div>
          </div>

          {/* Repos Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SITE_DATA.githubRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#10121b] border border-white/[0.06] hover:border-[#ff4d2e]/40 hover:bg-[#151724] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-white font-mono font-semibold text-sm group-hover:text-[#ff7849] transition-colors">
                      <FolderGit2 className="w-4 h-4 text-[#ff4d2e]" />
                      <span className="truncate">{repo.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-[#ff7849]" />
                    <span>{repo.language || "TypeScript"}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-zinc-500" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-zinc-500" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Terminal Footer Bar */}
          <div className="px-6 py-4 bg-[#090a0f] border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>All repositories verified directly from GitHub API.</span>
            </div>
            <span className="text-zinc-600">Updated active registry</span>
          </div>
        </div>

      </div>
    </section>
  );
}
