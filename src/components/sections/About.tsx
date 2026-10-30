import { ArrowRight } from "lucide-react";
import Tape from "@/components/ui/Tape";
import { PROFILE } from "@/data/site-data";

const FOCUS = ["Product engineering", "SaaS platforms", "Offline-first apps", "Developer APIs", "Open source", "AI-assisted workflows"];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-page grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        {/* Paper card, taped to the wall. */}
        <article data-reveal className="relative bg-paper p-7 text-paper-ink shadow-paper sm:p-10 lg:col-span-8 lg:-rotate-1">
          <Tape className="-top-3 left-8 -rotate-6" />
          <Tape className="-top-3 right-8 rotate-6" />
          <h2 id="about-heading" className="font-sign text-[clamp(2rem,5vw,3.5rem)] leading-[0.95]">
            From idea to <span className="text-red">shipped product</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 leading-relaxed text-paper-meta md:grid-cols-2">
            <p>
              I&apos;m a founder and hands-on builder from Patna. My first company, Think11, was a fantasy sports
              platform; today IND Tech Mark builds web, mobile and automation software for clients alongside our own
              products.
            </p>
            <p>
              I care about software that survives real use: billing that keeps working when the internet drops, QR
              tools that keep payment details on the device, and code with tests and documentation behind it.
            </p>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {FOCUS.map((item) => (
              <li key={item} className="rounded-full border-2 border-paper-ink px-3 py-1 label-sign text-[0.625rem]">
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* Sticky note. */}
        <aside data-reveal className="relative bg-pink p-7 text-tray shadow-paper lg:col-span-4 lg:mt-10 lg:rotate-2">
          <h3 className="font-sign text-2xl leading-tight">Work with IND Tech Mark</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Web, mobile and automation projects for businesses that want software built to last.
          </p>
          <a
            href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("A project for IND Tech Mark")}`}
            className="mt-6 inline-flex items-center gap-2 font-tag text-lg transition-transform hover:translate-x-1"
          >
            Start a project <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
