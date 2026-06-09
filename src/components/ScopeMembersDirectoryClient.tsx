"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import Image from "next/image";
import { GradientAvatar } from "@/components/GradientAvatar";
import { type FlatMember } from "@/lib/members";

interface ScopeMembersDirectoryClientProps {
  allMembers: FlatMember[];
}

export default function ScopeMembersDirectoryClient({
  allMembers,
}: ScopeMembersDirectoryClientProps) {
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

  const departments = [
    ...new Set(allMembers.map((member) => member.department)),
  ];
  const years = [...new Set(allMembers.map((member) => member.year))];
  const uniqueRoles = new Set(allMembers.map((member) => member.role)).size;

  return (
    <>
      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {allMembers.length}
              </div>
              <div className="text-gray-600">Total Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {departments.length}
              </div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {years.length}
              </div>
              <div className="text-gray-600">Academic Levels</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {uniqueRoles}
              </div>
              <div className="text-gray-600">Committee Roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-warm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <label htmlFor="member-search" className="sr-only">
                Search members by name
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5" />
                <input
                  id="member-search"
                  type="text"
                  placeholder="Search members by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cs-input pl-10 pr-4"
                />
              </div>
            </div>

            {/* Department Filter */}
            <div className="md:w-64">
              <label htmlFor="department-filter" className="sr-only">
                Filter by department
              </label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5" />
                <select
                  id="department-filter"
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="cs-input pl-10 pr-4 appearance-none bg-white"
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
              <label htmlFor="year-filter" className="sr-only">
                Filter by year
              </label>
              <select
                id="year-filter"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="cs-input appearance-none bg-white"
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
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <GradientAvatar name="empty" size="sm" />
              </div>
              <p className="text-xl text-gray-600">No members found</p>
              <p className="text-gray-600 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <>
              <h2 className="sr-only">Committee Members</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="cs-card p-6 bg-white group">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden relative flex items-center justify-center">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
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

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {member.department}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {member.year}
                      </p>

                      <div className="inline-block bg-[#00B5E2]/10 text-[#00629B] text-xs font-semibold px-3 py-1 rounded-full">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
