/** Tilted strips of caution tape with words scrolling along them: a yellow tape over a cyan one. */
export default function TapeMarquee({ words }: { words: string[] }) {
  const run = (hidden: boolean, ink: string) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((word) => (
        <li key={word} className={`flex items-center gap-8 pr-8 font-sign text-lg whitespace-nowrap sm:text-xl ${ink}`}>
          {word}
          <span aria-hidden="true" className="size-2.5 rotate-45 bg-current" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative overflow-hidden py-10">
      {/* Back tape: tilted the other way and scrolling the other direction. Decorative. */}
      <div aria-hidden="true" className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-2 border-y-2 border-tray bg-cyan py-2 opacity-90">
        <div className="flex w-max animate-[marquee_40s_linear_infinite_reverse]">
          {run(true, "text-tray/70")}
          {run(true, "text-tray/70")}
        </div>
      </div>
      {/* Front tape. Two identical runs scroll by half their width, so the loop is seamless. */}
      <div className="relative -mx-[5%] -rotate-2 border-y-2 border-tray bg-yellow py-3 shadow-sticker">
        <div className="flex w-max animate-[marquee_32s_linear_infinite]">
          {run(false, "text-tray")}
          {run(true, "text-tray")}
        </div>
      </div>
    </div>
  );
}
