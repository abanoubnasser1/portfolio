export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-[1700px] px-12 md:px-20">

        <p className="mb-8 uppercase tracking-[0.35em] text-zinc-500">
          Brand Identity Designer · Egypt
        </p>

        <h1
          className="
          font-semibold
          leading-[0.86]
          tracking-[-0.06em]
          text-[clamp(6rem,14vw,15rem)]
        "
        >
          Abanoub
          <br />
          Nasser
        </h1>

        <p className="mt-12 max-w-xl text-xl leading-relaxed text-zinc-400">
          I build memorable brand identities,
          packaging systems and digital experiences
          with simplicity and timeless aesthetics.
        </p>

      </div>
    </section>
  );
}