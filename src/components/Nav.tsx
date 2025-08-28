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
			
			{/* Mobile menu backdrop */}
			{menuOpen && (
				<div 
					className="sm:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
					onClick={() => setMenuOpen(false)}
				/>
			)}
			
			{/* Mobile menu slide-in panel */}
			<div className={`sm:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-black border border-white/20 rounded-l-3xl shadow-2xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
				{/* Menu header with close button */}
				<div className="flex items-center justify-between p-6 border-b border-white/20 bg-black rounded-tl-3xl">
					<h2 className="text-sm font-medium text-white">Menu</h2>
					<button
						onClick={() => setMenuOpen(false)}
						className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
						aria-label="Close menu"
					>
						<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				
				{/* Menu items */}
				<nav className="p-6 space-y-3 bg-black rounded-bl-3xl text-white">
					<a 
						href="#p2p" 
						className="block text-sm font-normal text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
						onClick={() => setMenuOpen(false)}
					>
						P2P
					</a>
					<a 
						href="#terminal" 
						className="block text-sm font-normal text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
						onClick={() => setMenuOpen(false)}
					>
						Peer‑to‑Terminal
					</a>
					<a 
						href="#privacy" 
						className="block text-sm font-normal text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
						onClick={() => setMenuOpen(false)}
					>
						Privacy
					</a>
					<a 
						href="https://testflight.apple.com/join/vAdMtgYp" 
						className="block pt-2"
						target="_blank" 
						rel="noopener noreferrer"
						onClick={() => setMenuOpen(false)}
					>
						<div className="inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
							Download
						</div>
					</a>
				</nav>
			</div>
		</div>
	);
}