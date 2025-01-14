import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4C9AFF", // Açık Mavi
          DEFAULT: "#0052CC", // Jira Ana Rengi (Mavi)
          dark: "#172B4D", // Daha Koyu Mavi
        },
        success: {
          light: "#79F2C0", // Açık Yeşil
          DEFAULT: "#36B37E", // Başarı Yeşili
          dark: "#006644", // Koyu Yeşil
        },
        warning: {
          light: "#FFAB00", // Açık Turuncu
          DEFAULT: "#FF991F", // Uyarı Turuncusu
          dark: "#BF7317", // Koyu Turuncu
        },
        danger: {
          light: "#FF5630", // Açık Kırmızı
          DEFAULT: "#DE350B", // Hata Kırmızısı
          dark: "#BF2600", // Koyu Kırmızı
        },
        neutral: {
          light: "#F4F5F7", // Açık Gri
          DEFAULT: "#C1C7D0", // Nötr Gri
          dark: "#42526E", //
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
