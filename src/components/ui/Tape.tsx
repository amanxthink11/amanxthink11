/** A strip of translucent masking tape, positioned by the caller. Decorative. */
export default function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 h-6 w-24 bg-[#e9e4d6]/75 shadow-[0_1px_2px_rgb(0_0_0/0.3)] backdrop-blur-[1px] ${className}`}
    />
  );
}
