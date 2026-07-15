export default function Navbar() {
  return (
    <header className="fixed left-0 top-8 z-50 w-full ">
      <div className=" flex max-w-auto items-center justify-between px-6 md:px-10 ">
        <div className="font-light text-zinc-500 transition-colors duration-300 hover:text-white">
          <a href="#" className="transition hover:text-white">
            ABANOUB NASSER
          </a>
        </div>

        <nav className="flex gap-12 text-sm text-zinc-500">
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
      </div>
    </header>
  );
}