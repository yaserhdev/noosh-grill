'use client';

import type { BurgerItem as BurgerItemType } from '@/types/menu';
import { formatPrice } from '@/lib/utils';
import SpicyIndicator from './SpicyIndicator';

interface BurgerItemProps {
  item: BurgerItemType;
  onItemClick: (item: BurgerItemType) => void;
}

export default function BurgerItem({ item, onItemClick }: BurgerItemProps) {
  return (
    <button
      type="button"
      className="menu-item flex w-full justify-between py-2.5 pr-0 text-left font-[family-name:var(--font-tanker)] transition-colors duration-200 hover:text-noosh-gold-bright"
      onClick={() => onItemClick(item)}
      aria-label={`View details for ${item.name}`}
    >
      <span className="w-full text-xl">
        <span className="flex items-center">
          {item.name}
          {item.spicy && <SpicyIndicator />}
        </span>
        <div className="flex w-full">
          <span className="w-[62%] text-base leading-5 text-noosh-gray font-[family-name:var(--font-montserrat)]">
            {item.description}
          </span>
          <div className="ml-auto flex w-[30%] flex-col justify-start text-base">
            <div className="flex justify-between">
              <span className="text-black font-[family-name:var(--font-tanker)]">Single</span>
              <span className="font-bold text-noosh-red font-[family-name:var(--font-tanker)]">
                {formatPrice(item.singlePrice)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-black font-[family-name:var(--font-tanker)]">Double</span>
              <span className="font-bold text-noosh-red font-[family-name:var(--font-tanker)]">
                {formatPrice(item.doublePrice)}
              </span>
            </div>
          </div>
        </div>
      </span>
    </button>
  );
}
