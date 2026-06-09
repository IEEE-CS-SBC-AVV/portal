export const SITE_CONFIG = {
  name: "IEEE CS @ Amrita",
  fullName:
    "IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore",
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore Campus",
  shortInstitution: "Amrita Coimbatore",
  description:
    "Empowering students through technology, innovation, and professional development.",
  established: "2025",
  url:
    process.env.SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://cs.avv.ie"),
} as const;

export const STATS = {
  members: 15,
  eventsYearly: 1,
} as const;

export const CONTACT_INFO = {
  email: "computersociety.avv@gmail.com",
  phone: "+91-7397468974",
  phoneLink: "tel:+917397468974",
  address: [
    "Amrita School of Artificial Intelligence",
    "Amrita Vishwa Vidyapeetham, Ettimadai",
    "Coimbatore - 641112",
    "Tamil Nadu, India",
  ],
  linkedin: "https://www.linkedin.com/company/computer-society-avv",
  instagram: "https://www.instagram.com/cs_asai_cbe",
} as const;

export const MEMBERSHIP_PRICES = {
  ieeeStudent: "$32",
  csStudent: "$48",
} as const;

export const VALID_EVENT_TYPES = [
  "workshop",
  "seminar",
  "hackathon",
  "webinar",
  "competition",
  "social",
  "other",
] as const;

export const EVENT_TYPE_COLORS: Record<
  (typeof VALID_EVENT_TYPES)[number],
  string
> = {
  workshop: "bg-[#00B5E2]/10 text-[#004D66]",
  seminar: "bg-[#78BE20]/10 text-[#3D5F13]",
  hackathon: "bg-[#981D97]/10 text-[#772583]",
  webinar: "bg-[#FFD100]/10 text-[#7A6300]",
  competition: "bg-[#BA0C2F]/10 text-[#6E0916]",
  social: "bg-[#009CA6]/10 text-[#005D63]",
  other: "bg-[#75787b]/10 text-[#4A4A4A]",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/committee", label: "Committee" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const IEEE_LINKS = {
  topBar: [
    { href: "https://www.ieee.org/", label: "IEEE.org" },
    { href: "https://ieeexplore.ieee.org/", label: "IEEE Xplore" },
    { href: "https://standards.ieee.org/", label: "IEEE Standards" },
    { href: "https://spectrum.ieee.org/", label: "IEEE Spectrum" },
  ],
  footer: [
    { href: "https://www.ieee.org/", label: "IEEE.org" },
    {
      href: "https://ieeexplore.ieee.org/",
      label: "IEEE Xplore Digital Library",
    },
    {
      href: "https://www.computer.org/",
      label: "IEEE Computer Society",
    },
    { href: "https://standards.ieee.org/", label: "IEEE Standards" },
    { href: "https://spectrum.ieee.org/", label: "IEEE Spectrum" },
    {
      href: "https://students.ieee.org/",
      label: "IEEE Student Activities",
    },
  ],
  legal: [
    {
      href: "https://www.ieee.org/sitemap.html",
      label: "Sitemap",
    },
    {
      href: "https://www.ieee.org/accessibility-statement.html",
      label: "Accessibility",
    },
    {
      href: "https://www.ieee.org/about/corporate/governance/p9-26.html",
      label: "Nondiscrimination Policy",
    },
    {
      href: "https://www.ieee-ethics-reporting.org",
      label: "IEEE Ethics Reporting",
    },
    {
      href: "https://www.ieee.org/site_terms_conditions.html",
      label: "Terms & Conditions",
    },
    {
      href: "https://www.ieee.org/security_privacy.html",
      label: "Privacy Policy",
    },
  ],
} as const;
