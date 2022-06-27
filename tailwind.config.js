/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34d399",
        "primary-darker": "#059669",
        "light-1": "#fafafa",
        "light-2": "#f5f5f5",
        "light-3": "#e5e5e5",
        "light-4": "#d4d4d4",
        "dark-1": "#525252",
        "dark-2": "#404040",
        "dark-3": "#262626",
        "dark-4": "#171717",
      },
    },
  },
  plugins: [],
};
