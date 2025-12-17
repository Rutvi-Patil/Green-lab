'use client';

import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';
import SEOHead from '@/components/SEOHead';
import { createPageMetadata, createBreadcrumbSchema, createFAQSchema } from '@/utils/metadata';

// Page-specific metadata
const pageMetadata = createPageMetadata({
  title: 'My Green Lab Newsletter - Laboratory Sustainability Updates | Subscribe',
  description: 'Subscribe to My Green Lab newsletter for latest laboratory sustainability updates, green lab certification news, expert insights, and exclusive content for sustainable science professionals.',
  keywords: 'My Green Lab newsletter, laboratory sustainability newsletter, green lab updates, sustainable science news, lab certification updates, environmental research newsletter',
  canonical: 'https://mygreenlab.org/newsletter',
  openGraph: {
    type: 'website',
    url: 'https://mygreenlab.org/newsletter',
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  twitter: {
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  jsonLd: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://mygreenlab.org/' },
      { name: 'Newsletter', url: 'https://mygreenlab.org/newsletter' }
    ]),
    createFAQSchema([
      {
        question: 'How often will I receive the newsletter?',
        answer: 'We send our newsletter monthly, with occasional special announcements for important updates, events, or time-sensitive sustainability news.'
      },
      {
        question: 'Can I unsubscribe at any time?',
        answer: 'Yes! Every newsletter includes an easy unsubscribe link. You can also manage your subscription preferences or update your email address at any time.'
      },
      {
        question: 'What type of content is included in the newsletter?',
        answer: 'Our newsletter includes program updates, certification news, expert sustainability tips, success stories from labs worldwide, upcoming events, and exclusive resources for laboratory professionals.'
      },
      {
        question: 'Is my email address shared with third parties?',
        answer: 'Never! We respect your privacy and never share or sell your email address to third parties. Your information is used solely for My Green Lab communications.'
      }
    ])
  ]
});

export default function NewsletterPage() {
  return (
    <>
      <SEOHead metadata={pageMetadata} />
      <div className="bg-white">

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
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
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
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
      </div>
    </>
  );
}
