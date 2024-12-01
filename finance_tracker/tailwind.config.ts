import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      borderRadius: {
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
      },
      gradients: {
        radial: [
          "radial-gradient(circle, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
        ],
        directions: {
          top: "linear-gradient(0deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
          right:
            "linear-gradient(90deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
          bottom:
            "linear-gradient(180deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
          left: "linear-gradient(270deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
          topRight:
            "linear-gradient(45deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
          bottomRight:
            "linear-gradient(135deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
          topLeft:
            "linear-gradient(225deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
          bottomLeft:
            "linear-gradient(315deg, #960200ff, #001011ff, #ce6c47ff, #fffffcff, #5e8c61ff)",
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
