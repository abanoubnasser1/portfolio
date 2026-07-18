"use client";

const logos = [

    "/content/clients/logo (1).png",
    "/content/clients/logo (2).png",
    "/content/clients/logo (4).png",
    "/content/clients/logo (5).png",
    "/content/clients/logo (6).png",
    "/content/clients/logo (8).png",
    "/content/clients/logo (9).png",
    "/content/clients/logo (10).png",
    "/content/clients/logo (11).png",
    "/content/clients/logo (31).png",
    "/content/clients/logo (12).png",
    "/content/clients/logo (13).png",
    "/content/clients/logo (15).png",
    "/content/clients/logo (17).png",
    "/content/clients/logo (18).png",
    "/content/clients/logo (25).png",
    "/content/clients/logo (27).png",
    "/content/clients/logo (28).png",
    "/content/clients/logo (29).png",
    "/content/clients/logo (30).png",




   
];

export default function LogoMarquee() {
  const items = [...logos, ...logos];

  return (
    <section className="w-full border-t border-white/10 py-14 md:py-20">
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="group flex w-max items-center gap-16 [animation:marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {items.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo}
              alt="Client logo"
              className="h-6 w-auto shrink-0 opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}