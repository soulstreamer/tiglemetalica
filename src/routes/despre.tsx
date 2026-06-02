import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Users, Calendar, Target } from "lucide-react";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Noi — Tigla Metalica" },
      { name: "description", content: "Peste 15 ani de experiență în montaj tiglă metalică. Povestea, valorile și echipa noastră." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Despre Tigla Metalica</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">Construim acoperișuri din 2009</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Trei generații de meșteri, o singură obsesie: calitatea fără compromis.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src={factory} alt="Producție" className="rounded-lg border border-border" loading="lazy" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Povestea noastră</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Am început în 2009 ca o mică echipă de patru montatori cu o singură promisiune: să livrăm acoperișuri care durează. Astăzi suntem 48 de specialiști, am finalizat peste 2.500 de proiecte și acoperim 24 de județe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lucrăm doar cu producători europeni certificați, folosim materiale auxiliare de top și investim constant în formarea echipei. De aceea oferim garanție de până la 30 de ani pentru fiecare acoperiș.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Misiunea noastră rămâne aceeași: să-ți oferim liniștea că ai deasupra capului cel mai bun acoperiș posibil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, t: "2009", d: "Anul înființării" },
            { icon: Users, t: "48", d: "Specialiști în echipă" },
            { icon: Award, t: "30 ani", d: "Garanție acoperiș" },
            { icon: Target, t: "98%", d: "Clienți mulțumiți" },
          ].map((s) => (
            <motion.div key={s.d} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <s.icon className="size-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-gradient-red mb-2">{s.t}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
