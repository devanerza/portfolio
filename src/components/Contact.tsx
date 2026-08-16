import { motion } from 'motion/react'
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './icons'
import { fadeUp, stagger } from './motion'
import { Reveal } from './Reveal'

const links = [
  {
    label: 'Email',
    detail: 'devanerza26@gmail.com',
    href: 'mailto:devanerza26@gmail.com',
    icon: MailIcon,
  },
  {
    label: 'LinkedIn',
    detail: 'in/devan-erza',
    href: 'https://linkedin.com/in/devan-erza',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    detail: '@devanerza',
    href: 'https://github.com/devanerza',
    icon: GitHubIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-ink text-paper">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-32">
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60"
          style={{
            background:
              'radial-gradient(700px 240px at 50% 0%, rgba(124, 150, 255, 0.12), transparent 70%)',
          }}
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <Reveal>
          <div className="relative max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
              Contact
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              Let’s Build{' '}
              <span className="text-accent-bright">Something Meaningful</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-[1.75] text-white/65 md:text-[17px]">
              Whether you’re looking for a developer to build a web application,
              collaborate on a project, or discuss new ideas, I’d be happy to
              connect.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="relative mt-10 grid gap-4 sm:grid-cols-3 md:mt-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition-colors duration-200 hover:border-white/30"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
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
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
