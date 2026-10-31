import BackToTop from "@/components/BackToTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Principles from "@/components/sections/Principles";
import SiteFooter from "@/components/sections/SiteFooter";
import SiteNav from "@/components/sections/SiteNav";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import TapeMarquee from "@/components/ui/TapeMarquee";
import { TOOLKIT } from "@/data/site-data";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Work />
        {/* Paper tape bridging the Work and Skills panels. */}
        <div className="relative z-10 -my-10">
          <TapeMarquee words={TOOLKIT} variant="paper" />
        </div>
        <Skills />
        <Principles />
        <Contact />
      </main>
      <SiteFooter />
      <RevealOnScroll />
      <BackToTop />
    </>
  );
}
