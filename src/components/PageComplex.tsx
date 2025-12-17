'use client';

import { useEffect, useRef } from 'react';

export default function PageComplex() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const iconOpenRef = useRef<SVGSVGElement>(null);
  const iconCloseRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const mobileMenuButton = mobileMenuButtonRef.current;
    const mobileMenu = mobileMenuRef.current;
    const iconOpen = iconOpenRef.current;
    const iconClose = iconCloseRef.current;

    if (mobileMenuButton && mobileMenu && iconOpen && iconClose) {
      const handleMobileMenuClick = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          requestAnimationFrame(() => mobileMenu.classList.add('open'));
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        } else {
          mobileMenu.classList.remove('open');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
          document.body.style.overflow = '';
          setTimeout(() => mobileMenu.classList.add('hidden'), 250);
        }
      };

      mobileMenuButton.addEventListener('click', handleMobileMenuClick);

      // Handle mobile nav links
      const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
          document.body.style.overflow = '';
          setTimeout(() => mobileMenu.classList.add('hidden'), 250);
        });
      });

      return () => {
        mobileMenuButton.removeEventListener('click', handleMobileMenuClick);
      };
    }

    // Intersection observer for reveals + hero AOS clones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-up, .reveal-fade, .aos-fade').forEach(el => observer.observe(el));

    // Program scroll functionality
    const programScroll = document.querySelector('.programs-scroll');
    const prevBtn = document.getElementById('programs-prev');
    const nextBtn = document.getElementById('programs-next');
    if (programScroll && prevBtn && nextBtn) {
      const cardWidth = 320;
      prevBtn.addEventListener('click', () => {
        programScroll.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        programScroll.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
    }

    // Handle placeholder links
    const buttons = document.querySelectorAll('a[href="#"], button[data-demo]');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        if ((button as HTMLElement).innerText !== 'Close') {
          alert("This link/button is functional but leads to a placeholder URL.");
        }
      });
    });
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-mgl-lime flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold logo-text">my green lab.</span>
          </div>

          <div className="hidden lg:flex space-x-6 text-sm font-semibold text-gray-700">
            <a href="#green-lab" className="hover:text-mgl-lime transition">How to Green Your Lab</a>
            <a href="#programs" className="hover:text-mgl-lime transition">Programs</a>
            <a href="#resources" className="hover:text-mgl-lime transition">Resources</a>
            <a href="#blog" className="hover:text-mgl-lime transition">The Beaker Blog</a>
            <a href="#about" className="hover:text-mgl-lime transition">About Us</a>
            <a href="#get-involved" className="hover:text-mgl-lime transition">Get Involved</a>
          </div>

          <a href="#" className="hidden sm:inline-flex items-center text-xs sm:text-sm font-bold text-mgl-lime hover:opacity-80 transition cta-bounce">
            GIVE NOW
          </a>

          <button ref={mobileMenuButtonRef} className="lg:hidden p-2 text-mgl-dark rounded-md focus:outline-none focus:ring-2 focus:ring-mgl-lime">
            <svg ref={iconOpenRef} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg ref={iconCloseRef} className="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="hidden lg:hidden fixed inset-0 top-[56px] bg-white z-40 p-4 transition-all duration-300 ease-out overflow-y-auto">
        <div className="space-y-4 pt-4">
          <a href="#green-lab" className="mobile-nav-link block text-xl font-semibold text-mgl-dark hover:text-mgl-lime border-b border-gray-100 pb-2">How to Green Your Lab</a>
          <a href="#programs" className="mobile-nav-link block text-xl font-semibold text-mgl-dark hover:text-mgl-lime border-b border-gray-100 pb-2">Programs</a>
          <a href="#resources" className="mobile-nav-link block text-xl font-semibold text-mgl-dark hover:text-mgl-lime border-b border-gray-100 pb-2">Resources</a>
          <a href="#blog" className="mobile-nav-link block text-xl font-semibold text-mgl-dark hover:text-mgl-lime border-b border-gray-100 pb-2">The Beaker Blog</a>
          <a href="#about" className="mobile-nav-link block text-xl font-semibold text-mgl-dark hover:text-mgl-lime border-b border-gray-100 pb-2">About Us</a>
          <a href="#get-involved" className="mobile-nav-link block text-xl font-semibold text-mgl-dark hover:text-mgl-lime border-b border-gray-100 pb-2">Get Involved</a>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200">
          <a href="#" className="mobile-nav-link block px-4 py-3 text-center bg-mgl-lime text-white font-bold rounded-lg hover:bg-opacity-90 transition cta-bounce">GIVE NOW</a>
        </div>
      </div>

      <main>
        {/* HERO Section */}
        <section id="green-lab" className="relative overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 min-h-[90vh]">
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20 gap-6 order-2 lg:order-1 aos-fade aos-fade--left">
              <h1 className="mgl-serif text-[2.4rem] sm:text-[2.9rem] lg:text-[3.3rem] leading-tight font-semibold text-mgl-dark">
                Accelerating a global culture of sustainability in scientific research
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-lg">
                At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research
                by helping labs to reduce their environmental impact.
              </p>
              <a href="#"
                 className="inline-flex items-center px-8 py-3 sm:py-3.5 bg-mgl-lime text-white text-xs sm:text-sm font-bold rounded-full shadow-lg hover:bg-opacity-90 transition cta-bounce w-fit">
                GREEN YOUR LAB
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* RIGHT — FULL BLEED HERO IMAGE */}
            <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-[90vh] aos-fade aos-fade--right">
              <img
                src="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_scientist-view-microscope-scaled.jpeg"
                alt="scientist using microscope in lab"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width="2560" height="1707"
                decoding="async" fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* Make sustainability global standard */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl reveal-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-mgl-lime mb-2">SUSTAINABLE SCIENCE NOW</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-4">
              Make sustainability global standard
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6 reveal-up">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-3">
                  A global movement
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl">
                  Our certifications set global benchmark — guiding labs in over 50 countries to reduce waste,
                  conserve energy, and cut carbon emissions.
                </p>
              </div>
              <a href="#" className="mt-2 lg:mt-0 text-mgl-dark font-bold flex items-center space-x-2 hover:text-mgl-lime transition group cta-bounce">
                <span>Request a free lab assessment</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-up">
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg card-elevated">
                <p className="text-4xl font-extrabold mb-2">4,500+ Labs</p>
                <p className="text-sm opacity-90">using My Green Lab® Certifications worldwide.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg card-elevated">
                <p className="text-4xl font-extrabold mb-2">50,000+ Scientists</p>
                <p className="text-sm opacity-90">in our community using our free tools and resources.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg card-elevated">
                <p className="text-4xl font-extrabold mb-2">50+ Countries</p>
                <p className="text-sm opacity-90">with a global community of advocates and partners.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg card-elevated">
                <p className="text-4xl font-extrabold mb-2">2,000+ ACT® Products</p>
                <p className="text-sm opacity-90">helping labs make responsible purchasing decisions.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg card-elevated">
                <p className="text-4xl font-extrabold mb-2">8,500+ Ambassadors</p>
                <p className="text-sm opacity-90">implementing green lab practices within their organizations and research communities.</p>
              </div>
              <div className="p-8 rounded-xl bg-mgl-stats-green text-white shadow-lg card-elevated">
                <p className="text-4xl font-extrabold mb-2">3,700+ Participants</p>
                <p className="text-sm opacity-90">in our Freezer Challenge to optimize cold storage management to reduce energy consumption.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6 reveal-up">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-4">
                Our approach
              </h2>
              <p className="text-lg text-gray-700">
                At My Green Lab, we believe that sustainability in science thrives through shared vision, trusted tools,
                and collective action. Our work is rooted in three core principles:
              </p>
            </div>
            <a href="#" className="hidden lg:inline-flex text-mgl-dark font-bold items-center space-x-2 hover:text-mgl-lime transition group cta-bounce">
              <span>Read more about us</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-up">
            <div className="group card-elevated bg-white rounded-2xl p-4 pb-6">
              <img src="https://plus.unsplash.com/premium_photo-1663011406193-a7e54f0285b31?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                   alt="Lab workers looking at equipment"
                   className="w-full h-48 object-cover rounded-xl mb-4 transform transition duration-500 group-hover:scale-[1.02] shadow-md" />
              <h3 className="text-xl font-bold text-mgl-dark mb-2">Set global standard</h3>
              <p className="text-gray-700 text-sm">Grounded in rigorous science and trusted data to drive measurable change across research practices worldwide.</p>
            </div>
            <div className="group card-elevated bg-white rounded-2xl p-4 pb-6">
              <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                   alt="Abstract photo of water"
                   className="w-full h-48 object-cover rounded-xl mb-4 transform transition duration-500 group-hover:scale-[1.02] shadow-md" />
              <h3 className="text-xl font-bold text-mgl-dark mb-2">Drive systematic change</h3>
              <p className="text-gray-700 text-sm">Work across sectors — shaping policies, influencing funders, and shifting culture — to ensure that environmental responsibility becomes central to scientific progress.</p>
            </div>
            <div className="group card-elevated bg-white rounded-2xl p-4 pb-6">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                   alt="People collaborating outside"
                   className="w-full h-48 object-cover rounded-xl mb-4 transform transition duration-500 group-hover:scale-[1.02] shadow-md" />
              <h3 className="text-xl font-bold text-mgl-dark mb-2">Build a global community</h3>
              <p className="text-gray-700 text-sm">From students to scientists to industry leaders, we're uniting a movement of changemakers.</p>
            </div>
          </div>
        </section>

        {/* Programs section */}
        <section id="programs" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 gap-4 reveal-up">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-mgl-dark mb-3">
                  Programs that drive real impact
                </h2>
                <p className="text-lg text-gray-700">
                  My Green Lab® Certification and tools set global benchmark, driving measurable ROI.
                </p>
              </div>
              <div className="hidden sm:flex space-x-4 text-mgl-dark">
                <button id="programs-prev"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-mgl-dark/30 hover:bg-gray-50 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button id="programs-next"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-mgl-dark/30 hover:bg-gray-50 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="programs-scroll flex overflow-x-auto space-x-6 pb-4 reveal-fade">
              <a href="#" className="program-card bg-mgl-program-purple text-white group">
                <div className="program-text-container">
                  <h3 className="mgl-serif text-[1.75rem] leading-snug font-semibold">
                    Explore My Green Lab Certification
                  </h3>
                </div>
                <div className="program-image-cutout">
                  <img src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800"
                       alt="Lab workers with tablet"
                       className="w-full h-full object-cover object-bottom transition duration-500 group-hover:scale-[1.05]" />
                </div>
                <div className="program-arrow-button">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="#" className="program-card bg-mgl-program-magenta text-white group">
                <div className="program-text-container">
                  <h3 className="mgl-serif text-[1.75rem] leading-snug font-semibold">
                    Learn more about ACT Ecolabel products
                  </h3>
                </div>
                <div className="program-image-cutout">
                  <img src="https://images.pexels.com/photos/6991229/pexels-photo-6991229.jpeg?auto=compress&cs=tinysrgb&w=800"
                       alt="Scientist with plate"
                       className="w-full h-full object-cover object-bottom transition duration-500 group-hover:scale-[1.05]" />
                </div>
                <div className="program-arrow-button">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="#" className="program-card bg-mgl-program-blue text-mgl-dark group">
                <div className="program-text-container text-mgl-dark">
                  <h3 className="mgl-serif text-[1.75rem] leading-snug font-semibold">
                    Become an Accredited Professional
                  </h3>
                </div>
                <div className="program-image-cutout">
                  <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                       alt="Person working on laptop"
                       className="w-full h-full object-cover object-bottom transition duration-500 group-hover:scale-[1.05]" />
                </div>
                <div className="program-arrow-button">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="#" className="program-card bg-mgl-program-light-green text-mgl-dark group">
                <div className="program-text-container text-mgl-dark">
                  <h3 className="mgl-serif text-[1.75rem] leading-snug font-semibold">
                    Explore our Ambassador Program
                  </h3>
                </div>
                <div className="program-image-cutout">
                  <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                       alt="Smiling lab workers"
                       className="w-full h-full object-cover object-bottom transition duration-500 group-hover:scale-[1.05]" />
                </div>
                <div className="program-arrow-button">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Join movement */}
        <section className="bg-mgl-join py-20 lg:py-24 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 items-center">
              <div className="max-w-xl reveal-up">
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
                <button className="inline-flex items-center rounded-full border border-mgl-dark/40 bg-white/90 px-7 py-3 text-sm font-semibold tracking-wide text-mgl-dark hover:bg-white transition cta-bounce">
                  START CERTIFICATION
                </button>
              </div>

              <div className="relative mt-10 lg:mt-0 flex justify-center reveal-fade">
                <div className="absolute -right-10 top-4 w-44 h-44 rounded-full bg-mgl-dark join-circle-lg"></div>
                <div className="absolute -bottom-16 left-10 w-80 h-80 rounded-[999px] bg-mgl-dark/90 translate-y-1/2 join-circle-sm"></div>

                <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl join-main-img">
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4 reveal-up">
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

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,0.9fr)] gap-8 lg:gap-10 reveal-up">
              <article className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=compress&cs=tinysrgb&w=1200"
                     alt="Lab vials"
                     className="w-full h-auto object-cover" />
                <div className="px-6 py-5 space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">
                    Announcements
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-mgl-dark">
                    Introducing ACT Ecolabel 2.0. Setting the global standard for sustainable laboratory products
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
                    8 Ways to Save Energy in the Lab
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4 reveal-up">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal-up">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-white gap-6 reveal-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center md:text-left">
              Have questions? Get in touch with our team!
            </h2>
            <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-mgl-lime font-bold rounded-lg hover:bg-gray-100 transition cta-bounce shadow-lg">
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="resources" className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 rounded-full bg-mgl-lime flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold logo-text">my green lab.</span>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-mgl-dark mb-4">KEY PROGRAMS</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><a href="/certification" className="hover:text-mgl-lime transition">My Green Lab® Certification</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">ACT® Ecolabel</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Accredited Professionals</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Resources</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-mgl-dark mb-4">ABOUT US</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><a href="/contact" className="hover:text-mgl-lime transition">Contact Us</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Follow Us</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Newsletter</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Data Privacy</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Terms and Conditions</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Cookie Preferences</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-mgl-dark mb-4">LEARN MORE</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><a href="#" className="hover:text-mgl-lime transition">Events</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Careers</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Our Strategic Plan</a></li>
                  <li><a href="#" className="hover:text-mgl-lime transition">Sitemap</a></li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-2 mt-8 md:mt-0">
              <h4 className="text-sm font-bold uppercase tracking-wider text-mgl-dark mb-4">Join our mailing list</h4>
              <p className="text-sm text-gray-700 mb-6 max-w-sm">
                Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories,
                certification tips, and more!
              </p>
              <button className="px-6 py-3 bg-mgl-lime text-white font-bold text-sm rounded-lg hover:bg-opacity-90 transition cta-bounce">
                SIGN UP
              </button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>&copy; 2025 My Green Lab. All Rights Reserved.</p>
            <div className="flex space-x-4 items-center">
              <p className="text-sm font-bold uppercase tracking-wider text-mgl-dark">FOLLOW US</p>
              <a href="#" className="text-mgl-dark hover:text-mgl-lime transition transform hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4.01c-.72.32-1.5.54-2.32.64.83-.5 1.47-1.3 1.77-2.26-.78.47-1.64.81-2.55.99-.73-.78-1.78-1.27-2.95-1.27-2.22 0-4.02 1.8-4.02 4.02 0 .31.03.61.1.9C7.1 8.79 4.17 7.15 2.2 4.67c-.32.54-.5 1.17-.5 1.84 0 1.4.7 2.63 1.76 3.35-.65 0-1.26-.2-1.8-.5v.05c0 1.95 1.39 3.58 3.24 3.96-.34.1-.7.16-1.07.16-.26 0-.52-.03-.77-.08.51 1.6 2 2.77 3.77 2.81-1.38 1.08-3.13 1.72-5.02 1.72-.32 0-.64-.02-.95-.06 1.8 1.15 3.94 1.82 6.22 1.82 7.46 0 11.53-6.17 11.53-11.52 0-.17-.0-.34-.01-.51.79-.57 1.47-1.28 2.01-2.09z"/>
                </svg>
              </a>
              <a href="#" className="text-mgl-dark hover:text-mgl-lime transition transform hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.779-1.695-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.013-3.583.07-4.848.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.528-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.947.2 4.358 2.528 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.947-.072 4.354-.2 6.78-2.528 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.528-6.78-6.979-6.979-1.28-.059-1.689-.073-4.948-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/><circle cx="18.5" cy="5.5" r="1.5"/>
                </svg>
              </a>
              <a href="#" className="text-mgl-dark hover:text-mgl-lime transition transform hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12c-.93 0-1.7-.77-1.7-1.7 0-.93.77-1.7 1.7-1.7.93 0 1.7.77 1.7 1.7 0 .93-.77 1.7-1.7 1.7zm13.5 12h-3v-5.64c0-3.15-4 2.91-4-1.36 0-1.69 1.19-2.75 2.54-2.75 1.25 0 1.77.78 1.77 1.95v7.8zm-5-11h-3v1h3v-1z"/>
                </svg>
              </a>
              <a href="#" className="text-mgl-dark hover:text-mgl-lime transition transform hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.779-1.695-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.013-3.583.07-4.848.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm-4.32 1.637l-4.15 4.15v6.526l4.15 4.15h6.526l4.15-4.15v-6.526l-4.15-4.15h-6.526z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
