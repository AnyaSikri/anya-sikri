import Link from "next/link";
import { Activity } from "lucide-react";

const navLinks = [
  { href: "#focus", label: "focus", desktopOnly: true },
  { href: "#resume", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#berkeley", label: "berkeley", desktopOnly: true },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--card-border)] bg-white/75 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
        >
          <Activity size={16} className="text-[var(--accent)] flex-shrink-0" />
          anya sikri
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs tracking-[0.12em] text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors ${
                link.desktopOnly ? "hidden sm:block" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
