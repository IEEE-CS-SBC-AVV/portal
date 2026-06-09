"use client";

import { useState } from "react";
import { Search, Mail, Shield, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import { GradientAvatar } from "@/components/GradientAvatar";
import { type FlatMember } from "@/lib/members";

interface MembershipDirectoryClientProps {
  allMembers: FlatMember[];
}

export default function MembershipDirectoryClient({
  allMembers,
}: MembershipDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = allMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const departments = [
    ...new Set(allMembers.map((member) => member.department)),
  ];

  return (
    <>
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
                {departments.length}
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
          <label htmlFor="member-search" className="sr-only">
            Search members by name
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="member-search"
              type="text"
              placeholder="Search members by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="cs-input pl-10 pr-4"
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
              <p className="text-gray-600 mt-2">Try adjusting your search</p>
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
                      <GradientAvatar
                        name={member.name}
                        size="md"
                        className="!w-full !h-full !text-2xl"
                      />
                    )}
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#00629B] font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-600">{member.department}</p>
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
    </>
  );
}
