-- Insert more blog categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Festivals', 'festivals', 'Temple festivals and celebrations'),
  ('Conservation', 'conservation', 'Temple preservation and restoration'),
  ('Visitor Guide', 'visitor-guide', 'Tips and information for visitors');

-- Insert additional blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, published_at) VALUES
  (
    'Essential Guide for Temple Visitors',
    'visitor-guide',
    'Planning to visit Brihadeeswara Temple? Here''s everything you need to know for a memorable experience.

The temple is open daily from 6:00 AM to 12:30 PM and 4:00 PM to 8:30 PM. The best time to visit is during the early morning or late afternoon when the temperature is pleasant and the lighting is perfect for photography.

Dress Code and Etiquette:
- Modest clothing is required
- Remove shoes before entering
- Maintain silence in worship areas
- Photography restrictions apply in certain areas

Getting There:
The temple is located in the heart of Thanjavur, easily accessible by various modes of transport. The nearest airport is Trichy (55 km), and Thanjavur has good rail and road connectivity.',
    'A comprehensive guide for first-time visitors to Brihadeeswara Temple',
    'https://images.unsplash.com/photo-1518563222397-1875011bbf5a',
    NOW()
  ),
  (
    'Conservation Efforts at the Temple',
    'conservation-work',
    'The Archaeological Survey of India (ASI) has been undertaking various conservation projects to preserve this UNESCO World Heritage site for future generations.

Recent conservation work includes:
- Structural stabilization
- Chemical cleaning of sculptures
- Documentation of ancient inscriptions
- Restoration of mural paintings

The conservation team uses traditional materials and techniques wherever possible to maintain the temple''s authenticity while ensuring its longevity.',
    'Learn about the ongoing efforts to preserve this ancient monument',
    'https://images.unsplash.com/photo-1605649487212-47bdab064df7',
    NOW()
  );

-- Link new posts to categories
INSERT INTO blog_post_categories (post_id, category_id)
SELECT p.id, c.id
FROM blog_posts p, blog_categories c
WHERE p.slug = 'visitor-guide' AND c.slug = 'visitor-guide';

INSERT INTO blog_post_categories (post_id, category_id)
SELECT p.id, c.id
FROM blog_posts p, blog_categories c
WHERE p.slug = 'conservation-work' AND c.slug = 'conservation';