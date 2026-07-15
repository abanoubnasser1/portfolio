"use client";

import ScrollBlurText, { ScrollBlurItem } from "../text/ScrollBlurText";

const items: ScrollBlurItem[] = [
  { type: "word", content: "find" },
  { type: "word", content: "me" },
  { type: "word", content: "on" },
  {
    type: "image",
    src: "/content/behance.png",
    alt: "Behance",
    href: "https://www.behance.net/abanoubnasser",
    className: "h-[0.68em] w-auto inline align-middle -translate-y-[5px]",
  },
  {
    type: "image",
    src: "/content/instagram.png",
    alt: "Instagram",
    href: "https://instagram.com/abanoubnasser_",
    className: "h-[1.4em] w-auto inline align-middle -translate-y-[3px]",
  },
];

export default function FindMeOn() {
  return (
    <div className="border-white/10 pt-16">
      <ScrollBlurText
        items={items}
        start="start 0.9"
        end="start 0.7"
        className="whitespace-nowrap text-[clamp(1rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.05em] text-white"
      />
    </div>
  );
}