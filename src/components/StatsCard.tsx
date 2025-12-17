'use client';

import { useState, useEffect, useRef } from 'react';

interface StatsCardProps {
  value: number | string;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  color?: string;
  bgColor?: string;
  duration?: number;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  color = 'text-mgl-dark',
  bgColor = 'bg-mgl-lime',
  duration = 2000,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState<number | string>(0);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && typeof value === 'number' && value > 0) {
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = value / steps;

      let currentStep = 0;
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCurrentValue(Math.floor(value * easeOutQuart));

          if (currentStep >= steps) {
            setCurrentValue(value);
            clearInterval(interval);
          }
        }, stepDuration);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    } else if (isVisible && typeof value === 'string') {
      setCurrentValue(value);
    }
  }, [isVisible, value, duration, delay]);

  return (
    <div
      ref={cardRef}
      className={`p-6 ${bgColor} rounded-2xl shadow-xl text-gray-800 card-elevated transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className={`text-5xl md:text-6xl font-extrabold mb-4 ${color}`}>
        {prefix}
        {typeof currentValue === 'number' ? currentValue.toLocaleString() : currentValue}
        {suffix}
      </p>
      <p className="text-lg font-semibold mb-2 text-gray-900">{label}</p>
      {description && (
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default StatsCard;
