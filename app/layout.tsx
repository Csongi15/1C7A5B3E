
import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Felhőállat Lexikon',
  description: 'Képzeletbeli enciklopédia a felhőből született állatokról',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-100 text-slate-900">
        <header className="bg-white/60 backdrop-blur-sm sticky top-0 z-20 border-b">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/">
              <h1 className="text-xl font-extrabold tracking-tight"> Felhőállat Lexikon</h1>
            </Link>
            <nav className="space-x-4 text-sm">
              <Link className="hover:underline" href="/">Főoldal</Link>
              <Link className="hover:underline" href="/lexikon">Lexikon</Link>
              <Link className="hover:underline" href="/kapcsolat">Kapcsolat</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>

        <footer className="mt-16 border-t">
          <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Felhőállat Lexikon — Projektkód: <span className="font-mono">1C7A5B3E</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
