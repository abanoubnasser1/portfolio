"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 0.8,
      smoothWheel: true,
    });

    // Force scroll to top instantly on every route change
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}