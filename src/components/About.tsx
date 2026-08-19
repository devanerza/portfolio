import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="light border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-28">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="eyebrow-accent">About</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
                About Me
              </h2>
            </div>

            <div className="max-w-2xl space-y-6 text-base leading-[1.8] text-muted md:text-[17px]">
              <p>
                I enjoy building software that balances technical quality with
                practical business value. My interests span backend engineering,
                system design, and full-stack web development, where I can
                translate ideas into reliable digital products.
              </p>
              <p>
                I believe software engineering is about solving problems
                thoughtfully—not simply writing code. That’s why I focus on
                maintainable architecture, clear communication, and continuous
                learning to build solutions that stand the test of time.
              </p>
              <p className="pt-2 font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
                Devan Erza Farandi · Software Engineer
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
