"use client";

import { useState } from "react";
import { User, Search, Filter } from "lucide-react";
import Link from "next/link";
import committeeData from "../committee/members.json";

interface Member {
  id: string;
  name: string;
  role: string;
  department: string;
  year: string;
}

const allMembers: Member[] = [
  {
    id: "faculty-advisor",
    name: committeeData.facultyAdvisor.name,
    role: committeeData.facultyAdvisor.designation || "Faculty Advisor",
    department: committeeData.facultyAdvisor.department,
    year: "Faculty",
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
    year: member.year || "Undergraduate",
  })),
];

export default function ScopeMembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [filterYear, setFilterYear] = useState("all");

  // Filter logic
  const filteredMembers = allMembers.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDepartment =
      filterDepartment === "all" || member.department === filterDepartment;
    const matchesYear = filterYear === "all" || member.year === filterYear;

    return matchesSearch && matchesDepartment && matchesYear;
  });

  const departments = [...new Set(allMembers.map((member) => member.department))];
  const years = [...new Set(allMembers.map((member) => member.year))];
  const uniqueRoles = new Set(allMembers.map((member) => member.role)).size;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scope Members</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Meet our active IEEE Computer Society members who are part of our
            vibrant technical community
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold text-[#00629B] mb-2">
                  {allMembers.length}
                </div>
                <div className="text-gray-600">Total Members</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-[#00629B] mb-2">
                  {departments.length}
                </div>
                <div className="text-gray-600">Departments</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-[#00629B] mb-2">
                  {years.length}
                </div>
                <div className="text-gray-600">Academic Levels</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-[#00629B] mb-2">{uniqueRoles}</div>
                <div className="text-gray-600">Committee Roles</div>
              </div>
            </div>
          </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
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
            </div>

            {/* Department Filter */}
            <div className="md:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00629B] appearance-none bg-white"
                >
                  <option value="all">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Year Filter */}
            <div className="md:w-48">
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00629B] appearance-none bg-white"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
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
              <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No members found</p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <div key={member.id} className="cs-card p-6 bg-white">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-[#00B5E2]/10 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-[#00629B]" />
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {member.department}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{member.year}</p>

                    <div className="inline-block bg-[#00B5E2]/10 text-[#00629B] text-xs font-semibold px-3 py-1 rounded-full">
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 bg-[#00629B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Become an IEEE Computer Society member and be part of our growing
            technical community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block no-underline"
            >
              Join IEEE Today
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#00629B] transition inline-block no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
