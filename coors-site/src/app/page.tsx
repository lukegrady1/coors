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
const INITIAL_BATCH_SIZE = 60;

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [frameCount, setFrameCount] = useState(0);

  // Mutable ref that grows as frames load — ParallaxCanvas reads from this
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const totalFramesRef = useRef(0);

  const loadBatch = useCallback(
    (paths: string[], start: number, end: number): Promise<void> => {
      return new Promise((resolve) => {
        const batchSize = end - start;
        let loaded = 0;

        for (let i = start; i < end; i++) {
          const img = new Image();
          img.src = paths[i];
          img.onload = img.onerror = () => {
            framesRef.current[i] = img;
            loaded++;
            if (loaded === batchSize) resolve();
          };
        }
      });
    },
    []
  );

  useEffect(() => {
    let cancelled = false;

    loadFramePaths().then(async (paths) => {
      const total = paths.length;
      totalFramesRef.current = total;
      framesRef.current = new Array(total).fill(null);

      // Phase 1: Load first batch — drives the loading bar to ~100%
      const firstBatch = Math.min(INITIAL_BATCH_SIZE, total);

      let phase1Loaded = 0;
      await new Promise<void>((resolve) => {
        for (let i = 0; i < firstBatch; i++) {
          const img = new Image();
          img.src = paths[i];
          img.onload = img.onerror = () => {
            framesRef.current[i] = img;
            phase1Loaded++;
            if (!cancelled) {
              setLoadingProgress((phase1Loaded / firstBatch) * 100);
            }
            if (phase1Loaded === firstBatch) resolve();
          };
        }
      });

      if (cancelled) return;

      // Show the site immediately
      setFrameCount(firstBatch);
      setTimeout(() => setIsLoading(false), 400);

      // Phase 2: Load remaining frames in small chunks in the background
      const CHUNK_SIZE = 10;
      for (let start = firstBatch; start < total; start += CHUNK_SIZE) {
        if (cancelled) return;
        const end = Math.min(start + CHUNK_SIZE, total);
        await loadBatch(paths, start, end);
        if (!cancelled) {
          setFrameCount(end);
        }
      }
    });

    return () => {
      cancelled = true;
    };
  }, [loadBatch]);

  const currentDrink = drinks[currentDrinkIndex];

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
            <ParallaxCanvas
              framesRef={framesRef}
              frameCount={frameCount}
              totalFrames={totalFramesRef.current}
              scrollHeight={scrollHeight}
            />
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
