import {
  ArrowRightIcon,
  CodeIcon,
  DownloadIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  TerminalIcon,
} from "@heroicons/react/solid";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import ankitImage from "../assets/ankit.webp";
import { aboutHighlights, profile } from "../Data/Data";
import {
  getRevealProps,
  revealLeft,
  revealRight,
  revealScale,
  revealUp,
  staggerLarge,
  staggerTight,
} from "../UI/motion";

const workAreas = [
  {
    icon: CodeIcon,
    title: "Frontend & mobile apps",
    copy: "Built production UI with React, Next.js, TypeScript, Redux, Tailwind CSS, and React Native across web and mobile products.",
  },
  {
    icon: LightningBoltIcon,
    title: "AI product workflows",
    copy: "Worked on multi-LLM platforms, agentic AI flows, MCP servers, chat-based task execution, and AI-driven mobile experiences.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Backend & delivery",
    copy: "Hands-on with NestJS, Node.js, PostgreSQL, Prisma, AWS, Docker, Kubernetes, GitHub Actions, and production deployment workflows.",
  },
];

function About() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <>
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[calc(100vh-4rem)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-[0.18]" />
        <motion.div
          className="container relative grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 py-14 lg:grid-cols-[minmax(0,40rem)_minmax(26rem,34rem)] lg:justify-between lg:gap-16 lg:py-16"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
          variants={staggerLarge}
        >
          <motion.div
            className="max-w-2xl"
            style={shouldReduceMotion ? undefined : { y: copyY }}
            variants={staggerLarge}
          >
            <motion.div className="section-kicker" variants={revealUp}>
              <TerminalIcon className="mr-2 h-4 w-4" />
              {profile.experience} building web, mobile, and AI product
              experiences
            </motion.div>
            <motion.h1
              className="max-w-2xl font-display text-4xl font-semibold leading-[1.06] text-ink-50 sm:text-5xl lg:text-[3.65rem] xl:text-[4.1rem]"
              variants={revealUp}
            >
              Hi, I&apos;m {profile.name}. Building{" "}
              <span className="text-gradient">frontend products</span> that make
              practical software feel clear.
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-base leading-7 text-ink-200 sm:text-lg sm:leading-8"
              variants={revealUp}
            >
              {profile.pitch}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              variants={staggerTight}
            >
              <motion.a
                href="/#projects"
                className="control-button bg-accent-gradient text-white dark:text-accent-contrast shadow-glow hover:scale-[1.02]"
                variants={revealUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, boxShadow: "0 0 48px rgba(54, 244, 226, 0.3)" }
                }
              >
                Explore work
                <ArrowRightIcon className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/Ankit-cv.pdf"
                download="Ankit_Cv.pdf"
                className="control-button border border-ink-50/10 bg-ink-50/[0.06] text-ink-50 hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
                variants={revealUp}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <DownloadIcon className="h-4 w-4" />
                Download resume
              </motion.a>
            </motion.div>

            <motion.dl
              className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
              variants={staggerTight}
            >
              {profile.metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  className="glass-panel px-4 py-4"
                  variants={revealScale}
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                >
                  <dt className="font-mono text-[11px] uppercase text-ink-400">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-ink-50 sm:text-3xl">
                    {metric.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md self-center sm:max-w-lg lg:max-w-[34rem]"
            style={shouldReduceMotion ? undefined : { y: imageY }}
            variants={revealRight}
          >
            <motion.div
              className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-accent-cyan/30 blur-3xl"
              animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-8 -top-6 h-40 w-40 rounded-full bg-accent-violet/30 blur-3xl"
              animate={shouldReduceMotion ? undefined : { y: [0, 16, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.div
              className="absolute -bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent-amber/20 blur-3xl"
              animate={shouldReduceMotion ? undefined : { y: [0, -14, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />

            <motion.div
              className="relative overflow-hidden rounded-panel shadow-[0_0_42px_rgba(54,244,226,0.18),26px_-22px_70px_rgba(158,124,255,0.18),-24px_28px_64px_rgba(247,198,106,0.12)]"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -10,
                      scale: 1.015,
                    }
              }
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <motion.div
                className="pointer-events-none absolute inset-y-0 left-[-28%] w-[42%] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={shouldReduceMotion ? undefined : { x: ["0%", "320%"] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut" }}
              />
              <img
                src={ankitImage}
                alt={`${profile.name}, ${profile.role}`}
                className="aspect-[3/4] w-full object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="section-shell"
        {...getRevealProps(shouldReduceMotion, staggerLarge)}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div variants={revealLeft}>
            <span className="section-kicker">About</span>
            <h2 className="section-title">
              A frontend-focused developer who also understands backend, cloud,
              and AI product workflows.
            </h2>
            <p className="section-copy">
              Frontend is the core craft, with recent work extending into APIs,
              databases, cloud deployments, React Native apps, and AI agent
              workflows. That full product path shapes features that hold up
              from the first screen to production delivery.
            </p>
          </motion.div>

          <motion.div className="grid gap-4" variants={staggerTight}>
            {aboutHighlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="glass-panel interactive-card flex gap-4 p-5"
                variants={revealRight}
                whileHover={shouldReduceMotion ? undefined : { y: -6, x: 4 }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-control bg-accent-cyan/10 font-mono text-sm text-accent-cyan">
                  0{index + 1}
                </span>
                <p className="leading-7 text-ink-200">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid gap-4 lg:grid-cols-3"
          variants={staggerTight}
        >
          {workAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                className="glass-panel interactive-card p-6"
                variants={revealUp}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              >
                <Icon className="h-7 w-7 text-accent-cyan" />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-50">
                  {area.title}
                </h3>
                <p className="mt-3 leading-7 text-ink-300">{area.copy}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
    </>
  );
}

export default About;
