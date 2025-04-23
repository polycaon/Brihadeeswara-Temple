/* empty css                          */
import { c as createComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, r as renderTemplate, e as renderComponent } from '../astro_E6MCQwvx.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Hero, a as $$Layout } from './404_2H4Te3PH.mjs';
import { $ as $$SectionTitle, a as $$GoogleMap } from './about_By3pWU_7.mjs';

const $$Astro = createAstro();
const $$VisitorInfo$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VisitorInfo$1;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${items.map((item, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md temple-card" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <div class="text-temple-gold mb-4"> ${item.icon === "clock" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path> </svg>`} ${item.icon === "calendar" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path> </svg>`} ${item.icon === "ticket" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"></path> </svg>`} ${item.icon === "attire" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path> </svg>`} ${item.icon === "plane" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path> </svg>`} ${item.icon === "camera" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path> </svg>`} </div> <h3 class="font-heading text-xl font-bold mb-3 text-temple-navy">${item.title}</h3> <ul class="space-y-2"> ${item.details.map((detail) => renderTemplate`<li class="flex items-start"> <span class="text-temple-red mr-2 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </span> <span class="text-gray-700">${detail}</span> </li>`)} </ul> </div>`)} </div>`;
}, "/home/project/src/components/VisitorInfo.astro", void 0);

