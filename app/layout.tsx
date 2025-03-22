import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Sidebar } from '@/components/layout/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WhatBytes - Skill Test Dashboard',
  description: 'Track your skill test performance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:ml-60 mt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}