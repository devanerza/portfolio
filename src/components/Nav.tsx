const links = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="font-display text-[15px] font-semibold tracking-tight text-ink"
        >
          Devan Erza Farandi
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent transition-opacity hover:opacity-70 md:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
