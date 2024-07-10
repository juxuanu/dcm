import { MetadataRoute } from "next";
import { url } from "@dcm/app/_site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: `${url}/paraules`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: `${url}/curiositats`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: `${url}/expressions`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
