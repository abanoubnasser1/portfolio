import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollBlurText from "@/components/text/ScrollBlurText";

export default function About() {
  return (
    <Section
      id="about"
      center={false}
      className="border-t border-zinc-800 py-24 md:py-32"
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

              <div className="col-span-12 min-w-0 lg:col-span-9">
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
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
}