import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hammer, CheckCircle2, ArrowRight, Layers, Wind, Droplets, Thermometer } from "lucide-react";
import installation from "@/assets/installation.jpg";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/montare")({
  head: () => ({
    meta: [
      { title: "Montare Tiglă Metalică — Tigla Metalica" },
      { name: "description", content: "Proces complet de montaj tiglă metalică: pregătire, montaj, finisaje. Vezi cum lucrăm." },
    ],
  }),
  component: Page,
});

const phases = [
  { n: "01", t: "Inspecție și măsurători", d: "Vizităm gratuit locația, evaluăm starea șarpantei și luăm măsurătorile exacte. Calculăm cantitatea de tiglă, accesorii și materiale auxiliare." },
  { n: "02", t: "Pregătirea șarpantei", d: "Verificăm structura din lemn, înlocuim elementele degradate, tratăm lemnul împotriva dăunătorilor și mucegaiului." },
  { n: "03", t: "Montaj folie anticondens", d: "Aplicăm folia anticondens difuzivă pentru a permite evacuarea vaporilor și a preveni condensul sub acoperiș." },
  { n: "04", t: "Contrașipcă și șipcă", d: "Fixăm contrașipca verticală (4x5 cm) și șipca orizontală la distanța specificată de producătorul tiglei." },
  { n: "05", t: "Montaj tiglă metalică", d: "Pozăm panourile de jos în sus și de la dreapta la stânga, fixând cu șuruburi autoforante INOX cu garnitură EPDM." },
  { n: "06", t: "Coame, dolii și accesorii", d: "Montăm coama, dolii, șorț frontal, parazăpadă, copertine. Etanșăm toate îmbinările critice." },
  { n: "07", t: "Verificare și recepție", d: "Testăm etanșeitatea, verificăm fiecare șurub, curățăm zona. Predăm acoperișul cu certificat de garanție." },
];

const advantages = [
  { icon: Wind, t: "Rezistență la vânt", d: "Sistem testat la viteze de peste 180 km/h." },
  { icon: Droplets, t: "Etanșeitate totală", d: "Garnituri EPDM la fiecare șurub, fără infiltrații." },
  { icon: Thermometer, t: "Termoizolant", d: "Reflectă căldura vara, păstrează căldura iarna." },
  { icon: Layers, t: "8 straturi de protecție", d: "De la oțel zincat până la stratul final de poliester." },
];

function Page() {
  return (
    <>
      <section className="relative py-32 overflow-hidden border-b border-border">
        <img src={installation} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Hammer className="size-12 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Montare tiglă metalică</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proces complet, transparent, executat la cele mai înalte standarde. Iată cum transformăm casa ta într-un acoperiș care durează generații.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {advantages.map((a) => (
              <div key={a.t} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
                <a.icon className="size-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">{a.t}</h3>
                <p className="text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {phases.map((p, i) => (
              <motion.div key={p.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-8 bg-card border border-border rounded-lg p-8 hover:border-primary transition">
                <div className="text-5xl font-bold text-gradient-red shrink-0 w-20">{p.n}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{p.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Procesul de fabricație</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Cum se produce tigla metalică</h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">1. Oțel de bază:</strong> Procesul începe cu bobine de oțel cu grosimi de 0.4 - 0.6 mm, certificate conform EN 10346.</p>
              <p><strong className="text-foreground">2. Zincare la cald:</strong> Oțelul este acoperit cu un strat de zinc (minim 275 g/m²) pentru protecție anticorozivă.</p>
              <p><strong className="text-foreground">3. Pasivare și grund:</strong> Se aplică un strat de pasivare chimică și unul de grund epoxidic pentru aderență.</p>
              <p><strong className="text-foreground">4. Stratul de culoare:</strong> Vopsea poliester (PE), PVDF sau Pural — în funcție de garanție, de la 10 la 50 de ani.</p>
              <p><strong className="text-foreground">5. Profilare:</strong> Foile sunt trecute prin role care formează profilul caracteristic (Classic, Modul, Mediteran etc.).</p>
              <p><strong className="text-foreground">6. Tăiere la dimensiune:</strong> Panourile sunt tăiate la lungimea exactă comandată, ±5 mm toleranță.</p>
            </div>
          </div>
          <img src={factory} alt="Fabrică tiglă metalică" className="rounded-lg border border-border shadow-2xl" loading="lazy" />
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vezi gama noastră de produse</h2>
          <p className="text-muted-foreground mb-8">4 tipuri de tiglă metalică, 4 culori distincte, prețuri transparente.</p>
          <Link to="/produse" className="btn-red inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-sm">
            Explorează produsele <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
