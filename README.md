# Yen Teik Lee — Personal Website

A bold, scroll-reveal personal site for an academic in finance. Built with Vite + React + Framer Motion.

## Run locally

```bash
npm install
npm run dev      # open the printed http://localhost:5173 URL
```

## Build for production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

## Deploy

**Netlify** — drag the project folder into Netlify, or connect the repo. `netlify.toml` is already configured (build `npm run build`, publish `dist`).

**GitHub Pages** — push to a repo, then either use an Action that runs `npm run build` and publishes `dist`, or run `npm run build` and push the `dist` folder. `vite.config.js` uses `base: './'` so it works on a project subpath without extra config.

## Editing content

All text, publications, working papers, teaching, and media links live in **`src/data.js`** — edit there, no component changes needed. Replace the CV by dropping a new PDF in `public/` and updating `cvFile` in `src/data.js`.

## Structure

- `src/App.jsx` — all components (hero, research, teaching, media, CV, contact)
- `src/data.js` — all content
- `src/index.css` — design system (colors, type, motion)
- `public/YTL-CV-June-2026.pdf` — downloadable CV
- `Data/` — your original source files (not part of the build)
