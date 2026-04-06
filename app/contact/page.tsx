'use client'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit() {
    if (!name || !email || !message) return
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '8px',
    border: '1px solid var(--border-light)', background: '#111',
    color: '#fff', fontSize: '14px', fontFamily: 'inherit',
    outline: 'none',
  }

  return (
    <main style={{ maxWidth: '560px', margin: '0 auto', padding: '120px 24px 96px' }}>
      <p style={{
        fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px',
      }}>Contact</p>

      <h1 style={{
        fontWeight: 800, fontSize: 'clamp(32px,5vw,48px)',
        letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '16px',
      }}>Let's work<br />together</h1>

      <p style={{
        color: 'var(--muted)', fontSize: '15px', fontWeight: 300,
        marginBottom: '48px', lineHeight: 1.7,
      }}>
        Have a project in mind? Send me a message and I'll get back to you within 24 hours.
      </p>

      {status === 'sent' ? (
        <div style={{
          padding: '24px', borderRadius: '12px',
          border: '1px solid #22c55e40', background: '#22c55e10',
          color: '#22c55e', fontSize: '15px',
        }}>
          ✓ Message sent! I'll be in touch soon.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', fontSize: '13px', color: 'var(--muted)', marginBottom: '8px' }}>Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ display: 'block', fontSize: '13px', color: 'var(--muted)', marginBottom: '8px' }}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', fontSize: '13px', color: 'var(--muted)', marginBottom: '8px' }}>Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: '13px', color: '#f87171' }}>
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === 'sending'}
            style={{
              padding: '13px 28px', borderRadius: '8px',
              background: status === 'sending' ? '#333' : 'var(--fg)',
              color: status === 'sending' ? '#888' : 'var(--bg)',
              fontWeight: 600, fontSize: '14px', border: 'none',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit', alignSelf: 'flex-start',
              transition: 'opacity 0.2s',
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send message →'}
          </button>
        </div>
      )}
    </main>
  )
}