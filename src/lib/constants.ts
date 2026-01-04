// Centralized constants to reduce redundancy

export const SITE_CONFIG = {
  name: "IEEE CS SBC AVV",
  fullName: "IEEE Computer Society Student Branch Committee",
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore Campus",
  shortInstitution: "Amrita Coimbatore",
  description:
    "Empowering students through technology, innovation, and professional development.",
  established: "2015", // Update with actual year
} as const;

export const CONTACT_INFO = {
  email: "contact@ieeecs.edu",
  phone: "+91 123 456 7890",
  address: {
    line1: "Department of Artificial Intelligence",
    line2: "Amrita Vishwa Vidyapeetham, Coimbatore Campus",
    city: "Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641112",
    country: "India",
  },
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/ieee-cs-avv",
  instagram: "https://instagram.com/ieee_cs_avv",
  twitter: "https://twitter.com/ieee_cs_avv",
  facebook: "https://facebook.com/ieee.cs.avv",
  github: "https://github.com/ieee-cs-avv",
} as const;

export const IEEE_LINKS = {
  main: "https://www.ieee.org/",
  xplore: "http://ieeexplore.ieee.org/",
  standards: "http://standards.ieee.org/",
  spectrum: "http://spectrum.ieee.org/",
  computerSociety: "https://www.computer.org/",
  studentActivities: "https://students.ieee.org/",
  collabratec: "https://ieee-collabratec.ieee.org/",
  join: "https://www.ieee.org/membership/join/index.html",
  joinCS: "https://www.computer.org/membership",
  sitemap: "http://www.ieee.org/sitemap.html",
  accessibility: "https://www.ieee.org/accessibility-statement.html",
  nondiscrimination:
    "https://www.ieee.org/about/corporate/governance/p9-26.html",
  ethics: "http://www.ieee-ethics-reporting.org",
  terms: "http://www.ieee.org/site_terms_conditions.html",
  privacy: "https://www.ieee.org/security_privacy.html",
} as const;

export const STATS = {
  members: 150,
  eventsYearly: 25,
  workshops: 50,
  awards: 10,
} as const;

export const OFFICE_HOURS = {
  weekdays: "10:00 AM - 5:00 PM",
  saturday: "10:00 AM - 2:00 PM",
  sunday: "Closed",
} as const;

export const DEPARTMENTS = [
  "Computer Engineering",
  "Computer Science",
  "Information Technology",
  "Artificial Intelligence",
  "Data Science",
] as const;

export const ACADEMIC_YEARS = [
  "First Year",
  "Second Year",
  "Third Year",
  "Final Year",
  "Graduate",
] as const;

export const EVENT_TYPES = [
  "workshop",
  "seminar",
  "hackathon",
  "webinar",
  "competition",
  "social",
] as const;

export const EVENT_TYPE_COLORS = {
  workshop: "bg-blue-100 text-blue-800",
  seminar: "bg-green-100 text-green-800",
  hackathon: "bg-purple-100 text-purple-800",
  webinar: "bg-yellow-100 text-yellow-800",
  competition: "bg-red-100 text-red-800",
  social: "bg-pink-100 text-pink-800",
} as const;

export const EVENT_STATUS_COLORS = {
  upcoming: "bg-green-500",
  ongoing: "bg-blue-500",
  completed: "bg-gray-500",
  cancelled: "bg-red-500",
} as const;

export const MEMBERSHIP_PRICING = {
  ieee: {
    student: 32,
    currency: "USD",
  },
  computerSociety: {
    student: 48,
    currency: "USD",
    note: "Includes IEEE membership",
  },
} as const;

export const BENEFITS = {
  ieee: [
    "Access to IEEE Xplore Digital Library",
    "Discounts on conferences and publications",
    "IEEE Spectrum magazine subscription",
    "Career development resources",
    "Networking opportunities worldwide",
    "Voting rights in IEEE elections",
  ],
  computerSociety: [
    "All IEEE membership benefits included",
    "Computer Society Digital Library access",
    "Computing magazines and publications",
    "Exclusive webinars and technical content",
    "Special discounts on CS conferences",
    "Professional certifications and training",
  ],
} as const;

// Navigation structure
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/committee", label: "Committee" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

// IEEE Top bar links
export const IEEE_TOP_BAR_LINKS = [
  { href: IEEE_LINKS.main, label: "IEEE.org" },
  { href: IEEE_LINKS.xplore, label: "IEEE Xplore" },
  { href: IEEE_LINKS.standards, label: "IEEE Standards" },
  { href: IEEE_LINKS.spectrum, label: "IEEE Spectrum" },
] as const;
