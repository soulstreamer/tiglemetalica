import dulgherieImg from "@/assets/dulgherie.png";
import hidroImg from "@/assets/hidro.png";
import bulaneImg from "@/assets/bulane.png";
import tiglaImg from "@/assets/tigla.png";

export const services = [
  {
    id: "tigla-metalica",
    title: "Țiglă Metalică",
    image: tiglaImg,
    desc: "Furnizăm și montăm țiglă metalică de la cei mai renumiți producători europeni: Lindab, Ruukki, ArcelorMittal. Oferim o gamă variată de profile și culori, cu garanție extinsă de până la 40 de ani. Toate componentele sistemului — țiglă, accesorii, elemente de fixare — sunt compatibile și certificate.",
    features: ["Profile: Classic, Modul Premium, Mediteran, Classic Plus", "Garanție 30–40 ani în funcție de model", "Accesorii originale pentru fiecare sistem", "Culori RAL disponibile din stoc"],
    subServices: [
      {
        id: "acoperisuri-inclinate",
        title: "Acoperișuri Înclinate",
        desc: "Executăm montaj complet de țiglă metalică pe acoperișuri înclinate de orice tip — în două sau patru ape, cu sau fără lucarne. Sistemul de prindere ascunsă asigură un aspect curat și etanșeitate perfectă. Folosind accesorii originale și șuruburi autoforante cu garnitură EPDM, garantăm o durată de viață de minimum 30 de ani.",
        features: ["Montaj pe acoperișuri înclinate", "Sistem de prindere ascunsă", "Accesorii originale", "Garanție 30–40 ani"],
      },
      {
        id: "acoperisuri-terasa",
        title: "Acoperișuri Terasă sau Plate",
        desc: "Pentru acoperișuri terasă și plate, oferim soluții complete de învelitoare metalică cu sistem de termoizolare și hidroizolație integrată. Profilele metalice speciale asigură panta minimă necesară pentru scurgerea apei, iar sistemul de fixare mecanică garantează stabilitate pe termen lung.",
        features: ["Soluții pentru acoperișuri terasă", "Termoizolare și hidroizolație integrată", "Profile cu pantă minimă", "Fixare mecanică stabilă"],
      },
      {
        id: "acoperisuri-metalice",
        title: "Acoperișuri Metalice",
        desc: "Furnizăm și montăm orice tip de acoperiș metalic: țiglă metalică, tablă cutată, panouri termoizolante tip sandwich. Colaborăm cu liderii europeni Lindab, Ruukki și ArcelorMittal pentru a oferi produse certificate, cu garanție extinsă și performanță ridicată.",
        features: ["Țiglă metalică, tablă cutată, panouri sandwich", "Parteneri: Lindab, Ruukki, ArcelorMittal", "Produse certificate european", "Garanție extinsă producător"],
      },
      {
        id: "materiale-compozite",
        title: "Acoperișuri din Materiale Compozite",
        desc: "Oferim alternative moderne la țigla metalică clasică: țiglă compozită din nisip și polimeri, țiglă bituminoasă de înaltă densitate și sisteme ecologice de învelitoare. Materialele compozite combină estetica tradițională cu performanțe tehnice superioare — izolare fonică, termică și rezistență la impact.",
        features: ["Țiglă compozită nisip-polimeri", "Țiglă bituminoasă HD", "Izolare fonică și termică superioară", "Rezistență la impact și grindină"],
      },
      {
        id: "grinzi-capriori",
        title: "Grinzi și Căpriori",
        desc: "Realizăm structuri complete din lemn pentru acoperiș: grinzi principale, căpriori, pane și contravântuiri. Folosim cherestea ecarisată uscată, tratată antifungic și ignifug, dimensionată conform calculelor de rezistență. Fiecare îmbinare este executată cu precizie pentru o stabilitate maximă.",
        features: ["Grinzi principale și căpriori", "Cherestea ecarisată tratată", "Dimensionare conform rezistență", "Îmbinări de precizie"],
      },
      {
        id: "ferestre-mansarda",
        title: "Ferestre de Mansardă",
        desc: "Montăm ferestre de mansardă și lucarne integrate perfect în învelitoarea metalică. Asigurăm etanșarea completă cu șorțuri metalice personalizate și folii speciale, pentru o integrare estetică și funcțională. Orice tip de fereastră — clasică, panoramică sau de ieșire pe acoperiș.",
        features: ["Ferestre de mansardă și lucarne", "Integrare în învelitoarea metalică", "Etanșare cu șorțuri personalizate", "Clasice, panoramice sau de ieșire"],
      },
      {
        id: "ventilatie-izolatie",
        title: "Ventilație și Izolație",
        desc: "Asigurăm ventilația corectă a acoperișului pentru a preveni condensul și deteriorarea prematură a structurii. Montăm folie anticondens, contrașipcă de ventilație, coame ventilate și grătare de aerisire. Oferim și soluții complete de izolare termică cu vată minerală sau spumă poliuretanică.",
        features: ["Ventilație corectă a acoperișului", "Folie anticondens și contrașipcă", "Coame ventilate și grătare de aerisire", "Izolare termică (vată minerală, spumă PU)"],
      },
    ],
  },
  {
    id: "dulgherie",
    title: "Dulgherie",
    image: dulgherieImg,
    desc: "Executăm lucrări complete de dulgherie pentru structura acoperișului: șarpantă din lemn ecarisat, astereală, contrașipcă și șipcă. Folosim doar cherestea uscată, tratată antifungic și ignifug, conform normelor europene. Fiecare element este dimensionat exact în funcție de greutatea învelitorii și de unghiul acoperișului.",
    features: ["Șarpantă din lemn ecarisat", "Astereală și contrașipcă", "Tratament antifungic și ignifug", "Dimensionare exactă per proiect"],
    subServices: [
      {
        id: "2-ape",
        title: "Acoperiș în 2 Ape",
        desc: "Executăm șarpanta pentru acoperișuri în două ape (fronton), cel mai comun tip de acoperiș înclinat. Structura simplă și eficientă, ideală pentru case individuale. Folosind lemn ecarisat de calitate superioară, asigurăm o fundație solidă pentru orice tip de învelitoare.",
        features: ["Lemn ecarisat tratat ignifug", "Unghi optimizat per regiune", "Contrașipcă și astereală incluse", "Garanție 10 ani pe structură"],
      },
      {
        id: "4-ape",
        title: "Acoperiș în 4 Ape",
        desc: "Realizăm șarpante complexe pentru acoperișuri în patru ape (holl), cu coamă și văi bine dimensionate. Acest tip de acoperiș oferă o stabilitate sporită și un aspect estetic deosebit, fiind potrivit pentru vile și case cu arhitectură elaborată.",
        features: ["Șarpantă cu coamă și văi", "Calcul static riguros", "Lemn ecarisat certificat", "Compatibil cu orice învelitoare"],
      },
      {
        id: "multe-ape",
        title: "Acoperiș cu Mai Multe Ape",
        desc: "Pentru proiecte complexe — acoperișuri cu multiple ape, lucarne, turle sau forme neregulate — echipa noastră de dulgheri executează structuri personalizate, urmând planuri arhitecturale detaliate. Fiecare nod și îmbinare este calculată și executată cu precizie.",
        features: ["Structuri personalizate", "Lucarne și turle incluse", "Îmbinări executate cu precizie", "Consulting tehnic gratuit"],
      },
    ],
  },
  {
    id: "hidroizolatii",
    title: "Hidroizolații",
    image: hidroImg,
    desc: "Aplicăm sisteme profesionale de hidroizolație pentru acoperișuri înclinate: folie anticondens de înaltă densitate, membrană hidroizolantă pentru zone critice (dolii, coame, coșuri) și bandă butilică pentru etanșarea suprapunerilor. Toate materialele sunt certificate și au durabilitate de peste 30 de ani.",
    features: ["Folie anticondens de înaltă densitate", "Membrană hidroizolantă pentru zone critice", "Bandă butilică pentru etanșare", "Durabilitate peste 30 de ani"],
    subServices: [
      {
        id: "folie-anticondens",
        title: "Folie Anticondens",
        desc: "Folosim folie anticondens de înaltă densitate (HD) pentru protecția termoizolației și a structurii de lemn împotriva umezelii. Aceasta permite eliminarea vaporilor din interior, împiedicând totodată pătrunderea apei din exterior. Montăm folia cu respectarea strictă a suprapunerilor și etanșăm cu bandă butilică la toate îmbinările.",
        features: ["Folie anticondens HD", "Protecție termoizolație și structură lemn", "Eliminare vapori din interior", "Etanșare cu bandă butilică la îmbinări"],
      },
      {
        id: "membrana-hidroizolanta",
        title: "Membrană Hidroizolantă",
        desc: "Aplicăm membrană hidroizolantă profesională în zonele critice ale acoperișului: dolii (văi), coame, coșuri de fum, pereți adiacenți și luminatoare. Membrana este flexibilă, rezistentă la UV și la variații mari de temperatură, asigurând o etanșare perfectă chiar și în cele mai dificile puncte ale învelitorii.",
        features: ["Dolii, coame, coșuri de fum", "Pereți adiacenți și luminatoare", "Rezistentă UV și la variații de temperatură", "Etanșare perfectă în puncte dificile"],
      },
      {
        id: "bariera-vapori",
        title: "Barieră de Vapori",
        desc: "Montăm barieră de vapori pe partea interioară a acoperișului, sub termoizolație, pentru a preveni pătrunderea umezelii din interior în straturile superioare. Folosim folie specială cu coeficient de difuziune extrem de redus (Sd > 100 m) și etanșăm toate suprapunerile cu bandă acrilică dublu-adezivă.",
        features: ["Barieră de vapori interioară", "Coeficient difuziune Sd > 100 m", "Etanșare cu bandă acrilică dublu-adezivă", "Prevenire condens în termoizolație"],
      },
    ],
  },
  {
    id: "jgheaburi",
    title: "Jgheaburi și Burlane",
    image: bulaneImg,
    desc: "Montăm sisteme complete de jgheaburi și burlane din tablă vopsită, în culoarea tablei de pe acoperiș. Furnizăm și instalăm colțare, pâlnii, racorduri și cleme de fixare, toate din același material. Dimensionăm corect diametrele pentru a asigura o colectare și evacuare optimă a apelor pluviale.",
    features: ["Jgheaburi și burlane din tablă vopsită", "Culoare identică cu învelitoarea", "Colțare, pâlnii și racorduri incluse", "Diametre optimizate per suprafață"],
    subServices: [
      {
        id: "pvc",
        title: "Jgheaburi din PVC",
        desc: "Sisteme de jgheaburi și burlane din PVC de înaltă calitate, ușoare și rezistente la coroziune. Ideale pentru casele cu buget redus, oferă o durată de viață lungă și nu necesită vopsire sau întreținere. Disponibile în multiple culori pentru a se potrivi cu orice stil arhitectural.",
        features: ["Ușoare și rezistente la coroziune", "Nu necesită întreținere", "Durată de viață peste 25 de ani", "Disponibile în multiple culori"],
      },
      {
        id: "aluminiu",
        title: "Jgheaburi din Aluminiu",
        desc: "Jgheaburi și burlane din aluminiu, turnate continuu la fața locului — fără îmbinuri transversale. Rezistente la intemperii și coroziune, au un aspect modern și se pot vopsi electrostatic în orice culoare RAL. Soluția premium pentru arhitectură contemporană.",
        features: ["Turnare continuă fără îmbinuri", "Rezistente la intemperii", "Se vopsesc electrostatic RAL", "Aspect modern și elegant"],
      },
      {
        id: "tabla-zincata",
        title: "Jgheaburi din Tablă Zincată",
        desc: "Soluția tradițională și robustă pentru jgheaburi și burlane. Tabla zincată oferă o rezistență mecanică superioară și poate fi vopsită în aceeași culoare cu învelitoarea metalică. Recomandată pentru acoperișuri mari, hale industriale și clădiri cu trafic pluvial intens.",
        features: ["Rezistență mecanică superioară", "Se vopsește la culoarea tablei", "Ideală pentru suprafețe mari", "Durată de viață peste 30 de ani"],
      },
    ],
  },
];
