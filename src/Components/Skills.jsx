import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skillGroups, skills } from "../Data/Data";

function Skills() {
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" className="section-shell">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <span className="section-kicker">
            <ChipIcon className="mr-2 h-4 w-4" />
            Skills
          </span>
          <h2 className="section-title">
            A frontend-first stack with full-stack and AI product experience.
          </h2>
          <p className="section-copy">
            My strongest area is frontend development, but I have also worked
            with backend APIs, databases, cloud deployments, mobile apps, and
            AI-driven workflows.
          </p>
        </div>
        <div className="glass-panel px-5 py-4">
          <p className="technical-label">Current focus</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-ink-200">
            AI product interfaces, agent workflows, scalable frontend systems,
            and production-ready delivery.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="glass-panel interactive-card p-6">
            <h3 className="font-display text-xl font-semibold text-ink-50">{group.title}</h3>
            <p className="mt-3 min-h-16 leading-7 text-ink-300">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-50/10 bg-ink-50/[0.05] px-3 py-2 text-sm text-ink-100"
                >
                  <BadgeCheckIcon className="h-4 w-4 text-success" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden border-y border-ink-50/10 py-5">
        <div className="flex w-max animate-marquee gap-3">
          {marqueeSkills.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="rounded-full bg-accent-cyan/10 px-4 py-2 font-mono text-sm text-accent-cyan"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
