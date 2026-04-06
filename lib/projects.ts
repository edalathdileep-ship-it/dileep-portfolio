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
        'End-to-end product design for a Dubai-based on-demand home doctor service. Designed 50+ screens in 30 days from 6 client wireframes.',
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
        'Designed and built a full SaaS product solo — web app, Chrome extension, and public API. A prompt compression tool that saves money on AI API costs.',
      tags: ['SaaS', 'Product Design', 'Vibe Coded', 'Case Study'],
      headline: 'Tokko — AI prompt compression, built solo',
      role: 'Designer & Builder',
      timeline: '3 weeks',
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