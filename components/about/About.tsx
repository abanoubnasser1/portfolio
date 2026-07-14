import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollBlurText from "@/components/text/ScrollBlurText";


export default function About() {
  return (
    <Section
      id="about"
      className="border-t border-zinc-800"
    >
         
      <div className="scroll-section w-full">
        <div className="scroll-content">
          <Container className="py-5">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 py-4">
                  About
                </p>
              </div>

              <div className="col-span-12 lg:col-span-9">
                <ScrollBlurText
                    text="I'm Abanoub Nasser, a Graphic Designer & Brand Identity Designer focused on creating brands that are both visually distinctive and strategically effective. Every project begins with understanding the business, its audience, and the message it needs to communicate. From brand identity and packaging to digital design, I craft clean, timeless visual systems that strengthen recognition, build trust, and deliver consistent experiences across every touchpoint."
                   
                    className="max-w-5xl text-[clamp(2.2rem,2vw,4.8rem)] leading-[1.05] tracking-[-0.04em]"
                    start = "start .62"
                />
                {/* <h2 className="max-w-5xl text-[clamp(2.2rem,4vw,4.8rem)] leading-[1.05] tracking-[-0.04em]">
                  I create visual identities that combine clarity, strategy and
                  timeless aesthetics, helping brands communicate with confidence
                  across every touchpoint.
                </h2> */}

                <p className="mt-12 max-w-2xl text-lg leading-9 text-zinc-400">
                  My work focuses on branding, packaging and digital experiences.
                  Every project is driven by thoughtful research, strong
                  typography and clean visual systems that leave a lasting
                  impression.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
}