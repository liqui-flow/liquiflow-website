'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import MagneticButton from './MagneticButton';
import ParallaxSection from './ParallaxSection';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

export function P2PSection() {
  return (
    <div className="apple-container">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
        <motion.div variants={fadeUp}>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight apple-headline mb-6">Peer‑to‑Peer Proximity</h2>
          <p className="text-zinc-400 text-xl apple-body mb-8">Universal cross-platform proximity payments using NFC, BLE, Bonjour, and iBeacon. No app opening required - homescreen payment UI activates on proximity.</p>
          <ul className="space-y-4 text-zinc-300 apple-body mb-10">
            <li>• Instant device discovery via multiple proximity technologies</li>
            <li>• Homescreen payment UI - no manual app opening</li>
            <li>• Cross-platform compatibility (iOS & Android)</li>
            <li>• Zero-configuration networking</li>
          </ul>
          <div>
            <MagneticButton
              href="#terminal"
              className="apple-button px-8 py-4 text-base font-semibold"
              strength={0.3}
            >
              Learn More
            </MagneticButton>
          </div>
        </motion.div>
        <ParallaxSection speed={0.2} direction="up">
          <motion.div variants={fadeUp}>
            <HeroCanvas />
          </motion.div>
        </ParallaxSection>
      </motion.div>
    </div>
  );
}

export function TerminalSection() {
  return (
    <div className="apple-container">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
        <ParallaxSection className="order-2 md:order-1" speed={0.2} direction="down">
          <motion.div variants={fadeUp}>
            <HeroCanvas />
          </motion.div>
        </ParallaxSection>
        <motion.div variants={fadeUp} className="order-1 md:order-2">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight apple-headline mb-6">Native NFC Terminal</h2>
          <p className="text-zinc-400 text-xl apple-body mb-8">Tap your phone to our native NFC terminal. Card Rails technology ensures zero transaction failures, unlike traditional UPI Bank Server Rails.</p>
          <ul className="space-y-4 text-zinc-300 apple-body mb-10">
            <li>• Native NFC terminal integration</li>
            <li>• Card Rails for 100% reliability</li>
            <li>• Instant transaction confirmation</li>
            <li>• Enterprise-grade security</li>
          </ul>
          <div>
            <MagneticButton
              href="#innovation"
              className="apple-button-secondary px-8 py-4 text-base font-semibold"
              strength={0.3}
            >
              See Innovation
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

