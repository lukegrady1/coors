"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  progress: number;
  isVisible: boolean;
}

export default function LoadingScreen({ progress, isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0E14]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-display text-5xl font-bold tracking-[0.3em] text-white md:text-7xl">
                COORS
              </h1>
              <span className="text-sm font-light tracking-[0.5em] text-[#7AB8E0]/60">
                LIGHT
              </span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] w-48 overflow-hidden bg-[#1A3A52] sm:w-64 md:w-80">
                <motion.div
                  className="h-full bg-[#7AB8E0]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "linear" }}
                />
              </div>
              <span className="font-mono text-xs tracking-[0.3em] text-[#7AB8E0]/40">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 text-[10px] tracking-[0.4em] text-[#7AB8E0]/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            COLD AS THE ROCKIES
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
