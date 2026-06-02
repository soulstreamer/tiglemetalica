import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/anpc")({
  head: () => ({ meta: [{ title: "ANPC — Tigla Metalica" }, { name: "description", content: "Informații ANPC și soluționare alternativă litigii." }] }),
  component: () => (
    <LegalPage title="Informații ANPC" intro="Drepturile consumatorilor și modalități de soluționare a litigiilor.">
      <h2>Autoritatea Națională pentru Protecția Consumatorilor</h2>
      <p>Bulevardul Aviatorilor nr. 72, Sector 1, București<br/>Telefon: 0219551<br/>Web: <a href="https://anpc.ro" className="text-primary underline">anpc.ro</a></p>
      <h2>Soluționarea Alternativă a Litigiilor (SAL)</h2>
      <p>Conform OG 38/2015, te poți adresa SAL pentru rezolvarea amiabilă a oricărui litigiu cu noi.<br/>Web: <a href="https://anpc.ro/ce-este-sal/" className="text-primary underline">anpc.ro/ce-este-sal</a></p>
      <h2>Soluționare Online (SOL)</h2>
      <p>Platforma europeană: <a href="https://ec.europa.eu/consumers/odr" className="text-primary underline">ec.europa.eu/consumers/odr</a></p>
      <h2>Drepturi conform Legii 449/2003</h2>
      <p>Beneficiezi de garanție legală de conformitate de 2 ani pentru produse și 5 ani pentru lucrările de construcții.</p>
    </LegalPage>
  ),
});
