export const metadata = {
  title: 'Terms and Conditions - My Green Lab',
  description: 'Read My Green Lab\'s terms and conditions for using our website, services, and certification programs.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using My Green Lab's website, services, and certification programs.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to My Green Lab. These Terms and Conditions govern your use of our website, services, and certification programs (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and Conditions.
              </p>
              <p className="text-gray-600">
                My Green Lab is a non-profit organization dedicated to creating a culture of sustainability in science. Our Services include laboratory certification programs, educational resources, and sustainability consulting.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Services Description</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  My Green Lab provides the following services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>My Green Lab Certification Program</li>
                  <li>ACT® Ecolabel Program</li>
                  <li>Accredited Professionals Program</li>
                  <li>Educational resources and training materials</li>
                  <li>Consulting services for laboratory sustainability</li>
                  <li>Events and workshops</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
              <div className="space-y-4 text-gray-600">
                <p>As a user of our Services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when required</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our Services for lawful purposes only</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with or disrupt our Services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Certification Program Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Certification Program Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>Specific terms apply to our certification programs:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Certification is subject to compliance with program requirements</li>
                  <li>My Green Lab reserves the right to revoke certification for non-compliance</li>
                  <li>Certification fees are non-refundable unless otherwise specified</li>
                  <li>Certified laboratories must maintain ongoing compliance</li>
                  <li>Use of My Green Lab certification marks requires proper attribution</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, trademarks, service marks, logos, and intellectual property on this website are the exclusive property of My Green Lab. You may not use, reproduce, or distribute any of our intellectual property without prior written consent.
              </p>
              <p className="text-gray-600">
                My Green Lab, My Green Lab Certification, ACT Ecolabel, and related marks are registered trademarks of My Green Lab, Inc.
              </p>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
              <p className="text-gray-600">
                By using our Services, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                My Green Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Services.
              </p>
              <p className="text-gray-600">
                Our total liability for any claims arising from the Services shall not exceed the amount you paid for the Services in the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify and hold My Green Lab harmless from any claims, damages, or expenses arising from your use of the Services, violation of these Terms, or violation of any rights of another.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Termination</h2>
              <p className="text-gray-600 mb-4">
                My Green Lab may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the Services will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Governing Law</h2>
              <p className="text-gray-600">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Massachusetts, United States, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Changes to Terms</h2>
              <p className="text-gray-600">
                My Green Lab reserves the right to modify these Terms and Conditions at any time. We will notify users of any changes by posting the new Terms and Conditions on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Email:</strong> info@mygreenlab.org</p>
                <p className="text-gray-600 mb-2"><strong>Website:</strong> www.mygreenlab.org</p>
                <p className="text-gray-600"><strong>Address:</strong> My Green Lab, Inc.</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: December 17, 2025
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
