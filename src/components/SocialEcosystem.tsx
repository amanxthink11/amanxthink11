import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/SocialIcons";

export default function SocialEcosystem() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />;
      case "github":
        return <GithubIcon className="w-5 h-5 text-white" />;
      case "twitter":
        return <XIcon className="w-5 h-5 text-white" />;
      case "instagram":
        return <InstagramIcon className="w-5 h-5 text-[#e1306c]" />;
      case "facebook":
        return <FacebookIcon className="w-5 h-5 text-[#1877f2]" />;
      default:
        return <ExternalLink className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="socials" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#07080c] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">08</span>
            <span>/</span>
            <span>PUBLIC NETWORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Social Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Connect across verified official social media channels, open-source repositories, and professional networks.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_DATA.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="founder-card p-6 flex flex-col justify-between group hover:border-[#ff4d2e]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                    {getSocialIcon(social.icon)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#ff7849] transition-colors">
                  {social.name}
                </h3>
                <div className="text-xs font-mono text-zinc-500 mb-3">
                  {social.handle}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {social.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Verified Handle</span>
                <span className="text-[#ff8a65] group-hover:underline">Open Profile →</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
