'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/80 border-b border-zinc-800">
			<div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
				<Link href="#" className="font-semibold tracking-widest text-zinc-100">liquiflow</Link>
				{/* Desktop nav */}
				<nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
					<a href="#p2p" className="hover:text-white">P2P</a>
					<a href="#terminal" className="hover:text-white">Peer‑to‑Terminal</a>
					<a href="#privacy" className="hover:text-white">Privacy</a>
					<a href="https://testflight.apple.com/join/vAdMtgYp" className="rounded-full bg-white text-black px-4 py-1.5 font-medium hover:opacity-90" target="_blank" rel="noopener noreferrer">Download</a>
				</nav>
				{/* Hamburger icon for mobile */}
				<button
					className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
					aria-label="Open menu"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
					<span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
					<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
				</button>
			</div>
			{/* Mobile menu overlay */}
					{menuOpen && (
						<div className="sm:hidden fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center text-2xl font-semibold text-white transition-all">
							<a href="#p2p" className="w-full text-center py-3 rounded hover:text-blue-400" onClick={() => setMenuOpen(false)}>P2P</a>
							<a href="#terminal" className="w-full text-center py-3 rounded hover:text-blue-400" onClick={() => setMenuOpen(false)}>Peer‑to‑Terminal</a>
							<a href="#privacy" className="w-full text-center py-3 rounded hover:text-blue-400" onClick={() => setMenuOpen(false)}>Privacy</a>
							<a href="https://testflight.apple.com/join/vAdMtgYp" className="w-full text-center py-3 rounded-full bg-white text-black font-medium hover:opacity-90" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Download</a>
						</div>
					)}
		</div>
	);
}