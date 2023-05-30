/** @type {import('tailwindcss').Config} */
// 
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
// 0 dan 640pxgacha
// 640px 1024pxgach
// 1024 1536pxga
// 1536pxga
  theme: {
    screens: {
      // by default mobile 0 dan 640gacha
      'tablet': '40rem',//640px dan 1024px
      'laptop': '64rem',//1024px dan 1535px
      'desktop': '96rem',//1536px dan uyogi
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '0.9rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      md: ['1.5rem', { lineHeight: '1.8rem' }],
      lg: ['2.25rem', { lineHeight: '2.7rem' }],
      xl: ['3rem', { lineHeight: '3.6rem' }],
    },
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/images/nature.avif')",
        'product': "url('/src/assets/images/kola.jpg')"
      }
    },
  },
  plugins: [],
}