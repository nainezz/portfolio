# Mohamed Yussuf (Nainezz): Portfolio

Personal portfolio of **Mohamed Yussuf**, a software engineer, Flutter developer and accountant in Nairobi, Kenya.

**Live:** https://nainezz.github.io/portfolio/

## Sections

- **Hero:** name, roles, availability and portrait
- **About:** background in software engineering and accounting
- **Projects:** 8 projects with real screenshots, filterable by Mobile, Web and Python, each with a live demo and source code link
- **Skills:** mobile, web, backend and tools, data and finance, AI
- **Experience and education:** timeline
- **Contact:** email, WhatsApp, GitHub, Instagram

## Project structure

```
portfolio/
├── index.html              # Page content and SEO tags
├── css/style.css           # Styles: colour tokens at the top, responsive rules at the bottom
├── js/
│   ├── projects.js         # Project list: edit this to add or change projects
│   └── main.js             # Mobile menu, project filters and cards
├── assets/
│   ├── nainezz-portrait.jpg, portrait-*.webp
│   └── projects/*.webp     # Screenshots of the live projects
├── tools/screenshots.mjs   # Captures the project screenshots
├── .github/workflows/screenshots.yml
├── robots.txt, sitemap.xml
└── README.md
```

## Editing

- **Add or change a project:** edit `js/projects.js`, then add its screenshot (see below).
- **Change text:** edit `index.html`.
- **Change colours or spacing:** edit the variables at the top of `css/style.css`.

## Project screenshots

Screenshots are taken from the **live apps**, never mocked up. The **Project screenshots** workflow opens each live demo in a real browser on GitHub, captures it, saves an optimised WebP to `assets/projects/` and commits it.

To refresh them: **Actions → Project screenshots → Run workflow**. To add a project, add it to the list in `tools/screenshots.mjs` as well.

## Tech

Plain HTML, CSS and JavaScript: no framework and no build step. The site is hosted on GitHub Pages and uses the Geist typeface from Google Fonts.

Accessibility: semantic sections, a skip link, a keyboard-friendly mobile menu, visible focus, colour contrast of at least 4.5:1 for text, and reduced motion respected.

SEO: description, canonical URL, Open Graph tags for link previews, Person structured data, a sitemap and robots.txt.
