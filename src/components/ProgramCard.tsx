'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  color?: string;
  hoverColor?: string;
  icon?: React.ReactNode;
  featured?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  image,
  link,
  color = 'bg-mgl-program-purple',
  hoverColor = 'hover:bg-mgl-program-magenta',
  icon,
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className={`block ${featured ? 'md:col-span-2' : ''} transition-all duration-300 transform`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300
          ${color} ${hoverColor}
          ${isHovered ? 'transform scale-[1.02] shadow-2xl' : ''}
          ${featured ? 'p-8 md:p-12' : 'p-6'}
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
        </div>

        <div className="relative z-10">
          {/* Icon or Image */}
          {icon ? (
            <div className={`mb-4 ${featured ? 'text-4xl' : 'text-2xl'}`}>
              {icon}
            </div>
          ) : image ? (
            <div className={`mb-6 ${featured ? 'h-48' : 'h-32'} relative overflow-hidden rounded-xl`}>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300"
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            </div>
          ) : null}

          {/* Content */}
          <h3 className={`font-bold mb-3 text-white ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className={`text-white opacity-90 leading-relaxed ${featured ? 'text-lg' : 'text-sm'}`}>
            {description}
          </p>

          {/* Hover Arrow */}
          <div
            className={`
              mt-4 flex items-center text-white font-medium
              transition-all duration-300
              ${isHovered ? 'translate-x-2' : 'translate-x-0'}
            `}
          >
            <span className="mr-2">Learn More</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Gradient Overlay on Hover */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        />
      </div>
    </Link>
  );
};

export default ProgramCard;
