import Image from "next/image";

const partnerLogos = [
  "partner_logo_VIDEOE20.png",
  "logo_wmind.png",
  "logo_quad-300x300.jpg",
  "partner_logo_ARCHETIPO-300x110.png",
  "logo-drone-Davide-2-copia-300x154.png",
  "logo-airondrone-OpENAC-300x300.png",
  "42631198_1791279907653780_320842711370301440_n-300x300.png",
  "comune-venezia-300x300.jpg",
  "comune-padova-236x300.png",
  "Abano_Terme-favicon-229x300.png",
  "marchio-barc-alta-2-copy-300x254.jpg",
  "vela-spa.png",
  "MUSEIlogo-251x300.jpg",
  "banner_logo_muve-300x180.jpg",
];

export function PartnerGrid() {
  return (
    <section id="partner" className="py-20 px-4 bg-festivalBlack text-festivalWhite">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl font-bold text-center mb-4">Partner</h2>
        <p className="font-body text-center text-festivalWhite/80 mb-12">Non si finisce mai di dire grazie.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partnerLogos.map((name) => (
            <div key={name} className="relative w-32 h-20 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all">
              <Image
                src={`/images/partners/${name}`}
                alt={name.replace(/[-0-9x_.]/g, " ")}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
