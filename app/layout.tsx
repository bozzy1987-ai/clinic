import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EC CLINIC Edyta Cichor — kosmetologia i podologia w Zawierciu',
  description: 'Poznaj ofertę EC CLINIC w Zawierciu: kosmetologia twarzy, podologia, depilacja laserowa i zabiegi na ciało. Rezerwacja wizyt przez Booksy.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
