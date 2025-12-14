'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar?: string;
  rating?: number;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  organization,
  avatar,
  rating = 5,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      ref={testimonialRef}
      className={`
        bg-white rounded-2xl shadow-lg p-8 card-elevated
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <svg
          className="w-12 h-12 text-mgl-lime opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Rating */}
      <div className="flex mb-6">
        {renderStars()}
      </div>

      {/* Author Info */}
      <div className="flex items-center">
        {avatar ? (
          <div className="relative w-12 h-12 mr-4">
            <Image
              src={avatar}
              alt={author}
              fill
              className="rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-mgl-lime rounded-full flex items-center justify-center mr-4">
            <span className="text-mgl-dark font-bold text-lg">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-mgl-dark font-medium">{organization}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
