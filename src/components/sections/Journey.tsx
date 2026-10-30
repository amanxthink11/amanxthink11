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
      {/* The left rail and dots form a timeline; each row lights up on hover. */}
      <ol className="relative border-l border-line sm:border-l-0">
        {MILESTONES.map((m) => (
          <li
            key={m.year}
            data-reveal
            className="group relative grid grid-cols-1 gap-4 py-10 pl-6 sm:grid-cols-12 sm:gap-12 sm:border-t sm:border-line sm:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-12 -left-[5px] size-[9px] rounded-full border border-line bg-paper transition-colors group-hover:border-accent group-hover:bg-accent sm:hidden"
            />
            <p className="font-display text-6xl leading-none text-ink-dim italic transition-colors duration-300 group-hover:text-accent sm:col-span-3 sm:text-7xl">
              {m.year}
            </p>
            <div className="sm:col-span-9 lg:col-span-7">
              <h3 className="text-xl font-medium">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{m.body}</p>
              {m.links && (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {m.links.map((link) => (
                    <li key={link.url}>
                      <ExternalLink
                        href={link.url}
                        className="text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
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
