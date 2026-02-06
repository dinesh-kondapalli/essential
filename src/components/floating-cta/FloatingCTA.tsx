"use client";

import { useEffect, useState } from "react";
import LinkIcon from "@/components/common/LinkIcon";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let footerEl: HTMLElement | null = null;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pastHero = scrollY > window.innerHeight * 0.5;

      // Hide when footer is visible
      if (!footerEl) {
        footerEl = document.querySelector("[data-background='5']");
      }
      let footerVisible = false;
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        footerVisible = rect.top < window.innerHeight * 0.8;
      }

      setVisible(pastHero && !footerVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center md:bottom-6 pointer-events-none">
      <a
        className="flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white/20 p-4 text-black backdrop-blur-3xl transition-all duration-300 hover:bg-yellow hover:text-black pointer-events-auto"
        target="_blank"
        href="https://playground.nothing.tech/"
        rel="noopener noreferrer"
        style={{
          opacity: visible ? 1 : 0,
          transform: `translateY(${visible ? 0 : 76}px)`,
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <span className="trim-text px-1">Playground</span>
        <LinkIcon />
      </a>
    </div>
  );
}
