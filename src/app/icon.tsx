import { ImageResponse } from "next/og";
import { BRAND, logoDataUrl } from "@/lib/logo-svg";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img>
    <img src={logoDataUrl({ size: size.width, padding: 0.12, background: BRAND.paper })} width={size.width} height={size.height} alt="" />,
    size,
  );
}
