import { BlogPosts } from 'app/components/posts'
import { TextScramble } from '@/components/core/text-scramble'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-right py-16 md:py-10">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
            V01 
          </p>
          <h1 className="pixel-box inline-block bg-card px-4 py-2 font-display text-5xl md:text-2xl leading-[1.05] tracking-tight text-foreground">
            <TextScramble className="font-display" duration={1000} replayIntervalMs={20000}>
              WELCOME!
            </TextScramble>
          </h1>
          <p className="mt-6 max-w-md text-foreground/80">
            {`Hi! My name is Sanjana. I'm a 3rd year CS student at UC Santa Barbara, and I enjoy machine learning and computer vision. 
            In my spare time, I enjoy biking, watching movies, and playing Minecraft! Look around to see some of my work
            and check out my socials.`}
          </p>
        </div>

        <div className="pixel-box relative mx-auto aspect-square w-[86%] overflow-hidden bg-card">
          <Image
            src="/images/profile-1.png"
            alt="Sanjana portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="sprocket-strip h-3 w-full mb-12" />

      <section>
        <h1 className="pixel-box inline-block bg-card px-4 py-2 font-display text-5xl md:text-2xl leading-[1.05] tracking-tight text-foreground">
            Check out my projects!
        </h1>
        <BlogPosts />
      </section>
    </>
  )
}
