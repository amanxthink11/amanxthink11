/** A tilted strip of caution tape with words scrolling along it. */
export default function TapeMarquee({ words, tilt = "-rotate-2" }: { words: string[]; tilt?: string }) {
  const run = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((word) => (
        <li key={word} className="flex items-center gap-8 pr-8 font-sign text-lg whitespace-nowrap text-tray sm:text-xl">
          {word}
          <span aria-hidden="true" className="size-2.5 rotate-45 bg-tray" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden py-8">
      <div className={`-mx-[5%] ${tilt} border-y-2 border-tray bg-yellow py-3 shadow-sticker`}>
        {/* Two identical runs scroll by half their width, so the loop is seamless. */}
        <div className="flex w-max animate-[marquee_32s_linear_infinite]">
          {run(false)}
          {run(true)}
        </div>
      </div>
    </div>
  );
}
