import { ArrowUpRight, Calculator, Compass, Gamepad2, Layers, PlayCircle, Smartphone, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function SelectedProducts() {
  const featuredProducts = [
    {
      id: "cardledger",
      name: "CardLedger",
      category: "Utility & Finance",
      status: "Published Utility",
      oneLiner:
        "Precision round-based score ledger for card games like Call Break, eliminating manual calculation errors with an offline-first audit trail.",
      platform: "Google Play / Android",
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      statusBadge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "mdr-calc",
      name: "MDR Calculator",
      category: "Utility & Finance",
      status: "Published Utility",
      oneLiner:
        "Financial utility helping merchants and businesses across India calculate exact MDR deductions, interchange fees, and net settlement revenues.",
      platform: "Google Play / Android",
      icon: <Calculator className="w-5 h-5 text-[#ff8a65]" />,
      statusBadge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "arrowzen",
      name: "ArrowZen",
      category: "Gaming & Logic",
      status: "Published Game",
      oneLiner:
        "Minimalist spatial reasoning and directional logic puzzle game published on Google Play with clean acoustic feedback and progressive difficulty.",
      platform: "Google Play / Android",
      icon: <Gamepad2 className="w-5 h-5 text-amber-400" />,
      statusBadge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
  ];

  const secondaryProducts = [
    {
      name: "ThinkScore / StumpTalk",
      category: "Sports Tech",
      status: "Product Concept",
      oneLiner:
        "Live cricket tournament scoring engine and real-time match analytics concept for amateur leagues and academies.",
      platform: "Concept & Open Source",
      link: "https://github.com/amanxthink11/stumptalk",
      isGithub: true,
      statusBadge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      name: "IND Analytics",
      category: "Analytics & SaaS",
      status: "Engineering Experiment",
      oneLiner:
        "Lightweight, cookieless web analytics experiment capturing essential visitor trends without tracking cookies.",
      platform: "Experiment / GitHub",
      link: "https://github.com/amanxthink11/ind-analytics",
      isGithub: true,
      statusBadge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    },
    {
      name: "Publicity Poster",
      category: "Automation & Marketing",
      status: "Engineering Experiment",
      oneLiner:
        "Marketing automation experiment exploring AI-driven media generation pipelines and scheduled social syndication.",
      platform: "Experiment / GitHub",
      link: "https://github.com/amanxthink11/publicity-poster",
      isGithub: true,
      statusBadge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c] overflow-hidden scroll-mt-20">
      {/* Target anchor for legacy #products links */}
      <span id="products" className="absolute -top-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">04</span>
            <span>/</span>
            <span>EDITORIAL PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Products
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A curated portfolio of verified published utilities, mobile games, and engineering experiments developed by Aman Singh and the IND Tech Mark product lab.
          </p>
        </div>

        {/* 1. Featured Products: 3 Larger Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c0e15] border border-white/[0.08] hover:border-[#ff4d2e]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                    {product.icon}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${product.statusBadge}`}
                  >
                    {product.status}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#ff8a65] transition-colors mb-2.5">
                  {product.name}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {product.oneLiner}
                </p>
              </div>

              {/* Platform Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <PlayCircle className="w-3.5 h-3.5 text-[#ff4d2e]" />
                  {product.platform}
                </span>
                <span className="text-[11px] text-zinc-500">Verified App</span>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Secondary Projects: Sleek Compact Editorial Rows */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e16] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-base font-bold text-white font-mono tracking-tight uppercase">
                Secondary Products & Engineering Experiments
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Concepts and open repositories under active experimentation
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500 hidden sm:block">
              3 Projects
            </span>
          </div>

          <div className="divide-y divide-white/[0.04]">
            {secondaryProducts.map((proj) => (
              <div
                key={proj.name}
                className="py-4 first:pt-2 last:pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-base font-semibold text-white group-hover:text-[#ff7849] transition-colors">
                      {proj.name}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border ${proj.statusBadge}`}
                    >
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {proj.oneLiner}
                  </p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 text-xs font-mono">
                  <span className="text-zinc-500 text-[11px]">
                    {proj.platform}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-[#ff4d2e] text-zinc-300 hover:text-white transition-all text-xs font-medium"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
