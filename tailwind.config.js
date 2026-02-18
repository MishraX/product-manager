/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFCF6',
        dark: '#1a1a1a',
        'warm-gray': '#f5f0e8',
        'soft-blue': '#4a7cc9',
        'sky-start': '#2563eb',
        'sky-mid': '#60a5fa',
        'sky-end': '#c9ddf5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      fontSize: {
        'hero': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.9' }],
      },
    },
  },
  plugins: [],
}
