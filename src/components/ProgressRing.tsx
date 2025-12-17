'use client';

import { useState, useEffect, useRef } from 'react';

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  label?: string;
  subtitle?: string;
  showPercentage?: boolean;
  duration?: number;
  delay?: number;
}

const ProgressRing: React.FC<ProgressRingProps> = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = '#A3D900',
  bgColor = '#E5E7EB',
  label,
  subtitle,
  showPercentage = true,
  duration = 2000,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const ringRef = useRef<HTMLDivElement>(null);

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

    if (ringRef.current) {
      observer.observe(ringRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && percentage > 0) {
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCurrentPercentage(Math.floor(percentage * easeOutQuart));

          if (currentStep >= steps) {
            setCurrentPercentage(percentage);
            clearInterval(interval);
          }
        }, stepDuration);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, duration, delay]);

  // Calculate SVG properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  return (
    <div
      ref={ringRef}
      className="flex flex-col items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div className="relative">
        {/* Background Circle */}
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={bgColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              transitionDelay: `${delay}ms`,
            }}
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {showPercentage && (
            <span className="text-2xl font-bold text-gray-900">
              {currentPercentage}%
            </span>
          )}
          {label && (
            <span className="text-xs font-medium text-gray-600 text-center mt-1">
              {label}
            </span>
          )}
        </div>
      </div>

      {subtitle && (
        <p className="text-sm text-gray-600 text-center mt-3 max-w-[120px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default ProgressRing;
