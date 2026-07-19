import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollBlurText from "@/components/text/ScrollBlurText";
import DownloadCVButton from "@/components/about/DownloadCVButton";

export default function About() {
  return (
    <Section
      id="about"
      center={false}
      className="border-zinc-800 pt-24 pb-4 md:pt-32 md:pb-6"
    >
      <div className="scroll-section w-full">
        <div className="scroll-content">
          <Container>
            <div className="grid grid-cols-12 gap-8 md:gap-10">
              <div className="col-span-12 lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  About
                </p>
              </div>

              <div className="order-2 col-span-12 min-w-0 lg:order-1 lg:col-span-6">
                <ScrollBlurText
                  text="I'm Abanoub Nasser, a Brand Designer."
                  className="font-syne font-bold text-[clamp(2rem,2vw,4.8rem)] leading-[1.05] tracking-[-0.02em]"
                  start="start .62"
                />

                <ScrollBlurText
                  text="My work focuses on branding, packaging and digital experiences. Every project is driven by thoughtful research, strong typography and clean visual systems that leave a lasting impression."
                  className="mt-8 text-base leading-8 text-zinc-400 sm:mt-12 sm:max-w-2xl sm:text-lg sm:leading-9"
                  start="start 0.6"
                />

          <DownloadCVButton />
              </div>

              <div className="order-1 col-span-12 min-w-0 lg:order-2 lg:col-span-4">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] self-start sm:max-w-xs lg:max-w-md">
                  <Image
                    src="/content/profile1.png"
                    alt="Abanoub Nasser"
                    fill
                    className="object-cover object-bottom"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 60vw"
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