"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [titleOpacity, setTitleOpacity] = useState(0.85);
  const rafRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight || 1;
      const progress = Math.min(Math.max(window.scrollY / (vh * 0.7), 0), 1);
      setVideoOpacity(1 - progress);
      setTitleOpacity(0.85 + progress * 0.15);
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
      data-background="1"
      className="relative flex min-h-svh w-full items-center justify-center p-4 md:p-6 overflow-hidden"
    >
      <video
        src="/backgrounds/loader.mp4"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="pointer-events-none absolute top-0 left-0 z-[-1] h-full w-full object-cover transition-opacity duration-700"
        style={{ opacity: videoOpacity }}
      />

      <div
        className="relative z-10 w-full max-w-[90%] md:max-w-[65%] transition-opacity duration-700"
        style={{ opacity: titleOpacity }}
      >
        <span className="relative flex w-full pb-2.5">
          <svg
            viewBox="0 0 73 16"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none h-auto w-full"
            aria-hidden="true"
            focusable="false"
          >
            <title>Essential</title>
            {/* E */}
            <circle cx="1.4" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="1.4" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="1.4" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="1.4" cy="10" r="0.7" fill="currentColor" />
            <circle cx="1.4" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="2.8" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="2.8" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="2.8" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="4.2" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="4.2" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="4.2" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="5.6" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="5.6" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="5.6" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="7" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="7" cy="12.1" r="0.7" fill="currentColor" />
            {/* S */}
            <circle cx="9.8" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="9.8" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="11.2" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="11.2" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="11.2" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="12.6" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="12.6" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="12.6" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="14" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="14" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="14" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="15.4" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="15.4" cy="10" r="0.7" fill="currentColor" />
            {/* S */}
            <circle cx="18.2" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="18.2" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="19.6" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="19.6" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="19.6" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="21" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="21" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="21" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="22.4" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="22.4" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="22.4" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="23.8" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="23.8" cy="10" r="0.7" fill="currentColor" />
            {/* E */}
            <circle cx="26.6" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="26.6" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="26.6" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="26.6" cy="10" r="0.7" fill="currentColor" />
            <circle cx="26.6" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="28" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="28" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="28" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="29.4" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="29.4" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="29.4" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="30.8" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="30.8" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="30.8" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="32.2" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="32.2" cy="12.1" r="0.7" fill="currentColor" />
            {/* N */}
            <circle cx="35" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="35" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="35" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="35" cy="10" r="0.7" fill="currentColor" />
            <circle cx="35" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="36.4" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="37.8" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="39.2" cy="10" r="0.7" fill="currentColor" />
            <circle cx="40.6" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="40.6" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="40.6" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="40.6" cy="10" r="0.7" fill="currentColor" />
            <circle cx="40.6" cy="12.1" r="0.7" fill="currentColor" />
            {/* T */}
            <circle cx="43.4" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="44.8" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="46.2" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="46.2" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="46.2" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="46.2" cy="10" r="0.7" fill="currentColor" />
            <circle cx="46.2" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="47.6" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="49" cy="3.7" r="0.7" fill="currentColor" />
            {/* I */}
            <circle cx="51.8" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="51.8" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="53.2" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="53.2" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="53.2" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="53.2" cy="10" r="0.7" fill="currentColor" />
            <circle cx="53.2" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="54.6" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="54.6" cy="12.1" r="0.7" fill="currentColor" />
            {/* A */}
            <circle cx="57.4" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="57.4" cy="10" r="0.7" fill="currentColor" />
            <circle cx="57.4" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="58.8" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="58.8" cy="10" r="0.7" fill="currentColor" />
            <circle cx="60.2" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="60.2" cy="10" r="0.7" fill="currentColor" />
            <circle cx="61.6" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="61.6" cy="10" r="0.7" fill="currentColor" />
            <circle cx="63" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="63" cy="10" r="0.7" fill="currentColor" />
            <circle cx="63" cy="12.1" r="0.7" fill="currentColor" />
            {/* L */}
            <circle cx="65.8" cy="3.7" r="0.7" fill="currentColor" />
            <circle cx="65.8" cy="5.8" r="0.7" fill="currentColor" />
            <circle cx="65.8" cy="7.9" r="0.7" fill="currentColor" />
            <circle cx="65.8" cy="10" r="0.7" fill="currentColor" />
            <circle cx="65.8" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="67.2" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="68.6" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="70" cy="12.1" r="0.7" fill="currentColor" />
            <circle cx="71.4" cy="12.1" r="0.7" fill="currentColor" />
          </svg>
        </span>
      </div>
    </section>
  );
}
