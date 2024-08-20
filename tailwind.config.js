/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear",
        "pulse-fast": "pulse 2s linear",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        // sans: ["Roboto", "sans-serif"],
      },
    },
    // colors: {
    //   "custom-footer-color": "#2d2e5c",
    // //   "custom-footer-color": "#604f6a",
    // },
  },
  plugins: [],
};
