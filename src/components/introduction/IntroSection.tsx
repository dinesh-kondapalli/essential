import ScrollReveal from "@/components/common/ScrollReveal";

export default function IntroSection() {
  return (
    <section className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-2 px-6 md:px-12 mb-56">
      <ScrollReveal>
        <div className="flex w-full max-w-md shrink-0 flex-col items-start justify-end gap-16 rounded-2xl bg-white p-3">
          <div className="relative flex flex-col items-start justify-start">
            <div className="flex flex-col gap-4 text-sm leading-relaxed md:text-base">
              <p>
                Personal computing is entering a new phase. Where devices adapt
                to people, not the other way around.
              </p>
              <p>
                At Nothing, we&apos;re building a new kind of phone, where data
                and design come together to create experiences no lab can
                replicate.
              </p>
              <p>
                The future is software you can shape with simple language, made
                possible only on top a powerful new phone that truly knows who
                you are.
              </p>
              <p>
                This combination is the only way to make an impactful OS that is
                just for you. Across every device, we can bring this knowledge
                into your control. This is how we move personal technology
                forward.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-row items-center justify-between">
            <span className="trim-text text-sm uppercase tracking-wider text-essential-grey-darker">
              Introduction
            </span>
            <div className="size-2 rounded-full border border-essential-black" />
          </div>
        </div>
      </ScrollReveal>

      {/* Decoration Video - 02.mp4 on bottom right */}
      <div
        className="pointer-events-none z-[-1] size-25 md:size-52 border-2 border-white -right-6 md:-right-20 -bottom-4 md:-bottom-20 absolute"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 110%, 0% 110%)",
        }}
      >
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
