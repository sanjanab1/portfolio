import { BlogPosts } from 'app/components/posts'
import { TextScramble } from '@/components/core/text-scramble'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-right py-16 md:py-10">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
            Roll 01 — Frame 01 - INTRO
          </p>
          <h1 className="font-display text-5xl md:text-2xl leading-[1.05] tracking-tight text-foreground">
            <TextScramble className="font-display" duration={1000} replayIntervalMs={20000}>
              WELCOME!
            </TextScramble>
            <br />{' '}
          </h1>
          <p className="mt-6 max-w-md text-foreground/80">
            {`Hi! My name is Sanjana. I'm a 3rd year CS student at UC Santa Barbara, and I enjoy machine learning and computer vision. 
            In my spare time, I enjoy biking, watching movies, and playing Minecraft! Click around to see some of my work
            and check out my socials. 📸`}
          </p>
        </div>

        <div className="relative border border-border bg-card p-3 shadow-[var(--shadow-halation)]">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-full font-mono text-[10px] tracking-widest text-muted-foreground -rotate-90 origin-right pr-3 hidden md:block">
            36
          </div>
          <div className="relative mx-auto aspect-square w-[86%] overflow-hidden">
            <Image
              src="/images/profile-1.png"
              alt="Sanjana portrait"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
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
