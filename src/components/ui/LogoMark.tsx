// The "AS" monogram: an open A whose right leg runs into a geometric S, plus an accent square
// (a nod to QuickQR's modules). Drawn on a 78×48 grid.
//
// The S is stroked twice: first wide in the background colour to cut a gap where it crosses the A,
// then in the ink colour. `knockout` must therefore match whatever the mark sits on.

export const LOGO_VIEWBOX = "0 0 78 48";
export const LOGO_A_PATH = "M0 48 L15 0 H27 L42 48 H31 L21 16 L11 48 Z";
export const LOGO_S_PATH = "M68 4.5 H52 A9.75 9.75 0 0 0 52 24 H55 A9.75 9.75 0 0 1 55 43.5 H31";

interface LogoMarkProps {
  className?: string;
  ink?: string;
  knockout?: string;
  accent?: string;
}

export default function LogoMark({
  className = "h-6 w-auto",
  ink = "currentColor",
  knockout = "var(--paper)",
  accent = "var(--accent)",
}: LogoMarkProps) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={className} aria-hidden="true" focusable="false">
      <path d={LOGO_A_PATH} fill={ink} />
      <path d={LOGO_S_PATH} fill="none" stroke={knockout} strokeWidth={14} />
      <path d={LOGO_S_PATH} fill="none" stroke={ink} strokeWidth={9} />
      <rect x={71} y={41} width={7} height={7} fill={accent} />
    </svg>
  );
}
