import Section from "@/components/ui/Section";
import Tape from "@/components/ui/Tape";
import { MOTTO, NOW, PRINCIPLES } from "@/data/site-data";

const TILT = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"];

export default function Principles() {
  return (
    <Section
      id="principles"
      title="House rules"
      intro={<p>Five things I learned the hard way, pinned where I can see them.</p>}
    >
      <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <li
            key={p.title}
            data-reveal
            className={`relative bg-paper p-6 pt-8 text-paper-ink shadow-paper transition-transform hover:rotate-0 ${TILT[i % TILT.length]}`}
          >
            <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
            <p className="font-sign text-3xl text-red">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-sign text-xl leading-tight">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-paper-meta">{p.body}</p>
          </li>
        ))}
        {/* The motto from Aman's GitHub profile, as a sticker in the sixth spot. */}
        <li data-reveal className="grid place-items-center rotate-2 rounded-xl border-2 border-tray bg-yellow p-6 text-center shadow-paper">
          <p className="font-tag text-2xl leading-snug text-tray">{MOTTO}</p>
        </li>
      </ol>

      {/* What's on right now, as an "on air" panel. */}
      <div data-reveal className="mt-20 rounded-2xl border border-line bg-tray p-6 sm:p-8">
        <p className="flex items-center gap-2 label-sign text-red">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-red opacity-70 motion-reduce:hidden" />
            <span className="relative inline-flex size-2.5 rounded-full bg-red" />
          </span>
          On air, {new Date().getFullYear()}
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
          {NOW.map(({ label, detail }) => (
            <div key={label} className="border-l-2 border-line-strong pl-4">
              <dt className="font-sign text-lg text-chalk">{label}</dt>
              <dd className="mt-1 text-fog">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
