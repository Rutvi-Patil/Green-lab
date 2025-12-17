'use client';

import React from 'react';
import StrategicPlanForm from '@/components/StrategicPlanForm';
import SEOHead from '@/components/SEOHead';
import { createPageMetadata, createBreadcrumbSchema, createFAQSchema } from '@/utils/metadata';

// Page-specific metadata
const pageMetadata = createPageMetadata({
  title: 'Strategic Plan 2025-2027 | My Green Lab - Sustainable Science Roadmap',
  description: 'Download My Green Lab Strategic Plan 2025-2027. Discover our roadmap for advancing green labs globally through innovative programs, research, and sustainable laboratory practices.',
  keywords: 'My Green Lab strategic plan, sustainable science roadmap, green lab strategy 2025-2027, laboratory sustainability future, environmental impact plan, science leadership strategy',
  canonical: 'https://mygreenlab.org/strategic-plan',
  openGraph: {
    type: 'website',
    url: 'https://mygreenlab.org/strategic-plan',
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  twitter: {
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  jsonLd: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://mygreenlab.org/' },
      { name: 'Strategic Plan', url: 'https://mygreenlab.org/strategic-plan' }
    ]),
    createFAQSchema([
      {
        question: 'What is covered in the My Green Lab Strategic Plan 2025-2027?',
        answer: 'Our strategic plan covers scaling strategies, certification excellence, crossing the chasm to mainstream adoption, and delivering verifiable financial and environmental benefits for laboratories worldwide.'
      },
      {
        question: 'Who should read this strategic plan?',
        answer: 'This plan is essential reading for science leaders, sustainability professionals, funders, potential partners, lab managers, and policy makers interested in transforming scientific research sustainably.'
      },
      {
        question: 'How can I access the complete strategic plan?',
        answer: 'You can download the complete strategic plan for free by filling out the form on this page. You\'ll receive instant access to our comprehensive roadmap for advancing green labs globally.'
      },
      {
        question: 'What are the key priorities in the 2025-2027 strategic plan?',
        answer: 'Key priorities include scaling proven methodologies, enhancing certification quality and usability, achieving mainstream market adoption, and delivering measurable environmental and financial impact.'
      }
    ])
  ]
});

export default function StrategicPlanPage() {
  return (
    <>
      <SEOHead metadata={pageMetadata} />
      <div className="bg-white">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="py-12 md:py-24">
          <a href="/contact" className="text-sm font-medium text-gray-500 hover:text-green-800 transition duration-150 mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            CONTACT US
          </a>
          
          <p className="text-sm font-semibold tracking-widest uppercase text-green-600 mb-3">STRATEGIC PLAN 2025-2027</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6 max-w-4xl">
            Driving measurable change in partnership with scientific community
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Discover how we're advancing green labs globally and creating lasting environmental impact through innovative programs, research, and tools.
          </p>
        </div>
        
        {/* Why This Plan Matters Section */}
        <div className="py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-green-600 mb-2">WHY THIS PLAN MATTERS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Essential reading for science leaders and sustainability professionals.
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're a funder, potential partner, lab manager, or policy maker, this plan reveals our roadmap for transforming scientific research sustainably.
            </p>
          </div>
        </div>

        {/* Plan Highlights Section */}
        <div className="py-12 md:py-16 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">Plan Highlights</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
            Dive into our strategic priorities and discover how My Green Lab® and our certification partner, Impact Laboratories, will achieve operational excellence while driving global adoption.
          </p>

          <div className="space-y-12">
            
            {/* 1. Scaling Strategies */}
            <div className="md:grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">SCALING STRATEGIES</span>
                Adopting proven startup and technology methodologies
              </h3>
              <p className="text-lg text-gray-700">
                Learn how we're implementing scaling strategies from world's most successful startups and high-impact non-profits to accelerate sustainable lab adoption globally.
              </p>
            </div>

            {/* 2. Certification Excellence */}
            <div className="md:grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">CERTIFICATION EXCELLENCE</span>
                Enhancing quality, usability, and standard integrity
              </h3>
              <p className="text-lg text-gray-700">
                Discover our commitment to improving user interface, software platforms, and certification credibility while streamlining user experience.
              </p>
            </div>
            
            {/* 3. Crossing Chasm */}
            <div className="md:grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">CROSSING THE CHASM</span>
                Moving from early adopters to early majority
              </h3>
              <p className="text-lg text-gray-700">
                Explore our strategic roadmap to achieve significant market adoption and establish sustainable lab practices as industry norm.
              </p>
            </div>
            
            {/* 4. Financial & Environmental Benefits */}
            <div className="md:grid md:grid-cols-2 gap-8">
              <h3 className="text-3xl text-gray-900 md:pr-8 mb-4 md:mb-0">
                <span className="text-green-600 text-sm font-semibold block mb-1">FINANCIAL & ENVIRONMENTAL BENEFITS</span>
                Delivering verifiable financial and environmental impact
              </h3>
              <p className="text-lg text-gray-700">
                See how we plan to ensure measurable and highly credible financial and environmental impact reductions for customers while fulfilling our long-term mission.
              </p>
            </div>
          </div>
        </div>
        
        {/* Download Form Section */}
        <div className="py-12 md:py-24 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Download your free copy</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl">
            Get instant access to our complete strategic plan. Join thousands of science leaders who are a part of green lab movement.
          </p>

          <StrategicPlanForm />
        </div>

      </main>
      </div>
    </>
  );
}
