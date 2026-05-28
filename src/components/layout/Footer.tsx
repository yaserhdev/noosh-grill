/* ============================================================
   Footer
   ------------------------------------------------------------
   Simple footer matching legacy site aesthetic.
   Red background, centered copyright + CreaDev credit,
   Instagram link with inline SVG icon.

   TODO: confirm the Instagram handle/URL with the client.
   Placeholder: https://www.instagram.com/nooshgrill
   ============================================================ */

const INSTAGRAM_URL = 'https://www.instagram.com/noosh.grill';
const CREADEV_URL = 'https://www.creadevdesign.com/';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noosh-red px-5 py-5 text-center font-[family-name:var(--font-tanker)]">
      <div className="mx-auto flex max-w-[2000px] flex-col items-center gap-3 xl:px-5">

        {/* Instagram link */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Noosh Grill on Instagram"
          className="text-noosh-cream transition-opacity duration-200 hover:opacity-75"
        >
          {/* Instagram SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* Copyright + credit */}
        <p className="text-sm text-noosh-cream">
          © {year} Noosh Grill &times;{' '}
          <a
            href={CREADEV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity duration-200 hover:opacity-75"
          >
            CreaDev Design
          </a>
        </p>

      </div>
    </footer>
  );
}
