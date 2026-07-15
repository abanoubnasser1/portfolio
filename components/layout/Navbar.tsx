export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Faded blur backdrop layer */}
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-md"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
                      background:
            "linear-gradient(to bottom, rgba(9,9,9,0.2) 0%, rgba(9,9,9,0.0) 100%, transparent 100%)",

        }}
      />

      <nav className="relative flex justify-center gap-12 px-6 py-6 text-sm text-zinc-500">
        <a href="#work" className="transition hover:text-white">
          WORK
        </a>

        <a href="#about" className="transition hover:text-white">
          ABOUT
        </a>

        <a href="#contact" className="transition hover:text-white">
          CONTACT
        </a>
      </nav>
    </header>
  );
}