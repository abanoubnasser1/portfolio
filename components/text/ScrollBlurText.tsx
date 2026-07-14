"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";

interface RevealWrapperProps {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
  className?: string;
}

function RevealWrapper({ progress, range, children, className = "" }: RevealWrapperProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  const blur = useTransform(progress, range, [8, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.span
      style={{ opacity, filter }}
      className={`inline-block will-change-[filter,opacity] ${className}`}
    >
      {children}
    </motion.span>
  );
}

export type ScrollBlurItem =
  | { type: "word"; content: string }
  | {
      type: "image";
      src: string;
      alt: string;
      href?: string;
      className?: string;
    };

interface ScrollBlurTextProps {
  text?: string;
  items?: ScrollBlurItem[];
  className?: string;
  start?: string;
  end?: string;
}

export default function ScrollBlurText({
  text,
  items,
  className = "",
  start = "start 0.9",
  end = "start 0.35",
}: ScrollBlurTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [start, end] as never,
  });

  const resolvedItems: ScrollBlurItem[] =
    items ?? (text ?? "").split(" ").map((word) => ({ type: "word", content: word }));

  return (
    <p ref={containerRef} className={className}>
      {resolvedItems.map((item, i) => {
        const rangeStart = i / resolvedItems.length;
        const rangeEnd = rangeStart + 1 / resolvedItems.length;
        const range: [number, number] = [rangeStart, rangeEnd];
        const isLast = i === resolvedItems.length - 1;

        if (item.type === "image") {
          const imageEl = (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.alt}
              className={item.className ?? "h-[1em] w-auto inline-block"}
            />
          );

          const wrappedImage = item.href ? (
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.alt}
              className="inline-block opacity-90 transition-opacity duration-300 hover:opacity-100"
            >
              {imageEl}
            </Link>
          ) : (
            imageEl
          );

          return (
            <RevealWrapper
              key={`image-${i}`}
              progress={scrollYProgress}
              range={range}
              className="align-middle mx-1"
            >
              {wrappedImage}
              {!isLast && "\u00A0"}
            </RevealWrapper>
          );
        }

        return (
          <RevealWrapper key={`word-${i}-${item.content}`} progress={scrollYProgress} range={range}>
            {item.content}
            {!isLast && "\u00A0"}
          </RevealWrapper>
        );
      })}
    </p>
  );
}