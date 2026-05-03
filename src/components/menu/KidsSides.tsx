import { kidsMenu, sides } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

export default function KidsSides() {
  return (
    <div className="mt-15">
      {/* Split-color header: 55% red, 45% green */}
      <h3 className="mb-0 flex h-14 overflow-hidden rounded-lg p-0 text-2xl text-white">
        <div className="flex w-[55%] shrink-0 items-center justify-center bg-noosh-red-dark">
          Kids
        </div>
        <div className="flex w-[45%] shrink-0 items-center justify-center border-l border-black bg-noosh-green">
          Sides
        </div>
      </h3>

      {/* Content: matching 55/45 split */}
      <div className="flex">
        {/* Kids column */}
        <div className="w-[55%] py-4 pl-1 pr-4">
          {kidsMenu.map((item) => (
            <div
              key={item.name}
              className="menu-item flex justify-between py-3"
            >
              <span className="text-xl font-[family-name:var(--font-tanker)]">
                <span className="block">{item.name}</span>
                <span className="block pr-3 font-[family-name:var(--font-anonymous-pro)] text-base font-normal text-noosh-gray">
                  {item.description}
                </span>
              </span>
              <span className="ml-4 shrink-0 text-xl text-noosh-red font-[family-name:var(--font-tanker)]">
                {formatPrice(item.price)}
              </span>
            </div>
          ))}
        </div>

        {/* Sides column */}
        <div className="w-[45%] border-l border-black py-4 pl-4">
          {sides.map((item) => (
            <div
              key={item.name}
              className="flex items-end justify-between py-3"
            >
              <span className="text-xl font-[family-name:var(--font-tanker)]">
                {item.name}
              </span>
              <span className="ml-5 shrink-0 text-xl text-noosh-red font-[family-name:var(--font-tanker)]">
                {formatPrice(item.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}