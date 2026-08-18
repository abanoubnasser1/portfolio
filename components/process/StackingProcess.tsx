"use client";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep conversation about your business, audience, and goals — through the kick-off questionnaire and a direct call.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "I explore directions and present a strong initial concept grounded in your brand's personality and market position.",
  },
  {
    number: "03",
    title: "Refinement",
    description:
      "We refine the chosen direction together until every detail feels right — colors, typography, and every touchpoint.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "You receive a complete, organized brand system ready to use across every platform, with full guidelines.",
  },
];

export default function StackingProcess() {
  return (
    <section className="relative border-t border-zinc-800">
      {steps.map((step, i) => (
        <div
          key={step.number}
          className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-[#090909]"
          style={{ zIndex: i + 1 }}
        >
          <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-8 md:px-12 lg:px-20">
            <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 shadow-2xl shadow-black/50 sm:p-12 md:p-16">
              <span className="text-sm text-zinc-600">{step.number}</span>
              <h3 className="font-syne mt-4 text-[clamp(2rem,5vw,4rem)] font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}