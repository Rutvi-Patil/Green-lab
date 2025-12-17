'use client';

import React from 'react';
import Link from 'next/link';
import { FlaskConical } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mgl-light-bg py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and Copyright */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-mgl-dark mb-4 hover:text-mgl-lime transition-colors duration-150">
              <FlaskConical className="w-6 h-6" />
              <span className="logo-text">my green lab.</span>
            </Link>
            <p className="text-sm text-gray-500 mt-8">© 2025 My Green Lab</p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-base font-bold text-gray-800 mb-4">KEY PROGRAMS</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/certification" className="hover:text-mgl-lime transition-colors duration-150">My Green Lab Certification</Link></li>
              <li><Link href="/act-ecolabel" className="hover:text-mgl-lime transition-colors duration-150">ACT® Ecolabel</Link></li>
              <li><Link href="/accredited-professionals" className="hover:text-mgl-lime transition-colors duration-150">Accredited Professionals</Link></li>
              <li><Link href="/resources" className="hover:text-mgl-lime transition-colors duration-150">Resources</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-base font-bold text-gray-800 mb-4">ABOUT US</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-mgl-lime transition-colors duration-150">Contact Us</Link></li>
              <li><Link href="/follow" className="hover:text-mgl-lime transition-colors duration-150">Follow Us</Link></li>
              <li><Link href="/newsletter" className="hover:text-mgl-lime transition-colors duration-150">Newsletter</Link></li>
              <li><Link href="/data-privacy" className="hover:text-mgl-lime transition-colors duration-150">Data Privacy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-mgl-lime transition-colors duration-150">Terms and Conditions</Link></li>
              <li><Link href="/cookie-preferences" className="hover:text-mgl-lime transition-colors duration-150">Cookie Preferences</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-base font-bold text-gray-800 mb-4">LEARN MORE</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/events" className="hover:text-mgl-lime transition-colors duration-150">Events</Link></li>
              <li><Link href="/strategic-plan" className="hover:text-mgl-lime transition-colors duration-150">Our Strategic Plan</Link></li>
              <li><Link href="/sitemap" className="hover:text-mgl-lime transition-colors duration-150">Sitemap</Link></li>
            </ul>
          </div>

          {/* Mailing List/Social */}
          <div className="md:col-span-1">
            <h4 className="text-base font-bold text-gray-800 mb-4">Join our mailing list</h4>
            <p className="text-sm text-gray-600 mb-4">Stay in touch and receive occasional news and updates on programs and initiatives, partner success stories, certification tips, and more!</p>
            <Link href="/newsletter" className="w-full text-base font-bold text-white bg-mgl-lime py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-center inline-block">
              SIGN UP
            </Link>
            <div className="mt-6">
              <h4 className="text-base font-bold text-gray-800 mb-3">FOLLOW US</h4>
              <div className="flex space-x-3">
                {/* Mock Social Icons */}
                <Link href="#" className="text-gray-600 hover:text-mgl-lime transition-colors duration-150"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.656 9.125 8.438 9.874V14.89h-2.28v-2.83h2.28v-2.181c0-2.275 1.4-3.52 3.57-3.52 1.025 0 1.912.074 2.17.106v2.536h-1.503c-1.118 0-1.334.531-1.334 1.31v1.697h2.822l-.462 2.83h-2.36v6.984C18.344 21.125 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg></Link>
                <Link href="#" className="text-gray-600 hover:text-mgl-lime transition-colors duration-150"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.2 6.78a5.1 5.1 0 00-3.6-3.6C15.3 3 12 3 12 3s-3.3 0-4.6.18a5.1 5.1 0 00-3.6 3.6C3 8.1 3 12 3 12s0 3.9.18 5.22a5.1 5.1 0 003.6 3.6C8.7 21 12 21 12 21s3.3 0 4.6-.18a5.1 5.1 0 003.6-3.6C21 15.9 21 12 21 12s0-3.9-.18-5.22zM9.5 15.4V8.6l6.5 3.4-6.5 3.4z"/></svg></Link>
                <Link href="#" className="text-gray-600 hover:text-mgl-lime transition-colors duration-150"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.73.337-1.53.565-2.37.662.83-.5 1.46-1.28 1.76-2.22-.78.47-1.65.81-2.58 1-.74-.79-1.8-1.28-3.03-1.28-2.29 0-4.16 1.86-4.16 4.15 0 .32.03.63.1.93-3.46-.17-6.53-1.84-8.59-4.35-.36.62-.57 1.34-.57 2.13 0 1.44.73 2.7 1.84 3.45-.67-.02-1.3-.2-1.87-.51v.05c0 2.01 1.43 3.69 3.32 4.07-.35.1-.72.15-1.1.15-.27 0-.53-.03-.78-.07.53 1.65 2.06 2.85 3.88 2.89-1.42 1.11-3.21 1.78-5.16 1.78-.33 0-.66-.02-.98-.06 1.83 1.17 3.99 1.86 6.32 1.86 7.58 0 11.72-6.28 11.72-11.73 0-.17-.0-.33-.01-.5-.81-.59-1.83-.98-2.88-1.16z"/></svg></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
