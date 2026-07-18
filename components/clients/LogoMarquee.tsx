"use client";

const logos = [

    "/content/clients/logo (1).png",
    "/content/clients/logo (2).png",
    "/content/clients/logo (3).png",
    "/content/clients/logo (4).png",
    "/content/clients/logo (5).png",
    "/content/clients/logo (6).png",
    "/content/clients/logo (7).png",
    "/content/clients/logo (8).png",
    "/content/clients/logo (9).png",
    "/content/clients/logo (10).png",
    "/content/clients/logo (11).png",
    "/content/clients/logo (12).png",
    "/content/clients/logo (13).png",
    "/content/clients/logo (14).png",
    "/content/clients/logo (15).png",
    "/content/clients/logo (16).png",
    "/content/clients/logo (17).png",
    "/content/clients/logo (18).png",
    "/content/clients/logo (19).png",
    "/content/clients/logo (20).png",
    "/content/clients/logo (21).png",
    "/content/clients/logo (22).png",
    "/content/clients/logo (23).png",
    "/content/clients/logo (24).png",
    "/content/clients/logo (25).png",
    "/content/clients/logo (26).png",
    "/content/clients/logo (27).png"



   
];

export default function LogoMarquee() {
  const items = [...logos, ...logos];

  return (
    <section className="w-full border-t border-white/10 py-10 md:py-20">
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="group flex w-max items-center gap-8 [animation:marquee_22s_linear_infinite] hover:[animation-play-state:paused] sm:gap-12 md:gap-16">
          {items.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo}
              alt="Client logo"
              className="h-5 w-auto shrink-0 opacity-60 transition-opacity duration-300 hover:opacity-100 sm:h-6 md:h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}