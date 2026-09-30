import { SITE_DATA } from "@/data/site-data";

export default function IntroAbout() {
  const principles = [
    {
      number: "01",
      title: "BUILD WITH PURPOSE",
      description:
        "Every venture and line of code begins with a clear friction point. We build solutions designed to deliver immediate, practical value.",
    },
    {
      number: "02",
      title: "LEARN BY BUILDING",
      description:
        "Theory only goes so far. Real product insight comes from shipping, deploying to real users, observing bottlenecks, and iterating rapidly.",
    },
    {
      number: "03",
      title: "THINK LONG TERM",
      description:
        "Sustainable businesses compound over time. We engineer software architectures and commercial relationships built for enduring reliability.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/[0.06] overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-8">
          <span className="text-[#ff4d2e]">01</span>
          <span>/</span>
          <span>ABOUT & PERSPECTIVE</span>
        </div>

        {/* Large Editorial Statement & Strong Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Founder. Builder. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2e] via-[#ff7849] to-[#ffaa75]">
                Problem Solver.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center pt-2">
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              I build at the intersection of venture leadership and engineering execution. From launching Think11 in 2020 as a competitive sports-technology platform to incorporating IND Tech Mark in 2023 for software solutions and product development, my work focuses on turning ideas into resilient, production-ready systems that solve tangible problems.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#ff4d2e]" />
              <span>Based in Patna, Bihar, India — Building for Global Standards</span>
            </div>
          </div>
        </div>

        {/* 3 Compact Editorial Principles (Editorial layout, not dashboard cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/[0.08]">
          {principles.map((item) => (
            <div key={item.number} className="flex flex-col group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold text-[#ff4d2e]">
                  {item.number}
                </span>
                <span className="w-8 h-[1px] bg-white/20 group-hover:bg-[#ff4d2e] transition-colors" />
                <h3 className="text-sm font-mono font-bold tracking-wider uppercase text-white group-hover:text-[#ff8a65] transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed pl-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
