import ScrollReveal from "@/components/common/ScrollReveal";

export default function PlaygroundVideo() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 px-6 py-12 md:px-12 mb-10 md:mb-20">
      <ScrollReveal className="flex w-full justify-center">
        <div
          className="relative w-full overflow-hidden rounded-[20px] bg-essential-grey-bg"
          style={{ maxWidth: "1000px" }}
        >
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1122891264?h=3331e3b536&title=0&byline=0&portrait=0&autoplay=1&controls=0&dnt=1&loop=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Playground"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
