/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ft-red': '#B91C3C',
        'ft-navy': '#1E3A5F',
        'ft-gold': '#F5B335',
        'ft-cream': '#FAF9F6',
        'ft-gray': '#4B5563',
        'ft-teal': '#5B8A8A',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
