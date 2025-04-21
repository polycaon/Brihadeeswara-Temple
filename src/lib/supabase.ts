import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_post_categories (
        blog_categories (
          name,
          slug
        )
      )
    `)
    .not('published_at', 'is', null)
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_post_categories (
        blog_categories (
          name,
          slug
        )
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
}