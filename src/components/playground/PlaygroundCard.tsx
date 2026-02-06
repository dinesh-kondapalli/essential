import ScrollReveal from "@/components/common/ScrollReveal";

export default function PlaygroundCard() {
  return (
    <section className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-2 px-6 md:px-12 mb-62">
      {/* 04.mp4 decoration - left side */}
      <div className="pointer-events-none absolute -bottom-40 left-6 z-[-1] size-25 md:size-52">
        <video
          src="/decoration/04.mp4"
          className="absolute inset-0 size-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
        />
      </div>

      {/* Text card */}
      <ScrollReveal>
        <div className="flex w-full max-w-md shrink-0 flex-col items-start justify-end gap-16 rounded-2xl bg-white p-3">
          <div className="relative flex flex-col items-start justify-start">
            <div className="flex flex-col gap-4 text-sm leading-relaxed md:text-base">
              <p>
                Free from traditional app stores, we made new rules for a new
                era of AI created apps.
              </p>
              <p>
                Our Community platform lets you share and remix the most
                creative ideas from the Nothing community across Essential Apps,
                audio-tuning profiles, camera presets, and Glyph toys, changing
                the very nature of how apps are shared and used.
              </p>
              <p>
                The creativity of millions of Nothing members, now discoverable
                for you to contribute to and enjoy.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-row items-center justify-between">
            <span className="trim-text text-sm uppercase tracking-wider text-essential-grey-darker">
              Playground
            </span>
            <div className="size-2 rounded-full border border-essential-black" />
          </div>
        </div>
      </ScrollReveal>

      {/* Gallery photo stack - right side */}
      <div className="group absolute -bottom-36 right-16 flex size-25 transition-all hover:scale-105 md:-top-25 md:right-10 md:bottom-auto md:size-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Gallery 1"
          src="/decoration/gallery1.webp"
          className="absolute top-1/2 left-1/2 h-14 w-10 -translate-x-full -translate-y-1/2 rotate-[-10deg] rounded-[5px] transition-all group-hover:rotate-[-14deg] md:h-25 md:w-19 md:rounded-xl"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Gallery 3"
          src="/decoration/gallery3.webp"
          className="absolute top-1/2 left-1/2 h-14 w-10 -translate-y-1/2 translate-x-[0%] rotate-[10deg] rounded-[5px] transition-all group-hover:rotate-[14deg] md:h-25 md:w-19 md:rounded-xl"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Gallery 2"
          src="/decoration/gallery2.webp"
          className="absolute top-1/2 left-1/2 h-14 w-10 -translate-x-1/2 -translate-y-1/2 rounded-[5px] md:h-25 md:w-19 md:rounded-xl"
        />
      </div>
    </section>
  );
}
