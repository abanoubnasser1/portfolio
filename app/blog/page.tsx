import Link from "next/link";
import Container from "@/components/ui/Container";
import { getSortedPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Thoughts on branding, design, and building visual identities.",
};

export default function BlogIndexPage() {
    
  const posts = getSortedPosts();

  return (
    
    <main className="py-24 md:py-32">
        
         <section className="mx-auto w-full max-w-[1700px] px-6 sm:px-10 md:px-20">
        <Link
          href="/"
          className="mb-10 inline-block text-sm uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white md:mb-12"
        >
          ← Back Home
        </Link>
        </section>
        
      <Container>
        
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-zinc-500">
          Blog
        </p>
        <h1 className="font-syne mb-16 text-[clamp(2.2rem,5vw,4rem)] font-bold text-white">
          Thoughts on branding &amp; design
        </h1>

        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 py-8 transition-colors sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-syne text-xl font-bold text-white transition-colors group-hover:text-zinc-300 sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-zinc-400">{post.excerpt}</p>
              </div>

              <div className="flex shrink-0 items-center gap-4 text-xs uppercase tracking-widest text-zinc-500">
                <span>{post.readTime}</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}