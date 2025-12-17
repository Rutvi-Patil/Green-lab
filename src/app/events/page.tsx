'use client';

export default function EventsPage() {
  return (
    <div className="bg-white">

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
                src="https://mygreenlab.org/wp-content/uploads/2025/08/VIrtual-Summit-2-920x920.png" 
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
    </div>
  );
}
