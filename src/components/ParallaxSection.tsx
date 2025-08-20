'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export default function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up' 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    const yValue = direction === 'up' ? -100 * speed : 100 * speed;
    
    tl.to(section, {
      y: yValue,
      ease: 'none'
    });

    return () => {
      tl.kill();
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={`parallax-section ${className}`}>
      {children}
    </div>
  );
}
