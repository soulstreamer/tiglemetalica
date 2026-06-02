import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+40735384119"
          className="size-13 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition hover:scale-110"
          aria-label="Sună"
        >
          <Phone className="size-6" />
        </a>
        <a
          href="https://wa.me/40735384119"
          target="_blank"
          rel="noopener noreferrer"
          className="size-13 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="size-6" />
        </a>
        <a
          href="mailto:contact@tiglametalica.ro"
          className="size-13 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition hover:scale-110"
          aria-label="Email"
        >
          <Mail className="size-6" />
        </a>
      </div>
    </div>
  );
}
