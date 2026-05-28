import Image from 'next/image';
import { pitaWrap } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

export default function PitaWrap() {
  return (
    <div className="mt-8 rounded-lg border border-black p-6 text-center">
      <div className="-ml-2 -mt-2 mb-4 flex w-full items-center">
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
        <span className="ml-auto text-xl text-noosh-red font-[family-name:var(--font-tanker)]">
          {formatPrice(pitaWrap.price)}
        </span>
      </div>

      <div className="-mx-6 border-b border-black" />

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
        <p className="flex-1 pl-3 text-left text-lg leading-5 font-[family-name:var(--font-montserrat)]">
          <strong>choice of protein</strong>,{' '}
          {pitaWrap.description.replace('choice of protein, ', '')}
        </p>
      </div>
    </div>
  );
}
