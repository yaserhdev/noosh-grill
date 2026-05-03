import type { Review } from './types';

/* ============================================================
   Google Places API Client (Places API New / v1)
   ------------------------------------------------------------
   Fetches the most recent reviews for the configured place.
   Returns at most 5 reviews — that's a hard platform limit
   imposed by Google, not a config option.

   Required env vars:
     GOOGLE_PLACES_API_KEY  — server-only (never expose to client)
     GOOGLE_PLACE_ID        — Noosh Grill's Google Place ID

   To find the Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
   To enable the API: https://console.cloud.google.com/apis/library/places-backend.googleapis.com
   ============================================================ */

const PLACES_API_ENDPOINT = 'https://places.googleapis.com/v1/places';

/**
 * Raw shape of a review object returned by the Places API (New).
 * Only the fields we use are typed.
 */
interface GoogleReview {
  name?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  publishTime?: string;
}

interface PlacesResponse {
  reviews?: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
}

/**
 * Fetches reviews from the Google Places API.
 * Returns an empty array if credentials are missing or the request fails —
 * the caller will fall back to curated reviews.
 */
export async function fetchGoogleReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  /* Missing credentials → silently return empty so curated reviews carry the page */
  if (!apiKey || !placeId) {
    return [];
  }

  const url = `${PLACES_API_ENDPOINT}/${placeId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        /* Field mask is required by the v1 API — only request what we use */
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
      /* ISR — Next.js will cache for 24 hours, then revalidate on next request */
      next: { revalidate: 86_400 },
    });

    if (!response.ok) {
      /* Log on the server only — never throw, never expose to client */
      console.error(
        `[reviews/google] Places API responded ${response.status}: ${response.statusText}`
      );
      return [];
    }

    const data: PlacesResponse = await response.json();

    if (!data.reviews || data.reviews.length === 0) {
      return [];
    }

    return data.reviews
      .map(normalizeGoogleReview)
      .filter((r): r is Review => r !== null);
  } catch (error) {
    console.error('[reviews/google] Failed to fetch reviews:', error);
    return [];
  }
}

/**
 * Converts a raw Google review into our internal Review shape.
 * Returns null if the review is missing required fields.
 */
function normalizeGoogleReview(raw: GoogleReview): Review | null {
  const author = raw.authorAttribution?.displayName?.trim();
  const text = raw.text?.text?.trim() || raw.originalText?.text?.trim();
  const rating = raw.rating;

  if (!author || !text || typeof rating !== 'number') {
    return null;
  }

  return {
    author,
    text,
    rating: Math.round(rating),
    publishedAt: raw.publishTime,
    authorPhotoUrl: raw.authorAttribution?.photoUri,
    source: 'google',
  };
}
