import { FEATURED_PROJECTS, PROFILE, SITE_URL, SOCIALS, TOOLKIT } from "@/data/site-data";

const PERSON_ID = `${SITE_URL}/#person`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PROFILE.name,
      alternateName: [PROFILE.fullName, "amanxthink11"],
      url: SITE_URL,
      image: `${SITE_URL}${PROFILE.avatar}`,
      email: `mailto:${PROFILE.email}`,
      jobTitle: "Founder & Software Engineer",
      description: PROFILE.description,
      homeLocation: { "@type": "Place", name: PROFILE.location },
      knowsAbout: TOOLKIT,
      sameAs: SOCIALS.map((s) => s.url),
      worksFor: {
        "@type": "Organization",
        name: "IND Tech Mark Private Limited",
        url: "https://indtechmark.com",
        sameAs: "https://www.linkedin.com/company/indtechmark",
      },
    },
    ...FEATURED_PROJECTS.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      description: p.tagline,
      url: p.primaryLink.url,
      codeRepository: p.sourceUrl,
      applicationCategory: "BusinessApplication",
      author: { "@id": PERSON_ID },
    })),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: PROFILE.name,
      publisher: { "@id": PERSON_ID },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
