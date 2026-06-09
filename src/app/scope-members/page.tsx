import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { getAllMembers } from "@/lib/members";
import ScopeMembersDirectoryClient from "@/components/ScopeMembersDirectoryClient";

const allMembers = getAllMembers();

export default function ScopeMembersPage() {
  return (
    <div>
      <Breadcrumbs segments={[{ label: "Scope Members" }]} />
      <PageHeader
        title="Scope Members"
        description="Meet our active IEEE Computer Society members who are part of our vibrant technical community"
      />

      <ScopeMembersDirectoryClient allMembers={allMembers} />

      {/* Join CTA Section */}
      <section className="py-16 bg-[#00629B] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 cs-dot-grid opacity-10 text-white/30"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Community?
          </h2>
          <p className="text-xl text-white mb-8">
            Become an IEEE Computer Society member and be part of our growing
            technical community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="btn-cs-white">
              Join IEEE Today
            </Link>
            <Link href="/contact" className="btn-cs-white text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
