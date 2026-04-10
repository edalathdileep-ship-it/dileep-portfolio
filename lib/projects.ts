export type Project = {
  slug: string
  number: string
  name: string
  description: string
  thumbnail: string
  tags: string[]
  headline: string
  role: string
  timeline: string
  overview: string
  challenge: string
  solution: string
  outcome: string
}

export const projects: Project[] = [
  {
    slug: 'drect',
    number: '01',
    name: 'Drect',
    thumbnail: '/drect-thumbnail.png',
    description:
      'Booking a doctor at home in Dubai felt like filling out a government form. I took 6 rough wireframes from a client and turned them into 50+ screens in 30 days. Every flow rethought. Every friction point removed. From the first tap to the doctor at your door.',
    tags: ['Mobile App', 'Healthcare', 'Freelance', 'Case Study'],
    headline: 'Health at Home — Redesigning urgent care for Dubai',
    role: 'Product Designer',
    timeline: '30 days',
    overview:
      'Drect is a Dubai-based on-demand home doctor service. I took 6 rough wireframes and turned them into a complete 50+ screen product.',
    challenge:
      'Users needed to book a doctor in under 3 minutes during high-stress moments. The original flow had 9 steps before confirmation.',
    solution:
      'Reduced booking to 3 steps. Designed a triage-first flow that surfaced urgency levels upfront, reducing support calls.',
    outcome:
      'Delivered a production-ready design system and handed off to dev in 30 days. App launched in Dubai in Q1 2024.',
  },
  {
    slug: 'tokko',
    number: '02',
    name: 'Tokko',
    thumbnail: '/tokko-thumbnail.png',
    description:
      'Every time a developer calls an AI API they are paying for words the model does not need. I built Tokko solo from scratch — web app, Chrome extension, and public API. Same results, fraction of the tokens.',
    tags: ['SaaS', 'Product Design', 'Vibe Coded', 'Case Study'],
    headline: 'Tokko — AI prompt compression, built solo',
    role: 'Designer & Builder',
    timeline: '2 weeks',
    overview:
      'Tokko compresses AI prompts to reduce token usage — same results, fraction of the cost. I designed and built it entirely solo.',
    challenge:
      'Developers were burning money on verbose prompts. No clean tool existed to compress them without losing semantic meaning.',
    solution:
      'Built a web app, Chrome extension, and API. Designed a dashboard that made compression ratios immediately understandable.',
    outcome:
      'Launched publicly. Used by 200+ developers in first month. Chrome extension hit 4.8 stars.',
  },
]