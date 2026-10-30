import Section from "@/components/ui/Section";
import { NOW, PRINCIPLES, TOOLKIT } from "@/data/site-data";

export default function Principles() {
  return (
    <Section
      id="principles"
      index="03"
      label="How I work"
      title="Five things I learned the hard way"
    >
      <ol className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <li key={p.title} data-reveal className="border-t border-ink pt-5">
            <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-display text-3xl tracking-tight">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{p.body}</p>
          </li>
        ))}
      </ol>

      <div id="now" data-reveal className="mt-24 grid gap-10 rounded-sm bg-paper-raised p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h3 className="eyebrow">Now · {new Date().getFullYear()}</h3>
          <dl className="mt-5 space-y-4">
            {NOW.map(({ label, detail }) => (
              <div key={label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="font-medium">{label}</dt>
                <dd className="text-ink-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-5">
          <h3 className="eyebrow">Everyday toolkit</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {TOOLKIT.map((tool) => (
              <li key={tool} className="rounded-full border border-ink/20 px-3 py-1 font-mono text-xs">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
