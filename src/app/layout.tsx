import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Aeria — Proximity Payments",
  description: "Proximity P2P and Peer-to-Terminal payments",
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
