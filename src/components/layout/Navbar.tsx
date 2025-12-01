import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              IEEE CS SBC
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/team" className="hover:text-blue-600">Team</Link>
            <Link href="/events" className="hover:text-blue-600">Events</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile menu button - will enhance later */}
          <div className="md:hidden">
            <button className="p-2">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
