export interface Project {
  slug: string;
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
  {
    slug: "Haifa - Veils and Hijabs",
    tags: ["Branding", "Veils", "Hijabs", "Arabic"],
    title: "Haifa - Veils and Hijabs",
    behanceHref: "https://www.behance.net/gallery/204296833/Haifa-Branding",
    image: "/projects/heifa/3.jpg",
    description:
      "Haifa is a unique brand specializing in veils and hijabs, with its name inspired by the city of Haifa in Palestine, reflecting the brand's deep cultural roots and commitment to heritage.",
    gallery: [
    "/projects/heifa/1.jpg",
    "/projects/heifa/2.jpg",
    "/projects/heifa/3.jpg",
    "/projects/heifa/4.jpg",
    "/projects/heifa/5.jpg",
    "/projects/heifa/6.jpg",
    "/projects/heifa/7.jpg",
    "/projects/heifa/8.jpg",
    "/projects/heifa/9.gif",
    "/projects/heifa/10.jpg",
    "/projects/heifa/11.jpg",
    "/projects/heifa/12.jpg",
    "/projects/heifa/13.jpg",
    "/projects/heifa/14.jpg",
    "/projects/heifa/15.jpg",
  ],
  },
  {
    slug: "Honna-branding",
    tags: ["Logo Design", "Islamic", "Fashion", "Arabic"],
    title: "Honna - Islamic Fashion Brand",
    behanceHref: "https://www.behance.net/gallery/172046241/Honna-Logo-Design",
    image: "/projects/honna.png",
    description:
      "Honna (هُنَّ) is an Egyption brand specializing in hijab and Islamic fashion. With a focus on style, comfort, and modesty, Honna offers high-quality hijabs, abayas, modest dresses, and accessories.",
    gallery: [
    "/projects/honna/1.png",
    "/projects/honna/2.gif",
    "/projects/honna/3.png",
    "/projects/honna/4.png",
    "/projects/honna/5.png",
    "/projects/honna/6.png",
    "/projects/honna/7.png",
    "/projects/honna/8.png",
    "/projects/honna/9.png",
    "/projects/honna/10.png",
    "/projects/honna/11.png",
  ],
  },
  {
    slug: "Zelal - HOME DECOR AND FURNITURE",
    tags: ["Branding", "Coffee", "Packaging"],
    title: "Zelal - Home Decor & Furniture",
    behanceHref: "https://www.behance.net/gallery/205401425/Zelal-Branding",
    image: "/projects/zelal image.png",
    description:
      "ZELAL, DERIVED FROM THE ARABIC WORD \"ظلال\" MEANING \"SHADOWS\" OR \"SHADES,\" EMBODIES THE SUBTLE ELEGANCE AND SERENE AMBIANCE THAT SHADOWS BRING INTO A SPACE. THE BRAND IS DEDICATED TO OFFERING REFINED HOME DECOR AND FURNITURE THAT ADD DEPTH AND WARMTH TO ANY ENVIRONMENT.",
    gallery: [
    "/projects/zelal/1.jpg",
    "/projects/zelal/2.jpg",
    "/projects/zelal/3.gif",
    "/projects/zelal/4.jpg",
    "/projects/zelal/5.jpg",
    "/projects/zelal/6.jpg",
    "/projects/zelal/7.jpg",
    "/projects/zelal/8.jpg",
    "/projects/zelal/9.jpg",
    "/projects/zelal/10.jpg",
    "/projects/zelal/11.jpg",
    "/projects/zelal/12.jpg",
    "/projects/zelal/13.jpg",
    "/projects/zelal/15.jpg",
  ],
  },
   {
    slug: "PlanB",
    tags: ["Branding", "Burger", "Restaurant"],
    title: "Plan B - Burger Restaurant",
    behanceHref: "https://www.behance.net/gallery/164796805/Plan-B-Restaurant-Branding",
    image: "/projects/planb.jpg",
    description:
      "A playful brand identity for Plan B, a burger restaurant. The wordmark plays on the letter 'B' as a burger icon itself — layered like a bun, patty, and toppings — paired with a warm, textured color palette and a bold vintage-inspired typeface that gives the brand a hand-crafted, approachable feel.",
    gallery: [
    "/projects/planb/1.jpg",
    "/projects/planb/2.jpg",
    "/projects/planb/3.jpg",
    "/projects/planb/4.jpg",
    "/projects/planb/5.jpg",
    "/projects/planb/6.jpg",
    "/projects/planb/7.jpg",
    "/projects/planb/8.jpg",
    "/projects/planb/9.jpg",
    "/projects/planb/10.jpg",
    "/projects/planb/11.jpg",
    "/projects/planb/12.jpg",

  ],
  }
  

  

];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}