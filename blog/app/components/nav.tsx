import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/#projects': {
    name: 'projects',
  },
  '/#connect': {
    name: 'connect',
  },
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 mb-16 backdrop">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 font-mono text-xs tracking-[0.25em] uppercase">
        <Link href="/" className="text-foreground font-bold shrink-0">
          dev.exe
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="pixel-box-sm bg-card px-2 py-1.5 color-accent font-mono text-muted-foreground transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-primary active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
