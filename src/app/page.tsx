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

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Work />
        <Skills />
        <Principles />
        <Contact />
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}
