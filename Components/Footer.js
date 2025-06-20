'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer id="footer" className="bg-[#C6DDE9] py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="logo flex items-center">
              <Image
                src="/images/pic2.jpg"
                alt="Sprout Partners Logo"
                width={192}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leverage the unparalleled expertise and strategic guidance of
              Sprout Partners. Our team excels in financial restructuring,
              developing business strategies and crafting tailored financial
              models and strategic insights across a wide range of sectors.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  About
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link
                        href="/about/our-team"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        Our Team
                      </Link>
                      <Link
                        href="/about/our-services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        Our Services
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/Research"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/Insights"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/admin/Insights"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+91-7838135315"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  +91-7838135315
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:team@sproutpartners.in"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  team@sproutpartners.in
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  2nd Floor, Indure House, Savitri Cinema Complex, Greater
                  Kailash-II, New Delhi-110048
                </span>
              </li>
            </ul>
          </div>

          {/* Placeholder for spacing */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#privacy-policy"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#data-security"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Data &amp; Security
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#terms-of-service"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-gray-600 text-sm">© 2022 Circle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;