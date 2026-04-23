import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/solid";
import { motion, useReducedMotion } from "motion/react";
import { blogPosts } from "../Data/blogs";
import {
  getRevealProps,
  revealLeft,
  revealRight,
  staggerLarge,
  staggerTight,
} from "../UI/motion";

function Blog() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="blog"
      className="section-shell"
      {...getRevealProps(shouldReduceMotion, staggerLarge)}
    >
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <motion.div variants={revealLeft}>
          <span className="section-kicker">
            <BookOpenIcon className="mr-2 h-4 w-4" />
            Blog
          </span>
          <h2 className="section-title">Process, written as proof.</h2>
          <p className="section-copy">
            Short technical essays capture the thinking behind the build: tradeoffs, implementation choices, edge cases, and the decisions that shape a stronger interface.
          </p>
          <motion.a
            href="/blog"
            className="control-button mt-6 border border-ink-50/10 bg-ink-50/[0.06] text-ink-50 hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
            variants={revealLeft}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          >
            View archive
          </motion.a>
        </motion.div>

        <motion.div className="grid gap-4" variants={staggerTight}>
          {blogPosts.map((post) => (
            <motion.a
              key={post.slug}
              href={post.path}
              className="glass-panel interactive-card group block p-6"
              variants={revealRight}
              whileHover={shouldReduceMotion ? undefined : { y: -8, x: 4 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="technical-label text-accent-amber">{post.tag}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink-50">{post.title}</h3>
                  <p className="mt-3 leading-7 text-ink-300">{post.description}</p>
                </div>
                <span className="shrink-0 rounded-full border border-ink-50/10 px-3 py-1.5 font-mono text-xs text-ink-300">
                  {post.readTime}
                </span>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-cyan/10 px-3 py-1.5 font-mono text-xs text-accent-cyan">
                Read full blog
                <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Blog;
