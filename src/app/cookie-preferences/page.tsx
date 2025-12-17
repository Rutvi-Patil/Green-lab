'use client';

import React from 'react';
import CookiePreferencesManager from '@/components/CookiePreferencesManager';
import SEOHead from '@/components/SEOHead';
import { createPageMetadata, createBreadcrumbSchema, createFAQSchema } from '@/utils/metadata';

// Page-specific metadata
const pageMetadata = createPageMetadata({
  title: 'Cookie Preferences | My Green Lab - Manage Cookie Settings',
  description: 'Manage your cookie preferences and learn how My Green Lab uses cookies to enhance your website experience. Control essential, analytics, and marketing cookies.',
  keywords: 'My Green Lab cookie preferences, cookie settings, manage cookies, privacy settings, website cookies, GDPR compliance, cookie consent, data privacy',
  canonical: 'https://mygreenlab.org/cookie-preferences',
  openGraph: {
    type: 'website',
    url: 'https://mygreenlab.org/cookie-preferences',
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  twitter: {
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  jsonLd: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://mygreenlab.org/' },
      { name: 'Cookie Preferences', url: 'https://mygreenlab.org/cookie-preferences' }
    ]),
    createFAQSchema([
      {
        question: 'What types of cookies does My Green Lab use?',
        answer: 'We use essential cookies for website functionality, analytics cookies to understand user behavior, and marketing cookies for personalized content and advertisements.'
      },
      {
        question: 'Can I disable cookies on My Green Lab website?',
        answer: 'Yes, you can manage your cookie preferences through this page, the cookie settings banner, or your browser settings. However, disabling essential cookies may affect website functionality.'
      },
      {
        question: 'How long do cookies stay on my device?',
        answer: 'Cookie durations vary: session cookies expire when you close your browser, persistent cookies have set expiration dates, and you can manually delete cookies anytime through browser settings.'
      },
      {
        question: 'Does My Green Lab use third-party cookies?',
        answer: 'Yes, we use third-party cookies from analytics providers, social media platforms, and advertising networks. Each has their own privacy policy and cookie practices.'
      }
    ])
  ]
});

export default function CookiePreferencesPage() {
  return (
    <>
      <SEOHead metadata={pageMetadata} />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
            <p className="text-gray-600">
              At My Green Lab, we use different types of cookies to enhance your experience, analyze website traffic, and personalize content. You can choose which types of cookies you're comfortable with.
            </p>
          </div>

          <CookiePreferencesManager />

          {/* Additional Information */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
            
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
    </>
  );
}
