import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease-in-out',
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      padding: '1rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
          Logo
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#home" style={{
            color: 'black',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            ':hover': { opacity: 0.7 }
          }}>
            Home
          </a>
          <a href="#about" style={{
            color: 'black',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            ':hover': { opacity: 0.7 }
          }}>
            About
          </a>
          <a href="#contact" style={{
            color: 'black',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            ':hover': { opacity: 0.7 }
          }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar