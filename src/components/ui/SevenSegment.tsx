// Scoreboard-style seven-segment digits. Unlit segments stay faintly visible, like a real LED panel.
//
//    a
//  f   b
//    g
//  e   c
//    d

type Segment = "a" | "b" | "c" | "d" | "e" | "f" | "g";

const DIGITS: Record<string, Segment[]> = {
  "0": ["a", "b", "c", "d", "e", "f"],
  "1": ["b", "c"],
  "2": ["a", "b", "g", "e", "d"],
  "3": ["a", "b", "g", "c", "d"],
  "4": ["f", "g", "b", "c"],
  "5": ["a", "f", "g", "c", "d"],
  "6": ["a", "f", "g", "e", "d", "c"],
  "7": ["a", "b", "c"],
  "8": ["a", "b", "c", "d", "e", "f", "g"],
  "9": ["a", "b", "c", "d", "f", "g"],
};

// Hexagonal segment outlines on a 32×56 digit cell.
const horizontal = (cy: number) => `5,${cy} 8,${cy - 3} 24,${cy - 3} 27,${cy} 24,${cy + 3} 8,${cy + 3}`;
const vertical = (cx: number, y1: number, y2: number) =>
  `${cx},${y1} ${cx + 3},${y1 + 3} ${cx + 3},${y2 - 3} ${cx},${y2} ${cx - 3},${y2 - 3} ${cx - 3},${y1 + 3}`;

const SEGMENTS: Record<Segment, string> = {
  a: horizontal(4),
  g: horizontal(28),
  d: horizontal(52),
  f: vertical(4, 5, 27),
  b: vertical(28, 5, 27),
  e: vertical(4, 29, 51),
  c: vertical(28, 29, 51),
};

export default function SevenSegment({ value, className = "" }: { value: string; className?: string }) {
  const chars = value.split("");
  return (
    <svg
      viewBox={`0 0 ${chars.length * 38} 56`}
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      {chars.map((char, i) => {
        const lit = DIGITS[char] ?? [];
        return (
          // A slight slant, like a stadium board.
          <g key={i} transform={`translate(${i * 38 + 3} 0) skewX(-6)`}>
            {(Object.keys(SEGMENTS) as Segment[]).map((s) => (
              <polygon key={s} points={SEGMENTS[s]} opacity={lit.includes(s) ? 1 : 0.1} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
