import { TextScramble } from '@/components/core/text-scramble'
import { Button } from '@/app/components/ui/button'
import { type Project } from '@/app/components/project-card'
import { ProjectCarousel } from '@/app/components/project-carousel'
import Image from 'next/image'

const socials = [
  { name: 'GitHub', href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { name: 'Email', href: 'mailto:you@example.com' },
]

const projects: Project[] = [
  {
    number: '01',
    name: 'AI Lead Qualification Agent',
    description: 'An autonomous agent that ingests CRM lead data through accounts and emails, and evaluates qualifications against custom scoring criteria using web search and company intelligence.',
    date: 'JULY 2026 - ',
    tech: ['Python', 'Next.js', 'Supabase', 'Hubspot', 'Claude API'],
    status: 'WIP',
    href: 'https://example.com',
    comingSoon: true,
  },
  {
    number: '02',
    name: 'Brand Intelligence Social Media Classifier',
    description: 'An end-to-end NLP pipeline to process 10,000+ Reddit posts into structured, actionable insights for enterprise customers.',
    date: 'JAN 2026 - MAY 2026',
    tech: ['Python', 'Typescript', 'React', 'Vercel', 'OpenAI API', 'Huggingface', 'AWS', 'GCP'],
    status: 'LIVE',
    href: 'https://unwrap-classifier-web.vercel.app/',
  },
  {
    number: '03',
    name: 'FLOW',
    description: 'A CLI tool that snapshots active IDE files and browser tabs into portable project context bundles, cutting context-switching overhead for developers working across multi-repo environments. Built at LA Hacks.',
    date: 'APR 2026',
    tech: ['Python', 'Typescript', 'Chrome Debugging Protocol', 'Express', 'Node.js', 'Gemini API'],
    status: 'LIVE',
    href: 'https://github.com/natashaj13/flow',
  },
  {
    number: '04',
    name: 'AccessiBILL',
    description: 'A full-stack civic tech platform that transforms dense legislative text into personalized impact summaries. Built over 24 hours at UCSB\'s Datathon.',
    date: 'FEB 2026',
    tech: ['Python', 'Typescript', 'OCR', 'React', 'FastAPI', 'Render'],
    status: 'LIVE',
    href: 'https://github.com/sanjanab1/accessiBILL',
  },
  {
    number: '05',
    name: 'AI Chat + Document Summarizer',
    description: 'An AI chat service enabling natural-language querying over CrossNoKaye\'s PDF documents.',
    date: 'October 2025',
    tech: ['Python', 'Typescript', 'LangChain', 'Next.js', 'Vercel', 'OpenAI API'],
    status: 'live',
    href: 'https://github.com/acm-industry/crossnokaye-document-summarizer',
  },
  {
    number: '06',
    name: 'Portfolio',
    description: 'Portfolio showcasing my dev work!',
    date: 'JUNE 2026 - ',
    tech: ['Typescript', 'HTML', 'CSS','Vercel'],
    status: 'live',
    href: 'https://github.com/sanjanab1/portfolio',
  },
  {
    number: '07',
    name: 'Pomodoro',
    description: 'Simple customizable Pomodoro timer with enabled desktop notifications.',
    date: 'JULY 2026 - ',
    tech: ['Typescript', 'HTML', 'CSS', 'Vercel'],
    status: 'WIP',
    href: 'https://github.com/sanjanab1/smart-pomodoro',
  },
  {
    number: '08',
    name: 'To Do List App',
    description: 'Customizable to-do list app for iOS and macOS.',
    date: 'APR 2026 - ',
    tech: ['Swift', 'SwiftUI'],
    status: 'WIP',
    href: 'https://github.com/sanjanab1/todolist',
  },
]

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 md:gap-15 items-center py-16 md:py-10"> 
        {/*grid container that shows 1 col by default on mobile/small screen*/}
        {/*change to 4 cols on bigger screens, space of 10 gap, align items in center and vertical tabbing*/}
        <div className="pixel-box relative ml-auto mr-0 hidden md:block aspect-square w-[50%] overflow-hidden bg-card">
          {/*pixel box for retro aesthetic, child elements use absolute positioning within*/}
          {/*force square set width, set width to full width, apply a background color*/}
          <Image
            src="/images/profile-1.png"
            alt="pixel self-portrait"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="md:col-full">
          <p className="mb-3 font-pixel text-[10px] tracking-widest text-accent">
            [PLAYER_01]
          </p>
          <h1 className="font-display text-foreground text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            <TextScramble className="font-pixel text-2xl md:text-3xl text-accent" duration={1000} replayIntervalMs={20000}>
              WELCOME!
            </TextScramble>
          </h1>
          <p className="mt-6 max-w-md text-foreground/80 md:text-xs">
            {`Hi! My name is Sanjana, and I'm a 3rd year CS student at UC Santa Barbara.
             I'm particularly interested in machine learning and computer vision. Look around to check out my work!`}
          </p>
        </div>
      </section>

      <section id="projects" className="py-16">
        <p className="mb-2 font-pixel text-[10px] tracking-widest text-accent">[LEVEL_02]</p>
        <h2 className="mb-8 font-display text-xl md:text-xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <ProjectCarousel projects={projects} />
      </section>

      <section id="connect" className="py-16">
        <p className="mb-2 font-pixel text-[10px] tracking-widest text-accent">[LEVEL_03]</p>
        <h2 className="mb-8 font-display text-xl md:text-xl font-semibold tracking-tight text-foreground">
          Let&apos;s Connect!
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((social) => (
            <Button key={social.name} asChild size="lg">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent"
              >
                {social.name}
              </a>
            </Button>
          ))}
        </div>
      </section>
    </>
  )
}
