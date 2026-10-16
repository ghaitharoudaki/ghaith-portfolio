import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["01", "Summary", "#summary"],
  ["02", "Skills", "#skills"],
  ["03", "Projects", "#projects"],
  ["04", "Experience", "#experience"],
  ["05", "Education", "#education"],
  ["07", "Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell${scrolled ? " nav-scrolled" : ""}`}>
      <a className="nav-mark" href="#top" aria-label="Back to top">
        GA
      </a>
      <nav className={`nav-links${open ? " nav-open" : ""}`} aria-label="Primary navigation">
        {links.map(([number, label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            <span>{number}</span>{label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">Available for work <span>↗</span></a>
      <button
        className="nav-menu"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
