"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects as allProjects } from "@/lib/projects";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function Projects() {
  const [orderedProjects, setOrderedProjects] = useState(allProjects);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setOrderedProjects(shuffle(allProjects));
  }, []);

  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 4);
  const hasMore = allProjects.length > 4;

  return (
    <section id="work" className="mx-auto w-full max-w-[1700px] px-6 pb-20 pt-8 sm:px-10 md:px-20 md:pb-32 md:pt-10">
      <p className="mb-10 uppercase tracking-[0.35em] text-zinc-500 md:mb-16">
        Selected Work
      </p>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
        {visibleProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.1 }}
          >
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(min-width: 768px) 45vw, 90vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              

                <span className="absolute right-5 top-5 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="font-syne font-semibold text-2xl tracking-tight text-white transition-colors duration-300 md:text-3xl">
                  {project.title}
                </h3>
              </div>

              <div className="mt-3 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-widest text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {hasMore && !showAll && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-white/10 px-6 py-2.5 text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}