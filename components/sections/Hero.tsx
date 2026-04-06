'use client'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '120px 24px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '33.333% 100%',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 50% at 50% 30%, rgba(80,80,120,0.1) 0%, transparent 70%)',
      }} />

      {/* Available badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        padding: '6px 14px', borderRadius: '999px',
        border: '1px solid var(--border-light)', background: 'rgba(255,255,255,0.04)',
        fontSize: '12.5px', color: 'var(--fg)', marginBottom: '32px',
        animation: 'fadeUp 0.7s ease both',
        position: 'relative', zIndex: 1,
      }}>
        <span style={{
          width: '7px', height: '7px', borderRadius: '50%',
          background: 'var(--green)', boxShadow: '0 0 6px var(--green)',
          display: 'inline-block',
        }} />
        Available for work
      </div>

      {/* Headline */}
      <h1 style={{
        fontWeight: 800, fontSize: 'clamp(40px, 7vw, 68px)',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        marginBottom: '24px', maxWidth: '820px',
        animation: 'fadeUp 0.7s 0.1s ease both',
        position: 'relative', zIndex: 1,
      }}>
        Designing products<br />
        people{' '}
        <em style={{
          fontFamily: 'var(--font-playfair), serif',
          fontStyle: 'italic', fontWeight: 400,
        }}>
          love to use
        </em>
      </h1>

      {/* Sub */}
      <p style={{
        color: 'var(--muted)', fontSize: '15px', fontWeight: 300,
        lineHeight: 1.7, maxWidth: '360px', marginBottom: '40px',
        animation: 'fadeUp 0.7s 0.2s ease both',
        position: 'relative', zIndex: 1,
      }}>
        Product designer turning complex problems into clear, considered interfaces. Less noise, more clarity.
      </p>

      {/* Actions */}
      <div style={{
        display: 'flex', gap: '12px',
        animation: 'fadeUp 0.7s 0.3s ease both',
        position: 'relative', zIndex: 1,
      }}>
        <a href="#work" style={{
          padding: '11px 24px', borderRadius: '6px',
          background: 'var(--fg)', color: 'var(--bg)',
          fontSize: '14px', fontWeight: 500,
          transition: 'opacity 0.2s',
        }}>See my work →</a>
        <a href="#about" style={{
          padding: '11px 24px', borderRadius: '6px',
          border: '1px solid var(--btn-outline)', color: 'var(--fg)',
          fontSize: '14px', fontWeight: 400,
          transition: 'border-color 0.2s, background 0.2s',
        }}>About me</a>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}