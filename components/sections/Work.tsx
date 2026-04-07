import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeUp from '@/components/ui/FadeUp'

export default function Work() {
  return (
    <section style={{ maxWidth: '960px', margin: '0 auto', padding: '96px 24px' }} id="work">
      <FadeUp>
        <p style={{
          fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px',
        }}>Selected work</p>
      </FadeUp>

      <FadeUp delay={70}>
        <h2 style={{
          fontWeight: 800, fontSize: 'clamp(28px,4vw,38px)',
          letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '48px',
        }}>Recent projects</h2>
      </FadeUp>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {projects.map((project, i) => (
          <FadeUp key={project.slug} delay={i * 100}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </section>
  )
}