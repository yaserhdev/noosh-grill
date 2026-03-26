'use client';

import { burgers, burgerExtras } from '@/data/menu';
import type { BurgerItem as BurgerItemType } from '@/types/menu';
import BurgerItem from './BurgerItem';
import KidsSides from './KidsSides';
import HalalBadge from './HalalBadge';

interface SmashburgersProps {
  onBurgerClick: (item: BurgerItemType) => void;
}

export default function Smashburgers({ onBurgerClick }: SmashburgersProps) {
  return (
    <div
      className="relative order-2 rounded-lg border-2 border-noosh-red bg-white p-6 shadow-lg lg:order-none"
      data-name="Smashburgers"
    >
      <h3 className="-mx-6 -mt-6 mb-4 rounded-lg bg-noosh-red-dark text-center text-2xl text-white font-[family-name:var(--font-tanker)]">
        Smashburgers
      </h3>

      {burgers.map((burger) => (
        <BurgerItem key={burger.name} item={burger} onItemClick={onBurgerClick} />
      ))}

      <p className="pt-4 text-center text-sm font-[family-name:var(--font-tanker)]">
        ALL BURGERS SERVED ON A MARTIN&apos;S POTATO BUN
      </p>

      {/* Extras */}
      <div className="flex justify-center">
        <div className="mt-5 inline-flex flex-wrap justify-center gap-4 rounded-full border border-black p-2 font-[family-name:var(--font-anonymous-pro)]">
          {burgerExtras.map((extra) => (
            <div key={extra.name} className="text-center">
              + {extra.name}{' '}
              <span className="font-bold text-noosh-red">{extra.price}</span>
            </div>
          ))}
        </div>
      </div>

      <KidsSides />

      <HalalBadge />
    </div>
  );
}
