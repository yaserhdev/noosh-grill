import Image from 'next/image';
import { buildYourOwnBowl } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

export default function BuildYourOwn() {
  return (
    <div className="flex min-h-[120px] rounded-lg border border-black bg-white">
      <div className="flex w-[100px] shrink-0 items-center justify-center pl-3 sm:w-[120px] sm:pl-4">
        <Image
          src="/images/bowl.png"
          alt="Bowl Icon"
          width={120}
          height={120}
          className="block w-full max-w-[100px] sm:max-w-[120px]"
          loading="lazy"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-3 sm:p-4">
        {/* Price absolutely positioned top-right — never interferes with text flow */}
        <span className="absolute right-3 top-3 text-xl text-noosh-red font-[family-name:var(--font-tanker)] sm:right-4 sm:top-4">
          {formatPrice(buildYourOwnBowl.price)}
        </span>
        <h4 className="pr-10 text-xl font-bold font-[family-name:var(--font-tanker)] sm:text-2xl">
          Build Your Own
        </h4>
        <p className="mt-1 pr-10 text-base sm:text-lg font-[family-name:var(--font-montserrat)]" style={{ lineHeight: 1.25 }}>
          {buildYourOwnBowl.description}
        </p>
      </div>
    </div>
  );
}
