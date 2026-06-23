import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://southerncoloradowindowcleaning.vercel.app/sitemap.xml",
    host: "https://southerncoloradowindowcleaning.vercel.app",
  };
}
