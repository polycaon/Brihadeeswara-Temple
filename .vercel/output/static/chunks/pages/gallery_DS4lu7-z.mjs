/* empty css                          */
import { c as createComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, r as renderTemplate, e as renderComponent } from '../astro_E6MCQwvx.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Hero, a as $$Layout } from './404_2H4Te3PH.mjs';
import { $ as $$SectionTitle } from './about_By3pWU_7.mjs';

const $$Astro = createAstro();
const $$ImageGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageGallery;
  const { images, columns = 3 } = Astro2.props;
  const getColumnClass = (cols) => {
    const columnClasses = {
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    };
    return columnClasses[cols] || columnClasses[3];
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`grid ${getColumnClass(columns)} gap-4`, "class")}> ${images.map((image, index) => renderTemplate`<a${addAttribute(image.src, "href")} class="gallery-item temple-card overflow-hidden block" data-aos="fade-up"${addAttribute(index * 50, "data-aos-delay")}${addAttribute(image.width, "data-pswp-width")}${addAttribute(image.height, "data-pswp-height")}> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" loading="lazy"> </a>`)} </div> `;
}, "/home/project/src/components/ImageGallery.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const exteriorImages = [
    {
      src: "https://i.ytimg.com/vi/KC3GAmjn1mg/maxresdefault.jpg",
      alt: "Aerial View of Brihadeeswara Temple",
      width: 1200,
      height: 800
    },
    {
      src: "https://static.toiimg.com/thumb/51407865.cms?resizemode=75&width=1200&height=900",
      alt: "Temple Entrance with Gopuram",
      width: 1200,
      height: 800
    },
    {
      src: "https://live.staticflickr.com/8758/28565507280_4c4b69e03d_b.jpg",
      alt: "Temple at Sunset",
      width: 1200,
      height: 800
    },
    {
      src: "https://cdn.britannica.com/66/250066-050-B34A9532/Brihadishvara-Temple-Thanjavur-Tamil-Nadu-India.jpg",
      alt: "Temple Vimana (Tower)",
      width: 1200,
      height: 800
    },
    {
      src: "https://ramyashotels.com/wp-content/uploads/2021/06/Thnajavur-Big-Temple-ramyas-hotel-trichy.jpg",
      alt: "Temple Complex Panorama",
      width: 1500,
      height: 800
    },
    {
      src: "https://static.wixstatic.com/media/345f70_3256d7a3014348d78cb39c873aeba008~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/345f70_3256d7a3014348d78cb39c873aeba008~mv2.jpg",
      alt: "Temple Outer Wall",
      width: 1200,
      height: 800
    }
  ];
  const sculptureImages = [
    {
      src: "https://live.staticflickr.com/65535/30285048256_8d232ee5da_h.jpg",
      alt: "Nandi Statue",
      width: 1200,
      height: 800
    },
    {
      src: "https://thumbs.dreamstime.com/b/shiva-as-nataraja-sculpture-ravanaphadi-cave-temple-aihole-karnataka-india-aihole-karnataka-india-november-ravanaphadi-cave-209341161.jpg",
      alt: "Nataraja Sculpture",
      width: 1200,
      height: 800
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAofLVSLZuCQ2h9bqrPHwKtSYEE_iPJ1fDeTKSRv_JJ-b3dr68AgqddDkoxMcVpOWWh9BNWES5FfoAVw_lJ3ur1Uf6ZldJJR-FJ091EBxjZlmY7D_nWY6Qj6EudcP6PTTr-FI8Uk5wrfTg/s1600/Thanjavur+Brihadeeswarar+Temple+Dwarapalaka2.jpg",
      alt: "Dvarapala (Doorkeeper) Sculpture",
      width: 1200,
      height: 800
    },
    {
      src: "https://thrillingtravel.in/wp-content/uploads/2018/09/Deities-on-the-walls-of-Brihadeeswara-Temple-Tanjore-1024x683.jpg",
      alt: "Wall Carvings of Deities",
      width: 1200,
      height: 800
    },
    {
      src: "https://lh3.googleusercontent.com/proxy/_U8Mrt5_heyXVf_7pKBMBtfnSUDCRsspHBSxsuknTHdKYly2N1AxPooBFAxrvheWU4Hrpldq7X7dF7ZEtD7cS1AgNI_R-cDgWdKXLdZXPsgvUit8mpk",
      alt: "Dance Pose Sculptures",
      width: 1200,
      height: 800
    },
    {
      src: "https://khushbukhansky.wordpress.com/wp-content/uploads/2021/02/deities_temple.png?w=600",
      alt: "Mythological Scene Carving",
      width: 1200,
      height: 800
    }
  ];
  const interiorImages = [
    {
      src: "https://famoustemplesofindia.com/wp-content/uploads/2023/10/Brihadeeswarar-Temple-4-1024x768.jpg",
      alt: "Temple Interior Corridor",
      width: 1200,
      height: 800
    },
    {
      src: "https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/03/Brihadeshwara-Temple-A-structure-conceived-with-grace-and-Magnificence-8.jpg?strip=all&lossy=1&resize=693%2C456&ssl=1",
      alt: "Sanctum Sanctorum",
      width: 1200,
      height: 800
    },
    {
      src: "https://qph.cf2.quoracdn.net/main-qimg-64e18b4c5611dbf1fcccd445f2a7752e-lq",
      alt: "Temple Pillars",
      width: 1200,
      height: 800
    },
    {
      src: "https://cdn.shopify.com/s/files/1/1194/1498/files/Chola-Paintings-in-Brihadishwara-Temple-Raja-Raja-Chola-worshiping-Lord-Shiva_480x480.jpg?v=1688648801",
      alt: "Interior Murals",
      width: 1200,
      height: 800
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Mandapam_and_Pillars_at_Thanjavur_Airavatesvara_Temple..JPG",
      alt: "Inner Mandapam (Hall)",
      width: 1200,
      height: 800
    },
    {
      src: "https://i.pinimg.com/736x/a4/af/ec/a4afec7e543037aa7a92639ac824ee20.jpg",
      alt: "Temple Interior Ceiling",
      width: 1200,
      height: 800
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Image Gallery", "description": "Explore the visual beauty of Brihadeeswara Temple through our extensive collection of high-quality images showcasing its architecture, sculptures, and festivals." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Temple Gallery", "subtitle": "Explore the visual splendor of Brihadeeswara Temple through our curated image collection", "backgroundImage": "https://t3.ftcdn.net/jpg/05/59/74/36/240_F_559743693_dAUFbSqvfH03wwPI8YmWWB5d9wc4yDJy.jpg", "height": "h-[40vh]" })} ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="temple-container"> <div class="mb-12"> <div class="max-w-3xl mx-auto text-center" data-aos="fade-up"> <p class="text-gray-700">
Brihadeeswara Temple offers a visual feast for visitors with its magnificent architecture, intricate sculptures, and vibrant festivals. Explore our gallery to get a glimpse of this extraordinary UNESCO World Heritage monument.
</p> </div> </div> <!-- Gallery Filters --> <div class="flex justify-center mb-12"> <div class="inline-flex flex-wrap gap-2 p-1 bg-temple-stone rounded-lg" data-aos="fade-up"> <button class="gallery-filter px-4 py-2 rounded-md text-temple-navy bg-white shadow-sm active" data-filter="all">
All Images
</button> <button class="gallery-filter px-4 py-2 rounded-md text-temple-navy hover:bg-white hover:shadow-sm transition-all duration-300" data-filter="exterior">
Exterior
</button> <button class="gallery-filter px-4 py-2 rounded-md text-temple-navy hover:bg-white hover:shadow-sm transition-all duration-300" data-filter="sculptures">
Sculptures
</button> <button class="gallery-filter px-4 py-2 rounded-md text-temple-navy hover:bg-white hover:shadow-sm transition-all duration-300" data-filter="interior">
Interior
</button> </div> </div> <!-- Gallery Sections --> <div id="gallery-container"> <div class="gallery-section" data-category="exterior"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Temple Exterior", "subtitle": "The magnificent outer structure and surroundings of Brihadeeswara Temple" })} ${renderComponent($$result2, "ImageGallery", $$ImageGallery, { "images": exteriorImages, "columns": 3 })} </div> <div class="gallery-section mt-16" data-category="sculptures"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Sculptures & Carvings", "subtitle": "Intricate stone works depicting deities, mythological scenes, and dance poses" })} ${renderComponent($$result2, "ImageGallery", $$ImageGallery, { "images": sculptureImages, "columns": 3 })} </div> <div class="gallery-section mt-16" data-category="interior"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Temple Interior", "subtitle": "The sanctum, corridors, and inner chambers of the temple" })} ${renderComponent($$result2, "ImageGallery", $$ImageGallery, { "images": interiorImages, "columns": 3 })} </div> </div> <div class="mt-16"> <div class="bg-temple-navy text-white p-8 rounded-lg relative overflow-hidden" data-aos="fade-up"> <div class="absolute top-0 left-0 w-full h-full opacity-10"> <img src="/images/pattern-bg.jpg" alt="" class="w-full h-full object-cover"> </div> <div class="relative z-10 max-w-4xl mx-auto text-center"> <h2 class="font-heading text-2xl text-temple-gold mb-4">Share Your Temple Moments</h2> <p class="text-gray-300 mb-6">
Have you visited Brihadeeswara Temple? We'd love to feature your photos in our community gallery. Share your best temple moments with us using the hashtag #BrihadeeswaraTemple on social media or submit them directly through our contact form.
</p> <div class="flex justify-center"> <a href="/contact" class="px-6 py-3 bg-temple-gold text-temple-navy font-medium rounded-md hover:bg-white transition-colors duration-300">
Submit Your Photos
</a> </div> </div> </div> </div> </div> </section> ` })} `;
}, "/home/project/src/pages/gallery.astro", void 0);

const $$file = "/home/project/src/pages/gallery.astro";
const $$url = "/gallery";

export { $$Gallery as default, $$file as file, $$url as url };
