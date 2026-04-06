import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'

const Divider = () => (
  <div style={{
    width: '100%', maxWidth: '960px',
    margin: '0 auto', height: '1px',
    background: 'var(--border)',
  }} />
)

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Divider />
      <Work />
      <Divider />
      <About />
    </main>
  )
}