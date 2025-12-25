"use client";

import { useState } from "react";
import { User, Search, Filter } from "lucide-react";
import Link from "next/link";

// Sample member data - Replace with actual data from JSON
const sampleMembers = [
  {
    id: "1",
    name: "Member Name 1",
    department: "Computer Engineering",
    year: "Final Year",
    ieeeId: "12345678",
    active: true,
  },
  {
    id: "2",
    name: "Member Name 2",
    department: "Computer Science",
    year: "Third Year",
    ieeeId: "23456789",
    active: true,
  },
  {
    id: "3",
    name: "Member Name 3",
    department: "Information Technology",
    year: "Second Year",
    ieeeId: "34567890",
    active: true,
  },
  // Add more sample members...
];

export default function ScopeMembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [filterYear, setFilterYear] = useState("all");

  // Filter logic
  const filteredMembers = sampleMembers.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDepartment =
      filterDepartment === "all" || member.department === filterDepartment;
    const matchesYear = filterYear === "all" || member.year === filterYear;

    return matchesSearch && matchesDepartment && matchesYear;
  });

  const departments = [
    "Computer Engineering",
    "Computer Science",
    "Information Technology",
  ];
  const years = ["Final Year", "Third Year", "Second Year", "First Year"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ieee-blue to-ieee-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scope Members</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
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
              <div className="text-4xl font-bold text-ieee-blue mb-2">
                {sampleMembers.length}
              </div>
              <div className="text-gray-600">Total Members</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-ieee-blue mb-2">
                {
                  sampleMembers.filter(
                    (m) => m.department === "Computer Engineering"
                  ).length
                }
              </div>
              <div className="text-gray-600">Computer Engineering</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-ieee-blue mb-2">
                {
                  sampleMembers.filter(
                    (m) => m.department === "Computer Science"
                  ).length
                }
              </div>
              <div className="text-gray-600">Computer Science</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-ieee-blue mb-2">
                {
                  sampleMembers.filter(
                    (m) => m.department === "Information Technology"
                  ).length
                }
              </div>
              <div className="text-gray-600">Information Technology</div>
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
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ieee-blue"
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
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ieee-blue appearance-none bg-white"
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
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-ieee-blue appearance-none bg-white"
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
            Showing {filteredMembers.length} of {sampleMembers.length} members
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
                <div key={member.id} className="ieee-card p-6 bg-white">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-ieee-blue-light rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-ieee-blue" />
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

                    {/* IEEE ID Badge */}
                    <div className="inline-block bg-ieee-blue-light text-ieee-blue text-xs font-semibold px-3 py-1 rounded-full">
                      IEEE {member.ieeeId}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 bg-ieee-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Become an IEEE Computer Society member and be part of our growing
            technical community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="bg-white text-ieee-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
            >
              Join IEEE Today
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-ieee-blue transition inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
