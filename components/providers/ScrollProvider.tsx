"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>(".scroll-section");

    sections.forEach((section) => {
      const content = section.querySelector(".scroll-content");

      if (!content) return;

      gsap.fromTo(
        content,
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        },
        {
          opacity: 0.0,
          filter: "blur(0px)",
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "90% 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return null;
}