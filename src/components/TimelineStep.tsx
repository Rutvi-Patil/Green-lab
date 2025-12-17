'use client';

import { useState, useEffect, useRef } from 'react';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  duration?: string;
  isActive?: boolean;
  isCompleted?: boolean;
  delay?: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  title,
  description,
  duration,
  isActive = false,
  isCompleted = false,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

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

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStepColor = () => {
    if (isCompleted) return 'bg-mgl-stats-green text-white';
    if (isActive) return 'bg-mgl-lime text-mgl-dark';
    return 'bg-gray-200 text-gray-600';
  };

  const getLineColor = () => {
    if (isCompleted) return 'bg-mgl-stats-green';
    if (isActive) return 'bg-mgl-lime';
    return 'bg-gray-300';
  };

  return (
    <div
      ref={stepRef}
      className={`
        relative flex items-start mb-8 last:mb-0
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline Line
      <div className="flex flex-col items-center mr-6">
        <div
          className={`
            w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
            transition-all duration-300 shadow-md
            ${getStepColor()}
            ${isActive ? 'ring-4 ring-mgl-lime ring-opacity-50' : ''}
          `}
        >
          {isCompleted ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            step
          )}
        </div>
        {/* Vertical Line */}
        {/* <div className={`w-0.5 h-20 mt-2 ${getLineColor()}`} /> */}
      </div> */}

      {/* Content */}
      <div className="flex-1 bg-white rounded-xl p-6 shadow-lg card-elevated">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {duration && (
            <span className="text-sm font-medium text-mgl-dark bg-mgl-seafoam px-3 py-1 rounded-full">
              {duration}
            </span>
          )}
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        
        {/* Progress Indicator */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className={`
                h-2 rounded-full transition-all duration-1000
                ${isCompleted ? 'bg-mgl-stats-green w-full' : isActive ? 'bg-mgl-lime w-1/2' : 'bg-gray-300 w-0'}
              `}
            />
          </div>
          <span className="text-xs font-medium text-gray-500">
            {isCompleted ? 'Completed' : isActive ? 'In Progress' : 'Pending'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelineStep;
