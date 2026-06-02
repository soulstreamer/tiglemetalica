import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/confidentialitate")({
  head: () => ({ meta: [{ title: "Politică de Confidențialitate — Tigla Metalica" }, { name: "description", content: "Politica de confidențialitate." }] }),
  component: () => (
    <LegalPage title="Politică de Confidențialitate" intro="Confidențialitatea ta este prioritatea noastră.">
      <h2>1. Informații generale</h2>
      <p>Acest site este operat de Tigla Metalica SRL. Folosim datele tale doar pentru a-ți oferi serviciile solicitate.</p>
      <h2>2. Cookie-uri</h2>
      <p>Folosim cookie-uri tehnice esențiale pentru funcționarea site-ului și cookie-uri analitice anonime.</p>
      <h2>3. Securitate</h2>
      <p>Datele sunt criptate SSL/TLS și stocate pe servere securizate în UE.</p>
      <h2>4. Terți</h2>
      <p>Nu vindem și nu transferăm datele tale unor terți, cu excepția furnizorilor de servicii esențiale (hosting, email).</p>
      <h2>5. Modificări</h2>
      <p>Această politică poate fi actualizată periodic. Vă vom notifica orice schimbare semnificativă.</p>
    </LegalPage>
  ),
});
