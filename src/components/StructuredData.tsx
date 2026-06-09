import Script from "next/script";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IEEE Computer Society Student Branch Committee",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/assets/Society.jpg`,
    description:
      "IEEE Computer Society Student Branch Committee at Amrita Vishwa Vidyapeetham - Empowering students through technology, innovation, and professional development.",
    sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiries",
      email: CONTACT_INFO.email,
    },
    location: {
      "@type": "Place",
      name: "Amrita Vishwa Vidyapeetham",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "India",
      },
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
