import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";
import WorkShowcase from "@/components/WorkShowcase";
import ExternalLink from "@/components/ui/ExternalLink";
import Section from "@/components/ui/Section";
import SocialIcon from "@/components/ui/SocialIcon";
import { FEATURED_PROJECTS, SIDE_PROJECTS, type FeaturedProject } from "@/data/site-data";

function FeaturedPanel({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <article className="grid grid-cols-1 gap-8 pin:grid-cols-12 pin:items-center pin:gap-12">
      <div className="pin:order-last pin:col-span-7">
        <ProjectVisual project={project} />
      </div>

      <div className="pin:col-span-5">
        <h3 className="flex items-baseline gap-4 font-display text-5xl tracking-tight sm:text-6xl">
          <span className="text-2xl text-accent italic pin:hidden">{String(index + 1).padStart(3, "0")}</span>
          {project.name}
        </h3>
        <p className="mt-3 text-lg leading-snug text-ink-muted">{project.tagline}</p>
        <p className="mt-5 leading-relaxed">{project.description}</p>

        <ul className="mt-5 space-y-2 text-sm text-ink-muted">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>

        <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-line pt-5 text-sm sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-6">
          <dt className="text-ink-dim">Status:</dt>
          <dd>{project.status}</dd>
          <dt className="text-ink-dim">Built with:</dt>
          <dd>{project.stack.join(", ")}</dd>
          <dt className="text-ink-dim">Quality:</dt>
          <dd>{project.proof}</dd>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <ExternalLink
            href={project.primaryLink.url}
            className="rounded-full bg-ink px-5 py-2.5 font-medium text-paper transition-colors hover:bg-accent"
          >
            {project.primaryLink.label}
          </ExternalLink>
          <ExternalLink href={project.sourceUrl} className="text-ink-muted transition-colors hover:text-ink">
            <SocialIcon name="github" className="size-3.5" />
            Source
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Selected work"
      title="Things I've shipped"
      intro="Two open-source products I'm building now, plus the smaller apps and experiments that came before them."
    >
      <WorkShowcase labels={FEATURED_PROJECTS.map((p) => p.name)}>
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedPanel key={project.slug} project={project} index={i} />
        ))}
      </WorkShowcase>

      <div data-reveal className="mt-24">
        <h3 className="eyebrow flex justify-between border-b border-ink pb-3">
          <span>Also shipped</span>
          <span>{String(SIDE_PROJECTS.length).padStart(3, "0")}</span>
        </h3>
        <ul>
          {SIDE_PROJECTS.map((project) => {
            const name = (
              <>
                {project.name}
                {project.url && (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-1 inline size-4 text-ink-dim transition-colors group-hover:text-accent"
                  />
                )}
              </>
            );
            return (
              <li
                key={project.name}
                className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1.5 border-b border-line py-5 transition-colors hover:bg-paper-raised md:grid-cols-12 md:gap-6 md:px-3"
              >
                <p className="font-display text-2xl transition-transform duration-300 group-hover:translate-x-1 md:col-span-4">
                  {project.url ? (
                    // The stretched ::after makes the whole row clickable.
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0"
                    >
                      {name}
                    </a>
                  ) : (
                    name
                  )}
                </p>
                <p className="eyebrow whitespace-nowrap md:order-last md:col-span-2 md:text-right">{project.kind}</p>
                <p className="col-span-2 text-ink-muted md:col-span-6">{project.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
