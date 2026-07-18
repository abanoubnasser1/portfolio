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
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full min-w-0 max-w-2xl flex-col gap-3 sm:mt-10 sm:gap-4"
    >
      <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full min-w-0 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30 sm:px-6 sm:py-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full min-w-0 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30 sm:px-6 sm:py-3"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell me about your project"
        required
        rows={4}
        className="w-full min-w-0 resize-none rounded-2xl border border-white/10 bg-transparent px-5 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30 sm:px-6 sm:py-4"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-block w-fit rounded-full border border-white/10 bg-white px-6 py-2.5 text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-90 disabled:opacity-50 sm:mt-2 sm:px-8 sm:py-3 sm:text-sm"
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