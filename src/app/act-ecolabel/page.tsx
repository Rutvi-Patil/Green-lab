'use client';

import { useEffect } from 'react';

export default function ActEcolabelPage() {
  useEffect(() => {
    // Initialize animations and interactions
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = parseInt(element.getAttribute('data-animation-delay') || '0');

          setTimeout(() => {
            element.classList.add('show-on-scroll');
          }, delay);
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Target all elements marked for animation
    document.querySelectorAll('.hidden-on-load').forEach(el => {
      animationObserver.observe(el);
    });

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  return (
    <>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              <p className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">Verified Lab Product Sustainability</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                The My Green Lab<sup className="text-green-500 font-normal text-2xl">®</sup> ACT<sup className="text-green-500 font-normal text-2xl">®</sup> Ecolabel
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                The ACT Ecolabel for lab equipment and supplies provides transparent, third-party verified sustainability data.
              </p>
              <a href="#" className="inline-block py-3 px-8 text-lg font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg transform hover:scale-[1.02]">
                Certify your products
              </a>
            </div>

            {/* Image Column */}
            <div className="flex justify-center items-center">
              <img 
                src="https://mygreenlab.org/wp-content/uploads/2025/07/ACT-Hero-Page-Image-Overlay-smaller-650x434.png" 
                alt="Male holding a handheld device with the digital ACT Ecolabel image" 
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Database Access CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Certified Products</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Access the ACT Ecolabel database
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Search thousands of certified lab products across 50+ manufacturers, and compare third-party verified sustainability scores at the product level.
                </p>
                <a 
                  href="https://actdatabase.mygreenlab.org/" 
                  target="_blank"
                  className="inline-block py-3 px-8 text-lg font-semibold rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
                >
                  View Products
                </a>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://placehold.co/400x300/D9D9D9/4CAF50?text=Database+Preview" 
                  alt="ACT Database Preview" 
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://player.vimeo.com/video/1082285577" 
              className="w-full h-full rounded-xl shadow-lg"
              frameBorder="0" 
              allow="autoplay; fullscreen" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* What's in ACT Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's in the ACT Ecolabel?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The ACT Ecolabel uses a science-based, 100-point weighted score, with details on product impacts such as energy use, materials, chemical hazards, and end-of-life options—plus an evaluation of the manufacturing facility and company commitments to reduce greenhouse gas emissions.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://mygreenlab.org/wp-content/uploads/2025/07/ACT-Ecolabel.png" 
              alt="ACT Ecolabel Generic Label showing various areas of environmental impact for each lab product, chemical, or equipment" 
              className="w-full max-w-5xl h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Auditing Partnership Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Auditing partnership for ACT Ecolabels
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                My Green Lab partners with Verico to independently validate sustainability claims – bringing trust and integrity to your sustainability journey.
              </p>
              <a 
                href="https://www.verico-audit.com/" 
                target="_blank"
                className="inline-block py-3 px-8 text-lg font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
              >
                Visit partners site
              </a>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://mygreenlab.org/wp-content/uploads/2025/08/Blog-Post-cropped-photos-21-710x473.png" 
                alt="Auditing Partnership" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <blockquote className="text-lg text-gray-600 italic mb-6">
                "The My Green Lab ACT Ecolabel 2.0 aligns with AstraZeneca's corporate sustainability goals, while providing a consistent benchmark to evaluate products for purchasing decision making. Participation from manufacturers will streamline their response to sustainability requests, and a consistent, third-party verified industry standard will spur innovation and drive supply chain impact reductions."
              </blockquote>
              <cite className="text-gray-900 font-semibold">
                Jennifer Valsler
                <span className="block text-gray-600 font-normal">Director, Sustainable Procurement, AstraZeneca</span>
              </cite>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src="https://mygreenlab.org/wp-content/uploads/2025/06/Jen-Valsler-FPO-image-.jpeg" 
                alt="Jennifer Valsler" 
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How 60+ Manufacturers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Stop losing sales to sustainability paperwork</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How 60+ manufacturers turned green claims into a competitive advantage
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Verified ecolabels are helping early adopters respond faster to RFPs and increase win rates. Discover how leading manufacturers turned sustainability requirements into a competitive advantage.
            </p>
            <a 
              href="https://mygreenlab.org/alp/act/stop-losing-sales/" 
              target="_blank"
              className="inline-block py-3 px-8 text-lg font-semibold rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
            >
              Download Guide
            </a>
          </div>
        </div>
      </section>

      {/* ACT Ecolabel for Science Worldwide */}
      <section className="py-16 bg-white" id="act-ecolabel-for-science">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The ACT Ecolabel for science worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              The ACT Ecolabel is the only ecolabel for lab products recommended by the U.S. EPA and aligned with the EU regulations, supporting sustainable procurement across global markets.
            </p>
            <a 
              href="#" 
              className="inline-block py-3 px-8 text-lg font-semibold rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
            >
              Label your products
            </a>
          </div>

          <div className="space-y-12">
            {/* For Scientists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">For Scientists</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <a href="https://actdatabase.mygreenlab.org/" target="_blank" className="hover:text-green-500 transition">
                    Adopt greener lab products
                  </a>
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Use reliable, third-party verified sustainability data when choosing equipment, consumables, and reagents for your research.
                </p>
                <a 
                  href="https://actdatabase.mygreenlab.org/" 
                  target="_blank"
                  className="inline-block py-2 px-6 text-base font-semibold rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
                >
                  Explore the database
                </a>
              </div>
            </div>

            {/* For Manufacturers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">For Manufacturers</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <a href="#" className="hover:text-green-500 transition">
                    Showcase sustainability accomplishment
                  </a>
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Use the ACT Ecolabel to demonstrate verified environmental performance, eliminate custom questionnaires, and align with customers' procurement expectations.
                </p>
                <a 
                  href="#" 
                  className="inline-block py-2 px-6 text-base font-semibold rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
                >
                  For Manufacturers
                </a>
              </div>
            </div>

            {/* For Procurement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">For Procurement</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <a href="#" className="hover:text-green-500 transition">
                    Simplify sustainable purchasing
                  </a>
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Simplify product and supplier comparisons with standardized sustainability scoring and product-level CO₂e data to support Scope 3 carbon reduction goals.
                </p>
                <a 
                  href="#" 
                  className="inline-block py-2 px-6 text-base font-semibold rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
                >
                  For Procurement
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How ACT Ecolabel certification works for manufacturers
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The certification process is designed to be efficient and scalable, requiring no onsite visit. It empowers manufacturers to communicate sustainability credibly while fostering a competitive advantage.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://mygreenlab.org/wp-content/uploads/2025/08/Certification-Paths_ACT-2-scaled.png" 
              alt="How the ACT Ecolabel program works" 
              className="w-full max-w-6xl h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* What Sets ACT 2.0 Apart */}
      <section className="py-16 bg-white" id="act-2-0-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What sets the ACT Ecolabel 2.0 apart
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Explore the core features that make ACT Ecolabel 2.0 a powerful tool for evaluating, comparing, and communicating lab product sustainability.
            </p>
            <a 
              href="#" 
              className="inline-block py-3 px-8 text-lg font-semibold rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
            >
              View ACT ecolabel scorecard
            </a>
          </div>

          <div className="space-y-8">
            {/* Impact-Focused Scoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Impact-Focused Scoring</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Weighted 100-point system</h3>
                <p className="text-lg text-gray-600">
                  The updated 100-point science-based scoring system ensures that categories with the most impact on the environment receive appropriate focus and relevance to procurement decision makers.
                </p>
              </div>
            </div>

            {/* Carbon Reporting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Carbon Reporting</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product carbon footprint</h3>
                <p className="text-lg text-gray-600">
                  ACT 2.0 includes available company and product-level CO₂e data to support Scope 3 emissions tracking and sustainable procurement policies.
                </p>
              </div>
            </div>

            {/* Visual Clarity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Visual Clarity</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improved communication</h3>
                <p className="text-lg text-gray-600">
                  ACT now directly and clearly communicates sustainability attributes with clear scoring, color-coded accomplishments, and better visual organization, making sustainability data easy to assess.
                </p>
              </div>
            </div>

            {/* Global Recognition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Global Recognition</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">One global ecolabel</h3>
                <p className="text-lg text-gray-600">
                  ACT 2.0 is the global standard, providing a single label valid in all markets worldwide to support international sales strategies and procurement alignment.
                </p>
              </div>
            </div>

            {/* Scalable Certification Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Scalable Certification Pricing</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Built to address large portfolios</h3>
                <p className="text-lg text-gray-600">
                  A streamlined certification process that ties into existing data systems and scaled pricing supports certification across product portfolios and companies.
                </p>
              </div>
            </div>

            {/* Global Regulatory Alignment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold text-green-600 mb-2">Global Regulatory Alignment</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reduce risk and communicate with integrity</h3>
                <p className="text-lg text-gray-600">
                  The ACT Ecolabel is approved by the U.S. EPA and aligned with EU and other global regulations on environmental claims, ensuring clear communication and reducing regulatory risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* Final CTA Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Manufacturers Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Manufacturers</h3>
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">Build marketing trust with the ACT Ecolabel</p>
                <p className="text-gray-600">
                  Join 50+ manufacturers using the ACT Ecolabel to win RFQs, eliminate custom questionnaires, and demonstrate environmental leadership.
                </p>
              </div>
              <a 
                href="#" 
                className="inline-block py-2 px-6 text-base font-semibold rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Get certified now
              </a>
            </div>

            {/* For Procurement Teams Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Procurement Teams</h3>
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">Simplify Sustainable Lab Purchasing</p>
                <p className="text-gray-600">
                  Use the ACT Ecolabel to compare thousands of certified products with standardized, third-party verified data that supports ESG goals and Scope 3 reporting.
                </p>
              </div>
              <a 
                href="https://actdatabase.mygreenlab.org/" 
                target="_blank"
                className="inline-block py-2 px-6 text-base font-semibold rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Explore the ACT database
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Sponsor Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Program Sponsor
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img 
                src="https://mygreenlab.org/wp-content/uploads/2025/07/rainin-530x353.png" 
                alt="Rainin ACT Ecolabel Program Sponsor" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-widest uppercase font-semibold text-green-100 mb-2">Ready to Join the Movement?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get your product ACT Ecolabel certified
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-3xl mx-auto">
            Join leading manufacturers using the ACT Ecolabel to win RFQs, rise above greenwashing, and demonstrate credible environmental leadership.
          </p>
          <a 
            href="#" 
            className="inline-block py-3 px-8 text-lg font-semibold rounded-full bg-white text-green-600 hover:bg-gray-100 transition duration-300"
          >
            Start your certification
          </a>
        </div>
      </section>

    </>
  );
}
