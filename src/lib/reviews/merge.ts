import type { Review } from './types';

/* ============================================================
   Merge & Dedupe
   ------------------------------------------------------------
   Combines Google API results with curated reviews.

   Strategy:
   - Normalize author names (lowercase, strip punctuation/spaces)
     so "A.R.", "A. R.", and "A R" collide as duplicates.
   - When duplicates exist, prefer the Google version (more
     authoritative — has photo, publish date, and is verified).
   - Google reviews appear first (most recent / freshest social
     proof), followed by curated reviews not already shown.
   ============================================================ */

/**
 * Normalizes an author name into a comparison key.
 * "A.R."  → "ar"
 * "Farazana M." → "farazanam"
 * "H. M. J." → "hmj"
 */
function normalizeAuthorKey(author: string): string {
  return author.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Merges Google reviews with curated reviews.
 * Google takes precedence on duplicates; remaining curated reviews fill out the list.
 */
export function mergeReviews(
  googleReviews: Review[],
  curatedReviews: Review[]
): Review[] {
  const seen = new Set<string>();
  const merged: Review[] = [];

  /* Google first — they're freshest and most authoritative */
  for (const review of googleReviews) {
    const key = normalizeAuthorKey(review.author);
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(review);
    }
  }

  /* Then curated, skipping any already represented by Google */
  for (const review of curatedReviews) {
    const key = normalizeAuthorKey(review.author);
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(review);
    }
  }

  return merged;
}
