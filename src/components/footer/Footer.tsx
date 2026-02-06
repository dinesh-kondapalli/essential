import Image from "next/image";
import LinkIcon from "@/components/common/LinkIcon";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Footer() {
  return (
    <footer
      data-background="5"
      className="relative flex min-h-svh w-full flex-col overflow-hidden"
    >
      {/* footer.mp4 - footer section only */}
      <video
        src="/backgrounds/footer.mp4"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="pointer-events-none absolute inset-0 z-[-1] size-full object-cover"
        style={{
          mask: "linear-gradient(to bottom, transparent 0%, black 10%, black 100%)",
          WebkitMask:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 100%)",
        }}
      />

      {/* Main Content - entrance transition */}
      <ScrollReveal
        className="flex flex-1 flex-col items-center justify-center px-6 py-12 md:px-12"
        distance={60}
        duration={1}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Playground CTA Card */}
          <ScrollReveal distance={50} duration={0.9}>
            <div className="z-20 flex flex-col items-center justify-center gap-8 rounded-[20px] bg-white p-6 py-14">
              <Image
                alt="Playground Logo"
                loading="lazy"
                width={120}
                height={120}
                decoding="async"
                style={{ color: "transparent" }}
                src="/icons/gradient-logo.svg"
              />
              <div className="flex flex-col items-center justify-center gap-6">
                <h3 className="trim-text text-center font-ntype82 text-title leading-6">
                  Come to play with Essential.
                  <br />
                  Your digital Playground awaits.
                </h3>
                <p className="trim-text max-w-sm text-center text-balance">
                  Join thousands of creators to build something uniquely yours,
                  and discover the creativity of the Nothing Community.
                </p>
              </div>
              <div className="flex h-12 w-full items-center justify-center">
                <a
                  id="footer-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center gap-3 rounded-full p-4 transition-colors relative bg-yellow text-essential-black hover:bg-yellow/80"
                  href="https://playground.nothing.tech/"
                >
                  <span className="trim-text px-1">Playground</span>
                  <LinkIcon />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile Links */}
          <div className="w-full items-center justify-center gap-2 md:w-auto flex flex-col md:hidden">
            <a
              className="flex h-8 w-full items-center justify-center rounded-full bg-white px-2 py-2 md:w-auto"
              href="mailto:press@nothing.tech"
            >
              <span className="trim-text block items-center justify-center px-1 text-sm">
                Press enquiries
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-full items-center justify-center rounded-full bg-white px-2 py-2 md:w-auto"
              href="https://careers.nothing.tech/"
            >
              <span className="trim-text block items-center justify-center px-1 text-sm">
                Careers
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-full items-center justify-center rounded-full bg-white px-2 py-2 md:w-auto"
              href="https://nothing.tech/pages/privacy-policy"
            >
              <span className="trim-text block items-center justify-center px-1 text-sm">
                Legals
              </span>
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Bar */}
      <ScrollReveal distance={30} duration={0.8} delay={0.2}>
        <div className="relative z-10 flex items-center justify-center px-6 py-4 md:px-20">
          <div className="flex w-full flex-col items-center gap-4 py-4 md:grid md:grid-cols-[0.5fr_1fr_0.5fr]">
            {/* Nothing Brand */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="trim-text shrink-0 select-none px-2 text-center font-ndot text-xl uppercase md:text-nowrap md:text-left"
              href="https://nothing.tech"
            >
              Nothing (R)
            </a>

            {/* Desktop Links */}
            <div className="w-full items-center justify-center gap-2 md:w-auto hidden md:flex">
              <a
                className="flex h-8 w-full items-center justify-center rounded-full bg-white px-2 py-2 md:w-auto"
                href="mailto:press@nothing.tech"
              >
                <span className="trim-text block items-center justify-center px-1 text-sm">
                  Press enquiries
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-full items-center justify-center rounded-full bg-white px-2 py-2 md:w-auto"
                href="https://careers.nothing.tech/"
              >
                <span className="trim-text block items-center justify-center px-1 text-sm">
                  Careers
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-full items-center justify-center rounded-full bg-white px-2 py-2 md:w-auto"
                href="https://nothing.tech/pages/privacy-policy"
              >
                <span className="trim-text block items-center justify-center px-1 text-sm">
                  Legals
                </span>
              </a>
            </div>

            {/* Copyright */}
            <h6 className="trim-text w-full text-balance text-center text-sm md:text-right">
              <span className="text-nowrap">Nothing Technology</span>{" "}
              <span className="text-nowrap">&copy; 2020&ndash;2025</span>
            </h6>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
