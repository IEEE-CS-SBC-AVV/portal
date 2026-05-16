export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IEEE Computer Society Student Branch Committee",
    url: "https://cs.avv.ie",
    logo: "https://cs.avv.ie/assests/Society.jpg",
    description:
      "IEEE Computer Society Student Branch Committee at Amrita Vishwa Vidyapeetham - Empowering students through technology, innovation, and professional development.",
    sameAs: [
      "https://www.linkedin.com/in/computer-society-amrita-school-of-ai-217296392/",
      "https://www.instagram.com/cs_asai_cbe",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiries",
      email: "contact@cs.avv.ie",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cs.avv.ie",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://cs.avv.ie/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Events",
        item: "https://cs.avv.ie/events",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
