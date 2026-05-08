type JsonLdProps = {
  data: Record<string, unknown>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amami-shimatabi.com";
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "奄美島旅",
        alternateName: "奄美大島観光ガイド",
        url: siteUrl,
        description: "奄美大島の観光スポット・グルメ・体験ツアーを完全ガイド。",
      }}
    />
  );
}

export function TouristAttractionSchema({
  name, description, image, address,
}: {
  name: string; description: string; image: string; address: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name, description, image,
        address: {
          "@type": "PostalAddress",
          addressRegion: "鹿児島県",
          addressLocality: address,
          addressCountry: "JP",
        },
      }}
    />
  );
}

export function ArticleSchema({
  title, description, image, datePublished, url,
}: {
  title: string; description: string; image: string; datePublished: string; url: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amami-shimatabi.com";
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title, description, image,
        datePublished, dateModified: datePublished,
        author: { "@type": "Organization", name: "奄美島旅", url: siteUrl },
        publisher: { "@type": "Organization", name: "奄美島旅", url: siteUrl },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }}
    />
  );
}
