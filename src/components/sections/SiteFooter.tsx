import { ArrowUp } from "lucide-react";
import LocalClock from "@/components/LocalClock";
import ExternalLink from "@/components/ui/ExternalLink";
import LogoMark from "@/components/ui/LogoMark";
import { MOTTO, NAV_LINKS, PROFILE, SOCIALS } from "@/data/site-data";

export default function SiteFooter() {
  return (
    <footer className="mt-24">
      <div aria-hidden="true" className="h-3 bg-hazard" />
      <div className="container-page grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <LogoMark className="h-12 w-auto" />
            <span className="font-tag text-5xl text-yellow [text-shadow:3px_3px_0_var(--pink)]">Aman</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">{MOTTO}</p>
          <p className="mt-4 text-sm text-fog-2">
            Patna, India <LocalClock />
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="label-sign text-yellow">Sitemap</p>
          <ul className="mt-4 space-y-2 text-sm font-bold">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-fog transition-colors hover:text-chalk">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="label-sign text-yellow">Say hi</p>
          <ul className="mt-4 space-y-2 text-sm font-bold">
            <li>
              <a href={`mailto:${PROFILE.email}`} className="text-fog transition-colors hover:text-chalk">
                {PROFILE.email}
              </a>
            </li>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <ExternalLink href={s.url} showArrow={false} className="text-fog transition-colors hover:text-chalk">
                  {s.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-col gap-3 border-t border-line py-6 text-xs text-fog-2 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.fullName} · IND Tech Mark
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 font-bold text-chalk transition-colors hover:text-yellow">
          Back to top
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
