import Image from "next/image";
import { Mail } from "lucide-react";
import LedCounter from "@/components/LedCounter";
import Signature from "@/components/Signature";
import SocialIcon from "@/components/ui/SocialIcon";
import Tape from "@/components/ui/Tape";
import TapeMarquee from "@/components/ui/TapeMarquee";
import { PROFILE, SOCIALS, STATS, TAPE_WORDS, type Neon } from "@/data/site-data";

const NEON_TEXT: Record<Neon, string> = {
  red: "text-red",
  lamp: "text-lamp",
  green: "text-green",
  cyan: "text-cyan",
  yellow: "text-yellow",
  pink: "text-pink",
};

const sticker = "absolute z-20 rounded-md border-2 border-tray px-3 py-1.5 label-sign text-tray shadow-sticker";

export default function Hero() {
  const github = SOCIALS.find((s) => s.icon === "github")!;

  return (
    <section id="top" className="relative overflow-clip pt-28 sm:pt-32">
      {/* Soft neon glows behind the stickers. */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-[38%] size-72 rounded-full bg-pink/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/3 -right-24 size-80 rounded-full bg-yellow/15 blur-3xl" />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          {/* Name tag sticker, signed. */}
          <div className="relative w-full max-w-[34rem] -rotate-3 rounded-2xl border-2 border-tray bg-red p-3 shadow-paper">
            <p className="pt-2 text-center font-sign text-4xl leading-none text-paper sm:text-5xl">Namaste</p>
            <p className="mt-2 text-center text-sm font-bold text-paper/85">my name is</p>
            <div className="mt-3 grid h-48 place-items-center rounded-xl bg-paper px-4 py-1 sm:h-64">
              <Signature thickness={3.2} duration={3} className="h-full w-auto max-w-full text-tray" />
            </div>
            <span className={`${sticker} -top-4 -right-5 rotate-6 bg-yellow`}>579 tests</span>
          </div>

          <h1 className="mt-12 font-sign text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] text-chalk">
            <span className="sr-only">{PROFILE.name}, </span>
            Founder <span className="text-lamp">&amp;</span> product builder
          </h1>
          <p className="mt-3 label-sign text-cyan">SaaS · Offline-first · UPI &amp; GST · Open source</p>
          <p className="mt-5 max-w-xl leading-relaxed text-fog">
            I build practical software for the shops, cafes and clinics around me. Founder of IND Tech Mark in Patna,
            Bihar, since 2021, after starting Think11 in 2020. Now shipping QuickQR and Billzo in the open.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-tray bg-yellow px-4 py-3 font-sign text-sm text-tray shadow-sticker transition-transform hover:-rotate-2"
            >
              <Mail className="size-4" aria-hidden="true" />
              {PROFILE.email}
            </a>
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-tray bg-green px-4 py-3 font-sign text-sm text-tray shadow-sticker transition-transform hover:rotate-2"
            >
              <SocialIcon name="github" className="size-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Polaroid of Aman. */}
        <div className="relative lg:col-span-5">
          <figure className="relative mx-auto w-full max-w-sm rotate-3 rounded-sm bg-paper p-3 pb-16 shadow-paper">
            <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
            <Image
              src={PROFILE.avatar}
              alt={`Portrait of ${PROFILE.name}`}
              width={460}
              height={460}
              priority
              sizes="(min-width: 1024px) 360px, 90vw"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="absolute right-5 bottom-4 font-tag text-2xl text-paper-ink">{PROFILE.name}</figcaption>
            <span className={`${sticker} -left-5 bottom-24 -rotate-6 bg-pink`}>Built in Patna</span>
            <span className={`${sticker} -top-5 -right-3 rotate-3 bg-cyan`}>Open source</span>
          </figure>
        </div>
      </div>

      {/* Scoreboard: gap-px over a line-coloured background draws the dividers. */}
      <div className="container-page mt-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {STATS.map(({ value, from, label, color }) => (
            <div key={label} className="flex flex-col-reverse gap-3 bg-tray p-5 sm:p-6">
              <dt className="label-sign text-fog-2">{label}</dt>
              <dd className={`h-12 sm:h-14 ${NEON_TEXT[color]} [filter:drop-shadow(0_0_10px_currentColor)]`}>
                <LedCounter value={value} from={from} className="block h-full" />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <TapeMarquee words={TAPE_WORDS} />
    </section>
  );
}
