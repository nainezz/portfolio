# Nainezz: Developer Portfolio

Portfolio and about-me site for **Nainezz**, a software engineer in Nairobi, Kenya, who builds cross-platform mobile apps with Flutter and web apps with JavaScript.

**Live:** https://nainezz.github.io/portfolio/

## Sections

- **About me:** who I am and what I build
- **Skills:** mobile, web, backend and tools
- **Projects:** 7 projects, filterable by Mobile and Web, each linking to its code on GitHub
- **Contact:** WhatsApp, GitHub and Instagram

## Project structure

```
portfolio/
├── index.html          # Page layout and content (About, Experience, Skills, Contact)
├── css/
│   └── style.css       # All styles: dark theme, layout, mobile breakpoints
├── js/
│   ├── projects.js     # Project list: edit this to add or change projects
│   └── main.js         # Renders the project filters and cards
└── assets/
    └── nainezz-portrait.jpg
```

## Editing

- **Add or change a project:** edit `js/projects.js`. Add `live: "https://..."` to show a Live demo link.
- **Change text** (About, Experience, Skills, Contact): edit `index.html`.
- **Change colours or layout:** edit `css/style.css`. The main colours are CSS variables at the top of the file.

Built with plain HTML, CSS and JavaScript, with no frameworks or build step, and hosted on GitHub Pages.
