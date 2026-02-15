import Link from "next/link";

const navLinks = [
  { href: "/", label: "index" },
  { href: "#resume", label: "work" },
  { href: "#berkeley", label: "berkeley" },
  { href: "/beyond", label: "beyond" },
];

export default function Navbar() {
  return (
    <nav className="w-full px-6 pt-8 pb-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-gray-300 hover:text-white transition-colors"
        >
          anya sikri
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
