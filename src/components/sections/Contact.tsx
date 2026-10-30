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
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-display text-3xl tracking-tight break-all underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-5xl"
          >
            {PROFILE.email}
          </a>
          <div className="mt-6">
            <CopyEmailButton email={PROFILE.email} />
          </div>
          <blockquote className="mt-16 max-w-md border-l-2 border-accent pl-5 font-display text-2xl italic leading-snug text-ink-muted">
            {CLOSING_LINE}
          </blockquote>
        </div>

        <ul className="lg:col-span-5">
          {SOCIALS.map((s) => (
            <li key={s.label} className="border-b border-line first:border-t">
              <ExternalLink
                href={s.url}
                className="flex w-full items-center gap-4 py-4 transition-colors hover:text-accent"
              >
                <SocialIcon name={s.icon} className="size-4 text-ink-muted" />
                <span className="font-medium">{s.label}</span>
                <span className="ml-auto font-mono text-xs text-ink-dim">{s.handle}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
