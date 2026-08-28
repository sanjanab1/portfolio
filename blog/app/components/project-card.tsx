export type Project = {
  number: string
  name: string
  description: string
  date: string
  tech: string[]
  status: 'live' | 'wip' | 'LIVE' | 'WIP'
  href: string
  comingSoon?: boolean
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group terminal-box terminal-scanlines relative flex flex-col gap-6 bg-card p-6 hover:border-accent">
      <div className="flex items-start justify-between">
        <span className="font-mono text-sm text-muted-foreground">[{project.number}]</span>
        <span className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-accent">
          <span aria-hidden="true">/</span>
          {project.status.toUpperCase() === 'LIVE' ? 'LIVE' : 'WIP'}
        </span>
      </div>

      <h3 className="font-mono text-xl font-bold uppercase tracking-wide text-accent">
        {project.name}
      </h3>

      <p className="font-mono text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border border-accent px-3 py-1 font-mono text-sm text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-mono text-sm text-muted-foreground">{project.date}</span>
        {project.comingSoon ? (
          <span
            role="button"
            aria-disabled="true"
            title="Coming Soon!"
            className="group/view relative font-mono text-sm font-bold tracking-widest text-muted-foreground"
          >
            VIEW &gt;&gt;
            <span className="pointer-events-none absolute -top-8 right-0 whitespace-nowrap bg-card border border-accent px-2 py-1 text-xs text-accent opacity-0 transition-opacity group-hover/view:opacity-100">
              COMING SOON!
            </span>
          </span>
        ) : (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-bold tracking-widest text-foreground transition-colors group-hover:text-link hover:opacity-80"
          >
            VIEW &gt;&gt;
          </a>
        )}
      </div>
    </div>
  )
}
