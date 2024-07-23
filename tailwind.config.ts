import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "m-sm": "320px",
      "m-md": "375px",
      "m-lg": "450px",
    },
    extend: {
      margin: {
        "btm-nav-bar": "50px",
      },
      minWidth: {
        "m-sm": "320px",
        "m-md": "375px",
        "m-lg": "450px",
      },
      minHeight: {
        "btm-nav-bar": "50px",
      },
    },
  },
  plugins: [require("tailwindcss-radix")],
} satisfies Config;
export default config;
