import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Shield, Award, Wrench, Star, Hammer, Ruler, CheckCircle2, Check, Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import CountUp from "@/components/CountUp";
import installation from "@/assets/installation.jpg";
import masurat from "@/assets/masurat.png";
import review from "@/assets/review.png";
import calcule from "@/assets/calcule.png";
import certificat2 from "@/assets/certificat2.png";
import certificat3 from "@/assets/certificat3.png";
import bilkaLogo from "@/assets/bilka.png";
import lindabLogo from "@/assets/logo-lindab.svg";
import ruukkiLogo from "@/assets/logo-ruukki.webp";
import arcelorMittalLogo from "@/assets/logo-arcelormittal.svg";
import recticelLogo from "@/assets/logo-recticel.svg";
import sikaLogo from "@/assets/logo-sika.png";
import rockwoolLogo from "@/assets/logo-rockwool.png";
import red from "@/assets/tile-red.jpg";
import black from "@/assets/tile-black.jpg";
import brown from "@/assets/tile-brown.jpg";
import green from "@/assets/tile-green.jpg";
import { services } from "@/data/services";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tigla Metalica — Montaj Acoperișuri Premium" },
      { name: "description", content: "Specialiști în montaj tiglă metalică. Garanție 30 ani, peste 2500 proiecte finalizate." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 2009, label: "Anul Înființării", suffix: "" },
  { value: 2547, label: "Proiecte Finalizate", suffix: "+" },
  { value: 48, label: "Angajați Specializați", suffix: "" },
  { value: 30, label: "Ani Garanție Acoperiș", suffix: "" },
];

const reviews = [
  { name: "Andrei Popescu", role: "Casă București", text: "Echipă profesionistă, montaj impecabil. Acoperișul arată exact cum mi-am dorit, iar prețul a fost corect. Recomand cu încredere!", rating: 5 },
  { name: "Maria Ionescu", role: "Vilă Brașov", text: "După 3 ani de la montaj, acoperișul arată ca în prima zi. Niciun fel de probleme, totul perfect etanș chiar și la furtuni puternice.", rating: 5 },
  { name: "Cristian Dumitrescu", role: "Cabană Sinaia", text: "Au montat tigla metalică pe cabana din munte într-un timp record. Calitate excelentă a materialelor și a manoperei. Bravo!", rating: 5 },
];

const steps = [
  { icon: Ruler, title: "01 · Măsurare", desc: "Echipa noastră vizitează gratuit locația și ia măsurătorile exacte ale acoperișului." },
  { icon: Wrench, title: "02 · Pregătire suport", desc: "Montăm folia anticondens, contrașipca și șipca orizontală pentru o bază perfectă." },
  { icon: Hammer, title: "03 · Montaj tiglă", desc: "Fixăm tigla metalică cu șuruburi autoforante calibrate, garantând etanșeitatea." },
  { icon: CheckCircle2, title: "04 · Accesorii & finisaje", desc: "Coamă, dolie, șorț frontal, parazăpadă — toate finisajele care fac diferența." },
];

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

