import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import red from "@/assets/tile-red.jpg";
import black from "@/assets/tile-black.jpg";
import brown from "@/assets/tile-brown.jpg";
import green from "@/assets/tile-green.jpg";

export const Route = createFileRoute("/produse")({
  head: () => ({
    meta: [
      { title: "Produse — Tigla Metalica" },
      { name: "description", content: "4 tipuri de tiglă metalică cu prețuri și informații complete." },
    ],
  }),
  component: Page,
});

const products = [
  {
    id: "rosu",
    name: "Roșu Rubin · RAL 3011",
    image: red,
    color: "#a8252b",
    price: "32",
    profile: "Classic",
    warranty: "30 ani",
    thickness: "0.5 mm",
    coating: "Poliester Mat 35μm",
    desc: "Cel mai popular model. Roșul clasic, perfect pentru case tradiționale și moderne deopotrivă. Stratul mat reduce reflexiile și dă un aspect elegant.",
    features: ["Garanție 30 ani la rugină", "Rezistență UV ridicată", "Strat de zinc 275g/m²", "Garnitură EPDM inclusă"],
  },
  {
    id: "negru",
    name: "Negru Antracit · RAL 9005",
    image: black,
    color: "#1a1a1a",
    price: "38",
    profile: "Modul Premium",
    warranty: "40 ani",
    thickness: "0.5 mm",
    coating: "PURAL Mat 50μm",
    desc: "Eleganță modernă pentru arhitectură contemporană. Negrul antracit cu finisaj mat profund — alegerea preferată a arhitecților.",
    features: ["Garanție 40 ani", "Anti-fading premium", "Suprafață mătăsoasă", "Rezistență la zgârieturi"],
  },
  {
    id: "maro",
    name: "Maro Ciocolată · RAL 8017",
    image: brown,
    color: "#3a2317",
    price: "34",
    profile: "Mediteran",
    warranty: "30 ani",
    thickness: "0.5 mm",
    coating: "Poliester Lucios 25μm",
    desc: "Tonalitate caldă, rustică, care se integrează perfect în peisajul montan și rural. Profil mediteran cu valuri pronunțate.",
    features: ["Garanție 30 ani", "Aspect ceramic autentic", "Rezistent la grindină", "Termo-reflectorizant"],
  },
  {
    id: "verde",
    name: "Verde Pădure · RAL 6020",
    image: green,
    color: "#2d5a3a",
    price: "36",
    profile: "Classic Plus",
    warranty: "35 ani",
    thickness: "0.5 mm",
    coating: "Poliester Mat Strat Dublu",
    desc: "Verde profund, ideal pentru case în zone împădurite sau pentru integrare ecologică. Strat dublu de protecție.",
    features: ["Garanție 35 ani", "Camuflaj natural", "Anti-mucegai", "Rezistent la sare marină"],
  },
];

function Page() {
  const [active, setActive] = useState(products[0]);

  return (
    <>
      <section className="py-24 text-center border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Produsele noastre</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">Alege culoarea perfectă</h1>
          <p className="text-xl text-muted-foreground">4 tipuri de tiglă metalică premium, toate disponibile imediat din stoc.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Color selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className={`group flex items-center gap-3 px-5 py-3 rounded-full border-2 transition ${active.id === p.id ? "border-primary bg-primary/10" : "border-border hover:border-foreground/40"}`}
              >
                <span className="size-6 rounded-full border-2 border-foreground/20" style={{ background: p.color }} />
                <span className="text-sm font-medium uppercase tracking-wider">{p.id}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className="relative">
                <div className="absolute -inset-4 blur-3xl opacity-40 rounded-full" style={{ background: active.color }} />
                <img src={active.image} alt={active.name} className="relative rounded-lg w-full h-[500px] object-cover border border-border shadow-2xl" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{active.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{active.desc}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    ["Profil", active.profile],
                    ["Garanție", active.warranty],
                    ["Grosime", active.thickness],
                    ["Finisaj", active.coating],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-white border border-border rounded-lg p-4">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{k}</div>
                      <div className="font-semibold">{v}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mb-8">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="size-5 text-primary" /> {f}</li>
                  ))}
                </ul>

                <div className="flex items-end justify-between bg-white border border-border rounded-lg p-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">De la</div>
                    <div className="text-5xl font-bold text-gradient-red">{active.price} <span className="text-2xl text-foreground">lei/m²</span></div>
                    <div className="text-xs text-muted-foreground mt-1">TVA inclus · montaj separat</div>
                  </div>
                  <Link to="/contact" className="btn-red px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm inline-flex items-center gap-2">
                    Solicit ofertă <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nu ești sigur ce culoare să alegi?</h2>
          <p className="text-muted-foreground mb-8">Echipa noastră îți recomandă cea mai bună variantă pentru casa ta, gratuit.</p>
          <Link to="/contact" className="btn-red inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-sm">
            Consultanță gratuită <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
