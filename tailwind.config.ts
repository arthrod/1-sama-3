import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        paper: {
          DEFAULT: '#FAF9F7',
          dark: '#0A0909',
          100: '#FFFFFF',
          200: '#F5F4F0',
          300: '#EBEAE8',
        },
        ink: {
          DEFAULT: '#1A1818',
          light: '#2E2B29',
          faint: '#4A4644',
        },
        graphite: {
          DEFAULT: '#595450',
          light: '#9E9791',
          lighter: '#D1CDC9',
        },
        merlot: {
          DEFAULT: '#541E23',
          hover: '#3E161A',
          light: '#8C3B44',
        },
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      },
      boxShadow: {
        'paper-lift': '0 10px 30px -10px rgba(26, 24, 24, 0.15)',
        'sharp': '0 1px 2px rgba(26, 24, 24, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