const faqs = [
  {
    q: "Cât costă reparația unui acoperiș în București?",
    a: "Costul reparației depinde de mai mulți factori: suprafața afectată, tipul materialului, complexitatea intervenției și accesibilitatea acoperișului. Prețul pornește de la câteva sute de lei pentru intervenții mici (înlocuire țigle, etanșări locale) și poate ajunge la câteva mii de lei pentru reparații complexe. Oferim gratuit o evaluare și un deviz estimativ — trimite-ne o cerere și îți vom răspunde în maxim 24 de ore.",
  },
  {
    q: "Cât durează o reparație de acoperiș în București?",
    a: "Durata depinde de amploarea lucrării. O reparație locală (înlocuire câteva țigle, etanșare coș, dolie) poate fi finalizată în 1-2 zile. Lucrări mai complexe (înlocuire parțială a învelitorii, refacere hidroizolație) pot dura 3-7 zile. După evaluarea gratuită, îți vom oferi un termen exact de execuție.",
  },
  {
    q: "Oferiți garanție la lucrare și materiale?",
    a: "Da, toate lucrările noastre beneficiază de garanție: minim 5 ani pentru manoperă și garanția producătorului pentru materiale (30-40 ani pentru țigla metalică, 15-20 ani pentru hidroizolații). Garanția este menționată explicit în contract și în certificatul de garanție pe care îl emitem la finalizare.",
  },
  {
    q: "Pot face reparații doar la o parte din acoperiș?",
    a: "Absolut. Nu este necesar să refaceți întregul acoperiș dacă problema este localizată. Putem înlocui doar zona afectată — câteva țigle, o dolie, un coș de fum — și asigurăm integrarea estetică perfectă cu restul acoperișului. În cazul materialelor care nu se mai fabrică, vă oferim alternative compatibile cromatic și dimensional.",
  },
  {
    q: "Constatarile sunt GRATUITE?",
    a: "Da, constatarea și evaluarea sunt complet gratuite, fără niciun fel de obligație. Un coleg specialist va veni la fața locului, va inspecta acoperișul, va face măsurători și vă va prezenta soluțiile recomandate împreună cu un deviz estimativ. Dacă doriți, putem face și o evaluare preliminară pe baza fotografiilor trimise pe WhatsApp.",
  },
  {
    q: "Faceți intervenții de urgență?",
    a: "Da, dispunem de o echipă pregătită pentru intervenții de urgență, mai ales în caz de infiltrații majore, învelitoare avariată de furtună sau vânt puternic. Intervenim rapid pentru a limita pagubele — acoperire temporară cu prelată, etanșare provizorie, degajare elemente periculoase. Ulterior stabilim împreună programul pentru reparația definitivă.",
  },
  {
    q: "Lucrați conform normelor în vigoare?",
    a: "Da, toate lucrările noastre respectă normativele tehnice în vigoare (NP 068, C 300, PE 001 etc.) și legislația privind siguranța în construcții. Suntem autorizați și verificați, iar materialele pe care le folosim sunt certificate CE. Respectăm cu strictețe fișele tehnice ale producătorilor și regulile de bună practică în construcții.",
  },
  {
    q: "Cum calculați prețul unei lucrări de reparații a unui acoperiș?",
    a: "Prețul se calculează pe baza mai multor criterii: suprafața de intervenit (mp), tipul materialului necesar (țiglă metalică, membrană, folie etc.), complexitatea lucrării (acces, pantă, zone critice), costurile de manoperă și eventualele costuri de debarasare. După constatarea gratuită, veți primi un deviz detaliat, transparent, fără costuri ascunse.",
  },
  {
    q: "Aveți lucrări de reparații acoperișuri în portofoliu?",
    a: "Da, avem zeci de lucrări finalizate de reparații acoperișuri în București și în țară — de la reparații locale (înlocuire țigle, etanșări) până la reabilitări complete. Vă putem pune la dispoziție fotografii și referințe de la clienți anteriori la cerere. Fiecare lucrare este documentată în portofoliul nostru.",
  },
  {
    q: "Ce se întâmplă dacă apar probleme după lucrarea de reparație a acoperișului?",
    a: "Ne asumăm responsabilitatea pentru fiecare lucrare. Dacă apare orice problemă în perioada de garanție, intervenim imediat, fără costuri suplimentare. Aveți la dispoziție asistență telefonică 24/7 pentru orice urgență. Relația cu clienții noștri nu se termină la predarea lucrării — rămânem alături de voi pe termen lung.",
  },
  {
    q: "Faceți și întreținere periodică a acoperișurilor?",
    a: "Da, oferim servicii de întreținere periodică: verificare și curățare jgheaburi și burlane (primăvara și toamna), inspectare învelitoare după furtuni sau iarnă, strângere șuruburi, înlocuire elemente degradate, verificare etanșări la coame și coșuri. Încheiem contracte de întreținere anuală pentru clienții care doresc liniște deplină.",
  },
  {
    q: "Se poate adăuga izolație termică în timpul reparației acoperișului?",
    a: "Da, recomandăm chiar să profitați de ocazia reparației pentru a îmbunătăți izolația termică. Putem adăuga vată minerală bazaltică între căpriori, folie anticondens și barieră de vapori, îmbunătățind semnificativ eficiența energetică a locuinței. Costul suplimentar este mult mai mic decât o intervenție separată ulterioară.",
  },
];

