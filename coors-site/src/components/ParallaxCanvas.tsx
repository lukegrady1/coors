"use client";

import { useEffect, useRef, useCallback } from "react";

interface ParallaxCanvasProps {
  frames: HTMLImageElement[];
  scrollHeight: number;
}

export default function ParallaxCanvas({ frames, scrollHeight }: ParallaxCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !frames[frameIndex]) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = frames[frameIndex];
      const canvasW = canvas.width;
      const canvasH = canvas.height;

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvasW / canvasH;

      let drawW: number, drawH: number, drawX: number, drawY: number;

      if (canvasRatio > imgRatio) {
        drawW = canvasW;
        drawH = canvasW / imgRatio;
        drawX = 0;
        drawY = (canvasH - drawH) / 2;
      } else {
        drawH = canvasH;
        drawW = canvasH * imgRatio;
        drawX = (canvasW - drawW) / 2;
        drawY = 0;
      }

      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    },
    [frames]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  useEffect(() => {
    if (frames.length === 0) return;

    drawFrame(0);

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const maxScroll = scrollHeight - window.innerHeight;
        const scrollFraction = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
        const frameIndex = Math.min(
          Math.floor(scrollFraction * (frames.length - 1)),
          frames.length - 1
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [frames, scrollHeight, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-screen w-screen"
      style={{ pointerEvents: "none" }}
    />
  );
}
