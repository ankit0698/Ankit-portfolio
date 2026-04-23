import { BriefcaseIcon } from "@heroicons/react/solid";
import { experience } from "../Data/Data";

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="section-kicker">
            <BriefcaseIcon className="mr-2 h-4 w-4" />
            Experience
          </span>
          <h2 className="section-title">
            Four years across frontend, full-stack delivery, mobile apps, and
            AI workflows.
          </h2>
          <p className="section-copy">
            I have worked on enterprise frontend applications, production UI
            systems, React Native apps, APIs, and agentic AI platforms.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-accent-cyan via-ink-50/20 to-transparent sm:block" />
          <div className="grid gap-4">
            {experience.map((item) => (
              <article key={`${item.role}-${item.period}`} className="relative sm:pl-12">
                <span className="absolute left-[0.55rem] top-7 hidden h-3 w-3 rounded-full bg-accent-cyan shadow-glow sm:block" />
                <div className="glass-panel interactive-card p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="technical-label text-accent-cyan">{item.period}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-ink-50">{item.role}</h3>
                      <p className="mt-1 text-sm text-ink-300">{item.company}</p>
                    </div>
                    <span className="w-fit rounded-full border border-accent-amber/30 bg-accent-amber/10 px-3 py-1 font-mono text-xs text-accent-amber">
                      shipped product
                    </span>
                  </div>
                  <p className="mt-5 leading-7 text-ink-200">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span key={point} className="rounded-full bg-ink-50/[0.06] px-3 py-1.5 text-sm text-ink-200">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
