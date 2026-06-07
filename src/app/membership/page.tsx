"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Users, Mail, Shield, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import { GradientAvatar } from "@/components/GradientAvatar";
import committeeData from "../committee/members.json";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface DirectoryMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string | null;
  linkedin?: string;
  phone: string | null;
  photo: string;
}

const allMembers: DirectoryMember[] = [
  {
    id: "faculty-advisor",
    name: committeeData.facultyAdvisor.name,
    role: committeeData.facultyAdvisor.designation || "Faculty Advisor",
    department: committeeData.facultyAdvisor.department,
    email: committeeData.facultyAdvisor.email,
    linkedin: undefined,
    phone: committeeData.facultyAdvisor.phone,
    photo: committeeData.facultyAdvisor.photo,
  },
  ...[
    ...committeeData.executive,
    ...committeeData.treasurer,
    ...committeeData.technical,
    ...committeeData.webmaster,
    ...committeeData.publicity,
    ...committeeData.design,
    ...committeeData.newsletter,
    ...committeeData.wice,
  ].map((member) => ({
    id: member.id,
    name: member.name,
    role: member.role || "Member",
    department: member.department,
    email: member.email || null,
    linkedin: member.linkedin,
    phone: member.phone || null,
    photo: member.photo,
  })),
];

export default function MembershipDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = allMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs segments={[{ label: "Membership Directory" }]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Membership Directory
            </h1>
            <p className="text-xl text-white/90">
              Connect with IEEE Computer Society committee members and chapter
              leadership
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {allMembers.length}
              </div>
              <div className="text-gray-600">Committee Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {new Set(allMembers.map((m) => m.role)).size}
              </div>
              <div className="text-gray-600">Roles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {new Set(allMembers.map((m) => m.department)).size}
              </div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {allMembers.filter((m) => m.email).length}
              </div>
              <div className="text-gray-600">Contactable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search members by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00629B]"
            />
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredMembers.length} of {allMembers.length} members
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-12">
              <Shield className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No members found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="cs-card p-6 bg-white flex flex-col"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden relative">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    ) : (
                      <GradientAvatar name={member.name} size="md" />
                    )}
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#00629B] font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500">{member.department}</p>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100 mt-auto">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-[#00629B] transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00629B] transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="text-gray-400 hover:text-[#00629B] transition-colors"
                        aria-label={`Call ${member.name}`}
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Future Expansion Note */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Full Member Directory Coming Soon
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We&apos;re developing an expanded directory with{" "}
            <strong>all active chapter members</strong>, including
            authentication, privacy controls, and advanced search. Committee
            members are shown here as a preview.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="btn-cs-primary px-8 py-4 inline-block"
            >
              Join IEEE Today
            </Link>
            <Link
              href="/contact"
              className="btn-cs-secondary px-8 py-4 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
