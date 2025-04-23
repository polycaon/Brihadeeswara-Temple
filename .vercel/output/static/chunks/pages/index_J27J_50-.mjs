/* empty css                          */
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../astro_E6MCQwvx.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$Layout } from './404_2H4Te3PH.mjs';
import { $ as $$SectionTitle } from './about_By3pWU_7.mjs';
import { g as getBlogPosts } from './_slug__FuTbRdzk.mjs';
import 'clsx';

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getBlogPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Temple Blog", "description": "Read about the history, architecture, and cultural significance of Brihadeeswara Temple through our blog articles." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Temple Blog", "subtitle": "Stories, insights, and knowledge about Brihadeeswara Temple", "backgroundImage": "/images/blog/blog-architecture.jpg", "height": "h-[40vh]" })} ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="temple-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Latest Articles", "subtitle": "Explore our collection of articles about the temple's history, architecture, and cultural significance" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<article class="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block"> <img${addAttribute(post.image_url, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <div class="flex items-center mb-4"> <span class="text-sm text-temple-red">${post.category}</span> <span class="mx-2 text-gray-300">•</span> <time class="text-sm text-gray-500"> ${new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })} </time> </div> <h2 class="font-heading text-xl font-bold mb-2 text-temple-navy hover:text-temple-red transition-colors duration-200"> ${post.title} </h2> <p class="text-gray-600 mb-4">${post.excerpt}</p> <span class="text-temple-red font-medium hover:text-temple-brown transition-colors duration-200">
Read More →
</span> </div> </a> </article>`)} </div> </div> </section> ` })}`;
}, "/home/project/src/pages/blog/index.astro", void 0);

const $$file$1 = "/home/project/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Brihadeeswara Temple - UNESCO World Heritage Site in Thanjavur, India" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Brihadeeswara Temple", "subtitle": "A Masterpiece of Dravidian Architecture and UNESCO World Heritage Site", "backgroundImage": "https://t3.ftcdn.net/jpg/05/59/74/36/240_F_559743693_dAUFbSqvfH03wwPI8YmWWB5d9wc4yDJy.jpg", "height": "h-[40vh]" })} ${maybeRenderHead()}<section class="py-8 -mt-16 relative z-10"> <div class="temple-container"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> <div class="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"> <div class="text-temple-gold flex justify-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-heading text-lg font-bold mb-1 text-temple-navy">Temple Timings</h3> <p class="text-sm text-gray-600">Morning: 6:00 AM – 12:30 PM<br>Evening: 4:00 PM – 8:30 PM</p> </div> <div class="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"> <div class="text-temple-gold flex justify-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <h3 class="font-heading text-lg font-bold mb-1 text-temple-navy">Location</h3> <p class="text-sm text-gray-600">Thanjavur, Tamil Nadu, India - 613001</p> </div> <div class="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"> <div class="text-temple-gold flex justify-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <h3 class="font-heading text-lg font-bold mb-1 text-temple-navy">Best Time to Visit</h3> <p class="text-sm text-gray-600">October to March (Winter Season)</p> </div> <div class="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"> <div class="text-temple-gold flex justify-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path> </svg> </div> <h3 class="font-heading text-lg font-bold mb-1 text-temple-navy">UNESCO Heritage</h3> <p class="text-sm text-gray-600">Recognized as a World Heritage Site in 1987</p> </div> </div> </div> </section> <section class="py-12 bg-gradient-to-b from-white to-temple-stone"> <div class="temple-container"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"> <div data-aos="fade-right"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Thanjavur's Architectural Marvel", "alignment": "left" })} <div class="prose prose-lg text-gray-700 text-justify"> <p class="mb-4">Built by Raja Raja Chola I in the 11th century and standing tall at the center of Thanjavur, this magnificent Brihadeeswara Temple represents the pinnacle of Chola dynasty's architectural brilliance. The temple's vimana rises to 216 feet, making it one of the tallest of its kind in the world.</p> <p class="mb-4">Dedicate to Lord Shiva, the temple showcases the engineering mastery of ancient Tamil architects. The massive stone blocks were transported from quarries over 60 kilometers away using just manpower. It is believed that the temple complex was constructed in just 7 years!</p> <p>The temple complex, spread over 40 acres, features intricate sculptures, stunning murals, and the famous 80-ton capstone at its summit - a testament to the to the Dravidian architecture of the Chola Period.</p> </div> <div class="flex gap-4 mt-6"> <a href="/about" class="inline-block px-6 py-2 bg-temple-red text-white font-medium rounded-md hover:bg-temple-brown transition-all duration-300 transform hover:scale-105">
Learn More
</a> <a href="/gallery" class="inline-block px-6 py-2 border-2 border-temple-navy text-temple-navy font-medium rounded-md hover:bg-temple-navy hover:text-white transition-all duration-300 transform hover:scale-105">
View Gallery
</a> </div> </div> <div class="relative" data-aos="fade-left"> <img src="https://images.unsplash.com/photo-1603766806347-54cdf3745953" alt="Brihadeeswara Temple Architecture" class="w-full rounded-lg shadow-xl"> <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs"> <p class="font-heading text-temple-navy text-sm">The temple's architecture follows sacred geometry principles, with each element precisely calculated and positioned.</p> </div> </div> </div> </div> </section> <section class="py-12 bg-temple-navy text-white relative overflow-hidden"> <div class="absolute top-0 left-0 w-full h-full opacity-10"> <img src="/images/content/pattern-bg.jpg" alt="" class="w-full h-full object-cover"> </div> <div class="temple-container relative z-10"> <div class="max-w-2xl mx-auto text-center" data-aos="fade-up"> <h2 class="font-heading text-3xl mb-4 text-temple-gold">Plan Your Visit Today</h2> <p class="text-gray-300 mb-6">
Experience the magnificence of this Brihadeeswara Temple, (locally known as Thanjavur Periya Kovil), in person. Our website provides temple timings, history, and tips to help you plan a seamless visit to Thanjavur!
</p> <div class="flex justify-center"> <a href="/visitor-info" class="inline-block px-6 py-2 bg-temple-gold text-temple-navy font-medium rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105">
Visitor Information
</a> </div> </div> </div> </section> ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
