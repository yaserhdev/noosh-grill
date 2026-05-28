import { subs, burgers, specialtyBowls } from '@/data/menu';
import { getMenuItemImagePath } from '@/lib/utils';

export default function MenuImagePreloader() {
  return (
    <div aria-hidden="true" className="sr-only">
      {subs.map((item) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img key={`sub-${item.name}`} src={getMenuItemImagePath(item.name)} alt="" width={1} height={1} fetchPriority="low" />
      ))}
      {burgers.map((item) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img key={`burger-${item.name}`} src={getMenuItemImagePath(item.name)} alt="" width={1} height={1} fetchPriority="low" />
      ))}
      {specialtyBowls.map((item) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img key={`bowl-${item.name}`} src={getMenuItemImagePath(item.name)} alt="" width={1} height={1} fetchPriority="low" />
      ))}
    </div>
  );
}
