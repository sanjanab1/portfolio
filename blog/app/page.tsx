import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
            Roll 01 — Frame 01
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground">
            Software,{' '}
            <span className="italic text-primary">crafted</span> slowly and
            on purpose.
          </h1>
          <p className="mt-6 max-w-md text-foreground/80">
            {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
            Vim's keystroke commands and tabs' flexibility for personal viewing
            preferences. This extends to my support for static typing, where its
            early error detection ensures cleaner code, and my preference for dark
            mode, which eases long coding sessions by reducing eye strain.`}
          </p>
        </div>

        <div className="relative border border-border bg-card p-3 shadow-[var(--shadow-halation)]">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-full font-mono text-[10px] tracking-widest text-muted-foreground -rotate-90 origin-right pr-3 hidden md:block">
            36
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: 'var(--gradient-vignette)' }}
            />
            <div className="grain absolute inset-0" />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-full font-mono text-[10px] tracking-widest text-muted-foreground -rotate-90 origin-left pl-3 hidden md:block">
            13
          </div>
        </div>
      </section>

      <div className="sprocket-strip h-3 w-full mb-12" />

      <section>
        <h2 className="mb-8 font-display text-2xl font-medium tracking-tight text-foreground">
          Recent Writing
        </h2>
        <BlogPosts />
      </section>
    </>
  )
}
