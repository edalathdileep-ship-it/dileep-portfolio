'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: '60px',
        background: 'rgba(9,9,11,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color 0.3s',
      }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}>
          Dileep Edalath
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }} className="desktop-nav">
          <li><a href="/#work" className="nav-link" style={{ fontSize: '14px', color: 'var(--muted)', transition: 'color 0.2s' }}>Work</a></li>
          <li><a href="/#about" className="nav-link" style={{ fontSize: '14px', color: 'var(--muted)', transition: 'color 0.2s' }}>About</a></li>
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="btn-scale desktop-cta"
          style={{
            fontSize: '13px', fontWeight: 600,
            padding: '9px 20px', borderRadius: '8px',
            background: 'var(--fg)', color: 'var(--bg)',
          }}
        >
          Get in touch
        </Link>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none',
            color: '#fff', cursor: 'pointer',
            fontSize: '20px', padding: '4px',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(9,9,11,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px 20px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          <a href="/#work" onClick={() => setMenuOpen(false)} style={{ fontSize: '16px', color: 'var(--muted)', fontWeight: 500 }}>Work</a>
          <a href="/#about" onClick={() => setMenuOpen(false)} style={{ fontSize: '16px', color: 'var(--muted)', fontWeight: 500 }}>About</a>
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            fontSize: '14px', fontWeight: 600,
            padding: '12px 20px', borderRadius: '8px',
            background: 'var(--fg)', color: 'var(--bg)',
            textAlign: 'center',
          }}>Get in touch</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}