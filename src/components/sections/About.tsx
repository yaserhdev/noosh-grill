'use client';

import { aboutContent } from '@/data/about';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const ORDER_URL = 'https://noosh.toast.site/order';

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
      <div className="mx-5 max-w-[2000px] xl:mx-auto xl:px-5">
        <div className="flex flex-col items-center text-center">
          <h2
            id="about-heading"
            data-reveal
            className="text-4xl text-noosh-cream sm:text-5xl lg:text-6xl"
          >
            {aboutContent.heading}
          </h2>

          <span
            data-reveal
            aria-hidden="true"
            className="mt-6 block h-1 w-24 rounded-full bg-noosh-gold"
          />

          <p
            data-reveal
            className="mt-10 text-lg leading-relaxed text-noosh-cream sm:text-xl sm:leading-relaxed"
          >
            {aboutContent.body}
          </p>

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

          {/* Mobile-only Order Now CTA — hidden on lg+ where navbar button is visible */}
          <a
            data-reveal
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-noosh-red px-8 py-3 text-2xl text-white shadow-lg shadow-noosh-red/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-noosh-red-dark hover:shadow-xl hover:shadow-noosh-red/30 active:translate-y-0 lg:hidden font-[family-name:var(--font-tanker)]"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
