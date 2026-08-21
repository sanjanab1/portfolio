import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 mb-16 border-b border-border bg-background/95 backdrop-blur">
      <nav className="flex items-center justify-between gap-6 px-6 md:px-10 py-5 font-mono text-xs tracking-[0.25em] uppercase">
        <Link href="/" className="text-foreground font-bold shrink-0">
          My Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {name}
            </Link>
          ))}
        </div>

        <span className="text-muted-foreground shrink-0 hidden sm:inline">
        </span>
      </nav>
    </header>
  )
}
