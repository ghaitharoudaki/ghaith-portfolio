import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card-hover shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-sans font-black text-2xl text-gradient tracking-tight"
        >
          GA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative"
              >
                <span className="font-mono text-accent text-xs mr-2">
                  0{index + 1}.
                </span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* CTA */}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl bg-accent text-text-primary text-sm font-bold hover:bg-accent-light transition-all duration-300 glow-accent"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg glass-card text-text-secondary hover:text-text-primary transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card-hover border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-text-secondary hover:text-text-primary font-medium transition-colors py-2"
            >
              <span className="font-mono text-accent text-xs">
                0{index + 1}.
              </span>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-center px-6 py-3 rounded-xl bg-accent text-text-primary text-sm font-bold"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}
