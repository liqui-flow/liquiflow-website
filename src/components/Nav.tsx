'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/80 border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-widest text-zinc-100">liquiflow</Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#p2p" className="hover:text-white">P2P</a>
          <a href="#terminal" className="hover:text-white">Peer‑to‑Terminal</a>
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#download" className="rounded-full bg-white text-black px-4 py-1.5 font-medium hover:opacity-90">Download</a>
        </nav>
      </div>
    </div>
  );
}

