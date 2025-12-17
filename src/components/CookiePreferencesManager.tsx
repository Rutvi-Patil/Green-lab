'use client';

import { useState } from 'react';

export default function CookiePreferencesManager() {
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
    <>
      {/* Cookie Categories */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Cookie Categories</h2>
        
        {/* Necessary Cookies */}
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Necessary Cookies</h3>
              <p className="text-gray-600 text-sm">
                These cookies are essential for website to function properly. They enable basic features like page navigation, access to secure areas, and authentication.
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
    </>
  );
}
