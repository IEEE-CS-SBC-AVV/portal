export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">IEEE CS SBC</h3>
            <p className="text-gray-600">
              IEEE Computer Society Student Branch Committee
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/about" className="hover:text-blue-600">About</a></li>
              <li><a href="/events" className="hover:text-blue-600">Events</a></li>
              <li><a href="/join" className="hover:text-blue-600">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <p className="text-gray-600">
              Email: contact@ieeecssbc.org<br/>
              Follow us on social media
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} IEEE CS SBC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
