import { useState } from "react";
import { Menu, X } from "lucide-react";

import { PORTFOLIO_DATA } from "../data/portfolio";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Brand */}
        <a
          href="/"
          className="flex flex-col leading-tight"
        >
          <span className="text-lg md:text-xl font-bold tracking-tight text-white uppercase">
            {PORTFOLIO_DATA.personal.name}
          </span>

          <span className="text-xs text-zinc-400">
            {PORTFOLIO_DATA.personal.headline}
          </span>
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/80">
          <nav className="flex flex-col px-6 py-6 gap-5">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}

          </nav>
        </div>
      )}

    </header>
  );
}