import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <Section center={false} className="border-t border-zinc-800 py-24 md:py-32">
      <Container>
        <p className="mb-10 text-xs uppercase tracking-[0.4em] text-zinc-500 md:mb-16">
          What Clients Say
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 p-6 sm:p-8"
            >
              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3">
                {t.avatar ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-800">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-zinc-400">
                    {t.name.charAt(0)}
                  </div>
                )}

                <div>
                  <p className="font-syne text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}