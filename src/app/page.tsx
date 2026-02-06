import MonospaceGrid from "@/components/background/MonospaceGrid";
import CreatorSpinner from "@/components/creator-spinner/CreatorSpinner";
import FloatingCTA from "@/components/floating-cta/FloatingCTA";
import HeroSection from "@/components/hero/HeroSection";
import TaglineSection from "@/components/tagline/TaglineSection";
import IntroSection from "@/components/introduction/IntroSection";
import VideoSection from "@/components/video/VideoSection";
import EssentialAppsHeading from "@/components/introduction/EssentialAppsHeading";
import EssentialAppsCard from "@/components/introduction/EssentialAppsCard";
import PlaygroundSection from "@/components/playground/PlaygroundSection";
import PlaygroundVideo from "@/components/playground/PlaygroundVideo";
import PlaygroundCard from "@/components/playground/PlaygroundCard";
import ValuesSection from "@/components/values/ValuesSection";
import StorySection from "@/components/story/StorySection";
import ProductsNav from "@/components/products/ProductsNav";
import Footer from "@/components/footer/Footer";

function CrossMarker() {
  return (
    <div className="relative size-4">
      <div className="-translate-x-1/2 absolute top-1/2 left-1/2 h-px w-full bg-[#C8C8C8]" />
      <div className="-translate-y-1/2 absolute top-1/2 left-1/2 h-full w-px bg-[#C8C8C8]" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Fixed ASCII grid background */}
      <MonospaceGrid />

      {/* Fixed cross markers overlay - top and bottom rows (matching source) */}
      <div className="pointer-events-none fixed inset-0 z-0 flex flex-col justify-between p-4 md:p-6">
        <div className="flex items-center justify-between p-2 md:p-4">
          <CrossMarker />
          <CrossMarker />
          <CrossMarker />
        </div>
        <div className="flex items-center justify-between p-2 md:p-4">
          <CrossMarker />
          <CrossMarker />
          <CrossMarker />
        </div>
      </div>

      {/* Creator Spinner (fixed top-right, no rotation) */}
      <CreatorSpinner />

      {/* Main Content */}
      <main className="relative flex w-full flex-col items-center overflow-x-hidden">
        <HeroSection />
        <TaglineSection />
        <VideoSection />
        <IntroSection />
        <EssentialAppsHeading />
        <EssentialAppsCard />
        <PlaygroundSection />
        <PlaygroundVideo />
        <PlaygroundCard />
        <ValuesSection />
        <StorySection />
        <ProductsNav />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA (fixed bottom-center, hidden when footer visible) */}
      <FloatingCTA />
    </>
  );
}
