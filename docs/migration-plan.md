# migration-plan.md

## Analisi strategica

Il sito attuale comunica bene l'impatto visuale e il carattere artistico del progetto, ma è costruito con una logica WordPress-builder tipica del 2020–2023: forte dipendenza da Elementor, slider, plugin multipli e layout poco manutenibile.

Il nuovo obiettivo non deve essere “rifare uguale in React”, ma:
- mantenere identità e fascino
- alleggerire drasticamente il frontend
- rendere il contenuto governabile da markdown
- migliorare SEO, velocità e scalabilità

## Criticità attuali
- homepage monolitica
- stack sovraccarico di plugin
- presenza di WooCommerce anche se non centrale
- slider hero pesante
- possibile eccesso di JS/CSS bloccanti
- contatto poco strutturato
- contenuti non separati dal layout
- manutenzione dipendente dal builder

## Scelte consigliate
- sostituire slider con hero cinematico ma leggero
- trasformare ogni blocco in sezione React dedicata
- serializzare contenuti in markdown / JSON
- ottimizzare immagini e lazy loading
- usare shadcn/ui per elementi funzionali, non per forzare estetica “dashboard”
- usare motion solo dove aggiunge percezione premium
- prevedere struttura case-study driven

## Componenti da creare
- Header trasparente + menu overlay
- HeroSection
- IntroSection
- CapabilityGrid
- StatsSection
- ProjectShowcaseCard
- ProjectStorySection
- QuoteSection
- ProductionSection
- PartnerGrid
- MasonryGallery
- ContactSection
- Footer

## Roadmap operativa
1. Inventario contenuti e asset
2. Creazione markdown master
3. Definizione design system
4. Setup progetto Next.js + shadcn/ui
5. Costruzione homepage
6. Costruzione pagine progetto
7. Inserimento asset ottimizzati
8. QA desktop/mobile
9. Redirect e go-live

## KPI attesi post-migrazione
- drastica riduzione peso pagina
- miglior LCP e CLS
- miglior leggibilità mobile
- onboarding più semplice di nuovi contenuti
- maggiore autonomia nello sviluppo con Cursor
