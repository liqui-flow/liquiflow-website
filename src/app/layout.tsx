import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Aeria — Proximity Payments",
  description: "Proximity P2P and Peer-to-Terminal payments",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'shortcut icon', url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
