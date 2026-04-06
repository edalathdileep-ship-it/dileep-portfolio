import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/ui/PageTransition'

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
      fontWeight: 700, fontSize: 'clamp(20px,2.5vw,26px)',
      letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: '20px', color: '#fff',
    }}>{children}</h2>
  )
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '15px', color: '#a0a0a0', lineHeight: 1.8,
      fontWeight: 300, marginBottom: '16px',
    }}>{children}</p>
  )
}

function Divider() {
  return <div style={{ width: '100%', height: '1px', background: 'var(--border)', margin: '72px 0' }} />
}

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ width: '100%', margin: '48px 0' }}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
      />
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      flex: 1, padding: '24px', borderRadius: '12px',
      border: '1px solid var(--border)', background: '#111',
      textAlign: 'center', minWidth: '120px',
    }}>
      <p style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '6px' }}>{value}</p>
      <p style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400 }}>{label}</p>
    </div>
  )
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{
      padding: '24px', borderRadius: '12px',
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
      margin: '32px 0', padding: '24px 28px', borderRadius: '12px',
      background: '#111', border: '1px solid var(--border)',
      borderLeft: '3px solid #00E5A0',
    }}>
      <p style={{ fontSize: '15px', color: '#c0c0c0', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300 }}>{children}</p>
    </div>
  )
}

function TableRow({ type, example, what }: { type: string; example: string; what: string }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 2fr 2fr',
      gap: '16px', padding: '14px 16px',
      borderBottom: '1px solid var(--border)',
      fontSize: '13px', color: '#a0a0a0',
    }}>
      <span style={{ color: '#fff', fontWeight: 500 }}>{type}</span>
      <span style={{ fontFamily: 'monospace', color: '#00E5A0', fontSize: '12px' }}>{example}</span>
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

function DrectCaseStudy() {
  const blue = '#60a5fa'
  return (
    <PageTransition>
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 80px 120px' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px' }}>← Back</Link>

        <Label text="Case study" color={blue} />
        <h1 style={{ fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '24px', color: '#fff' }}>
          Designing certainty into a service that sends a doctor to your home when you are most vulnerable
        </h1>
        <BodyText>Drect is an on-demand doctor app in Dubai. Patients book visits during moments of urgency, not when they have time to compare options. Confidence and speed are not features here. They are prerequisites.</BodyText>
        <BodyText>I was brought in with 6 incomplete wireframes covering roughly 25% of the product. Over 30 days, I designed the remaining experience end to end, defining the interaction model, core flows, and system behavior as a solo product designer.</BodyText>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '64px' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '32px 0' }}>
          <InsightCard title="Certainty is the product" body="Users are letting a stranger into their home while vulnerable. Doctor identity, credentials, pricing, and live tracking are not nice-to-haves." />
          <InsightCard title="Speed over choice" body="This is not a marketplace. The system picks the doctor. The experience needed to feel like Uber, not Zocdoc." />
          <InsightCard title="The map is the interface" body="Availability, assignment, tracking, arrival. The map communicates all of it. It stays dominant on every booking screen." />
          <InsightCard title="Edge cases define quality" body="Unavailable service, delays, long names, empty states. These are not exceptions. They are the experience." />
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
        <div style={{ display: 'flex', gap: '16px', margin: '32px 0', flexWrap: 'wrap' }}>
          <StatCard value="6" label="wireframes received" />
          <StatCard value="50+" label="production screens" />
          <StatCard value="30" label="days, solo" />
          <StatCard value="0" label="PM, researcher, or system" />
        </div>
        <BodyText>Confidence was built into every step of the booking flow. Doctor identity, credentials, ETA, and live tracking stayed visible from assignment to arrival. 50+ screens delivered across all states including loading, empty, error, and success so development could move without ambiguity.</BodyText>
        <BodyText>The scope expanded beyond booking. Prescriptions, reports, invoices and follow-ups turned a single-use flow into a health layer that persists beyond each visit.</BodyText>
        <div style={{ marginTop: '32px', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-light)', background: '#111', borderLeft: '3px solid #60a5fa' }}>
          <p style={{ fontSize: '14px', color: '#c0c0c0', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300 }}>
            The most valuable work was not visual. It was asking the right questions early enough that the answers could shape the product.
          </p>
        </div>
        <Divider />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>Liked this project?</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Let us work on something together.</p>
          </div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', background: 'var(--fg)', color: 'var(--bg)', fontWeight: 600, fontSize: '14px' }}>Get in touch →</Link>
        </div>
      </main>
    </PageTransition>
  )
}

function TokkoCaseStudy() {
  const green = '#00E5A0'
  return (
    <PageTransition>
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 80px 120px' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px' }}>← Back</Link>

        <Label text="Case study" color={green} />
        <h1 style={{ fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '24px', color: '#fff' }}>
          How do you compress AI prompts without losing what actually matters?
        </h1>
        <BodyText>Tokko is a prompt compression tool I designed and built from scratch, shipped as a web app, Chrome extension, and public REST API in 2 weeks.</BodyText>
        <BodyText>Post launch I acquired early users through Reddit. Adoption was fast. Retention was not. The core issue was that token savings alone did not create enough perceived value to justify a behavior change.</BodyText>
        <BodyText>This case study documents the product decisions, what I got right, and what I would do differently.</BodyText>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '64px' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr', gap: '16px', padding: '12px 16px', background: '#111', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <span>Type</span><span>Example</span><span>What happened</span>
          </div>
          <TableRow type="URLs" example="docs.api.com/v2/ref" what="Removed or mangled" />
          <TableRow type="Format rules" example="Respond only in JSON" what="Silently dropped" />
          <TableRow type="Prohibitions" example="Do not mention competitors" what="Gone entirely" />
        </div>

        <BodyText>The pattern was clear. Compression was disproportionately removing high-signal instructions, the exact tokens that determined whether the output was correct.</BodyText>

        <SectionHeading>The solution</SectionHeading>
        <BodyText>I built a constraint integrity layer with four deterministic steps.</BodyText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', padding: '12px 16px', background: '#111', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <span>State</span><span>What it handles</span>
          </div>
          {[
            ['Empty', 'No prompt entered yet'],
            ['Loading', 'Compression in progress'],
            ['Success', 'Validated, constraints preserved'],
            ['Error', 'Failed compression, API issues, constraint conflicts'],
          ].map(([state, desc]) => (
            <div key={state} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', padding: '14px 16px', borderBottom: '1px solid var(--border)', fontSize: '13px', color: '#a0a0a0' }}>
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

        <div style={{ marginTop: '32px', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-light)', background: '#111', borderLeft: '3px solid #00E5A0' }}>
          <p style={{ fontSize: '14px', color: '#c0c0c0', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300 }}>
            The design work, especially constraint integrity, solved a genuine problem. The value proposition was wrong for the mass market. I know exactly why, and exactly what I would do differently. That is not a failure. That is how products work.
          </p>
        </div>
        <Divider />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>Liked this project?</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Let us work on something together.</p>
          </div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', background: 'var(--fg)', color: 'var(--bg)', fontWeight: 600, fontSize: '14px' }}>Get in touch →</Link>
        </div>
      </main>
    </PageTransition>
  )
}