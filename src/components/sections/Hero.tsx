import { ArrowDown } from "lucide-react";
import PortraitField from "@/components/PortraitField";
import ExternalLink from "@/components/ui/ExternalLink";
import { PROFILE, SOCIALS, STATS } from "@/data/site-data";

export default function Hero() {
  return (
    <>
      <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
        <PortraitField src={PROFILE.avatar} label={`Portrait of ${PROFILE.name} drawn as QR code modules`} />
        {/* Keeps the copy readable where it overlaps the portrait. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-paper via-paper/80 to-transparent"
        />

        {/* On narrow screens, start the copy below the portrait (64px offset + size set in PortraitField). */}
        <div className="container-page @container relative pt-[calc(4rem+min(105vw,50svh)+1rem)] md:pt-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-muted">
              <span className="text-ink">I build practical software for Indian businesses.</span> Founder of IND Tech
              Mark since 2021, after starting Think11 in 2020. Now shipping QuickQR and Billzo from Patna.
            </p>

            <div className="flex flex-wrap items-end gap-x-10 gap-y-6">
              <dl className="text-[0.8125rem] leading-snug">
                <dt className="text-ink-dim">Elsewhere:</dt>
                <dd className="mt-0.5 flex flex-wrap gap-x-1">
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
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                <ArrowDown className="size-4" aria-hidden="true" />
                Explore the work
              </a>
            </div>
          </div>

          {/* "Aman Singh" sets ~4.25em wide plus italic overhang, so 22cqi spans the container. */}
          <h1 className="mt-6 -mb-[0.14em] font-display text-[22cqi] leading-[0.85] whitespace-nowrap italic">
            {PROFILE.name}
          </h1>
        </div>
      </section>

      {/* gap-px over a line-coloured background draws the dividers between cells */}
      <section aria-label="At a glance" className="border-y border-line">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {STATS.map(({ value, label }, i) => (
              <div key={label} className="flex flex-col-reverse gap-2 bg-paper px-4 py-7 sm:px-6 sm:py-9">
                <dt className="text-sm text-ink-muted">{label}</dt>
                <dd className="flex items-baseline gap-3 font-display text-5xl leading-none sm:text-6xl">
                  <span className="font-mono text-[0.6875rem] text-ink-dim">{String(i + 1).padStart(3, "0")}</span>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
