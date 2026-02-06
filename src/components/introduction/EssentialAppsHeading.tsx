import ScrollReveal from "@/components/common/ScrollReveal";
import CreatorSvg from "./CreatorSvg";

export default function EssentialAppsHeading() {
  return (
    <section className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-20 p-6 md:p-12 mb-10 md:mb-20">
      <ScrollReveal>
        <span className="relative flex pb-2.5 w-full">
          <span
            className="shrink-0 text-center text-headline md:text-headline-md font-ndot leading-[1.3em] whitespace-pre-line text-transparent"
            aria-hidden="true"
          >
            {
              "WITH ESSENTIAL, ANYONE CAN CREATE\nTHEIR OWN APPS IN SECONDS\nUSING NATURAL LANGUAGE"
            }
          </span>

          <CreatorSvg className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible" />
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="flex w-full justify-center">
        <div
          className="relative w-full overflow-hidden rounded-[20px] bg-essential-grey-bg"
          style={{ maxWidth: "1000px" }}
        >
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1122882829?h=4a036560b2&title=0&byline=0&portrait=0&autoplay=1&controls=0&dnt=1&loop=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Essential Apps"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Decoration Video */}
      <div className="pointer-events-none z-[-1] border-2 border-white opacity-0 -top-25 md:-top-40 absolute right-8 size-25 md:right-4 md:size-40">
        <video
          src="/decoration/02.mp4"
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
