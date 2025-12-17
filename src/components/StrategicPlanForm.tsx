'use client';

import { useState } from 'react';

export default function StrategicPlanForm() {
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
  );
}
