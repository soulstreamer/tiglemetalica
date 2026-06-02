import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/gdpr")({
  head: () => ({ meta: [{ title: "GDPR — Tigla Metalica" }, { name: "description", content: "Politica GDPR Tigla Metalica." }] }),
  component: () => (
    <LegalPage title="Politica GDPR" intro="Cum colectăm, folosim și protejăm datele tale personale conform Regulamentului UE 2016/679.">
      <h2>1. Operator de date</h2>
      <p>Tigla Metalica SRL, cu sediul în Str. Acoperișului 12, Sector 4, București. CUI: RO12345678.</p>
      <h2>2. Date colectate</h2>
      <p>Nume, prenume, telefon, email, adresa locației pentru ofertă — strict pentru a-ți răspunde la solicitare.</p>
      <h2>3. Temei legal</h2>
      <p>Consimțământul tău (art. 6 lit. a GDPR) și executarea contractului (art. 6 lit. b).</p>
      <h2>4. Perioada de stocare</h2>
      <p>5 ani de la ultima interacțiune, conform obligațiilor fiscale.</p>
      <h2>5. Drepturile tale</h2>
      <p>Acces, rectificare, ștergere, opoziție, portabilitate. Contact: gdpr@tiglametalica.ro</p>
      <h2>6. Autoritate</h2>
      <p>Te poți adresa ANSPDCP (www.dataprotection.ro).</p>
    </LegalPage>
  ),
});
