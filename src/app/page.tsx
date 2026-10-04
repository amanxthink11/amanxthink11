import Navbar from "@/components/Navbar";
import Chapter01Beginning from "@/components/Chapter01Beginning";
import Chapter02FirstBet from "@/components/Chapter02FirstBet";
import Chapter03BuildingAgain from "@/components/Chapter03BuildingAgain";
import Chapter04IdeasToProducts from "@/components/Chapter04IdeasToProducts";
import Chapter05BuildingInPublic from "@/components/Chapter05BuildingInPublic";
import Chapter06ThingsIveLearned from "@/components/Chapter06ThingsIveLearned";
import Chapter07WhatImBuildingNow from "@/components/Chapter07WhatImBuildingNow";
import Chapter08TheRoadAhead from "@/components/Chapter08TheRoadAhead";
import Chapter09MessageToVisitor from "@/components/Chapter09MessageToVisitor";
import Chapter10LetsConnect from "@/components/Chapter10LetsConnect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090d] text-[#f3f4f6] selection:bg-[#ff4d2e]/30 selection:text-white relative overflow-x-hidden w-full">
      {/* Chapter-Aware Navigation */}
      <Navbar />

      {/* 10 Storytelling Chapters */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* 01 — THE BEGINNING */}
        <Chapter01Beginning />

        {/* 02 — THE FIRST BET (Think11 · 2020) */}
        <Chapter02FirstBet />

        {/* 03 — BUILDING AGAIN (IND Tech Mark) */}
        <Chapter03BuildingAgain />

        {/* 04 — FROM IDEAS TO PRODUCTS */}
        <Chapter04IdeasToProducts />

        {/* 05 — BUILDING IN PUBLIC (GitHub) */}
        <Chapter05BuildingInPublic />

        {/* 06 — THINGS I'VE LEARNED (Founder Principles) */}
        <Chapter06ThingsIveLearned />

        {/* 07 — WHAT I'M BUILDING NOW */}
        <Chapter07WhatImBuildingNow />

        {/* 08 — THE ROAD AHEAD */}
        <Chapter08TheRoadAhead />

        {/* 09 — A MESSAGE TO THE VISITOR */}
        <Chapter09MessageToVisitor />

        {/* 10 — LET'S CONNECT */}
        <Chapter10LetsConnect />
      </main>

      {/* Story Footer */}
      <Footer />
    </div>
  );
}
