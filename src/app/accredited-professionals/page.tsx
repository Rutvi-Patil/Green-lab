import React from 'react';
// Importing icons from lucide-react as specified for React apps
import { ArrowRight, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ScrollAnimator from '@/components/ScrollAnimator';
import SEOHead from '@/components/SEOHead';
import { createPageMetadata, createBreadcrumbSchema, createCourseSchema } from '@/utils/metadata';

// Page-specific metadata
const pageMetadata = createPageMetadata({
  title: 'My Green Lab Accredited Professionals Program - Professional Certification in Laboratory Sustainability',
  description: 'Become a My Green Lab Accredited Professional. Gain expertise in laboratory sustainability through comprehensive training in waste management, green chemistry, energy efficiency, and more. Professional certification for sustainability leaders.',
  keywords: 'accredited professional, laboratory sustainability certification, green lab professional, sustainability training, lab environmental management, green chemistry certification',
  canonical: 'https://mygreenlab.org/accredited-professionals',
  openGraph: {
    type: 'website',
    url: 'https://mygreenlab.org/accredited-professionals',
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_AP-hero-scientist-women-and-test-tube-tablet-scaled-650x441.jpeg',
  },
  twitter: {
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_AP-hero-scientist-women-and-test-tube-tablet-scaled-650x441.jpeg',
  },
  jsonLd: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://mygreenlab.org/' },
      { name: 'Accredited Professionals', url: 'https://mygreenlab.org/accredited-professionals' }
    ]),
    createCourseSchema({
      name: 'My Green Lab Accredited Professionals Program',
      description: 'The leading credential for laboratory sustainability professionals. Gain expertise to transform your scientific workspace through evidence-based practices across six essential areas: Waste Management, Green Chemistry, Engagement, Procurement, Energy, and Water.',
      provider: 'My Green Lab',
      url: 'https://mygreenlab.org/accredited-professionals',
      image: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_AP-hero-scientist-women-and-test-tube-tablet-scaled-650x441.jpeg',
      offers: {
        price: '375',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      }
    })
  ]
});

