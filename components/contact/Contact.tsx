import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import ScrollBlurText from "../text/ScrollBlurText";
import FindMeOn from "@/components/social/FindMeOn";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <Section
      id="contact"
      center={false}
      className="border-t border-zinc-800 py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Contact
            </p>
          </div>

          <div className="col-span-12 min-w-0 lg:col-span-9">
            <ScrollBlurText
              text="Let's build"
              end="start 0.7"
              className="font-syne font-bold text-[clamp(2.5rem,5vw,6rem)] leading-[1.05] tracking-[-0.02em]"
            />
            <ScrollBlurText
              text="something remarkable."
              end="start 0.5"
              className="font-syne font-bold text-[clamp(2.5rem,5vw,6rem)] leading-[1.05] tracking-[-0.02em]"
            />

            <Link
              href="mailto:contact@abanoubnasser.com"
              className="mt-5 inline-block rounded-full border border-white/10 px-6 py-3 text-lg text-zinc-400 no-underline transition-colors hover:border-white/30 hover:text-white"
            >
              contact@abanoubnasser.com
            </Link>

            <ContactForm />

            <FindMeOn />
          </div>
        </div>
      </Container>
    </Section>
  );
}