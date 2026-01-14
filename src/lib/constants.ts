// Centralized constants to reduce redundancy
// SITE CONFIG

export const SITE_CONFIG = {
  name: "IEEE CS SBC AVV",
  fullName: "IEEE Computer Society Student Branch Committee",
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore Campus",
  shortInstitution: "Amrita Coimbatore",
  description:
    "Empowering students through technology, innovation, and professional development.",
  established: "2015",
} as const;

// CONTACT INFORMATION

export const CONTACT_INFO = {
  email: "computersociety.avv@gmail.com",
  phone: "+91-7397468974",
  address: {
    line1: "Amrita School of Artificial Intelligence",
    line2: "Amrita Vishwa Vidyapeetham",
    city: "Ettimadai, Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641112",
    country: "India",
  },
} as const;

// SOCIAL LINKS

export const SOCIAL_LINKS = {
  linkedin:
    "https://www.linkedin.com/in/computer-society-amrita-school-of-ai-217296392/",
  instagram: "https://www.instagram.com/cs_asai_cbe",
  twitter: null,
  facebook: null,
  github: null,
} as const;

// IEEE OFFICIAL LINKS

export const IEEE_LINKS = {
  main: "https://www.ieee.org/",
  xplore: "https://ieeexplore.ieee.org/",
  standards: "https://standards.ieee.org/",
  spectrum: "https://spectrum.ieee.org/",
  computerSociety: "https://www.computer.org/",
  studentActivities: "https://students.ieee.org/",
  collabratec: "https://ieee-collabratec.ieee.org/",
  join: "https://www.ieee.org/membership/join",
  joinCS: "https://www.computer.org/membership",
  sitemap: "https://www.ieee.org/sitemap.html",
  accessibility: "https://www.ieee.org/accessibility-statement.html",
  nondiscrimination:
    "https://www.ieee.org/about/corporate/governance/p9-26.html",
  ethics: "https://www.ieee-ethics-reporting.org",
  terms: "https://www.ieee.org/site_terms_conditions.html",
  privacy: "https://www.ieee.org/security_privacy.html",
} as const;

// CHAPTER STATS

export const STATS = {
  members: 150,
  eventsYearly: 25,
  workshops: 50,
  awards: 10,
} as const;

// OFFICE HOURS

export const OFFICE_HOURS = {
  weekdays: "10:00 AM - 5:00 PM",
  saturday: "10:00 AM - 2:00 PM",
  sunday: "Closed",
} as const;

// ACADEMIC METADATA

export const DEPARTMENTS = {
  AI: "Artificial Intelligence",
  SC: "Computer Science",
  IT: "Information Technology",
  DS: "Data Science",
  CE: "Computer Engineering",
} as const;

export const ACADEMIC_YEARS = [
  "First Year",
  "Second Year",
  "Third Year",
  "Final Year",
  "Graduate",
] as const;

export const STUDY_LEVELS = {
  U4: "Undergraduate",
  U5: "Postgraduate",
} as const;

// ROLL NUMBER NORMALIZATION

export const ROLL_NUMBER_RULES = {
  departmentMap: DEPARTMENTS,
  levelMap: STUDY_LEVELS,
  academicYearByBatch: {
    "23": "Third Year",
    "24": "Second Year",
    "25": "First Year",
  },
} as const;

// EVENTS

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

// MEMBERSHIP INFO

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
    "Global networking opportunities",
  ],
  computerSociety: [
    "All IEEE membership benefits included",
    "Computer Society Digital Library access",
    "Computing magazines and publications",
    "Exclusive webinars and technical content",
    "Professional certifications and training",
  ],
} as const;

// NAVIGATION

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/committee", label: "Committee" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const IEEE_TOP_BAR_LINKS = [
  { href: IEEE_LINKS.main, label: "IEEE.org" },
  { href: IEEE_LINKS.xplore, label: "IEEE Xplore" },
  { href: IEEE_LINKS.standards, label: "IEEE Standards" },
  { href: IEEE_LINKS.spectrum, label: "IEEE Spectrum" },
] as const;
