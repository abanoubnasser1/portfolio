"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.config({
      nullTargetWarn: false,
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}