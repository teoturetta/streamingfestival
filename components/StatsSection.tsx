const stats = [
  { value: "0", label: "piattaforme streaming" },
  { value: "0 k+", label: "views youtube" },
  { value: "0 k+", label: "views facebook" },
  { value: "0 k+", label: "persone raggiunte" },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-festivalBlack text-festivalWhite">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-xl font-bold mb-2">UN progetto UNICO</h2>
        <p className="font-body text-festivalWhite/80 mb-10">Coinvolgente, Sociale, Virale</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="font-body text-sm text-festivalWhite/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
