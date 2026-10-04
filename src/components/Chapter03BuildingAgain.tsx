import { ArrowDown, ArrowUpRight, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { SITE_DATA } from "@/data/site-data";

export default function Chapter03BuildingAgain() {
  const { indTechMark } = SITE_DATA;

  return (
    <section
      id="building-again"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="indtechmark" className="absolute -top-24 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="ambient-glow w-[520px] h-[520px] bg-[#ff4d2e] top-1/3 left-[-140px] opacity-[0.05]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 03 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Building Again · {indTechMark.period}
          </span>
        </div>

        {/* Chapter Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          IND Tech Mark: From Hunger to Discipline
        </h2>

        {/* Editorial Pull Quote */}
        <blockquote className="border-l-2 border-[#ff4d2e] pl-5 sm:pl-6 my-10 text-xl sm:text-2xl font-serif italic text-zinc-200 leading-snug">
          &ldquo;{indTechMark.hook}&rdquo;
        </blockquote>

        {/* Story Narrative (Editorial prose, not a corporate service grid) */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          <p>
            Starting a company teaches you hunger; sustaining one teaches you discipline. After Think11, I knew I didn&apos;t just want to build a single product. I wanted to build a technology engine—a resilient environment where we could repeatedly turn ambitious concepts into dependable, production-ready software.
          </p>

          <p>
            In 2021, we kicked off technology operations that steadily expanded in scale and complexity, leading to the formal incorporation of <strong>IND Tech Mark Private Limited</strong> in Patna on November 28, 2023.
          </p>

          <p>
            IND Tech Mark is our active technology enterprise. Rather than operating like a traditional corporate services firm, we run it as an engineering laboratory and software consultancy. On one side, we architect scalable web platforms, cross-platform mobile apps, cloud backends, and workflow automations for companies that need airtight execution. On the other, it serves as an incubator for our own software experiments, Android utilities, and SaaS concepts.
          </p>

          <p className="text-zinc-400">
            Headquartering the company in Patna, Bihar is an intentional conviction. You do not need to be in Silicon Valley or Bengaluru to build high-standard technology. With curiosity, rigor, and respect for the craft, impactful software can be engineered from anywhere.
          </p>
        </div>

        {/* Active Technology Disciplines (Minimalist editorial badges) */}
        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Active Disciplines
          </div>
          <div className="flex flex-wrap gap-2.5">
            {indTechMark.disciplines.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-zinc-300 hover:border-[#ff4d2e]/40 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Links & Narrative Bridge */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              href={indTechMark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#ff7849] transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span className="font-medium">indtechmark.com</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <span className="text-zinc-700">•</span>

            <a
              href={indTechMark.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>IND Tech Mark Profile</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>
          </div>

          <a
            href="#products"
            className="hidden sm:inline-flex items-center gap-1 text-[#ff7849] hover:text-[#ffaa75] transition-colors"
          >
            <span>Next: Ideas to Products</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
