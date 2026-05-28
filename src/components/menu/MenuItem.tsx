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
      <span className="text-xl font-[family-name:var(--font-tanker)]">
        <span className="flex items-center">
          {item.name}
          {item.spicy && <SpicyIndicator />}
        </span>
        <span className="block text-base leading-5 text-noosh-gray font-[family-name:var(--font-montserrat)]">
          {item.description}
        </span>
      </span>
      <span className="ml-4 shrink-0 text-xl font-[family-name:var(--font-tanker)] text-noosh-red">
        {formatPrice(item.price)}
      </span>
    </button>
  );
}
