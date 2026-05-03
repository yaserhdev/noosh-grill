'use client';

import { burgers, burgerExtras } from '@/data/menu';
import type { BurgerItem as BurgerItemType } from '@/types/menu';
import { formatPrice } from '@/lib/utils';
import BurgerItem from './BurgerItem';
import KidsSides from './KidsSides';
import HalalBadge from './HalalBadge';

interface SmashburgersProps {
  onBurgerClick: (item: BurgerItemType) => void;
}

export default function Smashburgers({ onBurgerClick }: SmashburgersProps) {
  return (
    <div
      className="relative order-2 rounded-lg bg-white p-6 pb-20 shadow-lg lg:order-none"
      data-name="Smashburgers"
    >
      {/* Column header — taller via py-3 */}
      <h3 className="mb-4 rounded-lg bg-noosh-red-dark px-4 py-3 text-center text-2xl text-white">
        Smashburgers
      </h3>

      {burgers.map((burger) => (
        <BurgerItem key={burger.name} item={burger} onItemClick={onBurgerClick} />
      ))}

      <p className="pt-4 text-center text-sm">
        ALL BURGERS SERVED ON A MARTIN&apos;S POTATO BUN
      </p>

      {/* Extras — prices in Tanker to match menu price style */}
      <div className="flex justify-center">
        <div className="mt-5 inline-flex flex-wrap justify-center gap-4 rounded-full border border-black p-2">
          {burgerExtras.map((extra) => (
            <div key={extra.name} className="text-center">
              + {extra.name}{' '}
              <span className="text-noosh-red font-[family-name:var(--font-tanker)]">
                {formatPrice(extra.price)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <KidsSides />

      <HalalBadge />
    </div>
  );
}