import Image from 'next/image';

/* ============================================================
   RestaurantPhoto
   ------------------------------------------------------------
   Full-bleed interior shot of Noosh Grill. Maintains the
   image's natural aspect ratio (62%) using a padding-bottom
   trick — same approach as the legacy site.
   ============================================================ */

export default function RestaurantPhoto() {
  return (
    <section
      aria-label="Noosh Grill restaurant interior"
      className="relative w-full"
      style={{ paddingBottom: '62%' }}
    >
      <Image
        src="/images/noosh_home.jpeg"
        alt="Inside Noosh Grill — a welcoming dining space in Fairfax, VA"
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
      />
    </section>
  );
}