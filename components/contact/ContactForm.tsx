"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const labelClass = "mb-2 block text-xs uppercase tracking-widest text-tertiary";
const fieldClass =
  "w-full min-w-0 border border-control bg-transparent px-5 py-2.5 text-sm text-white placeholder:text-tertiary outline-none transition-colors focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white sm:px-6 sm:py-3";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState("");

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

  const message =
    status === "success"
      ? "Message sent. Thank you, I'll get back to you soon."
      : status === "error"
        ? "Your message didn't send. Check your connection and try again, or email contact@abanoubnasser.com."
        : "";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full min-w-0 max-w-2xl flex-col gap-4 sm:mt-10"
    >
      <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row">
        <div className="min-w-0 flex-1">
          <label htmlFor="contact-name" className={labelClass}>Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={`${fieldClass} rounded-full`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <label htmlFor="contact-email" className={labelClass}>Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="name@company.com"
            aria-invalid={!!emailError}
            aria-describedby={emailError ? "contact-email-error" : undefined}
            onBlur={(e) => {
              const input = e.currentTarget;
              setEmailError(
                input.value && !input.validity.valid
                  ? "Enter an email like name@company.com."
                  : ""
              );
            }}
            onChange={() => emailError && setEmailError("")}
            className={`${fieldClass} rounded-full`}
          />
          {emailError && (
            <p id="contact-email-error" className="mt-2 text-xs text-red-400">
              {emailError}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project"
          className={`${fieldClass} resize-none rounded-2xl py-3 sm:py-4`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="inline-block min-h-11 w-fit rounded-full border border-white/10 bg-white px-6 text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-90 disabled:opacity-50 sm:px-8 sm:text-sm"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-5 text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}
      >
        {message}
      </p>
    </form>
  );
}