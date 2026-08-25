'use client'

import { useRef } from 'react'
import { ProjectCard, type Project } from '@/app/components/project-card'

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={direction === 'left' ? 'rotate-180' : undefined}
    >
      <path
        d="M6 3l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    const amount = card ? card.offsetWidth + 32 : track.clientWidth
    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        aria-label="Previous project"
        onClick={() => scrollByCard('left')}
        className="pixel-box-sm hidden md:flex h-10 w-10 shrink-0 items-center justify-center bg-card text-foreground transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-accent active:translate-x-0 active:translate-y-0 active:shadow-none"
      >
        <ArrowIcon direction="left" />
      </button>

      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div
            key={project.number}
            className="w-full shrink-0 snap-start sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next project"
        onClick={() => scrollByCard('right')}
        className="pixel-box-sm hidden md:flex h-10 w-10 shrink-0 items-center justify-center bg-card text-foreground transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-accent active:translate-x-0 active:translate-y-0 active:shadow-none"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  )
}
