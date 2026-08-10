import { ArrowRightIcon, GitHubIcon } from './icons'
import { ArchitectureDiagram } from './ArchitectureDiagram'

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="max-w-3xl">
          <p className="eyebrow-accent">Software Engineer</p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,4.9rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink">
            Building software that solves real problems.
          </h1>
          <p className="mt-7 max-w-2xl text-[17px] leading-[1.75] text-muted md:text-lg">
            I design and build modern web applications from concept to
            deployment, combining backend engineering, scalable architecture,
            and intuitive user experiences. My focus is creating software that
            is reliable, maintainable, and built to deliver long-term value.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              View My Work
              <ArrowRightIcon className="btn-arrow h-4 w-4" />
            </a>
            <a
              href="https://github.com/devanezra"
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  )
}
