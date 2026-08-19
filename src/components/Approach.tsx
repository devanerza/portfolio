import { motion } from 'motion/react'
import { fadeUp } from './motion'
import { Reveal } from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Understand the Problem',
    description:
      'Identify business goals, user needs, and technical constraints before implementation.',
  },
  {
    number: '02',
    title: 'Design the System',
    description:
      'Plan application structure, database relationships, API design, and component interactions.',
  },
  {
    number: '03',
    title: 'Build with Quality',
    description:
      'Focus on clean architecture, reusable code, secure authentication, and maintainability.',
  },
  {
    number: '04',
    title: 'Deliver & Improve',
    description:
      'Deploy, gather feedback, iterate, and continuously improve the product.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="light border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-28">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="eyebrow-accent">Approach</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
                My Engineering Approach
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-[1.75] text-muted md:text-[17px]">
              I believe good software is more than working code. It should be
              understandable, maintainable, and designed with long-term growth in
              mind.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="mt-10 md:mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-80px' }}
        >
          <div className="flex flex-col items-stretch md:flex-row md:items-stretch">
              {steps.map((step, index) => (
                <div key={step.number} className="contents">
                  {index > 0 && (
                    <div className="arch-connector self-center">
                      <span className="arch-connector-line" />
                      <span className="arch-connector-packet" />
                    </div>
                  )}
                  <div className="arch-node flex min-w-0 flex-1 items-center gap-3.5 px-5 py-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] border border-white/10 bg-white/5 font-mono text-[13px] text-paper">
                      {step.number}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium leading-snug text-white/90">
                        {step.title}
                      </span>
                      <span className="mt-1.5 block text-[10px] leading-relaxed text-white/50">
                        {step.description}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  )
}
