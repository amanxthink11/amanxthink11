import Image from "next/image";
import { ArrowDown } from "lucide-react";
import ExternalLink from "@/components/ui/ExternalLink";
import SocialIcon from "@/components/ui/SocialIcon";
import { PROFILE, SOCIALS, STATS } from "@/data/site-data";

export default function Hero() {
  const facts = [
    { term: "Based in", detail: `${PROFILE.location} · ${PROFILE.timezone}` },
    { term: "Off the keyboard", detail: PROFILE.interests.join(", ") },
  ];

  return (
    <section id="top" className="container-page pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
        <div className="md:col-span-8">
          <p className="eyebrow">
            {PROFILE.name} — {PROFILE.role}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,1.6rem+5.6vw,6.5rem)] leading-[0.95] tracking-tight text-balance">
            I build <em className="text-accent">practical</em> software for Indian businesses.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            I started my first company, Think11, in 2020. Today I run IND Tech Mark from Patna and build open-source
            products like QuickQR and Billzo — QR codes, billing and GST tools for the shops, cafes and clinics around
            me.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              See the work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-sm underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        <figure className="w-full max-w-[15rem] md:col-span-4 md:ml-auto md:max-w-xs">
          <Image
            src={PROFILE.avatar}
            alt={`Portrait of ${PROFILE.name}`}
            width={460}
            height={460}
            priority
            sizes="(min-width: 768px) 320px, 240px"
            className="aspect-[4/5] w-full rounded-sm object-cover grayscale-[20%] sepia-[8%]"
          />
          <figcaption className="eyebrow mt-3 flex justify-between">
            <span>{PROFILE.fullName}</span>
            <span>Patna</span>
          </figcaption>
        </figure>
      </div>

      {/* gap-px over a line-coloured background draws the dividers between cells */}
      <dl className="mt-16 grid grid-cols-2 gap-px border-y border-line bg-line sm:mt-20 lg:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col-reverse gap-2 bg-paper py-6 pr-4 sm:py-8 [&:nth-child(even)]:pl-4 lg:[&:not(:first-child)]:pl-6">
            <dt className="text-sm text-ink-muted">{label}</dt>
            <dd className="font-display text-5xl leading-none tracking-tight sm:text-6xl">{value}</dd>
          </div>
        ))}
      </dl>

      <dl className="mt-8 grid gap-6 sm:grid-cols-3">
        {facts.map(({ term, detail }) => (
          <div key={term}>
            <dt className="eyebrow">{term}</dt>
            <dd className="mt-1.5 text-sm">{detail}</dd>
          </div>
        ))}
        <div>
          <dt className="eyebrow">Elsewhere</dt>
          <dd className="mt-2 flex gap-4">
            {SOCIALS.map((s) => (
              <ExternalLink
                key={s.label}
                href={s.url}
                showArrow={false}
                aria-label={s.label}
                className="text-ink-muted transition-colors hover:text-accent"
              >
                <SocialIcon name={s.icon} />
              </ExternalLink>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
}
