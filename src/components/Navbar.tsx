"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "./Helper";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Tobams Group Home">
            <div className="flex items-center gap-2">
              {/* Logo SVG matching the design */}
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <ellipse cx="14" cy="18" rx="10" ry="13" fill="#C0204A" />
                <ellipse cx="14" cy="18" rx="6" ry="8" fill="#8B0A3C" />
                <circle cx="24" cy="10" r="7" fill="#E8547A" />
                <circle cx="24" cy="26" r="7" fill="#C0204A" />
                <ellipse cx="34" cy="18" rx="10" ry="13" fill="#8B0A3C" />
                <ellipse cx="34" cy="18" rx="6" ry="8" fill="#5C1048" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[#5C1048] font-extrabold text-sm tracking-wider uppercase">TOBAMS</span>
                <span className="text-[#5C1048] font-extrabold text-sm tracking-wider uppercase">GROUP</span>
              </div>
            </div>
          </Link>

          {/* Desktop right: Account + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="flex items-center gap-2 bg-[#5C1048] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#3D0A30] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5C1048] focus:ring-offset-2"
              aria-haspopup="true"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Account
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Link
              href="#"
              className="bg-[#FF4D6D] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#e63d5d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:ring-offset-2"
            >
              Take Assessment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#5C1048]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop nav links row */}
      <nav className="hidden lg:block border-t border-gray-100" aria-label="Main navigation">
        <div className="max-w-[1440px] mx-auto px-12">
          <ul className="flex items-center gap-8 h-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#5C1048] transition-colors focus:outline-none focus:text-[#5C1048] whitespace-nowrap"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white" aria-label="Mobile navigation">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#5C1048] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-3 pb-4 flex flex-col gap-3">
              <button className="w-full flex items-center justify-center gap-2 bg-[#5C1048] text-white px-5 py-3 rounded-lg font-semibold text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account
              </button>
              <Link href="#" className="w-full text-center bg-[#FF4D6D] text-white px-5 py-3 rounded-lg font-semibold text-sm">
                Take Assessment
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
