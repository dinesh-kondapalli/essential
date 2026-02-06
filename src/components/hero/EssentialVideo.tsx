import ScrollReveal from "@/components/common/ScrollReveal";

export default function EssentialVideo() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 overflow-hidden px-6 md:px-12 mb-20">
      <ScrollReveal distance={60} duration={1}>
        <div
          className="relative aspect-video w-full p-px"
          style={{ maxWidth: "calc(1091.9px)" }}
        >
          <div className="relative z-0 aspect-video w-full overflow-hidden rounded-[20px]">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1122880580?title=0&byline=0&portrait=0&autoplay=1&controls=0&dnt=1&loop=1&app_id=122963&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 size-full"
                title="Essential"
              />
            </div>
          </div>
          <button type="button" className="absolute inset-0 cursor-pointer" />
        </div>
      </ScrollReveal>
    </section>
  );
}
