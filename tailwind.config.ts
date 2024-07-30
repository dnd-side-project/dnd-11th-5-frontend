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
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-01": "var(--primary-color-01)",
        "primary-color-02": "var(--primary-color-02)",
        "primary-color-03": "var(--primary-color-03)",
        "primary-color-04": "var(--primary-color-04)",
        "primary-color-05": "var(--primary-color-05)",
        "gray-scale-0": "var(--gray-scale-0)",
        "gray-scale-50": "var(--gray-scale-50)",
        "gray-scale-100": "var(--gray-scale-100)",
        "gray-scale-200": "var(--gray-scale-200)",
        "gray-scale-300": "var(--gray-scale-300)",
        "gray-scale-400": "var(--gray-scale-400)",
        "gray-scale-500": "var(--gray-scale-500)",
        "gray-scale-600": "var(--gray-scale-600)",
        "gray-scale-700": "var(--gray-scale-700)",
        "gray-scale-800": "var(--gray-scale-800)",
        "gray-scale-900": "var(--gray-scale-900)",
        "secondary-color-pink": "var(--secondary-color-pink)",
        "secondary-color-orange": "var(--secondary-color-orange)",
        "secondary-color-yellow": "var(--secondary-color-yellow)",
        "secondary-color-green": "var(--secondary-color-green)",
        "secondary-color-blue": "var(--secondary-color-blue)",
        "secondary-color-pink-bg": "var(--secondary-color-pink-bg)",
        "secondary-color-orange-bg": "var(--secondary-color-orange-bg)",
        "secondary-color-yellow-bg": "var(--secondary-color-yellow-bg)",
        "secondary-color-green-bg": "var(--secondary-color-green-bg)",
        "secondary-color-blue-bg": "var(--secondary-color-blue-bg)",
      },
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
