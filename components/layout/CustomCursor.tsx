"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOnPage, setIsOnPage] = useState(true);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const styleTag = document.createElement("style");
    styleTag.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
      input, textarea, select, [contenteditable="true"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleTag);
    setIsVisible(true);

    function handleMouseMove(e: MouseEvent) {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button"));
    }

    function handleMouseLeave() {
      setIsOnPage(false);
    }

    function handleMouseEnter() {
      setIsOnPage(true);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      styleTag.remove();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-[width,height,opacity,filter] duration-600 ${
        isHovering ? "h-6 w-6" : "h-3 w-3"
      } ${isOnPage ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}
    />
  );
}