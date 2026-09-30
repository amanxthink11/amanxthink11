import { ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/SocialIcons";

export default function SocialEcosystem() {
  const socials = [
    {
      name: "LinkedIn",
      handle: "in/amanxthink11",
      url: "https://www.linkedin.com/in/amanxthink11",
      icon: <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />,
    },
    {
      name: "GitHub",
      handle: "github.com/amanxthink11",
      url: "https://github.com/amanxthink11",
      icon: <GithubIcon className="w-5 h-5 text-white" />,
    },
    {
      name: "X",
      handle: "@amanxthink11",
      url: "https://x.com/amanxthink11",
      icon: <XIcon className="w-5 h-5 text-white" />,
    },
    {
      name: "Instagram",
      handle: "@amanxthink11",
      url: "https://instagram.com/amanxthink11",
      icon: <InstagramIcon className="w-5 h-5 text-[#e1306c]" />,
    },
    {
      name: "Facebook",
      handle: "facebook.com/amanxthink11",
      url: "https://facebook.com/amanxthink11",
      icon: <FacebookIcon className="w-5 h-5 text-[#1877f2]" />,
    },
  ];

  return (
    <section id="socials" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c] overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">08</span>
            <span>/</span>
            <span>PUBLIC CHANNELS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Social Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Connect across verified professional networks, open-source repositories, and public channels.
          </p>
        </div>

        {/* Clean Horizontal/List Layout (Replaces repetitive cards) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06] bg-[#0c0e15] rounded-2xl overflow-hidden shadow-lg">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 sm:p-6 hover:bg-white/[0.03] transition-all duration-200 group"
            >
              {/* Left: Icon & Platform Name */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  {social.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#ff8a65] transition-colors">
                    {social.name}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {social.handle}
                  </span>
                </div>
              </div>

              {/* Right: Action Arrow */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span className="hidden sm:inline text-zinc-500 group-hover:text-zinc-300">
                  Open Profile
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center group-hover:bg-[#ff4d2e] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
