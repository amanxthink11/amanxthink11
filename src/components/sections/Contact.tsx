import ContactQr from "@/components/ContactQr";
import CopyEmailButton from "@/components/CopyEmailButton";
import ExternalLink from "@/components/ui/ExternalLink";
import SocialIcon from "@/components/ui/SocialIcon";
import Tape from "@/components/ui/Tape";
import { PROFILE, SOCIALS } from "@/data/site-data";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-2 scroll-mt-20 overflow-clip rounded-3xl border border-line bg-gradient-to-b from-lamp/10 via-asphalt to-night py-24 sm:mx-4 sm:py-32"
    >
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-7">
          <h2 id="contact-heading" className="font-sign text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95]">
            Let&apos;s build <span className="font-tag text-yellow">the next one</span>?
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-fog">
            A problem nobody has solved yet? An idea stuck in a slide deck for too long? A team that needs software
            built properly? <strong className="text-chalk">Let&apos;s talk.</strong>
          </p>
          {/* Sign font with flagged 1s, so "amanxthink11" can't be misread as "amanxthinkll". */}
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-8 block font-sign text-[clamp(1.25rem,3.6vw,2.5rem)] break-all text-yellow transition-colors hover:text-chalk"
          >
            {PROFILE.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-4">
            <CopyEmailButton email={PROFILE.email} />
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-fog">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <ExternalLink href={s.url} showArrow={false} className="gap-2 transition-colors hover:text-yellow">
                  <SocialIcon name={s.icon} className="size-4" />
                  {s.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Scan-to-save sticker. */}
        <figure data-reveal className="relative mx-auto w-full max-w-xs rotate-2 bg-paper p-5 text-paper-ink shadow-paper lg:col-span-5">
          <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
          <ContactQr className="w-full" />
          <figcaption className="mt-4 text-center">
            <span className="block font-sign text-lg leading-tight">Scan to save my contact</span>
            <span className="mt-1 block text-sm text-paper-meta">Point your phone camera here.</span>
          </figcaption>
          <span className="absolute -right-4 -bottom-4 -rotate-6 rounded-md border-2 border-tray bg-pink px-3 py-1.5 label-sign text-tray shadow-sticker">
            QR, of course
          </span>
        </figure>
      </div>
    </section>
  );
}
