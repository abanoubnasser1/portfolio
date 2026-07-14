export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-[1700px] px-30 py-20 md:px-80">

     

        <h1
          className="
          font-semibold
          leading-[0.86]
          tracking-[-0.05em]
          text-[clamp(2rem,8vw,6rem)]
          text-center
          
        "
        >
          ABANOUB
          <br />
          NASSER
        </h1>
   <p className="mb-8 uppercase tracking-[0.35em] text-zinc-600 text-center">
        Brand Designer
        </p>
        <p className="mt-8 text-s text-center font-light leading-[1.5] tracking-tight">
          I create strategic brand identities and visual systems that turn businesses into memorable brands.
        </p>

      </div>
    </section>
  );
}