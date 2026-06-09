import committeeData from "../../content/committee/members.json";
import type { CommitteeMember } from "./types";

export type FlatMember = CommitteeMember;

const allMembers: FlatMember[] = [
  {
    id: committeeData.facultyAdvisor.id || "faculty-advisor",
    name: committeeData.facultyAdvisor.name,
    role: committeeData.facultyAdvisor.designation || "Faculty Advisor",
    department: committeeData.facultyAdvisor.department,
    year: "Faculty",
    email: committeeData.facultyAdvisor.email || null,
    linkedin: (committeeData.facultyAdvisor as { linkedin?: string }).linkedin,
    phone: committeeData.facultyAdvisor.phone,
    photo: committeeData.facultyAdvisor.photo ?? undefined,
  },
  ...[
    ...committeeData.executive,
    ...committeeData.treasurer,
    ...committeeData.technical,
    ...committeeData.webmaster,
    ...committeeData.publicity,
    ...committeeData.design,
    ...committeeData.newsletter,
    ...committeeData.wie,
  ].map((member) => ({
    id: member.id,
    name: member.name,
    role: member.role || "Member",
    department: member.department,
    year: member.year || "Undergraduate",
    email: member.email || null,
    linkedin: member.linkedin,
    phone: member.phone || null,
    photo: member.photo ?? undefined,
  })),
];

export function getAllMembers(): FlatMember[] {
  return allMembers;
}
