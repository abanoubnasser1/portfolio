import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <main>
      <section className="mx-auto w-full max-w-[1700px] px-6 py-16 sm:px-10 md:px-20 md:py-32">
        <Link
          href="/"
          className="mb-10 inline-block text-sm uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white md:mb-12"
        >
          ← Back
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-widest text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-syne font-bold mt-6 text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-white">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {project.description}
        </p>

        <Link
          href={project.behanceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-widest text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
        >
          View Full Case on Behance ↗
        </Link>

       

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-8 flex flex-col">
            {project.gallery.map((img, i) => (
              <div key={img} className="relative w-full overflow-hidden bg-zinc-900">
                <Image
                  src={img}
                  alt={`${project.title} detail ${i + 1}`}
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-contain"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto w-full max-w-[1700px]  px-6 py-16 sm:px-10 md:px-20 md:py-32">
        <p className="mb-10 uppercase tracking-[0.35em] text-zinc-500 md:mb-16">
          Other Projects
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {otherProjects.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-900">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(min-width: 768px) 30vw, 90vw"
                />
              </div>
              <h3 className="font-syne font-semibold mt-4 text-xl tracking-tight text-white">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1700px] border-t border-white/10 px-6 py-16 text-center sm:px-10 md:px-20 md:py-32">
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,3.5rem)] tracking-tight text-white">
          Like what you see?
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="rounded-full border border-white/10 bg-white px-8 py-3 text-sm uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/10 px-8 py-3 text-sm uppercase tracking-widest text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}