/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwright: ['"Playwrite AU NSW"', "sans-serif"],
        Inconsolate: ['"Inconsolate"', "sans-serif"],
      },
      colors: {
        lightBlue: "#C4E1F6",
        liPurple: "#A594F9",
        lightPurple: "#CDC1FF",
        lightestPurple: "#F5EFFF",
        fadePurple: "#F5EFFF",
        shadePurple: "#E5D9F2",
        dusty: "#F6F5F2",
        lightGray: "#F5F5F5",
        // LightGray: "#F5F5F7",
      },
    },
  },
  plugins: [],
};
