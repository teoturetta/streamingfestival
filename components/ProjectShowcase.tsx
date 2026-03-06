import Link from "next/link";

const projects = [
  { id: "collieuganeimusicstreaming", name: "Colli Euganei Streaming Festival", episodes: 4, slug: "colli-euganei" },
  { id: "padovastreamingfestival", name: "Padova Streaming Festival", episodes: 2, slug: "padova" },
  { id: "tommyveeseries", name: "Tommy Vee series", episodes: 2, slug: "tommy-vee" },
  { id: "altrieventi", name: "Concerti, Eventi, Convegni", episodes: "8+", slug: "altri-eventi" },
];

export function ProjectShowcase() {
  return (
    <section className="py-20 px-4 bg-festivalGray text-festivalWhite">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl font-bold text-center mb-14">
          I progetti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p) => (
            <article key={p.id} id={p.id} className="border border-festivalWhite/20 rounded-lg p-6">
              <h3 className="font-heading text-xl font-medium mb-2">{p.name}</h3>
              <p className="font-body text-festivalWhite/70 text-sm mb-4">{p.episodes} episodi</p>
              <Link href={`#${p.id}`} className="font-body text-sm text-festivalAccent hover:underline">
                Scopri il backstage
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
