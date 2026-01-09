import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Production Boilerplate',
  description:
    'A production-ready Next.js boilerplate with TypeScript, ESLint, Prettier, Husky, and shadcn/ui',
  keywords: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'Boilerplate',
  ],
  authors: [{ name: 'Developer' }],
  creator: 'Next.js Developer',
  publisher: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
