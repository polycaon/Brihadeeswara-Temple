/* empty css                          */
import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as createAstro, d as renderHead, e as renderComponent, f as renderSlot } from '../astro_E6MCQwvx.mjs';
import 'kleur/colors';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/history", text: "History" },
    { href: "/architecture", text: "Architecture" },
    { href: "/visitor-info", text: "Visitor Info", highlight: true },
    { href: "/gallery", text: "Gallery" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-white sticky top-0 z-50 shadow-md transition-all duration-300" id="site-header"> <div class="temple-container"> <nav class="flex items-center justify-between py-4"> <!-- Logo and Search --> <div class="flex items-center gap-8"> <a href="/" class="flex items-center gap-2"> <span class="text-temple-red font-heading text-2xl font-bold">Brihadeeswara</span> <span class="hidden sm:inline-block text-temple-navy font-heading">Temple</span> </a> <!-- Search Bar --> <div class="hidden md:block relative"> <div class="relative"> <input type="search" id="site-search" placeholder="Search the temple site..." class="w-64 pl-10 pr-4 py-2 rounded-full bg-temple-stone border-0 focus:ring-2 focus:ring-temple-gold"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> <!-- Search Results Dropdown --> <div id="search-results" class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg hidden max-h-96 overflow-y-auto"> <!-- Results will be populated here --> </div> </div> </div> <!-- Mobile Menu Button --> <div class="flex md:hidden"> <button id="menu-toggle" class="text-temple-navy p-2" aria-label="Toggle Menu"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Desktop Navigation --> <ul class="hidden md:flex items-center space-x-6"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`text-temple-navy hover:text-temple-red transition-colors duration-200 font-medium ${item.highlight ? "bg-temple-red text-white px-4 py-2 rounded-full hover:bg-temple-brown hover:text-white" : ""}`, "class")}> ${item.text} </a> </li>`)} </ul> </nav> <!-- Mobile Navigation --> <div id="mobile-menu" class="hidden md:hidden w-full pb-4"> <ul class="flex flex-col space-y-3"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`block py-2 px-4 text-temple-navy hover:bg-temple-stone rounded-lg transition-colors duration-200 ${item.highlight ? "bg-temple-red text-white hover:bg-temple-brown" : ""}`, "class")}> ${item.text} </a> </li>`)} </ul> </div> </div> </header> `;
}, "/home/project/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = [
    { href: "/about", text: "About the Temple" },
    { href: "/history", text: "History & Significance" },
    { href: "/architecture", text: "Temple Architecture" },
    { href: "/visitor-info", text: "Visitor Information" },
    { href: "/gallery", text: "Gallery" },
    { href: "/blog", text: "Blog" }
  ];
  const visitorInfo = [
    { href: "/visitor-info#timings", text: "Temple Timings" },
    { href: "/visitor-info#travel", text: "How to Reach" },
    { href: "/visitor-info#accommodation", text: "Accommodation" },
    { href: "/visitor-info#faq", text: "FAQs" }
  ];
  const socialLinks = [
    { href: "#", text: "Facebook", icon: "facebook" },
    { href: "#", text: "Instagram", icon: "instagram" },
    { href: "#", text: "Twitter", icon: "twitter" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-temple-navy text-white pt-16 pb-8"> <div class="temple-container"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"> <!-- About --> <div> <h3 class="font-heading text-xl mb-4 text-temple-gold">Brihadeeswara Temple</h3> <p class="text-gray-300 mb-4">
A UNESCO World Heritage site located in Thanjavur, Tamil Nadu, India. One of the greatest architectural marvels of the Chola dynasty.
</p> <div class="flex space-x-4 mt-4"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-temple-gold transition-colors duration-200"${addAttribute(link.text, "aria-label")}> <span class="sr-only">${link.text}</span> ${link.icon === "facebook" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>`} ${link.icon === "instagram" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>`} ${link.icon === "twitter" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>`} </a>`)} </div> </div> <!-- Quick Links --> <div> <h3 class="font-heading text-xl mb-4 text-temple-gold">Quick Links</h3> <ul class="space-y-2"> ${quickLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200"> ${link.text} </a> </li>`)} </ul> </div> <!-- Visitor Information --> <div> <h3 class="font-heading text-xl mb-4 text-temple-gold">Visitor Information</h3> <ul class="space-y-2"> ${visitorInfo.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200"> ${link.text} </a> </li>`)} </ul> </div> <!-- Contact --> <div> <h3 class="font-heading text-xl mb-4 text-temple-gold">Contact</h3> <address class="not-italic text-gray-300"> <p class="mb-2">Department of Tourism</p> <p class="mb-2">Government of Tamil Nadu</p> <p class="mb-2">Wallajah Road, Chennai</p> <p class="mb-2">Tamil Nadu, India</p> <p class="mb-2"> <a href="tel:044 25333385" class="hover:text-white">044 25333385</a> </p> <p> <a href="mailto:tourism@tn.gov.in" class="hover:text-white">tourism@tn.gov.in</a> </p> </address> </div> </div> <div class="border-t border-gray-700 pt-8 text-center text-gray-400"> <p>© ${currentYear} Brihadeeswara Temple. All rights reserved.</p> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Discover the magnificence of Brihadeeswara Temple, a UNESCO World Heritage site in Thanjavur, India. Learn about its history, architecture, and plan your visit.",
    ogImage = "https://t3.ftcdn.net/jpg/05/59/74/36/240_F_559743693_dAUFbSqvfH03wwPI8YmWWB5d9wc4yDJy.jpg",
    canonicalURL = Astro2.url
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Meta Tags --><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="robots" content="index, follow"><meta name="author" content="Brihadeeswara Temple"><meta name="keywords" content="Brihadeeswara Temple, Thanjavur, UNESCO World Heritage, Chola architecture, Tamil Nadu temples, Raja Raja Chola, Hindu temple, South Indian architecture"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"><title>${title} | Brihadeeswara Temple</title>${renderHead()}</head> <body class="bg-temple-stone min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/project/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    subtitle,
    backgroundImage,
    height = "h-[30vh]"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative ${height} flex items-center justify-center bg-temple-navy bg-cover bg-center`, "class")}${addAttribute(`background-image: linear-gradient(rgba(20, 30, 48, 0.7), rgba(20, 30, 48, 0.7)), url(${backgroundImage});`, "style")}> <div class="text-center z-10 px-4 max-w-4xl mx-auto" data-aos="fade-up"> <h1 class="font-heading text-5xl md:text-6xl lg:text-7xl mb-4 text-temple-gold font-bold">${title}</h1> ${subtitle && renderTemplate`<p class="text-xl md:text-2xl max-w-3xl mx-auto text-temple-stone font-semibold">${subtitle}</p>`} </div> </section>`;
}, "/home/project/src/components/Hero.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found", "description": "The page you're looking for doesn't exist." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "subtitle": "The page you're looking for doesn't exist.", "backgroundImage": "https://t3.ftcdn.net/jpg/05/59/74/36/240_F_559743693_dAUFbSqvfH03wwPI8YmWWB5d9wc4yDJy.jpg", "height": "h-[40vh]" })} ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="temple-container text-center"> <h2 class="text-4xl font-heading text-temple-navy mb-6">404 Error</h2> <p class="text-gray-700 mb-8">The page you're looking for might have been removed or is temporarily unavailable.</p> <a href="/" class="inline-block px-6 py-3 bg-temple-red text-white font-medium rounded-md hover:bg-temple-brown transition-colors duration-300">
Return Home
</a> </div> </section> ` })}`;
}, "/home/project/src/pages/404.astro", void 0);

const $$file = "/home/project/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, _404 as _, $$Layout as a };
