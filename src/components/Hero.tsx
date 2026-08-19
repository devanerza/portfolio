import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'motion/react'
import { ArrowRightIcon, GitHubIcon } from './icons'

const headline = 'Building software that solves real problems.'

const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
}

const word: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Hero() {
  const [allowMotion, setAllowMotion] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) => setAllowMotion(!event.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 0', 'end 1'],
  })

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 0.85], [0, -140])
  const contentOpacity = useTransform(scrollYProgress, [0.05, 0.65], [1, 0])
  const heroOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

  return (
    <section id="top" className="relative -mt-16">
      <div ref={scrollRef} className="relative h-[280svh] md:h-[340vh]">
        <motion.div
          className="sticky top-0 h-svh overflow-hidden"
          style={{ opacity: heroOpacity }}
        >
          <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
            {allowMotion ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                aria-hidden="true"
                tabIndex={-1}
              />
            ) : (
              <div className="absolute inset-0 bg-night" aria-hidden="true" />
            )}
          </motion.div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/35 to-night/55"
            aria-hidden="true"
          />

          <motion.div
            className="relative mx-auto flex h-full w-full max-w-xl flex-col justify-center px-8 pb-16 pt-16 landscape:justify-start md:max-w-6xl xl:justify-start md:px-10 md:pb-28 md:pt-24"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <div className="max-w-3xl">
          <motion.h1
            className="mt-10 pt-3 font-display text-[clamp(2.75rem,7vw,4.9rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white"
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            aria-label={headline}
          >
            {headline.split(' ').map((w, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden pb-[0.08em] text-[clamp(2.25rem,7.5vw,68px)] align-bottom"
                aria-hidden="true"
              >
                <motion.span className="inline-block" variants={word}>
                  {w}
                  {i < headline.split(' ').length - 1 ? '\u00A0' : ''}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-sm leading-[1.75] text-white/70"
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            I design and build modern web applications from concept to
            deployment, combining backend engineering, scalable architecture,
            and intuitive user experiences. My focus is creating software that
            is reliable, maintainable, and built to deliver long-term value.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85 }}
          >
            <a href="#work" className="btn btn-white">
              View My Work
              <ArrowRightIcon className="btn-arrow h-4 w-4" />
            </a>
            <a
              href="https://github.com/devanezra"
              className="btn btn-ghost-light"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </section>
  )
}
