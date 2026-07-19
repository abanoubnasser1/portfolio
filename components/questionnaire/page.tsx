import BrandQuestionnaire from "@/components/questionnaire/BrandQuestionnaire";

export const metadata = {
  title: "Brand Kick-Off Questionnaire",
};

export default function QuestionnairePage() {
  return (
    <main className="mx-auto w-full max-w-[1700px] px-6 py-20 sm:px-10 md:px-20 md:py-32">
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
        Kick-Off Questionnaire
      </p>
      <h1 className="font-syne mb-16 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
        Let&apos;s get to know your brand
      </h1>

      <BrandQuestionnaire />
    </main>
  );
}