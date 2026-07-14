import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'App Deco Studio · Making apps simple, yet stunning.',
    template: '%s · App Deco Studio',
  },
  description:
    'App Deco Studio crafts beautiful, intuitive apps for Apple platforms. Explore Söka, Classifier, and Ceramispace.',
  metadataBase: new URL('https://appdeco.ca'),
  openGraph: {
    title: 'App Deco Studio',
    description: 'Making apps simple, yet stunning.',
    url: 'https://appdeco.ca',
    siteName: 'App Deco Studio',
    images: [{ url: '/images/preview-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Deco Studio',
    description: 'Making apps simple, yet stunning.',
    images: ['/images/preview-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#15130e',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
