'use client';

import { useState } from 'react';

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const handleToggle = (category: keyof typeof preferences) => {
    if (category === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSavePreferences = () => {
    // Save preferences to localStorage or send to backend
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Your cookie preferences have been saved!');
  };

  const handleAcceptAll = () => {
    const allEnabled = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allEnabled);
    localStorage.setItem('cookiePreferences', JSON.stringify(allEnabled));
    alert('All cookies have been accepted!');
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    alert('Only necessary cookies have been accepted!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Cookie Preferences
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Manage your cookie preferences and learn how My Green Lab uses cookies to enhance your website experience.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
            <p className="text-gray-600">
              At My Green Lab, we use different types of cookies to enhance your experience, analyze website traffic, and personalize content. You can choose which types of cookies you're comfortable with.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Categories</h2>
            
            {/* Necessary Cookies */}
            <div className="border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Necessary Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies are essential for the website to function properly. They enable basic features like page navigation, access to secure areas, and authentication.
                  </p>
                </div>
                <div className="ml-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"></div>
                    <div className="absolute left-[2px] top-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition peer-disabled:opacity-50"></div>
                  </label>
                  <span className="ml-2 text-sm text-gray-500">Always Active</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <strong>Examples:</strong> Authentication cookies, security tokens, session management
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies enable enhanced functionality and personalization, such as videos and live chats. They may be set by us or by third-party providers.
                  </p>
                </div>
                <div className="ml-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => handleToggle('functional')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <strong>Examples:</strong> Language preferences, region settings, custom themes
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div className="ml-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handleToggle('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <strong>Examples:</strong> Google Analytics, heat mapping, user behavior tracking
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies are used to track visitors across websites to display relevant advertisements and marketing campaigns.
                  </p>
                </div>
                <div className="ml-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handleToggle('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <strong>Examples:</strong> Social media sharing, retargeting ads, affiliate tracking
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Accept All Cookies
            </button>
            <button
              onClick={handleRejectAll}
              className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Reject All (Except Necessary)
            </button>
            <button
              onClick={handleSavePreferences}
              className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Save My Preferences
            </button>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How We Use Cookies</h4>
              <p className="text-gray-600 mb-3">
                My Green Lab uses cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Remember your login information and preferences</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Personalize content and advertisements</li>
                <li>Provide social media features</li>
                <li>Improve website performance and user experience</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Managing Your Preferences</h4>
              <p className="text-gray-600 mb-3">
                You can change your cookie preferences at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Visiting this Cookie Preferences page</li>
                <li>Using the cookie settings banner on our website</li>
                <li>Adjusting your browser settings to block or delete cookies</li>
                <li>Using browser extensions that manage cookie preferences</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Cookies</h4>
              <p className="text-gray-600">
                Some cookies on our website are placed by third-party service providers. These include analytics providers, social media platforms, and advertising networks. Each third-party provider has their own privacy policy and cookie practices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h4>
              <p className="text-gray-600 mb-4">
                If you have questions about our use of cookies or this Cookie Preferences page, please contact us:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@mygreenlab.org</p>
                <p className="text-gray-600"><strong>Website:</strong> www.mygreenlab.org</p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-gray-200 mt-12">
            <p className="text-sm text-gray-500">
              Last updated: December 17, 2025
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
