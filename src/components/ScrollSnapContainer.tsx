'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollSnapContainerProps {
  children: ReactNode;
  className?: string;
  snapDuration?: number;
}

export default function ScrollSnapContainer({ 
  children, 
  className = '',
  snapDuration = 1 
}: ScrollSnapContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === 'undefined') return;

    // Enable smooth scrolling
    gsap.set('html, body', {
      scrollBehavior: 'smooth'
    });

    // Create snap points for each section
    const sections = container.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          snap: {
            snapTo: index / (sections.length - 1),
            duration: snapDuration,
            ease: 'power2.inOut'
          }
        });
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => {
        const triggerElement = trigger.vars.trigger as Element;
        if (triggerElement && container.contains(triggerElement)) {
          trigger.kill();
        }
      });
    };
  }, [snapDuration]);

  return (
    <div ref={containerRef} className={`scroll-snap-container ${className}`}>
      {children}
    </div>
  );
}
