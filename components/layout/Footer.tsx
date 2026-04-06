export default function Footer() {
    return (
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '24px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '12.5px', color: 'var(--muted-2)', fontWeight: 700 }}>© 2026 Dileep Edalath</span>
        <div style={{ display: 'flex', gap: '16px' }}>
  
          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" title="LinkedIn" style={{
            width: '32px', height: '32px', borderRadius: '6px',
            border: '1px solid var(--border)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: 'var(--muted)', textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
  
          {/* GitHub */}
          <a href="https://github.com" target="_blank" title="GitHub" style={{
            width: '32px', height: '32px', borderRadius: '6px',
            border: '1px solid var(--border)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: 'var(--muted)', textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
  
        </div>
      </footer>
    )
  }