import Image from 'next/image';
import { buildYourOwnBowl } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

export default function BuildYourOwn() {
  return (
    <div className="flex min-h-[120px] rounded-lg border border-black bg-white">
      <div className="flex w-[120px] shrink-0 items-center justify-center pl-4">
        <Image
          src="/images/bowl.png"
          alt="Bowl Icon"
          width={120}
          height={120}
          className="block max-w-[120px]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between">
          <h4 className="pr-6 text-2xl font-bold font-[family-name:var(--font-tanker)]">
            Build Your Own
          </h4>
          <span className="shrink-0 text-xl text-noosh-red">
            {formatPrice(buildYourOwnBowl.price)}
          </span>
        </div>
        <p className="pr-10 text-lg" style={{ lineHeight: 1.25 }}>
          {buildYourOwnBowl.description}
        </p>
      </div>
    </div>
  );
}
