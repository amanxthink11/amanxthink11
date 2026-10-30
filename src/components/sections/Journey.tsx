import ExternalLink from "@/components/ui/ExternalLink";
import Section from "@/components/ui/Section";
import { MILESTONES } from "@/data/site-data";

export default function Journey() {
  return (
    <Section
      id="journey"
      index="02"
      label="Journey"
      title={
        <>
          One company taught me how to start. <em className="text-ink-muted">The next taught me how to build.</em>
        </>
      }
    >
      <ol>
        {MILESTONES.map((m) => (
          <li key={m.year} data-reveal className="grid gap-4 border-t border-line py-10 sm:grid-cols-12 sm:gap-12">
            <p className="font-display text-5xl leading-none text-accent sm:col-span-3 sm:text-6xl">{m.year}</p>
            <div className="sm:col-span-9 lg:col-span-7">
              <h3 className="text-xl font-medium">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{m.body}</p>
              {m.links && (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
                  {m.links.map((link) => (
                    <li key={link.url}>
                      <ExternalLink
                        href={link.url}
                        className="underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {link.label}
                      </ExternalLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
