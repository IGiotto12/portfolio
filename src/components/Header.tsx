'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateHeader = () => {
      if (window.scrollY > 100) {
        setIsVisible(window.scrollY < lastScrollY);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeader();
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <header 
      id="header" 
      style={{ 
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/papers">Papers</Link></li>
        </ul>
      </nav>
    </header>
  );
} 