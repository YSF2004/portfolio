const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          Youssef Ait Addi
        </a>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/youssef-2420"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border-strong px-4 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent-ink"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
