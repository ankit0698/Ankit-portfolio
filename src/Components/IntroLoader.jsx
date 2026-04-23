function IntroLoader() {
  const loadingSteps = [
    {
      label: "Opening portfolio",
      status: "ready",
      barClass: "bg-accent-gradient animate-loader-bar",
    },
    {
      label: "Loading selected work",
      status: "projects",
      barClass: "bg-warm-gradient animate-loader-bar [animation-delay:180ms]",
    },
    {
      label: "Preparing skills and experience",
      status: "profile",
      barClass: "bg-accent-gradient animate-loader-bar [animation-delay:320ms]",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-surface-950 text-ink-50 animate-intro-exit"
      aria-label="Loading portfolio"
      role="status"
    >
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grid-lines bg-[length:52px_52px] opacity-30" />
      <div className="intro-scanline" />

      <div className="relative w-[min(88vw,34rem)]">
        <div className="glass-panel p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-panel border border-accent-cyan/40 bg-accent-cyan/10 font-display text-xl font-bold text-accent-cyan shadow-glow animate-loader-mark">
              AM
            </div>
            <div className="text-right">
              <p className="font-mono text-xs uppercase text-accent-cyan">Portfolio loading</p>
              <p className="mt-1 text-sm text-ink-300">Ankit Mishra</p>
            </div>
          </div>

          <div className="mt-8 space-y-3 font-mono text-xs text-ink-300">
            {loadingSteps.map((step) => (
              <div key={step.label}>
                <div className="flex items-center justify-between">
                  <span>{step.label}</span>
                  <span className="text-accent-cyan">{step.status}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-50/10">
                  <div className={`h-full rounded-full ${step.barClass}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroLoader;
