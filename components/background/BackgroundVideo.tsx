"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked — retry once the video can actually play through
          video.addEventListener("canplaythrough", () => video.play().catch(() => {}), {
            once: true,
          });
        });
      }
    };

    tryPlay();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <motion.video
        ref={videoRef}
        style={{ scale }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="h-full w-full object-cover opacity-80"
        {...{ "webkit-playsinline": "true" }}
      >
        <source src="/video/mbg.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </div>
  );
}