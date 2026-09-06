// TODO: replace with the real production domain before deploying.
const siteUrl = "https://muhammadtaha.dev";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
