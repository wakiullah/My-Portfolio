/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        10000: "10000ms",
      },
    },
  },
  plugins: [],
};
