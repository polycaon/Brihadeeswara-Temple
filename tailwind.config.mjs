/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'temple-red': '#CD5C5C',
        'temple-gold': '#D4AF37',
        'temple-navy': '#141E30',
        'temple-stone': '#F5F5F5',
        'temple-brown': '#8B4513',
        'temple-accent': '#FF7F50'
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Open Sans"', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/images/temple-bg.jpg')",
        'footer-texture': "url('/images/footer-bg.jpg')"
      }
    },
  },
  plugins: [],
}