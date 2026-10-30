import Section from "@/components/ui/Section";
import { MOTTO, NOW, PRINCIPLES, TOOLKIT } from "@/data/site-data";

export default function Principles() {
  return (
    <Section id="principles" index="03" label="How I work" title="Five things I learned the hard way">
      <ol className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <li
            key={p.title}
            data-reveal
            className="group relative border-t border-line pt-6 before:absolute before:inset-x-0 before:-top-px before:h-px before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-500 hover:before:scale-x-100"
          >
            <p className="font-display text-2xl text-accent italic">{String(i + 1).padStart(3, "0")}</p>
            <h3 className="mt-4 font-display text-3xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              {p.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{p.body}</p>
          </li>
        ))}
        {/* Fills the sixth cell of the 3-column grid. */}
        <li data-reveal aria-hidden="true" className="hidden border-t border-line pt-6 lg:block">
          <p className="font-display text-3xl leading-snug text-ink-dim italic">{MOTTO}</p>
        </li>
      </ol>
      <p className="sr-only">{MOTTO}</p>

      <div
        id="now"
        data-reveal
        className="mt-24 grid grid-cols-1 gap-10 rounded-md border border-line bg-paper-raised p-6 sm:p-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-7">
          <h3 className="flex items-center gap-2 text-sm text-ink-dim">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Now, {new Date().getFullYear()}:
          </h3>
          <dl className="mt-5 space-y-4">
            {NOW.map(({ label, detail }) => (
              <div key={label} className="grid grid-cols-1 gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                <dt className="font-medium">{label}</dt>
                <dd className="text-ink-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-5">
          <h3 className="text-sm text-ink-dim">Everyday toolkit:</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {TOOLKIT.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs transition-colors hover:border-accent hover:text-accent"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
