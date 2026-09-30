export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://amanxthink11.com/#person",
        "name": "Aman Singh",
        "alternateName": ["Aman Kumar Singh"],
        "url": "https://amanxthink11.com",
        "image": "https://amanxthink11.com/aman.jpg",
        "jobTitle": "Technology Entrepreneur & Founder",
        "description":
          "Aman Singh is a technology entrepreneur and founder from Patna, Bihar, building companies, products and technology ventures including Think11 and IND Tech Mark.",
        "homeLocation": {
          "@type": "Place",
          "name": "Patna, Bihar, India",
        },
        "sameAs": [
          "https://www.linkedin.com/in/amanxthink11",
          "https://github.com/amanxthink11",
          "https://x.com/amanxthink11",
          "https://instagram.com/amanxthink11",
          "https://facebook.com/amanxthink11",
        ],
        "worksFor": [
          {
            "@type": "Organization",
            "name": "IND Tech Mark Private Limited",
            "url": "https://indtechmark.com",
            "sameAs": "https://www.linkedin.com/company/indtechmark",
          },
          {
            "@type": "Organization",
            "name": "Think11",
            "url": "https://www.think11.in",
            "sameAs": "https://www.linkedin.com/company/think11app",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://amanxthink11.com/#website",
        "url": "https://amanxthink11.com",
        "name": "Aman Singh — Founder, Builder & Technology Entrepreneur",
        "publisher": {
          "@id": "https://amanxthink11.com/#person",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
