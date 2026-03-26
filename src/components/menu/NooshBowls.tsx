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
      className="relative order-first rounded-lg border-2 border-noosh-red bg-white shadow-lg lg:order-none"
      data-name="Noosh Bowls"
    >
      {/* Header */}
      <h3 className="mx-0 mb-4 flex items-center justify-center rounded-lg bg-noosh-red-dark text-center text-2xl font-bold text-white">
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

      {/* Build Your Own section — IN NORMAL FLOW (no absolute positioning) */}
      <div className="bg-noosh-green px-6 py-3 -mt-3">
        <BuildYourOwn />
        <ProteinGrid />
        <SauceGrid />
      </div>

      {/* Specialty Bowls — flows naturally below, no margin-top hacks needed */}
      <h3 className="mx-0 mb-4 rounded-lg bg-noosh-green text-center text-2xl font-bold text-white">
        Specialty Bowls
      </h3>

      <div className="px-6 pb-20">
        {specialtyBowls.map((bowl) => (
          <MenuItem key={bowl.name} item={bowl} onItemClick={onItemClick} />
        ))}
      </div>

      <HalalBadge />
    </div>
  );
}
