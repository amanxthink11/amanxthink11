import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  intro?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** A page section with a big sign-font title over a huge outlined echo of the same word. */
export default function Section({ id, title, intro, className = "", children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={`relative scroll-mt-20 overflow-clip py-24 sm:py-32 ${className}`}>
      <div className="container-page relative">
        <header data-reveal className="relative mb-12 grid grid-cols-1 gap-5 sm:mb-16 lg:grid-cols-12 lg:items-end lg:gap-10">
          <span
            aria-hidden="true"
            className="text-outline pointer-events-none absolute -top-12 left-0 font-sign text-[clamp(5rem,15vw,13rem)] leading-none whitespace-nowrap select-none sm:-top-20"
          >
            {title}
          </span>
          <h2 id={headingId} className="relative font-sign text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] lg:col-span-6">
            {title}
          </h2>
          {intro && <div className="relative max-w-xl leading-relaxed text-fog lg:col-span-6">{intro}</div>}
        </header>
        {children}
      </div>
    </section>
  );
}
