import { subs, burgers, specialtyBowls } from '@/data/menu';
import { getMenuItemImagePath } from '@/lib/utils';

/* ============================================================
   MenuImagePreloader
   ------------------------------------------------------------
   Renders all menu item images invisibly on page load so they
   are cached by the time the user opens a modal. Zero visible
   impact — images are 1px and aria-hidden.
   ============================================================ */

export default function MenuImagePreloader() {
  const allItems = [
    ...subs,
    ...burgers,
    ...specialtyBowls,
  ];

  return (
    <div aria-hidden="true" className="sr-only">
      {allItems.map((item) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={item.name}
          src={getMenuItemImagePath(item.name)}
          alt=""
          width={1}
          height={1}
          fetchPriority="low"
        />
      ))}
    </div>
  );
}
