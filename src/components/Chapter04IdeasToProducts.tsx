import { ArrowDown, ArrowUpRight, PlayCircle } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter04IdeasToProducts() {
  const { products } = SITE_DATA;

  const publishedUtilities = products.filter((p) => p.status === "Published Utility");
  const publishedGames = products.filter((p) => p.status === "Published Game");
  const conceptsAndExperiments = products.filter(
    (p) => p.status === "Product Concept" || p.status === "Engineering Experiment"
  );

  return (
    <section
      id="products"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="work" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 04 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Verified Creations
          </span>
        </div>

        {/* Chapter Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          From Ideas to Products
        </h2>

        {/* Story Intro */}
        <div className="mb-16 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          <p>
            An idea in your head is frictionless. It only becomes real when code meets users. Over the years, I&apos;ve built and released tools, games, and experiments—some published on mobile app stores, others living as open repositories or working prototypes. Each addresses a specific problem or explores a technical question.
          </p>
        </div>

        {/* 1. Group: Published Utilities (Editorial rows, not bulky cards) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Published Utilities · Google Play / Android</span>
          </div>

          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {publishedUtilities.map((item) => (
              <div key={item.id} className="py-8 group">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      {item.subtitle}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {item.status}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-3 max-w-3xl">
                  {item.description}
                </p>

                <p className="text-xs text-zinc-400 italic mb-4 max-w-2xl border-l border-white/20 pl-3">
                  Why it was built: &ldquo;{item.storyNote}&rdquo;
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
                    {item.platform}
                  </span>
                  <span>•</span>
                  <span>Verified Utility</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Group: Published Game */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-semibold tracking-wider uppercase text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Published Game · Google Play / Android</span>
          </div>

          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {publishedGames.map((item) => (
              <div key={item.id} className="py-8 group">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      {item.subtitle}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {item.status}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-3 max-w-3xl">
                  {item.description}
                </p>

                <p className="text-xs text-zinc-400 italic mb-4 max-w-2xl border-l border-white/20 pl-3">
                  Why it was built: &ldquo;{item.storyNote}&rdquo;
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <PlayCircle className="w-3.5 h-3.5 text-amber-400" />
                    {item.platform}
                  </span>
                  <span>•</span>
                  <span>Spatial Reasoning &amp; Logic</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Group: Concepts & Experiments */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-semibold tracking-wider uppercase text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Product Concepts &amp; Engineering Experiments</span>
          </div>

          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {conceptsAndExperiments.map((item) => (
              <div key={item.name} className="py-6 group flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-[#ff7849] transition-colors">
                      {item.name}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        item.status === "Product Concept"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : "bg-purple-500/10 text-purple-300 border-purple-500/20"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-2">
                    {item.description}
                  </p>

                  <p className="text-xs text-zinc-500 italic">
                    Note: {item.storyNote}
                  </p>
                </div>

                {item.githubUrl && (
                  <div className="flex-shrink-0">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-all text-xs font-mono"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Bridge to Chapter 05 */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex items-center justify-end">
          <a
            href="#building-in-public"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Next: Building in Public</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
