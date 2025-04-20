import fs from 'fs';

const directories = [
  'public/images/blog',
  'public/images/content',
  'public/images/hero-images',
  'public/images/gallery'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});