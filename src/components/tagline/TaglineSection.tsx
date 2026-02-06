"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";
import TaglineSvg from "./TaglineSvg";

export default function TaglineSection() {
  const [titleOpacity, setTitleOpacity] = useState(0.85);
  const rafRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight || 1;
      const scrollStart = vh * 0.5;
      const scrollEnd = vh * 1.2;
      const scrollY = window.scrollY;

      if (scrollY < scrollStart) {
        setTitleOpacity(0.85);
      } else if (scrollY > scrollEnd) {
        setTitleOpacity(1);
      } else {
        const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
        setTitleOpacity(0.85 + progress * 0.15);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      data-background="2"
      className="relative flex w-full max-w-6xl flex-col items-center justify-center p-6 md:p-12 mt-10 mb-10 md:mt-20 md:mb-20"
    >
      <ScrollReveal>
        <span className="relative flex pb-2.5 w-full">
          <span
            className="shrink-0 text-center text-headline md:text-headline-md trim-text whitespace-pre font-ndot leading-[1.3em] text-transparent"
            aria-hidden="true"
          >
            {"ESSENTIAL IS THE FIRST STEP\nTOWARDS AN AI OPERATING SYSTEM"}
          </span>

          <TaglineSvg
            className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible transition-opacity duration-700"
            style={{ opacity: titleOpacity }}
          />
        </span>
      </ScrollReveal>

      {/* Decoration Video */}
      <div
        className="pointer-events-none z-[-1] size-25 md:size-52 border-2 border-white -right-6 md:-right-40 -bottom-4 md:-bottom-24 absolute"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 110%, 0% 110%)",
        }}
      >
        <video
          src="/decoration/01.mp4"
          className="absolute inset-0 size-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
        />
      </div>
    </section>
  );
}
