import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/ui/PageTransition'
import ScrollProgress from '@/components/ui/ScrollProgress'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()
  if (slug === 'drect') return <DrectCaseStudy />
  if (slug === 'tokko') return <TokkoCaseStudy />
  notFound()
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontWeight: 700, fontSize: 'clamp(18px,2.5vw,26px)',
      letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: '20px', color: '#fff',
    }}>{children}</h2>
  )
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 'clamp(14px,1.5vw,15px)', color: '#a0a0a0', lineHeight: 1.8,
      fontWeight: 300, marginBottom: '16px',
    }}>{children}</p>
  )
}

function Divider() {
  return <div style={{ width: '100%', height: '1px', background: 'var(--border)', margin: '64px 0' }} />
}

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ width: '100%', margin: '40px 0' }}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        sizes="(max-width: 768px) 100vw, 1400px"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
      />
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      flex: 1, padding: 'clamp(16px,2vw,24px)', borderRadius: '12px',
      border: '1px solid var(--border)', background: '#111',
      textAlign: 'center', minWidth: '100px',
    }}>
      <p style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '6px' }}>{value}</p>
      <p style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400 }}>{label}</p>
    </div>
  )
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{
      padding: 'clamp(16px,2vw,24px)', borderRadius: '12px',
      border: '1px solid var(--border)', background: '#111',
    }}>
      <p style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{title}</p>
      <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{body}</p>
    </div>
  )
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      margin: '32px 0', padding: 'clamp(16px,2vw,24px) clamp(16px,2vw,28px)', borderRadius: '12px',
      background: '#111', border: '1px solid var(--border)',
      borderLeft: '3px solid #00E5A0',
    }}>
      <p style={{ fontSize: 'clamp(13px,1.5vw,15px)', color: '#c0c0c0', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300 }}>{children}</p>
    </div>
  )
}

function TableRow({ type, example, what }: { type: string; example: string; what: string }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 2fr 2fr',
      gap: '12px', padding: '12px 16px',
      borderBottom: '1px solid var(--border)',
      fontSize: 'clamp(11px,1.2vw,13px)', color: '#a0a0a0',
    }}>
      <span style={{ color: '#fff', fontWeight: 500 }}>{type}</span>
      <span style={{ fontFamily: 'monospace', color: '#00E5A0', fontSize: '11px', wordBreak: 'break-all' }}>{example}</span>
      <span>{what}</span>
    </div>
  )
}

function Label({ text, color }: { text: string; color: string }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: color, marginBottom: '14px',
    }}>{text}</p>
  )
}

