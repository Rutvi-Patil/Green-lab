"use client";

import React from 'react';

interface HeroSectionProps {
  subtitle: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right' | 'none';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle,
  title,
  description,
  primaryCta,
  imageSrc,
  imageAlt,
  imagePosition = 'left'
}) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Light Blue Circle (Top Left) */}
          <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-sky-200/50 rounded-full mix-blend-multiply opacity-70 z-0"></div>
          {/* Mint Green Circle (Center Left) */}
          <div className="absolute top-[200px] left-[-150px] w-[500px] h-[500px] bg-lime-300/80 rounded-full mix-blend-multiply opacity-80 z-0"></div>
          {/* Dark Green Arc (Bottom Left) */}
          <div className="absolute top-[450px] left-[-200px] w-[550px] h-[550px] bg-green-700/50 rounded-full mix-blend-multiply opacity-80 z-0"></div>
          {/* Light Green Arc (Top Right) */}
          <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-lime-200/50 rounded-full mix-blend-multiply opacity-70 z-0"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          {imagePosition !== 'none' && (
            <div className={`order-2 lg:order-${imagePosition === 'left' ? '1' : '2'} flex justify-center lg:justify-${imagePosition === 'left' ? 'start' : 'end'}`}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full max-w-md h-auto rounded-full shadow-2xl object-cover aspect-square"
              />
            </div>
          )}

          {/* Content Column */}
          <div className={`order-1 lg:order-${imagePosition === 'left' ? '2' : '1'} ${imagePosition === 'none' ? 'lg:col-span-2 text-center' : ''}`}>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-2">
              {subtitle}
            </p>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              {title}
            </h1>
            <p className={`text-lg text-gray-600 mb-8 ${imagePosition === 'none' ? 'max-w-3xl mx-auto' : 'max-w-lg'}`}>
              {description}
            </p>
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-green-700 uppercase tracking-widest bg-white border-2 border-green-700 rounded-full shadow-lg hover:bg-green-700 hover:text-white transition duration-300"
            >
              {primaryCta.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
