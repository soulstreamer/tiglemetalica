import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const leftLinks = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/montare", label: "Montare" },
  { to: "/produse", label: "Produse" },
];
const rightLinks = [
  { to: "/despre", label: "Despre" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background border-b border-border">
      <div className="hidden md:flex items-center px-8 py-1.5 text-xs text-muted-foreground border-b border-border bg-muted/30 overflow-hidden">
        <div className="overflow-hidden flex-1 max-w-[50%]">
          <div className="animate-scroll whitespace-nowrap">🔥 Oferte speciale la tiglă metalică — solicită un calcul gratuit!</div>
        </div>
        <div className="flex items-center gap-6 shrink-0 ml-auto">
          <span><span className="font-medium">Telefon:</span> <a href="tel:+40735384119" className="hover:text-primary transition-colors">+40 735 384 119</a></span>
          <span className="hidden lg:inline"><span className="font-medium">Adresa:</span> Str. Acoperișului 12, Sector 4, București</span>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 min-h-[180px] md:min-h-0 md:h-20 flex items-center justify-between relative">
        {/* Left spacer on mobile to balance toggle; links on desktop */}
        <div className="md:hidden size-10" />
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {leftLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-widest font-medium text-foreground/80 hover:text-primary hover:underline underline-offset-4 decoration-primary transition-all"
              activeProps={{ className: "text-primary underline underline-offset-4 decoration-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Tigla Metalica" className="h-44 md:h-56 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8 flex-1">
          {rightLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-widest font-medium text-foreground/80 hover:text-primary hover:underline underline-offset-4 decoration-primary transition-all"
              activeProps={{ className: "text-primary underline underline-offset-4 decoration-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {[...leftLinks, ...rightLinks].map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest text-foreground/80 hover:text-primary hover:underline underline-offset-4 decoration-primary transition-all">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