function IASection({ number, title, badge, badgeColor, items }: {
  number: string
  title: string
  badge: string
  badgeColor: string
  items: { text: string; color: string }[]
}) {
  return (
    <div style={{ padding: '16px 20px', borderRadius: '10px', border: '1px solid var(--border)', background: '#0d0d0d' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#3a3a42' }}>{number}</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{title}</span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 8px', borderRadius: '999px', border: `1px solid ${badgeColor}40`, color: badgeColor, background: `${badgeColor}10`, whiteSpace: 'nowrap' }}>{badge}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color, flexShrink: 0, marginTop: '5px' }} />
            <span style={{ fontSize: '13px', color: '#888', lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const caseStyles = `
  .case-main { padding: clamp(80px,10vw,120px) clamp(20px,6vw,80px); }
  .insight-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important; }
  .stat-row { flex-wrap: wrap; }
  .meta-row { flex-wrap: wrap; gap: clamp(16px,3vw,48px) !important; }
  .cta-row { flex-direction: column; gap: 16px; }
  @media (max-width: 768px) {
    .cta-row { flex-direction: column !important; }
    .table-grid { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 480px) {
    .table-grid { grid-template-columns: 1fr !important; }
  }
`

function DrectCaseStudy() {
  const blue = '#60a5fa'
  return (
    <PageTransition>
      <ScrollProgress color="#60a5fa" />
      <style>{caseStyles}</style>
      <main className="case-main" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px' }}>← Back</Link>

        <Label text="Case study" color={blue} />
        <h1 style={{ fontWeight: 800, fontSize: 'clamp(24px,4vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '24px', color: '#fff' }}>
          Designing certainty into a service that sends a doctor to your home when you are most vulnerable
        </h1>
        <BodyText>Drect is an on-demand doctor app in Dubai. Patients book visits during moments of urgency, not when they have time to compare options. Confidence and speed are not features here. They are prerequisites.</BodyText>
        <BodyText>I was brought in with 6 incomplete wireframes covering roughly 25% of the product. Over 30 days, I designed the remaining experience end to end, defining the interaction model, core flows, and system behavior as a solo product designer.</BodyText>

        <div className="meta-row" style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '64px' }}>
          {[['Role', 'Product Designer, Solo end-to-end'], ['Timeline', '30 days'], ['Deliverable', '50+ production screens']].map(([label, val]) => (
            <div key={label}>
              <p style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{label}</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{val}</p>
            </div>
          ))}
        </div>

        <CaseImage src="/drect-thumbnail.png" alt="Drect app" />
        <Divider />

        <Label text="The problem" color={blue} />
        <SectionHeading>You are sick. You open Drect. Pick a specialty. The system assigns the nearest available doctor. They arrive at your door. You pay after. That is the entire product.</SectionHeading>
        <BodyText>The client had the concept and a developer ready. What they did not have was a defined product experience. They sent 6 wireframes including login, OTP, a home screen with three identical labels, a static Maps screenshot, a placeholder booking screen, and a profile. That was supposed to be the app.</BodyText>
        <BodyText>These were not incomplete screens. They were unanswered questions. How does assignment work? What happens between tapping Book and the doctor arriving? What if the service is not available in your area?</BodyText>
        <BodyText>The wireframes covered roughly 25% of what the product needed. I designed the rest.</BodyText>
        <CaseImage src="/drect-wireframes.png" alt="6 wireframes received" />
        <Divider />

        <Label text="Framing the problem" color={blue} />
        <SectionHeading>Before opening Figma, I spent two days mapping what was missing.</SectionHeading>
        <BodyText>Four things became clear and stayed true for every decision that followed.</BodyText>
        <div className="insight-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', margin: '32px 0' }}>
          <InsightCard title="Certainty is the product" body="Users are letting a stranger into their home while vulnerable. Doctor identity, credentials, pricing, and live tracking are not nice-to-haves." />
          <InsightCard title="Speed over choice" body="This is not a marketplace. The system picks the doctor. The experience needed to feel like Uber, not Zocdoc." />
          <InsightCard title="The map is the interface" body="Availability, assignment, tracking, arrival. The map communicates all of it. It stays dominant on every booking screen." />
          <InsightCard title="Edge cases define quality" body="Unavailable service, delays, long names, empty states. These are not exceptions. They are the experience." />
        </div>
        <Divider />

        <Label text="Structuring the product" color={blue} />
        <SectionHeading>The wireframes arrived without an information architecture. No screen inventory, no flow logic, no edge case coverage.</SectionHeading>
        <BodyText>Before designing anything, I mapped the complete product structure from scratch. The exercise had three outputs: what already existed in the wireframes, what I needed to design from the ground up, and what edge cases the product required to function in the real world. That map became the source of truth for every screen that followed.</BodyText>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', margin: '24px 0 32px' }}>
          {[['#555', 'Existed in wireframes'], ['#60a5fa', 'Designed from scratch'], ['#f59e0b', 'Edge case / error state']].map(([color, label]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginTop: '8px' }}>Entry Point</p>

          <IASection number="01" title="Onboarding" badge="wireframes" badgeColor="#555" items={[
            { text: 'Welcome carousel (3 slides)', color: '#555' },
            { text: 'Login / Register selection', color: '#555' },
            { text: 'Phone number input (UAE +971)', color: '#555' },
            { text: 'Phone input states — empty, filled, error', color: '#60a5fa' },
            { text: 'OTP verification (4 digit)', color: '#555' },
            { text: 'OTP states — partial, error, resend timer', color: '#60a5fa' },
          ]} />

          <IASection number="02" title="Location permission" badge="I designed" badgeColor="#60a5fa" items={[
            { text: 'Custom permission prompt', color: '#60a5fa' },
            { text: '"Enter location manually" fallback', color: '#60a5fa' },
            { text: 'Location denied — manual entry required', color: '#f59e0b' },
            { text: 'Not available in your area', color: '#f59e0b' },
          ]} />

          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginTop: '8px' }}>Bottom Tab — Home (Tab 1)</p>

          <IASection number="03" title="Home screen" badge="wireframes" badgeColor="#555" items={[
            { text: 'Map with nearby doctor pins', color: '#555' },
            { text: 'Location dropdown with change option', color: '#555' },
            { text: 'Time selector — "Now" or schedule later', color: '#60a5fa' },
            { text: 'Category tabs — General, Pediatric, Physio', color: '#555' },
            { text: 'Service card with price, symptoms, age', color: '#60a5fa' },
            { text: '"Book Doctor" primary CTA', color: '#555' },
          ]} />

          <IASection number="04" title="Booking flow" badge="wireframes" badgeColor="#555" items={[
            { text: 'Confirm details (first time vs returning)', color: '#60a5fa' },
            { text: 'Add patient info (name, age, gender)', color: '#60a5fa' },
            { text: 'Add address sub flow (flat, building, type)', color: '#60a5fa' },
            { text: '"Assigning shortly..." animation', color: '#60a5fa' },
            { text: 'Doctor assigned — photo, credentials, ETA', color: '#60a5fa' },
            { text: 'Real time tracking on map', color: '#60a5fa' },
            { text: '"Doctor reached home" confirmation', color: '#60a5fa' },
            { text: 'Long doctor name truncation', color: '#f59e0b' },
          ]} />

          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginTop: '8px' }}>Bottom Tab — Profile (Tab 2)</p>

          <IASection number="05" title="Profile screen" badge="wireframes" badgeColor="#555" items={[
            { text: 'User card, addresses, patients, reports', color: '#555' },
            { text: 'Booking list with status badges', color: '#60a5fa' },
            { text: 'Empty state — "No bookings yet"', color: '#60a5fa' },
            { text: 'Visit header, doctor info, rating', color: '#60a5fa' },
            { text: 'Price breakdown, invoice download', color: '#60a5fa' },
            { text: "Doctor's notes, medications, lab tests", color: '#60a5fa' },
          ]} />

          <IASection number="06" title="Doctor profile" badge="I designed" badgeColor="#60a5fa" items={[
            { text: 'Photo, specialization, stats, reviews', color: '#60a5fa' },
          ]} />

          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginTop: '8px' }}>System States (Global)</p>

          <IASection number="07" title="Error and edge case screens" badge="I designed" badgeColor="#60a5fa" items={[
            { text: 'Server error + "Retry"', color: '#f59e0b' },
            { text: 'Not serviceable + "Change location"', color: '#f59e0b' },
            { text: 'Skeleton loading state', color: '#f59e0b' },
            { text: 'Empty bookings illustration', color: '#f59e0b' },
            { text: 'Input validation errors', color: '#f59e0b' },
            { text: 'Long name truncation', color: '#f59e0b' },
          ]} />
        </div>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)', background: '#111', marginBottom: '40px' }}>
          {[['50+', 'Total screens'], ['12 (24%)', 'From wireframes'], ['38 (76%)', 'Designed from scratch'], ['6+', 'Edge cases']].map(([val, label]) => (
            <div key={label}>
              <p style={{ fontSize: '20px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '4px' }}>{val}</p>
              <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{label}</p>
            </div>
          ))}
        </div>

        <Divider />

        <Label text="Home screen" color={blue} />
        <SectionHeading>Balancing speed with decision confidence</SectionHeading>
        <BodyText>The core insight was to separate selection from evaluation. Users need enough context to choose a speciality, not enough to comparison shop.</BodyText>
        <BodyText>Icon chips kept the map dominant but stripped meaning. Full cards improved clarity but buried the map and slowed decisions. The final design uses tabs for switching, a single detail card for context, and live map pins tied to real availability. Map stays primary. Booking stays under two taps.</BodyText>
        <CaseImage src="/drect-home-iterations.png" alt="Home screen iterations" />
        <Divider />

        <Label text="Defining the booking flow" color={blue} />
        <SectionHeading>Every screen in this flow exists to answer one question. Not to add steps. To remove doubt.</SectionHeading>
        <BodyText>The wireframes jumped from Book Doctor to Doctor Assigned with nothing in between. That gap is where the experience lives. Is the app working? Who is coming? When will they arrive?</BodyText>
        <BodyText>I designed six screens to resolve that uncertainty progressively. Confirmation adapts for first-time and returning users. The assigning state makes the system visible. Doctor assignment surfaces identity, credentials, and ETA immediately. Live tracking returns control to the user. Arrival confirmation closes the loop.</BodyText>
        <BodyText>Each screen is the answer to a specific anxiety, in the order those anxieties occur.</BodyText>
        <CaseImage src="/drect-booking-flow.png" alt="Core booking flow screens" />

        <div style={{ width: '100%', margin: '40px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', background: '#0d0d0d' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <source src="/drect-prototype.mp4" type="video/mp4" />
          </video>
        </div>

        <Divider />

        <Label text="Before and after" color={blue} />
        <SectionHeading>Same three entry points. Completely different product.</SectionHeading>
        <BodyText>The home screen shifted from static text labels to a map-first interface with live doctor availability. The booking experience evolved from a placeholder list into a state-driven flow where assignment, tracking, and arrival make the system visible at every step.</BodyText>
        <BodyText>What changed was not the screens. It was the system behind them.</BodyText>
        <CaseImage src="/drect-before-after.png" alt="Before and after" />
        <Divider />

        <Label text="Designing for failure, not just flow" color={blue} />
        <SectionHeading>Denied location access, unavailable service, server failure, empty booking history. These are not edge cases. They are expected states.</SectionHeading>
        <BodyText>I designed each scenario explicitly. What the user sees, what the system communicates, and what action is available next. The happy path is the easy part. The product quality lives here.</BodyText>
        <CaseImage src="/drect-edge-cases.png" alt="Edge cases" />
        <Divider />

        <Label text="Impact" color={blue} />
        <SectionHeading>The auto-assignment model became the product core interaction.</SectionHeading>
        <div className="stat-row" style={{ display: 'flex', gap: '16px', margin: '32px 0', flexWrap: 'wrap' }}>
          <StatCard value="6" label="wireframes received" />
          <StatCard value="50+" label="production screens" />
          <StatCard value="30" label="days, solo" />
          <StatCard value="0" label="PM, researcher, or system" />
        </div>
        <BodyText>Confidence was built into every step of the booking flow. Doctor identity, credentials, ETA, and live tracking stayed visible from assignment to arrival. 50+ screens delivered across all states including loading, empty, error, and success so development could move without ambiguity.</BodyText>
        <BodyText>The scope expanded beyond booking. Prescriptions, reports, invoices and follow-ups turned a single-use flow into a health layer that persists beyond each visit.</BodyText>
        <div style={{ marginTop: '32px', padding: 'clamp(16px,2vw,24px)', borderRadius: '12px', border: '1px solid var(--border-light)', background: '#111', borderLeft: '3px solid #60a5fa' }}>
          <p style={{ fontSize: 'clamp(13px,1.5vw,14px)', color: '#c0c0c0', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300 }}>
            The most valuable work was not visual. It was asking the right questions early enough that the answers could shape the product.
          </p>
        </div>
        <Divider />

        <div className="cta-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: 'clamp(16px,2vw,18px)', fontWeight: 700, marginBottom: '4px' }}>Liked this project?</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Let us work on something together.</p>
          </div>
          <Link href="/contact" className="btn-scale" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', background: 'var(--fg)', color: 'var(--bg)', fontWeight: 600, fontSize: '14px' }}>Get in touch →</Link>
        </div>
      </main>
    </PageTransition>
  )
}

function TokkoCaseStudy() {
  const green = '#00E5A0'
  return (
    <PageTransition>
      <ScrollProgress color="#00E5A0" />
      <style>{caseStyles}</style>
      <main className="case-main" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px' }}>← Back</Link>

        <Label text="Case study" color={green} />
        <h1 style={{ fontWeight: 800, fontSize: 'clamp(24px,4vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '24px', color: '#fff' }}>
          How do you compress AI prompts without losing what actually matters?
        </h1>
        <BodyText>Tokko is a prompt compression tool I designed and built from scratch, shipped as a web app, Chrome extension, and public REST API in 2 weeks.</BodyText>
        <BodyText>Post launch I acquired early users through Reddit. Adoption was fast. Retention was not. The core issue was that token savings alone did not create enough perceived value to justify a behavior change.</BodyText>
        <BodyText>This case study documents the product decisions, what I got right, and what I would do differently.</BodyText>

        <div className="meta-row" style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '64px' }}>
          {[['Role', 'Product Designer, full ownership'], ['Timeline', '2 weeks'], ['Shipped', 'Web app, Chrome extension, REST API']].map(([label, val]) => (
            <div key={label}>
              <p style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{label}</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{val}</p>
            </div>
          ))}
          <div>
            <p style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Live site</p>
            <a href="https://tokko-seven.vercel.app/" target="_blank" style={{ fontSize: '14px', fontWeight: 600, color: '#00E5A0', textDecoration: 'none' }}>tokko-seven.vercel.app</a>
          </div>
        </div>

        <CaseImage src="/tokko-hero.png" alt="Tokko product" />
        <Divider />

        <Label text="Why a two-panel layout" color={green} />
        <SectionHeading>The optimizer did not start as two panels. I explored two other approaches first.</SectionHeading>
        <BodyText>Inline compression meant editing the original prompt directly. It felt efficient on paper. In practice it destroyed trust because users could not see what changed, so they could not verify the output was still correct.</BodyText>
        <BodyText>Toggle view meant switching between original and compressed, hiding the transformation entirely. If you cannot see both at once, you cannot evaluate whether meaning survived.</BodyText>
        <BodyText>Both failed for the same underlying reason. Compression only works if users trust it. Trust requires visibility.</BodyText>
        <BodyText>The breakthrough came from Google Translate. Input left, output right. You type, it transforms, you copy. That mental model is already internalized. But Tokko is not translation. Compression needs to feel like reduction, not just substitution. So I designed the output panel to feel visibly smaller with fewer lines, tighter density, and more whitespace so users could perceive the token reduction without reading both versions line by line.</BodyText>
        <CaseImage src="/tokko-two-panel.png" alt="Two panel layout" />
        <Divider />

        <Label text="Constraint integrity" color={green} />
        <SectionHeading>The hardest design problem in the product. This was not planned. I found it by using my own product.</SectionHeading>
        <BodyText>I was compressing prompts with specific instructions including format rules, URLs, and things the AI was told not to do. After compression, some were gone. The prompt was shorter. It was also wrong.</BodyText>
        <BodyText>I tested dozens of prompts and found three categories of constraints that compression consistently stripped.</BodyText>

        <div style={{ margin: '32px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <div className="table-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr', gap: '12px', padding: '12px 16px', background: '#111', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <span>Type</span><span>Example</span><span>What happened</span>
          </div>
          <TableRow type="URLs" example="docs.api.com/v2/ref" what="Removed or mangled" />
          <TableRow type="Format rules" example="Respond only in JSON" what="Silently dropped" />
          <TableRow type="Prohibitions" example="Do not mention competitors" what="Gone entirely" />
        </div>

        <BodyText>The pattern was clear. Compression was disproportionately removing high-signal instructions, the exact tokens that determined whether the output was correct.</BodyText>

        <SectionHeading>The solution</SectionHeading>
        <BodyText>I built a constraint integrity layer with four deterministic steps.</BodyText>
        <div className="insight-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', margin: '24px 0' }}>
          <InsightCard title="1. Detect" body="Scan for constraints before compression runs." />
          <InsightCard title="2. Compress" body="Apply token reduction normally." />
          <InsightCard title="3. Verify" body="Check every flagged constraint survived." />
          <InsightCard title="4. Recover" body="Reinsert anything stripped, no extra API calls." />
        </div>
        <BodyText>Keeping it deterministic was a deliberate choice. No additional model calls meant low latency and predictable behavior. The tradeoff was that pattern matching struggles with implicit or ambiguous constraints.</BodyText>

        <SectionHeading>The trust problem</SectionHeading>
        <BodyText>The hardest part was not the system. It was how to communicate it. Early messaging said 3 constraints were lost but restored. Users read lost and trusted the tool less, even though it had just saved them from a broken prompt.</BodyText>
        <BodyText>Reframing it as 3 constraints protected changed everything. Same information, completely different emotional response. The system intervention became a feature, not a warning.</BodyText>
        <CaseImage src="/tokko-constraint.png" alt="Constraint integrity UI" />
        <Divider />

        <Label text="Every state, not just the happy path" color={green} />
        <SectionHeading>Most side projects only design the success state. I designed every state a user could hit.</SectionHeading>
        <BodyText>Compression can silently degrade output. A prompt that looks shorter but produces wrong results is worse than no compression at all. That made failure states as critical as success states.</BodyText>
        <BodyText>I mapped and designed 15+ distinct states across the optimizer, analytics, history, settings, and global error boundaries.</BodyText>

        <div style={{ margin: '32px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', padding: '12px 16px', background: '#111', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <span>State</span><span>What it handles</span>
          </div>
          {[
            ['Empty', 'No prompt entered yet'],
            ['Loading', 'Compression in progress'],
            ['Success', 'Validated, constraints preserved'],
            ['Error', 'Failed compression, API issues, constraint conflicts'],
          ].map(([state, desc]) => (
            <div key={state} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', padding: '12px 16px', borderBottom: '1px solid var(--border)', fontSize: '13px', color: '#a0a0a0' }}>
              <span style={{ color: '#fff', fontWeight: 500 }}>{state}</span>
              <span>{desc}</span>
            </div>
          ))}
        </div>

        <BodyText>The principle across all of them was no silent failure. Users are always told what happened and what to do next.</BodyText>
        <CaseImage src="/tokko-states.png" alt="All states design" />
        <Divider />

        <Label text="Proving it works instead of claiming it" color={green} />
        <SectionHeading>The biggest barrier to adoption was not compression. It was trust.</SectionHeading>
        <BodyText>Telling users compression preserves quality is just a claim. I needed them to see it themselves. So I built the Playground.</BodyText>
        <BodyText>It sends both the original and compressed prompt to Claude simultaneously and displays both responses side by side. Users compare structure, completeness, and intent directly. The validation shifts from a system assertion to a user observation.</BodyText>
        <BodyText>The Playground does not score outputs or declare a winner. It shows both and lets the user decide. A user who sees a slightly different response and understands why will trust the system more than one who gets a confidence score they cannot verify.</BodyText>
        <CaseImage src="/tokko-playground.png" alt="Tokko playground" />
        <Divider />

        <Label text="What the market said" color={green} />
        <SectionHeading>I posted Tokko on Reddit. The feedback taught me more than building did.</SectionHeading>
        <BodyText>A developer in the comments cut to it immediately.</BodyText>
        <QuoteBlock>For one-off prompts, you are spending tokens to save tokens. The math does not work.</QuoteBlock>
        <BodyText>They were right. The only scenario where compression economics make sense is system prompts reused thousands of times. Compress once, save forever. That is a fundamentally narrower audience than everyone who uses AI. I had built for the wrong user.</BodyText>
        <BodyText>I did not get defensive. I replied honestly.</BodyText>
        <QuoteBlock>You are right. For one-off prompts, you are spending tokens to save tokens. That does not make sense and I will not pretend it does.</QuoteBlock>
        <BodyText>That reply got more engagement than any feature I shipped. Honesty built more trust than polish ever would have.</BodyText>
        <Divider />

        <Label text="Reflection" color={green} />
        <SectionHeading>What I got right</SectionHeading>
        <BodyText>Found the real problem by using my own product. Constraint integrity was not on any roadmap. It came from testing, watching prompts break, and recognizing that a shorter but broken prompt is worse than doing nothing. That is a product instinct, not a planned feature.</BodyText>
        <BodyText>Designed for trust, not just function. The Playground exists because claiming something works is not convincing. Letting users verify it themselves is. That distinction is a design decision, not a feature decision.</BodyText>
        <BodyText>Shipped and engaged honestly. Real users, real criticism, real answers. The Reddit moment was not a setback. It was the clearest signal the product ever gave me.</BodyText>

        <SectionHeading>What I would do differently</SectionHeading>
        <BodyText>Validate the economics before writing a line of code. A landing page, a waitlist, five conversations with API developers. The Reddit feedback I got post-launch was available pre-launch. I just did not go looking for it.</BodyText>
        <BodyText>If I continue Tokko, the pivot is clear. From make prompts shorter to make prompts better. That is a different product with a defensible value proposition.</BodyText>

        <div style={{ marginTop: '32px', padding: 'clamp(16px,2vw,24px)', borderRadius: '12px', border: '1px solid var(--border-light)', background: '#111', borderLeft: '3px solid #00E5A0' }}>
          <p style={{ fontSize: 'clamp(13px,1.5vw,14px)', color: '#c0c0c0', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300 }}>
            The design work, especially constraint integrity, solved a genuine problem. The value proposition was wrong for the mass market. I know exactly why, and exactly what I would do differently. That is not a failure. That is how products work.
          </p>
        </div>
        <Divider />

        <div className="cta-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: 'clamp(16px,2vw,18px)', fontWeight: 700, marginBottom: '4px' }}>Liked this project?</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Let us work on something together.</p>
          </div>
          <Link href="/contact" className="btn-scale" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', background: 'var(--fg)', color: 'var(--bg)', fontWeight: 600, fontSize: '14px' }}>Get in touch →</Link>
        </div>
      </main>
    </PageTransition>
  )
}