const App: React.FC = () => {
    return (
        <>
            <SEOHead metadata={pageMetadata} />
            <div className="min-h-screen font-sans text-gray-900 bg-white">
                {/* Hero Section */}
                <HeroSection
                    subtitle="PROFESSIONAL DEVELOPMENT"
                    title="My Green Lab Accredited Professionals Program"
                    description="The leading credential for laboratory sustainability professionals. Gain expertise to transform your scientific workspace through evidence-based practices."
                    primaryCta={{ text: "AP LOGIN", href: "/accredited-professionals/login" }}
                    imageSrc="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_AP-hero-scientist-women-and-test-tube-tablet-scaled-650x441.jpeg"
                    imageAlt="Scientist working at lab bench"
                    imagePosition="left"
                />

                {/* Why Become a Professional Section */}
                <ScrollAnimator>
                    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="why">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 lg:mb-16">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0 text-center md:text-left">
                                Why become a My Green Lab Accredited Professional?
                            </h2>
                            <a href="#modules" className="flex items-center text-sm sm:text-base font-semibold text-mgl-lime group">
                                Explore Modules
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-5xl mx-auto text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                            Gain specialized knowledge, practical skills, and industry recognition while contributing to a more sustainable future for scientific research and innovation.
                        </p>

                        {/* Feature Cards Grid (2 columns) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 pt-6 sm:pt-10">
                            {/* Expert Content Column */}
                            <div className="flex flex-col h-full animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                                    <div className="flex-shrink-0">
                                        <img
                                            src="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_young-business-people-in-office-presentation-scaled-1290x925.jpeg"
                                            alt="Woman presenting at a whiteboard"
                                            width="1290"
                                            height="925"
                                            className="w-full aspect-[1290/925] object-cover rounded-xl shadow-lg mb-4 sm:mb-6"
                                        />
                                    </div>
                                <div className="flex-grow flex flex-col justify-between text-center">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">Expert content</h3>
                                        <p className="text-sm sm:text-base font-semibold text-mgl-lime mb-3 sm:mb-4">In-depth knowledge from industry leaders</p>
                                        <p className="text-xs sm:text-sm text-gray-700">Access in-depth education on green lab topics and solutions from leading experts in laboratory sustainability and environmental practices.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Format Column */}
                            <div className="flex flex-col h-full animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="200">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_learning-with-male-and-female-scaled-1290x860.jpeg"
                                        alt="Two people discussing data on a laptop"
                                        width="1290"
                                        height="925"
                                        className="w-full aspect-[1290/925] object-cover rounded-xl shadow-lg mb-4 sm:mb-6"
                                    />
                                </div>
                                <div className="flex-grow flex flex-col justify-between text-center">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">Interactive format</h3>
                                        <p className="text-sm sm:text-base font-semibold text-mgl-lime mb-3 sm:mb-4">Engaging learning experience</p>
                                        <p className="text-xs sm:text-sm text-gray-700">Immerse yourself in interactive content including infographics, videos, quizzes & worksheets designed to reinforce concepts and build practical skills.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </ScrollAnimator>

                {/* Program Cover Section */}
                <ScrollAnimator>
                    <section className="py-12 sm:py-16 lg:py-20 bg-mgl-seafoam">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
                            What does the My Green Lab Accredited Professionals program cover?
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                            The Accredited Professional program delivers comprehensive training across six essential areas of laboratory sustainability: Waste Management, Green Chemistry, Engagement, Procurement, Energy, and Water. Each module provides specialized knowledge and practical implementation strategies for creating more sustainable scientific workspaces.
                        </p>
                    </div>
                    </section>
                </ScrollAnimator>

                {/* Investment & Pricing Section */}
                <ScrollAnimator>
                    <section className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 lg:mb-16">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl mb-4 md:mb-0 text-center md:text-left">
                                Invest in your sustainability credentials
                            </h2>
                            <a href="#" className="flex items-center text-sm sm:text-base font-semibold text-mgl-lime group">
                                Register now
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-5xl mx-auto text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                            Get comprehensive access to online modules, expert videos, downloadable resources, assessment tools, and exclusive membership in My Green Lab Accredited Professionals community.
                        </p>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {/* Commercial Pricing */}
                            <div className="p-6 sm:p-8 border-4 border-gray-100 rounded-2xl shadow-lg bg-mgl-light-bg animate-on-scroll opacity-0 translate-y-5 transition-all duration-600 hover:shadow-xl hover:-translate-y-1.25 transition-all duration-300" data-animation-delay="100">
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">COMMERCIAL PRICING</h4>
                                <p className="text-2xl sm:text-3xl font-extrabold text-mgl-lime mb-4">
                                    $75 USD per module / $375 USD for full program
                                </p>
                                <p className="text-xs sm:text-sm text-gray-800 mb-4">For industry professionals, commercial laboratories, and private sector researchers. Save 20% with our comprehensive sustainability package that includes all 6 modules.</p>
                                <button className="w-full py-2.5 sm:py-3 bg-white text-mgl-lime border border-mgl-lime font-semibold rounded-full hover:bg-mgl-cream transition-colors duration-300 text-sm sm:text-base">
                                    Access discounted pricing
                                </button>
                            </div>

                            {/* Academic & Non-Profit Pricing */}
                            <div className="p-6 sm:p-8 border-4 border-gray-100 rounded-2xl shadow-lg bg-mgl-light-bg animate-on-scroll opacity-0 translate-y-5 transition-all duration-600 hover:shadow-xl hover:-translate-y-1.25 transition-all duration-300" data-animation-delay="300">
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">ACADEMIC & NON-PROFIT PRICING</h4>
                                <p className="text-2xl sm:text-3xl font-extrabold text-mgl-lime mb-4">
                                    $25 USD per module / $125 USD for full program
                                </p>
                                <p className="text-xs sm:text-sm text-gray-800 mb-4">For students, university researchers, non-profits, and government professionals. Save 20% with our comprehensive sustainability package that includes all 6 modules.</p>
                                <button className="w-full py-2.5 sm:py-3 bg-white text-mgl-lime border border-mgl-lime font-semibold rounded-full hover:bg-mgl-cream transition-colors duration-300 text-sm sm:text-base">
                                    Access discounted pricing
                                </button>
                            </div>
                        </div>
                    </div>
                    </section>
                </ScrollAnimator>

                {/* Our Modules Section */}
                <ScrollAnimator>
                    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="modules">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 lg:mb-16 gap-4">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">
                                Our Modules
                            </h2>
                            <a href="#" className="flex items-center text-sm sm:text-base font-semibold text-mgl-lime group">
                                Explore all modules
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Module Cards Grid (2 rows of 3) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="module-grid">
                            {[
                                { title: 'Waste', text: 'Learn strategies for reducing laboratory waste, implementing proper disposal practices, and creating circular resource systems in scientific environments.', delay: 0, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_waste-glove-trash-disposal-scaled-1290x860.jpeg', alt: 'Person disposing of laboratory gloves in a bin' },
                                { title: 'Green Chemistry', text: 'Develop expertise in safer chemical selection, implementing processes that reduce environmental impact, and applying principles of greener, more sustainable experimental design.', delay: 100, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_green-chemistry-lab-tech-wearing-protective-gloves-scaled-1290x726.jpeg', alt: 'A chemical reaction being poured in a lab' },
                                { title: 'Engagement', text: 'Discover approaches for building sustainability culture, developing effective communication strategies, and implementing successful change management.', delay: 200, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/11/Engagement-Module-1290x917.jpg', alt: 'Scientists smiling while reviewing data in lab' },
                                { title: 'Procurement', text: 'Master sustainable purchasing frameworks, learn to evaluate environmental claims, and implement effective green procurement policies.', delay: 300, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/Screenshot-2025-07-18-at-11.31.21-AM.png', alt: 'Person signing a clipboard over boxes' },
                                { title: 'Energy', text: 'Understand laboratory energy consumption patterns and implement conservation strategies specific to scientific research environments.', delay: 400, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_energy-engineer-checking-tem-of-refrigeration-scaled-1290x860.jpeg', alt: 'Engineer working on electrical panels' },
                                { title: 'Water', text: 'Explore water conservation approaches, quality considerations, and reduction strategies tailored for laboratory operations.', delay: 500, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/07/AdobeStock_save-water-scientist-wash-beaker-scaled-1290x861.jpeg', alt: 'Person measuring water with a beaker' },
                            ].map((module, index) => (
                                <div key={index} className="flex flex-col h-full animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay={module.delay}>
                                    <div className="flex-shrink-0">
                                        <img
                                            src={module.imageSrc}
                                            alt={module.alt}
                                            width="850"
                                            height="567"
                                            style={{ "--image__aspect-ratio--override": "3/2" } as React.CSSProperties}
                                            className="w-full xl:max-w-[850px] xl:h-[567px] object-cover rounded-xl shadow-lg mb-3 sm:mb-4"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
                                        <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 line-clamp-4">{module.text}</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#" className="text-mgl-lime font-semibold text-xs sm:text-sm hover:underline">Access {module.title} Module</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </section>
                </ScrollAnimator>

                {/* Testimonial Section (Andy Cooley) */}
                <ScrollAnimator>
                    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                            {/* Image/Quote Holder */}
                            <div className="flex justify-center md:justify-start">
                                {/* Placeholder for Andy Cooley */}
                                <img
                                    src="https://placehold.co/200x200/4A148C/ffffff?text=Andy+Cooley"
                                    alt="Andy Cooley profile"
                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-white"
                                />
                            </div>
                            {/* Testimonial Text */}
                            <div className="md:col-span-2 text-center md:text-left">
                                <blockquote className="text-lg sm:text-xl italic text-gray-800 mb-4 sm:mb-6">
                                    "Obtaining this accreditation is important for establishing myself as a credible sustainability professional. This external recognition enhances my professional profile and enables me to contribute effectively to the sustainable laboratory community."
                                </blockquote>
                                <p className="text-sm sm:text-base font-semibold text-gray-900">Andy Cooley</p>
                                <p className="text-xs sm:text-sm text-gray-600">Global Sustainability Lead, PerkinElmer</p>
                            </div>
                        </div>
                    </div>
                </section>
                </ScrollAnimator>

                {/* Curriculum Developers Section */}
                <ScrollAnimator>
                    <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16">
                            Meet our curriculum developers
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-on-scroll opacity-0 translate-y-5 transition-all duration-600" data-animation-delay="0">
                            Our curriculum is developed by leading specialists in laboratory sustainability who bring real-world experience and cutting-edge knowledge to the program.
                        </p>

                        {/* Developers Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10" id="developer-grid">
                            {[
                                { name: 'Christina Greever-Wilson', title: 'Director of Communities', location: 'Salt Lake City, UT, USA', bio: 'Christina is a member of the Standards and Technical Resources team, supporting a multitude of My Green Lab\'s programs to ensure their continued rigor and relevance...', delay: 0, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/06/Christina-Greever-Wilson-600x598.jpg' },
                                { name: 'Scott Weitze', title: 'VP of Standards & Technical Resources', location: 'Alameda, CA, USA', bio: 'Scott coordinated the industry-wide revision & adoption of ACT Ecolabel 2.0. Scott worked for seventeen years as a Lab Director...', delay: 100, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/06/Scott-Weitze-1-scaled-600x593.jpg' },
                                { name: 'Dr. Rachael Relph', title: 'Senior Manager of Sustainable Product Design', location: 'Life Science Business of Merck KGaA', bio: 'Rachael Relph is the former Chief Sustainability Officer at My Green Lab, where she led efforts to transform laboratory operations...', delay: 200, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/06/rachael-relph-headshot.jpg' },
                                { name: 'Abbie Macmillan-Jones', title: 'Associate Principal Scientist', location: 'AstraZeneca', bio: 'Abbie Macmillan-Jones is a senior scientist working in Discovery Sciences at AstraZeneca. She supports the discovery and development of novel therapeutics...', delay: 300, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/06/Abbie-Macmillan-Jones-FPO-headshot-image.jpeg' },
                                { name: 'Kristin Ferrufino', title: 'Sourcing Consultant', location: 'E&I Cooperative Services', bio: 'Kristin Ferrufino began her career in Pharmaceutical Manufacturing, where she fell in love with laboratory management and purchasing...', delay: 400, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/06/kristin-ferrufino_headshot-1-600x600.png' },
                                { name: 'Jeffrey Whitford', title: 'VP of Sustainability & Social Business Innovation', location: 'MilliporeSigma', bio: 'Jeffrey leads cross-functional efforts that connect environmental and social responsibility with operational excellence and business growth...', delay: 500, imageSrc: 'https://mygreenlab.org/wp-content/uploads/2025/06/Jeffrey-Whiteford-FPO-headshot-image.jpeg' },
                            ].map((dev, index) => (
                                <div key={index} className="flex flex-col items-center text-center h-full animate-on-scroll opacity-0 translate-y-5 transition-all duration-600 hover:shadow-xl hover:-translate-y-1.25 transition-all duration-300" data-animation-delay={dev.delay}>
                                    <div className="flex-shrink-0">
                                        <img
                                            src={dev.imageSrc}
                                            alt={`${dev.name} profile`}
                                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4 shadow-lg"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{dev.name}</h3>
                                            <p className="text-xs sm:text-sm font-semibold text-mgl-lime mb-1">{dev.title}</p>
                                            <p className="text-xs text-gray-500 mb-2">{dev.location}</p>
                                            <p className="text-xs text-gray-700 mb-3 line-clamp-3">{dev.bio}</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="#" className="text-gray-500 hover:text-mgl-lime transition-colors duration-150">
                                                <Linkedin className="w-5 h-5 inline" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </section>
                </ScrollAnimator>
            </div>
        </>
    );
};

export default App;
