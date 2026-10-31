"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** A round yellow sticker in the corner that appears once you've scrolled a screen down. */
export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const update = () => setShown(window.scrollY > window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
      className={`fixed right-4 bottom-4 z-40 grid size-12 place-items-center rounded-full border-2 border-tray bg-yellow text-tray shadow-sticker transition-[opacity,translate] duration-300 hover:-rotate-12 sm:right-6 sm:bottom-6 ${
        shown ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </a>
  );
}
