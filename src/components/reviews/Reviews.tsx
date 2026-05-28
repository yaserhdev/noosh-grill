import { getReviews } from '@/lib/reviews/provider';
import ReviewCard from './ReviewCard';

const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?sca_esv=fd9128bd119c9691&sxsrf=ANbL-n7nF3xdmepfUexB-bs3X75k8hVA5Q:1779929237876&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWI86cUcwtCxlS-yIVLq5rdc3F1e-HrhHL5fVJOAoWjFop7lz8R-y8UrsmeoCYQ9LzVKZM2UNQWZzrKaZzZr6u-_wK2D&q=Noosh+Grill+Reviews&sa=X&ved=2ahUKEwjLtsuP4dqUAxXwKFkFHT5dA18Q0bkNegQIMhAH&biw=2262&bih=1174&dpr=1';
const YELP_REVIEW_URL = 'https://www.yelp.com/biz/noosh-grill-fairfax-2';

export default async function Reviews() {
  const reviews = await getReviews();

  if (reviews.length === 0) return null;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="w-full overflow-hidden bg-noosh-green py-16 lg:py-24"
    >
      <div className="mb-10 text-center">
        <h2
          id="reviews-heading"
          className="text-4xl text-noosh-cream lg:text-5xl"
        >
          What People Are Saying
        </h2>
        <span
          aria-hidden="true"
          className="mt-4 mx-auto block h-1 w-12 rounded-full bg-noosh-gold"
        />
      </div>

      <div
        aria-hidden="true"
        className="relative"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex w-max gap-4 animate-[marquee_40s_linear_infinite]">
          {reviews.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
          {reviews.map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Platform badges */}
      <div className="mt-10 flex flex-wrap items-start justify-center gap-12">

        {/* Google */}
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 transition-opacity duration-200 hover:opacity-75"
          aria-label="4.9 stars on Google — 400+ reviews. Opens Google Reviews."
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#ffbe36"
                stroke="none"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-noosh-cream/70 font-[family-name:var(--font-montserrat)]">
            4.9 · 400+ reviews
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/google.svg"
            alt="Google"
            width={64}
            height={64}
            className="h-10 w-auto"
          />
        </a>

        {/* Yelp */}
        <a
          href={YELP_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 transition-opacity duration-200 hover:opacity-75"
          aria-label="4.9 stars on Yelp — 80+ reviews. Opens Yelp listing."
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#ffbe36"
                stroke="none"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-noosh-cream/70 font-[family-name:var(--font-montserrat)]">
            4.9 · 80+ reviews
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/yelp.svg"
            alt="Yelp"
            width={64}
            height={64}
            className="h-10 w-auto"
          />
        </a>

      </div>
    </section>
  );
}
