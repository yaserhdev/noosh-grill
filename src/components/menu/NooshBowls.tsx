'use client';

import Image from 'next/image';
import { specialtyBowls } from '@/data/menu';
import type { SpecialtyBowl } from '@/types/menu';
import BuildYourOwn from './BuildYourOwn';
import ProteinGrid from './ProteinGrid';
import SauceGrid from './SauceGrid';
import MenuItem from './MenuItem';
import HalalBadge from './HalalBadge';

interface NooshBowlsProps {
  onItemClick: (item: SpecialtyBowl) => void;
}

export default function NooshBowls({ onItemClick }: NooshBowlsProps) {
  return (
    <div
      className="relative order-first rounded-lg bg-white p-6 shadow-lg lg:order-none"
      data-name="Noosh Bowls"
    >
      {/* Column header — taller via py-3 */}
      <h3 className="mb-4 flex items-center justify-center rounded-lg bg-noosh-red-dark px-4 py-3 text-center text-2xl font-bold text-white">
        <Image
          src="/images/noosh-red.png"
          alt=""
          width={75}
          height={75}
          className="mr-2 inline-block w-[75px] align-middle"
          loading="lazy"
        />
        Bowls
      </h3>

      {/* Build Your Own block */}
      <div className="rounded-lg bg-noosh-green px-4 py-4">
        <BuildYourOwn />
        <ProteinGrid />
        <SauceGrid />
      </div>

      {/* Specialty Bowls header — taller via py-3, more space above */}
      <h3 className="mt-8 mb-4 rounded-lg bg-noosh-green px-4 py-3 text-center text-2xl font-bold text-white">
        Specialty Bowls
      </h3>

      <div className="pb-12">
        {specialtyBowls.map((bowl) => (
          <MenuItem key={bowl.name} item={bowl} onItemClick={onItemClick} />
        ))}
      </div>

      <HalalBadge />
    </div>
  );
}