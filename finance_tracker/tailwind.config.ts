import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#960200",
          light: "#CE6C47",
          dark: "#001011",
        },
        secondary: {
          DEFAULT: "#5E8C61",
          light: "#FFFFFC",
          dark: "#001011",
        },
        accent: {
          DEFAULT: "#CE6C47",
          light: "#FFFFFC",
          dark: "#960200",
        },
        background: {
          light: "#FFFFFC",
          DEFAULT: "#E2E8F0",
          dark: "#001011",
        },
        text: {
          primary: "#960200",
          secondary: "#5E8C61",
        },
      },
    },
  },

  plugins: [require("daisyui")],
} satisfies Config;
