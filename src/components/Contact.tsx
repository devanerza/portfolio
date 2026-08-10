import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './icons'

const links = [
  {
    label: 'Email',
    detail: 'hello@devanezra.dev',
    href: 'mailto:hello@devanezra.dev',
    icon: MailIcon,
  },
  {
    label: 'LinkedIn',
    detail: 'in/devanezra',
    href: 'https://linkedin.com/in/devanezra',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    detail: '@devanezra',
    href: 'https://github.com/devanezra',
    icon: GitHubIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-ink text-paper">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60"
          style={{
            background:
              'radial-gradient(700px 240px at 50% 0%, rgba(124, 150, 255, 0.12), transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
            Contact
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Let’s Build{' '}
            <span className="text-accent-bright">Something Meaningful</span>
          </h2>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.75] text-white/65">
            Whether you’re looking for a developer to build a web application,
            collaborate on a project, or discuss new ideas, I’d be happy to
            connect.
          </p>
        </div>

        <div className="relative mt-14 grid gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition-colors duration-200 hover:border-white/30"
            >
              <span className="flex min-w-0 items-center gap-3.5">
                <link.icon className="h-5 w-5 flex-none text-white/50 transition-colors group-hover:text-white" />
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium leading-tight text-white/90">
                    {link.label}
                  </span>
                  <span className="mt-1 block truncate font-mono text-[12px] leading-tight text-white/40">
                    {link.detail}
                  </span>
                </span>
              </span>
              <ArrowUpRightIcon className="h-4 w-4 flex-none text-white/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
