// Common type definitions for the application

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface SocialLink {
  platform: "linkedin" | "instagram" | "twitter" | "facebook" | "github";
  url: string;
  label?: string;
}

// Team & Committee Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  year?: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  photo?: string;
  bio: string;
  designation?: string;
  responsibilities?: string[];
}

export interface CommitteeData {
  facultyAdvisor: TeamMember;
  executive: TeamMember[];
  technical: TeamMember[];
  events: TeamMember[];
  publicity: TeamMember[];
  webmaster: TeamMember;
}

// Event Types
export type EventType =
  | "workshop"
  | "seminar"
  | "hackathon"
  | "webinar"
  | "competition"
  | "social";

export type EventStatus = "upcoming" | "ongoing" | "completed" | "cancelled";

export interface EventSpeaker {
  name: string;
  title?: string;
  organization?: string;
  photo?: string;
}

export interface EventResource {
  title: string;
  url: string;
  type?: "slides" | "code" | "video" | "document";
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  date: Date | string;
  time: string;
  endDate?: Date | string;
  location: string;
  type: EventType;
  status: EventStatus;
  description: string;
  longDescription?: string;
  attendees?: number;
  maxAttendees?: number;
  speaker?: string;
  speakers?: EventSpeaker[];
  image?: string;
  registrationLink?: string;
  registrationDeadline?: Date | string;
  resources?: EventResource[];
  tags?: string[];
  featured?: boolean;
}

// Member Types
export interface Member {
  id: string;
  name: string;
  ieeeId: string;
  department: string;
  year: string;
  email: string;
  phone?: string;
  photo?: string;
  active: boolean;
  joinDate?: Date | string;
  interests?: string[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  ieeeId?: string;
  reason?: string;
}

// Page Props Types
export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Filter Types
export interface EventFilters {
  type?: EventType;
  status?: EventStatus;
  search?: string;
  startDate?: Date | string;
  endDate?: Date | string;
}

export interface MemberFilters {
  department?: string;
  year?: string;
  search?: string;
  active?: boolean;
}
