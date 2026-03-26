'use client';

import { useState } from 'react';
import type { MenuItem, BurgerItem, SpecialtyBowl } from '@/types/menu';
import NooshBowls from '../menu/NooshBowls';
import Smashburgers from '../menu/Smashburgers';
import Subs from '../menu/Subs';
import MenuItemModal from '../menu/MenuItemModal';

type ModalItem = MenuItem | BurgerItem | SpecialtyBowl;

export default function MenuSection() {
  const [selectedItem, setSelectedItem] = useState<ModalItem | null>(null);

  const handleItemClick = (item: ModalItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section
      id="food-menu"
      className="flex w-full flex-col items-center justify-center bg-noosh-cream pt-15"
    >
      <h2 className="px-8 pb-10 text-center text-4xl max-md:hidden">
        Fresh Ingredients, Fresh Taste
      </h2>

      <div className="mx-5 mb-20 flex items-center justify-center">
        <div className="grid w-full max-w-[2000px] grid-cols-1 gap-5 lg:grid-cols-3">
          <NooshBowls onItemClick={handleItemClick} />
          <Smashburgers onBurgerClick={handleItemClick} />
          <Subs onItemClick={handleItemClick} />
        </div>
      </div>

      <MenuItemModal item={selectedItem} onClose={handleCloseModal} />
    </section>
  );
}
