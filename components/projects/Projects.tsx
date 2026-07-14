"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  index: string;
  tags: string[];
  title: string;
  href: string;
  image: string;
}

const projects: Project[] = [
  {
    index: "01",
    tags: ["Branding", "Packaging"],
    title: "Al Sultan Omar - Premium Honey",
    href: "https://www.behance.net/gallery/251293575/AL-SULTAN-OMAR-PREMIUM-HONEY",
    image: "/projects/honey.jpg",
  },
  {
    index: "02",
    tags: ["Branding", "Identity"],
    title: "Q West",
    href: "https://www.behance.net/gallery/207691419/Q-WEST",
    image: "/projects/qwest.jpg",
  },
  {
    index: "03",
    tags: ["Branding", "Digital"],
    title: "Foam – Car Wash & Detailing",
    href: "https://www.behance.net/gallery/220912065/Foam-Smart-Car-Wash-Detailing-Experience",
    image: "/projects/foam.jpg",
  },
  {
    index: "04",
    tags: ["Branding", "Tech"],
    title: "Corelink Technologies",
    href: "https://www.behance.net/gallery/236718675/Corelink-Technologies",
    image: "/projects/corelink.jpg",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="work" className="mx-auto w-full max-w-[1700px] px-12 py-32 md:px-20">
      <p className="mb-16 uppercase tracking-[0.35em] text-zinc-500">
        Selected Work
      </p>

      <div className="relative border-t border-white/10">
        {projects.map((project, i) => {
          const isActive = activeIndex === i;

          return (
            <Link
              key={project.index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative flex flex-col gap-4 border-b border-white/10 py-8 transition-colors md:flex-row md:items-center md:justify-between md:py-10"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span
                  className={`text-sm tabular-nums transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-600"
                  }`}
                >
                  {project.index}
                </span>

                <h3
                  className={`text-3xl font-medium leading-none tracking-tight transition-colors duration-300 md:text-6xl ${
                    isActive ? "text-white" : "text-zinc-500"
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-8 pl-11 md:pl-0">
                <div className="flex gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-widest text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className={`text-2xl transition-transform duration-300 ${
                    isActive ? "translate-x-1 text-white" : "text-zinc-600"
                  }`}
                >
                  &rarr;
                </span>
              </div>

              {/* Floating preview image that follows hover */}
              <div
                className={`pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg transition-all duration-300 md:block ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ width: 320, height: 220 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}