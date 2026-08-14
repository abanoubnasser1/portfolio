import BrandQuestionnaire from "@/components/questionnaire/BrandQuestionnaire";
import Link from "next/link";

export const metadata = {
  title: "Brand Kick-Off Questionnaire",
};

export default function QuestionnairePage() {
  return (
    <main className="mx-auto w-full max-w-[1700px] px-6 py-20 sm:px-10 md:px-20 ">
      <section className="mx-auto w-full max-w-[1700px] px-6 sm:px-10 md:px-20">
        <Link
          href="/"
          className="mb-10 inline-block text-sm uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white md:mb-12"
        >
          ← Back Home
        </Link>
        </section>
        
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