const $$VisitorInfo = createComponent(($$result, $$props, $$slots) => {
  const templeTimings = [
    {
      icon: "clock",
      title: "Temple Timings",
      details: [
        "Morning: 6:00 AM \u2013 12:30 PM",
        "Evening: 4:00 PM \u2013 8:30 PM",
        "Open all days of the week",
        "Special extended hours during festivals"
      ]
    },
    {
      icon: "calendar",
      title: "Pooja Schedule",
      details: [
        "Kaala Sandhi (Morning): 6:30 AM",
        "Uchikalam (Noon): 12:00 PM",
        "Sayarakshai (Evening): 5:30 PM",
        "Arthajamam (Night): 8:00 PM"
      ]
    },
    {
      icon: "ticket",
      title: "Entry Fee",
      details: [
        "Free entry for all devotees",
        "Camera fee: \u20B950 for still cameras",
        "Video camera: \u20B9100 (special permission required)",
        "Foreign tourists may be asked for ID"
      ]
    }
  ];
  const visitorGuidelines = [
    {
      icon: "attire",
      title: "Dress Code",
      details: [
        "Traditional attire is preferred",
        "Men: Dhoti, Kurta, or formal pants & shirt",
        "Women: Saree, Churidar, or modest western wear",
        "Avoid shorts, sleeveless tops, and revealing clothes"
      ]
    },
    {
      icon: "camera",
      title: "Photography Rules",
      details: [
        "Photography allowed in outer areas",
        "No photography inside the sanctum sanctorum",
        "No flash photography near paintings/murals",
        "Tripods require special permission"
      ]
    },
    {
      icon: "plane",
      title: "Important Guidelines",
      details: [
        "Remove footwear before entering the temple",
        "Maintain silence in worship areas",
        "Follow queue systems for darshan",
        "Avoid carrying valuables, food, or plastic bags"
      ]
    }
  ];
  const travelInfo = [
    {
      title: "By Air",
      details: "The nearest airport is Tiruchirapalli International Airport (TRZ), approximately 55 km from Thanjavur. Taxis are available from the airport to Thanjavur."
    },
    {
      title: "By Train",
      details: "Thanjavur Junction (TJ) is well-connected to major cities like Chennai, Madurai, and Trichy. The railway station is about 2 km from the temple."
    },
    {
      title: "By Road",
      details: "Thanjavur is connected by excellent roads to all major cities in Tamil Nadu. Regular bus services operate from Chennai (350 km), Trichy (55 km), and Madurai (150 km)."
    },
    {
      title: "Local Transport",
      details: "Auto-rickshaws, taxis, and cycle rickshaws are available for local transportation within Thanjavur. Most city attractions are within 5 km of the temple."
    }
  ];
  const accommodationOptions = [
    {
      title: "Luxury Hotels",
      details: "Ideal River View Resort, Svatma, and Thanjavur Marriott offer premium accommodation with modern amenities within 5 km of the temple."
    },
    {
      title: "Mid-Range Options",
      details: "Hotel Gnanam, Hotel Parisutham, and Hotel Tamil Nadu provide comfortable rooms at moderate prices, all within 3 km of the temple."
    },
    {
      title: "Budget Stays",
      details: "Hotel Ramnath, Thanjavur Hi Tour, and several guesthouses offer affordable accommodation options close to the temple complex."
    },
    {
      title: "Temple Accommodation",
      details: "The temple administration maintains a basic guesthouse for pilgrims, which can be booked in advance through the temple office."
    }
  ];
  const faqs = [
    {
      question: "What is the best time to visit Brihadeeswara Temple?",
      answer: "The best time to visit is from October to March when the weather is pleasant. Early mornings and late afternoons are ideal to avoid crowds and heat. The temple is particularly beautiful during sunrise and sunset."
    },
    {
      question: "Are there guides available at the temple?",
      answer: "Yes, official guides licensed by the Archaeological Survey of India are available at the temple entrance. They offer tours in multiple languages including Tamil, English, and Hindi. Guide fees range from \u20B9300-500 depending on the tour duration."
    },
    {
      question: "Can non-Hindus enter the temple?",
      answer: "Yes, the temple is open to people of all faiths. However, visitors are expected to respect the religious sentiments, follow the dress code, and observe the temple protocols."
    },
    {
      question: "Are there any special festivals celebrated at the temple?",
      answer: "The temple celebrates numerous festivals throughout the year, with Maha Shivaratri (February-March), Panguni Uthiram (March-April), and Aipasi Brahmotsavam (October-November) being the most significant. The annual dance festival in January-February is also a major attraction."
    },
    {
      question: "Is the temple wheelchair accessible?",
      answer: "The main pathways of the temple are accessible for wheelchairs, and ramps have been installed at key points. However, some inner areas may still be challenging to access. The temple staff is generally helpful with assisting differently-abled visitors."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Visitor Information", "description": "Plan your visit to Brihadeeswara Temple with essential information about timings, rituals, travel options, and accommodation in Thanjavur, Tamil Nadu." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Visitor Information", "subtitle": "Everything you need to know for a memorable visit to Brihadeeswara Temple", "backgroundImage": "https://t3.ftcdn.net/jpg/05/59/74/36/240_F_559743693_dAUFbSqvfH03wwPI8YmWWB5d9wc4yDJy.jpg", "height": "h-[40vh]" })} ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="temple-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Temple Timings & Rituals", "subtitle": "Plan your visit with these important timings and ritual schedules", "id": "timings" })} ${renderComponent($$result2, "VisitorInfo", $$VisitorInfo$1, { "items": templeTimings })} <div class="mt-16"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Visitor Guidelines", "subtitle": "Important information to ensure a respectful and fulfilling experience" })} ${renderComponent($$result2, "VisitorInfo", $$VisitorInfo$1, { "items": visitorGuidelines })} </div> <div class="mt-16" id="travel"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "How to Reach", "subtitle": "Travel options to reach Brihadeeswara Temple in Thanjavur" })} <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <div data-aos="fade-right"> <div class="space-y-8"> ${travelInfo.map((item, index) => renderTemplate`<div class="flex gap-4"> <div class="mt-1 text-temple-gold"> ${index === 0 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path> </svg>`} ${index === 1 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"></path> </svg>`} ${index === 2 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path> </svg>`} ${index === 3 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path> </svg>`} </div> <div> <h3 class="font-heading text-xl font-bold mb-2 text-temple-navy">${item.title}</h3> <p class="text-gray-700">${item.details}</p> </div> </div>`)} </div> <div class="mt-8 p-6 bg-temple-stone rounded-lg" data-aos="fade-up"> <h3 class="font-heading text-xl font-bold mb-3 text-temple-navy">Travel Tips</h3> <ul class="space-y-2"> <li class="flex items-start"> <span class="text-temple-red mr-2 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </span> <span class="text-gray-700">If arriving by train or bus, pre-book a return ticket during peak season</span> </li> <li class="flex items-start"> <span class="text-temple-red mr-2 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </span> <span class="text-gray-700">For taxi services, use official prepaid counters at airports and railway stations</span> </li> <li class="flex items-start"> <span class="text-temple-red mr-2 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </span> <span class="text-gray-700">Consider hiring a local guide for a comprehensive temple tour</span> </li> </ul> </div> </div> <div data-aos="fade-left"> <div class="mt-12"> ${renderComponent($$result2, "GoogleMap", $$GoogleMap, {})} <div class="p-6 bg-temple-navy text-white rounded-lg mt-6"> <h3 class="font-heading text-xl font-bold mb-3 text-temple-gold">Temple Address</h3> <address class="not-italic"> <p class="mb-2">Brihadeeswara Temple (Peruvudaiyar Kovil)</p> <p class="mb-2">South Main Street, Balaganapathy Nagar</p> <p class="mb-2">Thanjavur - 613001</p> <p class="mb-2">Tamil Nadu, India</p> <p class="mb-2"> <a href="tel:+914362271799" class="text-temple-gold hover:text-white">Phone: +91 4362 271799</a> </p> </address> </div> </div> </div> </div> </div> <div class="mt-16" id="accommodation"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Accommodation", "subtitle": "Places to stay during your visit to Thanjavur" })} <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${accommodationOptions.map((option) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md temple-card" data-aos="fade-up"> <h3 class="font-heading text-xl font-bold mb-3 text-temple-navy">${option.title}</h3> <p class="text-gray-700">${option.details}</p> </div>`)} </div> <div class="mt-8 p-6 bg-temple-stone rounded-lg" data-aos="fade-up"> <h3 class="font-heading text-xl font-bold mb-3 text-temple-navy">Booking Tips</h3> <ul class="space-y-2"> <li class="flex items-start"> <span class="text-temple-red mr-2 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </span> <span class="text-gray-700">Book accommodation in advance during peak tourist season (October-March) and festival periods</span> </li> <li class="flex items-start"> <span class="text-temple-red mr-2 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </span> <span class="text-gray-700">Hotels near the temple offer convenient access but may be priced higher</span> </li> <li class="flex items-start"> <span class="text-temple-red mr-2 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </span> <span class="text-gray-700">For longer stays, consider homestays that offer authentic Tamil cuisine and cultural experiences</span> </li> </ul> </div> </div> <div class="mt-16" id="faq"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Frequently Asked Questions", "subtitle": "Common queries about visiting Brihadeeswara Temple" })} <div class="space-y-6" data-aos="fade-up"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md"> <h3 class="font-heading text-xl font-bold mb-3 text-temple-navy">${faq.question}</h3> <p class="text-gray-700">${faq.answer}</p> </div>`)} </div> </div> <div class="mt-16"> <div class="bg-temple-navy text-white p-8 rounded-lg relative overflow-hidden"> <div class="absolute top-0 left-0 w-full h-full opacity-10"> <img src="/images/pattern-bg.jpg" alt="" class="w-full h-full object-cover"> </div> <div class="relative z-10"> <h2 class="font-heading text-3xl text-temple-gold mb-4">Need More Information?</h2> <p class="text-gray-300 mb-6">
Our temple administration office is happy to assist with any additional questions you may have about visiting Brihadeeswara Temple.
</p> <div class="flex flex-wrap gap-4"> <a href="/contact" class="px-6 py-3 bg-temple-gold text-temple-navy font-medium rounded-md hover:bg-white transition-colors duration-300">
Contact Us
</a> <a href="#" class="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-temple-navy transition-colors duration-300">
Download Visitor Guide (PDF)
</a> </div> </div> </div> </div> </div> </section> ` })}`;
}, "/home/project/src/pages/visitor-info.astro", void 0);

const $$file = "/home/project/src/pages/visitor-info.astro";
const $$url = "/visitor-info";

export { $$VisitorInfo as default, $$file as file, $$url as url };
