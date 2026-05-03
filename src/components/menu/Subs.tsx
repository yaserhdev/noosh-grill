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
      className="relative order-last rounded-lg bg-white p-6 pb-20 shadow-lg lg:order-none"
      data-name="Subs"
    >
      {/* Column header — taller via py-3 */}
      <h3 className="mb-4 rounded-lg bg-noosh-red-dark px-4 py-3 text-center text-2xl text-white">
        SUBS
      </h3>

      {subs.map((sub) => (
        <MenuItem key={sub.name} item={sub} onItemClick={onItemClick} />
      ))}

      <p className="mt-6 mb-10 text-center text-sm">
        Served on fresh baked seeded rolls from our neighbor, Just Baked Bakery
      </p>

      <PitaWrap />

      <HalalBadge />
    </div>
  );
}