"use client";

import ScrollBlurText, { ScrollBlurItem } from "../text/ScrollBlurText";

const textItems: ScrollBlurItem[] = [
  { type: "word", content: "find" },
  { type: "word", content: "me" },
  { type: "word", content: "on" },
];

const iconItems: ScrollBlurItem[] = [
  {
    type: "image",
    src: "/content/social/behance.png",
    alt: "Behance",
    href: "https://www.behance.net/abanoubnasser",
    className: "h-9 w-9 sm:h-11 sm:w-11 inline-block",
  },
  {
    type: "image",
    src: "/content/social/instagram.png",
    alt: "Instagram",
    href: "https://instagram.com/abanoubnasser_",
    className: "h-9 w-9 sm:h-11 sm:w-11 inline-block",
  },
  {
    type: "image",
    src: "/content/social/whatsapp.png",
    alt: "WhatsApp",
    href: "https://wa.me/201094172845",
    className: "h-9 w-9 sm:h-11 sm:w-11 inline-block",
  },
];

export default function FindMeOn() {
  return (
    <div className="border-white/10 pb-10 pt-16">
      <ScrollBlurText
        items={textItems}
        start="start 0.95"
        end="start 0.8"
        className="font-syne font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-white"
      />

      <ScrollBlurText
        items={iconItems}
        start="start 0.98"
        end="start 0.88"
        className="mt-6 flex items-center gap-5 sm:mt-8 sm:gap-7"
      />
    </div>
  );
}