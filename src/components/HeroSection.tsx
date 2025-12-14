'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage?: string;
  showStats?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  showStats = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ labs: 0, scientists: 0, countries: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && showStats) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          labs: Math.floor(4000 * progress),
          scientists: Math.floor(50000 * progress),
          countries: Math.floor(50 * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible, showStats]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-br from-mgl-seafoam via-white to-mgl-light-bg"
    >
      {/* Abstract Background Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-mgl-lime opacity-20 -top-32 -left-32 md:w-[600px] md:h-[600px] md:top-[-100px] md:left-[-200px] float-slow"></div>
        <div className="absolute w-72 h-72 rounded-full bg-mgl-stats-green opacity-30 top-40 -right-16 md:w-[450px] md:h-[450px] md:top-20 md:right-10 float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-[800px] h-[400px] rounded-t-full bg-mgl-join opacity-20 -bottom-[200px] left-1/2 -translate-x-1/2 md:w-[1200px] md:h-[600px] md:-bottom-[300px] float-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm tracking-widest uppercase font-semibold text-mgl-dark mb-3">
              {subtitle}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={primaryCta.href}
                className="inline-block py-3 px-8 text-lg font-semibold rounded-full bg-mgl-lime text-mgl-dark hover:bg-opacity-90 transition-all duration-300 shadow-lg transform hover:scale-[1.02] hover:shadow-xl cta-bounce"
              >
                {primaryCta.text}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-block py-3 px-8 text-lg font-semibold rounded-full border-2 border-mgl-dark text-mgl-dark hover:bg-mgl-dark hover:text-white transition-all duration-300 shadow-md transform hover:scale-[1.02]"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>

            {/* Stats Section */}
            {showStats && (
              <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-3xl font-bold text-mgl-dark">{stats.labs.toLocaleString()}+</p>
                  <p className="text-sm text-gray-600">Certified Labs</p>
                </div>
                <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-3xl font-bold text-mgl-dark">{stats.scientists.toLocaleString()}+</p>
                  <p className="text-sm text-gray-600">Scientists</p>
                </div>
                <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-3xl font-bold text-mgl-dark">{stats.countries}+</p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className={`lg:w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-mgl-lime rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                {backgroundImage ? (
                  <Image
                    src={backgroundImage}
                    alt="My Green Lab Hero"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-mgl-lime to-mgl-stats-green flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Sustainable Science</h3>
                      <p className="text-lg opacity-90">Transforming laboratories worldwide</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1440 64"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C480,96 960,0 1440,32 L1440,64 L0,64 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
