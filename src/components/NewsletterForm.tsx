'use client';

import { useState } from 'react';

export default function NewsletterForm() {
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
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Subscribe Now</h3>
      
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
  );
}
