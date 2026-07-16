"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgngdrj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-2xl flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell me about your project"
        required
        rows={5}
        className="w-full resize-none rounded-2xl border border-white/10 bg-transparent px-6 py-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-block w-fit rounded-full border border-white/10 bg-white px-8 py-3 text-sm uppercase tracking-widest text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-400">Thanks! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
      )}
    </form>
  );
}