import ScrollReveal from "@/components/common/ScrollReveal";
import StorySvg from "./StorySvg";

export default function StorySection() {
  return (
    <section className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-20 p-6 md:p-12 mb-56">
      <ScrollReveal>
        <span className="relative flex pb-2.5 w-full">
          <span
            className="text-center text-headline md:text-headline-md font-ndot leading-[1.3em] whitespace-pre-line text-transparent"
            aria-hidden="true"
          >
            {
              "THE NEXT CHAPTER OF OUR STORY\nBUILDS ON THE SAME CORE VALUES,\nNOW WITH AI AT THE CENTRE\nOF OUR OPERATING SYSTEM"
            }
          </span>

          <StorySvg className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible" />
        </span>
      </ScrollReveal>

      {/* Decoration Video */}
      <div className="pointer-events-none z-[-1] size-25 md:size-52 border-2 border-white opacity-50 absolute right-18 md:-right-4 -bottom-40 md:-bottom-50">
        <video
          src="/decoration/05.mp4"
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
