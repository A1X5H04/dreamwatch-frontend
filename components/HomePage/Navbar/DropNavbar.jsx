'use client'
import { useState, useEffect } from 'react';

function DropNavbar({children}) {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTransparent(scrollY === 0); // Set transparency based on scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isTransparent ? 'transparent' : ''} absolute`}> 
      {children}
    </nav>
  );
}

export default DropNavbar;