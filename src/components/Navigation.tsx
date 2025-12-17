'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FlaskConical } from 'lucide-react';

interface NavListItem {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavListItem[] = [
    { name: 'How to Green Your Lab', href: '/certification' },
    { name: 'Programs', href: '#' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' },
    { name: 'Get Involved', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-green-700 hover:text-green-800 transition">
          <FlaskConical className="w-8 h-8" />
          <span>my green lab.</span>
        </Link>
        
        {/* Navigation and Actions - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-600 hover:text-green-700 transition duration-150">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="text-sm font-semibold text-green-700 border border-green-700 py-2 px-4 rounded-full hover:bg-green-50 transition duration-150">
            GIVE NOW
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button 
          className="lg:hidden text-gray-600 hover:text-green-700"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-7xl px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-green-700 transition duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-2 text-sm font-semibold text-green-700 border border-green-700 rounded-full hover:bg-green-50 transition duration-150 text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GIVE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
