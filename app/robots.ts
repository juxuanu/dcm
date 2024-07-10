import { MetadataRoute } from "next";
import { url } from "@dcm/app/_site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
