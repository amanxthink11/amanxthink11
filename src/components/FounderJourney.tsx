import { Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function FounderJourney() {
  const milestones = [
    {
      year: "2020",
      title: "Think11 Begins",
      role: "Founder",
      narrative:
        "Ventured into sports technology and fantasy sports. Architected initial platform systems, tackled real-time contest flows, and laid the foundation for venture building.",
      verifiedDate: "2020",
      isToday: false,
    },
    {
      year: "2021+",
      title: "Founder Journey Expands",
      role: "Product & Engineering Lead",
      narrative:
        "Expanded into custom software engineering, client digital transformations, mobile applications, and assembling multidisciplinary technical teams.",
      verifiedDate: "2021–2022",
      isToday: false,
    },
    {
      year: "2023",
      title: "IND Tech Mark Private Limited Incorporated",
      role: "CEO & Co-Founder",
      narrative:
        "Formalized technology operations under IND TECH MARK PRIVATE LIMITED (incorporated November 28, 2023, Patna). Scaled engineering services and product development.",
      verifiedDate: "November 28, 2023",
      isToday: false,
    },
    {
      year: "2024–2026",
      title: "Product & Technology Experimentation",
      role: "Technology Entrepreneur",
      narrative:
        "Expanded digital portfolio with Android utilities (CardLedger, MDR Calc), logic games (ArrowZen) on Google Play, analytics experiments, and automation tooling.",
      verifiedDate: "2024–2026",
      isToday: false,
    },
    {
      year: "TODAY",
      title: "Building the Next Chapter",
      role: "Active Founder & Builder",
      narrative:
        "Architecting scalable SaaS products, exploring agentic AI workflows, sports data systems, and sustainable technology ventures with long-term compounding value.",
      verifiedDate: "Current Focus",
      isToday: true,
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c] overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">02</span>
            <span>/</span>
            <span>TIMELINE OF EXECUTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Founder Journey
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A chronological timeline of milestones, venture foundations, formal incorporations, and continuous technology expansion.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line for Desktop, Left Line for Mobile */}
          <div className="absolute top-3 bottom-3 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[1px] bg-gradient-to-b from-[#ff4d2e] via-white/[0.12] to-[#ff4d2e]/40 pointer-events-none" />

          <div className="space-y-6 sm:space-y-8">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center z-20 top-1 shadow-md ${
                      item.isToday
                        ? "bg-[#ff4d2e] border-2 border-white shadow-[#ff4d2e]/50 ring-4 ring-[#ff4d2e]/20"
                        : "bg-[#08090d] border-2 border-[#ff4d2e] shadow-[#ff4d2e]/30"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.isToday ? "bg-white animate-pulse" : "bg-[#ff7849]"
                      }`}
                    />
                  </div>

                  {/* Milestone Card Content */}
                  <div
                    className={`ml-11 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pl-8" : "sm:pr-8"
                    }`}
                  >
                    <div
                      className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 relative group ${
                        item.isToday
                          ? "bg-[#141724] border-2 border-[#ff4d2e]/60 shadow-xl shadow-[#ff4d2e]/10"
                          : "founder-card hover:border-white/[0.15]"
                      }`}
                    >
                      {/* Top Bar with Year & Status Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${
                            item.isToday
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2e] to-[#ffaa75]"
                              : "text-white"
                          }`}
                        >
                          {item.year}
                        </span>

                        {item.isToday ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#ff4d2e]/20 text-[#ff8a65] border border-[#ff4d2e]/40">
                            <Sparkles className="w-3 h-3 text-[#ff4d2e]" />
                            CURRENT CHAPTER
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                            <CheckCircle2 className="w-3 h-3 text-[#ff4d2e]" />
                            {item.verifiedDate}
                          </span>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3
                        className={`text-lg font-bold mb-1 transition-colors ${
                          item.isToday
                            ? "text-white"
                            : "text-zinc-100 group-hover:text-[#ff8a65]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Role Pill */}
                      <div className="text-xs font-mono font-medium text-[#ff7849] uppercase tracking-wide mb-2.5">
                        {item.role}
                      </div>

                      {/* Narrative */}
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {item.narrative}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
