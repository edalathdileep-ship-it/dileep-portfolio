'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--muted)',
    transition: 'color 0.2s',
  }

  return (
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

      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }}>
        <li><a href="/#work" style={linkStyle}>Work</a></li>
        <li><a href="/#about" style={linkStyle}>About</a></li>
      </ul>

      <Link
        href="/contact"
        style={{
          fontSize: '13px', fontWeight: 600,
          padding: '9px 20px', borderRadius: '8px',
          background: 'var(--fg)', color: 'var(--bg)',
        }}
      >
        Get in touch
      </Link>
    </nav>
  )
}