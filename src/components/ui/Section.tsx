import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}

export default function Section({ id, index, label, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-16 border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <div data-reveal className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <p className="eyebrow flex items-baseline gap-3 lg:col-span-3 lg:pt-2">
            <span className="font-display text-3xl tracking-normal text-accent normal-case italic">
              {index.padStart(3, "0")}
            </span>
            {label}
          </p>
          <div className="lg:col-span-9">
            <h2
              id={headingId}
              className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl"
            >
              {title}
            </h2>
            {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</p>}
          </div>
        </div>
        <div className="mt-14 sm:mt-20">{children}</div>
      </div>
    </section>
  );
}
