'use client';

export default function FollowPage() {
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
              Follow Us
            </h1>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Hero Image with Circular Crop */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500 ease-in-out">
              <img 
                src="https://mygreenlab.org/wp-content/uploads/2025/08/follow-us-920x613.png" 
                alt="Aerial view of people gathering, symbolizing community." 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Engagement Matters Section */}
        <div className="py-12 border-t border-gray-200">
          <p className="text-sm font-semibold tracking-widest uppercase text-green-600 mb-2">WHY ENGAGEMENT MATTERS</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Help science lead the way in sustainability
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            Lab sustainability is evolving rapidly and your engagement keeps the momentum going. Every like, share, and signup helps amplify our collective impact.
          </p>
        </div>

        {/* Find Us Online Section */}
        <div className="pt-12 pb-24">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Where to find us online</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
            Follow us to stay up to date on the latest resources, events, and community stories from around the world. Together, we can transform science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* LinkedIn Card */}
            <div className="p-6 rounded-xl bg-gray-50 shadow-md border-b-3 border-transparent hover:border-green-500 hover:transform hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">LINKEDIN</h3>
              <p className="text-lg font-semibold text-green-800 mb-4">Connect with a global sustainability community</p>
              <p className="text-gray-700 mb-6">
                Get updates on programs, events, and thought leadership shaping sustainable science.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:underline flex items-center">
                Follow us on LinkedIn
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* X (Twitter) Card */}
            <div className="p-6 rounded-xl bg-gray-50 shadow-md border-b-3 border-transparent hover:border-green-500 hover:transform hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">X (FORMERLY TWITTER)</h3>
              <p className="text-lg font-semibold text-green-800 mb-4">Stay current on news and real-time updates</p>
              <p className="text-gray-700 mb-6">
                Join timely conversations and share stories from the green lab movement. Follow and use hashtags like #MyGreenLab and #SustainableScience.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:underline flex items-center">
                Follow us on X
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Facebook Card */}
            <div className="p-6 rounded-xl bg-gray-50 shadow-md border-b-3 border-transparent hover:border-green-500 hover:transform hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FACEBOOK</h3>
              <p className="text-lg font-semibold text-green-800 mb-4">Join a mission-driven virtual community</p>
              <p className="text-gray-700 mb-6">
                Engage with our global audience and share sustainability content with your network.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:underline flex items-center">
                Follow us on Facebook
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
        
        {/* Newsletter CTA Block (Green) */}
        <div className="bg-green-800 text-white p-8 sm:p-12 lg:p-16 rounded-xl my-16 shadow-lg transform hover:shadow-2xl transition duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white opacity-80 mb-2">STAY CONNECTED</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Sign up for our newsletter
              </h2>
              <p className="text-lg opacity-90">
                Get updates on programs, sustainability tips, research highlights, and stories from across the My Green Lab community, delivered straight to your inbox.
              </p>
            </div>
            <a href="#" className="mt-8 sm:mt-0 flex items-center justify-center bg-white text-green-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-200 group transform hover:scale-105">
              Newsletter Sign-up
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
