import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "../Data/Data";
import {
  getRevealProps,
  revealLeft,
  revealRight,
  revealScale,
  revealUp,
  staggerLarge,
  staggerTight,
} from "../UI/motion";

function LiveTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-mono text-[10px] uppercase text-success">
      <span className="h-1.5 w-1.5 rounded-full bg-success" />
      Live
    </span>
  );
}

function renderProjectCta(label = "View project", variant = "secondary") {
  const styles =
    variant === "primary"
      ? "border-transparent bg-accent-gradient text-white shadow-glow dark:text-accent-contrast group-hover:scale-[1.02]"
      : "border border-ink-50/10 bg-ink-50/[0.05] text-ink-100 group-hover:border-accent-cyan/40 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan";

  return (
    <span
      className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-control px-4 py-2 text-sm font-semibold transition duration-300 ${styles}`}
    >
      {label}
      <ExternalLinkIcon className="h-4 w-4" />
    </span>
  );
}

export default function Projects() {
  const [leadProject, ...supportingProjects] = projects;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="section-shell"
      {...getRevealProps(shouldReduceMotion, staggerLarge)}
    >
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <motion.div variants={revealLeft}>
          <span className="section-kicker">Selected work</span>
          <h2 className="section-title">Product decisions first. Screenshots second.</h2>
          <p className="section-copy">
            A project only earns its place here when the product surface, technical choices, interaction details, and delivery outcomes all have a clear reason to exist.
          </p>
        </motion.div>
        <motion.a
          href="https://github.com/ankit0698"
          target="_blank"
          rel="noreferrer"
          className="control-button border border-ink-50/10 bg-ink-50/[0.06] text-ink-50 hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
          variants={revealRight}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        >
          GitHub profile
          <ExternalLinkIcon className="h-4 w-4" />
        </motion.a>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.a
          href={leadProject.link}
          target="_blank"
          rel="noreferrer"
          className="glass-panel interactive-card group overflow-hidden"
          variants={revealScale}
          whileHover={shouldReduceMotion ? undefined : { y: -10 }}
        >
          <div className="border-b border-ink-50/10">
            <img
              src={leadProject.image}
              alt={`${leadProject.title} screenshot`}
              className="h-72 w-full object-cover object-top transition duration-700 group-hover:scale-[1.035] sm:h-[28rem]"
            />
          </div>
          <div className="grid gap-6 p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="technical-label text-accent-cyan">
                    {leadProject.category}
                  </p>
                  {leadProject.isLive && <LiveTag />}
                </div>
                {renderProjectCta("View project", "primary")}
              </div>
              <h3 className="mt-2 max-w-xl font-display text-3xl font-semibold text-ink-50">
                {leadProject.title}
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-ink-200">
                {leadProject.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {leadProject.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-ink-50/[0.06] px-3 py-1.5 text-sm text-ink-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.a>

        <motion.div className="grid gap-4" variants={staggerTight}>
          {supportingProjects.slice(0, 3).map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="glass-panel interactive-card group grid gap-4 overflow-hidden p-4 sm:grid-cols-[9rem_1fr]"
              variants={revealRight}
              whileHover={shouldReduceMotion ? undefined : { y: -8, x: 4 }}
            >
              <img src={project.image} alt={`${project.title} screenshot`} className="h-36 w-full rounded-control object-cover transition duration-700 group-hover:scale-[1.04] sm:h-full" />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="technical-label">{project.category}</p>
                    {project.isLive && <LiveTag />}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink-50">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink-300">{project.description}</p>
                </div>
                <div className="mt-4">
                  {renderProjectCta("Open project", "secondary")}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-4 grid gap-4 md:grid-cols-3"
        variants={staggerTight}
      >
        {supportingProjects.slice(3).map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="glass-panel interactive-card group overflow-hidden"
            variants={revealUp}
            whileHover={shouldReduceMotion ? undefined : { y: -8 }}
          >
            <img src={project.image} alt={`${project.title} screenshot`} className="h-44 w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="technical-label">{project.subtitle}</p>
                {project.isLive && <LiveTag />}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink-50">{project.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.outcomes.slice(0, 2).map((outcome) => (
                  <span key={outcome} className="rounded-full border border-ink-50/10 px-3 py-1 text-xs text-ink-300">
                    {outcome}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                {renderProjectCta("Open project", "secondary")}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
