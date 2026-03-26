import Image from 'next/image';
import { pitaWrap } from '@/data/menu';

export default function PitaWrap() {
  return (
    <div className="relative rounded-lg border border-black p-6 text-center">
      {/* Header: Logo + Title */}
      <div className="-ml-2 -mt-2 mb-4 flex w-full items-center pr-6">
        <Image
          src="/images/noosh-white.png"
          alt="Noosh Logo"
          width={75}
          height={75}
          className="block max-w-[75px]"
          loading="lazy"
        />
        <span className="pl-3 text-3xl font-[family-name:var(--font-tanker)]">
          Style Pita Wrap
        </span>
      </div>

      {/* Price — top right */}
      <span className="absolute right-6 top-[22px] text-xl text-noosh-red">
        {pitaWrap.price}
      </span>

      {/* Divider */}
      <div className="-mx-6 border-b border-black" />

      {/* Description with pita wrap icon */}
      <div className="-ml-2 mt-5 flex min-h-[75px] items-center">
        <div className="flex h-full w-[75px] shrink-0 items-center justify-center">
          <Image
            src="/images/pita-wrap.png"
            alt="Pita Wrap"
            width={75}
            height={75}
            className="block max-w-[75px]"
            loading="lazy"
          />
        </div>
        <p className="flex-1 pl-3 text-left text-lg leading-5 font-[family-name:var(--font-anonymous-pro)]">
          <strong>choice of protein</strong>, {pitaWrap.description.replace('choice of protein, ', '')}
        </p>
      </div>
    </div>
  );
}
