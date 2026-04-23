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
          <h2 className="section-title">Feedback from teams I have built with.</h2>
          <p className="section-copy">
            A few notes on collaboration, implementation quality, and the kind of delivery experience clients and teammates can expect.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="glass-panel interactive-card p-6">
            <div className="mb-6 flex items-center gap-4">
              <img
                src={item.image}
                alt={`${item.name} avatar`}
                className="h-14 w-14 rounded-full border border-ink-50/10 object-cover shadow-soft-ring"
                loading="lazy"
              />
              <figcaption>
                <p className="font-display text-lg font-semibold text-ink-50">{item.name}</p>
                <p className="mt-1 font-mono text-xs text-ink-400">{item.role}</p>
              </figcaption>
            </div>
            <div className="mb-6 h-1 w-16 rounded-full bg-warm-gradient" />
            <blockquote className="text-lg leading-8 text-ink-100">&quot;{item.quote}&quot;</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
