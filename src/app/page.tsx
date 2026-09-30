import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroAbout from "@/components/IntroAbout";
import FounderJourney from "@/components/FounderJourney";
import Ventures from "@/components/Ventures";
import SelectedProducts from "@/components/SelectedProducts";
import GithubBuilder from "@/components/GithubBuilder";
import FocusNow from "@/components/FocusNow";
import Philosophy from "@/components/Philosophy";
import SocialEcosystem from "@/components/SocialEcosystem";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090d] text-[#f3f4f6] selection:bg-[#ff4d2e]/30 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Intro / About */}
        <IntroAbout />

        {/* 3. Founder Journey */}
        <FounderJourney />

        {/* 4. Ventures */}
        <Ventures />

        {/* 5. Selected Products */}
        <SelectedProducts />

        {/* 6. GitHub / Builder */}
        <GithubBuilder />

        {/* 7. What I'm Building Now */}
        <FocusNow />

        {/* 8. Philosophy */}
        <Philosophy />

        {/* 9. Social Ecosystem */}
        <SocialEcosystem />

        {/* 10. Contact */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
