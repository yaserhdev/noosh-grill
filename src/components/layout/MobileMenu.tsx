'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  orderUrl: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  orderUrl,
}: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, a, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-noosh-cream shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header — fixed height, overflow hidden keeps logo from pushing it taller */}
        <div className="flex h-[85px] shrink-0 items-center justify-between overflow-hidden border-b border-black/10 px-6">
          <Image
            src="/images/noosh_logo.png"
            alt="Noosh Grill"
            width={160}
            height={64}
            className="h-16 w-auto"
            priority
          />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-noosh-red transition-colors duration-200 hover:bg-noosh-red hover:text-white focus-visible:bg-noosh-red focus-visible:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex flex-1 flex-col px-6 py-8">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-3xl text-noosh-red transition-colors duration-200 hover:text-noosh-green font-[family-name:var(--font-tanker)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-noosh-red px-6 py-3 text-xl text-white transition-colors duration-200 hover:bg-noosh-green font-[family-name:var(--font-tanker)]"
          >
            Order Now
          </a>
        </nav>
      </div>
    </>
  );
}
