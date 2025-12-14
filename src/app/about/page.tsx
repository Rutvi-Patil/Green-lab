import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsCard from '@/components/StatsCard';
import Testimonial from '@/components/Testimonial';

export const metadata = {
  title: 'About Us - My Green Lab',
  description: 'Learn about My Green Lab\'s mission to create a culture of sustainability through science. Discover our history, team, and global impact.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="Creating a Culture of Sustainability Through Science"
        subtitle="ABOUT MY GREEN LAB"
        description="My Green Lab is a non-profit organization dedicated to transforming laboratory culture worldwide. We provide laboratories with the tools, resources, and certification programs needed to implement sustainable practices while maintaining the highest standards of scientific excellence."
        primaryCta={{ text: "Join Our Mission", href: "/contact" }}
        secondaryCta={{ text: "Support Our Work", href: "/follow" }}
      />

      {/* Mission Section */}
      <section className="py-20 bg-mgl-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  To create a global culture of sustainability in science by providing laboratories 
                  with the tools, resources, and certification programs needed to reduce their 
                  environmental impact while advancing scientific discovery.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe that sustainable laboratory practices not only protect our planet 
                  but also lead to better science, cost savings, and enhanced research outcomes.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                A world where every laboratory operates sustainably, contributing to global 
                environmental goals while advancing human knowledge and innovation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mgl-stats-green rounded-full"></div>
                  <span className="text-gray-700">Environmental stewardship in science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mgl-stats-green rounded-full"></div>
                  <span className="text-gray-700">Sustainable research practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mgl-stats-green rounded-full"></div>
                  <span className="text-gray-700">Global laboratory transformation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together with our partners, we're making a measurable difference in laboratory sustainability worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value={4000}
              suffix="+"
              label="Certified Labs"
              description="Across 50+ countries"
              delay={0}
            />
            <StatsCard
              value={50000}
              suffix="+"
              label="Scientists Trained"
              description="In sustainable practices"
              delay={200}
            />
            <StatsCard
              value={35}
              suffix="%"
              label="Avg. Energy Reduction"
              description="In certified labs"
              delay={400}
            />
            <StatsCard
              value={40}
              suffix="%"
              label="Waste Reduction"
              description="Through green practices"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-mgl-seafoam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded in 2013, My Green Lab began as a grassroots initiative among scientists 
                  who recognized the urgent need for sustainable laboratory practices. What started 
                  as a small community of passionate researchers has grown into a global movement 
                  transforming laboratory culture worldwide.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we partner with academic institutions, pharmaceutical companies, 
                  biotechnology firms, and government agencies to create lasting change in how 
                  laboratories operate and think about their environmental impact.
                </p>
                <p className="text-lg leading-relaxed">
                  Our certification programs, educational resources, and advocacy efforts have 
                  established My Green Lab as the leading authority on laboratory sustainability.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-mgl-lime rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-mgl-dark font-bold">2013</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Founded</h4>
                      <p className="text-sm text-gray-600">Started as a grassroots initiative</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-mgl-program-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2016</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">First Certification</h4>
                      <p className="text-sm text-gray-600">Launched certification program</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-mgl-stats-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2019</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">ACT Ecolabel</h4>
                      <p className="text-sm text-gray-600">Introduced sustainable procurement label</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-mgl-program-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2023</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Expansion</h4>
                      <p className="text-sm text-gray-600">Reached 50+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals driving our mission forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-mgl-lime rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-mgl-dark">CEO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Executive Director</h3>
              <p className="text-gray-600">Leading our global mission with over 15 years of experience in laboratory sustainability</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-mgl-program-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CSO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chief Science Officer</h3>
              <p className="text-gray-600">Driving innovation in sustainable laboratory practices and green chemistry</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-mgl-stats-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">COO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chief Operations Officer</h3>
              <p className="text-gray-600">Ensuring excellence in program delivery and member support worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-mgl-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from organizations that have transformed their laboratories with our help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="My Green Lab has been instrumental in helping us achieve our sustainability goals. Their certification program provided the framework we needed to make meaningful changes."
              author="Dr. James Wilson"
              role="Director of Research Operations"
              organization="Leading Pharmaceutical Company"
              rating={5}
              delay={0}
            />
            
            <Testimonial
              quote="The support and resources from My Green Lab have transformed how we think about laboratory sustainability. We've reduced costs while improving our environmental impact."
              author="Dr. Maria Garcia"
              role="Laboratory Manager"
              organization="Research University"
              rating={5}
              delay={200}
            />
            
            <Testimonial
              quote="My Green Lab's ACT Ecolabel has revolutionized our procurement process. We can now make informed decisions about sustainable products."
              author="Robert Chen"
              role="Procurement Director"
              organization="Biotechnology Company"
              rating={5}
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mgl-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're a laboratory looking to certify, a company seeking partnership, 
            or an individual wanting to support our work, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/certification"
              className="inline-block py-4 px-8 text-lg font-semibold rounded-full bg-mgl-lime text-mgl-dark hover:bg-opacity-90 transition-all duration-300 shadow-lg transform hover:scale-[1.02]"
            >
              Get Your Lab Certified
            </a>
            <a
              href="/follow"
              className="inline-block py-4 px-8 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-mgl-dark transition-all duration-300"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
