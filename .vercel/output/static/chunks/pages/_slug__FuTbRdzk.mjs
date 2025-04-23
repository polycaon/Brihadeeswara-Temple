/* empty css                          */
import { c as createComponent, b as createAstro, e as renderComponent, m as maybeRenderHead, a as addAttribute, u as unescapeHTML, r as renderTemplate } from '../astro_E6MCQwvx.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$Layout } from './404_2H4Te3PH.mjs';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const CREDENTIALS = JSON.parse(undefined                                         );
const SHEET_ID = undefined                               ;
const doc = new GoogleSpreadsheet(SHEET_ID, {
  auth: new JWT({
    email: CREDENTIALS.client_email,
    key: CREDENTIALS.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })
});
async function getBlogPosts() {
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  return rows.filter((row) => row.get("status") === "published").map((row) => ({
    id: row.get("id"),
    title: row.get("title"),
    slug: row.get("slug"),
    excerpt: row.get("excerpt"),
    content: row.get("content"),
    image_url: row.get("image_url"),
    date: row.get("date"),
    category: row.get("category"),
    status: row.get("status")
  }));
}

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "description": post.excerpt, "ogImage": post.image_url }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": post.title, "subtitle": post.category, "backgroundImage": post.image_url, "height": "h-[40vh]" })} ${maybeRenderHead()}<article class="py-16 bg-white"> <div class="temple-container max-w-4xl"> <div class="prose prose-lg mx-auto"> <div class="flex items-center mb-8 text-gray-600"> <time${addAttribute(post.date, "datetime")}> ${new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> <span class="mx-2">•</span> <span>${post.category}</span> </div> <div>${unescapeHTML(post.content)}</div> </div> </div> </article> ` })}`;
}, "/home/project/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/project/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, getBlogPosts as g };
