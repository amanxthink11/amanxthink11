import { Bot, CloudCog, Cpu, Gauge, Layers, Sparkles, TrendingUp, Zap } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function FocusNow() {
  const focusItems = [
    {
      title: "AI & Autonomous Systems",
      icon: <Bot className="w-5 h-5 text-[#ff4d2e]" />,
      description: "Developing workflows integrating large language models, structured agents, and automation pipelines for content, marketing, and customer insights.",
      highlight: "Active Exploration",
    },
    {
      title: "SaaS & Cloud Platforms",
      icon: <CloudCog className="w-5 h-5 text-amber-400" />,
      description: "Engineering robust, scalable software architectures, subscription toolings, multi-tenant databases, and privacy-conscious analytics engines.",
      highlight: "Core Architecture",
    },
    {
      title: "Sports Technology & Live Data",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      description: "Continuing the sports-tech domain journey from Think11 with low-latency scoring feeds, cricket tournament engines, and fan engagement apps.",
      highlight: "Domain Expertise",
    },
    {
      title: "Mobile Apps & Utility Software",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      description: "Shipping pragmatic Android utilities and logic games (e.g. CardLedger, MDR Calculator, ArrowZen) to solve everyday consumer and merchant needs.",
      highlight: "Google Play Footprint",
    },
    {
      title: "Enterprise Digital Products",
      icon: <Gauge className="w-5 h-5 text-violet-400" />,
      description: "Scaling client technology implementations through IND Tech Mark across web, mobile, SEO, and bespoke business infrastructure.",
      highlight: "Commercial Operations",
    },
    {
      title: "Workflow Automation",
      icon: <Sparkles className="w-5 h-5 text-rose-400" />,
      description: "Eliminating repetitive human tasks through intelligent API bridging, webhooks, and streamlined internal tooling.",
      highlight: "Operational Efficiency",
    },
  ];

  return (
    <section id="focus" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">06</span>
            <span>/</span>
            <span>CURRENT TRAJECTORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What I&apos;m Building Now
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A real-time overview of current technical disciplines, product experiments, and venture directions occupying my focus.
          </p>
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusItems.map((item) => (
            <div
              key={item.title}
              className="founder-card p-6 flex flex-col justify-between group hover:border-[#ff4d2e]/30"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wide uppercase bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff7849] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d2e]" />
                <span>Active Research & Execution</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
