"use client";

import Image from "next/image";

type Props = {
  image: string | null;
  visible: boolean;
};

export default function ProjectPreview({
  image,
  visible,
}: Props) {
  if (!image) return null;

  return (
    <div
      className={`
        absolute
        right-0
        top-1/2
        -translate-y-1/2
        w-[460px]
        aspect-video
        overflow-hidden
        rounded-2xl
        bg-zinc-900
        shadow-2xl
        transition-all
        duration-500
        ease-out
        ${
          visible
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-16 scale-95"
        }
      `}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="460px"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}