'use client';

export default function DataPrivacyPage() {
  return (
    <div className="bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <span>my green lab.</span>
              </a>
            </div>
            {/* Desktop Links */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#" className="nav-link text-gray-700 hover:text-green-500">How to Green Your Lab</a>
              <a href="/certification" className="nav-link text-gray-700 hover:text-green-500">Programs</a>
              <a href="/resources" className="nav-link text-gray-700 hover:text-green-500">Resources</a>
              <a href="#" className="nav-link text-gray-700 hover:text-green-500">The Beaker Blog</a>
              <a href="/about" className="nav-link text-gray-700 hover:text-green-500">About Us</a>
              <a href="#" className="nav-link text-gray-700 hover:text-green-500">Get Involved</a>
            </nav>
            {/* CTA */}
            <div className="hidden md:block">
              <button className="flex items-center text-gray-700 text-sm font-medium hover:text-green-500 transition duration-300">
                Give Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-green-500 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Data Privacy Policy
            </h1>
            <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500">Last updated: December 2025</p>
          </div>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                My Green Lab ("we," "us," or "our") is committed to protecting your privacy. This Data Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our organization.
              </p>
              <p className="text-gray-700">
                By using our website and services, you consent to collection and use of information as described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Professional information (job title, organization, laboratory affiliation)</li>
                <li>Account credentials (username, password)</li>
                <li>Payment information (when applicable)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Providing and maintaining our services and programs</li>
                <li>Processing registrations and applications</li>
                <li>Communicating with you about our programs and services</li>
                <li>Sending newsletters and marketing communications (with your consent)</li>
                <li>Improving our website and user experience</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and ensuring security</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and services.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights, property, or safety.</li>
                <li><strong>Program Partners:</strong> With your consent, we may share relevant information with program partners for certification and accreditation purposes.</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Secure socket layer (SSL) encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication systems</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Improve our website functionality</li>
              </ul>
              <p className="text-gray-700">
                You can control cookie settings through your browser preferences, but disabling cookies may affect your experience on our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Websites</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for privacy practices of these external sites. We encourage you to review privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Data Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Data Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@mygreenlab.org</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700 mb-2"><strong>Mail:</strong> My Green Lab<br />123 Sustainability Way<br />Green City, GC 12345<br />United States</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-8">
            {/* Logo/Branding */}
            <div>
              <a href="/" className="flex items-center space-x-2 text-xl font-bold text-white mb-6">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <span>my green lab.</span>
              </a>
              <p className="text-sm text-gray-400">&copy; 2025 My Green Lab</p>
            </div>

            {/* Key Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-500">KEY PROGRAMS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/certification" className="hover:text-white transition">My Green Lab Certification</a></li>
                <li><a href="/act-ecolabel" className="hover:text-white transition">ACT® Ecolabel</a></li>
                <li><a href="#" className="hover:text-white transition">ECoLab®</a></li>
                <li><a href="/accredited-professionals" className="hover:text-white transition">Accreditations</a></li>
                <li><a href="/resources" className="hover:text-white transition">Resources</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-500">ABOUT US</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="/newsletter" className="hover:text-white transition">Newsletter</a></li>
                <li><a href="/data-privacy" className="hover:text-white transition">Data Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Preferences</a></li>
              </ul>
            </div>

            {/* Join Our Mailing List */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-500">JOIN OUR MAILING LIST</h4>
              <p className="text-sm text-gray-400 mb-4">Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!</p>
              <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">SIGN UP</button>
              
              <h4 className="text-lg font-semibold mt-8 mb-4 text-green-500">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm7 6h-2v-3c0-2.324-1.127-2.324-1.25-.921v3.921h-2v-6h2v.975c.346-.576 1.157-1.175 2.181-1.175 2.518 0 2.819 1.636 2.819 4.314v2.886z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c-.15 4.354-2.227 8.017-6.066 8.017-1.488 0-2.868-.458-4.043-1.233 1.544.172 3.097-.243 4.414-1.189-1.484-.047-2.828-.971-3.264-2.279.44.08.86.062 1.257-.043-1.503-.324-2.766-1.62-2.766-3.204 1-.502 2.7-.272 3.32.107-1.054-.919-2.073-2.613-2.073-4.103 0-1.08.312-2.184 1.139-3.098 1.545 1.7 3.627 2.844 5.92 2.943-.076-.231-.13-.473-.13-.722 0-1.742 1.411-3.153 3.153-3.153.916 0 1.748.384 2.336 1.004.72-.14 1.405-.426 2.016-.767-.233.729-.757 1.396-1.428 1.796 1.251-.157 2.031-.482 2.548-.684z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            &copy; 2025 My Green Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
