import { proteins } from '@/data/menu';

export default function ProteinGrid() {
  return (
    <div className="py-2">
      <h4 className="mb-2 flex items-center text-2xl font-bold text-white font-[family-name:var(--font-tanker)]">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black bg-white text-sm font-bold leading-none text-black font-[family-name:var(--font-tanker)]">
          1
        </span>
        <span className="ml-2">Choose a protein:</span>
      </h4>
      <div className="ml-8 rounded-lg border border-black bg-noosh-gold-bright p-2">
        <div className="grid grid-cols-2 grid-rows-2">
          {proteins.map((protein, index) => {
            const isLeft = index % 2 === 0;
            const isTop = index < 2;

            const borderClasses = [
              isLeft && 'border-r border-black',
              isTop && 'border-b border-black',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div
                key={protein.name}
                className={`flex flex-col p-3 ${borderClasses}`}
              >
                <span className="text-2xl font-bold leading-tight font-[family-name:var(--font-tanker)]">
                  {protein.name}
                </span>
                <span className="text-xs leading-3 font-[family-name:var(--font-montserrat)]">
                  {protein.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
