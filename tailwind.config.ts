import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c3121c',
          dark: '#111827'
        }
      },
      fontFamily: {
        sans: ['var(--font-cairo)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
