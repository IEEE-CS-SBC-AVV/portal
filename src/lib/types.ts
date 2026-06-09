export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type:
    | "workshop"
    | "seminar"
    | "hackathon"
    | "webinar"
    | "competition"
    | "social"
    | "other";
  description: string;
  speaker?: string;
  poster?: string;
  registrationUrl?: string;
  featured?: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role?: string;
  department: string;
  year?: string;
  email: string | null;
  linkedin?: string;
  phone?: string | null;
  photo?: string | null;
  bio?: string;
  designation?: string;
}

export interface SlugParams {
  params: Promise<{ slug: string }>;
}
