# Design System — Streaming Festival

Riferimento per la migrazione a Next.js + Tailwind. Fonte: analisi grafica del sito attuale.

## Palette

### Primary background
Black / very dark gray

- `#000000`
- `#0c0c0c` → **festivalBlack**
- `#111111`

### Primary text
- `#FFFFFF` → **festivalWhite**
- `#EAEAEA` → light gray

### Accent
- `#FF0050` → **festivalAccent** (magenta)
- `#FF6600` → warm highlight (optional)
- `#00D4FF` → cyan electronic (optional)

### Tailwind mapping

```js
theme: {
  colors: {
    festivalBlack: "#0c0c0c",
    festivalGray: "#1a1a1a",
    festivalWhite: "#ffffff",
    festivalAccent: "#FF0050"
  }
}
```

## Typography

- **Style:** modern sans-serif, festival branding.
- **Hierarchy:**
  - Hero title: bold, uppercase, large
  - Section title: bold, medium
  - Body: regular sans
  - Buttons: uppercase, medium weight

**Font suggeriti:** Heading → Montserrat / Inter / Sora; Body → Inter.

## Layout

Homepage = **long scroll narrative**.

Sezioni: Hero → Intro → Format/Production → Event blocks → Capability → Partner → Gallery → Contact.

Pattern per sezione:

```
Container
  Title
  Image / video
  Supporting text
```

## Componenti UI

- HeroSection (full-width image + overlay + title + CTA)
- FestivalSection / IntroSection
- VideoEmbed (YouTube)
- GalleryGrid
- PartnerGrid
- ContactForm / ContactSection

Pattern: full-width hero, grid gallery, overlay su immagini.

## Spacing e responsive

- Container: `container mx-auto`; padding coerente (es. `px-4 py-16` / `py-20` per sezioni).
- Grid: gap uniforme (es. `gap-8`).
- Section padding: `py-16`–`py-20`.

## Obiettivi rebuild

- Layout più leggero
- Componenti modulari
- Immagini ottimizzate (next/image)
- Hero cinematografici preservati
- Migliore struttura storytelling
