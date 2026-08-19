import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { ArrowUpRightIcon } from './icons'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 800)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-paper/25 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10 py-7"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className={`font-display text-[20px] font-semibold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-white' : 'text-white'
          }`}
        >
          Devan Erza Farandi
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-[12px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                scrolled
                  ? 'text-white border-b border-transparent hover:border-accent'
                  : 'text-white/70 border-b border-transparent hover:border-accent hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`flex h-9 w-9 flex-col items-center justify-center gap-[6px] rounded-full border transition-colors duration-300 md:hidden ${
            open || scrolled
              ? 'border-line bg-paper/80 text-ink backdrop-blur-sm'
              : 'border-white/25 text-white'
          }`}
        >
          <span
            className={`h-px w-4 bg-current transition-transform duration-300 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-4 bg-current transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-px w-4 bg-current transition-transform duration-300 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full border-b border-line bg-paper/25 backdrop-blur-md md:hidden"
          >
            <nav
              className="mx-auto w-full max-w-xl px-6"
              aria-label="Mobile navigation"
            >
              <ul className="divide-y divide-line">
                {links.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4 font-mono text-[13px] uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="text-[12px] text-faint">
                          0{i + 1}
                        </span>
                        {link.label}
                      </span>
                      <ArrowUpRightIcon className="h-3.5 w-3.5 text-faint transition-colors group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}