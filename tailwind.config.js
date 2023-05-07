/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Open Sans"', "sans-serif"],
        text: ["Monteserrat", "sans-serif"],
        name: ['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [],
};
