import type { Review } from '@/lib/reviews/types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="w-[280px] shrink-0 rounded-lg bg-noosh-cream p-5">
      <div
        className="mb-3 flex gap-0.5"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < review.rating ? '#ffbe36' : 'none'}
            stroke={i < review.rating ? '#ffbe36' : '#ccc'}
            strokeWidth="2"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <p className="mb-4 text-sm leading-relaxed text-noosh-gray">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-2.5">
        {review.authorPhotoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={review.authorPhotoUrl}
            alt={review.author}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-noosh-green text-sm font-bold text-white font-[family-name:var(--font-tanker)]"
            aria-hidden="true"
          >
            {review.author.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-noosh-green-text font-[family-name:var(--font-tanker)]">
            {review.author}
          </p>
          {review.source === 'google' && (
            <p className="text-xs text-noosh-gray">Google Review</p>
          )}
        </div>
      </div>
    </div>
  );
}
