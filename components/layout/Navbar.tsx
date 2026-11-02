"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#work", label: "WORK" },
  { href: "/blog", label: "BLOG" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflowY = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        openButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflowY = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 hidden w-full md:block">
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          }}
        />
        <nav
          aria-label="Primary"
          className="font-syne relative flex justify-center gap-6 px-6 py-4 text-sm font-semibold md:gap-8"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-secondary transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <button
        ref={openButtonRef}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-control bg-[#0d0d0d]/90 md:hidden"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
          <path d="M1 1H17M1 7H17M1 13H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#090909] md:hidden"
          >
            <button
              ref={closeButtonRef}
              onClick={() => {
                setOpen(false);
                openButtonRef.current?.focus();
              }}
              aria-label="Close menu"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-control"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 1L15 15M1 15L15 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <nav aria-label="Mobile" className="flex flex-col items-center gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-syne block px-4 py-3 text-2xl font-bold text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}