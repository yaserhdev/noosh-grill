import { sauces } from '@/data/menu';
import SpicyIndicator from './SpicyIndicator';

export default function SauceGrid() {
  return (
    <div className="py-0">
      <h4 className="mb-2 flex items-center text-2xl font-bold text-white font-[family-name:var(--font-tanker)]">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black bg-white text-sm font-bold leading-none text-black font-[family-name:var(--font-tanker)]">
          2
        </span>
        <span className="ml-2">Choose a sauce:</span>
      </h4>
      <div className="ml-8 w-fit rounded-lg border border-black bg-noosh-gold-bright p-2">
        <div className="grid grid-cols-2">
          {sauces.map((sauce, index) => {
            const isTop = index < 2;
            const isLeft = index % 2 === 0;

            const borderClasses = [
              isLeft ? 'border-r' : 'border-l',
              isTop ? 'border-b' : 'border-t',
            ]
              .map((b) => `${b}-[0.5px] ${b}-black`)
              .join(' ');

            return (
              <div
                key={sauce.name}
                className={`flex flex-col items-start p-3 ${borderClasses}`}
              >
                <span className="text-2xl font-bold font-[family-name:var(--font-tanker)]">
                  {sauce.name}
                  {sauce.spicyLevel && (
                    <SpicyIndicator level={sauce.spicyLevel} variant="yellow" />
                  )}
                </span>
                <span className="text-xs leading-3">{sauce.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
