"use client";

import Image from "next/image";

export default function CreatorSpinner() {
  return (
    <div
      className="fixed top-4 right-4 z-30 md:top-8 md:right-8"
      style={{ transform: "rotate(360deg)" }}
    >
      <a
        target="_blank"
        href="https://playground.nothing.tech/"
        rel="noopener noreferrer"
      >
        <Image
          alt="Creator Playground Logo"
          loading="lazy"
          width={29.3}
          height={32}
          decoding="async"
          style={{ color: "transparent" }}
          src="/icons/creator-spinner.svg"
        />
      </a>
    </div>
  );
}
