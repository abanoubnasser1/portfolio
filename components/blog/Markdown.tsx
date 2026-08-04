import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { syne } from "@/app/fonts";


interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className={`font-syne ${syne.className} text-5xl font-bold mb-8`}>
            {children}
          </h1>
        ),

        h2: ({ children }) => (
          <h2 className={`font-syne ${syne.className} text-4xl font-bold mt-14 mb-6`}>
            {children}
          </h2>
        ),

        h3: ({ children }) => (
          <h3 className={`font-syne ${syne.className} text-3xl font-semibold mt-10 mb-4`}>
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <p className=" text-xl leading-8 text-neutral-300 mb-6">
            {children}
          </p>
        ),

        ul: ({ children }) => (
          <ul className="list-disc pl-6 space-y-3 mb-6">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            {children}
          </ol>
        ),

        li: ({ children }) => (
          <li className=" text-xl text-neutral-300">
            {children}
          </li>
        ),

        strong: ({ children }) => (
          <strong className="font-semibold text-xl text-white">
            {children}
          </strong>
        ),
img: ({ src, alt }) => (
  <span className="my-8 block overflow-hidden rounded-xl bg-zinc-900">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt ?? ""} className="h-auto w-full object-cover" />
  </span>
),
        em: ({ children }) => (
          <em className="italic text-xl text-neutral-100">
            {children}
          </em>
        ),
        table: ({ children }) => (
            <table className="w-full text-center text-xl text-neutral-300 border border-white/10 mb-6">
              {children}
            </table>
          ),

        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-white/20 pl-5 italic text-neutral-400 my-8">
            {children}
          </blockquote>
        ),

        hr: () => (
          <hr className="border-white/10 my-10" />
        ),

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:opacity-70 transition"
          >
            {children}
          </a>
        ),

        code: ({ children }) => (
          <code className="bg-white/10 rounded px-1.5 py-1 text-sm">
            {children}
          </code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}