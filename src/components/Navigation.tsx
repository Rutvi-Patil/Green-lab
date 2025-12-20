'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FlaskConical, X, Menu } from 'lucide-react';

interface NavListItem {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks: NavListItem[] = [
    { name: 'How to Green Your Lab', href: '/certification' },
    { name: 'Programs', href: '#' },
    { name: 'Resources', href: '/resources' },
    { name: 'Get Involved', href: '/contact' },
  ];

  // Check if device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
      // Close menu when switching to desktop
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-mgl-dark hover:text-mgl-lime transition-colors duration-150">
          <FlaskConical className="w-8 h-8" />
          <span className="logo-text">my green lab.</span>
        </Link>
        
        {/* Navigation and Actions - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-600 hover:text-mgl-lime transition-colors duration-150">
              {link.name}
            </Link>
          ))}
          <Link href="/give" className="text-sm font-semibold text-mgl-dark border border-mgl-dark py-2 px-4 rounded-full hover:bg-mgl-lime hover:text-white transition-colors duration-150">
            GIVE NOW
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-50 p-2 text-gray-600 hover:text-mgl-lime transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-mgl-lime focus:ring-offset-2 rounded-md"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 transition-transform duration-300" />
          ) : (
            <Menu className="h-6 w-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-xl font-bold text-mgl-dark"
              onClick={closeMobileMenu}
            >
              <FlaskConical className="w-6 h-6" />
              <span className="logo-text">my green lab.</span>
            </Link>
            <button 
              className="p-2 text-gray-600 hover:text-mgl-lime transition-colors duration-150 rounded-md"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 text-gray-600 hover:text-mgl-lime hover:bg-gray-50 rounded-lg transition-colors duration-150 text-base font-medium"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA Button */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/give"
                className="block w-full py-3 px-6 text-sm font-semibold text-mgl-dark border border-mgl-dark rounded-full hover:bg-mgl-lime hover:text-white transition-colors duration-150 text-center"
                onClick={closeMobileMenu}
              >
                GIVE NOW
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
