import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 8, 20, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        padding: scrolled ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, fontSize: '1.5rem' }}>
          <img src="/logo.jpeg" alt="Balaji Printers Logo" style={{ height: '40px', width: 'auto', borderRadius: '5px' }} />
          <span className="text-gradient">Balaji Printers</span>
        </div>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#services" style={{ fontWeight: 500, fontSize: '1rem', transition: 'color 0.2s' }} className="nav-link">Services</a>
          <a href="#offers" style={{ fontWeight: 500, fontSize: '1rem', transition: 'color 0.2s' }} className="nav-link">Offers</a>
          <a href="#about" style={{ fontWeight: 500, fontSize: '1rem', transition: 'color 0.2s' }} className="nav-link">About</a>
          <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Contact Us</button>
        </nav>
      </div>
    </header>
  );
}
