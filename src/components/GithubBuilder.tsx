import { ArrowRight, ArrowUpRight, FolderGit2, Terminal, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function GithubBuilder() {
  const verifiedRepos = [
    {
      name: "stumptalk",
      description: "Cricket scores, tournament intelligence, and real-time match analytics platform.",
      language: "TypeScript",
      langColor: "bg-blue-400",
      url: "https://github.com/amanxthink11/stumptalk",
    },
    {
      name: "ind-analytics",
      description: "Privacy-focused, cookieless web analytics experiment designed for fast, respectful metric tracking.",
      language: "JavaScript",
      langColor: "bg-amber-400",
      url: "https://github.com/amanxthink11/ind-analytics",
    },
    {
      name: "publicity-poster",
      description: "AI-powered social media poster and automated marketing workflow syndication engine.",
      language: "TypeScript",
      langColor: "bg-blue-400",
      url: "https://github.com/amanxthink11/publicity-poster",
    },
    {
      name: "portfolio",
      description: "Personal founder website, engineering portfolio, and single-page digital headquarters.",
      language: "TypeScript",
      langColor: "bg-blue-400",
      url: "https://github.com/amanxthink11/portfolio",
    },
    {
      name: "amanxthink11",
      description: "Public engineering profile, open-source trajectory, and technology architecture roadmap.",
      language: "Markdown / Docs",
      langColor: "bg-emerald-400",
      url: "https://github.com/amanxthink11/amanxthink11",
    },
  ];

  return (
    <section id="builder" className="py-20 md:py-28 relative border-t border-white/[0.06] overflow-hidden scroll-mt-20">
      {/* Target anchor for legacy #code links */}
      <span id="code" className="absolute -top-24" />

      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bg-emerald-500/10 bottom-10 right-[-150px] opacity-[0.05]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact requested Headline & Supporting Text */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
              <span className="text-[#ff4d2e]">05</span>
              <span>/</span>
              <span>ENGINEERING PROOF</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Built in public.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400">
              Selected projects and experiments from my engineering work.
            </p>
          </div>

          {/* Requested Prominent CTA */}
          <a
            href="https://github.com/amanxthink11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141724] border border-white/[0.12] hover:border-[#ff4d2e] text-white text-sm font-medium hover:bg-[#1a1f30] transition-all self-start sm:self-auto shadow-md"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>View GitHub →</span>
          </a>
        </div>

        {/* Repositories Visual Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verifiedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#0c0e16] border border-white/[0.08] hover:border-[#ff4d2e]/50 hover:bg-[#111420] transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-white font-mono font-semibold text-sm group-hover:text-[#ff7849] transition-colors">
                    <FolderGit2 className="w-4 h-4 text-[#ff4d2e]" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </div>

                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-5">
                  {repo.description}
                </p>
              </div>

              {/* Language Footer (No meaningless 0 stats) */}
              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <span className="text-[11px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Open Repository
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
