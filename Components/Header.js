'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
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

  const isAboutActive = pathname.startsWith('/about');

  return (
    <header className="bg-white text-white p-4">
      <nav className="container mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center ml-16 mb-4 space-x-3">
          <img src="/images/pic2.jpg" alt="Logo" className="h-24 w-44" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 mr-56 text-xl font-medium">
          <li>
            <Link
              href="/"
              className={`relative group ${pathname === '/' ? 'text-black' : 'text-black'}`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className={`relative group flex items-center ${isAboutActive ? 'text-black' : 'text-black'}`}
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
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                ${isAboutActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </button>

            {/* Desktop Dropdown Menu  our team and our services */}
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
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
            {/* Research Link */}
            <Link
              href="/Research"
              className={`relative group ${pathname === '/Research' ? 'text-black' : 'text-black'}`}
            >
              Research
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                ${pathname === '/Research' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li>
           {/* Insights Link */}
          <li>
            <Link
              href="/Insights"
              className={`relative group ${pathname === '/Insights' ? 'text-black' : 'text-black'}`}
            >
              Insights
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                ${pathname === '/Insights' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                ${pathname === '/Insights' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li>
          {/* Contact Link */}
          <li>
            <Link
              href="/Contact"
              className={`relative group ${pathname === '/Contact' ? 'text-black' : 'text-black'}`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                ${pathname === '/Contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden pr-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-xl font-medium text-black">
          {/* Mobile Home Link */}
          <div>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <div className="relative group">
                Home
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
            </Link>
          </div>

          {/* Mobile About Dropdown */}
          <div>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <div className="relative group">
                About
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
            )}
          </div>

          {/* Research, s */}
          <div>
            <Link href="/Research" onClick={() => setMenuOpen(false)}>
              <div className="relative group">
                Research
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname === '/Research' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
            </Link>
          </div>
          {/* Insights Link */}
          <div>
            <Link href="/Insights" onClick={() => setMenuOpen(false)}>
              <div className="relative group">
                Insights
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname === '/Insights' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
            </Link>
          </div>
          {/* Contact Link */}
          <div>
            <Link href="/Contact" onClick={() => setMenuOpen(false)}>
              <div className="relative group">
                Contact
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname === '/Contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
