import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#collieuganeimusicstreaming", label: "Colli Euganei Music Streaming" },
  { href: "#padovastreamingfestival", label: "Padova Streaming Festival" },
  { href: "#tommyveeseries", label: "Tommy Vee Series" },
  { href: "#altrieventi", label: "Altri Eventi" },
  { href: "#metodo", label: "Il metodo" },
  { href: "#produzione", label: "Produzione" },
  { href: "#partner", label: "Partner" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Scrivici" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-festivalBlack/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-festivalWhite font-heading font-semibold">
          <Image
            src="/images/logo/logo-WHITE_StreamingFestival-e1594447761386.png"
            alt="Streaming Festival"
            width={120}
            height={36}
            className="h-8 w-auto"
          />
        </Link>
        <ul className="hidden md:flex gap-6 text-sm text-festivalWhite/90 font-body">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-festivalWhite transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
