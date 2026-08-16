import { motion } from 'motion/react'
import { ArrowUpRightIcon } from './icons'
import { fadeUp, stagger } from './motion'
import { Reveal } from './Reveal'

type Project = {
  index: string
  title: string
  category: string
  href: string
  specs: { label: string; detail: string }[]
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Todo List API',
    category: 'Backend Engineering',
    href: 'https://github.com/devanezra',
    specs: [
      {
        label: 'Problem',
        detail:
          'A todo app is simple on the surface, but real complexity lives in authentication, data integrity, and keeping one user\u2019s data isolated from another\u2019s.',
      },
      {
        label: 'Solution',
        detail:
          'Built a RESTful API with layered architecture, JWT authentication, and ownership-based authorization so every request is scoped to the right user.',
      },
      {
        label: 'Architecture',
        detail: 'REST API · JWT · PostgreSQL · Layered architecture',
      },
      {
        label: 'Result',
        detail:
          'A secure, well-structured API foundation that is reusable across future projects.',
      },
    ],
  },
  {
    index: '02',
    title: 'SMAT-TRIK',
    category: 'Full-Stack Web Application',
    href: 'https://github.com/devanezra',
    specs: [
      {
        label: 'Problem',
        detail:
          'Scheduling AC maintenance was slow and disorganized\u2014bookings, technician availability, and follow-ups were spread across scattered channels.',
      },
      {
        label: 'Solution',
        detail:
          'Shipped a complete booking system with an admin dashboard, authentication, and a responsive interface for both customers and staff.',
      },
      {
        label: 'Architecture',
        detail: 'Booking flow · Admin dashboard · Auth · Responsive UI',
      },
      {
        label: 'Result',
        detail:
          'A clear booking pipeline and a management view that make day-to-day operations simpler.',
      },
    ],
  },
  {
    index: '03',
    title: 'Naraleaf',
    category: 'Corporate Website',
    href: 'https://github.com/devanezra',
    specs: [
      {
        label: 'Problem',
        detail:
          'A growing company needed a modern online presence that matched the quality of its products and spoke to a professional audience.',
      },
      {
        label: 'Solution',
        detail:
          'Designed and built a performance-focused corporate site with clean structure, responsive layouts, and production deployment.',
      },
      {
        label: 'Architecture',
        detail: 'Next.js · Responsive design · Performance-focused · Production',
      },
      {
        label: 'Result',
        detail:
          'A fast, polished company profile that is deployed and live for the business.',
      },
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="grid gap-8 border-t border-line py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-16 md:py-14"
      variants={fadeUp}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-faint">{project.index}</span>
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {project.category}
          </span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[28px]">
          {project.title}
        </h3>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.12em] text-accent transition-colors hover:text-ink"
        >
          View on GitHub
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>

      <dl className="grid gap-x-8 gap-y-7 self-start sm:grid-cols-2">
        {project.specs.map((spec) => (
          <div key={spec.label}>
            <dt className="eyebrow">{spec.label}</dt>
            <dd className="mt-2.5 text-[15px] leading-relaxed text-muted">
              {spec.detail}
            </dd>
          </div>
        ))}
      </dl>
    </motion.article>
  )
}

export function Work() {
  return (
    <section id="work">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 pt-[-50px] md:px-10 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow-accent">Selected Work</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            Selected Work
          </h2>
        </Reveal>

        <div className="mt-6 md:mt-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.index} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
