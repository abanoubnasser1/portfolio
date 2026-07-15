export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-md"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
        }}
      />

      <nav className="relative flex justify-center gap-6 px-4 py-5 text-xs sm:gap-10 sm:px-6 sm:py-6 sm:text-sm md:gap-12">
        <a href="#about" className="transition hover:text-white">
          ABOUT
        </a>
        <a href="#work" className="transition hover:text-white">
          WORK
        </a>
        <a href="#contact" className="transition hover:text-white">
          CONTACT
        </a>
      </nav>
    </header>
  );
}