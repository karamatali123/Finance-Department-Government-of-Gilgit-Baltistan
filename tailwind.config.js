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
        black: "#000000",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#000000",
          },
        },
      },
      boxShadow: {
        bottom: "0px 4px 5px rgba(0, 0, 0, 0.1)", // Adjust values as needed
      },
      backgroundImage: {
        overview: "url(/images/overviewBg.png)",
        team: "url(/images/teamBg.png)",
        organogram: "url(/images/organogram.png)",
        division: "url(/images/divisionsHero.png)",
        wedo: "url(/images/wedo.png)",
        initiative: "url(/images/Initiative.png)",
        annualBudget: "url(/images/annualBg.png)",
        notifications: "url(/images/notifications.png)",
        analytics: "url(/images/analtics.png)",

        jobs: "url(/images/jobs.png)",
        downloads: "url(/images/downloads.png)",
        rightTo: "url(/images/rightto.png)",
        apply: "url(/images/applyJob.jpg)",
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
        lg: ["18px", { lineHeight: "28px" }], // Large
        xl: ["20px", { lineHeight: "28px" }], // Extra large
        "2xl": ["24px", { lineHeight: "32px" }], // 2X large
        "3xl": ["30px", { lineHeight: "64px" }], // 3X large
        "4xl": ["36px", { lineHeight: "70px" }], // 4X large
        "5xl": ["48px", { lineHeight: "1" }], // 5X large
        "6xl": ["60px", { lineHeight: "1" }], // 6X large
      },
      screens: {
        xs: "475px",
        custom: "1400px",
      },
    },
  },
  plugins: [],
};
