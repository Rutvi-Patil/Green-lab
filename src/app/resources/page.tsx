"use client";
import React, { useEffect, useRef } from 'react';
// Importing icons from lucide-react as specified for React apps
import { ArrowRight, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

const useScrollAnimation = (rootRef: React.RefObject<HTMLElement | null>) => {
    useEffect(() => {
        const rootElement = rootRef.current;
        if (!rootElement) return;

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Find elements inside observed section that need animation
                    const elementsToAnimate = entry.target.querySelectorAll('.animate-on-scroll');
                    elementsToAnimate.forEach((element: Element) => {
                        const delayAttr = element.getAttribute('data-animation-delay');
                        const delay = delayAttr ? parseInt(delayAttr) : 0;

                        setTimeout(() => {
                            element.classList.add('opacity-100', 'translate-y-0');
                            element.classList.remove('opacity-0', 'translate-y-5');
                        }, delay);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe the root container, and let the observer find the children
        animationObserver.observe(rootElement);

        return () => {
            animationObserver.unobserve(rootElement);
        };
    }, [rootRef]);
};

const App: React.FC = () => {
    // Refs for animation sections
    const practicalStepsRef = useRef<HTMLElement>(null);
    const keyTopicsRef = useRef<HTMLElement>(null);
    const carbonImpactRef = useRef<HTMLElement>(null);
    const moreResourcesRef = useRef<HTMLElement>(null);

    // Apply scroll animation logic to target sections
    useScrollAnimation(practicalStepsRef);
    useScrollAnimation(keyTopicsRef);
    useScrollAnimation(carbonImpactRef);
    useScrollAnimation(moreResourcesRef);

    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <HeroSection
                subtitle="Your Lab Sustainability Resource Hub"
                title="Evidence-based resources for sustainable lab practices"
                description="Your trusted hub for verified lab sustainability resources, case studies, and evidence-backed practices—whether you're starting out or fine-tuning."
                primaryCta={{ text: "Start your journey", href: "#" }}
                imageSrc="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_scientist-analyzing-samples-in-lab-hero-scaled-650x433.jpeg"
                imageAlt="Scientist analyzing samples in sustainability driven lab"
                imagePosition="right"
            />

            {/* How to Green Your Lab Section */}
            <section ref={practicalStepsRef} className="py-20 bg-white" id="practical-steps">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0">
                            How to green your lab: practical first steps
                        </h2>
                        <a href="#" className="flex items-center text-base font-semibold text-mgl-lime group">
                            How to green your lab
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <p className="text-base text-gray-600 mb-12 max-w-5xl mx-auto text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                        Just getting started? Check out our guide for actionable strategies to reduce environmental impact in your lab operations.
                    </p>

                    {/* Feature Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-mgl-light-bg p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-5 transition-all duration-600 hover:shadow-xl hover:-translate-y-1.25 transition-all duration-300" data-animation-delay="200">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://mygreenlab.org/wp-content/uploads/2025/07/GettyImages-1284044174-scaled-690x460.jpg"
                                        alt="Lab sustainability guide"
                                        className="w-full md:w-64 h-48 object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">Comprehensive Sustainability Guide</h3>
                                    <p className="text-base font-semibold text-mgl-lime mb-4">Practical first steps for every lab</p>
                                    <p className="text-sm text-gray-700 mb-6">
                                        Access step-by-step guidance, checklists, and best practices for implementing sustainable laboratory operations, from waste reduction to energy efficiency.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-mgl-lime font-semibold text-sm hover:underline">
                                        How to green your lab
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Sustainability Topics Section */}
            <section ref={keyTopicsRef} className="py-20 bg-mgl-seafoam" id="key-topics">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                    <h2 className="text-4xl font-bold text-gray-900 mb-10">
                        Key sustainability topics
                    </h2>
                    <p className="text-base text-gray-700 max-w-5xl mx-auto mb-16">
                        Discover practical strategies, data-informed guidance, and real lab examples on critical sustainability themes — water, waste, energy, and green chemistry.
                    </p>
                </div>

                {/* Topic Cards Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Reduce lab waste',
                                description: 'Implement effective waste reduction strategies and create circular resource systems in your laboratory.',
                                imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_reduce-lab-waste-containers-scaled-690x454.jpeg',
                                alt: 'Reduce lab waste containers',
                                delay: 0
                            },
                            {
                                title: 'Save water',
                                description: 'Learn water conservation techniques and implement efficient water management practices in lab settings.',
                                imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/08/AdobeStock_1528693298-1.jpeg',
                                alt: 'Stainless steel sink in a lab setting, water running from a faucet',
                                delay: 100
                            },
                            {
                                title: 'Build a culture of sustainability',
                                description: 'Develop strategies to engage your team and create lasting sustainability culture in your laboratory.',
                                imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/weebly-image-posts-22_orig.png',
                                alt: 'Male scientist in lab coat',
                                delay: 200
                            },
                            {
                                title: 'Cut energy use',
                                description: 'Identify energy-saving opportunities and implement efficient practices for laboratory equipment and operations.',
                                imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/Infrastructrue-Energy-690x1168.png',
                                alt: 'Reducing energy in laboratory for sustainable practices',
                                delay: 300
                            },
                            {
                                title: 'Green Chemistry',
                                description: 'Apply green chemistry principles to reduce environmental impact while maintaining research quality.',
                                imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/08/AdobeStock_132311643-scaled-690x1035.jpeg',
                                alt: 'Scientist hands with gloves in chemistry lab performing green chemistry practices',
                                delay: 400
                            },
                            {
                                title: 'Make smart purchases',
                                description: 'Learn sustainable procurement strategies and make environmentally conscious purchasing decisions.',
                                imageSrc: 'https://mygreenlab.org/wp-content/uploads/2021/09/buying4.jpeg',
                                alt: 'Sustainable purchasing in laboratory',
                                delay: 500
                            }
                        ].map((topic, index) => (
                            <div key={index} className="flex flex-col h-full animate-on-scroll opacity-0 translate-y-5 transition-all duration-600 hover:shadow-xl hover:-translate-y-1.25 transition-all duration-300" data-animation-delay={topic.delay}>
                                <div className="flex-shrink-0">
                                    <img
                                        src={topic.imageSrc}
                                        alt={topic.alt}
                                        className="w-full h-48 object-cover rounded-xl shadow-lg mb-4"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h4>
                                    <p className="text-sm text-gray-700 mb-4">{topic.description}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <a href="#" className="text-mgl-lime font-semibold text-sm hover:underline">
                                        Learn more
                                        <ArrowRight className="w-4 h-4 ml-1 inline" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Know Your Carbon Impact Section */}
            <section ref={carbonImpactRef} className="py-20 bg-white" id="carbon-impact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-mgl-light-bg rounded-2xl shadow-lg p-8 lg:p-12 animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Know Your Carbon Impact
                                </h2>
                            </div>
                            <div>
                                <p className="text-base text-gray-700 mb-8">
                                    Access our industry leading Carbon Impact Report
                                </p>
                                <p className="text-sm text-gray-600 mb-8">
                                    Review lab emissions data, documented trends, and transparent methodology in our latest report.
                                </p>
                                <a href="#" className="inline-flex items-center text-mgl-lime font-semibold hover:underline">
                                    View Report
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Resources Section */}
            <section ref={moreResourcesRef} className="py-20 bg-gray-50" id="more-resources">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0">
                            More Resources
                        </h2>
                        <a href="#" className="flex items-center text-base font-semibold text-mgl-lime group">
                            Explore all resources
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <p className="text-base text-gray-600 mb-12 max-w-5xl mx-auto text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                        Stay informed with the latest insights, expert advice, and practical guidance for laboratory sustainability.
                    </p>

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Stay Informed Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg animate-on-scroll opacity-0 translate-y-5 transition-all duration-600 hover:shadow-xl hover:-translate-y-1.25 transition-all duration-300" data-animation-delay="0">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://mygreenlab.org/wp-content/uploads/2021/09/buying4.jpeg"
                                    alt="Danger lab chemical and medical waste"
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Stay Informed</h4>
                            <h5 className="text-base font-semibold text-mgl-lime mb-3">How to kickstart your waste reduction journey</h5>
                            <p className="text-sm text-gray-700 mb-4">
                                Starting a waste reduction program or becoming a zero-waste organization can seem daunting. But it doesn't have to be. This article offers a guide for creating a successful waste reduction program and steps you need to take to get there.
                            </p>
                            <a href="#" className="text-mgl-lime font-semibold text-sm hover:underline">
                                Read Updates
                                <ArrowRight className="w-4 h-4 ml-1 inline" />
                            </a>
                        </div>

                        {/* Other News Articles Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg animate-on-scroll opacity-0 translate-y-5 transition-all duration-600 hover:shadow-xl hover:-translate-y-1.25 transition-all duration-300" data-animation-delay="200">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_sterilizing-medical-instruments-in-autoclave-scaled-1290x718.jpeg"
                                    alt="Sterilizing medical instruments in autoclave"
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Other News Articles Here</h4>
                            <h5 className="text-base font-semibold text-mgl-lime mb-3">Tips for managing energy consumption in the lab</h5>
                            <p className="text-sm text-gray-700 mb-4">
                                There are many ways laboratories can improve their operations, increase inventory management reliability, reduce costs, and enhance the reproducibility of experiments.
                            </p>
                            <a href="#" className="text-mgl-lime font-semibold text-sm hover:underline">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-1 inline" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup Section */}
            <section className="py-20 bg-mgl-seafoam">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Join our mailing list
                    </h2>
                    <p className="text-base text-gray-700 max-w-3xl mx-auto mb-12">
                        Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!
                    </p>
                    
                    {/* Newsletter Signup */}
                    <div className="max-w-md mx-auto">
                        <form className="space-y-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                required 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-mgl-lime focus:border-mgl-lime transition duration-150" 
                            />
                            <button 
                                type="submit" 
                                className="w-full py-3 px-4 text-lg font-semibold rounded-full bg-mgl-lime text-white hover:bg-green-600 transition duration-300 shadow-lg"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-mgl-lime transition-colors duration-150">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-mgl-lime transition-colors duration-150">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-mgl-lime transition-colors duration-150">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-mgl-lime transition-colors duration-150">
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default App;
