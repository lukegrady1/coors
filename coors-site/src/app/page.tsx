"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { drinks, loadFramePaths } from "@/lib/drinks";
import LoadingScreen from "@/components/LoadingScreen";
import ParallaxCanvas from "@/components/ParallaxCanvas";
import HeroOverlay from "@/components/HeroOverlay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ProductSection,
  IngredientsSection,
  NutritionSection,
  ReviewsSection,
  FAQSection,
  CTASection,
} from "@/components/Sections";

const SCROLL_HEIGHT_MULTIPLIER = 5;

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeFrames, setActiveFrames] = useState<HTMLImageElement[]>([]);
  const framePathsRef = useRef<string[]>([]);
  const cachedFramesRef = useRef<HTMLImageElement[] | null>(null);

  const currentDrink = drinks[currentDrinkIndex];

  const preloadImages = useCallback(
    (paths: string[], onProgress?: (pct: number) => void): Promise<HTMLImageElement[]> => {
      if (cachedFramesRef.current) return Promise.resolve(cachedFramesRef.current);

      const total = paths.length;
      let loaded = 0;

      return new Promise((resolve) => {
        const images: HTMLImageElement[] = new Array(total);
        let resolved = false;

        for (let i = 0; i < total; i++) {
          const img = new Image();
          img.src = paths[i];
          img.onload = img.onerror = () => {
            loaded++;
            images[i] = img;
            onProgress?.((loaded / total) * 100);
            if (loaded === total && !resolved) {
              resolved = true;
              cachedFramesRef.current = images;
              resolve(images);
            }
          };
        }
      });
    },
    []
  );

  useEffect(() => {
    loadFramePaths().then((paths) => {
      framePathsRef.current = paths;
      preloadImages(paths, setLoadingProgress).then((frames) => {
        setActiveFrames(frames);
        setTimeout(() => setIsLoading(false), 500);
      });
    });
  }, [preloadImages]);

  const switchDrink = useCallback(
    async (newIndex: number) => {
      if (newIndex === currentDrinkIndex || isTransitioning) return;

      setIsTransitioning(true);
      await new Promise((r) => setTimeout(r, 300));

      setCurrentDrinkIndex(newIndex);

      setTimeout(() => setIsTransitioning(false), 100);
    },
    [currentDrinkIndex, isTransitioning]
  );

  const handlePrev = () => {
    const newIndex = currentDrinkIndex === 0 ? drinks.length - 1 : currentDrinkIndex - 1;
    switchDrink(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentDrinkIndex === drinks.length - 1 ? 0 : currentDrinkIndex + 1;
    switchDrink(newIndex);
  };

  const scrollHeight =
    typeof window !== "undefined"
      ? window.innerHeight * SCROLL_HEIGHT_MULTIPLIER
      : 5000;

  return (
    <>
      <LoadingScreen progress={loadingProgress} isVisible={isLoading} />

      {!isLoading && (
        <>
          <Navbar />

          {/* Parallax hero wrapper */}
          <div style={{ height: scrollHeight }}>
            <ParallaxCanvas frames={activeFrames} scrollHeight={scrollHeight} />
            <div className="sticky top-0 h-screen">
              <HeroOverlay
                drink={currentDrink}
                currentIndex={currentDrinkIndex}
                totalDrinks={drinks.length}
                onPrev={handlePrev}
                onNext={handleNext}
                isTransitioning={isTransitioning}
              />
            </div>
          </div>

          {/* Content sections — relative + z-10 so they paint over the fixed canvas */}
          <div className="relative z-10 bg-[#0A0E14]">
            <ProductSection />
            <IngredientsSection />
            <NutritionSection />
            <ReviewsSection />
            <FAQSection />
            <CTASection />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
