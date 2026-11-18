/*
 * Portfolio projects: edit this file to add or change a project.
 *
 *   title     Project name
 *   repo      GitHub repository name (github.com/nainezz/<repo>)
 *   live      Live demo link (leave out if there is none)
 *   image     Screenshot in assets/projects/ (taken by .github/workflows/screenshots.yml)
 *   screen    "phone" for mobile apps, "desktop" for websites
 *   shift     Phone screenshots only: scrolls the screen up by this % of its
 *             height, so the important part shows in the card (default 0)
 *   category  "Mobile", "Web" or "Python" (used by the filter buttons)
 *   desc      One or two sentences on what it does
 *   stack     Technologies used
 */
const GITHUB_USER = "nainezz";

const PROJECTS = [
  {
    title: "Phone Price Checker",
    repo: "phone-price-checker",
    live: "https://nainezz.github.io/phone-price-checker/",
    image: "assets/projects/phone-price-checker.webp",
    screen: "desktop",
    category: "Web",
    desc: "Compares ex-UK and ex-USA phone prices in Kenya by model, storage and grade, with a budget finder and a sortable price table.",
    stack: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
  },
  {
    title: "MyShop E-commerce App",
    repo: "MyShop",
    live: "https://nainezz.github.io/MyShop/",
    image: "assets/projects/myshop.webp",
    screen: "phone",
    shift: 14,
    category: "Mobile",
    desc: "A shop for ex-UK and ex-USA phones with Firebase login, search, brand and origin filters, phone specs, a cart, checkout with WhatsApp ordering, order status tracking and a seller dashboard. Rebuilt in 2026 on Dart 3 with tests and CI.",
    stack: ["Flutter", "Dart 3", "Provider", "Firebase", "GitHub Actions"],
  },
  {
    title: "Meals & Recipes App",
    repo: "restaurentprojcet",
    live: "https://nainezz.github.io/restaurentprojcet/",
    image: "assets/projects/meals.webp",
    screen: "phone",
    category: "Mobile",
    desc: "A recipe app with 10 meal categories, meal details with ingredients and steps, favourites, tab navigation and dietary filters for gluten-free, lactose-free, vegan and vegetarian.",
    stack: ["Flutter", "Dart", "Navigation", "Filters"],
  },
  {
    title: "To-Do List App",
    repo: "todolist",
    live: "https://nainezz.github.io/todolist/",
    image: "assets/projects/todolist.webp",
    screen: "phone",
    shift: 22,
    category: "Mobile",
    desc: "A task manager connected to a REST API: register and log in with token auth, then create, complete, edit and delete tasks. Its original API server is offline, so the live demo shows the interface only.",
    stack: ["Flutter", "Provider", "REST API", "GetStorage"],
  },
  {
    title: "Abda Shopping App",
    repo: "login-form",
    live: "https://nainezz.github.io/login-form/",
    image: "assets/projects/abda.webp",
    screen: "phone",
    category: "Mobile",
    desc: "A shopping app with onboarding, login and sign-up, search, an image carousel, categories, product details and a cart, loading live products from the Fake Store API.",
    stack: ["Flutter", "Provider", "REST API"],
  },
  {
    title: "CimiloSheeg Weather App",
    repo: "weatherApp",
    live: "https://nainezz.github.io/weatherApp/",
    image: "assets/projects/weather.webp",
    screen: "phone",
    shift: 22,
    category: "Mobile",
    desc: "A weather app, still in progress, that gets the device's GPS location and fetches live weather from the OpenWeatherMap API.",
    stack: ["Flutter", "Geolocator", "OpenWeather API"],
  },
  {
    title: "Provider State Demo",
    repo: "providerTest",
    live: "https://nainezz.github.io/providerTest/",
    image: "assets/projects/provider-demo.webp",
    screen: "phone",
    shift: 18,
    category: "Mobile",
    desc: "Shares cart and user state across screens using MultiProvider and Consumer2, with a live cart badge.",
    stack: ["Flutter", "Provider"],
  },
  {
    title: "Bank Reconciliation Tool",
    repo: "bank-reconciliation",
    live: "https://nainezz.github.io/bank-reconciliation/",
    image: "assets/projects/bank-reconciliation.webp",
    screen: "desktop",
    category: "Python",
    desc: "Matches a bank statement against a cash book, flags discrepancies including likely transposition errors, detects duplicate debits and builds a full bank reconciliation statement as an HTML report.",
    stack: ["Python", "Accounting", "Data quality", "Unit tests"],
  },
];
