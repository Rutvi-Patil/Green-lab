'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StandardHeroSectionProps {
  subtitle: string;
  title?: string;
  titleWithSup?: string;
  description: string;
  primaryCta: { text: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'none';
  isCircularImage?: boolean;
}

const StandardHeroSection: React.FC<StandardHeroSectionProps> = ({
  subtitle,
  title,
  titleWithSup,
  description,
  primaryCta,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  isCircularImage = false,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
          }, Number(delay));
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Target all elements marked for animation
    document.querySelectorAll('.hidden-on-load').forEach(el => {
      animationObserver.observe(el);
    });

    return () => {
      document.querySelectorAll('.hidden-on-load').forEach(el => {
        animationObserver.unobserve(el);
      });
    };
  }, []);

  const renderTitle = () => {
    if (titleWithSup) {
      return (
        <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          {titleWithSup.split('®').map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && <sup className="text-green-primary font-normal text-2xl pr-1">®</sup>}
            </span>
          ))}
        </h1>
      );
    }
    return (
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        {title}
      </h1>
    );
  };

  const renderImage = () => {
    if (!imageSrc || imagePosition === 'none') return null;

    const imageContent = (
      <div className="flex justify-center items-center p-8">
        {isCircularImage ? (
          <div className="circular-image-container rounded-full overflow-hidden shadow-2xl max-w-sm">
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={600}
              height={600}
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x600/f0f9ff/0f172a?text=Placeholder";
              }}
            />
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/600x400/f0f9ff/0f172a?text=Placeholder";
            }}
          />
        )}
      </div>
    );

    return imagePosition === 'left' ? (
      <div className="hidden md:flex justify-center items-center p-8 order-1 md:order-1">
        {isCircularImage ? (
          <div className="circular-image-container rounded-full overflow-hidden shadow-2xl max-w-sm">
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={600}
              height={600}
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x600/f0f9ff/0f172a?text=Placeholder";
              }}
            />
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/600x400/f0f9ff/0f172a?text=Placeholder";
            }}
          />
        )}
      </div>
    ) : (
      <div className="hidden md:flex justify-center items-center p-8">
        {isCircularImage ? (
          <div className="circular-image-container rounded-full overflow-hidden shadow-2xl max-w-sm">
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={600}
              height={600}
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x600/f0f9ff/0f172a?text=Placeholder";
              }}
            />
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/600x400/f0f9ff/0f172a?text=Placeholder";
            }}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        /* Custom Colors based on the ACT Ecolabel page */
        .color-green-primary { background-color: #4CAF50; }
        .color-green-light { background-color: #99D98C; }
        .color-blue-light { background-color: #B2EBF2; }
        .text-green-primary { color: #4CAF50; }
        .border-green-primary { border-color: #4CAF50; }

        /* Utility for hiding initially (used for IntersectionObserver) */
        .hidden-on-load {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .show-on-scroll {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom styles for abstract circles in the hero section */
        .hero-circle-1 {
          width: 400px; height: 400px;
          border-radius: 50%;
          background-color: #B2EBF2;
          opacity: 0.5;
          top: -100px; left: -100px;
        }
        .hero-circle-2 {
          width: 300px; height: 300px;
          border-radius: 50%;
          background-color: #99D98C;
          opacity: 0.8;
          top: 250px; left: 50px;
        }
        .hero-circle-3 {
          width: 800px; height: 400px;
          border-radius: 100% 100% 0 0;
          background-color: #4CAF50;
          opacity: 0.8;
          bottom: -200px; left: 50%;
          transform: translateX(-50%);
        }
        @media (min-width: 768px) {
          .hero-circle-1 { width: 600px; height: 600px; top: -150px; left: -200px; }
          .hero-circle-2 { width: 450px; height: 450px; top: 100px; left: 100px; }
          .hero-circle-3 { width: 1200px; height: 600px; bottom: -300px; }
        }
        
        /* Custom style for the circular image container */
        .circular-image-container {
          width: 100%;
          padding-top: 100%; /* Creates a 1:1 aspect ratio */
          position: relative;
        }
        .circular-image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Abstract Circles Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute hero-circle-1 transition-transform duration-1000 ease-out"></div>
          <div className="absolute hero-circle-2 transition-transform duration-1000 ease-out delay-100"></div>
          <div className="absolute hero-circle-3 transition-transform duration-1000 ease-out delay-200"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`grid grid-cols-1 ${imagePosition !== 'none' ? 'md:grid-cols-2' : ''} gap-12 items-center`}>
            {/* Image Column */}
            {imagePosition === 'left' && renderImage()}

            {/* Content Column */}
            <div className={`text-center ${imagePosition === 'right' ? 'md:text-left' : imagePosition === 'left' ? 'md:text-left md:order-2' : 'text-center'} ${imagePosition !== 'none' ? 'md:pt-16' : ''} hidden-on-load`} data-animation-delay="0">
              <p className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-3">{subtitle}</p>
              {renderTitle()}
              <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
                {description}
              </p>
              <Link
                href={primaryCta.href}
                className="inline-block py-3 px-8 text-lg font-semibold rounded-full color-green-primary text-white hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-[1.02]"
              >
                {primaryCta.text}
              </Link>
            </div>

            {/* Image Column */}
            {imagePosition === 'right' && renderImage()}
          </div>
        </div>
      </section>
    </>
  );
};

export default StandardHeroSection;
