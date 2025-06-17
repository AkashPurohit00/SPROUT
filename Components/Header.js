'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white text-white p-4">
      <nav className="container mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center ml-16 mb-4 space-x-3">
          <img src="/images/pic2.jpg" alt="Logo" className="h-24 w-44" />
        </div>

        <ul className="flex space-x-8 mr-56 text-xl font-medium">
          {/* Home */}
          <li>
            <Link
              href="/"
              className={`relative group ${pathname === '/' ? 'text-black' : 'text-black'}`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300
                  ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              href="/about"
              className={`relative group ${pathname === '/about' ? 'text-black' : 'text-black'}`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300
                  ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>
          </li>

          {/* Research */}
          <li>
            <Link
              href="/research"
              className={`relative group ${pathname === '/research' ? 'text-black' : 'text-black'}`}
            >
              Research
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300
                  ${pathname === '/research' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>
          </li>

          {/* Insights */}
          <li>
            <Link
              href="/insights"
              className={`relative group ${pathname === '/insights' ? 'text-black' : 'text-black'}`}
            >
              Insights
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300
                  ${pathname === '/insights' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              className={`relative group ${pathname === '/contact' ? 'text-black' : 'text-black'}`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black origin-right transition-transform duration-300
                  ${pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
