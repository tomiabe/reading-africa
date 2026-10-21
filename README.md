# Reading Africa

A curated digital resource for understanding Africa, across countries, contexts, histories, and futures. Built with **vanilla HTML, CSS, and JavaScript**: no framework, no build step.

**Live demo:** https://tomiabe.github.io/reading-africa/

---

## Run Locally

The site is static. Serve the folder from any static file server:

1. **Python:**
   `python3 -m http.server 8000`
2. **VS Code / Live Server** or any static host. Just open `index.html`

No `npm install` required.

---

## Deploy to GitHub Pages

Push the repo and enable GitHub Pages on `main` (Settings → Pages → Deploy from branch → `main` → `/`). The site is served directly from the root `index.html`.

---

## Project Structure

```
index.html    : page shell + static content (The Idea, For Journalists, Contribute)
styles.css    : hand-written CSS port of the original Tailwind design system
data.js       : resources, country profiles, and inline SVG icons
script.js     : navigation, theme toggle, sidebar, and country detail views
react/        : the original React + TypeScript + Vite implementation (kept for reference)
```

The `react/` folder is the original React source and still runs on its own:
`cd react && npm install && npm run dev`

---

Built by [Tomi Abe Studio](https://studio.tomiabe.com)
