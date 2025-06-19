'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <li>
            <Link
              href="/about"
              className={`relative group ${pathname === '/about' ? 'text-black' : 'text-black'}`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          </li>
          <li>
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
          <div>
            <Link href="/About" onClick={() => setMenuOpen(false)}>
              <div className="relative group">
                About
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300 
                  ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </div>
            </Link>
          </div>
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
