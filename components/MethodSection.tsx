const steps = [
  { num: "01", title: "L'idea", desc: "Studio della location, selezione musicale, verifica mappe aeronautiche." },
  { num: "02", title: "Il progetto", desc: "Sopralluogo tecnico, inquadrature, spazi artisti, copertura rete." },
  { num: "03", title: "L'Esecuzione", desc: "Regia video e suono, area droni, collegamenti web per la diretta." },
];

export function MethodSection() {
  return (
    <section id="metodo" className="py-20 px-4 bg-festivalBlack text-festivalWhite">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-2xl font-bold text-center mb-4">
          L'Organizzazione
        </h2>
        <h3 className="font-heading text-xl font-medium text-center text-festivalWhite/90 mb-12">
          Il nostro metodo di lavoro
        </h3>
        <p className="font-body text-center text-festivalWhite/80 italic mb-14">
          &ldquo;Nessuno può fischiettare una sinfonia. Ci vuole un'intera orchestra per riprodurlo.&rdquo; (Luccock)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center p-4">
              <div className="font-heading text-2xl font-bold text-festivalWhite/70 mb-2">{s.num}</div>
              <h4 className="font-heading text-lg font-medium mb-2">{s.title}</h4>
              <p className="font-body text-sm text-festivalWhite/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
