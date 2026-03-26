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
      className="menu-item flex w-full justify-between py-2.5 text-left transition-colors duration-200 hover:text-noosh-gold-bright"
      onClick={() => onItemClick(item)}
      aria-label={`View details for ${item.name}`}
    >
      <span className="text-xl">
        <span className="flex items-center">
          {item.name}
          {item.spicy && <SpicyIndicator />}
        </span>
        <div className="flex w-full">
          <span className="w-[62%] font-[family-name:var(--font-anonymous-pro)] text-base leading-5 text-noosh-gray">
            {item.description}
          </span>
          <div className="ml-auto flex w-[25%] flex-col justify-start">
            <div className="flex justify-between">
              <span className="text-black">Single</span>
              <span className="font-bold text-noosh-red">
                {formatPrice(item.singlePrice)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">Double</span>
              <span className="font-bold text-noosh-red">
                {formatPrice(item.doublePrice)}
              </span>
            </div>
          </div>
        </div>
      </span>
    </button>
  );
}
