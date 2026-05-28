import { getReviews } from '@/lib/reviews/provider';
import ReviewCard from './ReviewCard';

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

      <div className="mt-10 flex items-center justify-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#ffbe36"
          stroke="none"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span className="text-sm font-bold text-noosh-cream font-[family-name:var(--font-tanker)]">
          4.9 on Google
        </span>
        <span className="text-sm text-noosh-cream/60">· 200+ reviews</span>
      </div>
    </section>
  );
}
