'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { getMenuItemImagePath, formatPrice } from '@/lib/utils';
import type { MenuItem, BurgerItem, SpecialtyBowl } from '@/types/menu';

type ModalItem = MenuItem | BurgerItem | SpecialtyBowl;

const TOAST_ORDER_URL = 'https://noosh.toast.site/order';

interface MenuItemModalProps {
  item: ModalItem | null;
  onClose: () => void;
}

function getDisplayPrice(item: ModalItem): string {
  if ('singlePrice' in item) {
    return `$${formatPrice(item.singlePrice)} / $${formatPrice(item.doublePrice)}`;
  }
  return `$${formatPrice(item.price)}`;
}

function getOrderUrl(item: ModalItem): string {
  return item.toastUrl ?? TOAST_ORDER_URL;
}

export default function MenuItemModal({ item, onClose }: MenuItemModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, a, [tabindex]:not([tabindex="-1"])'
        );
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
    if (!item) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const imagePath = 'image' in item ? getMenuItemImagePath(item.name) : '';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${item.name}`}
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-lg bg-noosh-cream p-6 text-center"
      >
        {'image' in item && imagePath && (
          <Image
            src={imagePath}
            alt={item.name}
            width={400}
            height={300}
            className="mb-4 w-full rounded-lg object-contain"
          />
        )}

        <h3 className="mb-2 text-2xl font-bold text-noosh-red font-[family-name:var(--font-tanker)]">
          {item.name}
        </h3>
        <p className="mb-2 text-lg font-bold text-noosh-red font-[family-name:var(--font-tanker)]">
          {getDisplayPrice(item)}
        </p>
        <p className="mb-4 text-gray-700 font-[family-name:var(--font-montserrat)]">
          {item.description}
        </p>

        <a
          href={getOrderUrl(item)}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 inline-block rounded-md border-2 border-noosh-red bg-noosh-cream px-4 py-2 text-noosh-red transition-colors duration-200 hover:border-noosh-green hover:text-noosh-green font-[family-name:var(--font-tanker)]"
        >
          Order Now
        </a>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="mt-2 block w-full rounded-md bg-noosh-red px-4 py-2 text-white transition-colors duration-200 hover:bg-noosh-green font-[family-name:var(--font-tanker)]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
