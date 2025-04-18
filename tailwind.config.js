/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#1A1A1A',
        accent: '#FF3C38',
        highlight: '#FFD700',
        'text-primary': '#FFFFFF',
        'text-secondary': '#E5E5E5',
        'text-muted': '#A3A3A3',
        'surface-dark': 'rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}