'use client';

import { subs } from '@/data/menu';
import type { MenuItem as MenuItemType } from '@/types/menu';
import MenuItem from './MenuItem';
import PitaWrap from './PitaWrap';
import HalalBadge from './HalalBadge';

interface SubsProps {
  onItemClick: (item: MenuItemType) => void;
  className?: string;
}

export default function Subs({ onItemClick, className = '' }: SubsProps) {
  return (
    <div
      className={`relative rounded-lg bg-white p-6 pb-20 shadow-lg ${className}`}
      data-name="Subs"
    >
      <h3 className="mb-4 rounded-lg bg-noosh-red-dark px-4 py-3 text-center text-2xl text-white">
        SUBS
      </h3>

      {subs.map((sub) => (
        <MenuItem key={sub.name} item={sub} onItemClick={onItemClick} />
      ))}

      <PitaWrap />

      <HalalBadge />
    </div>
  );
}
