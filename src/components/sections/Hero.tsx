import Image from "next/image";
import { Mail } from "lucide-react";
import LedCounter from "@/components/LedCounter";
import Signature from "@/components/Signature";
import SocialIcon from "@/components/ui/SocialIcon";
import Tape from "@/components/ui/Tape";
import TapeMarquee from "@/components/ui/TapeMarquee";
import { PROFILE, SOCIALS, STATS, TAPE_WORDS, TOOLKIT, type Neon } from "@/data/site-data";

const NEON_TEXT: Record<Neon, string> = {
  red: "text-red",
  lamp: "text-lamp",
  green: "text-green",
  cyan: "text-cyan",
  yellow: "text-yellow",
  pink: "text-pink",
};

const sticker = "absolute z-20 rounded-md border-2 border-tray px-3 py-1.5 label-sign text-tray shadow-sticker";
const button =
  "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-tray px-5 py-4 font-sign text-[0.95rem] text-tray shadow-sticker transition-transform sm:inline-flex sm:w-auto";

/** A cricket ball with its seam, peeking in from the edge. Decorative. */
function CricketBall({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <defs>
        <radialGradient id="ball-shade" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#ff6a4f" />
          <stop offset="0.55" stopColor="#d4261a" />
          <stop offset="1" stopColor="#7a1209" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#ball-shade)" />
      <path d="M30 6 C 52 32, 52 68, 30 94" fill="none" stroke="#f4f1ea" strokeOpacity="0.85" strokeWidth="1.6" />
      <path d="M38 4 C 60 32, 60 68, 38 96" fill="none" stroke="#f4f1ea" strokeOpacity="0.85" strokeWidth="1.6" />
      <path
        d="M31 9l7-2M35 20l8-2M38 32l8-1M40 44l8 0M40 56l8 0M38 68l8 1M35 80l8 2M31 91l7 2"
        stroke="#f4f1ea"
        strokeOpacity="0.6"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function Hero() {
  const github = SOCIALS.find((s) => s.icon === "github")!;

  return (
    <section id="top" className="relative">
      {/* The hero sits on a roller-shutter band; the tape below crosses its bottom edge. */}
      <div className="relative overflow-clip border-b border-line bg-shutter pt-24 pb-14">
        {/* Backdrop: huge faint marker words painted on the shutter, warm lamp and neon glows. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 -rotate-3 font-tag text-[clamp(7rem,20vw,22rem)] leading-none whitespace-nowrap text-chalk/[0.045] select-none"
        >
          Aman
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[4%] bottom-6 -rotate-2 font-tag text-[clamp(5rem,12vw,13rem)] leading-none whitespace-nowrap text-chalk/[0.045] select-none"
        >
          Patna
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 -left-24 size-[28rem] rounded-full bg-lamp/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-[38%] size-72 rounded-full bg-pink/25 blur-3xl"
        />

        {/* Stickers slapped on the wall at the screen edges, with a cricket ball rolling in. */}
        <span
          className={`${sticker} top-24 left-[3%] hidden -rotate-6 bg-paper font-tag text-base normal-case xl:block`}
        >
          Aman
        </span>
        <span className={`${sticker} top-24 right-[4%] hidden rotate-6 rounded-full bg-cyan xl:block`}>Since 2020</span>
        <CricketBall className="pointer-events-none absolute top-[46%] -right-16 hidden size-40 drop-shadow-[0_0_40px_rgb(255_59_36/0.45)] lg:block" />
        <span
          className={`${sticker} top-[62%] right-20 hidden size-14 rotate-12 place-items-center rounded-full bg-pink p-0 lg:grid`}
        >
          UPI
        </span>

        <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            {/* Name tag sticker, signed. */}
            <div className="relative w-full max-w-[40rem] -rotate-2 rounded-2xl border-2 border-tray bg-red p-3 shadow-paper">
              <p className="pt-2 text-center font-sign text-4xl leading-none text-paper sm:text-6xl">Namaste</p>
              <p className="mt-1.5 text-center text-sm font-bold text-paper/85 sm:text-base">my name is</p>
              <div className="mt-3 grid h-40 place-items-center rounded-xl bg-paper px-4 py-1 sm:h-52">
                {/* Thick, marker-weight strokes so the name reads as bold as a signed tag. */}
                <Signature thickness={5} duration={3} className="h-full w-auto max-w-full text-tray" />
              </div>
              <span className={`${sticker} -top-4 -right-4 rotate-6 bg-yellow`}>579 tests</span>
            </div>

            <h1 className="mt-8 font-sign text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.05] text-chalk">
              <span className="sr-only">{PROFILE.name}, </span>
              Founder <span className="text-lamp">&amp;</span> product builder
            </h1>
            <p className="mt-2 label-sign text-cyan">SaaS · Offline-first · UPI &amp; GST · Open source</p>
            <p className="mt-4 max-w-xl leading-relaxed text-fog">
              I build practical software for the shops, cafes and clinics around me. Founder of IND Tech Mark in Patna,
              Bihar, since 2021, after starting Think11 in 2020. Now shipping QuickQR and Billzo in the open.
            </p>

            <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href={`mailto:${PROFILE.email}`} className={`${button} bg-yellow hover:-rotate-2`}>
                <Mail className="size-4" aria-hidden="true" />
                {PROFILE.email}
              </a>
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${button} bg-green hover:rotate-2`}
              >
                <SocialIcon name="github" className="size-4" />
                GitHub
              </a>{" "}
            </div>
          </div>

          {/* Polaroid of Aman. */}
          <div className="relative lg:col-span-5">
            <figure className="relative mx-auto w-full max-w-md rotate-3 rounded-sm bg-paper p-3 pb-16 shadow-paper">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
              <Image
                src={PROFILE.avatar}
                alt={`Portrait of ${PROFILE.name}`}
                width={460}
                height={460}
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="absolute right-5 bottom-4 font-tag text-2xl text-paper-ink">
                {PROFILE.name}
              </figcaption>
              <span className={`${sticker} -left-5 bottom-24 -rotate-6 bg-pink`}>Built in Patna</span>
              <span className={`${sticker} -top-5 -right-3 rotate-3 rounded-full bg-cyan`}>Open source</span>
              <span className={`${sticker} top-1/3 -right-6 rotate-12 bg-lamp`}>{TOOLKIT[3]}</span>
            </figure>
          </div>
        </div>

        {/* Scoreboard: gap-px over a line-coloured background draws the dividers. */}
        <div className="container-page relative mt-12">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
            {STATS.map(({ value, from, label, color }) => (
              <div key={label} className="flex flex-col-reverse gap-3 bg-tray p-5 sm:p-6">
                <dt className="label-sign text-fog-2">{label}</dt>
                <dd className={`h-11 sm:h-14 ${NEON_TEXT[color]} [filter:drop-shadow(0_0_10px_currentColor)]`}>
                  <LedCounter value={value} from={from} className="block h-full" />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Straddles the band's bottom edge, clear of the scoreboard above. */}
      <div className="relative -mt-12">
        <TapeMarquee words={TAPE_WORDS} />
      </div>
    </section>
  );
}
