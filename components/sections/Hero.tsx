'use client'
import { useState } from 'react'

export default function Hero() {
  const [aboutHovered, setAboutHovered] = useState(false)

  const aboutStyle = {
    padding: '11px 24px',
    borderRadius: '6px',
    border: aboutHovered ? '1px solid var(--muted)' : '1px solid var(--btn-outline)',
    color: 'var(--fg)' as const,
    fontSize: '14px',
    fontWeight: 400,
    background: aboutHovered ? 'rgba(255,255,255,0.06)' : 'transparent',
    transition: 'border-color 0.2s, background 0.2s',
  }

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '120px 24px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '33.333% 100%',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)',
      }} />

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 50% at 50% 30%, rgba(80,80,120,0.1) 0%, transparent 70%)',
      }} />

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        padding: '6px 14px', borderRadius: '999px',
        border: '1px solid var(--border-light)', background: 'rgba(255,255,255,0.04)',
        fontSize: '12.5px', color: 'var(--fg)', marginBottom: '32px',
        animation: 'fadeUp 0.7s ease both',
        position: 'relative', zIndex: 1,
      }}>
        <span className="pulse-dot" style={{
          width: '7px', height: '7px', borderRadius: '50%',
          background: 'var(--green)', display: 'inline-block',
        }} />
        Available for work
      </div>

      <h1 style={{
        fontWeight: 800, fontSize: 'clamp(36px, 7vw, 72px)',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        marginBottom: '24px', maxWidth: '820px',
        animation: 'fadeUp 0.7s 0.1s ease both',
        position: 'relative', zIndex: 1,
      }}>
        Designer who ships.
      </h1>

      <p style={{
        color: 'var(--muted)', fontSize: '15px', fontWeight: 300,
        lineHeight: 1.7, maxWidth: '420px', marginBottom: '40px',
        animation: 'fadeUp 0.7s 0.2s ease both',
        position: 'relative', zIndex: 1,
      }}>
        I take a product from rough idea to live, design, build, and deploy using AI tools. One person, start to finish.
      </p>

      <div style={{
        display: 'flex', gap: '12px',
        animation: 'fadeUp 0.7s 0.3s ease both',
        position: 'relative', zIndex: 1,
      }}>
        <a href="#work" className="btn-scale" style={{
          padding: '11px 24px', borderRadius: '6px',
          background: 'var(--fg)', color: 'var(--bg)',
          fontSize: '14px', fontWeight: 600,
        }}>
          See my work →
        </a>
        <a href="#about" onMouseEnter={() => setAboutHovered(true)} onMouseLeave={() => setAboutHovered(false)} style={aboutStyle}>
          About me
        </a>
      </div>
    </section>
  )
}