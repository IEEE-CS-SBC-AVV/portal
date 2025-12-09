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
        "ieee-blue": "#00629B",
        "ieee-blue-dark": "#004B76",
        "ieee-blue-light": "#E6F2F8",
        "ieee-teal": "#00B5AD",
        "ieee-orange": "#FF6F00",
        "ieee-green": "#10B981",
        "ieee-red": "#EF4444",
      },
    },
  },
  plugins: [],
};

export default config;
