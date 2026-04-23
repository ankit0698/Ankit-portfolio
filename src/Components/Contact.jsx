import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { contactChannels, profile } from "../Data/Data";

const inputClass =
  "mt-2 w-full rounded-control border border-ink-50/10 bg-surface-950/80 px-4 py-3 text-ink-50 shadow-soft-ring transition placeholder:text-ink-500 focus:border-accent-cyan";

const contactStats = [
  { label: "Experience", value: "4+ yrs" },
  { label: "Current work", value: "AI apps" },
  { label: "Coverage", value: "Web + Mobile" },
];

function Contact() {
  const [state, handleSubmit] = useForm("xrgnkpql");

  if (state.succeeded) {
    return (
      <section id="contact" className="section-shell">
        <div className="glass-panel mx-auto max-w-2xl p-8 text-center">
          <BadgeCheckIcon className="mx-auto h-12 w-12 text-success" />
          <h2 className="mt-5 font-display text-3xl font-semibold text-ink-50">
            Message sent.
          </h2>
          <p className="mt-3 text-ink-200">
            Thanks for reaching out. I will get back to you soon.
          </p>
          <a
            href="#"
            className="control-button mt-6 bg-accent-gradient text-accent-contrast"
          >
            Back to top
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,30rem)_minmax(34rem,1fr)] lg:items-stretch">
        <div className="flex h-full flex-col gap-4">
          <span className="section-kicker">
            <MailIcon className="mr-2 h-4 w-4" />
            Contact
          </span>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink-50 sm:text-4xl lg:text-[3rem]">
            Let&apos;s discuss what you&apos;re building next.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-200">
            I am open to frontend-focused roles, full-stack product work, React
            Native apps, and AI workflow interfaces where clean execution and
            practical problem solving matter.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {contactStats.map((stat) => (
              <div key={stat.label} className="glass-panel px-4 py-4">
                <p className="font-mono text-[10px] uppercase text-ink-400">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-ink-50">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="glass-panel interactive-card flex items-center justify-between gap-4 p-4 md:min-h-28 md:flex-col md:items-start"
              >
                <span className="min-w-0">
                  <span className="technical-label block">{channel.label}</span>
                  <span className="mt-1 block break-all text-sm text-ink-100">
                    {channel.value}
                  </span>
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-accent-cyan md:mt-auto" />
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-panel border border-accent-cyan/20 bg-accent-cyan/10 p-5 lg:mt-auto">
            <p className="font-mono text-xs uppercase text-accent-cyan">
              Availability
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-200">
              Best fit: frontend/full-stack roles, AI product interfaces, React
              Native apps, backend-integrated dashboards, and product UI
              systems.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel flex h-full flex-col p-6 shadow-glow-violet sm:p-8"
        >
          <div className="mb-7 flex flex-col gap-3 border-b border-ink-50/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="technical-label text-accent-cyan">Project brief</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink-50">
                Share the context
              </h3>
            </div>
            <span className="w-fit rounded-full border border-accent-amber/30 bg-accent-amber/10 px-3 py-1.5 font-mono text-xs text-accent-amber">
              usually replies soon
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label
              className="block text-sm font-medium text-ink-200"
              htmlFor="name"
            >
              Name
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Your name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-2 text-sm text-accent-rose"
              />
            </label>

            <label
              className="block text-sm font-medium text-ink-200"
              htmlFor="email"
            >
              Email
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 text-sm text-accent-rose"
              />
            </label>
          </div>

          <label
            className="mt-5 block text-sm font-medium text-ink-200"
            htmlFor="project"
          >
            Project type
            <select
              id="project"
              name="project"
              className={inputClass}
              defaultValue="Frontend role"
            >
              <option>Frontend role</option>
              <option>Full-stack product work</option>
              <option>AI workflow interface</option>
              <option>React Native app</option>
              <option>Dashboard or admin system</option>
              <option>Portfolio or landing page</option>
            </select>
          </label>

          <label
            className="mt-5 flex min-h-0 flex-1 flex-col text-sm font-medium text-ink-200"
            htmlFor="message"
          >
            Message
            <textarea
              id="message"
              name="message"
              required
              className={`${inputClass} min-h-40 flex-1 resize-none`}
              placeholder={`Hi ${profile.name}, I want to discuss...`}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="mt-2 text-sm text-accent-rose"
            />
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="control-button mt-6 w-full bg-accent-gradient text-white dark:text-accent-contrast shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.submitting ? "Sending..." : "Send message"}
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
