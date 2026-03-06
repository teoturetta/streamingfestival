# AI_CONTEXT.md

## Progetto
Migrazione del sito **StreamingFestival.it** da WordPress/Elementor a stack moderno sviluppato con AI in Cursor, UI basata su **shadcn/ui**, performance-first, struttura contenutistica governata da file Markdown.

## Obiettivo
Ricostruire il sito mantenendo identità, storytelling, asset e contenuti principali, ma con:
- architettura più leggera
- migliore velocità e Core Web Vitals
- codice più pulito e mantenibile
- asset ordinati e versionati
- contenuti separati dalla presentazione
- piena compatibilità con sviluppo assistito da AI

## Stack consigliato
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- contenuti in Markdown/MDX o JSON strutturato
- hosting su Vercel
- immagini ottimizzate via `next/image`
- video YouTube embed lazy-loaded
- form contatti con provider esterno o API route
- analytics privacy-first o GA4

## Stato attuale rilevato
- CMS: WordPress 6.2.2
- Builder: Elementor 3.15.3
- Slider: Slider Revolution 6.2.15
- Ecommerce installato: WooCommerce 8.0.2
- Form: Contact Form 7
- Theme: Wavo / Wavo Child
- Plugin aggiuntivi rilevati: The Grid, Redux, Wavo Elementor Addons
- Sito attuale fortemente dipendente da builder visuale, slider, CSS/JS minificati e struttura monolitica.

## Principi di migrazione
1. Non traslare WordPress in React: ricostruire il sito, non copiarne i difetti.
2. Separare contenuti, asset e componenti.
3. Trasformare ogni sezione in un blocco riusabile.
4. Conservare solo ciò che serve davvero alla conversione e all'immagine.
5. Rimuovere dipendenze inutili: WooCommerce, slider pesanti, script legacy.
6. Ogni contenuto testuale e asset deve avere una fonte markdown chiara.
7. Verificare sempre che la struttura sia ancora attuale; se non lo è, segnalarlo prima di procedere.

## Architettura contenuti suggerita
- `/content/site-settings.md`
- `/content/homepage.md`
- `/content/projects/colli-euganei-streaming.md`
- `/content/projects/padova-streaming-festival.md`
- `/content/projects/tommy-vee-series.md`
- `/content/projects/altri-eventi.md`
- `/content/method.md`
- `/content/production.md`
- `/content/partners.md`
- `/content/gallery.md`
- `/content/contact.md`

## Requisiti UX/UI
- hero full-screen con immagini di forte impatto
- sezione "progetto" chiara e leggibile
- storytelling per case study / format
- gallery leggera e mobile-first
- partner grid pulita
- CTA contatto sempre presenti
- migliore gerarchia tipografica rispetto al sito attuale
- eliminazione di sovraccarico visivo e animazioni non essenziali

## SEO e contenuti
- title e meta description riscritti
- heading puliti H1/H2/H3
- immagini con alt coerenti
- URL canonical chiaro
- dati strutturati minimi se utili
- contenuti orientati a: streaming eventi, regia video, live streaming, produzioni musicali, eventi istituzionali

## Vincoli
- mantenere tono premium, artistico, tecnico
- preservare storia del progetto e portfolio
- riutilizzare asset attuali dove validi
- prevedere futura espandibilità con nuove produzioni e case study
- **link e embed YouTube obbligatori nel sito, ordinati secondo la logica di progetto del sito attuale** (per progetto/format, backstage, gallery)
