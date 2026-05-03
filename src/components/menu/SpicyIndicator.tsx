import Image from 'next/image';

interface SpicyIndicatorProps {
  level?: number;
  variant?: 'red' | 'yellow';
}

export default function SpicyIndicator({
  level = 1,
  variant = 'red',
}: SpicyIndicatorProps) {
  const src = variant === 'yellow' ? '/images/pepper-yellow.png' : '/images/pepper.png';
  const alt = `Spicy level ${level}`;

  return (
    <span className="inline-flex items-center" aria-label={alt}>
      {Array.from({ length: level }, (_, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          width={20}
          height={20}
          className={`h-5 w-auto ${i === 0 ? 'ml-1' : 'ml-0'}`}
          loading="lazy"
        />
      ))}
    </span>
  );
}