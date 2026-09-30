import { ArrowUpRight, Compass, Gamepad2, Layers, PlayCircle, Smartphone, Terminal, Sparkles } from "lucide-react";
import { SITE_DATA, Product } from "@/data/site-data";
import { GithubIcon } from "@/components/SocialIcons";

export default function SelectedProducts() {
  return (
    <section id="products" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">04</span>
            <span>/</span>
            <span>PRODUCT FOOTPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Products
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A verified portfolio of published mobile utilities, games, software concepts, and open-source experiments built by Aman Singh and the IND Tech Mark team.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SITE_DATA.products.map((product) => {
            const getIcon = (category: string) => {
              switch (category) {
                case "Sports Tech":
                  return <Layers className="w-5 h-5 text-[#ff4d2e]" />;
                case "Gaming & Logic":
                  return <Gamepad2 className="w-5 h-5 text-amber-400" />;
                case "Utility & Finance":
                  return <Smartphone className="w-5 h-5 text-emerald-400" />;
                default:
                  return <Compass className="w-5 h-5 text-sky-400" />;
              }
            };

            const getStatusBadge = (status: string) => {
              switch (status) {
                case "Published Utility":
                  return (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Published Utility
                    </span>
                  );
                case "Published Game":
                  return (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Published Game
                    </span>
                  );
                case "Product Concept":
                  return (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Product Concept
                    </span>
                  );
                default:
                  return (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      Experiment
                    </span>
                  );
              }
            };

            return (
              <div
                key={product.id}
                className="founder-card p-7 flex flex-col justify-between group hover:border-[#ff4d2e]/40 transition-all duration-300"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                        {getIcon(product.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#ff7849] transition-colors">
                          {product.name}
                        </h3>
                        <span className="text-xs font-medium text-zinc-400">
                          {product.subtitle}
                        </span>
                      </div>
                    </div>

                    {getStatusBadge(product.status)}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141724] text-zinc-400 border border-white/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with platform & external links */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {product.platform}
                  </span>

                  <div className="flex items-center gap-3">
                    {product.githubUrl && (
                      <a
                        href={product.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </a>
                    )}
                    {product.platform.includes("Google Play") && (
                      <span className="inline-flex items-center gap-1 text-zinc-400 text-[11px] font-mono">
                        <PlayCircle className="w-3.5 h-3.5 text-zinc-400" />
                        Google Play
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