export default function Home() {
  const [active, setActive] = useState(products[0]);
  const [activeService, setActiveService] = useState(services[0]);
  const [formService, setFormService] = useState("");
  const [formTip, setFormTip] = useState("");
  const [formProdus, setFormProdus] = useState("");
  const [activeSubService, setActiveSubService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/15" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-md text-white text-xs uppercase tracking-[0.3em] mb-6 btn-red">
              Acoperișuri Premium · România
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] mb-6 text-white">
<span className="btn-red px-3 py-1.5 rounded-md inline-block text-white">Acoperișul tău,</span><br/><span className="bg-white px-3 py-1.5 rounded-md inline-block"><span className="text-gradient-red">construit să dureze.</span></span>
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mb-10 leading-relaxed bg-white/50 p-4 rounded-md">
              Montaj profesional de tiglă metalică cu garanție de 30 ani. Specialiști din 2009, peste 2.500 de acoperișuri finalizate.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#formular" className="btn-red px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-sm inline-flex items-center gap-2">
                Cere ofertă gratuită <ArrowRight className="size-4" />
              </a>
              <Link to="/produse" className="px-8 py-4 rounded-md bg-white text-foreground hover:bg-white/90 transition font-semibold uppercase tracking-wider text-sm">
                Vezi produsele
              </Link>
            </div>
          </motion.div>
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,white_0%,transparent_70%)] scale-150 pointer-events-none" />
            <img src={certificat2} alt="Certificat" className="relative w-auto h-auto max-h-[50vh]" />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs uppercase tracking-widest animate-pulse">
          Scroll
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-12 overflow-hidden border-b border-border">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex gap-20 items-center whitespace-nowrap">
            {[...Array(2)].flatMap(() => [
              { name: "Bilka", logo: bilkaLogo },
              { name: "Lindab", logo: lindabLogo },
              { name: "Ruukki", logo: ruukkiLogo },
              { name: "ArcelorMittal", logo: arcelorMittalLogo },
              { name: "Recticel", logo: recticelLogo },
              { name: "Sika", logo: sikaLogo },
              { name: "Rockwool", logo: rockwoolLogo },
            ]).map((p, i) => (
              <img key={i} src={p.logo} alt={p.name} className="h-14 w-auto object-contain" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, t: "Garanție 30 ani", d: "Pentru toate acoperișurile montate de echipa noastră." },
            { icon: Award, t: "Materiale certificate", d: "Doar tiglă metalică de la producători europeni de top." },
            { icon: Wrench, t: "Echipă specializată", d: "Montatori cu certificare și peste 10 ani de experiență." },
          ].map((b) => (
            <div key={b.t} className="flex gap-6 items-start">
              <div className="size-14 rounded-lg btn-red flex items-center justify-center shrink-0">
                <b.icon className="size-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{b.t}</h3>
                <p className="text-muted-foreground text-sm">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-b border-primary my-6" />

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-white px-3 py-1 rounded-md text-primary text-xs uppercase tracking-[0.3em]">Servicii</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Toate serviciile noastre</h2>
          </div>

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
                      <button
                        onClick={() => {
                          setFormService(activeService.title);
                          document.getElementById("formular")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="btn-red inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm mt-8"
                      >
                        Solicită ofertă <ArrowRight className="size-4" />
                      </button>
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
                    <button
                      onClick={() => {
                        setFormService(activeService.title);
                        document.getElementById("formular")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-red inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm mt-8"
                    >
                      Solicită ofertă <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div className="border-b border-primary my-6" />

      {/* MONTARE INFO */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Servicii de montaj</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Montare tiglă metalică — execuție impecabilă</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Procesul nostru de montaj urmează standarde europene riguroase. De la pregătirea șarpantei până la fixarea ultimei coame, fiecare etapă este executată de o echipă specializată, cu materiale certificate.
            </p>
            <ul className="space-y-3 mb-8">
              {["Sistem complet de acoperiș cu accesorii originale", "Folie anticondens de înaltă densitate", "Șuruburi autoforante INOX cu garnitură EPDM", "Verificare termografică post-montaj"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <a href="#produse" className="btn-red inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-sm">
              Vezi tipurile de tiglă <ArrowRight className="size-4" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <img src={installation} alt="Montaj tiglă" className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover border border-border" />
          </motion.div>
        </div>
      </section>

      <div className="border-b border-primary my-6" />

      {/* PRODUSE */}
      <section className="py-16" id="produse">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Produsele noastre</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Alege culoarea perfectă</h2>
            <p className="text-lg text-muted-foreground mt-3">4 tipuri de tiglă metalică premium, toate disponibile imediat din stoc.</p>
          </motion.div>

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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{active.name}</h2>
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
                    <div className="text-4xl font-bold text-gradient-red">{active.price} <span className="text-xl text-foreground">lei/m²</span></div>
                    <div className="text-xs text-muted-foreground mt-1">TVA inclus · montaj separat</div>
                  </div>
                  <button
                    onClick={() => {
                      setFormService("Țiglă Metalică");
                      setFormTip("Tiglă metalică clasică");
                      setFormProdus(active.name);
                      document.getElementById("formular")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-red px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-sm inline-flex items-center gap-2 shrink-0"
                  >
                    Solicit ofertă <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div className="border-b border-primary my-6" />

      {/* STEPS */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundImage: `url(${masurat})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <a href="/montare" className="bg-white px-3 py-1 rounded-md text-primary text-xs uppercase tracking-[0.3em] hover:opacity-80 transition">Procesul nostru</a>
            <h2 className="text-4xl md:text-5xl font-bold mt-4"><span className="btn-red px-4 py-2 inline-block rounded-md">Cum se montează tigla metalică</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-background border border-border p-8 rounded-lg hover:border-primary transition group">
                <div className="size-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <s.icon className="size-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/montare" className="btn-red inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-sm">
              Vezi tot procesul de montare <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="border-b border-primary my-6" />

      {/* STATS */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Despre noi în cifre</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4"><span className="btn-red px-4 py-2 inline-block rounded-md text-white">Cifre care vorbesc</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition">
                <div className="text-4xl md:text-5xl font-bold text-gradient-red mb-2">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-b border-primary my-6" />

      {/* REVIEWS */}
      <section className="py-20 md:py-24 relative overflow-hidden" style={{ backgroundImage: `url(${review})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-white px-3 py-1 rounded-md text-primary text-xs uppercase tracking-[0.3em]">Recenzii clienți</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4"><span className="btn-red px-4 py-2 inline-block rounded-md">Ce spun clienții noștri</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-lg p-8 hover:border-primary transition">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="size-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-b border-primary my-6" />

      {/* FORM */}
      <section className="py-24 relative overflow-hidden" id="formular" style={{ backgroundImage: `url(${calcule})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative max-w-3xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Cere ofertă</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Solicită o ofertă personalizată</h2>
            <p className="text-white/80 mt-4 text-lg">Completează formularul și te vom contacta în maxim 24 de ore.</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const nume = data.get("nume")?.toString().trim() || "";
            const prenume = data.get("prenume")?.toString().trim() || "";
            const serviciu = data.get("serviciu")?.toString().trim() || "";
            const tip = data.get("tip")?.toString().trim() || "";
            const metri = data.get("metri")?.toString().trim() || "";
            const detalii = data.get("detalii")?.toString().trim() || "";
            const tipLinie = tip ? `%0A*Tip tiglă:* ${tip}` : "";
            const produsLinie = formProdus ? `%0A*Produs:* ${formProdus}` : "";
            const msg = `*Solicitare ofertă - Metalicraft Roofs*%0A%0A` +
              `*Nume:* ${nume}%0A*Prenume:* ${prenume}%0A%0A` +
              `*Serviciu:* ${serviciu}${tipLinie}${produsLinie}%0A*Metri pătrați:* ${metri}%0A%0A*Detalii suplimentare:*%0A${detalii || "—"}`;
            window.open(`https://wa.me/40735384119?text=${msg}`, "_blank");
          }} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Nume</label>
                <input name="nume" required className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Numele tău" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Prenume</label>
                <input name="prenume" required className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Prenumele tău" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white">Serviciu</label>
              <select name="serviciu" value={formService} onChange={(e) => setFormService(e.target.value)} required className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Selectează serviciul</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            {formService === "Țiglă Metalică" && (
              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Tip tiglă metalică</label>
                <select name="tip" value={formTip} onChange={(e) => setFormTip(e.target.value)} className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Selectează tipul</option>
                  <option value="Tiglă metalică clasică">Tiglă metalică clasică</option>
                  <option value="Tiglă metalică cu coadă">Tiglă metalică cu coadă</option>
                  <option value="Tablă cutată">Tablă cutată</option>
                  <option value="Panouri termoizolante">Panouri termoizolante</option>
                  <option value="Altele">Altele</option>
                </select>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Metri pătrați</label>
                <input name="metri" type="number" required className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Ex: 150" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-white">Tip acoperiș</label>
                <select name="acoperis" className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Selectează</option>
                  <option value="Casă nouă">Casă nouă</option>
                  <option value="Renovare">Renovare</option>
                  <option value="Cabană">Cabană</option>
                  <option value="Pavilion">Pavilion</option>
                  <option value="Altceva">Altceva</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white">Detalii suplimentare</label>
              <textarea name="detalii" rows={4} className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Culoare, accesorii, orice detalii suplimentare..." />
            </div>
            <button type="submit" className="btn-red w-full py-4 rounded-md font-semibold uppercase tracking-wider text-sm">
              Trimite cererea pe WhatsApp
            </button>
          </form>
        </motion.div>
      </section>

      {/* CONTACT INFO + FAQ */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Hai să vorbim</h2>
            <p className="text-muted-foreground mt-4 text-lg">Răspundem la orice solicitare în maxim 24 de ore.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact info & map */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Phone, t: "Telefon", d: "+40 735 384 119", h: "tel:+40735384119" },
                  { icon: Mail, t: "Email", d: "contact@tiglametalica.ro", h: "mailto:contact@tiglametalica.ro" },
                  { icon: MapPin, t: "Sediu", d: "Str. Acoperișului 12, Sector 4, București", h: "https://maps.google.com/?q=București" },
                  { icon: Clock, t: "Program", d: "Luni–Vineri 08–18 · Sâmbătă 09–14" },
                ].map((c) => (
                  <a key={c.t} href={c.h ?? "#"} className="flex gap-4 items-start bg-card border border-border rounded-lg p-5 hover:border-primary transition">
                    <div className="size-11 rounded-lg btn-red flex items-center justify-center shrink-0">
                      <c.icon className="size-5 text-white" />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">{c.t}</div>
                      <div className="font-semibold text-sm">{c.d}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="rounded-lg overflow-hidden border border-border h-72">
                <iframe
                  title="Locație"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=26.05%2C44.40%2C26.15%2C44.46&layer=mapnik&marker=44.4268%2C26.1025"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <a href="#formular" className="btn-red inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-sm">
                  Cere ofertă gratuită <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Right: FAQ */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">Întrebări frecvente</h2>
              <p className="text-muted-foreground mb-8">Cele mai comune întrebări despre serviciile noastre de reparații acoperișuri.</p>
              <div className="space-y-3 overflow-y-auto" style={{ maxHeight: "620px" }}>
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold hover:bg-card transition"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`size-5 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-muted-foreground leading-relaxed border-t border-border pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
