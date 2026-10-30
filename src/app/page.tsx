import CursorRing from "@/components/CursorRing";
import RevealOnScroll from "@/components/RevealOnScroll";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Principles from "@/components/sections/Principles";
import SiteFooter from "@/components/sections/SiteFooter";
import SiteNav from "@/components/sections/SiteNav";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <Work />
        <Journey />
        <Principles />
        <Contact />
      </main>
      <SiteFooter />
      <RevealOnScroll />
      <CursorRing />
    </>
  );
}
