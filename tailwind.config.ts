import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        xl: "1320px",
      },
      width: {
        "90%": "90%",
      },
      fontFamily: {
        poppins : ["Poppins","sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'primary': {
        50: '#f3faf3',
        100: '#e3f5e5',
        200: '#c9e9cd',
        300: '#9ed7a7',
        400: '#6cbc77',
        500: '#4dab5b',
        600: '#378243',
        700: '#2e6737',
        800: '#28532f',
        900: '#234429',
      },
      'secondary' :{
        700: '#1d496f',
        800: '#0F1F30',
        900: '#1d3e5d',
        950: '#0f1f30'
      },
      'white' : {
        50: '#fffbfb'
      }
    }
  },
  plugins: [
    flowbite.plugin(),
    require("flowbite/plugin")
  ],
};
export default config;
