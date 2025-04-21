/*
  # Add Sample Blog Posts

  1. New Content
    - 3 sample blog posts
    - Blog categories
    - Post-category relationships
*/

-- Insert blog categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Architecture', 'architecture', 'Articles about temple architecture and engineering'),
  ('History', 'history', 'Historical articles about the temple'),
  ('Culture', 'culture', 'Articles about cultural aspects and festivals');

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, published_at) VALUES
  (
    'The Architectural Marvels of Brihadeeswara Temple',
    'architectural-marvels',
    'The Brihadeeswara Temple stands as a testament to the architectural brilliance of the Chola dynasty. Built in 1010 CE by Raja Raja Chola I, this magnificent structure showcases several remarkable features that continue to amaze visitors and scholars alike.

The temple''s most striking feature is its massive vimana (tower), which rises to a height of 216 feet (66 meters). The tower is crowned with an 80-ton granite block, a feat of engineering that still puzzles experts today.

Recent archaeological studies have revealed new insights into the temple''s construction techniques and the mathematical principles employed by its ancient architects.',
    'Explore the unique architectural features that make this temple a UNESCO World Heritage site',
    'https://images.unsplash.com/photo-1605649487212-47bdab064df7',
    NOW()
  ),
  (
    'Festivals Celebrated at Brihadeeswara Temple',
    'temple-festivals',
    'Throughout the year, Brihadeeswara Temple comes alive with vibrant festivals that showcase the rich cultural heritage of Tamil Nadu. These celebrations bring together thousands of devotees and cultural enthusiasts.

The most significant festivals include:
- Thai Pongal (January)
- Maha Shivaratri (February/March)
- Tamil New Year (April)
- Aadi Perukku (August)

Each festival features unique rituals, traditional music, and classical dance performances.',
    'A comprehensive guide to the colorful festivals and rituals that take place throughout the year',
    'https://images.unsplash.com/photo-1604693331273-858fcfc384bf',
    NOW()
  ),
  (
    'Raja Raja Chola I: The Visionary Behind the Temple',
    'raja-raja-chola',
    'Raja Raja Chola I, who ruled from 985 to 1014 CE, was the mastermind behind the construction of Brihadeeswara Temple. His vision transformed Thanjavur into a cultural capital.

During his reign, the Chola Empire reached its zenith, extending from Sri Lanka to parts of Southeast Asia. The temple was not just a place of worship but also a statement of the empire''s grandeur and technological advancement.

The king''s patronage of arts and architecture led to innovations in temple construction that influenced South Indian architecture for centuries to come.',
    'Learn about the great Chola king who commissioned this magnificent temple in the 11th century',
    'https://images.unsplash.com/photo-1590059300824-aa30d5cd4f4d',
    NOW()
  );

-- Link posts to categories
INSERT INTO blog_post_categories (post_id, category_id)
SELECT p.id, c.id
FROM blog_posts p, blog_categories c
WHERE p.slug = 'architectural-marvels' AND c.slug = 'architecture';

INSERT INTO blog_post_categories (post_id, category_id)
SELECT p.id, c.id
FROM blog_posts p, blog_categories c
WHERE p.slug = 'temple-festivals' AND c.slug = 'culture';

INSERT INTO blog_post_categories (post_id, category_id)
SELECT p.id, c.id
FROM blog_posts p, blog_categories c
WHERE p.slug = 'raja-raja-chola' AND c.slug = 'history';