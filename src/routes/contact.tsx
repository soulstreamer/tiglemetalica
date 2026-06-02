import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tigla Metalica" },
      { name: "description", content: "Contactează-ne pentru o ofertă gratuită. Telefon, email și locație." },
    ],
  }),
  component: Page,
});

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

function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Contact</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">Hai să vorbim</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Răspundem la orice solicitare în maxim 24 de ore. Oferte gratuite, fără obligații.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info & map */}
          <div className="space-y-6">
            {[
              { icon: Phone, t: "Telefon", d: "+40 735 384 119", h: "tel:+40735384119" },
              { icon: Mail, t: "Email", d: "contact@tiglametalica.ro", h: "mailto:contact@tiglametalica.ro" },
              { icon: MapPin, t: "Sediu", d: "Str. Acoperișului 12, Sector 4, București", h: "https://maps.google.com/?q=București" },
              { icon: Clock, t: "Program", d: "Luni–Vineri: 08:00 – 18:00 · Sâmbătă: 09:00 – 14:00" },
            ].map((c) => (
              <a key={c.t} href={c.h ?? "#"} className="flex gap-5 items-start bg-card border border-border rounded-lg p-6 hover:border-primary transition">
                <div className="size-12 rounded-lg btn-red flex items-center justify-center shrink-0">
                  <c.icon className="size-6 text-white" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.t}</div>
                  <div className="font-semibold text-base">{c.d}</div>
                </div>
              </a>
            ))}

            <div className="rounded-lg overflow-hidden border border-border h-80">
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
              <a href="/#formular" className="btn-red inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold uppercase tracking-wider text-sm">
                Cere ofertă gratuită <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Întrebări frecvente</h2>
            <p className="text-muted-foreground mb-8">Cele mai comune întrebări despre serviciile noastre de reparații acoperișuri.</p>

            <div className="space-y-3">
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
        </div>
      </section>
    </>
  );
}
