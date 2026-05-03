'use client';

import { useState } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

/* ============================================================
   Navbar
   ------------------------------------------------------------
   Matches eatnoosh.com behavior:
   - Always visible (no hide on scroll)
   - Solid dark green-black background
   - Logo aligned with left edge of menu columns
   - Links/CTA aligned with right edge of menu columns
   - Mobile drawer at lg breakpoint (1024px)

   Premium polish layered in:
   - Backdrop-blur for subtle depth on scroll-through
   - Underline reveal on link hover
   - Logo micro-scale on hover
   - GPU-accelerated transitions throughout
   ============================================================ */

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#food-menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
];

const ORDER_URL = 'https://noosh.toast.site/order';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-30 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(20, 31, 13, 0.92)' }}
      >
        {/*
          Container alignment:
          - max-w-[2000px] matches MenuSection's grid max-width
          - mx-5 matches the menu's mx-5 (20px gutters)
          → Logo and rightmost item land exactly on the menu column edges
        */}
        <nav
          aria-label="Primary"
          className="mx-5 flex h-[85px] max-w-[2000px] items-center justify-between max-[500px]:h-[65px] xl:mx-auto xl:px-5"
        >
          {/* Logo — left edge of menu columns */}
          <a
            href="#"
            aria-label="Noosh Grill home"
            className="group flex shrink-0 items-center transition-transform duration-300 ease-out hover:scale-[1.03]"
          >
            <Image
              src="/images/noosh_logo.png"
              alt="Noosh Grill"
              width={200}
              height={80}
              priority
              className="h-25 w-auto max-[500px]:h-11"
            />
          </a>

          {/* Desktop nav — right edge of menu columns */}
          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-2xl text-noosh-cream transition-colors duration-200 hover:text-noosh-red font-[family-name:var(--font-tanker)]"
                >
                  {link.label}
                  {/* Underline reveal on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-noosh-red transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-noosh-red px-6 py-2.5 text-2xl text-white shadow-lg shadow-noosh-red/20 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:bg-noosh-red-dark hover:shadow-xl hover:shadow-noosh-red/30 active:translate-y-0 font-[family-name:var(--font-tanker)]"
              >
                Order Now
              </a>
            </li>
          </ul>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-noosh-cream transition-colors duration-200 hover:bg-white/10 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </header>

      <div id="mobile-menu">
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          links={NAV_LINKS}
          orderUrl={ORDER_URL}
        />
      </div>
    </>
  );
}