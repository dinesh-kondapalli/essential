export default function VideoSection() {
  return (
    <section
      data-background="3"
      className="flex w-full flex-col items-center justify-center px-6 md:px-12 py-10 md:py-20"
    >
      <div
        className="relative w-full overflow-hidden rounded-[20px] bg-essential-grey-bg"
        style={{ maxWidth: "1200px" }}
      >
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1122880580?h=2a2149ecd7&title=0&byline=0&portrait=0&autoplay=1&controls=0&dnt=1&loop=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Essential"
          />
        </div>
      </div>
    </section>
  );
}
