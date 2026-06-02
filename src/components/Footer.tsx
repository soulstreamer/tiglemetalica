import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="Tigla Metalica" className="h-60 w-auto mb-4" />
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Specialiști în montaj tiglă metalică de peste 15 ani. Acoperișuri premium care durează generații.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Navigare</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
            <li><Link to="/montare" className="hover:text-primary">Montare</Link></li>
            <li><Link to="/produse" className="hover:text-primary">Produse</Link></li>
            <li><Link to="/despre" className="hover:text-primary">Despre</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/gdpr" className="hover:text-primary">GDPR</Link></li>
            <li><Link to="/confidentialitate" className="hover:text-primary">Confidențialitate</Link></li>
            <li><Link to="/anpc" className="hover:text-primary">ANPC</Link></li>
          </ul>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Phone className="size-4 text-primary shrink-0"/> <span className="text-sm">+40 735 384 119</span></div>
            <div className="flex items-center gap-2"><Mail className="size-4 text-primary shrink-0"/> <span className="text-sm">contact@tiglametalica.ro</span></div>
            <div className="flex items-center gap-2"><MapPin className="size-4 text-primary shrink-0"/> <span className="text-sm">București, România</span></div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tigla Metalica. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
