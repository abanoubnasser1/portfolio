export interface BrandGuideline {
  slug: string;
  clientName: string;
  title: string;
  pdfPath: string;
  allowDownload?: boolean;
}

export const guidelines: BrandGuideline[] = [

  {
    slug: "al-sultan-omar",
    clientName: "Al Sultan Omar",
    title: "Brand Guidelines",
    pdfPath: "/guidelines/al-sultan-omar-brand-guidelines.pdf",
    allowDownload: true,
  },
    {
    slug: "PAS-Architect",
    clientName: "PAS Architect",
    title: "Brand Guidelines",
    pdfPath: "/guidelines/pas-architect-brand-guidelines.pdf",
    allowDownload: true,
  },

];

export function getGuidelineBySlug(slug: string) {
  return guidelines.find((g) => g.slug === slug);
}