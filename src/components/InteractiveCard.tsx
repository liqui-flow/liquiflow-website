'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function InteractiveCard({ children, className = '', href, onClick }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const Component = href ? 'a' : 'div';
  const props = href ? { href } : {};

  return (
    <motion.div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Component
        {...props}
        className="block w-full h-full relative"
      >
        {children}
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: isHovered ? ['-100%', '100%'] : '-100%',
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        />
      </Component>
    </motion.div>
  );
}
