import Image from 'next/image';

export default function HalalBadge() {
  return (
    <Image
      src="/images/halal_icon.png"
      alt="Halal Certified"
      width={48}
      height={48}
      className="absolute bottom-4 right-4 h-12 w-12 object-contain"
      loading="lazy"
    />
  );
}
