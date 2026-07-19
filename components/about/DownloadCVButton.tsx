"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

export default function DownloadCVButton() {
  return (
    <Link
      href="/cv/Abanoub-Nasser-CV.pdf"
      download
      onClick={() => track("cv_download")}
      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-widest text-zinc-300 transition-colors hover:border-white/30 hover:text-white sm:mt-10 sm:text-sm"
    >
      Download CV
      <span className="text-base">↓</span>
    </Link>
  );
}