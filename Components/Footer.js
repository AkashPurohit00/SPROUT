'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  
  // New state for mobile dropdowns
  const [mobileUsefulLinksOpen, setMobileUsefulLinksOpen] = useState(false);
  const [mobileRegulatoryOpen, setMobileRegulatoryOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  // Close desktop dropdown when clicking outside (only for desktop dropdowns)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close desktop dropdowns, not mobile ones
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
        setServicesDropdownOpen(false);
        setMobileAboutOpen(false);
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
          <div className="space-y-4 ">
            <Link href="/">
            <div className="logo flex items-center">
              <Image
                src="/images/HD.png"
                alt="Sprout Partners Logo"
                width={192}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
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

          {/* Useful Links */}
          <div>
            {/* Desktop Header */}
            <h3 className="hidden md:block text-lg font-semibold text-gray-900 mb-4">
              Useful Links
            </h3>
            
            {/* Mobile Dropdown Header */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileUsefulLinksOpen(!mobileUsefulLinksOpen);
              }}
              className="md:hidden flex items-center justify-between w-full text-lg font-semibold text-gray-900 mb-4 py-2 px-1 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              Useful Links
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${mobileUsefulLinksOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Links - Always visible on desktop, conditional on mobile */}
            <ul className={`space-y-2 ${mobileUsefulLinksOpen ? 'block' : 'hidden'} md:block`}>
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
                {/* Desktop About Button */}
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="hidden md:flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Research Services
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile About Button */}
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="md:hidden flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 w-full text-left"
                >
                  Research Services
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Desktop Dropdown */}
                {aboutDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 hidden md:block">
                    <div className="py-2">
                      <div 
                        className="relative group"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        <Link
                          href="/Rservice/Psg"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                        >
                          PCG
                         
                        </Link>
                         <Link
                          href="/Rservice/Retail"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                        >
                          Retail
                         
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Expanded Menu */}
                {mobileAboutOpen && (
                  <div className="md:hidden mt-2 pl-4 space-y-2">
                    <Link 
                      href="/Rservice/Psg" 
                      onClick={() => setMobileAboutOpen(false)}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                    >
                      PCG
                    </Link>
                    <Link 
                      href="/Rservice/Retail" 
                      onClick={() => setMobileAboutOpen(false)}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                    >
                     Retail
                    </Link>
                  </div>
                )}
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
                  href="/Research"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Research
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
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Log In
                </Link>
              </li>

              {/* <li>
                <a
                  href="/admin/Insights"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Admin Panel
                </a>
              </li> */}
            </ul>
          </div>

          {/* Regulatory Disclosures */}
          <div>
            {/* Desktop Header */}
            <h3 className="hidden md:block text-lg font-semibold text-gray-900 mb-4">
              Regulatory Disclosures
            </h3>
            
            {/* Mobile Dropdown Header */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileRegulatoryOpen(!mobileRegulatoryOpen);
              }}
              className="md:hidden flex items-center justify-between w-full text-lg font-semibold text-gray-900 mb-4 py-2 px-1 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              Regulatory Disclosures
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${mobileRegulatoryOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Links - Always visible on desktop, conditional on mobile */}
            <ul className={`space-y-2 ${mobileRegulatoryOpen ? 'block' : 'hidden'} md:block`}>
              <li>
                <a
                  href="/Charter"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                 Investor Charter
                </a>
              </li>
              <li>
                <a
                  href="/Grievance"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                Investor Grievance
                </a>
              </li>
              <li>
                <a
                  href="/Disclaimer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/Report"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                Investor Grievance Report 
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            {/* Desktop Header */}
            <h3 className="hidden md:block text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            
            {/* Mobile Dropdown Header */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileContactOpen(!mobileContactOpen);
              }}
              className="md:hidden flex items-center justify-between w-full text-lg font-semibold text-gray-900 mb-4 py-2 px-1 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              Contact
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${mobileContactOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Contact Info - Always visible on desktop, conditional on mobile */}
            <ul className={`space-y-2 ${mobileContactOpen ? 'block' : 'hidden'} md:block`}>
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
                  +91-9811744587 / +91-7838135315
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
                  sproutresearch.equity@gmail.com
                </a>
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
              href="/PrivacyPolicy"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="/Refund_Cancellation"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Refund &amp; Cancellation
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="/Terms"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="text-gray-600">|</span>
            
                <a
                  href="/admin/Insights"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Admin Panel
                </a>

          </div>
          <p className="text-gray-600 text-sm">Sprout Research © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;