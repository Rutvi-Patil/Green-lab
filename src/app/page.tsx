'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLElement).getAttribute('href')!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <main>
        {/* HERO Section */}
        <section id="green-lab" className="relative overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 min-h-[90vh]">
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20 gap-6 order-2 lg:order-1">
              <h1 className="mgl-serif text-[2.4rem] sm:text-[2.9rem] lg:text-[3.3rem] leading-tight font-semibold text-mgl-dark">
                Accelerating a global culture of sustainability in scientific research
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-lg">
                At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research
                by helping labs to reduce their environmental impact.
              </p>
              <Link href="/certification"
                 className="inline-flex items-center px-8 py-3 sm:py-3.5 bg-mgl-lime text-white text-xs sm:text-sm font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-colors duration-300 w-fit cta-bounce">
                GREEN YOUR LAB
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* RIGHT — FULL BLEED HERO IMAGE */}
            <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-[90vh]">
              <img
                src="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_scientist-view-microscope-scaled.jpeg"
                alt="scientist using microscope in lab"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width="2560" height="1707"
              />
            </div>
          </div>
        </section>

        {/* Make sustainability the global standard */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-mgl-lime mb-2">SUSTAINABLE SCIENCE NOW</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-4">
              Make sustainability the global standard
            </h2>
            <p className="text-lg text-gray-700">
              Through education, community engagement, and market leading certification programs, we're building a global
              culture of sustainability in science and setting the benchmark for lab sustainability.
            </p>
          </div>
        </section>

        {/* Global movement */}
        <section className="bg-mgl-light-bg py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-3">
                  A global movement
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl">
                  Our certifications set the global benchmark — guiding labs in over 50 countries to reduce waste,
                  conserve energy, and cut carbon emissions.
                </p>
              </div>
              <a href="#" className="mt-2 lg:mt-0 text-mgl-dark font-bold flex items-center space-x-2 hover:text-mgl-lime transition-colors duration-150">
                <span>Request a free lab assessment</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg">
                <p className="text-4xl font-extrabold mb-2">4,500+ Labs</p>
                <p className="text-sm opacity-90">using My Green Lab® Certifications worldwide.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg">
                <p className="text-4xl font-extrabold mb-2">50,000+ Scientists</p>
                <p className="text-sm opacity-90">in our community using our free tools and resources.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg">
                <p className="text-4xl font-extrabold mb-2">50+ Countries</p>
                <p className="text-sm opacity-90">with a global community of advocates and partners.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg">
                <p className="text-4xl font-extrabold mb-2">2,000+ ACT® Products</p>
                <p className="text-sm opacity-90">helping labs make responsible purchasing decisions.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg">
                <p className="text-4xl font-extrabold mb-2">8,500+ Ambassadors</p>
                <p className="text-sm opacity-90">implementing green lab practices within their organizations and research communities.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg">
                <p className="text-4xl font-extrabold mb-2">3,700+ Participants</p>
                <p className="text-sm opacity-90">in our Freezer Challenge to optimize cold storage management to reduce energy consumption.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-4">
                Our approach
              </h2>
              <p className="text-lg text-gray-700">
                At My Green Lab, we believe that sustainability in science thrives through shared vision, trusted tools,
                and collective action. Our work is rooted in three core principles:
              </p>
            </div>
            <a href="#" className="hidden lg:inline-flex text-mgl-dark font-bold items-center space-x-2 hover:text-mgl-lime transition-colors duration-150">
              <span>Read more about us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-4 pb-6 shadow-sm border border-gray-200/60">
              <img src="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_Scientists-w-lab-coats-scaled-1290x860.jpeg"
                   alt="Lab workers looking at equipment"
                   className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-mgl-dark mb-2">Set the global standard</h3>
              <p className="text-gray-700 text-sm">Grounded in rigorous science and trusted data to drive measurable change across research practices worldwide.</p>
            </div>
            <div className="group bg-white rounded-2xl p-4 pb-6 shadow-sm border border-gray-200/60">
              <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                   alt="Abstract photo of water"
                   className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-mgl-dark mb-2">Drive systematic change</h3>
              <p className="text-gray-700 text-sm">Work across sectors — shaping policies, influencing funders, and shifting culture — to ensure that environmental responsibility becomes central to scientific progress.</p>
            </div>
            <div className="group bg-white rounded-2xl p-4 pb-6 shadow-sm border border-gray-200/60">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                   alt="People collaborating outside"
                   className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-mgl-dark mb-2">Build a global community</h3>
              <p className="text-gray-700 text-sm">From students to scientists to industry leaders, we're uniting a movement of changemakers.</p>
            </div>
          </div>
        </section>

        {/* Programs section */}
        <section id="programs" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 gap-4">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-3">
                  Programs that drive real impact
                </h2>
                <p className="text-lg text-gray-700">
                  My Green Lab® Certification and tools set the global benchmark, driving measurable ROI.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="#" className="bg-mgl-program-purple text-white rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="mgl-serif text-xl font-semibold mb-4">
                  My Green Lab Certification
                </h3>
                <p className="text-sm opacity-90">The world's most trusted green lab certification program</p>
              </a>

              <a href="#" className="bg-mgl-program-magenta text-white rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="mgl-serif text-xl font-semibold mb-4">
                  ACT Ecolabel
                </h3>
                <p className="text-sm opacity-90">Environmental impact factor for laboratory products</p>
              </a>

              <a href="#" className="bg-mgl-program-blue text-mgl-dark rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="mgl-serif text-xl font-semibold mb-4">
                  Accredited Professionals
                </h3>
                <p className="text-sm opacity-90">Professional certification for green lab expertise</p>
              </a>

              <a href="#" className="bg-mgl-program-light-green text-mgl-dark rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="mgl-serif text-xl font-semibold mb-4">
                  Ambassador Program
                </h3>
                <p className="text-sm opacity-90">Join our global community of sustainability advocates</p>
              </a>
            </div>
          </div>
        </section>

        {/* Join the movement */}
        <section id="get-involved" className="bg-mgl-join-teal py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 items-center">
              <div className="max-w-xl">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-mgl-dark mb-3">
                  Lead the way
                </p>
                <h2 className="mgl-serif text-4xl sm:text-5xl font-semibold text-mgl-dark mb-6">
                  Join the movement
                </h2>
                <p className="text-lg text-mgl-dark/80 mb-8">
                  Join thousands of labs worldwide reducing energy, water, and waste through My Green Lab Certification —
                  the world's most trusted green lab certification.
                </p>
                <button className="inline-flex items-center rounded-full border border-mgl-dark/40 bg-white/90 px-7 py-3 text-sm font-semibold tracking-wide text-mgl-dark hover:bg-white transition">
                  START CERTIFICATION
                </button>
              </div>

              <div className="relative mt-10 lg:mt-0 flex justify-center">
                <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl">
                  <img src="https://plus.unsplash.com/premium_photo-1681505581227-a7e54f0285b1?auto=compress&cs=tinysrgb&w=900"
                       alt="Scientist looking through microscope"
                       className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest from My Green Lab */}
        <section id="blog" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-2">
                  The latest from My Green Lab
                </h2>
                <p className="text-sm sm:text-base text-gray-700">
                  Keep up with insights, program updates, event announcements, and news from the global sustainable
                  science movement.
                </p>
              </div>
              <button className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-mgl-dark hover:text-mgl-lime transition">
                <span>View more articles</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-mgl-dark/40 text-[18px] leading-none">
                  +
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,0.9fr)] gap-8 lg:gap-10">
              <article className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=compress&cs=tinysrgb&w=1200"
                     alt="Lab vials"
                     className="w-full h-auto object-cover" />
                <div className="px-6 py-5 space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">
                    Announcements
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-mgl-dark">
                    Introducing ACT Ecolabel 2.0. Setting global standard for sustainable laboratory products
                  </h3>
                  <button className="mt-4 inline-flex items-center rounded-full bg-mgl-lime text-white text-xs font-semibold px-5 py-2 hover:bg-mgl-lime/90 transition">
                    READ THE ARTICLE
                  </button>
                </div>
              </article>

              <aside className="bg-mgl-cream rounded-2xl px-6 py-6 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-600 mb-1">
                    Tips
                  </p>
                  <h4 className="text-sm sm:text-base font-semibold text-mgl-dark mb-2">
                    8 Ways to Save Energy in Lab
                  </h4>
                  <button className="text-xs font-semibold text-mgl-dark underline-offset-2 hover:underline">
                    Read article
                  </button>
                </div>
                <div className="border-t border-white/70 pt-4">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-600 mb-1">
                    Announcements
                  </p>
                  <h4 className="text-sm sm:text-base font-semibold text-mgl-dark mb-2">
                    Impact Laboratories Secures $4.95M to Accelerate Sustainable Science Innovation
                  </h4>
                  <button className="text-xs font-semibold text-mgl-dark underline-offset-2 hover:underline">
                    Read article
                  </button>
                </div>
                <div className="border-t border-white/70 pt-4">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-600 mb-1">
                    Tips
                  </p>
                  <h4 className="text-sm sm:text-base font-semibold text-mgl-dark mb-2">
                    The Power of Lab Leads in Advancing Sustainable Science
                  </h4>
                  <button className="text-xs font-semibold text-mgl-dark underline-offset-2 hover:underline">
                    Read article
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-mgl-dark mb-2">
                  Case Studies
                </h2>
                <p className="text-sm sm:text-base text-gray-700 max-w-2xl">
                  Discover how labs and manufacturers worldwide achieve measurable impact reductions, improved operational
                  efficiency and cost savings through sustainability.
                </p>
              </div>
              <button className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-mgl-dark hover:text-mgl-lime transition">
                <span>View all case studies</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-mgl-dark/40">
                  →
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <article className="bg-white rounded-2xl shadow-sm border border-gray-200/70 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1694230155228-cdde50083573?auto=compress&cs=tinysrgb&w=800"
                     alt="Lab equipment in use"
                     className="w-full h-44 object-cover" />
                <div className="px-5 py-4 space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">
                    Record breaking
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-mgl-dark">
                    Lab equipment manufacturer
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Discover how KNAUER's HPLC systems earned the lowest Environmental Impact Factor score in the
                    entire ACT Ecolabel database through innovative sustainable design.
                  </p>
                  <button className="mt-1 text-xs font-semibold text-mgl-dark underline-offset-2 hover:underline">
                    Read case study
                  </button>
                </div>
              </article>

              <article className="bg-white rounded-2xl shadow-sm border border-gray-200/70 overflow-hidden">
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                     alt="Woman holding a green lab certificate"
                     className="w-full h-44 object-cover" />
                <div className="px-5 py-4 space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">
                    Industry first
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-mgl-dark">
                    Biotech innovation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Learn how Biogen became the first large biotech company to achieve 100% My Green Lab Certification
                    across all laboratories, setting new industry standards for sustainable operations.
                  </p>
                  <button className="mt-1 text-xs font-semibold text-mgl-dark underline-offset-2 hover:underline">
                    Read case study
                  </button>
                </div>
              </article>

              <article className="bg-white rounded-2xl shadow-sm border border-gray-200/70 overflow-hidden">
                <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                     alt="Group of people on a university campus"
                     className="w-full h-44 object-cover" />
                <div className="px-5 py-4 space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">
                    Academic excellence
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-mgl-dark">
                    University lab cluster
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    See how 40+ researchers at University of Limerick transformed daily lab operations to earn the
                    highest Green Lab Certification level through innovative protocols.
                  </p>
                  <button className="mt-1 text-xs font-semibold text-mgl-dark underline-offset-2 hover:underline">
                    Read case study
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="get-involved" className="bg-mgl-lime py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-white gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center md:text-left">
              Have questions? Get in touch with our team!
            </h2>
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-mgl-lime font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
