
# StreamingFestival.it — Graphic & Visual Design Analysis

This document describes the **visual identity, layout patterns, design language and media assets**
used in the current version of https://www.streamingfestival.it.  
It is designed to support a **migration to a modern stack (Next.js + Tailwind + shadcn/ui)** and
to act as a **design reference for AI‑assisted development with Cursor.**

---

# 1. Visual Identity Overview

The site communicates a **festival / music / digital production identity**.

Core characteristics:

- Dark immersive visual environment
- Strong use of **concert photography and live event imagery**
- Neon / electronic music aesthetics
- Hero sections with **full‑width cinematic backgrounds**
- Bold typography layered over images
- Strong contrast between **black backgrounds and white text**

The design language resembles a **music festival landing page combined with an agency portfolio.**

---

# 2. Color Palette (Observed)

Primary colors detected visually:

## Primary background
Black / very dark gray

```
#000000
#0c0c0c
#111111
```

## Primary text
White / light gray

```
#FFFFFF
#EAEAEA
```

## Accent colors
Used mainly inside photos, highlights and overlays

```
#FF0050 (magenta style accent)
#FF6600 (warm highlight)
#00D4FF (cyan electronic tone)
```

Recommended Tailwind mapping:

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

---

# 3. Typography

The site appears to use a **modern sans‑serif typeface typical of festival branding.**

Characteristics:

- Bold uppercase titles
- Large hero typography
- Clean body text
- High contrast readability over images

Typical hierarchy:

| Element | Style |
|------|------|
| Hero Title | Bold uppercase large |
| Section Title | Bold medium |
| Body Text | Regular sans |
| Buttons | Uppercase medium weight |

Suggested replacement for rebuild:

```
Heading font → Montserrat / Inter / Sora
Body font → Inter
```

---

# 4. Homepage Layout Structure

The homepage behaves as a **long scroll narrative page**.

Sections detected:

1. Hero Slider
2. Festival / Project Introduction
3. Format or Production Description
4. Event imagery blocks
5. Streaming / production capability section
6. Partner / collaboration logos
7. Gallery section
8. Contact section

Each section is structured with:

```
Container
  Title
  Image / video
  Supporting text
```

---

# 5. Hero Section

The hero area uses **full‑width photography with text overlay**.

Typical structure:

```
Full Screen Image
Overlay Gradient
Title
Subtitle
Call To Action
```

Example assets used in hero backgrounds:

- https://www.streamingfestival.it/wp-content/uploads/2020/05/PHOTO-2020-05-10-12-52-10-2.jpg
- https://www.streamingfestival.it/wp-content/uploads/2020/05/DJI_0075-scaled.jpg

Design characteristics:

- cinematic photography
- strong contrast lighting
- dramatic stage environments

---

# 6. Image Style

Images are the primary storytelling element.

Typical image categories:

- Concert stage photos
- DJ performances
- Aerial festival shots
- Crowd atmosphere

Examples:

https://www.streamingfestival.it/wp-content/uploads/2020/06/99253553_10158679197729239_485584471295262720_o.jpg

https://www.streamingfestival.it/wp-content/uploads/2020/06/106160378_10158788917734239_6245915519796437140_o.jpg

https://www.streamingfestival.it/wp-content/uploads/2020/06/IMG_0102-scaled.jpg

Image usage pattern:

```
Full width hero
Grid gallery
Background overlays
Section separators
```

---

# 7. Video Embeds

The site integrates **YouTube streaming content.**

Detected embedded videos:

Video:
https://www.youtube.com/watch?v=JEYHDhIbAbM

Playlist:
https://www.youtube.com/playlist?list=PLlDPI5u17W3nlFHKN_HE6jxaYT4MPYKZe

Suggested component for rebuild:

```
VideoEmbed.tsx
```

---

# 8. UI Components Observed

Common interface patterns:

Hero banner  
Image gallery grid  
Video embeds  
Partner logos grid  
Call to action sections  
Contact form  

Component suggestion for new stack:

```
HeroSection
FestivalSection
VideoEmbed
GalleryGrid
PartnerGrid
ContactForm
```

---

# 9. Logo Asset

Primary logo location:

https://www.streamingfestival.it/wp-content/uploads/2020/05/logo-streaming-festival.png

Recommended handling in new project:

```
/public/logo/streamingfestival-logo.png
```

---

# 10. Graphic Strengths

Strong visual identity  
High‑impact event photography  
Clear festival positioning  
Visually immersive hero sections

---

# 11. Graphic Weaknesses

Heavy slider usage  
Layout repetition  
WordPress builder dependency  
Media not optimized for performance

---

# 12. Design Goals for Rebuild

When rebuilding with **Next.js + Tailwind + shadcn/ui**, the goal should be:

• lighter layout  
• modular components  
• optimized images  
• cinematic hero sections preserved  
• better storytelling structure  

---

# 13. Recommended Folder Structure

```
/public
   /images
   /video
   /logo

/content
   /projects
   /gallery

/docs
   brand.md
   design-system.md
   media-library.md
```

---

# End of Document
