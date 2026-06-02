import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii — Tigla Metalica" },
      { name: "description", content: "Servicii complete de montaj tiglă metalică: țiglă metalică, dulgherie, hidroizolații, jgheaburi și burlane." },
    ],
  }),
  component: Page,
});

function Page() {
  const [activeService, setActiveService] = useState(services[0]);
  const [activeSubService, setActiveSubService] = useState(0);
  return (
    <>
      <section className="pt-36 pb-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Servicii</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">Toate serviciile noastre</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">De la montajul țiglei metalice până la hidroizolații și jgheaburi — oferim soluții complete pentru acoperișul tău.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => { setActiveService(s); setActiveSubService(0); }}
                className={`px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition border-2 ${activeService.id === s.id ? "btn-red text-white border-transparent" : "bg-background border-border text-foreground hover:border-primary"}`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Service content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {activeService.subServices ? (
                <div>
                  {/* Sub-service tabs */}
                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {activeService.subServices.map((sub, i) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubService(i)}
                        className={`px-5 py-2.5 rounded-full font-semibold uppercase tracking-wider text-sm transition border-2 ${activeSubService === i ? "btn-red text-white border-transparent" : "bg-background border-border text-foreground hover:border-primary"}`}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                  {/* Sub-service content */}
                  <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {activeService.image && (
                      <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
                        <img src={activeService.image} alt={activeService.title} className="relative w-full max-h-[450px] object-cover rounded-lg shadow-lg" />
                      </div>
                    )}
                    <div className={activeService.image ? "" : "max-w-3xl mx-auto"}>
                      <h3 className="text-3xl font-bold mb-6">{activeService.subServices[activeSubService].title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">{activeService.subServices[activeSubService].desc}</p>
                      <ul className="grid md:grid-cols-2 gap-4">
                        {activeService.subServices[activeSubService].features.map((f) => (
                          <li key={f} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                            <CheckCircle2 className="size-5 text-primary shrink-0" />
                            <span className="text-foreground/90">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/"
                        hash="formular"
                        onClick={() => {
                          sessionStorage.setItem("formService", activeService.title);
                        }}
                        className="btn-red inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm mt-8"
                      >
                        Solicită ofertă <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  {activeService.image && (
                    <div className="relative">
                      <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
                      <img src={activeService.image} alt={activeService.title} className="relative w-full max-h-[450px] object-cover rounded-lg shadow-lg" />
                    </div>
                  )}
                  <div className={activeService.image ? "" : "max-w-3xl mx-auto"}>
                    <h3 className="text-3xl font-bold mb-6">{activeService.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">{activeService.desc}</p>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {activeService.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                          <CheckCircle2 className="size-5 text-primary shrink-0" />
                          <span className="text-foreground/90">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/"
                      hash="formular"
                      onClick={() => {
                        sessionStorage.setItem("formService", activeService.title);
                      }}
                      className="btn-red inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm mt-8"
                    >
                      Solicită ofertă <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
