import Link from "next/link";
import { Users, Shield } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { getAllMembers } from "@/lib/members";
import MembershipDirectoryClient from "@/components/MembershipDirectoryClient";

const allMembers = getAllMembers();

export default function MembershipDirectoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs segments={[{ label: "Membership Directory" }]} />
      <PageHeader
        title="Membership Directory"
        description="Connect with IEEE Computer Society committee members and chapter leadership"
      >
        <Users className="h-16 w-16 mx-auto mb-4" />
      </PageHeader>

      <MembershipDirectoryClient allMembers={allMembers} />

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
              Join Our Chapter
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
