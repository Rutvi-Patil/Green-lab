'use client';

import { useState } from 'react';

export default function ContactPageForm() {
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

  const [privacyAgreed, setPrivacyAgreed] = useState(false);

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
  );
}
