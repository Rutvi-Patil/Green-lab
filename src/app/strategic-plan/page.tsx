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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="py-12 md:py-24">
          <a href="/contact" className="text-sm font-medium text-gray-500 hover:text-green-800 transition duration-150 mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            CONTACT US
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
    </div>
  );
}
