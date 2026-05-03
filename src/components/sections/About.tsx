'use client';

import { aboutContent } from '@/data/about';
import { useGsapReveal } from '@/hooks/useGsapReveal';

/* ============================================================
   About Section
   ------------------------------------------------------------
   - Green brand background, full-bleed
   - Inner container matches navbar/menu width (max-w-[2000px], mx-5)
   - All content (heading, body, tagline) spans container width
   - Staggered GSAP reveal on scroll, reduced-motion safe
   ============================================================ */

export default function About() {
  const sectionRef = useGsapReveal<HTMLElement>({
    y: 24,
    duration: 0.9,
    stagger: 0.14,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-noosh-green py-20 lg:py-28"
      aria-labelledby="about-heading"
    >
      {/* Inner container — matches navbar and menu horizontal alignment */}
      <div className="mx-5 max-w-[2000px] xl:mx-auto xl:px-5">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2
            id="about-heading"
            data-reveal
            className="text-4xl text-noosh-cream sm:text-5xl lg:text-6xl"
          >
            {aboutContent.heading}
          </h2>

          {/* Gold accent line */}
          <span
            data-reveal
            aria-hidden="true"
            className="mt-6 block h-1 w-24 rounded-full bg-noosh-gold"
          />

          {/* Body copy — spans full container width */}
          <p
            data-reveal
            className="mt-10 text-lg leading-relaxed text-noosh-cream sm:text-xl sm:leading-relaxed"
          >
            {aboutContent.body}
          </p>

          {/* Pull-quote tagline */}
          <div data-reveal className="mt-12 flex flex-col items-center gap-2">
            <p className="text-3xl italic text-noosh-gold sm:text-4xl font-[family-name:var(--font-tanker)]">
              {aboutContent.tagline}
            </p>
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: 'rgba(244, 237, 226, 0.7)' }}
            >
              {aboutContent.taglineMeaning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}