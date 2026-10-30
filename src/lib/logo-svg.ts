import { LOGO_A_PATH, LOGO_S_PATH } from "@/components/ui/LogoMark";

export const BRAND = { ink: "#f1efea", paper: "#0a0a0b", accent: "#ff5a3c" };

/**
 * The AS monogram as a standalone SVG data URL, for generated images (favicon, share image)
 * that can't render the LogoMark component. `size` is the output square; `padding` is the
 * fraction of it left empty around the 78×48 mark.
 */
export function logoDataUrl({ size, padding = 0.18, background }: { size: number; padding?: number; background?: string }) {
  const inner = size * (1 - padding * 2);
  const scale = inner / 78;
  const x = (size - 78 * scale) / 2;
  const y = (size - 48 * scale) / 2;
  const radius = size * 0.22;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    ${background ? `<rect width="${size}" height="${size}" rx="${radius}" fill="${background}"/>` : ""}
    <g transform="translate(${x} ${y}) scale(${scale})">
      <path d="${LOGO_A_PATH}" fill="${BRAND.ink}"/>
      <path d="${LOGO_S_PATH}" fill="none" stroke="${background ?? BRAND.paper}" stroke-width="14"/>
      <path d="${LOGO_S_PATH}" fill="none" stroke="${BRAND.ink}" stroke-width="9"/>
      <rect x="71" y="41" width="7" height="7" fill="${BRAND.accent}"/>
    </g>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
