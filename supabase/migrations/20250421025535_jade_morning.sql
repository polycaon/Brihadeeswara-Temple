/*
  # Blog System Schema

  1. New Tables
    - blog_posts
      - id (uuid, primary key)
      - title (text)
      - slug (text, unique)
      - content (text)
      - excerpt (text)
      - featured_image (text)
      - author_id (uuid, references auth.users)
      - published_at (timestamptz)
      - created_at (timestamptz)
      - updated_at (timestamptz)
    
    - blog_categories
      - id (uuid, primary key)
      - name (text)
      - slug (text, unique)
      - description (text)
      - created_at (timestamptz)
    
    - blog_post_categories (junction table)
      - post_id (uuid, references blog_posts)
      - category_id (uuid, references blog_categories)

  2. Security
    - Enable RLS on all tables
    - Public read access for published posts
    - Authenticated users can create/manage posts
*/

-- Create tables if they don't exist
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text NOT NULL,
  excerpt text,
  featured_image text,
  author_id uuid REFERENCES auth.users,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_post_categories (
  post_id uuid REFERENCES blog_posts ON DELETE CASCADE,
  category_id uuid REFERENCES blog_categories ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view published posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can create posts" ON blog_posts;
DROP POLICY IF EXISTS "Authors can update their own posts" ON blog_posts;
DROP POLICY IF EXISTS "Authors can delete their own posts" ON blog_posts;
DROP POLICY IF EXISTS "Public can view categories" ON blog_categories;
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;
DROP POLICY IF EXISTS "Public can view post categories" ON blog_post_categories;
DROP POLICY IF EXISTS "Authors can manage post categories" ON blog_post_categories;

-- Create policies
CREATE POLICY "Public can view published posts" ON blog_posts
  FOR SELECT USING (published_at IS NOT NULL AND published_at <= now());

CREATE POLICY "Authenticated users can create posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their own posts" ON blog_posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete their own posts" ON blog_posts
  FOR DELETE USING (auth.uid() = author_id);

CREATE POLICY "Public can view categories" ON blog_categories
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage categories" ON blog_categories
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Public can view post categories" ON blog_post_categories
  FOR SELECT USING (true);

CREATE POLICY "Authors can manage post categories" ON blog_post_categories
  FOR ALL USING (EXISTS (
    SELECT 1 FROM blog_posts WHERE id = post_id AND author_id = auth.uid()
  ));

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;

-- Create trigger
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();