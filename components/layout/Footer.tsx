import Link from "next/link";

const quickLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://www.behance.net/abanoubnasser", label: "Behance" },
  { href: "https://instagram.com/abanoubnasser_", label: "Instagram" },
  { href: "https://wa.me/201094172845", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 pt-20">
      <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 pb-16 sm:grid-cols-3">
          <div>
            <p className="font-syne text-lg font-bold text-white">Abanoub Nasser</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              Brand designer crafting identities and visual systems that make
              businesses memorable.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Elsewhere
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Abanoub Nasser. All rights reserved.</p>
          <p>Designed &amp; built by Abanoub Nasser</p>
        </div>
      </div>

      {/* Smeared/blurred big wordmark */}
      <div className="relative mt-4 w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            filter: "blur(10px)",
            transform: "scaleY(1)",
            transformOrigin: "top center",
            maskImage: "linear-gradient(to bottom, black 0%, black 10%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 10%, transparent 80%)",
            opacity: 0.5,
          }}
        >
          <h2 className="font-syne font-extrabold leading-[0.86] tracking-normal text-[clamp(2.5rem,14vw,11rem)] text-center text-white whitespace-nowrap">
            ABANOUB NASSER
          </h2>
        </div>

        <h2 className="relative font-syne font-extrabold leading-[0.86] tracking-normal text-[clamp(2.5rem,14vw,11rem)] text-center whitespace-nowrap overflow-hidden">
          ABANOUB NASSER
        </h2>
      </div>
    </footer>
  );
}