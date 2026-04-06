import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`}>
      <article
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: '#111113',
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.35s',
          cursor: 'pointer',
          display: 'block',
        }}
        className="project-card"
      >
        {/* Image */}
        <div style={{ width: '100%', height: '420px', overflow: 'hidden', position: 'relative', background: '#0d0d10' }}>
          <div
            style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(to bottom, transparent 60%, rgba(17,17,19,0.6) 100%)',
            }}
          />
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            sizes="960px"
            style={{ objectFit: 'cover', objectPosition: 'top center', transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }}
            className="card-img"
          />
        </div>

        {/* Meta */}
        <div style={{ padding: '20px 28px 28px', background: '#111113', borderTop: '1px solid #1e1e22' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#3a3a42', letterSpacing: '0.06em', marginBottom: '6px' }}>
                {project.number}
              </div>
              <span style={{ fontWeight: 700, fontSize: '22px', letterSpacing: '-0.02em' }}>{project.name}</span>
            </div>
            <span
              className="card-arrow"
              style={{
                width: '32px', height: '32px', borderRadius: '50%',
                border: '1px solid #2a2a30', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '14px', color: 'var(--muted)',
                transition: 'all 0.2s', flexShrink: 0,
              }}
            >↗</span>
          </div>

          <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '16px', maxWidth: '600px' }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                padding: '4px 12px', borderRadius: '999px',
                border: '1px solid var(--tag-border)', background: 'var(--tag-bg)',
                fontSize: '11.5px', color: 'var(--muted)',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}