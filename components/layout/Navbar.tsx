"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#work", label: "WORK" },
  { href: "/blog", label: "BLOG" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop navbar (sticky) */}
      <header className="sticky top-0 z-50 hidden w-full md:block">
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          }}
        />
        <nav className="font-syne font-semibold relative flex justify-center gap-10 px-6 py-6 text-sm md:gap-12">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile hamburger button (fixed, not sticky) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md md:hidden"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1H17M1 7H17M1 13H17"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile fullscreen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-[#090909] md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L15 15M1 15L15 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="font-syne text-2xl font-bold text-white"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}