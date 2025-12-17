import { Metadata } from 'next';
import { createPageMetadata, createBreadcrumbSchema, createFAQSchema } from '@/utils/metadata';

// Page-specific metadata
const pageMetadata = createPageMetadata({
  title: 'Data Privacy Policy | My Green Lab - Privacy & Data Protection',
  description: 'Read My Green Lab\'s comprehensive data privacy policy. Learn how we collect, use, and protect your personal information when you use our green lab certification and sustainability services.',
  keywords: 'My Green Lab data privacy, privacy policy, data protection, GDPR compliance, personal information, laboratory certification privacy, green lab data security',
  canonical: 'https://mygreenlab.org/data-privacy',
  openGraph: {
    type: 'website',
    url: 'https://mygreenlab.org/data-privacy',
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  twitter: {
    image: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  },
  jsonLd: [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://mygreenlab.org/' },
      { name: 'Data Privacy Policy', url: 'https://mygreenlab.org/data-privacy' }
    ]),
    createFAQSchema([
      {
        question: 'What personal information does My Green Lab collect?',
        answer: 'We collect personal information you voluntarily provide such as name, contact details, professional information, account credentials, and payment information. We also automatically collect technical information like IP address and browsing behavior.'
      },
      {
        question: 'How does My Green Lab protect my data?',
        answer: 'We implement SSL encryption, regular security assessments, access controls, and employee training on data protection. However, no internet transmission method is 100% secure.'
      },
      {
        question: 'Can I access or delete my personal data?',
        answer: 'Yes, you have rights to access, correct, delete, or transfer your personal information. Contact us at privacy@mygreenlab.org to exercise these privacy rights.'
      },
      {
        question: 'Does My Green Lab share data with third parties?',
        answer: 'We do not sell your data. We only share information with service providers, for legal compliance, business transfers, or program partners with your consent as described in our privacy policy.'
      }
    ])
  ]
});

// Generate metadata for server-side rendering
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
    openGraph: pageMetadata.openGraph,
    twitter: pageMetadata.twitter,
    alternates: {
      canonical: pageMetadata.canonical,
    },
    other: {
      'application/ld+json': JSON.stringify(pageMetadata.jsonLd),
    },
  };
}

export default function DataPrivacyPage() {
  return (
  <div className="bg-white">

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
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
    </div>
  );
}
