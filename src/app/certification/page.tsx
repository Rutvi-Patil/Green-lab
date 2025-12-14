'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CertificationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [animatedRings, setAnimatedRings] = useState(false);
  const [animatedTimeline, setAnimatedTimeline] = useState(false);
  const [expandedSteps, setExpandedSteps] = useState<{ [key: number]: boolean }>({});

  const resultsRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<SVGSVGElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === resultsRef.current) {
            setAnimatedStats(true);
          }
          if (entry.target === ringsRef.current) {
            setAnimatedRings(true);
          }
          if (entry.target === timelineRef.current) {
            setAnimatedTimeline(true);
          }
        }
      });
    }, observerOptions);

    if (resultsRef.current) observer.observe(resultsRef.current);
    if (ringsRef.current) observer.observe(ringsRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  // Animated number counter
  const AnimatedNumber = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!animatedStats) return;
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [animatedStats, end, duration]);

    return <>{count.toLocaleString()}{suffix}</>;
  };

  // Progress Ring Component
  const ProgressRing = ({ percentage, color, delay = 0 }: { percentage: number; color: string; delay?: number }) => {
    const [offset, setOffset] = useState(289);
    const radius = 46;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
      if (!animatedRings) return;
      
      setTimeout(() => {
        const targetOffset = circumference - (percentage / 100) * circumference;
        setOffset(targetOffset);
      }, delay);
    }, [animatedRings, percentage, delay, circumference]);

    return (
      <div className="relative w-full aspect-square mb-4">
        <svg className="progress-ring w-full h-full" viewBox="0 0 100 100">
          <circle
            stroke="#E0E0E0"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          <circle
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transition: 'stroke-dashoffset 1s ease-out',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%'
            }}
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-3xl font-extrabold text-gray-900"
            fill={color}
          >
            {animatedRings ? `${percentage}%` : '0%'}
          </text>
        </svg>
      </div>
    );
  };

  const toggleStep = (step: number) => {
    setExpandedSteps(prev => ({ ...prev, [step]: !prev[step] }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <span>my green lab.</span>
              </a>
            </div>
            {/* Desktop Links */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors relative group">
                How to Green Your Lab
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-green-500 font-semibold relative group">
                Programs
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors relative group">
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors relative group">
                The Beaker Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors relative group">
                Get Involved
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
            </nav>
            {/* CTA */}
            <div className="hidden md:block">
              <button className="flex items-center text-gray-700 text-sm font-medium hover:text-green-500 transition duration-300">
                Give Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-green-500 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 py-4`}>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">How to Green Your Lab</a>
          <a href="#" className="block px-4 py-2 text-sm text-green-500 bg-gray-50">Programs</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Resources</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">The Beaker Blog</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">About Us</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Get Involved</a>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
            Give Now
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Abstract Circles Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 rounded-full bg-cyan-200 opacity-50 -top-32 -left-32 md:w-[600px] md:h-[600px] md:top-[-100px] md:left-[-200px] transition-transform duration-1000 ease-out"></div>
          <div className="absolute w-72 h-72 rounded-full bg-green-300 opacity-80 top-40 -left-16 md:w-[450px] md:h-[450px] md:top-20 md:left-10 transition-transform duration-1000 ease-out delay-100"></div>
          <div className="absolute w-[800px] h-[400px] rounded-t-full bg-green-500 opacity-80 -bottom-[200px] left-1/2 -translate-x-1/2 md:w-[1200px] md:h-[600px] md:-bottom-[300px] transition-transform duration-1000 ease-out delay-200"></div>
          <div className="absolute w-60 h-60 rounded-full bg-cyan-200 opacity-50 top-0 right-[-50px] md:w-[350px] md:h-[350px] md:top-[-100px] md:right-10 transition-transform duration-1000 ease-out delay-300"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="hidden md:block">
              <img 
                src="https://placehold.co/600x400/eeeeee/333333?text=Scientist+in+Lab" 
                alt="Scientist looking into a microscope" 
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
              />
            </div>

            {/* Content Column */}
            <div className="md:text-left text-center md:pt-16">
              <p className="text-sm tracking-widest uppercase font-semibold text-green-500 mb-3">Certification Program</p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                My Green Lab<sup className="text-green-500 font-normal text-2xl pr-1">®</sup> Certification
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl md:mx-0 mx-auto">
                Join 4,000+ certified labs committed to sustainable science. Cut costs, improve efficiency, and embed green practices with the globally recognized lab certification.
              </p>
              <a 
                href="#start" 
                className="inline-block py-3 px-8 text-lg font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg transform hover:scale-[1.02]"
              >
                START CERTIFICATION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Results Section */}
      <section ref={resultsRef} className="py-20 bg-white" id="results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Measurable results: over 5x ROI
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Labs certified through My Green Lab® report measurable cost savings through strategic sustainability improvements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 bg-green-300 rounded-2xl shadow-xl text-gray-800 transition-all duration-500 ${animatedStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-6xl font-extrabold mb-4 text-green-600">
                <AnimatedNumber end={35} suffix="%" />
              </p>
              <p className="text-lg font-semibold mb-2">35% reduction in energy consumption</p>
              <p className="text-sm">reduction in energy consumption through lab efficiency upgrades and behavior changes in lab operations.</p>
            </div>

            <div className={`p-6 bg-green-300 rounded-2xl shadow-xl text-gray-800 transition-all duration-500 delay-200 ${animatedStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-6xl font-extrabold mb-4 text-green-600">
                <AnimatedNumber end={75} suffix="%" />
              </p>
              <p className="text-lg font-semibold mb-2">75% reduction in waste</p>
              <p className="text-sm">reduction in waste by narrowing chromatography tubing to reduce material use and waste.</p>
            </div>

            <div className={`p-6 bg-green-300 rounded-2xl shadow-xl text-gray-800 transition-all duration-500 delay-400 ${animatedStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-6xl font-extrabold mb-4 text-green-600">
                <AnimatedNumber end={460000} />
              </p>
              <p className="text-lg font-semibold mb-2">460,000 gallons water saved annually</p>
              <p className="text-sm">gallons water saved annually from improved fume hood and autoclave practices across three labs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Path to Certification Banner */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <p className="text-sm tracking-widest uppercase font-semibold opacity-80 mb-2">Get Started</p>
              <h3 className="text-3xl font-bold mb-4 md:mb-0">A clear path to certification</h3>
              <p className="text-lg opacity-90 max-w-2xl">Take action with our step-by-step process. Measure progress and demonstrate sustainability success across your organization.</p>
            </div>
            <a href="#path" className="mt-6 md:mt-0 flex items-center text-lg font-semibold px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-teal-600 transition duration-300 group">
              Start your journey
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Setting the Standard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-500 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500">Video Placeholder: Setting the standard</p>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Setting the standard</h3>
              <p className="text-gray-600 mb-4">
                My Green Lab Certification is the industry's most widely recognized lab sustainability program—endorsed by UN-backed Race to Zero and recommended by the U.S. EPA. It offers a science-based approach with clear assessment tools, verified reporting, and practical guidance to help laboratories of all kinds embed sustainability into everyday practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Certification Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-gray-900 max-w-2xl">
              What makes My Green Lab Certification unique?
            </h2>
            <a href="#start" className="hidden sm:flex items-center text-lg font-semibold text-green-500 group">
              Get Certified
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            Turn your sustainability goals into action with a proven framework that brings structure, credibility, and momentum to every lab environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-green-300 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-extrabold text-green-600 mb-3">Trusted</h4>
              <p className="text-gray-800">by over 4,000 certified labs and 50,000 scientists across 50+ countries.</p>
            </div>
            <div className="p-8 bg-green-300 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-extrabold text-green-600 mb-3">Endorsed</h4>
              <p className="text-gray-800">by UN-backed Race to Zero and the U.S. EPA for its rigorous, science-driven approach.</p>
            </div>
            <div className="p-8 bg-green-300 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-extrabold text-green-600 mb-3">Verified</h4>
              <p className="text-gray-800">by independent third-party verification by Impact Laboratories to ensure integrity and accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Supports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            What My Green Lab Certification supports
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
            My Green Lab Certification turns ambitious sustainability goals into daily lab actions—guiding progress across 14 core categories from energy to engagement.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-6">
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Sustainability Culture</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Infrastructure Energy</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Plug Load Energy</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">IT & Computing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Organizational Strategy</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Water</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Chemicals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Synthetic Chemistry</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Purchasing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Resource Management</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Waste</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Field Work</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 mb-3 rounded-full border-2 border-green-500 text-green-500 transition-all duration-300 hover:scale-110 hover:shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Animal Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Verification Section */}
      <section className="relative pt-20 pb-28 bg-cyan-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-green-500 opacity-50 top-[-100px] left-1/4"></div>
          <div className="absolute w-[800px] h-[400px] rounded-t-full bg-teal-600 opacity-80 -bottom-[150px] right-[-300px] md:w-[1000px] md:h-[500px] md:-bottom-[250px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                A certified partnership for third-party verification
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-xl md:mx-0 mx-auto">
                My Green Lab partners with Impact Laboratories to independently verify certification results—bringing trust and integrity to your sustainability journey.
              </p>
              <a href="#details" className="inline-block py-3 px-8 text-lg font-semibold rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 shadow-lg transform hover:scale-[1.02]">
                VERIFICATION DETAILS
              </a>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400/99D98C/333333?text=Lab+Manager+Verifying" 
                alt="Lab Manager reviewing data" 
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Path Timeline */}
      <section className="py-20 bg-white" id="path">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your path to certification
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Our structured program is built around four key stages. Recertification occurs 2 years after certification date. Baseline step isn't required for recertification.
          </p>

          <div className="relative w-full overflow-x-auto pb-12">
            <div className="flex justify-between w-[900px] md:w-full mx-auto">
              <svg 
                ref={timelineRef}
                className="absolute top-0 left-0 w-full h-full hidden md:block" 
                viewBox="0 0 900 150" 
                preserveAspectRatio="xMidYMid meet"
              >
                <path 
                  d="M100 50 C250 150, 450 0, 700 50" 
                  fill="none" 
                  stroke="#4CAF50" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: animatedTimeline ? '1000' : '1000',
                    strokeDashoffset: animatedTimeline ? '0' : '1000',
                    transition: 'stroke-dashoffset 2s ease-in-out'
                  }}
                />
              </svg>
              
              <div className="flex justify-between w-full relative z-10">
                {/* Step 1 */}
                <div className="w-1/4 px-4 text-center cursor-pointer" onClick={() => toggleStep(1)}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white text-xl font-bold mx-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg">1</div>
                  <div className="mt-8 text-left">
                    <p className="text-sm font-semibold text-gray-500">3-4 WEEKS</p>
                    <p className="text-lg font-bold text-gray-800 mt-1">Baseline Assessment</p>
                    <div className={`step-details mt-4 text-sm text-gray-600 ${expandedSteps[1] ? 'block' : 'hidden'}`}>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Baseline Engagement Survey (50% Participation Required)</li>
                        <li>Assessment Tool</li>
                        <li>Review Impact Estimator</li>
                        <li>Submit for Baseline Review</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="w-1/4 px-4 text-center cursor-pointer" onClick={() => toggleStep(2)}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white text-xl font-bold mx-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg">2</div>
                  <div className="mt-8 text-left">
                    <p className="text-sm font-semibold text-gray-500">3-6 MONTHS</p>
                    <p className="text-lg font-bold text-gray-800 mt-1">Implementation</p>
                    <div className={`step-details mt-4 text-sm text-gray-600 ${expandedSteps[2] ? 'block' : 'hidden'}`}>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Lab Personnel work together to implement changes</li>
                        <li>Continue Assessment Tool</li>
                        <li>Continue Impact Estimator</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="w-1/4 px-4 text-center cursor-pointer" onClick={() => toggleStep(3)}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white text-xl font-bold mx-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg">3</div>
                  <div className="mt-8 text-left">
                    <p className="text-sm font-semibold text-gray-500">3-4 WEEKS</p>
                    <p className="text-lg font-bold text-gray-800 mt-1">Submit Certification</p>
                    <div className={`step-details mt-4 text-sm text-gray-600 ${expandedSteps[3] ? 'block' : 'hidden'}`}>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Retake Engagement Survey (50% Participation Required)</li>
                        <li>Submit completed Assessment Tool</li>
                        <li>Submit Impact Estimator</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="w-1/4 px-4 text-center cursor-pointer" onClick={() => toggleStep(4)}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white text-xl font-bold mx-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg">4</div>
                  <div className="mt-8 text-left">
                    <p className="text-sm font-semibold text-gray-500">CELEBRATE!</p>
                    <p className="text-lg font-bold text-gray-800 mt-1">Certification Review</p>
                    <div className={`step-details mt-4 text-sm text-gray-600 ${expandedSteps[4] ? 'block' : 'hidden'}`}>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Verification of selected documentation determined through a risk-based assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels to Recognize Progress */}
      <section ref={ringsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Five levels to recognize your progress
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
            Labs receive a certification level—Bronze, Silver, Gold, Platinum, or Green—based on the depth and breadth of sustainable practices adopted.
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            <div className={`flex flex-col items-center w-36 transition-all duration-500 ${animatedRings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <ProgressRing percentage={40} color="#B87333" delay={0} />
              <p className="text-xl font-bold text-gray-900">Bronze</p>
              <p className="text-xs text-gray-500 text-center mt-1">40% score on Certification Assessment</p>
            </div>

            <div className={`flex flex-col items-center w-36 transition-all duration-500 delay-200 ${animatedRings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <ProgressRing percentage={50} color="#C0C0C0" delay={200} />
              <p className="text-xl font-bold text-gray-900">Silver</p>
              <p className="text-xs text-gray-500 text-center mt-1">50% score on Certification Assessment</p>
            </div>

            <div className={`flex flex-col items-center w-36 transition-all duration-500 delay-400 ${animatedRings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <ProgressRing percentage={60} color="#FFD700" delay={400} />
              <p className="text-xl font-bold text-gray-900">Gold</p>
              <p className="text-xs text-gray-500 text-center mt-1">60% score on Certification Assessment</p>
            </div>

            <div className={`flex flex-col items-center w-36 transition-all duration-500 delay-600 ${animatedRings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <ProgressRing percentage={70} color="#40E0D0" delay={600} />
              <p className="text-xl font-bold text-gray-900">Platinum</p>
              <p className="text-xs text-gray-500 text-center mt-1">70% score on Certification Assessment</p>
            </div>

            <div className={`flex flex-col items-center w-36 transition-all duration-500 delay-800 ${animatedRings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <ProgressRing percentage={80} color="#4CAF50" delay={800} />
              <p className="text-xl font-bold text-gray-900">Green</p>
              <p className="text-xs text-gray-500 text-center mt-1">80% score on Certification Assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-[800px] h-[800px] rounded-full bg-purple-900 opacity-10 -top-[300px] -left-[300px]"></div>
          <div className="absolute w-40 h-40 rounded-full bg-green-500 opacity-30 bottom-10 right-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <img 
                src="https://placehold.co/200x200/4A148C/ffffff?text=Dean+McLean" 
                alt="Dean McLean profile" 
                className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <blockquote className="text-2xl italic text-gray-800 mb-6">
                "We proudly operate 17 labs globally, all of which have achieved My Green Lab Certification. The My Green Lab program has been instrumental in fostering a culture of sustainability and engaging employees at all sites. It helps support our mission to accelerate innovation for a healthier world and features prominently in our annual sustainability report."
              </blockquote>
              <p className="text-lg font-semibold text-gray-900">Dean McLean</p>
              <p className="text-sm text-gray-600">Director, Environmental Health and Safety, IQVIA Laboratories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Diagnostic Labs Banner */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-blue-200 shadow-xl flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-xs tracking-widest uppercase font-semibold text-blue-800 mb-2">CLINICAL DIAGNOSTIC LABS</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-2">
                Certification built for patient-focused lab environments
              </h3>
              <p className="text-base text-gray-700 max-w-3xl">
                Tailored for labs handling patient samples, clinical trials, and diagnostic workflows. Addresses automated systems and regulatory requirements while delivering measurable ROI.
              </p>
            </div>
            <a href="#start" className="mt-6 md:mt-0 flex items-center text-lg font-semibold px-6 py-3 rounded-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 transition duration-300 group shadow-md">
              Achieve Certification
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tools that power your certification journey
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
            Built-in tools make it easy to engage teams, track progress, and measure sustainability impact effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img 
                src="https://placehold.co/400x250/F0F0F0/333333?text=Engagement+Survey" 
                alt="Engagement Survey on phone" 
                className="w-full h-auto rounded-xl object-cover mb-4 shadow-lg"
              />
              <p className="text-xs tracking-widest uppercase font-semibold text-green-500 mb-1">Engagement Survey Buy-In From Day One</p>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Launch your sustainability journey with a quick, lab-wide survey designed to raise awareness and encourage participation in sustainability efforts.</h4>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://placehold.co/400x250/F0F0F0/333333?text=Assessment+Tool" 
                alt="Person writing on post-it notes" 
                className="w-full h-auto rounded-xl object-cover mb-4 shadow-lg"
              />
              <p className="text-xs tracking-widest uppercase font-semibold text-green-500 mb-1">Set Goals and Stay on Track</p>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Structured with a certified framework that guides labs through certification with confidence and supports goal-setting at every level.</h4>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://placehold.co/400x250/F0F0F0/333333?text=Impact+Estimator" 
                alt="Person working on a laptop" 
                className="w-full h-auto rounded-xl object-cover mb-4 shadow-lg"
              />
              <p className="text-xs tracking-widest uppercase font-semibold text-green-500 mb-1">Quantify and Communicate Impact</p>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Translate your efforts into data. Measure savings in energy, water, waste, and more to support reporting and demonstrate ROI.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Program Sponsors */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">Program sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-70">
            <p className="text-3xl font-serif font-bold text-gray-600">Agilent</p>
            <p className="text-3xl font-serif font-bold text-gray-600">envetec</p>
            <p className="text-3xl font-serif font-bold text-gray-600">Millipore <span className="text-green-500">Sigma</span></p>
            <p className="text-3xl font-serif font-bold text-gray-600">TRIUMVIRATE</p>
          </div>
        </div>
      </section>

      {/* Start Your Journey Banner */}
      <section className="py-16 bg-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <p className="text-sm tracking-widest uppercase font-semibold opacity-80 mb-2">Get Involved</p>
              <h3 className="text-3xl font-bold mb-4 md:mb-0">Start your lab sustainability journey</h3>
              <p className="text-lg opacity-90 max-w-2xl">Join the global movement of labs advancing science responsibly. Get support, tools, and recognition for your sustainability progress.</p>
            </div>
            <a href="#start" className="mt-6 md:mt-0 flex items-center text-lg font-semibold px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-purple-900 transition duration-300 group">
              Get Certified
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
