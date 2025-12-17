'use client';

import { useEffect, useState } from 'react';

export default function ResourcesPage() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = parseInt(element.getAttribute('data-animation-delay') || 0);

          setTimeout(() => {
            element.classList.add('show-on-scroll');
          }, Number(delay));
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Target all elements marked for animation
    document.querySelectorAll('.hidden-on-load').forEach(el => {
      animationObserver.observe(el);
    });

    return () => {
      document.querySelectorAll('.hidden-on-load').forEach(el => {
        animationObserver.unobserve(el);
      });
    };
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing! You will receive updates about new resources.');
      setEmail('');
    }
  };

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
              <a href="/resources" className="nav-link text-green-500 font-bold">Resources</a>
              <a href="#" className="nav-link text-gray-700 hover:text-green-500">The Beaker Blog</a>
              <a href="/about" className="nav-link text-gray-700 hover:text-green-500">About Us</a>
              <a href="#" className="nav-link text-gray-700 hover:text-green-500">Get Involved</a>
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

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Abstract Circles Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 rounded-full bg-blue-200 opacity-50 top-[-100px] left-[-100px] transition-transform duration-1000 ease-out"></div>
          <div className="absolute w-72 h-72 rounded-full bg-green-300 opacity-80 top-[250px] left-[50px] transition-transform duration-1000 ease-out delay-100"></div>
          <div className="absolute w-[800px] h-[400px] rounded-t-full bg-green-500 opacity-80 bottom-[-200px] left-1/2 transform -translate-x-1/2 transition-transform duration-1000 ease-out delay-200"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-3">Knowledge Center</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Resources Hub
            </h1>
            <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
              Access comprehensive guides, tools, and educational materials to advance your laboratory sustainability journey.
            </p>
            <a href="#" className="inline-block py-3 px-8 text-lg font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg transform hover:scale-[1.02]">
              Browse All Resources
            </a>
          </div>
        </div>
      </section>
      
      {/* Resource Categories Section */}
      <section className="py-20 bg-white" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0">
              Explore Resource Categories
            </h2>
            <a href="#" className="flex items-center text-base font-semibold text-green-500 group">
              View all resources
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <p className="text-base text-gray-600 mb-12 max-w-5xl mx-auto text-center">
            Our comprehensive resource library covers all aspects of laboratory sustainability, from practical guides to research publications.
          </p>

          {/* Resource Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            {/* Guides & Manuals */}
            <div className="flex flex-col items-center text-center hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="0">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Guides & Manuals</h3>
              <p className="text-sm text-gray-700 max-w-md">Step-by-step guides for implementing sustainable practices in your laboratory.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline mt-4">Browse guides</a>
            </div>

            {/* Research Papers */}
            <div className="flex flex-col items-center text-center hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="200">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Research Papers</h3>
              <p className="text-sm text-gray-700 max-w-md">Latest research on laboratory sustainability and environmental impact reduction.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline mt-4">Read research</a>
            </div>

            {/* Case Studies */}
            <div className="flex flex-col items-center text-center hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="400">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-sm text-gray-700 max-w-md">Real-world examples of successful sustainability implementations.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline mt-4">View case studies</a>
            </div>

            {/* Webinars */}
            <div className="flex flex-col items-center text-center hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="600">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Webinars</h3>
              <p className="text-sm text-gray-700 max-w-md">Educational webinars on laboratory sustainability topics.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline mt-4">Watch webinars</a>
            </div>

            {/* Tools & Calculators */}
            <div className="flex flex-col items-center text-center hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="800">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Tools & Calculators</h3>
              <p className="text-sm text-gray-700 max-w-md">Interactive tools to measure and reduce your environmental impact.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline mt-4">Use tools</a>
            </div>

            {/* Templates */}
            <div className="flex flex-col items-center text-center hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="1000">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Templates</h3>
              <p className="text-sm text-gray-700 max-w-md">Ready-to-use templates for sustainability assessments and reporting.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline mt-4">Download templates</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0">
              Featured Resources
            </h2>
            <a href="#" className="flex items-center text-base font-semibold text-green-500 group">
              Explore all
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="text-base text-gray-700 max-w-5xl mx-auto mb-16 text-center">
            Discover our most popular and impactful resources for laboratory sustainability.
          </p>
          
          {/* Featured Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="0">
              <img src="https://placehold.co/400x250/D9D9D9/4CAF50?text=Lab+Sustainability+Guide" alt="Laboratory Sustainability Guide" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Laboratory Sustainability Guide</h4>
              <p className="text-sm text-gray-700 mb-4">Comprehensive guide to implementing sustainable practices in your laboratory.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline">Download PDF</a>
            </div>

            {/* Resource 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="100">
              <img src="https://placehold.co/400x250/D9D9D9/4CAF50?text=Energy+Calculator" alt="Energy Calculator Tool" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Energy Calculator</h4>
              <p className="text-sm text-gray-700 mb-4">Calculate your laboratory's energy consumption and identify savings opportunities.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline">Use calculator</a>
            </div>

            {/* Resource 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hidden-on-load opacity-0 transform translate-y-5 transition-all duration-600 ease-out" data-animation-delay="200">
              <img src="https://placehold.co/400x250/D9D9D9/4CAF50?text=Waste+Reduction+Webinar" alt="Waste Reduction Webinar" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Waste Reduction Webinar</h4>
              <p className="text-sm text-gray-700 mb-4">Learn strategies for reducing laboratory waste through this informative webinar.</p>
              <a href="#" className="text-green-500 font-semibold text-sm hover:underline">Watch now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Updates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mb-12">
            Get the latest resources, research, and sustainability insights delivered to your inbox.
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150" 
              />
              <button 
                type="submit" 
                className="w-full py-3 px-4 text-lg font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg"
              >
                Subscribe to Resources
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-8">
            {/* Logo/Branding */}
            <div>
              <a href="/" className="flex items-center space-x-2 text-xl font-bold text-white mb-6">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <span>my green lab.</span>
              </a>
              <p className="text-sm text-gray-400">&copy; 2025 My Green Lab</p>
            </div>

            {/* Key Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">KEY PROGRAMS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/certification" className="hover:text-white transition">My Green Lab Certification</a></li>
                <li><a href="/act-ecolabel" className="hover:text-white transition">ACT® Ecolabel</a></li>
                <li><a href="#" className="hover:text-white transition">ECoLab®</a></li>
                <li><a href="/accredited-professionals" className="hover:text-white transition">Accreditations</a></li>
                <li><a href="/resources" className="hover:text-white transition">Resources</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">ABOUT US</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="/newsletter" className="hover:text-white transition">Newsletter</a></li>
                <li><a href="/data-privacy" className="hover:text-white transition">Data Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Preferences</a></li>
              </ul>
            </div>

            {/* Join Our Mailing List */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">JOIN OUR MAILING LIST</h4>
              <p className="text-sm text-gray-400 mb-4">Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!</p>
              <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">SIGN UP</button>
              
              <h4 className="text-lg font-semibold mt-8 mb-4 text-green-400">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm7 6h-2v-3c0-2.324-1.127-2.324-1.25-.921v3.921h-2v-6h2v.975c.346-.576 1.157-1.175 2.181-1.175 2.518 0 2.819 1.636 2.819 4.314v2.886z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c-.15 4.354-2.227 8.017-6.066 8.017-1.488 0-2.868-.458-4.043-1.233 1.544.172 3.097-.243 4.414-1.189-1.484-.047-2.828-.971-3.264-2.279.44.08.86.062 1.257-.043-1.503-.324-2.766-1.62-2.766-3.204 1-.502 2.7-.272 3.32.107-1.054-.919-2.073-2.613-2.073-4.103 0-1.08.312-2.184 1.139-3.098 1.545 1.7 3.627 2.844 5.92 2.943-.076-.231-.13-.473-.13-.722 0-1.742 1.411-3.153 3.153-3.153.916 0 1.748.384 2.336 1.004.72-.14 1.405-.426 2.016-.767-.233.729-.757 1.396-1.428 1.796 1.251-.157 2.031-.482 2.548-.684z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            &copy; 2025 My Green Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
