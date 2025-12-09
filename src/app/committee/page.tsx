import { Mail, Linkedin, Phone, User } from "lucide-react";

// This would normally be imported from a JSON file
// For now, using inline data structure
const committeeData = {
  facultyAdvisor: {
    name: "Dr. Faculty Name",
    role: "Faculty Advisor",
    designation: "Professor & Head of Department",
    department: "Computer Science & Engineering",
    email: "faculty@university.edu",
    phone: "+91-XXXXXXXXXX",
    bio: "Dr. Faculty Name has been guiding the IEEE CS Student Branch for over 5 years.",
  },
  executive: [
    {
      name: "Student Chairperson",
      role: "Chairperson",
      department: "Computer Engineering",
      year: "Final Year",
      email: "chair@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Leading the chapter with vision and dedication.",
    },
    {
      name: "Student Vice-Chair",
      role: "Vice Chairperson",
      department: "Computer Science",
      year: "Third Year",
      email: "vicechair@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Supporting chapter initiatives and driving engagement.",
    },
    {
      name: "Student Secretary",
      role: "Secretary",
      department: "Information Technology",
      year: "Third Year",
      email: "secretary@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Maintaining records and ensuring smooth communication.",
    },
    {
      name: "Student Treasurer",
      role: "Treasurer",
      department: "Computer Engineering",
      year: "Third Year",
      email: "treasurer@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Managing finances and fiscal responsibility.",
    },
  ],
  technical: [
    {
      name: "Technical Lead 1",
      role: "Technical Lead",
      department: "Computer Science",
      year: "Third Year",
      email: "tech1@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Organizing technical workshops and hackathons.",
    },
    {
      name: "Technical Lead 2",
      role: "Technical Lead",
      department: "Computer Engineering",
      year: "Second Year",
      email: "tech2@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Coordinating coding competitions.",
    },
  ],
  events: [
    {
      name: "Event Coordinator 1",
      role: "Event Coordinator",
      department: "Information Technology",
      year: "Second Year",
      email: "events1@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Planning and executing memorable events.",
    },
    {
      name: "Event Coordinator 2",
      role: "Event Coordinator",
      department: "Computer Science",
      year: "Second Year",
      email: "events2@student.university.edu",
      linkedin: "https://linkedin.com/in/",
      bio: "Managing event logistics.",
    },
  ],
};

interface MemberCardProps {
  name: string;
  role: string;
  department: string;
  year?: string;
  email: string;
  linkedin?: string;
  phone?: string;
  bio: string;
  designation?: string;
}

function MemberCard({
  name,
  role,
  department,
  year,
  email,
  linkedin,
  phone,
  bio,
  designation,
}: MemberCardProps) {
  return (
    <div className="ieee-card p-6 h-full flex flex-col">
      {/* Placeholder Avatar */}
      <div className="w-32 h-32 mx-auto mb-4 bg-ieee-blue-light rounded-full flex items-center justify-center">
        <User className="w-16 h-16 text-ieee-blue" />
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-ieee-blue font-semibold mb-2">
          {designation || role}
        </p>
        <p className="text-sm text-gray-600">
          {department}
          {year && ` • ${year}`}
        </p>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-sm mb-4 flex-grow">{bio}</p>

      {/* Contact Links */}
      <div className="flex justify-center space-x-3 pt-4 border-t border-gray-200">
        <a
          href={`mailto:${email}`}
          className="text-gray-600 hover:text-ieee-blue transition"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-ieee-blue transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="text-gray-600 hover:text-ieee-blue transition"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-ieee-blue to-ieee-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Committee
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Meet the dedicated team driving our chapter's success
          </p>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Faculty Advisor
          </h2>
          <div className="max-w-md mx-auto">
            <MemberCard {...committeeData.facultyAdvisor} />
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Executive Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committeeData.executive.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {committeeData.technical.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Coordinators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Event Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {committeeData.events.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-ieee-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for passionate students to join our committee and
            help drive our chapter forward.
          </p>
          <a
            href="/contact"
            className="bg-white text-ieee-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}