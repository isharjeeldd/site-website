import { Helmet } from "react-helmet-async";

const defaultMeta = {
  title: "SITE - Strategic Institute of Technology Ethics",
  description:
    "SITE bridges the gap between AI potential and human values through cutting-edge research and expert consultancy in AI ethics, governance, and responsible innovation.",
  keywords:
    "AI ethics, artificial intelligence, AI governance, responsible AI, ethical AI, AI consultancy, AI research, technology ethics, AI policy",
  image: "/og-image.png",
  url: "https://site-ethics.org",
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData,
}) {
  const meta = {
    title: title ? `${title} | SITE` : defaultMeta.title,
    description: description || defaultMeta.description,
    keywords: keywords || defaultMeta.keywords,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url,
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content="SITE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <link rel="canonical" href={meta.url} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
