import { ArrowUp } from "lucide-react";
import LocalClock from "@/components/LocalClock";
import ExternalLink from "@/components/ui/ExternalLink";
import { MOTTO, PROFILE, SOCIALS } from "@/data/site-data";

// Mirrors the top bar's label/value columns so the page opens and closes the same way.
export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-8 py-12 text-[0.8125rem] leading-snug md:grid-cols-12">
        <p className="col-span-2 font-display text-4xl leading-none italic md:col-span-3">
          A<span className="text-accent">.</span>S
        </p>
        <dl className="md:col-span-3">
          <dt className="text-ink-dim">Based in:</dt>
          <dd>
            Patna, India <LocalClock />
          </dd>
        </dl>
        <dl className="md:col-span-3">
          <dt className="text-ink-dim">Elsewhere:</dt>
          <dd className="flex flex-wrap gap-x-1">
            {SOCIALS.map((s, i) => (
              <span key={s.label}>
                <ExternalLink href={s.url} showArrow={false} className="transition-colors hover:text-accent">
                  {s.label}
                </ExternalLink>
                {i < SOCIALS.length - 1 && ","}
              </span>
            ))}
          </dd>
        </dl>
        <div className="col-span-2 md:col-span-3 md:text-right">
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-dim sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.fullName}
        </p>
        <p className="italic">{MOTTO}</p>
      </div>
    </footer>
  );
}
