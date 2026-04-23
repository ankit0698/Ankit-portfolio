import { useEffect, useState } from "react";
import { MenuAlt3Icon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/solid";
import { navItems, profile } from "../Data/Data";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-50/10 bg-surface-950/75 backdrop-blur-2xl">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <a href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-control border border-accent-cyan/30 bg-accent-cyan/10 font-display text-sm font-bold text-accent-cyan shadow-glow">
            AM
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-semibold text-ink-50">
              {profile.name}
            </span>
            <span className="block font-mono text-xs text-ink-400">
              {profile.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-ink-50/10 bg-ink-50/[0.04] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-300 transition hover:bg-ink-50/10 hover:text-ink-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            onClick={toggleTheme}
            className="group grid h-11 w-11 place-items-center rounded-control border border-ink-50/10 bg-ink-50/[0.06] text-ink-50 transition hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 transition group-hover:rotate-12" />
            ) : (
              <MoonIcon className="h-5 w-5 transition group-hover:-rotate-12" />
            )}
          </button>

          <a
            href="/#contact"
            className="control-button bg-accent-gradient text-white dark:text-accent-contrast shadow-glow hover:scale-[1.02]"
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-control border border-ink-50/10 bg-ink-50/[0.06] text-ink-50 lg:hidden"
          >
            {isOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuAlt3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-ink-50/10 bg-surface-950/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-control border border-ink-50/10 bg-ink-50/[0.04] px-4 py-3 text-sm font-medium text-ink-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
