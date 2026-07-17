import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-20 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        <h1
          className="
          font-syne
          font-bold
          leading-[0.86]
          tracking-normal
          text-[clamp(2.2rem,8vw,6rem)]
          text-center
        "
        >
          ABANOUB
          <br />
          NASSER
        </h1>
        <p className="mb-8 text-xs uppercase tracking-[0.25em] text-zinc-600 text-center sm:text-sm sm:tracking-[0.35em]">
          Brand Designer
        </p>
        <p className="mx-auto mt-8 max-w-md text-sm text-center font-light leading-[1.6] tracking-tight sm:max-w-none sm:text-base">
          Strategic brand identities and visual systems that turn businesses into memorable brands.
        </p>
      </div>

      <ScrollIndicator />
    </section>
  );
}