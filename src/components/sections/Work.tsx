import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";
import ExternalLink from "@/components/ui/ExternalLink";
import Section from "@/components/ui/Section";
import SocialIcon from "@/components/ui/SocialIcon";
import Tape from "@/components/ui/Tape";
import { FEATURED_PROJECTS, SIDE_PROJECTS, SOCIALS, type FeaturedProject } from "@/data/site-data";

const FRAME = ["border-green", "border-yellow"];
const NOTE = ["bg-yellow", "bg-cyan", "bg-pink", "bg-green", "bg-lamp", "bg-paper"];
const TILT = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-1", "-rotate-2"];

function Polaroid({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <article
      data-reveal
      className={`relative bg-paper p-3 pb-6 text-paper-ink shadow-paper ${index % 2 ? "lg:mt-16 lg:rotate-[1.5deg]" : "lg:-rotate-[1.5deg]"}`}
    >
      <Tape className="-top-3 -left-4 -rotate-[35deg]" />
      <Tape className="-top-3 -right-4 rotate-[35deg]" />
      <div className={`relative rounded-md border-[6px] ${FRAME[index % FRAME.length]} bg-tray`}>
        <ProjectVisual project={project} />
        {/* "View project" sticker slapped on the photo's corner. */}
        <ExternalLink
          href={project.primaryLink.url}
          className="absolute top-3 right-3 z-10 rotate-3 rounded-lg border-2 border-tray bg-yellow px-3 py-1.5 font-sign text-xs text-tray shadow-sticker transition-transform hover:rotate-0"
        >
          {project.primaryLink.label}
        </ExternalLink>
      </div>
      <div className="px-2 pt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-sign text-3xl leading-none">{project.name}</h3>
          <p className="label-sign text-red">{project.status}</p>
        </div>
        <p className="mt-2 font-bold">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-paper-ink/40 px-2.5 py-0.5 text-xs font-bold">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="label-sign text-[0.625rem] text-paper-meta">{project.proof}</p>
          <ExternalLink href={project.sourceUrl} className="gap-1.5 font-sign text-xs transition-colors hover:text-red">
            <SocialIcon name="github" className="size-3.5" />
            Source
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const github = SOCIALS.find((s) => s.icon === "github")!;

  return (
    <Section
      id="work"
      title="Work"
      className="mx-2 rounded-3xl bg-brick sm:mx-4"
      intro={
        <p className="rounded-xl bg-night/70 p-4 backdrop-blur-sm">
          Two open-source products I&apos;m building now, plus the apps and experiments that came before them.{" "}
          <strong className="text-chalk">Built for real shops, not slide decks.</strong>
        </p>
      }
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
        {FEATURED_PROJECTS.map((project, i) => (
          <Polaroid key={project.slug} project={project} index={i} />
        ))}
      </div>

      <h3 data-reveal className="mt-24 font-sign text-3xl text-chalk">Also shipped</h3>
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SIDE_PROJECTS.map((project, i) => (
          <li
            key={project.name}
            data-reveal
            className={`relative p-5 text-tray shadow-paper transition-transform hover:rotate-0 ${NOTE[i % NOTE.length]} ${TILT[i % TILT.length]}`}
          >
            <p className="label-sign text-[0.625rem] opacity-70">{project.kind}</p>
            <p className="mt-2 font-sign text-xl leading-tight">
              {project.url ? (
                // The stretched ::after makes the whole note clickable.
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                  {project.name}
                  <ArrowUpRight className="ml-1 inline size-4" aria-hidden="true" />
                </a>
              ) : (
                project.name
              )}
            </p>
            <p className="mt-2 text-sm leading-relaxed">{project.description}</p>
          </li>
        ))}
      </ul>

      <ExternalLink
        href={github.url}
        className="mt-12 rounded-lg border-2 border-tray bg-cyan px-4 py-3 font-sign text-sm text-tray shadow-sticker transition-transform hover:-rotate-2"
      >
        <SocialIcon name="github" className="size-4" />
        Everything on GitHub
      </ExternalLink>
    </Section>
  );
}
