export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Sanad",
    role: "Founder, Al Sultan Omar",
    quote:
      "Working with Abanoub was a smooth and genuinely creative experience. He understood our vision from the first call and translated it into a brand identity that felt exactly right.",
  },
  {
    id: "2",
    name: "Client Name",
    role: "Marketing Lead, Company Name",
    quote:
      "Professional, fast, and full of thoughtful ideas. The final identity elevated how our brand is perceived across every touchpoint.",
  },
  {
    id: "3",
    name: "Client Name",
    role: "CEO, Company Name",
    quote:
      "Clear communication throughout the whole process, and the result exceeded what we imagined. Highly recommend for any branding project.",
  },
];