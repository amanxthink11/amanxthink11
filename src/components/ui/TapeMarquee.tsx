const VARIANTS = {
  // Yellow caution tape under the hero.
  caution: { tape: "bg-yellow", ink: "text-tray", tilt: "-rotate-2", speed: "animate-[marquee_32s_linear_infinite]" },
  // White paper tape used as a divider between sections.
  paper: { tape: "bg-paper", ink: "text-paper-ink", tilt: "rotate-1", speed: "animate-[marquee_40s_linear_infinite_reverse]" },
};

/** A tilted strip of tape with words scrolling along it. */
export default function TapeMarquee({ words, variant = "caution" }: { words: string[]; variant?: keyof typeof VARIANTS }) {
  const style = VARIANTS[variant];
  const run = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((word) => (
        <li key={word} className={`flex items-center gap-8 pr-8 font-sign text-lg whitespace-nowrap sm:text-xl ${style.ink}`}>
          {word}
          <span aria-hidden="true" className="size-2.5 rotate-45 bg-current" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative z-10 overflow-hidden py-6">
      <div className={`-mx-[5%] ${style.tilt} border-y-2 border-tray ${style.tape} py-3 shadow-sticker`}>
        {/* Two identical runs scroll by half their width, so the loop is seamless. */}
        <div className={`flex w-max ${style.speed}`}>
          {run(false)}
          {run(true)}
        </div>
      </div>
    </div>
  );
}
