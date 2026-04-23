import { ChatAlt2Icon } from "@heroicons/react/solid";
import { testimonials } from "../Data/Data";

function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <span className="section-kicker">
            <ChatAlt2Icon className="mr-2 h-4 w-4" />
            Testimonials
          </span>
          <h2 className="section-title">The collaboration story should feel as strong as the visuals.</h2>
          <p className="section-copy">
            This section gives the portfolio a human proof layer: design partnership, implementation clarity, and dependable delivery.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.quote} className="glass-panel interactive-card p-6">
            <div className="mb-6 h-1 w-16 rounded-full bg-warm-gradient" />
            <blockquote className="text-lg leading-8 text-ink-100">&quot;{item.quote}&quot;</blockquote>
            <figcaption className="mt-6 font-mono text-sm text-ink-400">{item.source}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
