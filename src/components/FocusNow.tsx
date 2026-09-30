import { Bot, CloudCog, Cpu, Gauge, Layers, Sparkles, Smartphone, Workflow, Zap } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function FocusNow() {
  const focusAreas = [
    {
      title: "AI",
      action: "Exploring",
      actionStyle: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      dotColor: "bg-purple-400",
      description:
        "Intelligent automation, structured agentic workflows, and LLM-assisted tools designed to eliminate operational bottlenecks.",
    },
    {
      title: "SaaS",
      action: "Building",
      actionStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      dotColor: "bg-emerald-400",
      description:
        "Scalable multi-tenant cloud platforms, subscription billing infrastructure, and high-reliability software services.",
    },
    {
      title: "Sports Technology",
      action: "Experimenting",
      actionStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      dotColor: "bg-amber-400",
      description:
        "Real-time cricket scoring engines, live match data pipelines, and interactive tournament engagement systems.",
    },
    {
      title: "Mobile Utilities",
      action: "Building",
      actionStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      dotColor: "bg-emerald-400",
      description:
        "Pragmatic, lightweight Android tools (such as CardLedger and MDR Calculator) built to solve everyday calculation friction.",
    },
    {
      title: "Enterprise Technology",
      action: "Building",
      actionStyle: "bg-[#ff4d2e]/10 text-[#ff8a65] border-[#ff4d2e]/30",
      dotColor: "bg-[#ff4d2e]",
      description:
        "Modern web and app engineering, digital transformations, and scalable client systems delivered through IND Tech Mark.",
    },
    {
      title: "Automation",
      action: "Experimenting",
      actionStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      dotColor: "bg-amber-400",
      description:
        "Automated content pipelines, webhook syndication workflows, and smart distribution systems for marketing efficiency.",
    },
  ];

  return (
    <section id="focus" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c] overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">06</span>
            <span>/</span>
            <span>TECHNICAL HORIZONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What I&apos;m Building Now
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Current technical disciplines, software experiments, and venture exploration areas where I actively invest engineering time.
          </p>
        </div>

        {/* Elegant Focus Areas Grid (Editorial list, not repetitive bulky cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#0c0e15] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff8a65] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${item.actionStyle}`}
                  >
                    {item.action}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-600">
                <span>Active Domain</span>
                <span className="text-zinc-500">Aman Singh Lab</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
