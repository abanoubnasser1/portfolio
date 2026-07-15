"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1700px] px-12 py-32 md:px-20">
      <p className="mb-16 uppercase tracking-[0.35em] text-zinc-500">
        Selected Work
      </p>

      <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
        {projects.map((project, i) => (
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

                <span className="absolute left-5 top-5 text-sm tabular-nums text-white/70">
                  {project.index}
                </span>

                <span className="absolute right-5 top-5 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 md:text-3xl">
                  {project.title}
                </h3>
              </div>

              <div className="mt-3 flex gap-3">
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
    </section>
  );
}