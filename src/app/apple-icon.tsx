import { ImageResponse } from "next/og";
import { BRAND, logoDataUrl } from "@/lib/logo-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so the background is a full square.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: BRAND.paper }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={logoDataUrl({ size: size.width, padding: 0.2 })} width={size.width} height={size.height} alt="" />
      </div>
    ),
    size,
  );
}
