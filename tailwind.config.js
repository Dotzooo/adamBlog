/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-mono": ['"IBM Plex Mono"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
