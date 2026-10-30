import ProjectVisual from "@/components/ProjectVisual";
import ExternalLink from "@/components/ui/ExternalLink";
import Section from "@/components/ui/Section";
import SocialIcon from "@/components/ui/SocialIcon";
import { FEATURED_PROJECTS, SIDE_PROJECTS, type FeaturedProject } from "@/data/site-data";

function FeaturedProjectRow({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <article
      data-reveal
      className="grid gap-8 border-t border-ink py-14 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12 lg:py-20"
    >
      <div className="lg:col-span-12">
        <ProjectVisual project={project} />
      </div>
      <header className="lg:col-span-4">
        <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-2 font-display text-5xl tracking-tight sm:text-6xl">{project.name}</h3>
        <p className="mt-3 text-lg leading-snug text-ink-muted">{project.tagline}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
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
      </header>

      <div className="lg:col-span-8">
        <p className="text-lg leading-relaxed">{project.description}</p>
        <ul className="mt-6 space-y-3 text-ink-muted">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="eyebrow">Status</dt>
            <dd className="mt-1">{project.status}</dd>
          </div>
          <div>
            <dt className="eyebrow">Built with</dt>
            <dd className="mt-1">{project.stack.join(", ")}</dd>
          </div>
          <div>
            <dt className="eyebrow">Quality</dt>
            <dd className="mt-1">{project.proof}</dd>
          </div>
        </dl>
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
      {FEATURED_PROJECTS.map((project, i) => (
        <FeaturedProjectRow key={project.slug} project={project} index={i} />
      ))}

      <div data-reveal className="mt-20">
        <h3 className="eyebrow border-b border-ink pb-3">Also shipped</h3>
        <ul>
          {SIDE_PROJECTS.map((project) => (
            <li
              key={project.name}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1.5 border-b border-line py-5 md:grid-cols-12 md:gap-6"
            >
              <p className="font-display text-2xl md:col-span-4">
                {project.url ? (
                  <ExternalLink href={project.url} className="transition-colors hover:text-accent">
                    {project.name}
                  </ExternalLink>
                ) : (
                  project.name
                )}
              </p>
              <p className="eyebrow whitespace-nowrap md:order-last md:col-span-2 md:text-right">{project.kind}</p>
              <p className="col-span-2 text-ink-muted md:col-span-6">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
