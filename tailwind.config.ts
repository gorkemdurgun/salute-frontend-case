import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0052CC", // B400 - Pacific bridge
          white: "#FFFFFF", // N0 - Doctor
          neutral: "#172B4D", // N800 - Squid ink
        },
        secondary: {
          red: "#FF5630", // R300 - Poppy surprise
          yellow: "#FFAB00", // Y300 - Golden state
          green: "#36B37E", // G300 - Fine pine
          teal: "#00B8D9", // T300 - Tamarama
          purple: "#6554C0", // P300 - Da' juice
        },
        extended: {
          slate: "#091E42", // N900
          concrete: "#505F79", // N400
          bling: "#6B778C", // N200
          karl: "#C1C7D0", // N50
          meredith: "#8993A4", // N90
        },
        red: {
          500: "#BF2600", // R500 - Dragon's blood
          400: "#DE350B", // R400 - Red dirt
          300: "#FF5630", // R300 - Poppy surprise
          200: "#FF7452", // R200 - Salmon sashimi
          100: "#FF8F73", // R100 - Alexandria
          50: "#FFEBE6", // R50 - Rosie
        },
        blue: {
          500: "#0747A6", // B500 - Chore coat
          400: "#0052CC", // B400 - Pacific bridge
          300: "#0065FF", // B300 - Sodium explosion
          200: "#2684FF", // B200 - Coogee
          100: "#4C9AFF", // B100 - Arvo breeze
          50: "#DEEBFF", // B50 - Pixie dust
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
