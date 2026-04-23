function IntroLoader() {
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
              <p className="font-mono text-xs uppercase text-accent-cyan">Initializing interface</p>
              <p className="mt-1 text-sm text-ink-300">React portfolio system</p>
            </div>
          </div>

          <div className="mt-8 space-y-3 font-mono text-xs text-ink-300">
            <div className="flex items-center justify-between">
              <span>tokens.load()</span>
              <span className="text-accent-cyan">ok</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-ink-50/10">
              <div className="h-full rounded-full bg-accent-gradient animate-loader-bar" />
            </div>
            <div className="flex items-center justify-between">
              <span>components.mount()</span>
              <span className="text-accent-amber">sync</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-ink-50/10">
              <div className="h-full rounded-full bg-warm-gradient animate-loader-bar [animation-delay:180ms]" />
            </div>
            <div className="flex items-center justify-between">
              <span>motion.ready()</span>
              <span className="text-success">online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroLoader;
