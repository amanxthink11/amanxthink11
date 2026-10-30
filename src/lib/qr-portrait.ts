// Draws Aman's portrait as QR-style modules for the generated social share image.

// How far a cell must differ from its row's background to count as part of the subject.
const CONTRAST_THRESHOLD = 0.07;

export interface PortraitCell {
  x: number;
  y: number;
  /** 0 (darkest, e.g. hair) to 1 (brightest, e.g. face). */
  brightness: number;
}

/**
 * Picks the cells of a grid×grid luminance map (values 0–1) that belong to the subject.
 * The photo's backdrop is a smooth gradient, so each row's edge cells give its background tone;
 * contrast against that decides membership, and the cell's own tone decides its brightness.
 */
export function portraitCells(luminance: (x: number, y: number) => number, grid: number): PortraitCell[] {
  const cells: PortraitCell[] = [];
  const edges = [0, 1, 2, grid - 3, grid - 2, grid - 1];

  for (let y = 0; y < grid; y++) {
    const background = edges.reduce((sum, x) => sum + luminance(x, y), 0) / edges.length;
    for (let x = 0; x < grid; x++) {
      const tone = luminance(x, y);
      if (Math.abs(tone - background) < CONTRAST_THRESHOLD) continue;
      cells.push({ x, y, brightness: Math.min(1, Math.max(0, (tone - 0.04) / 0.72)) });
    }
  }
  return cells;
}

/** Opacity and square size (as a fraction of the cell) for a module of the given brightness. */
export function moduleStyle(brightness: number) {
  return { alpha: 0.14 + brightness * 0.86, fill: 0.45 + brightness * 0.4 };
}
