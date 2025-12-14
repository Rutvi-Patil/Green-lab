import Link from 'next/link';

const Footer = () => {
  const keyPrograms = [
    { href: "/certification", label: "My Green Lab Certification" },
    { href: "/act-ecolabel", label: "ACT® Ecolabel" },
    { href: "/accredited-professionals", label: "Accredited Professionals" },
    { href: "/resources", label: "Resources" },
  ];

  const aboutUs = [
    { href: "/contact", label: "Contact Us" },
    { href: "/follow", label: "Follow Us" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/terms", label: "Terms and Conditions" },
    { href: "/privacy", label: "Data Privacy" },
    { href: "/cookies", label: "Cookie Preferences" },
  ];

  const learnMore = [
    { href: "/events", label: "Events" },
    { href: "/careers", label: "Careers" },
    { href: "/strategic-plan", label: "Our Strategic Plan" },
    { href: "/sitemap", label: "Sitemap" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/my-green-lab",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/mygreenlab",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c-.15 4.354-2.227 8.017-6.066 8.017-1.488 0-2.868-.458-4.043-1.233 1.544.172 3.097-.243 4.414-1.189-1.484-.047-2.828-.971-3.264-2.279.44.08.86.062 1.257-.043-1.503-.324-2.766-1.62-2.766-3.204 1-.502 2.7-.272 3.32.107-1.054-.919-2.073-2.613-2.073-4.103 0-1.08.312-2.184 1.139-3.098 1.545 1.7 3.627 2.844 5.92 2.943-.076-.231-.13-.473-.13-.722 0-1.742 1.411-3.153 3.153-3.153.916 0 1.748.384 2.336 1.004.72-.14 1.405-.426 2.016-.767-.233.729-.757 1.396-1.428 1.796 1.251-.157 2.031-.482 2.548-.684z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/mygreenlab",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/c/mygreenlab",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-mgl-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-gray-700 pb-10 mb-8">
          {/* Logo/Branding */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-white mb-6">
              <div className="w-6 h-6 rounded-full bg-mgl-lime"></div>
              <span>my green lab.</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Accelerating sustainability and environmental responsibility in scientific laboratories worldwide.
            </p>
            <p className="text-sm text-gray-400">&copy; 2025 My Green Lab</p>
          </div>

          {/* Key Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mgl-lime">KEY PROGRAMS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {keyPrograms.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mgl-lime">ABOUT US</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {aboutUs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mgl-lime">LEARN MORE</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {learnMore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-mgl-lime">JOIN OUR MAILING LIST</h4>
            <p className="text-sm text-gray-400 mb-4">
              Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!
            </p>
            <Link
              href="/newsletter"
              className="inline-block w-full py-2 bg-mgl-lime text-mgl-dark font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-200 text-center"
            >
              SIGN UP
            </Link>
            
            <h4 className="text-lg font-semibold mt-8 mb-4 text-mgl-lime">FOLLOW US</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 My Green Lab. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
