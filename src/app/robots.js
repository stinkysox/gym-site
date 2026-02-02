export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://golden-fitness-gym.vercel.app/sitemap.xml",
  };
}
