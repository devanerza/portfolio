import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 800)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
          ? 'border-line bg-paper/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10 py-6"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className={`font-display text-[15px] font-semibold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-ink' : 'text-white'
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
                  ? 'text-muted hover:text-ink'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`font-mono text-[12px] uppercase tracking-[0.14em] transition-colors duration-300 md:hidden ${
            scrolled ? 'text-accent' : 'text-accent-bright'
          }`}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
