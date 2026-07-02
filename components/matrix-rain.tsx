"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "アィウエカキクケコサシスセソタチツテト01</>{}[]=+*#$_;";
const FONT_SIZE = 14;
const FPS = 20;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let drops: number[] = [];
    let animationId = 0;
    let lastFrame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.ceil(canvas.width / FONT_SIZE);
      drops = Array.from(
        { length: columns },
        () => Math.random() * -canvas.height,
      );
    };

    const draw = (time: number) => {
      animationId = requestAnimationFrame(draw);
      if (time - lastFrame < 1000 / FPS) return;
      lastFrame = time;

      // Fade previous frame while keeping the canvas transparent
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgb(0 0 0 / 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      ctx.font = `${FONT_SIZE}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle =
          Math.random() < 0.08
            ? "rgb(34 229 255 / 0.9)"
            : "rgb(139 47 255 / 0.6)";
        ctx.fillText(glyph, i * FONT_SIZE, drops[i]);

        if (drops[i] > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        } else {
          drops[i] += FONT_SIZE;
        }
      }
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40"
      aria-hidden
    />
  );
}
