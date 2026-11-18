/* Mohamed Yussuf portfolio: mobile menu, project filters and cards. */

(function () {
  "use strict";

  // ---------- Mobile menu ----------
  const toggle = document.querySelector(".menu-toggle");
  const links = document.getElementById("nav-links");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    links.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // ---------- Projects ----------
  const grid = document.getElementById("project-grid");
  const filterBar = document.getElementById("filters");
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  let active = "All";

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === "text") node.textContent = value;
      else node.setAttribute(key, value);
    }
    for (const child of children) node.append(child);
    return node;
  }

  function projectCard(p) {
    const repoUrl = `https://github.com/${GITHUB_USER}/${p.repo}`;
    const isPhone = p.screen === "phone";

    const img = el("img", {
      src: p.image,
      alt: `Screenshot of ${p.title}`,
      loading: "lazy",
      decoding: "async",
      width: isPhone ? "600" : "1600",
      height: isPhone ? "1298" : "1000",
    });
    const media = el("div", { class: `project-media ${isPhone ? "is-phone" : "is-desktop"}` }, [
      isPhone ? el("div", { class: "phone", style: `--shift: ${p.shift || 0}` }, [img]) : img,
    ]);

    const linkRow = el("div", { class: "project-links" });
    if (p.live) {
      linkRow.append(el("a", { href: p.live, target: "_blank", rel: "noopener", text: "Live demo" }));
    }
    linkRow.append(el("a", { href: repoUrl, target: "_blank", rel: "noopener", class: "secondary", text: "Source code" }));

    return el("article", { class: "project" }, [
      media,
      el("div", { class: "project-body" }, [
        el("h3", { class: "project-title", text: p.title }),
        el("p", { class: "project-desc", text: p.desc }),
        el("ul", { class: "project-stack", "aria-label": "Built with" }, p.stack.map((s) => el("li", { text: s }))),
        linkRow,
      ]),
    ]);
  }

  function renderFilters() {
    filterBar.replaceChildren(
      ...categories.map((c) => {
        const count = c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
        const button = el("button", { type: "button", "aria-pressed": String(c === active), text: c });
        button.setAttribute("aria-label", `${c} (${count} ${count === 1 ? "project" : "projects"})`);
        button.addEventListener("click", () => {
          active = c;
          renderFilters();
          renderProjects();
        });
        return button;
      })
    );
  }

  function renderProjects() {
    const list = PROJECTS.filter((p) => active === "All" || p.category === active);
    grid.replaceChildren(...list.map(projectCard));
  }

  renderFilters();
  renderProjects();

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();
})();
