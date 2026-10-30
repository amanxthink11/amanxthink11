import QRCode from "qrcode";
import { PROFILE, SITE_URL } from "@/data/site-data";

// A vCard: scanning it with a phone camera offers to save Aman as a contact.
const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Singh;Aman;;;",
  `FN:${PROFILE.name}`,
  "ORG:IND Tech Mark",
  "TITLE:Founder",
  `EMAIL;TYPE=INTERNET:${PROFILE.email}`,
  `URL:${SITE_URL}`,
  "ADR;TYPE=WORK:;;;Patna;Bihar;;India",
  "END:VCARD",
].join("\n");

// The QR spec's recommended blank margin, in modules; it helps phones lock on.
const QUIET_ZONE = 4;

/** The contact card as crisp SVG QR modules, rendered at build time. */
export default function ContactQr({ className = "" }: { className?: string }) {
  const { modules } = QRCode.create(VCARD, { errorCorrectionLevel: "M" });
  const size = modules.size;
  let d = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (modules.get(y, x)) d += `M${x + QUIET_ZONE} ${y + QUIET_ZONE}h1v1h-1z`;
    }
  }
  const full = size + QUIET_ZONE * 2;

  return (
    <svg
      viewBox={`0 0 ${full} ${full}`}
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-label={`QR code: save ${PROFILE.name} as a contact`}
    >
      <rect width={full} height={full} fill="#ffffff" />
      <path d={d} fill="#0b0d12" />
    </svg>
  );
}
