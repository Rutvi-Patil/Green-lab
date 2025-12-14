'use client';

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <span>my green lab.</span>
              </a>
            </div>
            {/* Desktop Links */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#" className="nav-link text-gray-700 hover:text-green-500">How to Green Your Lab</a>
              <a href="/certification" className="nav-link text-gray-700 hover:text-green-500">Programs</a>
              <a href="/resources" className="nav-link text-gray-700 hover:text-green-500">Resources</a>
              <a href="#" className="nav-link text-gray-700 hover:text-green-500">The Beaker Blog</a>
              <a href="/about" className="nav-link text-gray-700 hover:text-green-500">About Us</a>
              <a href="#" className="nav-link text-gray-700 hover:text-green-500 font-bold text-green-500">Get Involved</a>
            </nav>
            {/* CTA */}
            <div className="hidden md:block">
              <button className="flex items-center text-gray-700 text-sm font-medium hover:text-green-500 transition duration-300">
                Give Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-green-500 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link and Hero Section */}
        <div className="py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-green-500 transition duration-150 mb-8 inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              GET INVOLVED
            </a>
            <h1 className="text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Events
            </h1>
            {/* Empty space for text, as the video shows minimal text here */}
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Hero Image with Circular Crop */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500 ease-in-out">
              <img 
                src="https://placehold.co/1000x1000/0A5F23/ffffff?text=Lab+Scientist" 
                alt="Scientist looking into a microscope in a laboratory setting." 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Recording CTA Block (Green) */}
        <div className="bg-green-800 text-white p-8 sm:p-12 lg:p-16 rounded-xl my-16 shadow-lg transform hover:shadow-2xl transition duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white opacity-80 mb-2">2026 CARBON IMPACT REPORT</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Register to view the Recording
              </h2>
              <p className="text-lg opacity-90">
                Get access to the recording for the Leading Through Change: Pharma's Climate Commitment Amid ESG Headwinds event.
              </p>
            </div>
            <a href="#" className="mt-8 sm:mt-0 flex items-center justify-center bg-white text-green-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-200 group transform hover:scale-105">
              Register Now
              <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="py-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10">Past My Green Lab events</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
            Explore highlights from our previous summits and special events. Many include on-demand recordings, resources, and follow-up links.
          </p>

          <div className="space-y-12">
            {/* Event Item 1 */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8 transition duration-300 hover:bg-gray-50 -mx-4 px-4 rounded-lg">
              <div className="md:w-1/3 space-y-2 py-2">
                <p className="text-sm font-semibold tracking-wider uppercase text-gray-500">GLOBAL SUMMIT 2025</p>
                <h3 className="text-2xl font-bold text-green-800">Rising to the Challenge</h3>
              </div>
              <div className="md:w-2/3 md:pl-12 py-2">
                <p className="text-gray-700 mb-3">
                  Join the global scientific community at our flagship event focused on sustainability, innovation, and impact in science.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:underline flex items-center">
                  Global Summit 2025
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Event Item 2 */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8 transition duration-300 hover:bg-gray-50 -mx-4 px-4 rounded-lg">
              <div className="md:w-1/3 space-y-2 py-2">
                <p className="text-sm font-semibold tracking-wider uppercase text-gray-500">EUROPE SUMMIT 2025</p>
                <h3 className="text-2xl font-bold text-green-800">Scalable solutions for wider impact</h3>
              </div>
              <div className="md:w-2/3 md:pl-12 py-2">
                <p className="text-gray-700 mb-3">
                  This event featured European case studies and speakers from across the sector, including academic researchers, industry professionals, and sustainability experts.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:underline flex items-center">
                  2025 Europe Summit
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Event Item 3 (Repeating pattern for more content) */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8 transition duration-300 hover:bg-gray-50 -mx-4 px-4 rounded-lg">
              <div className="md:w-1/3 space-y-2 py-2">
                <p className="text-sm font-semibold tracking-wider uppercase text-gray-500">GLOBAL SUMMIT 2024</p>
                <h3 className="text-2xl font-bold text-green-800">Raising the bar</h3>
              </div>
              <div className="md:w-2/3 md:pl-12 py-2">
                <p className="text-gray-700 mb-3">
                  This event addressed the urgency and opportunity facing science today, highlighting transparency, third-party verification, and strategies for navigating evolving regulations.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:underline flex items-center">
                  Global Summit 2024
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Recordings CTA Block (Purple) */}
        <div className="bg-purple-800 text-white p-8 sm:p-12 lg:p-16 rounded-xl my-24 shadow-lg transform hover:shadow-2xl transition duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white opacity-80 mb-2">GLOBAL SUMMIT 2025</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Register to view the recordings
              </h2>
              <p className="text-lg opacity-90">
                Don't miss this year's Summit recordings, featuring expert speakers, breakout sessions, and global collaboration on the future of green labs.
              </p>
            </div>
            <a href="#" className="mt-8 sm:mt-0 flex items-center justify-center bg-white text-purple-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-200 group transform hover:scale-105">
              Recordings available!
              <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            
            {/* Logo & Copyright */}
            <div className="md:col-span-1 space-y-4">
              <div className="text-xl font-bold">
                <span className="text-green-400">my green lab</span><span className="text-white">.</span>
              </div>
              <p className="text-sm opacity-70">© 2025 My Green Lab</p>
            </div>

            {/* Key Programs */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-2">KEY PROGRAMS</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="/certification" className="hover:underline">My Green Lab® Certification</a></li>
                <li><a href="/act-ecolabel" className="hover:underline">ACT® Ecolabel</a></li>
                <li><a href="/accredited-professionals" className="hover:underline">Accredited Professionals</a></li>
                <li><a href="/resources" className="hover:underline">Resources</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-2">ABOUT US</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Follow Us</a></li>
                <li><a href="/newsletter" className="hover:underline">Newsletter</a></li>
                <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              </ul>
            </div>

            {/* Learn More */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-2">LEARN MORE</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="/events" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Our Strategic Plan</a></li>
                <li><a href="/sitemap" className="hover:underline">Sitemap</a></li>
              </ul>
            </div>

            {/* Join our mailing list */}
            <div className="md:col-span-1 space-y-4">
              <h4 className="font-bold text-lg mb-2">Join our mailing list</h4>
              <p className="text-sm opacity-80">
                Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!
              </p>
              <a href="#" className="inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-200">
                SIGN UP
              </a>
              <div className="pt-4 space-y-2">
                <p className="font-semibold text-sm">FOLLOW US</p>
                <div className="flex space-x-4 text-white">
                  <a href="#" className="hover:text-green-400 transition duration-150">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm7 6h-2v-3c0-2.324-1.127-2.324-1.25-.921v3.921h-2v-6h2v.975c.346-.576 1.157-1.175 2.181-1.175 2.518 0 2.819 1.636 2.819 4.314v2.886z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-green-400 transition duration-150">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c-.15 4.354-2.227 8.017-6.066 8.017-1.488 0-2.868-.458-4.043-1.233 1.544.172 3.097-.243 4.414-1.189-1.484-.047-2.828-.971-3.264-2.279.44.08.86.062 1.257-.043-1.503-.324-2.766-1.62-2.766-3.204 1-.502 2.7-.272 3.32.107-1.054-.919-2.073-2.613-2.073-4.103 0-1.08.312-2.184 1.139-3.098 1.545 1.7 3.627 2.844 5.92 2.943-.076-.231-.13-.473-.13-.722 0-1.742 1.411-3.153 3.153-3.153.916 0 1.748.384 2.336 1.004.72-.14 1.405-.426 2.016-.767-.233.729-.757 1.396-1.428 1.796 1.251-.157 2.031-.482 2.548-.684z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
