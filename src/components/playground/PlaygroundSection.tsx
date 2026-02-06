import ScrollReveal from "@/components/common/ScrollReveal";
import PlaygroundSvg from "./PlaygroundSvg";

export default function PlaygroundSection() {
  return (
    <section className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-20 p-6 md:p-12 mb-20">
      <ScrollReveal>
        <span className="relative flex pb-2.5 w-full">
          <span
            className="shrink-0 text-center text-headline md:text-headline-md font-ndot leading-[1.3em] whitespace-pre-line text-transparent"
            aria-hidden="true"
          >
            {
              "THE PLAYGROUND IS YOUR PLATFORM\nTO EXPLORE, CREATE, AND SHARE\nTHE MOST CREATIVE IDEAS"
            }
          </span>

          <PlaygroundSvg className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible" />
        </span>
      </ScrollReveal>

      {/* 03.mp4 decoration - matches original site positioning */}
      <div className="pointer-events-none absolute -top-20 left-4 z-[-1] size-25 overflow-hidden rounded-full md:-top-64 md:-right-8 md:left-auto md:size-52">
        <video
          src="/decoration/03.mp4"
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
