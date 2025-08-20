'use client';

import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({ 
  children, 
  className = '', 
  href, 
  onClick, 
  strength = 0.3 
}: MagneticButtonProps) {
  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Component
        {...props}
        className="relative inline-block w-full h-full"
      >
        {children}
      </Component>
    </div>
  );
}
