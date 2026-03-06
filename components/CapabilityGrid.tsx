const capabilities = [
  { title: "musica o DJ set dal vivo", desc: "artisti famosi o emergenti" },
  { title: "live streaming al tramonto", desc: "live sui canali social" },
  { title: "location uniche e segrete", desc: "luoghi panoramici" },
  { title: "riprese anche da drone", desc: "regia con cinque telecamere e droni FPV" },
];

export function CapabilityGrid() {
  return (
    <section id="produzione" className="py-20 px-4 bg-festivalGray text-festivalWhite">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl font-bold text-center mb-12">
          Conosci la produzione
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="text-center p-4">
              <h3 className="font-heading text-lg font-medium mb-2">{cap.title}</h3>
              <p className="font-body text-festivalWhite/80 text-sm">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
