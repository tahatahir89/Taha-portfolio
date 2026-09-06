// TODO: replace with the real production domain before deploying.
const siteUrl = "https://muhammadtaha.dev";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
