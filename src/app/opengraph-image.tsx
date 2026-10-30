import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { PROFILE } from "@/data/site-data";
import { moduleStyle, portraitCells } from "@/lib/qr-portrait";

export const alt = `${PROFILE.name} — founder and software engineer from Patna, India`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#f1efea";
const PAPER = "#0a0a0b";

/** Renders the same QR-module portrait as the hero canvas, as a square PNG data URL. */
async function portraitDataUrl(pixels: number) {
  const grid = 64;
  const { data } = await sharp(join(process.cwd(), "public", PROFILE.avatar))
    .resize(grid, grid)
    .toColourspace("b-w")
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cell = pixels / grid;
  const rects = portraitCells((x, y) => data[y * grid + x] / 255, grid)
    .map(({ x, y, brightness }) => {
      const { alpha, fill } = moduleStyle(brightness);
      const side = cell * fill;
      const inset = (cell - side) / 2;
      return `<rect x="${(x * cell + inset).toFixed(1)}" y="${(y * cell + inset).toFixed(1)}" width="${side.toFixed(1)}" height="${side.toFixed(1)}" fill="${INK}" fill-opacity="${alpha.toFixed(2)}"/>`;
    })
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${pixels}" height="${pixels}">${rects}</svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));
  const [sans, serifItalic, portrait] = await Promise.all([
    font("Geist-Regular.ttf"),
    font("InstrumentSerif-Italic.ttf"),
    portraitDataUrl(size.height),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: PAPER,
          color: INK,
          position: "relative",
          fontFamily: "Geist",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={portrait} width={size.height} height={size.height} alt="" style={{ position: "absolute", top: 24, right: 24 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(90deg, ${PAPER} 38%, rgba(10,10,11,0.6) 62%, rgba(10,10,11,0) 80%)`,
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: 56, fontSize: 22 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#7c7a75" }}>Currently:</span>
              <span>{PROFILE.role}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#7c7a75" }}>Based in:</span>
              <span>Patna, India</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontSize: 168, lineHeight: 0.9 }}>
              {PROFILE.name}
            </div>
            <div style={{ fontSize: 30, marginTop: 24, maxWidth: 720, lineHeight: 1.3 }}>
              I build practical software for Indian businesses.
            </div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#ff5a3c" }}>www.amanxthink11.com</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // Small text uses a sans whose "1" has a flag; in Instrument Serif "amanxthink11" reads as "amanxthinkll".
      fonts: [
        { name: "Geist", data: sans, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
