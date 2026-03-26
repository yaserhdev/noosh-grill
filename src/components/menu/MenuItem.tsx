'use client';

import type { MenuItem as MenuItemType, SpecialtyBowl } from '@/types/menu';
import { formatPrice } from '@/lib/utils';
import SpicyIndicator from './SpicyIndicator';

interface MenuItemProps {
  item: MenuItemType | SpecialtyBowl;
  onItemClick: (item: MenuItemType | SpecialtyBowl) => void;
}

export default function MenuItem({ item, onItemClick }: MenuItemProps) {
  return (
    <button
      type="button"
      className="menu-item flex w-full justify-between py-2.5 text-left transition-colors duration-200 hover:text-noosh-gold-bright"
      onClick={() => onItemClick(item)}
      aria-label={`View details for ${item.name}`}
    >
      <span className="text-xl">
        <span className="flex items-center">
          {item.name}
          {item.spicy && <SpicyIndicator />}
        </span>
        <span className="block font-[family-name:var(--font-anonymous-pro)] text-base text-noosh-gray">
          {item.description}
        </span>
      </span>
      <span className="ml-4 shrink-0 text-xl text-noosh-red">
        {formatPrice(item.price)}
      </span>
    </button>
  );
}
