export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-12 py-10 md:px-20">
        <div className="font-medium">
          Abanoub Nasser
        </div>

        <nav className="flex gap-12 text-sm text-zinc-500">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}