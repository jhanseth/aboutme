/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./src/components/*.{html,js,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"] /* Replace with your font name */,
    },
    extend: {},
  },
  plugins: [],
};
