'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    organization: '',
    jobTitle: '',
    country: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
            <a href="/" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">How to Green Your Lab</a>
            <a href="/certification" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">Programs</a>
            <a href="/resources" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">Resources</a>
            <a href="#" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">The Beaker Blog</a>
            <a href="/about" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">About Us</a>
            <a href="/contact" className="nav-link text-gray-700 hover:text-green-800 transition duration-150">Get Involved</a>
          </nav>
          <a href="#" className="hidden sm:block text-sm font-semibold px-4 py-2 border-2 border-green-800 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition duration-200">GIVE NOW</a>
          <button className="lg:hidden text-green-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link and Hero Section */}
        <div className="py-12">
          <a href="/about" className="text-sm font-medium text-gray-500 hover:text-green-800 transition duration-150 mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            ABOUT US
          </a>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <p className="text-sm font-semibold tracking-widest uppercase text-green-600 mb-2">CONTACT US</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                Get in touch with My Green Lab
              </h1>
              <p className="text-lg text-gray-600">
                Have a question or comment? We're here to help with general inquiries, speaking invitations, or other requests. We provide welcoming, timely support.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              {/* Hero Image with Circular Crop */}
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500 ease-in-out">
                <img src="https://placehold.co/1000x1000/10B981/ffffff?text=Professional+Handshake" 
                     alt="Two professionals shaking hands outdoors, symbolizing partnership." 
                     className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Speaking Event Invitations CTA Block */}
        <div className="bg-green-800 text-white p-8 sm:p-12 lg:p-16 rounded-xl my-16 shadow-lg transform hover:shadow-2xl transition duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-white opacity-80 mb-2">SPEAKING EVENT INVITATIONS</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Invite My Green Lab to speak at your event
              </h2>
              <p className="text-lg opacity-90">
                Looking to invite My Green Lab to speak at an external event? We'd love to share our expertise on sustainable laboratory practices with your audience.
              </p>
            </div>
            <a href="#" className="mt-8 sm:mt-0 flex items-center justify-center bg-white text-green-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-200 group transform hover:scale-105">
              Contact Us
              <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Alternative contact methods</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Direct Email:</span> Contact us directly at 
              <a href="mailto:info@mygreenlab.org" className="text-green-600 font-medium hover:underline">info@mygreenlab.org</a> 
              for general inquiries and we'll get back to you soon.
            </p>
            <p>
              Prefer to engage on social platforms? <span className="font-semibold text-gray-800">"Follow Us"</span> for sustainability updates, lab certification news, webinar announcements, and community insights on green lab practices.
            </p>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Thank you for connecting with My Green Lab!</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            We appreciate you reaching out and your interest in sustainable laboratory practices. Our team is here to help and will respond to your inquiry with timely assistance.
          </p>
        </div>
        
        {/* Contact Form Section */}
        <div className="pt-12 pb-24 border-t border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Send us your message using form below</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl">
            Fill out form below with your question or comment. We're here to help and will get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-input-group">
                <input 
                  type="text" 
                  id="first-name" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150" 
                  placeholder="First Name" 
                  required 
                />
              </div>
              <div className="form-input-group">
                <input 
                  type="text" 
                  id="last-name" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150" 
                  placeholder="Last Name" 
                  required 
                />
              </div>
            </div>

            {/* Row 2: Email and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-input-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150" 
                  placeholder="Email" 
                  required 
                />
              </div>
              <div className="form-input-group flex space-x-2">
                {/* Country Code Select */}
                <select 
                  id="country-code" 
                  className="w-1/4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150 bg-white"
                >
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                </select>
                <input 
                  type="tel" 
                  id="phone-number" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="form-input w-3/4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150" 
                  placeholder="Phone Number" 
                />
              </div>
            </div>

            {/* Row 3: Organization and Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-input-group">
                <input 
                  type="text" 
                  id="organization" 
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150" 
                  placeholder="Organization" 
                  required 
                />
              </div>
              <div className="form-input-group">
                <input 
                  type="text" 
                  id="job-title" 
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150" 
                  placeholder="Job Title" 
                />
              </div>
            </div>

            {/* Row 4: Country and Message Textarea */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-input-group">
                <select 
                  id="country" 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150 bg-white" 
                  required
                >
                  <option value="" disabled selected>Select Country</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              {/* Empty div for alignment/spacing if no other field is present */}
              <div className="form-input-group">
                {/* This cell is empty in video layout for this row, but we can use it for a message subject/purpose if needed */}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="form-input-group md:col-span-2">
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition duration-150" 
                placeholder="Enter your message or question here..." 
                required
              />
            </div>

            {/* Agreement and reCAPTCHA Placeholder */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                To ensure we direct your inquiry to the appropriate team member, please tell us the reason for your contact.
              </p>
              
              <div className="flex items-center">
                <input type="checkbox" id="privacy-agreement" className="h-4 w-4 text-green-800 border-gray-300 rounded focus:ring-green-600" required />
                <label htmlFor="privacy-agreement" className="ml-2 block text-sm text-gray-900">
                  I have read and agree to <a href="#" className="text-green-600 font-medium hover:underline">Privacy Policy</a>*
                </label>
              </div>
              
              {/* reCAPTCHA Placeholder Block */}
              <div className="w-64 h-20 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-500 shadow-inner">
                <p>protected by reCAPTCHA</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Submit
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
              <a href="#" className="inline-block bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-200">
                SIGN UP
              </a>
              <div className="pt-4 space-y-2">
                <p className="font-semibold text-sm">FOLLOW US</p>
                {/* Simple social icons placeholder */}
                <div className="flex space-x-4 text-white">
                  <svg className="w-6 h-6 hover:text-green-400 transition duration-150" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm7 6h-2v-3c0-2.324-1.127-2.324-1.25-.921v3.921h-2v-6h2v.975c.346-.576 1.157-1.175 2.181-1.175 2.518 0 2.819 1.636 2.819 4.314v2.886z"/></svg>
                  <svg className="w-6 h-6 hover:text-green-400 transition duration-150" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c-.15 4.354-2.227 8.017-6.066 8.017-1.488 0-2.868-.458-4.043-1.233 1.544.172 3.097-.243 4.414-1.189-1.484-.047-2.828-.971-3.264-2.279.44.08.86.062 1.257-.043-1.503-.324-2.766-1.62-2.766-3.204 1-.502 2.7-.272 3.32.107-1.054-.919-2.073-2.613-2.073-4.103 0-1.08.312-2.184 1.139-3.098 1.545 1.7 3.627 2.844 5.92 2.943-.076-.231-.13-.473-.13-.722 0-1.742 1.411-3.153 3.153-3.153.916 0 1.748.384 2.336 1.004.72-.14 1.405-.426 2.016-.767-.233.729-.757 1.396-1.428 1.796 1.251-.157 2.031-.482 2.548-.684z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
