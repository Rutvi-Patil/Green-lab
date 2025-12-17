'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  FlaskConical, Check, Zap, Factory, Plug, Laptop, Globe, Droplet,
  Beaker, ShoppingCart, Plane, Trash2, Map, Users, Lightbulb, TrendingUp, ArrowRight, X
} from 'lucide-react';

// --- 1. TYPE DEFINITIONS ---
interface NavListItem {
  name: string;
  href: string;
}

interface ResultBox {
  value: string;
  description: string;
}

interface USPItem {
  title: string;
  description: string;
}

interface IconCard {
  icon: React.ElementType;
  label: string;
}

interface Step {
  id: number;
  timeframe: string;
  title: string;
  details: string[];
}

interface Level {
  name: string;
  score: number;
  color: string;
}

// --- 2. MOCK DATA ---
const resultsData: ResultBox[] = [
  { value: '35%', description: 'reduction in energy consumption through lab efficiency upgrades and behavior changes in lab operations.' },
  { value: '75%', description: 'reduction in waste by narrowing chromatography tubing to reduce material use and waste.' },
  { value: '460,000', description: 'gallons water saved annually from improved fume hood and autoclave practices across three labs.' },
];

const uspData: USPItem[] = [
  { title: 'Trusted', description: 'by over 4,000 certified labs and 50,000 scientists across 50+ countries.' },
  { title: 'Endorsed', description: 'by UN-backed Race to Zero and the U.S. EPA for its rigorous, science-driven approach.' },
  { title: 'Verified', description: 'by independent third-party verification by Impact Laboratories to ensure integrity and accountability.' },
];

const iconCards: IconCard[] = [
  { icon: FlaskConical, label: 'SUSTAINABILITY CULTURE' },
  { icon: Lightbulb, label: 'INFRASTRUCTURE ENERGY' },
  { icon: Zap, label: 'PLUG LOAD ENERGY' },
  { icon: Laptop, label: 'IT & COMPUTING' },
  { icon: Users, label: 'ORGANIZATIONAL STRATEGY' },
  { icon: Droplet, label: 'WATER' },
  { icon: Beaker, label: 'CHEMICALS' },
  { icon: Factory, label: 'SYNTHETIC CHEMISTRY' },
  { icon: ShoppingCart, label: 'PURCHASING' },
  { icon: TrendingUp, label: 'RESOURCE MANAGEMENT' },
  { icon: Plane, label: 'TRAVEL' },
  { icon: Trash2, label: 'WASTE' },
  { icon: Map, label: 'FIELD WORK' },
  { icon: Globe, label: 'ANIMAL RESEARCH' },
];

const certificationSteps: Step[] = [
  {
    id: 1,
    timeframe: '3-4 WEEKS',
    title: 'Baseline Assessment',
    details: [
      'Baseline Engagement Survey (50% Participation Required)',
      'Assessment Tool',
      'Review Impact Estimator',
      'Submit for Baseline Review',
    ],
  },
  {
    id: 2,
    timeframe: '3-6 MONTHS',
    title: 'Implementation',
    details: [
      'Lab personnel work together to implement changes',
      'Continue Assessment Tool',
      'Continue Impact Estimator',
    ],
  },
  {
    id: 3,
    timeframe: '3-4 WEEKS',
    title: 'Submit Certification',
    details: [
      'Retake Engagement Survey (50% Participation Required)',
      'Submit completed Assessment Tool',
      'Submit Impact Estimator',
    ],
  },
  {
    id: 4,
    timeframe: 'CELEBRATE!',
    title: 'Certification Review',
    details: [
      'Verification of selected documentation determined through a risk-based assessment',
    ],
  },
];

const levelData: Level[] = [
  { name: 'Bronze', score: 40, color: '#964B00' },
  { name: 'Silver', score: 50, color: '#C0C0C0' },
  { name: 'Gold', score: 60, color: '#FFD700' },
  { name: 'Platinum', score: 70, color: '#E5E4E2' },
  { name: 'Green', score: 80, color: '#4CAF50' },
];

const testimonialText: string = 'We proudly operate 17 labs globally, all of which have achieved My Green Lab Certification. The My Green Lab program has been instrumental in fostering a culture of sustainability and engaging employees at all sites. It helps support our mission to accelerate innovation for a healthier world and features prominently in our annual sustainability report.';
const testimonialAuthor: string = 'Dean McLean';
const testimonialRole: string = 'Director, Environmental Health and Safety, IQVIA Laboratories';

// --- 3. COMPONENTS ---

