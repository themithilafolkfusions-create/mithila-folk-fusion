<p align="center">
  <img src="production/public/images/mithila-folk-fusion-logo.png" alt="Mithila Folk Art" height="120">
</p>

<h1 align="center">Mithila Folk Art</h1>

<p align="center">
  <strong>A digital gallery for Shivangi Singh's Madhubani paintings</strong>
  <br>
  <sub>Designed & engineered by <strong>Prabhakar Kumar</strong> at <strong>Chiti Technologies</strong></sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 7">
  <img src="https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind v4">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5">
</p>

---

## The Challenge

There is a beautiful, deliberate tension between traditional heritage and modern web design aesthetics. When Shivangi Singh approached us to build a digital home for her Madhubani paintings, we faced a question that cannot be answered with code alone:

> *How do you translate 2,500 years of hand-drawn, wall-to-wall folk art into a medium defined by grids, whitespace, and screen boundaries?*

Madhubani art operates on the principle of *horror vacui* — every inch of surface is filled with intricate patterns, bold outlines, and vibrant natural pigments. The web, by contrast, breathes through negative space. Our task was not to choose one over the other, but to let them coexist in the same frame.

---

## Design Philosophy

| Principle | Application |
|---|---|
| **The Fusion Concept** | Clean, modern serif typography ("MITHILA FOLK ART") overlaid on background video showing the raw, hand-drawn Madhubani process — ancient traditions meet contemporary vision in the first frame |
| **Organic Color Palette** | Deep earthy reds, warm golds, and stark blacks mirror the natural pigments — turmeric, indigo, and soot — used in traditional Mithila art. The palette feels organic, premium, and rooted in Bihar's heritage |
| **Horror Vacui Contrast** | Madhubani fills every surface with pattern. The website does the opposite — generous whitespace, sharp geometric grids, and clear section breaks allow the dense, detailed artwork to breathe and take center stage |
| **Editorial Typography** | High-contrast serif and monospace fonts give the site a magazine-like quality, framing folk art not as "dated" tradition but as high-end, collectible contemporary art |
| **Scroll-Driven Narrative** | Each section unfolds like a page in a visual story — from the rotating vinyl disc hero to the gallery grid to the commission flow — guiding the visitor through the artist's world |

---

## What We Built

### The Hero — Vinyl Disc & Gramophone Pin
A rotating Madhubani disc spins like a vinyl record when music plays. A hand-crafted SVG gramophone tonearm — with a proper cartridge, stylus, and finger lift — rests on the disc edge. The entire assembly is animated with Framer Motion spring physics.

### The Gallery
A responsive masonry grid of artworks with hover-reveal titles, medium tags, and availability status. Each card uses Madhubani-inspired border decorations.

### Profile Slideshow
Auto-cycling image and video slideshow with crossfade transitions, framed by traditional corner SVG motifs and a Madhubani-style double border.

### Background Music
A subtle audio player in the navbar lets visitors hear ambient music while browsing. The hero disc rotation syncs with playback state.

### Commission Flow
A structured commission form with art style selection, size options, and reference image upload — making it easy to request custom Madhubani paintings.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 + Vite 7 | Fast SPA with single-file output |
| **Styling** | Tailwind CSS v4 | CSS-first config, utility-first design |
| **Animation** | Framer Motion | Scroll-driven transforms, spring physics, page transitions |
| **Icons** | Lucide React | Lightweight, tree-shakeable icon set |
| **Language** | TypeScript 5 | Type safety across all components |
| **Audio** | HTML5 Audio API | Background music with play/pause sync |

---

## Project Structure

```
production/
├── public/
│   ├── audio/          # Background music
│   ├── images/         # Logo, artworks, profile photos
│   └── videos/         # Hero background video
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   ├── ArtForm.tsx
│   │   ├── Exhibitions.tsx
│   │   ├── Commission.tsx
│   │   ├── Contact.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   └── MadhubaniBorder.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## Getting Started

```bash
cd production
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

The build outputs a single HTML file to `dist/` via `vite-plugin-singlefile`.

---

## Credits

**Design & Development** — [Prabhakar Kumar](https://github.com/prabhakarmdes12-cmyk)
**Studio** — [Chiti Technologies](https://chiti.tech)
**Artist** — Shivangi Singh ([@mithilafolkfusions](https://www.instagram.com/mithilafolkfusions))

*Built with React, Tailwind CSS, Framer Motion, and a deep respect for 2,500 years of Madhubani tradition.*
