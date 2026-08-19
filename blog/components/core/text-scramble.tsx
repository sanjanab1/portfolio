'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

type TextScrambleProps = {
  children: string
  className?: string
  duration?: number
  scrambleChars?: string
  replayIntervalMs?: number
  respectReducedMotion?: boolean
}

export function TextScramble({
  children,
  className,
  duration = 900,
  scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  replayIntervalMs = 5000,
  respectReducedMotion = false,
}: TextScrambleProps) {
  const target = React.useMemo(() => children, [children])
  const [displayText, setDisplayText] = React.useState(target)
  const animationRef = React.useRef<number | null>(null)

  const buildFrameText = React.useCallback(
    (revealCount: number) => {
      let next = ''
      for (let i = 0; i < target.length; i += 1) {
        const current = target[i]
        if (current === ' ' || i < revealCount) {
          next += current
        } else {
          const idx = Math.floor(Math.random() * scrambleChars.length)
          next += scrambleChars[idx]
        }
      }
      return next
    },
    [scrambleChars, target],
  )

  const stop = React.useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }, [])

  const run = React.useCallback(() => {
    stop()

    if (
      respectReducedMotion &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayText(target)
      return
    }

    // Make the effect obvious immediately instead of waiting for the first frame.
    setDisplayText(buildFrameText(0))

    const start = performance.now()

    const frame = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const revealCount = Math.floor(progress * target.length)

      setDisplayText(buildFrameText(revealCount))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(frame)
        return
      }

      setDisplayText(target)
      animationRef.current = null
    }

    animationRef.current = requestAnimationFrame(frame)
  }, [buildFrameText, duration, stop, target])

  React.useEffect(() => {
    run()
    const intervalId = window.setInterval(run, replayIntervalMs)

    return () => {
      stop()
      window.clearInterval(intervalId)
    }
  }, [replayIntervalMs, run, stop])

  return (
    <span
      className={cn('inline-block whitespace-pre', className)}
      onMouseEnter={run}
      onFocus={run}
      role="text"
      tabIndex={0}
    >
      {displayText}
    </span>
  )
}
