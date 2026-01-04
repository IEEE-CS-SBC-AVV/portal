import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // IEEE Official Brand Colors (IEEE Brand Identity Guidelines)
        // Reference: https://brand-experience.ieee.org/guidelines/digital/style-guide/branding-visual-elements/

        // Primary IEEE Blue (PMS 3015 C) - Use this for primary actions and branding
        "ieee-blue": "#00629B",
        "ieee-blue-dark": "#002855", // PMS 295 - Dark palette
        "ieee-blue-light": "#E6F2F8", // Light tint

        // IEEE Extended Palette - Bright Colors
        "ieee-orange": "#FFA300", // PMS 137 C - Accent
        "ieee-yellow": "#FFD100", // PMS 109 C
        "ieee-cyan": "#00B5E2", // PMS Process Cyan
        "ieee-green": "#78BE20", // PMS 368 C
        "ieee-teal": "#009CA6", // PMS 320 C
        "ieee-red": "#BA0C2F", // PMS 200 C
        "ieee-purple": "#981D97", // PMS 254 C

        // Additional utility colors
        "ieee-gray": "#75787B", // Cool Gray 9 C
        "ieee-success": "#00843D", // PMS 348 C
        "ieee-error": "#BA0C2F", // PMS 200 C
        "ieee-warning": "#FFA300", // PMS 137 C
      },
      fontFamily: {
        // IEEE Digital Typography Guidelines
        // Open Sans for digital applications (minimum 15px)
        sans: [
          "Open Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // Ensuring minimum 15px (0.9375rem) per IEEE guidelines
        xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
        base: ["1rem", { lineHeight: "1.6" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.6" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.5" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.4" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1.3" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1.2" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1.1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
        "8xl": ["6rem", { lineHeight: "1" }], // 96px
      },
      lineHeight: {
        // IEEE minimum line-height is 1.5
        tight: "1.3",
        snug: "1.4",
        normal: "1.6", // Default for body text
        relaxed: "1.75",
        loose: "2",
      },
      boxShadow: {
        ieee: "0 8px 20px rgba(0, 98, 155, 0.12)",
        "ieee-lg": "0 12px 28px rgba(0, 98, 155, 0.15)",
        "ieee-hover": "0 4px 12px rgba(0, 98, 155, 0.3)",
      },
      minHeight: {
        touch: "44px", // WCAG touch target minimum
      },
      minWidth: {
        touch: "44px", // WCAG touch target minimum
      },
    },
  },
  plugins: [],
};

export default config;
