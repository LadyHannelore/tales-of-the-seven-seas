# Tales of the Seven Seas Tutorial Site

This repository contains a static tutorial website for **Tales of the Seven Seas**—an exploration-worldbuilding nation roleplay game. The site is built with plain HTML, CSS, and JavaScript, and includes GSAP animations.

---

## Features

- **Multi-page structure** covering:
  - **Home** (`index.html`)
  - **Spawning Your Nation** (`spawning.html`)
  - **Basic Mechanics** (`basic-mechanics.html`)
  - **Nation Types** (`nation-types.html`)
  - **Migration** (`migration.html`)
  - **Map & Visibility** (`map.html`)
  - **Terrain Types** (`terrain.html`)
  - **Exploration Campaigns** (`exploration.html`)
  - **Worldbuilding & Currency** (`worldbuilding.html`)
- **Responsive design** via a single CSS file (`assets/css/style.css`).
- **GSAP animations** in `assets/js/main.js` for dynamic page loads and page-specific effects.
- **Image assets** in `assets/images/` supporting maps, terrain, visibility diagrams, etc.

---

## Folder Structure

```
/ (repo root)
├─ index.html
├─ spawning.html
├─ basic-mechanics.html
├─ nation-types.html
├─ migration.html
├─ map.html
├─ terrain.html
├─ exploration.html
├─ worldbuilding.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  └─ images/
│     ├─ map.png
│     ├─ sample spawn.png
│     ├─ terrain.png
│     └─ visiblity.png
└─ README.md
```

---

## Getting Started

1. **Clone or download** this repository.
2. **Open** any `.html` file in your web browser to preview.
   - No server is required; you can also use a simple static server (e.g., `npx serve .`).
3. **Edit** content by modifying the HTML in the root or adding new pages following the same template:
   - Copy the header, nav, and script tags.
   - Place content within `<main>`.
4. **Add images** under `assets/images/` and reference them in your page with `<img src="assets/images/yourfile.png" />`.
5. **Customize styles** by editing `assets/css/style.css`.
6. **Adjust animations** in `assets/js/main.js` or add new GSAP sequences.

---

## GSAP Animations

- Dynamically loaded from CDN.
- Default fade-in of header, nav, and content.
- Page-specific tweaked effects based on document title.
- To modify:
  - Open `assets/js/main.js` and adjust easing, durations, or target selectors.

---

## Hosting on GitHub Pages

1. Rename your repo to `<your-username>.github.io` or enable Pages on any branch in **Settings → Pages**.
2. Push all files to the `main` (or `gh-pages`) branch.
3. Your site will go live at `https://<your-username>.github.io/` within a minute.

---

## Contributing & Updates

- **Content updates**: Modify or add HTML files.
- **Images**: Place new assets under `assets/images/`.
- **Styling**: Tweak `style.css` for layout, colors, and responsiveness.
- **Scripts**: Extend or change animation logic in `main.js`.

Feel free to submit PRs or open issues for improvements, new features, or bug fixes.

---

**Enjoy building your world—may your seas be bountiful!**
