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
    <header className="sticky top-0 z-40 mb-16  backdrop">
      <nav className="flex items-center justify-between gap-6 px-6 md:px-10 py-5 font-mono text-xs tracking-[0.25em] uppercase">
        <Link href="/" className="text-foreground font-bold shrink-0">
          My Portfolio V0 
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="pixel-box-sm bg-card px-4 py-2 font-display text-muted-foreground transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-primary active:translate-x-0 active:translate-y-0 active:shadow-none"
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
