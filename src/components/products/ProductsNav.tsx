"use client";

import { useState, useRef, useEffect, type ComponentType } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/common/ScrollReveal";
import EarSvg from "./svgs/EarSvg";
import Phone1Svg from "./svgs/Phone1Svg";
import Phone2Svg from "./svgs/Phone2Svg";
import EssentialSpaceSvg from "./svgs/EssentialSpaceSvg";
import EssentialAppsSvg from "./svgs/EssentialAppsSvg";
import AiNativeSvg from "./svgs/AiNativeSvg";

interface Product {
  label: string;
  id: string;
  Svg: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  date: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    label: "EAR ( 1 )",
    id: "ear-1",
    Svg: EarSvg,
    title: "Ear (1)",
    date: "Q1 2021",
    image: "/decoration/ear1.webp",
    description:
      "Our debut product. Introducing Nothing to the world in the loudest way possible.",
  },
  {
    label: "PHONE ( 1 )",
    id: "phone-1",
    Svg: Phone1Svg,
    title: "Phone (1)",
    date: "Q2 2022",
    image: "/decoration/phone1.webp",
    description: "Live launched our first smartphone to 2 million viewers.",
  },
  {
    label: "PHONE ( 2 )",
    id: "phone-2",
    Svg: Phone2Svg,
    title: "Phone (2)",
    date: "Q2 2023",
    image: "/decoration/phone2.webp",
    description:
      "Phone 2 is our most premium device yet. Phone (2a) breaks records, selling 100,000 units in 24 hours.",
  },
  {
    label: "ESSENTIAL SPACE",
    id: "essential-space",
    Svg: EssentialSpaceSvg,
    title: "Essential Space",
    date: "Q1 2025",
    image: "/decoration/essential-space.webp",
    description:
      "Our first glimpse into hardware + software AI features working together.",
  },
  {
    label: "ESSENTIAL APPS",
    id: "essential-apps",
    Svg: EssentialAppsSvg,
    title: "Essential Apps",
    date: "Q3 2025",
    image: "/decoration/essential-apps.webp",
    description:
      "The AI operating system foundation for a personal experience at scale.",
  },
  {
    label: "AI-NATIVE DEVICES",
    id: "ai-native",
    Svg: AiNativeSvg,
    title: "AI-Native Devices",
    date: "H2 2026",
    image: "/decoration/ai-native0930.webp",
    description:
      "Pairing software experiences with new use case specific shaped devices.",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 overflow-hidden rounded-[20px] bg-white md:aspect-square md:w-auto">
      <div className="flex w-full flex-row items-center justify-between p-2">
        <h3 className="trim-text px-2">{product.title}</h3>
        <div className="flex items-center rounded-full bg-red p-2 text-white">
          <span className="px-1">{product.date}</span>
        </div>
      </div>
      <div className="flex min-h-28 w-full flex-1 flex-row-reverse gap-4 pr-2 pb-2 pl-4 md:min-h-0 md:flex-col md:justify-between">
        <div className="flex min-w-18 flex-1 items-center justify-center">
          <Image
            alt={product.label}
            loading="lazy"
            width={150}
            height={150}
            className="aspect-square h-full max-h-18 w-auto rounded-3xl object-contain md:max-h-38"
            src={product.image}
          />
        </div>
        <p className="trim-text flex flex-col items-center justify-center self-stretch text-essential-black">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default function ProductsNav() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // Track which items are currently in the center strip
  const visibleItems = useRef<Set<number>>(new Set());

  // Single observer for individual product items
  // Tracks both which product is active AND whether any product is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index === -1) return;

          if (entry.isIntersecting) {
            visibleItems.current.add(index);
            setActiveProduct(products[index].id);
          } else {
            visibleItems.current.delete(index);
            // If no items are visible in the center strip, hide the card
            if (visibleItems.current.size === 0) {
              setActiveProduct(null);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const activeProductData = activeProduct
    ? products.find((p) => p.id === activeProduct)
    : null;

  return (
    <section className="relative mt-20 flex min-h-[100svh] w-full max-w-7xl flex-col items-start justify-center px-6 py-12 md:px-12 mb-80 pb-56 md:mb-40 md:pb-20">
      {/* Fixed product card overlay - only visible when a product is in the center strip */}
      <div
        className="md:-translate-y-1/2 md:-translate-x-1/2 fixed bottom-0 left-0 z-30 flex items-center justify-center p-4 md:top-1/2 md:bottom-auto md:left-1/2 md:max-w-sm transition-opacity duration-300"
        style={{
          opacity: activeProductData ? 1 : 0,
          pointerEvents: activeProductData ? "auto" : "none",
        }}
      >
        {activeProductData && <ProductCard product={activeProductData} />}
      </div>

      {/* Product SVG headings nav */}
      <nav className="flex w-full flex-col items-center justify-center gap-12.5 overflow-visible pb-20 md:items-start md:justify-start">
        {products.map((product, i) => (
          <ScrollReveal key={product.id} delay={i * 0.08} distance={30}>
            <button
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              type="button"
              className="group cursor-pointer transition-colors duration-200"
            >
              <span className="relative flex pb-2.5">
                <span
                  className="text-headline md:text-headline-md font-ndot leading-[1.3em] whitespace-pre text-transparent"
                  style={{ lineHeight: "1.3em" }}
                  aria-hidden="true"
                >
                  {product.label}
                </span>
                <product.Svg
                  className={`overflow-visible transition-colors duration-500 ${
                    activeProduct === product.id
                      ? "text-essential-black"
                      : "text-essential-grey-darker group-hover:text-essential-black"
                  }`}
                />
              </span>
            </button>
          </ScrollReveal>
        ))}
      </nav>
    </section>
  );
}
