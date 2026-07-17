import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollBlurText from "@/components/text/ScrollBlurText";

export default function About() {
  return (
    <Section
      id="about"
      center={false}
      className="border-t border-zinc-800 pt-24 pb-4 md:pt-32 md:pb-6"
    >
      <div className="scroll-section w-full">
        <div className="scroll-content">
          <Container>
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  About
                </p>
              </div>

              <div className="col-span-12 min-w-0 lg:col-span-6">
                <ScrollBlurText
                  text="I'm Abanoub Nasser, a Brand Designer."
                  className="font-syne font-bold text-[clamp(2.2rem,2vw,4.8rem)] leading-[1.05] tracking-[-0.02em]"
                  start="start .62"
                />

                <ScrollBlurText
                  text="My work focuses on branding, packaging and digital experiences. Every project is driven by thoughtful research, strong typography and clean visual systems that leave a lasting impression."
                  className="mt-12 text-[clamp(1.25rem,0.5vw,1.25rem)] max-w-2xl text-lg leading-9 text-zinc-400"
                  start="start 0.6"
                />

                <Link
                  href="/cv/Abanoub-Nasser-CV.pdf"
                  download
                  className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-widest text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  Download CV
                  <span className="text-base">↓</span>
                </Link>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-md self-start">
                  <Image
                    src="/content/profile1.png"
                    alt="Abanoub Nasser"
                    fill
                    className="object-cover object-bottom"
                    sizes="(min-width: 1024px) 30vw, 90vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
}