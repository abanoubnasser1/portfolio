"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsAnimation() {
  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(".project-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return null;
}