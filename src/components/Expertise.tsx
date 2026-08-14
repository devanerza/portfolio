import { motion } from 'motion/react'
import { fadeUp, stagger } from './motion'
import { Reveal } from './Reveal'

const groups = [
  {
    label: 'Languages',
    items: ['JavaScript', 'PHP', 'Go'],
  },
  {
    label: 'Backend',
    items: ['Express.js', 'Laravel', 'Gin', 'REST APIs', 'Authentication'],
  },
  {
    label: 'Frontend',
    items: ['Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    label: 'Tools & Deployment',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Hostinger'],
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow-accent">Technical Expertise</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            Technical Expertise
          </h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-muted">
            Capabilities organized by what they deliver, not a wall of logos.
          </p>
        </Reveal>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {groups.map((group) => (
            <motion.div key={group.label} variants={fadeUp}>
              <div className="border-t border-line pt-5">
                <h3 className="eyebrow-accent">{group.label}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
