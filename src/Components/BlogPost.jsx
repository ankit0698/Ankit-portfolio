import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import { blogPosts, getBlogPostBySlug } from "../Data/blogs";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

function BlogPost() {
  const slug = decodeURIComponent(window.location.pathname.replace("/blog/", ""));
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <section className="section-shell min-h-[70vh]">
        <div className="glass-panel mx-auto max-w-2xl p-8 text-center">
          <p className="section-kicker">404</p>
          <h1 className="font-display text-4xl font-semibold text-ink-50">Blog not found</h1>
          <p className="mt-4 text-ink-300">
            The article you are looking for does not exist yet.
          </p>
          <a href="/#blog" className="control-button mt-6 bg-accent-gradient text-accent-contrast">
            Back to blogs
          </a>
        </div>
      </section>
    );
  }

  const relatedPosts = blogPosts.filter((blogPost) => blogPost.slug !== post.slug).slice(0, 3);

  return (
    <article className="section-shell">
      <div className="w-full">
        <a
          href="/#blog"
          className="control-button mb-10 w-fit border border-ink-50/10 bg-ink-50/[0.06] text-ink-50 hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to blogs
        </a>

        <header className="glass-panel overflow-hidden">
          <div className="relative border-b border-ink-50/10 bg-grid-lines bg-[length:56px_56px] p-6 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-hero-radial opacity-70" />
            <div className="relative max-w-4xl">
              <span className="section-kicker">{post.tag}</span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-ink-50 sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-200">{post.hero}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-50/10 bg-ink-50/[0.06] px-3 py-1.5 font-mono text-xs text-ink-300">
                  <CalendarIcon className="h-4 w-4 text-accent-cyan" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-50/10 bg-ink-50/[0.06] px-3 py-1.5 font-mono text-xs text-ink-300">
                  <ClockIcon className="h-4 w-4 text-accent-cyan" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="glass-panel p-6 sm:p-8 lg:p-10">
            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-2xl font-semibold text-ink-50 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-ink-200 sm:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="glass-panel sticky top-24 p-5">
            <p className="technical-label text-accent-cyan">Key takeaways</p>
            <ul className="mt-4 grid gap-3">
              {post.takeaways.map((takeaway) => (
                <li key={takeaway} className="rounded-control border border-ink-50/10 bg-ink-50/[0.04] p-3 text-sm leading-6 text-ink-200">
                  {takeaway}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="mt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="section-kicker">More writing</span>
              <h2 className="font-display text-3xl font-semibold text-ink-50">Continue reading</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <a key={relatedPost.slug} href={relatedPost.path} className="glass-panel interactive-card group block p-5">
                <p className="technical-label text-accent-amber">{relatedPost.tag}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-50">{relatedPost.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-300">{relatedPost.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan">
                  Read article
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default BlogPost;