// Helper function for the circular progress indicator SVG
const CircularProgress: React.FC<{ percent: number; color: string }> = ({ percent, color }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg className="w-32 h-32 sm:w-40 sm:h-40 transform -rotate-90" viewBox="0 0 128 128">
      {/* Background Circle */}
      <circle
        className="text-gray-200"
        strokeWidth="10"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="64"
        cy="64"
      />
      {/* Progress Arc */}
      <circle
        className="transition-all duration-700 ease-out"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        stroke={color}
        fill="transparent"
        r={radius}
        cx="64"
        cy="64"
      />
      {/* Score Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
        fill={color}
        style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
      >
        {percent}%
      </text>
    </svg>
  );
};

// 3.2. Hero Section
const Hero: React.FC = () => {
  const imagePlaceholder = 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_african-american-female-scientist-microsope-scaled-650x433.jpeg';

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
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <img
              src={imagePlaceholder}
              alt="A scientist working under a microscope in a laboratory, representing My Green Lab."
              className="w-full max-w-md h-auto rounded-full shadow-2xl object-cover aspect-square"
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-2">
              CERTIFICATION PROGRAM
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              My Green Lab<sup className="text-sm sm:text-base lg:text-xl">&reg;</sup> Certification
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Join 4,000+ certified labs committed to sustainable science. Cut costs, improve efficiency, and embed green practices with the globally recognized lab certification.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-green-700 uppercase tracking-widest bg-white border-2 border-green-700 rounded-full shadow-lg hover:bg-green-700 hover:text-white transition duration-300"
            >
              Start Certification
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3.3. Measurable Results Section
const ResultsSection: React.FC = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto max-w-7xl px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Measurable results: over 5x ROI
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Labs certified through My Green Lab® report measurable cost savings through strategic sustainability improvements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resultsData.map((item, index) => (
          <div
            key={index}
            className="bg-lime-300/80 p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300"
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 mb-4">{item.value}</p>
            <p className="text-lg text-green-800 font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3.4. Path to Certification CTA
const PathToCertificationCTA: React.FC = () => (
  <section className="bg-green-700 py-16">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-1">
            GET STARTED
          </p>
          <h2 className="text-3xl font-bold text-white mb-2">
            A clear path to certification
          </h2>
          <p className="text-lg text-white/90 max-w-xl">
            Take action with our step-by-step process. Measure progress and demonstrate sustainability success across your organization.
          </p>
        </div>
        <a
          href="#"
          className="mt-6 lg:mt-0 inline-flex items-center justify-center space-x-3 text-base font-bold text-white bg-white/20 py-3 px-6 rounded-full border-2 border-white hover:bg-white hover:text-green-700 transition duration-300"
        >
          <span>Start your journey</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

// 3.5. What Makes My Green Lab Certification Unique Section
const UniqueSellingPoints: React.FC = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto max-w-7xl px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        What makes My Green Lab Certification unique?
      </h2>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Turn your sustainability goals into action with a proven framework that brings structure, credibility, and momentum to every lab environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {uspData.map((item, index) => (
          <div
            key={index}
            className="bg-lime-300/80 p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300 min-h-[200px] flex flex-col justify-center"
          >
            <Check className="w-8 h-8 text-green-800 mb-3" />
            <p className="text-xl font-bold text-green-800 mb-2">{item.title}</p>
            <p className="text-base text-green-800">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3.6. Support Icons Grid Section
const SupportIconsGrid: React.FC = () => (
  <section className="bg-white py-24 border-t border-gray-100">
    <div className="container mx-auto max-w-7xl px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        What My Green Lab Certification supports
      </h2>
      <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
        My Green Lab Certification turns ambitious sustainability goals into daily lab actions—guiding progress across 14 core categories from energy to engagement.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-12 gap-x-4">
        {iconCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center px-2">
            <div className="w-16 h-16 rounded-full border-2 border-green-700 flex items-center justify-center mb-3 transition duration-300 hover:bg-green-50">
              <card.icon className="w-8 h-8 text-green-700" />
            </div>
            <p className="text-xs font-semibold uppercase text-gray-700 tracking-wider">
              {card.label.replace(' ', '\u00a0')}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3.7. Third-Party Verification Block
const ThirdPartyVerification: React.FC = () => {
  const imagePlaceholder = 'https://mygreenlab.org/wp-content/uploads/2025/07/image-550-1-scaled-710x383.png';
  return (
    <section className="bg-sky-50 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              A certified partnership for third-party verification
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              My Green Lab partners with Impact Laboratories to independently verify certification results—bringing trust and integrity to your sustainability journey.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-widest text-gray-800 bg-white border-2 border-gray-800 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Verification Details
            </a>
          </div>

          {/* Right Column - Image & Circles */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <img
              src={imagePlaceholder}
              alt="Man wearing safety glasses and a lab coat."
              className="w-full max-w-md h-auto rounded-full shadow-2xl object-cover aspect-square z-10"
            />
            {/* Dark Green Circle (Bottom Right) */}
            <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-green-700/50 rounded-full mix-blend-multiply opacity-80 z-0 hidden md:block"></div>
            {/* Light Green Arc (Top Left) */}
            <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-lime-300/80 rounded-full mix-blend-multiply opacity-70 z-0 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3.8. Certification Timeline - NEW HORIZONTAL LAYOUT
const CertificationTimeline: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your path to certification
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our structured program is built around four key stages. Recertification occurs 2 years after certification date. Baseline step isn't required for recertification.
          </p>
        </div>

        {/* New Horizontal Timeline Layout */}
        <div className="relative">
          {/* SVG for curved connecting line */}
          <svg className="absolute top-24 left-0 w-full h-32 hidden lg:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
            {/* Main curved line connecting all 4 stages */}
            <path
              d="M 150 50 Q 300 30, 450 50 T 750 50 T 1050 50"
              stroke="#16a34a"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Dotted continuation line after stage 4 */}
            <path
              d="M 1050 50 L 1150 50"
              stroke="#16a34a"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              strokeLinecap="round"
            />
          </svg>

          {/* Timeline Stages */}
          <div className="relative flex justify-between items-start px-4 lg:px-0">
            {certificationSteps.map((step, index) => {
              const circleColors = [
                'bg-green-700 text-white',
                'bg-green-600 text-white', 
                'bg-lime-500 text-green-900',
                'bg-lime-400 text-green-900'
              ];

              return (
                <div key={step.id} className="relative flex flex-col items-center lg:w-1/4">
                  {/* Numbered Circle */}
                  <div className={`relative z-20 w-16 h-16 rounded-full ${circleColors[index]} flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white transition-transform duration-300 hover:scale-110`}>
                    {step.id}
                  </div>

                  {/* Vertical Dotted Line */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 border-l-2 border-dotted border-gray-400 hidden lg:block"></div>

                  {/* Text Box */}
                  <div className="mt-8 lg:mt-12 bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-xs mx-auto lg:mx-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Time Badge */}
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                      {step.timeframe}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden space-y-8 mt-8">
            {certificationSteps.map((step, index) => {
              const circleColors = [
                'bg-green-700 text-white',
                'bg-green-600 text-white', 
                'bg-lime-500 text-green-900',
                'bg-lime-400 text-green-900'
              ];

              return (
                <div key={step.id} className="flex items-start space-x-4">
                  {/* Numbered Circle */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${circleColors[index]} flex items-center justify-center text-lg font-bold shadow-lg border-4 border-white`}>
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                    {/* Time Badge */}
                    <div className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                      {step.timeframe}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Details */}
                    <ul className="space-y-1">
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start text-xs text-gray-600">
                          <div className="w-1 h-1 bg-green-600 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// 3.9. Five Levels Progress Section
const LevelProgress: React.FC = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Five levels to recognize your progress
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Labs receive a certification level—Bronze, Silver, Gold, Platinum, or Green—based on depth and breadth of sustainable practices adopted.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {levelData.map((level, index) => (
          <div key={index} className="flex flex-col items-center w-40">
            <CircularProgress percent={level.score} color={level.color} />
            <p className="text-xl font-bold text-gray-800 mt-4 mb-1">{level.name}</p>
            <p className="text-xs text-gray-500 text-center">{level.score}% score on Certification Assessment</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3.10. Testimonial Section
const Testimonial: React.FC = () => {
  const imagePlaceholder = 'https://mygreenlab.org/wp-content/uploads/2025/09/1586447888192.jpeg';

  return (
    <section className="relative bg-sky-50 py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Image and Circles */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={imagePlaceholder}
              alt={testimonialAuthor}
              className="w-48 h-48 rounded-full shadow-lg object-cover z-10"
            />
            {/* Decorative Circles/Arcs */}
            <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-green-700/50 rounded-full mix-blend-multiply opacity-60 z-0 hidden lg:block"></div>
            <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-lime-300/80 rounded-full mix-blend-multiply opacity-70 z-0 hidden lg:block"></div>
          </div>

          {/* Right Column - Text */}
          <div className="lg:col-span-2 relative z-10">
            <p className="text-xl italic text-gray-700 mb-6 leading-relaxed">
              "{testimonialText}"
            </p>
            <p className="font-bold text-gray-800">{testimonialAuthor}</p>
            <p className="text-sm text-gray-600">{testimonialRole}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3.11. Blue CTA Block
const BlueCTABlock: React.FC = () => {
  const imagePlaceholder = 'https://placehold.co/500x500/A7C7E7/000?text=Clinical+Lab+Setup';
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-blue-600 p-8 md:p-16 rounded-xl shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Content Block */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-1">
              CLINICAL DIAGNOSTIC LABS
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Certification built for patient-focused lab environments
            </h2>
            <p className="text-lg opacity-90">
              Tailored for labs handling patient samples, clinical trials, and diagnostic workflows. Addresses automated systems and regulatory requirements while delivering measurable ROI.
            </p>
          </div>

          {/* Button */}
          <a
            href="#"
            className="flex items-center space-x-3 text-base font-bold text-blue-600 bg-white py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 flex-shrink-0"
          >
            <span>Achieve Certification</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// 3.12. Tools Grid Section
const ToolsGrid: React.FC = () => {
  const toolData = [
    { title: 'Engagement Survey', subtitle: 'ENGAGEMENT SURVEY BUILD TEAM BUY-IN FROM DAY ONE', description: 'Launch your sustainability journey with a quick, lab-wide survey designed to raise awareness and encourage participation in sustainability efforts.', image: 'https://mygreenlab.org/wp-content/uploads/2025/07/EngagementSurveyimage-Watermark-1.png' },
    { title: 'Assessment Tool', subtitle: 'SET GOALS AND STAY ON TRACK', description: 'Use a structured, interactive framework that guides labs through certification with confidence and supports goal-setting at every level.', image: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_assessment-tool-black-man-hand-writing-scaled-1290x860.jpeg' },
    { title: 'Impact Estimator', subtitle: 'QUANTIFY AND COMMUNICATE IMPACT', description: 'Translate your efforts into data. Measure savings in energy, water, waste, and more to support reporting and demonstrate ROI.', image: 'https://mygreenlab.org/wp-content/uploads/2025/07/Impact_Estimator.png' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Tools that power your certification journey
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Built-in tools make it easy to engage teams, track progress, and measure sustainability impact effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {toolData.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={tool.image} alt={tool.title} className="w-full h-auto object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{tool.subtitle}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3.13. Sponsors Section
const Sponsors: React.FC = () => {
  const sponsorLogos = [
    'https://mygreenlab.org/wp-content/uploads/2025/07/az1-3-530x353.png',
    'https://mygreenlab.org/wp-content/uploads/2025/07/envetec-530x353.png',
    'https://mygreenlab.org/wp-content/uploads/2025/07/millapore-sigma-530x353.png',
    'https://mygreenlab.org/wp-content/uploads/2025/07/triumvirate-1-530x353.png',
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-lg font-bold text-gray-800 mb-8 text-center uppercase tracking-widest">
          Program sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {sponsorLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Sponsor ${index + 1}`} className="max-h-38 w-auto opacity-70 hover:opacity-100 transition duration-300" />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. MAIN APP COMPONENT ---
const CertificationPage: React.FC = () => {
  const videoBackgroundUrl = "https://i.vimeocdn.com/video/1978313839-2defa24a90a34b077990ae152b49f7f536c8db4ac64a9887d05e30a4ab7982ea-d?mw=1300&mh=732&q=70";

  return (
    <>
      <Hero />
      <ResultsSection />
      <PathToCertificationCTA />
      {/* Mocked Video Section - Omitted to focus on the static UI elements */}
      {/* The video section would require embedding and custom styling, but surrounding content is more critical for page structure. */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Setting the standard</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          My Green Lab Certification is the industry's most widely recognized lab sustainability program...
        </p>
        {/* Placeholder for video player visible in the original page */}
        <div 
          className="max-w-4xl mx-auto h-96 bg-gray-900 rounded-xl flex items-center justify-center text-white bg-cover bg-center shadow-xl"
          style={{ 
            backgroundImage: `url("${videoBackgroundUrl}")`,
          }}
        >
        </div>
      </section>
      <UniqueSellingPoints />
      <SupportIconsGrid />
      <ThirdPartyVerification />
      <CertificationTimeline />
      <LevelProgress />
      <Testimonial />
      <BlueCTABlock />
      <ToolsGrid />
      <Sponsors />
    </>
  );
};

export default CertificationPage;
