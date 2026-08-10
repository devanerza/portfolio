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
    <section id="approach" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <div>
            <p className="eyebrow-accent">Engineering Approach</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              My Engineering Approach
            </h2>
          </div>
          <p className="max-w-xl self-end text-[17px] leading-[1.75] text-muted">
            I believe good software is more than working code. It should be
            understandable, maintainable, and designed with long-term growth in
            mind.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-2xl border border-line bg-white/60 p-6 transition-colors duration-200 hover:border-ink/25 md:p-7"
            >
              <span className="font-mono text-sm text-accent">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
