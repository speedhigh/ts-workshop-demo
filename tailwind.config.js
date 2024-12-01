/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    import('tailwind-scrollbar'),
  ],
}
