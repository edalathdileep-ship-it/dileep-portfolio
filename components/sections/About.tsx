import FadeUp from '@/components/ui/FadeUp'
import Image from 'next/image'

const skills = [
  'Figma', 'Interaction Design', 'UX Research', 'React',
  'Cursor', 'Claude', 'Vibe Designing', 'Prototyping', 'Vibe Coding',
]

export default function About() {
  return (
    <section style={{ maxWidth: '960px', margin: '0 auto', padding: '96px 24px' }} id="about">
      <FadeUp>
        <p style={{
          fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px',
        }}>About</p>
      </FadeUp>

      <FadeUp delay={70}>
        <h2 style={{
          fontWeight: 800, fontSize: 'clamp(28px,4vw,38px)',
          letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '32px',
        }}>A bit about me</h2>
      </FadeUp>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'clamp(120px, 20vw, 200px) 1fr',
        gap: 'clamp(24px, 4vw, 56px)',
        alignItems: 'start',
      }}>
        <FadeUp>
          <div style={{
            width: '100%', borderRadius: '12px',
            overflow: 'hidden', background: '#1a1a1a',
          }}>
            <Image
              src="/dileep.jpeg"
              alt="Dileep Edalath"
              width={200}
              height={200}
              loading="eager"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div style={{
            display: 'flex', flexDirection: 'column',
            gap: '18px', fontSize: 'clamp(13px, 1.5vw, 14.5px)', lineHeight: 1.75,
            color: '#c0c0c0', fontWeight: 300, marginBottom: '28px',
          }}>
            <p>Hi, I am <strong style={{ color: '#fff', fontWeight: 500 }}>Dileep</strong>. A self-taught product designer from Kerala based in Bangalore. I focus on taking messy, early-stage ideas and turning them into clear, usable products.</p>
            <p>I like working on things where the problem is not fully defined yet. Where there is no playbook and you have to figure it out.</p>
            <p>Recently, I have been designing and building products with AI assistants. I go from idea to a shipped, working product much faster now.</p>
            <p>I care about making products feel simple without dumbing them down. Good design to me is when something just works, scales well, and solves the right problem.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map(skill => (
              <span key={skill} style={{
                padding: '5px 13px', borderRadius: '999px',
                border: '1px solid var(--tag-border)',
                background: 'var(--tag-bg)',
                fontSize: '12px', color: 'var(--muted)',
              }}>{skill}</span>
            ))}
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #about .about-responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}