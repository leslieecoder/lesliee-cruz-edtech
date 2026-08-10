import { Playwrite_IN, Sulphur_Point } from 'next/font/google';
import './globals.css';

const sulphurPoint = Sulphur_Point({
  variable: '--font-sulphur-point',
  weight: ['300', '400'],
  subsets: ['latin']
});

const playwriteIn = Playwrite_IN({
  variable: '--font-playwrite-br-guides',
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: 'Lesliee Cruz | AI Systems Builder',
  description:
    'Portfolio landing page for Lesliee Cruz, focused on AI learning systems, frontend development, and learning experience design.',
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sulphurPoint.variable} ${playwriteIn.variable}`}>
      <body>{children}</body>
    </html>
  );
}