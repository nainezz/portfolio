/*
 * Portfolio projects: edit this file to add or change a project.
 *
 *   title      Project name
 *   repo       GitHub repository name (github.com/nainezz/<repo>)
 *   live       Live demo link (leave out if there is none)
 *   image      Screenshot in assets/projects/ (taken by .github/workflows/screenshots.yml)
 *   screen     "phone" for mobile apps, "desktop" for websites
 *   shift      Phone screenshots only: scrolls the screen up by this % of its
 *              height so the important part shows in the card (default 0)
 *   desc       One or two sentences on what it does
 *   stack      Technologies used
 *   note       Optional short status, e.g. "In progress"
 *   caseStudy  Featured projects only: problem, approach, challenges, role
 *
 * FEATURED projects get a full case study; MORE_PROJECTS get a compact card.
 */
const GITHUB_USER = "nainezz";

const FEATURED = [
  {
    title: "Phone Price Checker",
    repo: "phone-price-checker",
    live: "https://nainezz.github.io/phone-price-checker/",
    image: "assets/projects/phone-price-checker.webp",
    screen: "desktop",
    desc: "A web app that compares ex-UK and ex-USA phone prices in Kenya by model, storage and grade, with a budget finder and a sortable price table.",
    stack: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    caseStudy: {
      problem: "In Kenya, imported phones come as ex-UK or ex-USA stock in different cosmetic grades. Buyers have no quick way to see which option is cheaper for the exact model and storage they want, or what their budget can buy.",
      approach: [
        "One Grade A+ price per model, storage and origin; Grade A and B prices are derived from it and rounded to the nearest KSh 500, so one edit updates every view.",
        "Three views read the same data: a side-by-side comparer, a budget finder and a searchable, sortable price table.",
        "Plain JavaScript with no framework or build step, hosted on GitHub Pages and mobile-first.",
      ],
      challenges: [
        "The budget finder checks every model, storage, grade and origin combination, then shows the most useful one per model: highest storage, then best grade, then lowest price.",
        "Showing only the cheapest origin hid half the picture, so each budget card shows both ex-UK and ex-USA prices, highlights the cheaper one and crosses out any over budget.",
      ],
      role: "I defined the requirements and pricing model from my experience selling imported phones, and built, tested and deployed it with AI-assisted development.",
    },
  },
  {
    title: "MyShop E-commerce App",
    repo: "MyShop",
    live: "https://nainezz.github.io/MyShop/",
    image: "assets/projects/myshop.webp",
    screen: "phone",
    shift: 14,
    desc: "A Flutter shop for ex-UK and ex-USA phones with Firebase login, search and filters, phone specs, a cart, checkout with WhatsApp ordering, order status and a seller dashboard.",
    stack: ["Flutter", "Dart 3", "Provider", "Firebase", "GitHub Actions"],
    caseStudy: {
      problem: "A phone shop needs buyers to filter by what matters for used phones (storage, grade, battery health and origin) and to order in the way many Kenyan customers already buy: over WhatsApp.",
      approach: [
        "Flutter with Provider for state; Firebase Auth and Realtime Database over REST for accounts, listings, favourites and orders.",
        "Search, brand chips, an ex-UK/ex-USA filter and price sorting; checkout collects delivery details and sends the order to WhatsApp.",
        "GitHub Actions analyses, tests and builds every branch, and publishes main to GitHub Pages as a live web demo.",
      ],
      challenges: [
        "Moving 2022 code to Dart 3 null safety while keeping existing accounts, products and orders working: older records load with safe defaults, and damaged ones are skipped instead of breaking the shop.",
        "The 2022 database rules had expired. New security rules let sellers change only their own listings and users see only their own orders.",
      ],
      role: "The first version began as a Flutter course project in 2022. In 2026 I rebuilt it as a phone shop for my own business, setting the requirements and handling testing and deployment, with AI-assisted development.",
    },
  },
  {
    title: "Bank Reconciliation Tool",
    repo: "bank-reconciliation",
    live: "https://nainezz.github.io/bank-reconciliation/",
    image: "assets/projects/bank-reconciliation.webp",
    screen: "desktop",
    desc: "A Python tool that matches a bank statement against a cash book, flags discrepancies and builds a full bank reconciliation statement as an HTML report.",
    stack: ["Python", "Unit tests", "Accounting", "Data quality"],
    caseStudy: {
      problem: "Month-end bank reconciliation usually means ticking every bank line against the books by hand, then explaining each difference. It is slow and easy to get wrong.",
      approach: [
        "Matches in three passes, from most to least certain: invoice or cheque reference, then exact amount and date, then amount within a date tolerance.",
        "Builds the reconciliation statement (deposits in transit, outstanding payments, bank charges, interest) and confirms both adjusted balances agree.",
        "Python standard library only, money held as Decimal so totals are exact to the cent, with 13 unit tests and a terminal, CSV and HTML output.",
      ],
      challenges: [
        "Avoiding false matches: references must match as whole tokens, so cheque 000412 never matches 0004120.",
        "Explaining differences the way an accountant would: when a reference matches but amounts differ by a multiple of 9, it flags a likely transposition error.",
      ],
      role: "I designed the matching rules and reconciliation logic from my accounting work, and built and tested it with AI-assisted development.",
    },
  },
];

const MORE_PROJECTS = [
  {
    title: "Meals & Recipes App",
    repo: "restaurentprojcet",
    live: "https://nainezz.github.io/restaurentprojcet/",
    image: "assets/projects/meals.webp",
    screen: "phone",
    desc: "Meal categories, recipe details, favourites and dietary filters, with tab and drawer navigation.",
    stack: ["Flutter", "Dart", "Navigation"],
  },
  {
    title: "Abda Shopping App",
    repo: "login-form",
    live: "https://nainezz.github.io/login-form/",
    image: "assets/projects/abda.webp",
    screen: "phone",
    desc: "Search, a carousel, categories, product details and a cart, loading live products from the Fake Store API.",
    stack: ["Flutter", "Provider", "REST API"],
  },
  {
    title: "To-Do List App",
    repo: "todolist",
    live: "https://nainezz.github.io/todolist/",
    image: "assets/projects/todolist.webp",
    screen: "phone",
    shift: 22,
    desc: "Token-based login and full task management against a REST API.",
    stack: ["Flutter", "Provider", "REST API"],
    note: "API server offline: demo shows the interface",
  },
  {
    title: "CimiloSheeg Weather App",
    repo: "weatherApp",
    live: "https://nainezz.github.io/weatherApp/",
    image: "assets/projects/weather.webp",
    screen: "phone",
    shift: 22,
    desc: "Gets the device's GPS location and fetches live weather from the OpenWeatherMap API.",
    stack: ["Flutter", "Geolocator", "OpenWeather API"],
    note: "In progress",
  },
  {
    title: "Provider State Demo",
    repo: "providerTest",
    live: "https://nainezz.github.io/providerTest/",
    image: "assets/projects/provider-demo.webp",
    screen: "phone",
    shift: 18,
    desc: "Shares cart and user state across screens with MultiProvider and Consumer2.",
    stack: ["Flutter", "Provider"],
  },
];
