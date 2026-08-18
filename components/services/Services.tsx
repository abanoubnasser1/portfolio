import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Logo design, visual systems, and complete identity guidelines built to last.",
  },
  {
    number: "02",
    title: "Packaging Design",
    description: "Shelf-ready packaging that communicates quality and stands out.",
  },
  {
    number: "03",
    title: "Digital Design",
    description: "Websites and digital experiences that extend your brand online.",
  },
];

export default function Services() {
  return (
    <Section center={false} className="border-t border-zinc-800 py-24 md:py-32">
      <Container>
        <p className="mb-10 text-xs uppercase tracking-[0.4em] text-zinc-500 md:mb-16">
          What I Do
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {services.map((service) => (
            <div key={service.number} className="border-t border-white/10 pt-6">
              <span className="text-sm text-zinc-600">{service.number}</span>
              <h3 className="font-syne mt-3 text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}