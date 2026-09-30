import { ArrowUpRight, Building2, Globe, Shield, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

export default function Ventures() {
  const ventures = [
    {
      id: "think11",
      name: "Think11",
      badge: "HISTORICAL FOUNDATION",
      badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      accentBorder: "group-hover:border-amber-500/40",
      glowColor: "rgba(245, 158, 11, 0.08)",
      role: "Founder",
      period: "Founded 2020",
      status: "Historical Foundation",
      tagline: "Sports technology, contest mechanisms, and the beginning of my founder journey.",
      description:
        "Think11 was founded in 2020 as an interactive sports-technology platform. It provided intensive foundational experience in handling live match concurrency, consumer engagement mechanics, and cloud backend architecture.",
      note: "Historical foundation project; not operating as a real-money fantasy gaming platform.",
      tags: ["Sports Tech", "Fantasy Sports", "High-Concurrency", "Mobile Gaming"],
      url: "https://www.think11.in",
      linkedinUrl: "https://www.linkedin.com/company/think11app",
    },
    {
      id: "indtechmark",
      name: "IND Tech Mark",
      badge: "ACTIVE ENTERPRISE",
      badgeStyle: "bg-[#ff4d2e]/10 text-[#ff8a65] border-[#ff4d2e]/40 shadow-sm shadow-[#ff4d2e]/20",
      accentBorder: "group-hover:border-[#ff4d2e]/50 border-white/[0.12]",
      glowColor: "rgba(255, 77, 46, 0.12)",
      role: "CEO & Co-Founder",
      period: "2023 – Present (Active since 2021)",
      status: "Active Enterprise",
      tagline: "Building software, digital products, and technology solutions for businesses.",
      description:
        "IND Tech Mark Private Limited is a registered software development and technology enterprise incorporated in Patna, Bihar. Operates as an engineering partner delivering enterprise web applications, mobile software, SaaS products, and digital technology consultancy.",
      note: "Formally incorporated November 28, 2023 (ROC Patna). Headquartered in Patna, Bihar.",
      tags: ["Software Engineering", "Web & Mobile", "SaaS Development", "Enterprise Tech", "Patna HQ"],
      url: "https://indtechmark.com",
      linkedinUrl: "https://www.linkedin.com/company/indtechmark",
    },
  ];

  return (
    <section id="ventures" className="py-20 md:py-28 relative border-t border-white/[0.06] overflow-hidden scroll-mt-20">
      {/* Subtle ambient lighting */}
      <div className="ambient-glow w-[550px] h-[550px] bg-[#ff4d2e] top-1/4 left-[-150px] opacity-[0.06]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">03</span>
            <span>/</span>
            <span>FLAGSHIP VENTURES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Ventures
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            The core enterprises founded and led by Aman Singh—the historical sports-tech roots with Think11 and active technology operations with IND Tech Mark.
          </p>
        </div>

        {/* 2 Flagship Venture Cards - Substantially Larger & Distinct */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {ventures.map((venture) => (
            <div
              key={venture.id}
              className={`p-7 sm:p-9 rounded-2xl bg-[#0c0e16] border transition-all duration-300 relative group flex flex-col justify-between ${venture.accentBorder}`}
              style={{
                boxShadow: `0 10px 30px -15px ${venture.glowColor}`,
              }}
            >
              <div>
                {/* Header with Title & Requested Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white">
                      <Building2 className="w-6 h-6 text-[#ff4d2e]" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {venture.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">
                        {venture.period}
                      </span>
                    </div>
                  </div>

                  {/* Required Exact Badges */}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide border ${venture.badgeStyle}`}
                  >
                    {venture.badge}
                  </span>
                </div>

                {/* Quoted Tagline */}
                <p className="text-base sm:text-lg font-medium text-zinc-200 border-l-2 border-[#ff4d2e] pl-4 py-1 mb-5 leading-snug">
                  &ldquo;{venture.tagline}&rdquo;
                </p>

                {/* Role & Status Pill */}
                <div className="flex items-center gap-2 mb-4 text-xs font-mono">
                  <span className="text-white font-semibold">{venture.role}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400">{venture.status}</span>
                </div>

                {/* Short Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {venture.description}
                </p>

                {/* Compliance / Clarification Note */}
                <p className="text-xs text-zinc-500 italic mb-6">
                  {venture.note}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {venture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-[#ff4d2e] text-white text-xs font-semibold tracking-wide transition-all border border-white/[0.1] hover:border-[#ff4d2e]"
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
