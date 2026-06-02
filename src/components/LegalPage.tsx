import { type ReactNode } from "react";

export default function LegalPage({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-primary text-xs uppercase tracking-[0.3em]">Document legal</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">{title}</h1>
        {intro && <p className="text-muted-foreground text-lg mb-12">{intro}</p>}
        <div className="prose prose-invert max-w-none space-y-6 text-foreground/85 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3">
          {children}
        </div>
      </div>
    </section>
  );
}
