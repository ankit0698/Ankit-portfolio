import { navItems, profile } from "../Data/Data";

const Footer = () => {
  return (
    <footer className="border-t border-ink-50/10">
      <div className="container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink-50">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-400">{profile.role} based in {profile.location}</p>
        </div>
        <nav className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ink-400 transition hover:text-accent-cyan">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
