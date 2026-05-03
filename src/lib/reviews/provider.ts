import 'server-only';

import type { Review } from './types';
import { fetchGoogleReviews } from './google';
import { curatedReviews } from './static';
import { mergeReviews } from './merge';

/* ============================================================
   Reviews Provider — Public Entry Point
   ------------------------------------------------------------
   Server-only. Components import this and don't know or care
   whether the data came from Google or the curated list.

   Caching is handled by the Google fetcher's `next: { revalidate }`
   option. Next.js will cache the result for 24 hours, then
   revalidate on the next request after expiry.
   ============================================================ */

export type { Review } from './types';

/**
 * Returns merged Google + curated reviews.
 * Always returns at least the curated reviews — Google failures
 * silently fall through to curated-only.
 */
export async function getReviews(): Promise<Review[]> {
  const googleReviews = await fetchGoogleReviews();
  return mergeReviews(googleReviews, curatedReviews);
}
