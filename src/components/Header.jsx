import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight text-lg">Your Name</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:shadow-md hover:-translate-y-0.5 transition transform"
            >
              Let’s talk <ArrowRight size={16} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-6 animate-in">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:shadow-md"
              >
                Let’s talk <ArrowRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
