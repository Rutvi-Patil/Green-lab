'use client';

import { useState } from 'react';

export default function StrategicPlanPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    organization: '',
    jobTitle: '',
    city: '',
    country: '',
    interest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your interest! Your strategic plan will be downloaded shortly.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      workEmail: '',
      organization: '',
      jobTitle: '',
      city: '',
      country: '',
      interest: ''
    });
  };

  return (
    <div className="bg-white">
      {/* Header / Navigation Bar */}
      <header className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-green-600">my green lab</span><span className="text-green-800">.</span>
          </div>
          <nav className="hidden lg:flex space-x-8 text-sm font-medium">
            <a href="#" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">How to Green Your Lab</a>
            <a href="/certification" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">Programs</a>
            <a href="/resources" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">Resources</a>
            <a href="#" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">The Beaker Blog</a>
            <a href="/about" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">About Us</a>
            <a href="#" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">Get Involved</a>
          </nav>
          <a href="#" className="hidden sm:block text-sm font-semibold px-4 py-2 border-2 border-green-800 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition duration-200">GIVE NOW</a>
          <button className="lg:hidden text-green-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="py-12 md:py-24">
          <a href="/about" className="text-sm font-medium text-gray-500 hover:text-green-800 transition duration-150 mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ABOUT US
          </a>
          
          <p className="text-sm font-semibold tracking-widest uppercase text-green-600 mb-3">STRATEGIC PLAN 2025-2027</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900 mb-6 max-w-4xl">
            Driving measurable change in partnership with scientific community
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Discover how we're advancing green labs globally and creating lasting environmental impact through innovative programs, research, and tools.
          </p>
        </div>
        
        {/* Why This Plan Matters Section */}
        <div className="py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-green-600 mb-2">WHY THIS PLAN MATTERS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Essential reading for science leaders and sustainability professionals.
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're a funder, potential partner, lab manager, or policy maker, this plan reveals our roadmap for transforming scientific research sustainably.
            </p>
          </div>
        </div>

        {/* Plan Highlights Section */}
        <div className="py-12 md:py-16 border-t border-gray-200">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10">Plan Highlights</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
            Dive into our strategic priorities and discover how My Green Lab® and our certification partner, Impact Laboratories, will achieve operational excellence while driving global adoption.
          </p>

          <div className="space-y-12">
            
            {/* 1. Scaling Strategies */}
            <div className="md:grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">SCALING STRATEGIES</span>
                Adopting proven startup and technology methodologies
              </h3>
              <p className="text-lg text-gray-700">
                Learn how we're implementing scaling strategies from world's most successful startups and high-impact non-profits to accelerate sustainable lab adoption globally.
              </p>
            </div>

            {/* 2. Certification Excellence */}
            <div className="md:grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">CERTIFICATION EXCELLENCE</span>
                Enhancing quality, usability, and standard integrity
              </h3>
              <p className="text-lg text-gray-700">
                Discover our commitment to improving user interface, software platforms, and certification credibility while streamlining user experience.
              </p>
            </div>
            
            {/* 3. Crossing Chasm */}
            <div className="md:grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">CROSSING THE CHASM</span>
                Moving from early adopters to early majority
              </h3>
              <p className="text-lg text-gray-700">
                Explore our strategic roadmap to achieve significant market adoption and establish sustainable lab practices as industry norm.
              </p>
            </div>
            
            {/* 4. Financial & Environmental Benefits */}
            <div className="md:grid md:grid-cols-2 gap-8">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">FINANCIAL & ENVIRONMENTAL BENEFITS</span>
                Delivering verifiable financial and environmental impact
              </h3>
              <p className="text-lg text-gray-700">
                See how we plan to ensure measurable and highly credible financial and environmental impact reductions for customers while fulfilling our long-term mission.
              </p>
            </div>
          </div>
        </div>
        
        {/* Download Form Section */}
        <div className="py-12 md:py-24 border-t border-gray-200">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Download your free copy</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl">
            Get instant access to our complete strategic plan. Join thousands of science leaders who are a part of green lab movement.
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
            {/* Row 1: Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none" 
                placeholder="First Name*" 
                required 
              />
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none" 
                placeholder="Last Name*" 
                required 
              />
            </div>

            {/* Row 2: Work Email */}
            <div>
              <input 
                type="email" 
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none" 
                placeholder="Work Email*" 
                required 
              />
            </div>

            {/* Row 3: Organization and Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none" 
                placeholder="Organization*" 
                required 
              />
              <input 
                type="text" 
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none" 
                placeholder="Job title*" 
                required 
              />
            </div>

            {/* Row 4: City and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none" 
                placeholder="City*" 
                required 
              />
              <select 
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none bg-white" 
                required
              >
                <option value="" disabled selected>Country*</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="CN">China</option>
                <option value="IN">India</option>
                <option value="BR">Brazil</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
            
            {/* Interest Textarea */}
            <div>
              <textarea 
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                rows={3} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none" 
                placeholder="Please indicate why you are interested in our strategic plan." 
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-900 transition duration-300"
              >
                Download Strategic Plan
              </button>
            </div>
          </form>
        </div>

      </main>

      {/* Footer Section */}
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
                <li><a href="/follow" className="hover:underline">Follow Us</a></li>
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
                <li><a href="/strategic-plan" className="hover:underline">Our Strategic Plan</a></li>
                <li><a href="/sitemap" className="hover:underline">Sitemap</a></li>
              </ul>
            </div>

            {/* Join our mailing list */}
            <div className="md:col-span-1 space-y-4">
              <h4 className="font-bold text-lg mb-2">Join our mailing list</h4>
              <p className="text-sm opacity-80">
                Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!
              </p>
              <a href="/newsletter" className="inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-200">
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
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c-.15 4.354-2.227 8.017-6.066 8.017-1.488 0-2.868-.458-4.043-1.233 1.544.172 3.097-.243 4.414-1.189-1.484-.047-2.828-.971-3.264-2.279.44.08.86 .062 1.257-.043-1.503-.324-2.766-1.62-2.766-3.204 1-.502 2.7-.272 3.32.107-1.054-.919-2.073-2.613-2.073-4.103 0-1.08.312-2.184 1.139-3.098 1.545 1.7 3.627 2.844 5.92 2.943-.076-.231-.13-.473-.13-.722 0-1.742 1.411-3.153 3.153-3.153.916 0 1.748.384 2.336 1.004.72-.14 1.405-.426 2.016-.767-.233.729-.757 1.396-1.428 1.796 1.251-.157 2.031-.482 2.548-.684z"/>
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
