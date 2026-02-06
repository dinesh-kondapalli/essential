import ScrollReveal from "@/components/common/ScrollReveal";
import ValuesSvg from "./ValuesSvg";

export default function ValuesSection() {
  return (
    <section className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-2 px-6 md:px-12 mb-56">
      <ScrollReveal>
        <div className="mb-12 w-full">
          <span className="relative flex pb-2.5">
            <span
              className="text-center text-headline md:text-headline-md font-ndot leading-[1.3em] whitespace-pre-line w-full text-transparent"
              aria-hidden="true"
            >
              {"NEW THINKING FOR A NEW ERA\nOF COMPUTING"}
            </span>

            <ValuesSvg className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible" />
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="flex w-full max-w-md shrink-0 flex-col items-start justify-end gap-16 rounded-2xl bg-white p-3">
          <div className="relative flex flex-col items-start justify-start">
            <div className="flex flex-col gap-4 text-sm leading-relaxed md:text-base">
              <p>
                <span className="font-bold">Total openness.</span>{" "}
                <span>
                  Creators and platform owners share the same access level. No
                  barriers, maximum possibility.
                </span>
              </p>
              <p>
                <span className="font-bold">Remix and evolve.</span>{" "}
                <span>
                  Take what exists and make it yours. A culture of remix where
                  every contribution enhances the next.
                </span>
              </p>
              <p>
                <span className="font-bold">Radically personal.</span>{" "}
                <span>
                  There&apos;s no right answer, only what works for you. If
                  it&apos;s beautiful to you, it&apos;s beautiful period.
                </span>
              </p>
            </div>
          </div>

          <div className="flex w-full flex-row items-center justify-between">
            <span className="trim-text text-sm uppercase tracking-wider text-essential-grey-darker">
              Values
            </span>
            <div className="size-2 rounded-full border border-essential-black" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
