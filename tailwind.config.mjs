/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Chakra Petch", "sans-serif"],
        serif: ["Josefin Sans", "serif"],
      },
      colors: {
        primary: "#92C7FF",
        secondary: "#4d98e8"
      },
      inset:{
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
       },
       animation: {
          appear: "appear 2s ease-in-out",
       }
    },
  },
  plugins: [],
};
