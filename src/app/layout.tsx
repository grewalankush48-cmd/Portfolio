import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ankush Grewal - Cybersecurity Analyst & Developer',
  description: 'Portfolio of Ankush Grewal, Cybersecurity Analyst & Developer specializing in vulnerability assessment, ethical hacking, Python tool development, and network security.',
  keywords: ['Cybersecurity', 'Ankush Grewal', 'Vulnerability Assessment', 'Ethical Hacking', 'Python', 'Kali Linux', 'Portfolio', 'UPES'],
  authors: [{ name: 'Ankush Grewal' }],
  openGraph: {
    title: 'Ankush Grewal - Cybersecurity Analyst & Developer',
    description: 'Portfolio of Ankush Grewal, Cybersecurity Analyst & Developer specializing in vulnerability assessment and defensive tooling.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#030712] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
