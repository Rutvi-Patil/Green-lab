'use client';

import DonationForm from '@/components/DonationForm';
import { Heart, Target, Users, Globe } from 'lucide-react';

export default function GivePage() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mgl-lime to-mgl-lime/80 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-10 h-10 text-mgl-lime" />
            </div>
            <h1 className="mgl-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Support Sustainable Science
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your donation accelerates the global shift toward environmentally responsible scientific research. 
              Together, we can create a sustainable future for science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                <p className="text-sm font-medium">Tax Deductible</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                <p className="text-sm font-medium">501(c)(3) Nonprofit</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                <p className="text-sm font-medium">Global Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 lg:py-20 bg-mgl-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mgl-dark mb-4">
              Your Impact in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every dollar you donate helps scientists worldwide reduce their environmental footprint 
              and advance sustainable research practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mgl-dark mb-2">4,500+ Labs</h3>
              <p className="text-gray-600">Certified through our programs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mgl-dark mb-2">50,000+ Scientists</h3>
              <p className="text-gray-600">Using our free tools and resources</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mgl-dark mb-2">50+ Countries</h3>
              <p className="text-gray-600">With active green lab programs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mgl-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-mgl-dark mb-2">Millions Saved</h3>
              <p className="text-gray-600">In energy and waste reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mgl-dark mb-4">
              Make Your Gift Today
            </h2>
            <p className="text-lg text-gray-600">
              The clock is ticking on climate change. Your gift to My Green Lab empowers scientists 
              to create measurable sustainability in laboratories worldwide. Donate now - our planet can't wait.
            </p>
          </div>

          <DonationForm />
        </div>
      </section>

      {/* Why Support Us */}
      <section className="py-16 lg:py-20 bg-mgl-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mgl-dark mb-4">
              Why Support My Green Lab?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're leading the global movement toward sustainable science with proven results 
              and measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <div className="w-12 h-12 bg-mgl-lime rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-mgl-dark mb-3">Proven Impact</h3>
              <p className="text-gray-600">
                Our certification programs have helped thousands of labs reduce their environmental 
                footprint by an average of 30% in the first year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <div className="w-12 h-12 bg-mgl-lime rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-mgl-dark mb-3">Global Leadership</h3>
              <p className="text-gray-600">
                We set the international standard for lab sustainability, working with leading 
                institutions, governments, and corporations worldwide.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <div className="w-12 h-12 bg-mgl-lime rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-mgl-dark mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Our programs are developed by scientists, for scientists, ensuring practical 
                solutions that work in real laboratory environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mgl-dark mb-4">
              Other Ways to Give
            </h2>
            <p className="text-lg text-gray-600">
              Explore additional ways to support our mission of sustainable science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <h3 className="text-xl font-semibold text-mgl-dark mb-3">Corporate Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to advance sustainability in the scientific industry.
              </p>
              <a href="/contact" className="text-mgl-lime font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <h3 className="text-xl font-semibold text-mgl-dark mb-3">Planned Giving</h3>
              <p className="text-gray-600 mb-4">
                Include My Green Lab in your estate planning for lasting impact.
              </p>
              <a href="/contact" className="text-mgl-lime font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <h3 className="text-xl font-semibold text-mgl-dark mb-3">Foundation Grants</h3>
              <p className="text-gray-600 mb-4">
                Foundation partners help us scale our impact globally.
              </p>
              <a href="/contact" className="text-mgl-lime font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-mgl-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mgl-dark mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <h3 className="text-lg font-semibold text-mgl-dark mb-3">
                Is my donation tax-deductible?
              </h3>
              <p className="text-gray-600">
                Yes! My Green Lab is a registered 501(c)(3) nonprofit organization. 
                All donations are tax-deductible to the extent allowed by law. You will receive 
                a tax receipt via email for your records.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <h3 className="text-lg font-semibold text-mgl-dark mb-3">
                How is my donation used?
              </h3>
              <p className="text-gray-600">
                Your donation supports our core programs including free resources for scientists, 
                certification programs, educational initiatives, and global community building. 
                Over 85% of funds go directly to program services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <h3 className="text-lg font-semibold text-mgl-dark mb-3">
                Can I designate my gift for a specific program?
              </h3>
              <p className="text-gray-600">
                Yes! You can specify if you'd like your donation to support a particular program 
                or initiative. Simply include this information in the notes section of your donation 
                or contact us directly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
              <h3 className="text-lg font-semibold text-mgl-dark mb-3">
                Do you accept donations from outside the United States?
              </h3>
              <p className="text-gray-600">
                Absolutely! We accept donations from around the world through various payment methods 
                including credit card, PayPal, and bank transfers. Contact us for international 
                donation options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
