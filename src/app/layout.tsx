import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const tanker = localFont({
  src: [
    {
      path: '../../public/fonts/Tanker-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tanker-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-tanker',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eatnoosh.com'),
  title: 'Noosh Grill',
  description:
    'Noosh Grill in Fairfax, VA offers fresh, high-quality halal food including NY-style chicken over rice, smash burgers, and wraps in a welcoming, family-friendly environment.',
  keywords:
    'Noosh Grill, halal food, Fairfax VA restaurant, smash burgers, chicken over rice, wraps, Twin Brook dining',
  authors: [{ name: 'Noosh Grill' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Noosh Grill - Fresh Halal Food in Fairfax, VA',
    description:
      'Enjoy delicious halal dishes like smash burgers and chicken over rice at Noosh Grill, a cozy neighborhood spot in Fairfax, VA.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Noosh Grill - Fresh Halal Food in Fairfax, VA',
      },
    ],
    url: 'https://www.eatnoosh.com',
    type: 'website',
  },
  icons: {
    icon: '/images/noosh_favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Noosh Grill',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9573 Braddock Rd',
    addressLocality: 'Fairfax',
    addressRegion: 'VA',
    postalCode: '22032',
    addressCountry: 'US',
  },
  telephone: '+17038889256',
  openingHours: 'Mo-Su 11:00-22:00',
  servesCuisine: 'Halal',
  url: 'https://www.eatnoosh.com',
  menu: 'https://www.eatnoosh.com/#menu',
  image: 'https://www.eatnoosh.com/images/noosh_home.jpeg',
  description:
    'Noosh Grill offers fresh halal dishes including smash burgers, chicken over rice, and wraps in a welcoming Fairfax, VA location.',
};

const GA_ID = 'G-Q9HT00FTBV';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${tanker.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="m-0 p-0 leading-relaxed">
        {children}

        {/* Google Analytics — loads after page is interactive, never blocks render */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
