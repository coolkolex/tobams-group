import Link from "next/link";
import { whatWeDo, company, solution } from "./Helper";

export default function Footer() {
  return (
    <footer className="bg-[#1A0A2E] text-white" aria-label="Site footer">
      {/* Main footer grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:w-72 flex-shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <svg width="44" height="32" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <ellipse cx="14" cy="18" rx="10" ry="13" fill="#C0204A" />
                <ellipse cx="14" cy="18" rx="6" ry="8" fill="#8B0A3C" />
                <circle cx="24" cy="10" r="7" fill="#E8547A" />
                <circle cx="24" cy="26" r="7" fill="#C0204A" />
                <ellipse cx="34" cy="18" rx="10" ry="13" fill="#8B0A3C" />
                <ellipse cx="34" cy="18" rx="6" ry="8" fill="#5C1048" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-sm tracking-wider uppercase">TOBAMS</span>
                <span className="text-white font-extrabold text-sm tracking-wider uppercase">GROUP</span>
              </div>
            </div>

            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent
              development in Africa, specializing in talent acquisition, internships, and skill
              development with a global perspective.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A0A2E]"
                aria-label="Tobams Group on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A0A2E]"
                aria-label="Tobams Group on Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A0A2E]"
                aria-label="Tobams Group on X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* What We Do */}
            <nav aria-label="What We Do links">
              <h3 className="text-white font-bold text-base mb-5">What We Do</h3>
              <ul className="flex flex-col gap-3">
                {whatWeDo.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company links">
              <h3 className="text-white font-bold text-base mb-5">Company</h3>
              <ul className="flex flex-col gap-3">
                {company.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Solution */}
            <nav aria-label="Solution links">
              <h3 className="text-white font-bold text-base mb-5">Solution</h3>
              <ul className="flex flex-col gap-3">
                {solution.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Registered Offices + Contact */}
        <div className="mt-12 border border-white/15 rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* Offices */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-base mb-5">Registered Offices</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <address className="not-italic">
                  <p className="text-[#FF4D6D] font-semibold text-sm mb-1">United Kingdom</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    07451196 (Registered by Company House)<br />
                    Vine Cottages, 215 North Street, Romford,<br />
                    Essex, United Kingdom, RM1 4QA
                  </p>
                </address>
                <div className="hidden md:block w-px bg-white/15" aria-hidden="true" />
                <address className="not-italic">
                  <p className="text-[#FF4D6D] font-semibold text-sm mb-1">Nigeria</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </address>
              </div>
            </div>

            <div className="hidden lg:block w-px bg-white/15 mx-10" aria-hidden="true" />

            {/* Contact */}
            <div className="lg:w-72 flex-shrink-0">
              <h3 className="text-white font-bold text-base mb-5">Contact Information</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:theteam@tobamsgroup.com"
                  className="flex items-center gap-3 text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  <span className="w-7 h-7 rounded-full bg-[#5C1048] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </span>
                  theteam@tobamsgroup.com
                </a>
                <a
                  href="tel:+447886600748"
                  className="flex items-center gap-3 text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  <span className="w-7 h-7 rounded-full bg-[#5C1048] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </span>
                  +447886600748
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            Copyright &copy; Tobams Group, 2026. All rights reserved.
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal links">
            <Link href="#" className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white underline">
              Terms and Conditions
            </Link>
            <Link href="#" className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/65 text-sm hover:text-white transition-colors focus:outline-none focus:text-white underline">
              Cookies Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
