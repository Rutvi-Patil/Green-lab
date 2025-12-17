"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { createPageMetadata, createBreadcrumbSchema } from '@/utils/metadata';

// Page-specific metadata
const pageMetadata = createPageMetadata({
  title: 'Contact My Green Lab - Get in Touch with Our Team',
  description: 'Contact My Green Lab for questions about laboratory sustainability, certification programs, ACT Ecolabel, or partnership opportunities. Our team is here to help.',
  keywords: 'contact My Green Lab, laboratory sustainability contact, green lab support, certification inquiry, ACT ecolabel contact',
  canonical: 'https://mygreenlab.org/contact',
  openGraph: {
    type: 'website',
    url: 'https://mygreenlab.org/contact',
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  twitter: {
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  jsonLd: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://mygreenlab.org/' },
      { name: 'Contact', url: 'https://mygreenlab.org/contact' }
    ])
  ]
});

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    organization: '',
    jobTitle: '',
    country: '',
    message: ''
  });

  const [privacyAgreed, setPrivacyAgreed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      organization: '',
      jobTitle: '',
      country: '',
      message: ''
    });
    setPrivacyAgreed(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHead metadata={pageMetadata} />
      <div className="min-h-screen font-sans text-gray-900 bg-white">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-mgl-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get in Touch with My Green Lab
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about laboratory sustainability, certification programs, or partnership opportunities? 
                Our team is here to help you accelerate your sustainability journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="text-center p-6 sm:p-8 bg-mgl-light-bg rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Send us a message and we'll respond within 24-48 hours.
                </p>
                <a href="mailto:info@mygreenlab.org" className="text-mgl-lime font-semibold hover:underline">
                  info@mygreenlab.org
                </a>
              </div>

              <div className="text-center p-6 sm:p-8 bg-mgl-light-bg rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Monday - Friday, 9:00 AM - 5:00 PM PST
                </p>
                <a href="tel:+1-858-215-3456" className="text-mgl-lime font-semibold hover:underline">
                  +1 (858) 215-3456
                </a>
              </div>

              <div className="text-center p-6 sm:p-8 bg-mgl-light-bg rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Our main office is located in San Diego, California.
                </p>
                <address className="text-mgl-lime font-semibold not-italic">
                  San Diego, CA 92121
                </address>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
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
                      <option value="" disabled>Select Country</option>
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
                    <input 
                      type="checkbox" 
                      id="privacy-agreement" 
                      className="h-4 w-4 text-green-800 border-gray-300 rounded focus:ring-green-600" 
                      required
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    />
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
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Global Presence
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                My Green Lab serves a global community of sustainability advocates with team members and partners worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">North America</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Our headquarters and main operations center serving the United States, Canada, and Mexico.
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  San Diego, California • Boston, Massachusetts • Toronto, Ontario
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Europe</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Supporting our growing European community of certified laboratories and partners.
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  London, UK • Berlin, Germany • Amsterdam, Netherlands
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Asia Pacific</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Expanding our reach across Asia with regional support and partnerships.
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Singapore • Tokyo, Japan • Sydney, Australia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Quick answers to common questions about My Green Lab programs and services.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  How long does the certification process take?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  The certification process typically takes 3-6 months, depending on your starting point and the level of certification you're pursuing. 
                  Our team provides guidance throughout the entire process to ensure success.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  What support do you provide during certification?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We provide comprehensive support including assessment tools, implementation guidance, documentation templates, 
                  and direct access to our sustainability experts. You'll also join a community of certified laboratories.
                </p>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  How can my company partner with My Green Lab?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We offer various partnership opportunities including corporate sponsorship, ACT Ecolabel certification for products, 
                  research collaborations, and program development partnerships. Contact us to discuss how we can work together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-mgl-lime">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Sustainability Journey?
            </h2>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-2xl mx-auto mb-8 sm:mb-10">
              Join thousands of laboratories worldwide in creating a more sustainable future for scientific research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-mgl-lime font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                Get Certified
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-mgl-lime transition-colors duration-300 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
