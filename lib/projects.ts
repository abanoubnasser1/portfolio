export interface Project {
  slug: string;
  index: string;
  tags: string[];
  title: string;
  behanceHref: string;
  image: string;
  description: string;
  gallery?: string[]; // صور إضافية
}

export const projects: Project[] = [
  {
    slug: "al-sultan-omar-honey",
    index: "01",
    tags: ["Branding", "Packaging"],
    title: "Al Sultan Omar - Premium Honey",
    behanceHref:
      "https://www.behance.net/gallery/251293575/AL-SULTAN-OMAR-PREMIUM-HONEY",
    image: "/projects/honey.png",
    description:
      "A brand identity and packaging system for a premium honey line, designed to feel both heritage-rooted and shelf-ready for modern retail.",
  gallery: [
    "/projects/sultan (1).jpg",
    "/projects/sultan (2).jpg",
    "/projects/sultan (3).jpg",
    "/projects/sultan (4).jpg",
    "/projects/sultan (5).jpg",
    "/projects/sultan (6).jpg",
    "/projects/sultan (7).jpg",
    "/projects/sultan (8).jpg",
    "/projects/sultan (9).jpg",
    "/projects/sultan (10).jpg",
    "/projects/sultan (11).jpg",
    "/projects/sultan (12).jpg",
    "/projects/sultan (13).jpg",

  ],
    },
  {
    slug: "q-west",
    index: "02",
    tags: ["Branding", "Identity"],
    title: "Q West",
    behanceHref: "https://www.behance.net/gallery/207691419/Q-WEST",
    image: "/projects/qwest.jpg",
    description:
      "A full visual identity system built around clarity and structure, tailored to the client's positioning in a competitive market.",
    gallery: [
    "/projects/qwest (1).gif",
    "/projects/qwest (2).jpg",
    "/projects/qwest (3).jpg",
  ],
  },
  {
    slug: "pas-architects",
    index: "03",
    tags: ["Branding", "Digital"],
    title: "PAS - Architects",
    behanceHref: "https://www.behance.net/gallery/239957481/PAS-Architects",
    image: "/projects/pas.jpg",
    description:
      "A refined brand identity for an architecture studio, built to reflect precision, structure, and a modern design sensibility.",
  },
  {
    slug: "corelink-technologies",
    index: "04",
    tags: ["Branding", "Tech"],
    title: "Corelink Technologies",
    behanceHref: "https://www.behance.net/gallery/236718675/Corelink-Technologies",
    image: "/projects/corelink.jpg",
    description:
      "A tech-forward brand identity for Corelink Technologies, balancing precision and approachability across every touchpoint.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}