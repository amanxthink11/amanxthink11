import { ArrowUpRight } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import ExternalLink from "@/components/ui/ExternalLink";
import Section from "@/components/ui/Section";
import SocialIcon from "@/components/ui/SocialIcon";
import { CLOSING_LINE, PROFILE, SOCIALS } from "@/data/site-data";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="04"
      label="Contact"
      title="Let's build something."
      intro="Partnerships, client work, open source or an interesting idea — email is the fastest way to reach me."
    >
      {/* Sans, not the italic serif: there "amanxthink11" reads as "amanxthinkll", and visitors copy this.
          Sized in container units so the address plus arrow spans the container at any width. */}
      <div className="@container">
        <a
          href={`mailto:${PROFILE.email}`}
          className="group flex items-start gap-[0.1em] text-[7cqi] leading-none font-medium tracking-tight whitespace-nowrap transition-colors hover:text-accent"
        >
          {PROFILE.email}
          <ArrowUpRight
            aria-hidden="true"
            className="size-[0.45em] shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-6">
        <CopyEmailButton email={PROFILE.email} />
        <p className="text-sm text-ink-dim">
          {PROFILE.location} · {PROFILE.timezone}
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <blockquote className="font-display text-3xl leading-snug text-ink-muted italic lg:col-span-5">
          “{CLOSING_LINE}”
        </blockquote>

        <ul className="lg:col-span-6 lg:col-start-7">
          {SOCIALS.map((s) => (
            <li key={s.label} className="border-b border-line first:border-t">
              <ExternalLink
                href={s.url}
                showArrow={false}
                className="flex w-full items-center gap-4 py-4 transition-[color,padding] duration-300 hover:pl-2 hover:text-accent"
              >
                <SocialIcon name={s.icon} className="size-4 text-ink-muted" />
                <span className="font-medium">{s.label}</span>
                <span className="ml-auto font-mono text-xs text-ink-dim">{s.handle}</span>
                <ArrowUpRight aria-hidden="true" className="size-4 text-ink-dim" />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
