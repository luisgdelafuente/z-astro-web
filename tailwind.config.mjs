/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    typography: {
      DEFAULT: {
        css: {
          'code::before': {
            content: '""'
          },
          'code::after': {
            content: '""'
          }
        }
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e6f0ff',
          200: '#bcd9ff',
          300: '#85b6ff',
          400: '#4d94ff',
          500: '#1a73ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};