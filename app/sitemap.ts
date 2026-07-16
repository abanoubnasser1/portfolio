import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abanoubnasser.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://abanoubnasser.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://abanoubnasser.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://abanoubnasser.com/contact",
      lastModified: new Date(),
    },
  ];
}