'use client';

import { useState } from 'react';

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interests: {
      certification: false,
      act: false,
      accredited: false,
      resources: false
    },
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, consent: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: {
            ...prev.interests,
            [name]: checked
          }
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.consent) {
      alert('Thank you for subscribing to our newsletter! You will receive a confirmation email shortly.');
      setFormData({
        name: '',
        email: '',
        organization: '',
        interests: {
          certification: false,
          act: false,
          accredited: false,
          resources: false
        },
        consent: false
      });
    } else {
      alert('Please fill in all required fields and accept the consent checkbox.');
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
              <a href="/resources" className="nav-link text-gray-700 hover:text-green-500">Resources</a>
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
      <section className="relative pt-16 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Stay Connected
            </h1>
            <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our newsletter to receive the latest updates on laboratory sustainability, program announcements, success stories, and exclusive content.
            </p>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Subscribe to Our Newsletter?
              </h2>
              
              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Latest Updates</h3>
                    <p className="text-gray-700">Be the first to know about new programs, certification updates, and sustainability initiatives.</p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights</h3>
                    <p className="text-gray-700">Receive tips, best practices, and research findings from laboratory sustainability experts.</p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Stories</h3>
                    <p className="text-gray-700">Learn from success stories and case studies from laboratories around the world.</p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Invitations</h3>
                    <p className="text-gray-700">Get exclusive invitations to webinars, workshops, and networking events.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Subscribe Now</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      id="name" 
                      name="name" 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150" 
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150" 
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization (Optional)</label>
                    <input 
                      id="organization" 
                      name="organization" 
                      type="text" 
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150" 
                      placeholder="University or Company Name"
                    />
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="certification" 
                          checked={formData.interests.certification}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded mr-2" 
                        />
                        <span className="text-sm text-gray-700">My Green Lab Certification</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="act" 
                          checked={formData.interests.act}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded mr-2" 
                        />
                        <span className="text-sm text-gray-700">ACT Ecolabel</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="accredited" 
                          checked={formData.interests.accredited}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded mr-2" 
                        />
                        <span className="text-sm text-gray-700">Accredited Professionals</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="resources" 
                          checked={formData.interests.resources}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded mr-2" 
                        />
                        <span className="text-sm text-gray-700">Resources & Guides</span>
                      </label>
                    </div>
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start">
                      <input 
                        type="checkbox" 
                        name="consent" 
                        required 
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded mt-1 mr-2" 
                      />
                      <span className="text-sm text-gray-700">I agree to receive occasional newsletters and updates from My Green Lab. I understand I can unsubscribe at any time.</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button 
                      type="submit" 
                      className="w-full py-3 px-4 text-lg font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg"
                    >
                      Subscribe to Newsletter
                    </button>
                  </div>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 mt-4 text-center">
                  We respect your privacy. Your information will be used in accordance with our <a href="/data-privacy" className="text-green-500 hover:underline">Data Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Subscribers Say
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Join thousands of laboratory professionals who rely on our newsletter for the latest sustainability insights.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://placehold.co/60x60/4CAF50/ffffff?text=JD" alt="Dr. Jane Doe" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Jane Doe</h4>
                  <p className="text-sm text-gray-600">Research Scientist</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The My Green Lab newsletter keeps me updated on the latest sustainability practices and has helped our lab reduce waste by 30%."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://placehold.co/60x60/4CAF50/ffffff?text=MS" alt="Mark Smith" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mark Smith</h4>
                  <p className="text-sm text-gray-600">Lab Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"I love the practical tips and case studies. The newsletter is always relevant and actionable for our laboratory operations."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://placehold.co/60x60/4CAF50/ffffff?text=EJ" alt="Emily Johnson" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Johnson</h4>
                  <p className="text-sm text-gray-600">Sustainability Coordinator</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The expert insights and research findings in the newsletter have been invaluable for implementing our green lab initiatives."</p>
            </div>
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
