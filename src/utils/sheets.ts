import { GoogleSpreadsheet } from 'google-spreadsheet';
import type { JWT } from 'google-auth-library';

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
const CREDENTIALS = JSON.parse(import.meta.env.GOOGLE_SHEETS_CREDENTIALS);
const SHEET_ID = import.meta.env.GOOGLE_SHEET_ID;

const doc = new GoogleSpreadsheet(SHEET_ID, {
  auth: new JWT({
    email: CREDENTIALS.client_email,
    key: CREDENTIALS.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  }),
});

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  date: string;
  category: string;
  status: 'draft' | 'published';
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  return rows
    .filter(row => row.get('status') === 'published')
    .map(row => ({
      id: row.get('id'),
      title: row.get('title'),
      slug: row.get('slug'),
      excerpt: row.get('excerpt'),
      content: row.get('content'),
      image_url: row.get('image_url'),
      date: row.get('date'),
      category: row.get('category'),
      status: row.get('status')
    }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}