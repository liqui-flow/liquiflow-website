'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import MagneticButton from '@/components/MagneticButton';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollSnapContainer from '@/components/ScrollSnapContainer';
import FloatingNav from '@/components/FloatingNav';
import AnimatedBackground from '@/components/AnimatedBackground';
import InteractiveCard from '@/components/InteractiveCard';
import Image from 'next/image';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <FloatingNav />
      <ScrollSnapContainer className="min-h-screen bg-black text-white relative z-10">
        <main className="relative">
          {/* Hero Section - Apple Style */}
          <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 text-center relative z-10">
              <motion.header
                initial="hidden"
                animate="show"
                variants={container}
              >
                <motion.div className="mb-8" variants={fadeUp}>
                  <span className="inline-block px-6 py-2 text-blue-400 text-sm font-medium tracking-wide uppercase">
                    New
                  </span>
                </motion.div>
                <motion.h1 
                  className="text-6xl sm:text-8xl font-bold tracking-tight text-white mb-6" 
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Aeria
                </motion.h1>
                <motion.h2 className="text-2xl sm:text-4xl font-semibold text-zinc-300 mb-8" variants={fadeUp}>
                  The future of payments.
                </motion.h2>
                <motion.p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-12" variants={fadeUp}>
                  World's first universal cross-platform proximity payment system.
                </motion.p>
                <motion.div className="flex items-center justify-center gap-6" variants={fadeUp}>
                  <MagneticButton
                    href="#p2p"
                    className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Learn more
                  </MagneticButton>
                  {/* Watch the film button triggers video modal */}
                  <MagneticButton
                    href="#video"
                    className="text-blue-600 text-lg font-semibold hover:underline"
                  >
                    Watch the film
                  </MagneticButton>
                </motion.div>

                {/* Product Showcase - Apple Style */}
                <motion.div
                  className="mt-20 relative"
                  variants={scaleUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="flex justify-center items-center">
                    <div
                      className="rounded-xl border-2 border-zinc-600/50 overflow-hidden flex items-center justify-center"
                      style={{ width: 480, height: 480 }}
                    >
                      <Image
                        src="/logo.JPG"
                        alt="Product Logo"
                        width={480}
                        height={480}
                        className="object-contain rounded-xl"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.header>
            </div>
          </section>

          {/* P2P Section - Apple Style */}
          <section id="p2p" className="py-32 bg-black">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={container}
                >
                  <motion.h2 className="text-4xl sm:text-6xl font-bold text-white mb-6" variants={fadeUp}>
                    Peer-to-peer payments.
                  </motion.h2>
                  <motion.p className="text-xl text-zinc-400 mb-8" variants={fadeUp}>
                    Send and receive money instantly with just proximity. No app opening required.
                  </motion.p>
                  <motion.ul className="space-y-4 text-base text-zinc-300 mb-10" variants={fadeUp}>
                    <li>• Homescreen payment UI activates automatically</li>
                    <li>• Cross-platform compatibility</li>
                    <li>• Zero-configuration networking</li>
                    <li>• Enterprise-grade security</li>
                  </motion.ul>
                  <motion.div variants={fadeUp}>
                    <MagneticButton
                      href="#terminal"
                      className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Learn more
                    </MagneticButton>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  className="relative"
                >
                  <div className="flex justify-center items-center">
                    <div
                      className="rounded-xl border-2 border-zinc-600/50 overflow-hidden flex items-center justify-center"
                      style={{ width: 480, height: 480 }}
                    >
                      <img
                        src="/p2p.PNG"
                        alt="P2P"
                        width={480}
                        height={480}
                        className="object-contain rounded-xl"
                        style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Terminal Section - Apple Style */}
          <section id="terminal" className="py-32 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  className="order-2 lg:order-1"
                >
                  <div className="flex justify-center items-center">
                    <div
                      className="rounded-xl border-2 border-zinc-600/50 overflow-hidden flex items-center justify-center"
                      style={{ width: 320, height: 480 }}
                    >
                      <img
                        src="/terminal.jpeg"
                        alt="Terminal"
                        width={320}
                        height={480}
                        className="object-contain rounded-xl"
                        style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                      />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={container}
                  className="order-1 lg:order-2"
                >
                  <motion.h2 className="text-4xl sm:text-6xl font-bold text-white mb-6" variants={fadeUp}>
                    Native NFC terminal.
                  </motion.h2>
                  <motion.p className="text-xl text-zinc-400 mb-8" variants={fadeUp}>
                    Tap your phone to our terminal. Card Rails technology ensures zero failures.
                  </motion.p>
                  <motion.ul className="space-y-4 text-base text-zinc-300 mb-10" variants={fadeUp}>
                    <li>• Native NFC integration</li>
                    <li>• 100% reliability with Card Rails</li>
                    <li>• Instant confirmation</li>
                    <li>• Enterprise security</li>
                  </motion.ul>
                  <motion.div variants={fadeUp}>
                    <MagneticButton
                      href="#innovation"
                      className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Learn more
                    </MagneticButton>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Innovation Section - Apple Style */}
          <section id="innovation" className="py-32 bg-black">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <motion.h2 className="text-4xl sm:text-6xl font-bold text-white mb-6" variants={fadeUp}>
                  Beyond UPI.
                </motion.h2>
                <motion.p className="text-xl text-zinc-400 mb-16 max-w-4xl mx-auto" variants={fadeUp}>
                  Replacing Bank Server Rails with Card Rails to eliminate transaction failures.
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                  <motion.div variants={fadeUp} className="text-left">
                    <h3 className="text-2xl font-semibold text-red-400 mb-6">Traditional UPI</h3>
                    <ul className="space-y-3 text-base text-zinc-300">
                      <li>• Bank Server Rails dependency</li>
                      <li>• Frequent failures</li>
                      <li>• Manual app opening</li>
                      <li>• Limited proximity options</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div variants={fadeUp} className="text-left">
                    <h3 className="text-2xl font-semibold text-green-400 mb-6">Aeria Solution</h3>
                    <ul className="text-base text-zinc-300 space-y-3">
                      <li>• Card Rails reliability</li>
                      <li>• Zero failures</li>
                      <li>• Homescreen UI</li>
                      <li>• Universal proximity</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Privacy & Security Section - Apple Style */}
          <section id="privacy" className="py-32 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <motion.h2 className="text-4xl sm:text-6xl font-bold text-white mb-6" variants={fadeUp}>
                  Privacy by design.
                </motion.h2>
                <motion.p className="text-xl text-zinc-400 mb-16 max-w-4xl mx-auto" variants={fadeUp}>
                  Enterprise-grade security with zero data collection. Your privacy is our priority.
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                    { title: 'TLS 1.3', desc: 'Latest encryption protocol for maximum security', icon: '🔒' },
                    { title: 'Apple REST API', desc: 'Native iOS authorization integration', icon: '🍎' },
                    { title: 'Google OAuth 2.0', desc: 'Secure Android authentication', icon: '🤖' }
                  ].map((item, i) => (
                    <motion.div key={item.title} variants={fadeUp} className="text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div className="mt-16" variants={fadeUp}>
                  <div className="bg-black/50 rounded-2xl p-8 border border-zinc-700/50 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-white mb-4">Zero Data Collection</h3>
                    <p className="text-zinc-300 text-base">
                      Aeria processes all transactions locally on your device. No personal data, 
                      transaction history, or user information is ever stored on our servers. 
                      Your financial privacy is guaranteed.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Embedded YouTube Video Section */}
          <section id="video" className="py-16 flex justify-center items-center bg-black">
            <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-zinc-700">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bcBIHp_1utQ"
                  title="Watch the film"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Footer - Apple Style */}
          <footer id="download" className="border-t border-zinc-800 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
              <p className="text-zinc-400 text-sm">
                © {new Date().getFullYear()} Aeria. World's First Universal Cross-Platform Proximity Payment System.
              </p>
            </div>
      </footer>
        </main>
      </ScrollSnapContainer>
    </>
  );
}
