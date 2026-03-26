'use client';

import { subs } from '@/data/menu';
import type { MenuItem as MenuItemType } from '@/types/menu';
import MenuItem from './MenuItem';
import PitaWrap from './PitaWrap';
import HalalBadge from './HalalBadge';

interface SubsProps {
  onItemClick: (item: MenuItemType) => void;
}

export default function Subs({ onItemClick }: SubsProps) {
  return (
    <div
      className="relative order-last rounded-lg border-2 border-noosh-red bg-white p-6 shadow-lg lg:order-none"
      data-name="Subs"
    >
      <h3 className="-mx-6 -mt-6 mb-4 rounded-lg bg-noosh-red-dark text-center text-2xl text-white font-[family-name:var(--font-tanker)]">
        SUBS
      </h3>

      {subs.map((sub) => (
        <MenuItem key={sub.name} item={sub} onItemClick={onItemClick} />
      ))}

      <p className="mt-6 mb-10 text-center text-sm font-[family-name:var(--font-tanker)]">
        Served on fresh baked seeded rolls from our neighbor, Just Baked Bakery
      </p>

      <PitaWrap />

      <HalalBadge />
    </div>
  );
}
