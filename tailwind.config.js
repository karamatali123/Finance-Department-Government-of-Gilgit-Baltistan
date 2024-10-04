/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        grey: "var(--grey)",
      },
      backgroundImage: {
        overview: "url(/images/overviewBg.png)",
        team: "url(/images/teamBg.png)",
        organogram: "url(/images/organogram.png)",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Make Inter the default sans-serif font
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }], // Extra small
        sm: ["14px", { lineHeight: "20px" }], // Small
        base: ["16px", { lineHeight: "24px" }], // Base size
        lg: ["22px", { lineHeight: "28px" }], // Large
        xl: ["20px", { lineHeight: "28px" }], // Extra large
        "2xl": ["24px", { lineHeight: "32px" }], // 2X large
        "3xl": ["30px", { lineHeight: "36px" }], // 3X large
        "4xl": ["36px", { lineHeight: "40px" }], // 4X large
        "5xl": ["48px", { lineHeight: "1" }], // 5X large
        "6xl": ["60px", { lineHeight: "1" }], // 6X large
      },
    },
  },
  plugins: [],
};
