"use client";
import React, { useState, useEffect, useRef } from 'react';
// Importing icons from lucide-react as specified for React apps
import { Menu, Heart, ArrowRight, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

/**
 * Custom hook logic to handle IntersectionObserver for scroll animations.
 * It observes a container and applies the 'show-on-scroll' class to children
 * marked with 'hidden-on-load' when the container enters the viewport.
 * This closely mimics the original staggered JavaScript behavior using refs.
 */
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
                    // Find elements inside the observed section that need animation
                    const elementsToAnimate = entry.target.querySelectorAll('.hidden-on-load');
                    elementsToAnimate.forEach((element: Element) => {
                        const delayAttr = element.getAttribute('data-animation-delay');
                        const delay = delayAttr ? parseInt(delayAttr) : 0;

                        setTimeout(() => {
                            element.classList.add('show-on-scroll');
                        }, delay);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe the root container, and let the observer find the children
        animationObserver.observe(rootElement); // FIX: Corrected variable name from observerObserver to animationObserver

        return () => {
            animationObserver.unobserve(rootElement); // FIX: Corrected variable name in cleanup
        };
    }, [rootRef]);
};


const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Refs for animation sections
    const whySectionRef = useRef<HTMLElement>(null);
    const coverSectionRef = useRef<HTMLElement>(null); // Added ref for Program Cover section
    const pricingSectionRef = useRef<HTMLElement>(null);
    const modulesSectionRef = useRef<HTMLElement>(null);
    const developerSectionRef = useRef<HTMLElement>(null);

    // Apply the scroll animation logic to target sections
    useScrollAnimation(whySectionRef);
    useScrollAnimation(coverSectionRef); // Now observing the Program Cover section
    useScrollAnimation(pricingSectionRef);
    useScrollAnimation(modulesSectionRef);
    useScrollAnimation(developerSectionRef);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Inline CSS Styles for custom classes and animations (transferred from <style> block)
    const customStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            color: #333;
            background-color: #ffffff;
        }

        /* Custom Colors based on the video */
        .color-green-primary { background-color: #4CAF50; }
        .color-green-light { background-color: #99D98C; }
        .color-blue-light { background-color: #B2EBF2; }
        .color-purple-dark-banner { background-color: #4A148C; }
        .text-green-primary { color: #4CAF50; }
        .border-green-primary { border-color: #4CAF50; }

        /* Animation for Cards and Profiles on Hover */
        .card-hover-effect {
            transition: all 0.3s ease-in-out;
            transform: translateY(0);
        }
        .card-hover-effect:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(-5px);
        }

        /* Keyframes for Hover/Focus Animation on Header Links */
        .nav-link {
            position: relative;
        }
        .nav-link::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #4CAF50;
            transition: width .3s;
            margin-top: 2px;
            position: absolute;
            bottom: -5px;
            left: 0;
        }
        .nav-link:hover::after, .nav-link.active::after {
            width: 100%;
        }

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
            filter: blur(80px); /* Add blur for a softer look */
        }
        .hero-circle-2 {
            width: 300px; height: 300px;
            border-radius: 50%;
            background-color: #99D98C;
            opacity: 0.8;
            top: 250px; left: 50px;
            filter: blur(80px);
        }
        .hero-circle-3 {
            width: 800px; height: 400px;
            border-radius: 100% 100% 0 0;
            background-color: #4CAF50;
            opacity: 0.8;
            bottom: -200px; left: 50%;
            transform: translateX(-50%);
            filter: blur(80px);
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
    `;

    return (
        <>
            <style>{customStyles}</style>
            <div className="min-h-screen">
                {/* Navigation Bar */}
                <header className="sticky top-0 z-40 bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <a href="index.html" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
                                    <div className="w-6 h-6 rounded-full color-green-primary"></div>
                                    <span>my green lab.</span>
                                </a>
                            </div>
                            {/* Desktop Links */}
                            <nav className="hidden md:flex space-x-8 text-sm font-medium">
                                <a href="#" className="nav-link text-gray-700 hover:text-green-primary">How to Green Your Lab</a>
                                <a href="index.html" className="nav-link text-green-primary active">Programs</a>
                                <a href="resources.html" className="nav-link text-gray-700 hover:text-green-primary">Resources</a>
                                <a href="#" className="nav-link text-gray-700 hover:text-green-primary">The Beaker Blog</a>
                                <a href="#" className="nav-link text-gray-700 hover:text-green-primary">About Us</a>
                                <a href="#" className="nav-link text-gray-700 hover:text-green-primary">Get Involved</a>
                            </nav>
                            {/* CTA */}
                            <div className="hidden md:block">
                                <button className="flex items-center text-gray-700 text-sm font-medium hover:text-green-primary transition duration-300">
                                    Give Now
                                    <Heart className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-green-primary focus:outline-none">
                                    <Menu className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 py-4`}>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">How to Green Your Lab</a>
                        <a href="index.html" className="block px-4 py-2 text-sm text-green-primary bg-gray-50">Programs</a>
                        <a href="resources.html" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Resources</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">The Beaker Blog</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">About Us</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Get Involved</a>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            Give Now
                            <Heart className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative pt-16 pb-24 overflow-hidden">
                    {/* Abstract Circles Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute hero-circle-1 transition-transform duration-1000 ease-out"></div>
                        <div className="absolute hero-circle-2 transition-transform duration-1000 ease-out delay-100"></div>
                        <div className="absolute hero-circle-3 transition-transform duration-1000 ease-out delay-200"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Image Column (Made Circular) */}
                            <div className="hidden md:flex justify-center items-center p-8">
                                {/* Circular Wrapper */}
                                <div className="circular-image-container rounded-full overflow-hidden shadow-2xl max-w-sm">
                                    <img
                                        src="https://placehold.co/600x600/eeeeee/333333?text=Lab+Professional"
                                        alt="Scientist working at the lab bench"
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = "https://placehold.co/600x600/f0f9ff/0f172a?text=Placeholder";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="md:text-left text-center md:pt-16">
                                <p className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-3">Professional Development</p>
                                <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                                    My Green Lab<sup className="text-green-primary font-normal text-2xl pr-1">®</sup> Accredited Professionals Program
                                </h1>
                                <p className="text-base text-gray-600 mb-8 max-w-xl md:mx-0 mx-auto">
                                    The leading credential for laboratory sustainability professionals. Gain expertise to transform your scientific workspace through evidence-based practices.
                                </p>
                                <a href="ap_login.html" className="inline-block py-3 px-8 text-lg font-semibold rounded-full color-green-primary text-white hover:bg-green-700 transition duration-300 shadow-lg transform hover:scale-[1.02]">
                                    AP LOGIN
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Become a Professional Section */}
                <section ref={whySectionRef} className="py-20 bg-white" id="why">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0">
                                Why become a My Green Lab Accredited Professional?
                            </h2>
                            <a href="#modules" className="flex items-center text-base font-semibold text-green-primary group">
                                Explore Modules
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <p className="text-base text-gray-600 mb-12 max-w-5xl mx-auto text-center hidden-on-load" data-animation-delay="0">
                            Gain specialized knowledge, practical skills, and industry recognition while contributing to a more sustainable future for scientific research and innovation.
                        </p>

                        {/* Feature Cards Grid (2 columns) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10">
                            {/* Expert Content Column */}
                            <div className="flex flex-col items-center text-center hidden-on-load" data-animation-delay="0">
                                <img
                                    src="https://placehold.co/600x400/F0F0F0/333333?text=Industry+Expert+Training"
                                    alt="Woman presenting at a whiteboard"
                                    className="w-full h-auto rounded-xl shadow-lg mb-6"
                                />
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">Expert content</h3>
                                <p className="text-base font-semibold text-green-primary mb-4">In-depth knowledge from industry leaders</p>
                                <p className="text-sm text-gray-700 max-w-md">Access in-depth education on green lab topics and solutions from leading experts in laboratory sustainability and environmental practices.</p>
                            </div>

                            {/* Interactive Format Column */}
                            <div className="flex flex-col items-center text-center hidden-on-load" data-animation-delay="200">
                                <img
                                    src="https://placehold.co/600x400/F0F0F0/333333?text=Interactive+Learning"
                                    alt="Two people discussing data on a laptop"
                                    className="w-full h-auto rounded-xl shadow-lg mb-6"
                                />
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">Interactive format</h3>
                                <p className="text-base font-semibold text-green-primary mb-4">Engaging learning experience</p>
                                <p className="text-sm text-gray-700 max-w-md">Immerse yourself in interactive content including infographics, videos, quizzes & worksheets designed to reinforce concepts and build practical skills.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Cover Section */}
                <section ref={coverSectionRef} className="py-20 color-blue-light">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hidden-on-load" data-animation-delay="0">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10">
                            What does the My Green Lab Accredited Professionals program cover?
                        </h2>
                        <p className="text-base text-gray-700 max-w-5xl mx-auto mb-16">
                            The Accredited Professional program delivers comprehensive training across six essential areas of laboratory sustainability: Waste Management, Green Chemistry, Engagement, Procurement, Energy, and Water. Each module provides specialized knowledge and practical implementation strategies for creating more sustainable scientific workspaces.
                        </p>
                    </div>
                </section>

                {/* Investment & Pricing Section */}
                <section ref={pricingSectionRef} className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0">
                                Invest in your sustainability credentials
                            </h2>
                            <a href="#" className="flex items-center text-base font-semibold text-green-primary group">
                                Register now
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <p className="text-base text-gray-600 mb-12 max-w-5xl mx-auto text-center hidden-on-load" data-animation-delay="0">
                            Get comprehensive access to online modules, expert videos, downloadable resources, assessment tools, and exclusive membership in the My Green Lab Accredited Professionals community.
                        </p>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Commercial Pricing */}
                            <div className="p-8 border-4 border-gray-100 rounded-2xl shadow-lg color-green-light hidden-on-load" data-animation-delay="100">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">COMMERCIAL PRICING</h4>
                                <p className="text-3xl font-extrabold text-green-primary mb-4">
                                    $75 USD per module / $375 USD for full program
                                </p>
                                <p className="text-sm text-gray-800 mb-4">For industry professionals, commercial laboratories, and private sector researchers. Save 20% with our comprehensive sustainability package that includes all 6 modules.</p>
                                <button className="w-full py-3 bg-white text-green-primary border border-green-primary font-semibold rounded-full hover:bg-green-50 transition duration-300 card-hover-effect">
                                    Access discounted pricing
                                </button>
                            </div>

                            {/* Academic & Non-Profit Pricing */}
                            <div className="p-8 border-4 border-gray-100 rounded-2xl shadow-lg color-green-light hidden-on-load" data-animation-delay="300">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">ACADEMIC & NON-PROFIT PRICING</h4>
                                <p className="text-3xl font-extrabold text-green-primary mb-4">
                                    $25 USD per module / $125 USD for full program
                                </p>
                                <p className="text-sm text-gray-800 mb-4">For students, university researchers, non-profits, and government professionals. Save 20% with our comprehensive sustainability package that includes all 6 modules.</p>
                                <button className="w-full py-3 bg-white text-green-primary border border-green-primary font-semibold rounded-full hover:bg-green-50 transition duration-300 card-hover-effect">
                                    Access discounted pricing
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Modules Section */}
                <section ref={modulesSectionRef} className="py-20 bg-gray-50" id="modules">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Our Modules
                            </h2>
                            <a href="#" className="flex items-center text-base font-semibold text-green-primary group">
                                Explore all modules
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Module Cards Grid (2 rows of 3) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="module-grid">
                            {[
                                { title: 'Waste', text: 'Learn strategies for reducing laboratory waste, implementing proper disposal practices, and creating circular resource systems in scientific environments.', delay: 0, placeholder: 'Waste+Module', alt: 'Person disposing of laboratory gloves in a bin' },
                                { title: 'Green Chemistry', text: 'Develop expertise in safer chemical selection, implementing processes that reduce environmental impact, and applying principles of greener, more sustainable experimental design.', delay: 100, placeholder: 'Green+Chemistry+Module', alt: 'A chemical reaction being poured in a lab' },
                                { title: 'Engagement', text: 'Discover approaches for building sustainability culture, developing effective communication strategies, and implementing successful change management.', delay: 200, placeholder: 'Engagement+Module', alt: 'Scientists smiling while reviewing data in the lab' },
                                { title: 'Procurement', text: 'Master sustainable purchasing frameworks, learn to evaluate environmental claims, and implement effective green procurement policies.', delay: 300, placeholder: 'Procurement+Module', alt: 'Person signing a clipboard over boxes' },
                                { title: 'Energy', text: 'Understand laboratory energy consumption patterns and implement conservation strategies specific to scientific research environments.', delay: 400, placeholder: 'Energy+Module', alt: 'Engineer working on electrical panels' },
                                { title: 'Water', text: 'Explore water conservation approaches, quality considerations, and reduction strategies tailored for laboratory operations.', delay: 500, placeholder: 'Water+Module', alt: 'Person measuring water with a beaker' },
                            ].map((module, index) => (
                                <div key={index} className="flex flex-col hidden-on-load" data-animation-delay={module.delay}>
                                    <img
                                        src={`https://placehold.co/400x280/D9D9D9/4CAF50?text=${module.placeholder}`}
                                        alt={module.alt}
                                        className="w-full h-auto rounded-xl object-cover mb-4 shadow-lg"
                                    />
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
                                    <p className="text-xs text-gray-700 mb-4">{module.text}</p>
                                    <a href="#" className="text-green-primary font-semibold text-sm hover:underline mt-auto">Access {module.title} Module</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial Section (Andy Cooley) */}
                <section className="relative py-20 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center hidden-on-load" data-animation-delay="0">
                            {/* Image/Quote Holder */}
                            <div className="flex justify-center md:justify-start">
                                {/* Placeholder for Andy Cooley */}
                                <img
                                    src="https://placehold.co/200x200/4A148C/ffffff?text=Andy+Cooley"
                                    alt="Andy Cooley profile"
                                    className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
                                />
                            </div>
                            {/* Testimonial Text */}
                            <div className="md:col-span-2 text-center md:text-left">
                                <blockquote className="text-xl italic text-gray-800 mb-6">
                                    "Obtaining this accreditation is important for establishing myself as a credible sustainability professional. This external recognition enhances my professional profile and enables me to contribute effectively to the sustainable laboratory community."
                                </blockquote>
                                <p className="text-base font-semibold text-gray-900">Andy Cooley</p>
                                <p className="text-sm text-gray-600">Global Sustainability Lead, PerkinElmer</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum Developers Section */}
                <section ref={developerSectionRef} className="py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-16">
                            Meet our curriculum developers
                        </h2>
                        <p className="text-base text-gray-600 max-w-4xl mx-auto mb-16 hidden-on-load" data-animation-delay="0">
                            Our curriculum is developed by leading specialists in laboratory sustainability who bring real-world experience and cutting-edge knowledge to the program.
                        </p>

                        {/* Developers Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12" id="developer-grid">
                            {[
                                { name: 'Christina Greever-Wilson', title: 'Director of Communities', location: 'Salt Lake City, UT, USA', bio: 'Christina is a member of the Standards and Technical Resources team, supporting a multitude of My Green Lab\'s programs to ensure their continued rigor and relevance...', delay: 0, placeholder: 'Christina' },
                                { name: 'Scott Weitze', title: 'VP of Standards & Technical Resources', location: 'Alameda, CA, USA', bio: 'Scott coordinated the industry-wide revision & adoption of the ACT Ecolabel 2.0. Scott worked for seventeen years as a Lab Director...', delay: 100, placeholder: 'Scott' },
                                { name: 'Dr. Rachael Relph', title: 'Senior Manager of Sustainable Product Design', location: 'Life Science Business of Merck KGaA', bio: 'Rachael Relph is the former Chief Sustainability Officer at My Green Lab, where she led efforts to transform laboratory operations...', delay: 200, placeholder: 'Rachael' },
                                { name: 'Abbie Macmillan-Jones', title: 'Associate Principal Scientist', location: 'AstraZeneca', bio: 'Abbie Macmillan-Jones is a senior scientist working in Discovery Sciences at AstraZeneca. She supports the discovery and development of novel therapeutics...', delay: 300, placeholder: 'Abbie' },
                                { name: 'Kristin Ferrufino', title: 'Sourcing Consultant', location: 'E&I Cooperative Services', bio: 'Kristin Ferrufino began her career in Pharmaceutical Manufacturing, where she fell in love with laboratory management and purchasing...', delay: 400, placeholder: 'Kristin' },
                                { name: 'Jeffrey Whitford', title: 'VP of Sustainability & Social Business Innovation', location: 'MilliporeSigma', bio: 'Jeffrey leads cross-functional efforts that connect environmental and social responsibility with operational excellence and business growth...', delay: 500, placeholder: 'Jeffrey' },
                            ].map((dev, index) => (
                                <div key={index} className="flex flex-col items-center text-center hidden-on-load card-hover-effect" data-animation-delay={dev.delay}>
                                    <img
                                        src={`https://placehold.co/200x200/99D98C/4A148C?text=${dev.placeholder}`}
                                        alt={`${dev.name} profile`}
                                        className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg"
                                    />
                                    <h3 className="text-xl font-bold text-gray-900">{dev.name}</h3>
                                    <p className="text-sm font-semibold text-green-primary">{dev.title}</p>
                                    <p className="text-xs text-gray-500 mb-3">{dev.location}</p>
                                    <p className="text-xs text-gray-700 mb-3">{dev.bio}</p>
                                    <a href="#" className="text-gray-500 hover:text-green-primary">
                                        <Linkedin className="w-5 h-5 inline" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 text-white pt-16 pb-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-8">
                            {/* Logo/Branding */}
                            <div>
                                <a href="index.html" className="flex items-center space-x-2 text-xl font-bold text-white mb-6">
                                    <div className="w-6 h-6 rounded-full color-green-primary"></div>
                                    <span>my green lab.</span>
                                </a>
                                <p className="text-sm text-gray-400">&copy; 2025 My Green Lab</p>
                            </div>

                            {/* Key Programs */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-green-primary">KEY PROGRAMS</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="index.html" className="hover:text-white transition">My Green Lab Certification</a></li>
                                    <li><a href="act_ecolabel.html" className="hover:text-white transition">ACT® Ecolabel</a></li>
                                    <li><a href="#" className="hover:text-white transition">ECoLab®</a></li>
                                    <li><a href="accredited_professionals.html" className="hover:text-white transition">Accreditations</a></li>
                                    <li><a href="resources.html" className="hover:text-white transition">Resources</a></li>
                                </ul>
                            </div>

                            {/* About Us */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-green-primary">ABOUT US</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                                    <li><a href="newsletter.html" className="hover:text-white transition">Newsletter</a></li>
                                    <li><a href="data_privacy.html" className="hover:text-white transition">Data Privacy</a></li>
                                    <li><a href="#" className="hover:text-white transition">Terms and Conditions</a></li>
                                    <li><a href="#" className="hover:text-white transition">Cookie Preferences</a></li>
                                </ul>
                            </div>

                            {/* Join Our Mailing List */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-green-primary">JOIN OUR MAILING LIST</h4>
                                <p className="text-sm text-gray-400 mb-4">Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!</p>
                                <button className="w-full py-2 color-green-primary text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">SIGN UP</button>

                                <h4 className="text-lg font-semibold mt-8 mb-4 text-green-primary">FOLLOW US</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin className="w-6 h-6" /></a>
                                    <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-6 h-6" /></a>
                                    <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="w-6 h-6" /></a>
                                    <a href="#" className="text-gray-400 hover:text-white transition"><Youtube className="w-6 h-6" /></a>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-8">
                            &copy; 2025 My Green Lab. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default App;
