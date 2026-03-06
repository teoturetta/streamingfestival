import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-festivalBlack text-festivalWhite">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-bold mb-6 uppercase">
          organizza il tuo evento live
        </h2>
        <p className="font-body text-festivalWhite/90 mb-8">
          Raccontaci il tuo progetto e cosa vuoi realizzare, penseremo noi a tutto il resto!
        </p>
        <div className="font-body space-y-2 text-festivalWhite/90 mb-8">
          <p><strong>Telefono:</strong> 347 8433368 | 338 4118135</p>
          <p><strong>Indirizzo:</strong> Padova</p>
          <p><strong>Email:</strong>{" "}
            <a href="mailto:info@streamingfestival.it" className="text-festivalAccent underline hover:no-underline">
              info@streamingfestival.it
            </a>
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="https://facebook.com/streamingfestival.it"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-festivalWhite/80 hover:text-festivalWhite transition-colors"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/streamingfestival.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-festivalWhite/80 hover:text-festivalWhite transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://www.youtube.com/playlist?list=PLlDPI5u17W3nlFHKN_HE6jxaYT4MPYKZe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-festivalWhite/80 hover:text-festivalWhite transition-colors"
          >
            YouTube
          </Link>
        </div>
      </div>
    </section>
  );
}
