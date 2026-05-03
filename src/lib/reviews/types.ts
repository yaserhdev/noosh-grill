/* ============================================================
   Review Types — Shared interface across all providers
   ============================================================ */

export interface Review {
  /** Display name of reviewer (e.g. "A.R." or "Farazana M.") */
  author: string;
  /** Review body text */
  text: string;
  /** Star rating, 1-5 */
  rating: number;
  /** Optional: ISO date string when review was posted (Google API provides this) */
  publishedAt?: string;
  /** Optional: reviewer's profile photo URL (Google only) */
  authorPhotoUrl?: string;
  /** Source identifier — useful for analytics, conditional rendering, or debugging */
  source: 'google' | 'curated';
}
