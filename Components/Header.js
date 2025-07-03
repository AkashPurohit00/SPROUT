'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
        setServicesDropdownOpen(false);
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
        <Link href="/">
        <div className="flex items-center ml-16 mb-4 space-x-3">
          <Image src="/images/HD.png" alt="Logo" width={176} height={96} className="h-16 w-42" />
        </div>
        </Link>

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

          {/* Research Service Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className={`relative group flex items-center ${isAboutActive ? 'text-black' : 'text-black'}`}
            >
              Research Services
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

            {/* Desktop Dropdown Menu - Our Services with nested dropdown */}
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-2">
                  <div className="relative">
                    <Link
                      href="/Rservice/Psg"
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200 flex items-center justify-between"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        setServicesDropdownOpen(false);
                      }}
                    >
                     PCG
                      
                    </Link>
                     </div>
                </div>
                 <div className="py-2">
                  <div className="relative">
                    <Link
                      href="/Rservice/Retail"
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200 flex items-center justify-between"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        setServicesDropdownOpen(false);
                      }}
                    >
                      Retail
                      
                    </Link>
                     </div>
                </div>
              </div>
            )}
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

          {/* Login Link */}
          {/* <li>
            <Link
              href="/login"
              className={`relative group ${pathname === '/login' ? 'text-black' : 'text-black'}`}
            >
              Log In
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                ${pathname === '/login' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li> */}
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
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full text-left flex items-center  gap-2"
            >
              <div className="relative group ">
                Research Services
                <span
                  className={`absolute bottom-0 left-0  w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname.startsWith('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Services Submenu */}
            {mobileAboutOpen && (
              <div className="mt-2 pl-4 space-y-2">
                <Link 
                  href="/Rservice/Psg" 
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileAboutOpen(false);
                  }}
                  className="block text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
                >
                 PCG
                </Link>
                <Link 
                  href="/Rservice/Retail" 
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileAboutOpen(false);
                  }}
                  className="block text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
                >
                 Retail
                </Link>
                
              </div>
            )}
          </div>

          {/* Research */}
        
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
          {/* Login Link */}
          {/* <div>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <div className="relative group">
                Log In
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname === '/login' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
            </Link>
          </div> */}
        </div>
      )}
    </header>
  );
};

export default Header;