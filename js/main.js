/* Mohamed Yussuf portfolio: mobile menu and project cards. */

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
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === "text") node.textContent = value;
      else node.setAttribute(key, value);
    }
    for (const child of children) node.append(child);
    return node;
  }

  function media(p) {
    const isPhone = p.screen === "phone";
    const img = el("img", {
      src: p.image,
      alt: `Screenshot of ${p.title}`,
      loading: "lazy",
      decoding: "async",
      width: isPhone ? "600" : "1600",
      height: isPhone ? "1298" : "1000",
    });
    return el("div", { class: `project-media ${isPhone ? "is-phone" : "is-desktop"}` }, [
      isPhone ? el("div", { class: "phone", style: `--shift: ${p.shift || 0}` }, [img]) : img,
    ]);
  }

  function projectLinks(p) {
    const row = el("div", { class: "project-links" });
    if (p.live) row.append(el("a", { href: p.live, target: "_blank", rel: "noopener", text: "Live demo" }));
    row.append(el("a", {
      href: `https://github.com/${GITHUB_USER}/${p.repo}`, target: "_blank", rel: "noopener",
      class: "secondary", text: "Source code",
    }));
    return row;
  }

  const stackList = (p) =>
    el("ul", { class: "project-stack", "aria-label": "Built with" }, p.stack.map((s) => el("li", { text: s })));

  function caseStudy(cs) {
    const list = (items) => el("ul", { class: "cs-list" }, items.map((t) => el("li", { text: t })));
    return el("details", { class: "case-study" }, [
      el("summary", { text: "Read the case study" }),
      el("div", { class: "cs-body" }, [
        el("h4", { text: "The problem" }), el("p", { text: cs.problem }),
        el("h4", { text: "How it works" }), list(cs.approach),
        el("h4", { text: "Technical challenges" }), list(cs.challenges),
        el("h4", { text: "My role" }), el("p", { text: cs.role }),
      ]),
    ]);
  }

  function featuredCard(p) {
    return el("article", { class: "featured" }, [
      media(p),
      el("div", { class: "featured-body" }, [
        el("h3", { class: "project-title", text: p.title }),
        el("p", { class: "project-desc", text: p.desc }),
        stackList(p),
        projectLinks(p),
        caseStudy(p.caseStudy),
      ]),
    ]);
  }

  function moreCard(p) {
    const body = [el("h4", { class: "project-title", text: p.title })];
    if (p.note) body.push(el("p", { class: "project-note", text: p.note }));
    body.push(el("p", { class: "project-desc", text: p.desc }), stackList(p), projectLinks(p));
    return el("article", { class: "project project-small" }, [media(p), el("div", { class: "project-body" }, body)]);
  }

  document.getElementById("featured-list").replaceChildren(...FEATURED.map(featuredCard));
  document.getElementById("more-grid").replaceChildren(...MORE_PROJECTS.map(moreCard));

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();
})();
