"use client";

import { useEffect } from "react";

export default function ProjectPageEffects() {
  useEffect(() => {
    function handleContextMenu(e: MouseEvent) {
      e.preventDefault();
    }

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return null;
}