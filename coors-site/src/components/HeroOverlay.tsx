"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { DrinkVariant } from "@/lib/drinks";

interface HeroOverlayProps {
  drink: DrinkVariant;
  currentIndex: number;
  totalDrinks: number;
  onPrev: () => void;
  onNext: () => void;
  isTransitioning: boolean;
}

export default function HeroOverlay({
  drink,
  currentIndex,
  totalDrinks,
  onPrev,
  onNext,
  isTransitioning,
}: HeroOverlayProps) {
  const indexDisplay = String(currentIndex + 1).padStart(2, "0");

  return (
    <div className="pointer-events-none relative z-10 flex h-screen w-full items-center">
      {/* Dark overlay gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14]/80 via-[#0A0E14]/30 to-[#0A0E14]/50" />

      {/* Left side — text block */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <AnimatePresence mode="wait">
          {!isTransitioning && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[75vw] sm:max-w-sm md:max-w-lg"
            >
              <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-[0.1em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                {drink.name}
              </h1>
              <p className="mt-1 text-base font-light tracking-[0.3em] text-[#7AB8E0]/70 sm:text-lg md:text-xl lg:text-2xl">
                {drink.subtitle}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-[#8A9BB5] sm:mt-6 sm:text-sm md:text-base">
                {drink.description}
              </p>

              <div className="pointer-events-auto mt-6 flex gap-3 sm:mt-8 sm:gap-4">
                <button className="rounded-full border border-[#7AB8E0]/30 px-5 py-2.5 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#7AB8E0]/60 hover:bg-[#7AB8E0]/10 sm:px-8 sm:py-3 sm:text-xs">
                  ADD TO
                </button>
                <button
                  className="rounded-full px-5 py-2.5 text-[10px] font-semibold tracking-[0.2em] text-black transition-all duration-300 hover:opacity-90 sm:px-8 sm:py-3 sm:text-xs"
                  style={{ backgroundColor: drink.themeColor }}
                >
                  CART
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right side — variant navigation */}
      <div className="pointer-events-auto absolute right-4 top-1/2 z-10 flex -translate-y-1/2 items-center gap-3 sm:right-6 sm:gap-4 md:right-12 md:gap-6 lg:right-16">
        <span
          className="hidden font-display text-[8rem] font-bold leading-none tracking-tight sm:block md:text-[10rem] lg:text-[12rem]"
          style={{ color: drink.themeColor, opacity: 0.15 }}
        >
          {indexDisplay}
        </span>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <button
            onClick={onPrev}
            className="group flex flex-col items-center gap-1.5 p-2 text-[#8A9BB5]/50 transition-colors hover:text-[#7AB8E0] sm:gap-2"
          >
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="rotate-180">
              <path d="M6 0L6 14M6 14L1 9M6 14L11 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-[8px] tracking-[0.2em] sm:text-[9px] sm:tracking-[0.3em]">PREV</span>
          </button>

          <div className="h-8 w-px bg-[#1A3A52] sm:h-12" />

          <span className="font-mono text-[9px] tracking-widest text-[#8A9BB5]/40 sm:text-[10px]">
            {indexDisplay}/{String(totalDrinks).padStart(2, "0")}
          </span>

          <div className="h-8 w-px bg-[#1A3A52] sm:h-12" />

          <button
            onClick={onNext}
            className="group flex flex-col items-center gap-1.5 p-2 text-[#8A9BB5]/50 transition-colors hover:text-[#7AB8E0] sm:gap-2"
          >
            <span className="text-[8px] tracking-[0.2em] sm:text-[9px] sm:tracking-[0.3em]">NEXT</span>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path d="M6 0L6 14M6 14L1 9M6 14L11 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom center — social icons */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-5 sm:bottom-12 sm:gap-6">
        {/* X/Twitter */}
        <a href="#" className="p-1 text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" className="p-1 text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        {/* Facebook */}
        <a href="#" className="p-1 text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        {/* YouTube */}
        <a href="#" className="p-1 text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
