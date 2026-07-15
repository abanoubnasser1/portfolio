"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 120], [1, 0]);
  const blur = useTransform(scrollY, [0, 120], [0, 6]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);
  const y = useTransform(scrollY, [0, 120], [0, 20]);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
      <motion.div
        style={{ opacity, filter, y }}
        className="flex items-center gap-2 text-zinc-300"
      >
        <svg
          width="12"
          height="18"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="2"
            width="14"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1"
          />
          <motion.circle
            cx="8"
            cy="8"
            r="1.5"
            fill="currentColor"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll Down
        </span>
      </motion.div>
    </div>
  );
}