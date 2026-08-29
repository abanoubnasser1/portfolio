import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guidelines, getGuidelineBySlug } from "@/lib/guidelines";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return guidelines.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guideline = getGuidelineBySlug(slug);
  if (!guideline) return {};

  return {
    title: `${guideline.clientName} — ${guideline.title}`,
    robots: { index: false, follow: false },
  };
}

export default async function GuidelinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guideline = getGuidelineBySlug(slug);

  if (!guideline) notFound();

  const sourceProject = projects.find((p) => p.guidelineSlug === slug);
  const backHref = sourceProject ? `/work/${sourceProject.slug}` : "/";

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-20">
        <div className="flex items-center gap-4">
          <Link
            href={backHref}
            aria-label="Back to project"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
          >
            <span className="text-base">←</span>
          </Link>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {guideline.clientName}
            </p>
            <h1 className="font-syne text-xl font-bold text-white sm:text-2xl">
              {guideline.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {guideline.allowDownload && (
            <a
              href={guideline.pdfPath}
              download
              className="rounded-full border border-white/10 px-5 py-2.5 text-xs uppercase tracking-widest text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
            >
              Download
            </a>
          )}
        </div>
      </div>

      <div className="flex-1 border-t border-white/10 bg-zinc-950">
        <iframe
          src={`${guideline.pdfPath}#toolbar=0`}
          title={`${guideline.clientName} ${guideline.title}`}
          className="h-[85vh] w-full"
        />
      </div>
    </main>
  );
}