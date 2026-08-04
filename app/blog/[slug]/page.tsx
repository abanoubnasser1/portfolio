import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { posts, getPostBySlug } from "@/lib/posts";
import Markdown from "@/components/blog/Markdown";


export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="py-24 md:py-32">
     

      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="mb-10 inline-block text-sm uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white"
        >
          ← Back to blog
        </Link>

        <p className="mb-4 text-xs uppercase tracking-widest text-zinc-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </p>

        <h1 className="font-syne mb-10 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
          {post.title}
        </h1>

        <div className="flex flex-col gap-6">
         <Markdown content={post.content} />
        </div>
      </Container>
    </main>
  );
}