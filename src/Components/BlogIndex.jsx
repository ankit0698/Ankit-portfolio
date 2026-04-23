import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/solid";
import { blogPosts } from "../Data/blogs";

function BlogIndex() {
  return (
    <section className="section-shell min-h-[80vh]">
      <div className="mb-10">
        <a
          href="/"
          className="control-button mb-8 w-fit border border-ink-50/10 bg-ink-50/[0.06] text-ink-50 hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
        >
          Back home
        </a>
        <span className="section-kicker">
          <BookOpenIcon className="mr-2 h-4 w-4" />
          Blog archive
        </span>
        <h1 className="section-title">All writing</h1>
        <p className="section-copy">
          JSON-backed articles about React architecture, UI craft, design systems, and front-end delivery.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <a key={post.slug} href={post.path} className="glass-panel interactive-card group block p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="technical-label text-accent-amber">{post.tag}</p>
              <span className="shrink-0 rounded-full border border-ink-50/10 px-3 py-1.5 font-mono text-xs text-ink-300">
                {post.readTime}
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink-50">{post.title}</h2>
            <p className="mt-3 leading-7 text-ink-300">{post.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan">
              Read article
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BlogIndex;
