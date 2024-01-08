/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#2D3250",
        "secondary-bg": "#424769",
        "primary-color": "#F6B17A",
        "secondary-color": "#7077A1"
      },
    },
  },
  plugins: [],
}