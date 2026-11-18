/*
 * Portfolio content: edit this file to add or change projects.
 *
 * Each project needs: title, repo (GitHub repository name), desc, stack, snippet.
 * Optional: live: "https://..." shows a Live demo link.
 * The first three projects get a "Featured" badge.
 * A project is filtered as Mobile if its stack includes "Flutter",
 * Python if it includes "Python", otherwise Web.
 */
const GITHUB = "nainezz";
const WHATSAPP = "254743676970";
const PROJECTS = [
  { title:"Bank Reconciliation Tool", repo:"bank-reconciliation", live:"https://nainezz.github.io/bank-reconciliation/",
    desc:"Python tool that matches a bank statement against a cash book, flags discrepancies (including likely transposition errors), detects duplicate debits and builds a full bank reconciliation statement as an HTML report.", stack:["Python","Accounting","Data quality","Unit tests"],
    snippet:['adjusted_bank = bank_balance', '  + deposits_in_transit', '  - outstanding_payments', '<span class="k">assert</span> adjusted_bank == adjusted_book'] },
  { title:"Phone Price Checker", repo:"phone-price-checker", live:"https://nainezz.github.io/phone-price-checker/",
    desc:"Web app that compares ex-UK and ex-USA phone prices in Kenya by model, storage and grade, with a budget finder and a sortable price table.", stack:["JavaScript","HTML","CSS","GitHub Pages"],
    snippet:['<span class="k">const</span> uk  = priceFor(phone, <span class="s">"uk"</span>);', '<span class="k">const</span> usa = priceFor(phone, <span class="s">"usa"</span>);', 'best = Math.min(uk, usa);'] },
  { title:"MyShop — Phone Shop App", repo:"MyShop", live:"https://nainezz.github.io/MyShop/",
    desc:"Flutter shop for ex-UK and ex-USA phones: Firebase login, search, brand and origin filters, phone specs (storage, grade, battery), cart, checkout with WhatsApp ordering, order status tracking and a seller dashboard. Rebuilt in 2026 on Dart 3 with tests and CI.",
    stack:["Flutter","Dart 3","Provider","Firebase","GitHub Actions"],
    snippet:['visible = products', '  .where((p) => p.origin == <span class="s">"UK"</span>)', '  .where((p) => p.matches(query))', '  ..sort(byPrice);'] },
  { title:"Meals & Recipes App", repo:"restaurentprojcet", live:"https://nainezz.github.io/restaurentprojcet/",
    desc:"Recipe app with 10 meal categories, meal details with ingredients and steps, favourites, tab navigation and dietary filters for gluten-free, lactose-free, vegan and vegetarian.",
    stack:["Flutter","Dart","Navigation","Filters"],
    snippet:['meals.where((meal) {', '  <span class="k">if</span> (filters[<span class="s">"vegan"</span>] && !meal.isVegan)', '    <span class="k">return false</span>;', '  <span class="k">return true</span>;', '}).toList();'] },
  { title:"To-Do List App", repo:"todolist", live:"https://nainezz.github.io/todolist/", desc:"Task manager connected to a REST API: register and log in with token auth, then create, complete, edit and delete tasks. Session saved on the device. (Its original API server is offline, so the live demo shows the interface only.)", stack:["Flutter","Provider","REST API","GetStorage"],
    snippet:['<span class="k">await</span> http.put(Uri.parse(<span class="s">"$api/task/$id"</span>),', '  headers: {<span class="s">"Authorization"</span>: <span class="s">"Bearer $token"</span>},', '  body: jsonEncode({<span class="s">"description"</span>: text}));'] },
  { title:"Abda Shopping App", repo:"login-form", live:"https://nainezz.github.io/login-form/", desc:"Shopping app with onboarding, login and sign-up, search, image carousel, categories, product details and a cart, loading live products from the Fake Store API.", stack:["Flutter","Provider","REST API"],
    snippet:['<span class="k">final</span> res = <span class="k">await</span> http.get(', '  Uri.parse(<span class="s">"fakestoreapi.com/products"</span>));', 'products = jsonDecode(res.body)', '  .map((p) => ProductModel.fromJson(p));'] },
  { title:"CimiloSheeg Weather App", repo:"weatherApp", live:"https://nainezz.github.io/weatherApp/", desc:"Weather app (work in progress) that gets the device's GPS location and fetches live weather from the OpenWeatherMap API.", stack:["Flutter","Geolocator","OpenWeather API"],
    snippet:['Position pos = <span class="k">await</span> Geolocator', '  .getCurrentPosition();', '<span class="k">await</span> http.get(weatherUrl(pos.latitude,', '  pos.longitude));'] },
  { title:"Provider State Demo", repo:"providerTest", live:"https://nainezz.github.io/providerTest/", desc:"Shares cart and user state across screens using MultiProvider and Consumer2, with a live cart badge.", stack:["Flutter","Provider"],
    snippet:['Consumer2&lt;CartProvider, UserProvider&gt;(', '  builder: (ctx, cart, user, _) =>', '    Text(<span class="s">"${user.name}: ${cart.quantity}"</span>),', ')'] }
];
