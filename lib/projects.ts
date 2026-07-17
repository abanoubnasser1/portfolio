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
    tags: ["Branding", "Packaging", "Honey"],
    title: "Al Sultan Omar - Premium Honey",
    behanceHref:
      "https://www.behance.net/gallery/251293575/AL-SULTAN-OMAR-PREMIUM-HONEY",
    image: "/projects/honey.png",
    description:
      "A brand identity and packaging system for a premium honey line, designed to feel both heritage-rooted and shelf-ready for modern retail.",
  gallery: [
    "/projects/sultan/sultan (1).jpg",
    "/projects/sultan/sultan (2).jpg",
    "/projects/sultan/sultan (3).jpg",
    "/projects/sultan/sultan (4).jpg",
    "/projects/sultan/sultan (5).jpg",
    "/projects/sultan/sultan (6).jpg",
    "/projects/sultan/sultan (7).jpg",
    "/projects/sultan/sultan (8).jpg",
    "/projects/sultan/sultan (9).jpg",
    "/projects/sultan/sultan (10).jpg",
    "/projects/sultan/sultan (11).jpg",
    "/projects/sultan/sultan (12).jpg",
    "/projects/sultan/sultan (13).jpg",

  ],
    },
  {
    slug: "q-west",
    index: "02",
    tags: ["Branding", "Coffee", "Packaging"],
    title: "Q West - Cafe & Roastery",
    behanceHref: "https://www.behance.net/gallery/207691419/Q-WEST",
    image: "/projects/qwest.jpg",
    description:
      "A full visual identity system built around clarity and structure, tailored to the client's positioning in a competitive market.",
    gallery: [
    "/projects/qwest/qwest 1.jpg",
    "/projects/qwest/qwest 2.jpg",
    "/projects/qwest/qwest 3.jpg",
    "/projects/qwest/qwest 4.jpg",
    "/projects/qwest/qwest 5.jpg",
    "/projects/qwest/qwest 6.jpg",
    "/projects/qwest/qwest 7.jpg",
    "/projects/qwest/qwest 8.jpg",
    "/projects/qwest/qwest 9.gif",
    "/projects/qwest/qwest 10.jpg",
    "/projects/qwest/qwest 11.jpg",
    "/projects/qwest/qwest 12.jpg",
    "/projects/qwest/qwest 13.jpg",
  ],
  },
  {
    slug: "pas-architects",
    index: "03",
    tags: ["Branding", "Architecture"],
    title: "PAS - Architects",
    behanceHref: "https://www.behance.net/gallery/239957481/PAS-Architects",
    image: "/projects/pas.jpg",
    description:
      "A refined brand identity for an architecture studio, built to reflect precision, structure, and a modern design sensibility.",
       gallery: [
    "/projects/pas/pas 1.jpg",
    "/projects/pas/pas 2.jpg",
    "/projects/pas/pas 3.jpg",
    "/projects/pas/pas 4.jpg",
    "/projects/pas/pas 5.jpg",
    "/projects/pas/pas 6.jpg",
    "/projects/pas/pas 7.jpg",
    "/projects/pas/pas 8.jpg",
    "/projects/pas/pas 9.jpg",
    "/projects/pas/pas 10.jpg",
    "/projects/pas/pas 11.jpg",
    "/projects/pas/pas 12.jpg",
    "/projects/pas/pas 13.jpg",
  ],
  },
  {
    slug: "corelink-technologies",
    index: "04",
    tags: ["Branding", "Tech", "Digital"],
    title: "Corelink - Technologies",
    behanceHref: "https://www.behance.net/gallery/236718675/Corelink-Technologies",
    image: "/projects/corelink.jpg",
    description:
      "A tech-forward brand identity for Corelink Technologies, balancing precision and approachability across every touchpoint.",
         gallery: [
    "/projects/corelink/1.gif",
    "/projects/corelink/2.jpg",
    "/projects/corelink/3.jpg",
    "/projects/corelink/4.jpg",
    "/projects/corelink/5.jpg",
    "/projects/corelink/6.jpg",
    "/projects/corelink/7.jpg",
    "/projects/corelink/8.jpg",
    "/projects/corelink/9.jpg",
    "/projects/corelink/10.jpg",
    "/projects/corelink/11.jpg",

  ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}