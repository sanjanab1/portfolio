import { TextScramble } from '@/components/core/text-scramble'
import { Button } from '@/app/components/ui/button'
import { ProjectCard, type Project } from '@/app/components/project-card'
import Image from 'next/image'

const socials = [
  { name: 'GitHub', href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { name: 'Email', href: 'mailto:you@example.com' },
]

const projects: Project[] = [
  {
    number: '01',
    name: 'Project Name',
    description: 'Short one to two sentence summary of what this project does and why you built it.',
    date: 'Month YYYY',
    tech: ['Tech', 'Tech', 'Tech'],
    status: 'live',
    href: 'https://example.com',
  },
  {
    number: '02',
    name: 'Project Name',
    description: 'Short one to two sentence summary of what this project does and why you built it.',
    date: 'Month YYYY',
    tech: ['Tech', 'Tech', 'Tech'],
    status: 'wip',
    href: 'https://example.com',
  },
  {
    number: '03',
    name: 'Project Name',
    description: 'Short one to two sentence summary of what this project does and why you built it.',
    date: 'Month YYYY',
    tech: ['Tech', 'Tech', 'Tech'],
    status: 'live',
    href: 'https://example.com',
  },
]

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center py-16 md:py-10">
        <div className="pixel-box relative mx-auto aspect-square w-[45%] md:w-full overflow-hidden bg-card">
          <Image
            src="/images/profile-1.png"
            alt="pixel self-portrait"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="md:col-span-3">
          <h1 className="font-display text-accent text-1xl md:text-2xl leading-[1.05] tracking-tight">
            <TextScramble className="font-display" duration={1000} replayIntervalMs={20000}>
              SANJANA_BHUPATHI
            </TextScramble>
          </h1>
          <p className="mt-6 max-w-md text-foreground/80">
            {`Hi! My name is Sanjana. I'm a 3rd year CS student at UC Santa Barbara, and I enjoy machine learning and computer vision.
            In my spare time, I enjoy biking, watching movies, and playing Minecraft! Look around to see some of my work
            and check out my socials.`}
          </p>
        </div>
      </section>

      <section id="projects" className="py-16">
        <h2 className="mb-8 font-display tracking-tight text-foreground">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section id="connect" className="py-16">
        <h2 className="font-display tracking-tight text-foreground">
          LET&apos;S CONNECT!
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((social) => (
            <Button key={social.name} asChild size="lg">
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            </Button>
          ))}
        </div>
      </section>
    </>
  )
}
