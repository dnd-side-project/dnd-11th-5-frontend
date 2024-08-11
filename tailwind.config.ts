import type { Config } from "tailwindcss";

import { COLORS } from "./src/styles/theme/color";
import { TYPOGRAPHY } from "./src/styles/theme/typography";

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
      sm: "320px",
      md: "375px",
      lg: "450px",
    },
    fontSize: {
      "2xs": "10px",
      "11px": "11px",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 350ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      colors: {
        "primary-01": COLORS.PRIMARY_01,
        "primary-02": COLORS.PRIMARY_02,
        "primary-03": COLORS.PRIMARY_03,
        "primary-04": COLORS.PRIMARY_04,
        "primary-05": COLORS.PRIMARY_05,
        "gray-scale-0": COLORS.GRAY_SCALE_0,
        "gray-scale-50": COLORS.GRAY_SCALE_50,
        "gray-scale-100": COLORS.GRAY_SCALE_100,
        "gray-scale-200": COLORS.GRAY_SCALE_200,
        "gray-scale-300": COLORS.GRAY_SCALE_300,
        "gray-scale-400": COLORS.GRAY_SCALE_400,
        "gray-scale-500": COLORS.GRAY_SCALE_500,
        "gray-scale-600": COLORS.GRAY_SCALE_600,
        "gray-scale-700": COLORS.GRAY_SCALE_700,
        "gray-scale-800": COLORS.GRAY_SCALE_800,
        "gray-scale-900": COLORS.GRAY_SCALE_900,
        "secondary-pink": COLORS.SECONDARY_PINK,
        "secondary-pink-text": COLORS.SECONDARY_PINK,
        "secondary-pink-light": COLORS.SECONDARY_PINK,
        "secondary-orange": COLORS.SECONDARY_ORANGE,
        "secondary-orange-text": COLORS.SECONDARY_ORANGE,
        "secondary-orange-light": COLORS.SECONDARY_ORANGE,
        "secondary-yellow": COLORS.SECONDARY_YELLOW,
        "secondary-yellow-text": COLORS.SECONDARY_YELLOW,
        "secondary-yellow-light": COLORS.SECONDARY_YELLOW,
        "secondary-green": COLORS.SECONDARY_GREEN,
        "secondary-green-text": COLORS.SECONDARY_GREEN,
        "secondary-green-light": COLORS.SECONDARY_GREEN,
        "secondary-blue": COLORS.SECONDARY_BLUE,
        "secondary-blue-text": COLORS.SECONDARY_BLUE,
        "secondary-blue-light": COLORS.SECONDARY_BLUE,
        "secondary-pink-bg": COLORS.SECONDARY_PINK_BG,
        "secondary-orange-bg": COLORS.SECONDARY_ORANGE_BG,
        "secondary-yellow-bg": COLORS.SECONDARY_YELLOW_BG,
        "secondary-green-bg": COLORS.SECONDARY_GREEN_BG,
        "secondary-blue-bg": COLORS.SECONDARY_BLUE_BG,
        kakao: COLORS.KAKAO,
        error: COLORS.ERROR,
      },
      backgroundImage: (_theme) => ({
        "pink-gradient": COLORS.PINK_GRADIENT,
        "orange-gradient": COLORS.ORANGE_GRADIENT,
        "yellow-gradient": COLORS.YELLOW_GRADIENT,
        "green-gradient": COLORS.GREEN_GRADIENT,
        "blue-gradient": COLORS.BLUE_GRADIENT,
      }),
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
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      fontSize: {
        "label-semi": [
          TYPOGRAPHY.LABEL_SEMIBOLD.FONT_SIZE,
          TYPOGRAPHY.LABEL_SEMIBOLD.OPTIONS,
        ],
        "title-bold": [
          TYPOGRAPHY.TITLE_BOLD.FONT_SIZE,
          TYPOGRAPHY.TITLE_BOLD.OPTIONS,
        ],
        "subtitle-bold": [
          TYPOGRAPHY.SUBTITLE_BOLD.FONT_SIZE,
          TYPOGRAPHY.SUBTITLE_BOLD.OPTIONS,
        ],
        "subtitle-semi": [
          TYPOGRAPHY.SUBTITLE_SEMIBOLD.FONT_SIZE,
          TYPOGRAPHY.SUBTITLE_SEMIBOLD.OPTIONS,
        ],
        "subtitle-medium": [
          TYPOGRAPHY.SUBTITLE_MEDIUM.FONT_SIZE,
          TYPOGRAPHY.SUBTITLE_MEDIUM.OPTIONS,
        ],
        "body1-medium": [
          TYPOGRAPHY.BODY1_MEDIUM.FONT_SIZE,
          TYPOGRAPHY.BODY1_MEDIUM.OPTIONS,
        ],
        "body1-regular": [
          TYPOGRAPHY.BODY1_REGULAR.FONT_SIZE,
          TYPOGRAPHY.BODY1_REGULAR.OPTIONS,
        ],
        "body2-medium": [
          TYPOGRAPHY.BODY2_MEDIUM.FONT_SIZE,
          TYPOGRAPHY.BODY2_MEDIUM.OPTIONS,
        ],
        "body2-regular": [
          TYPOGRAPHY.BODY2_REGULAR.FONT_SIZE,
          TYPOGRAPHY.BODY2_REGULAR.OPTIONS,
        ],
        "body2-semi": [
          TYPOGRAPHY.BODY2_SEMIBOLD.FONT_SIZE,
          TYPOGRAPHY.BODY2_SEMIBOLD.OPTIONS,
        ],
        "body2-bold": [
          TYPOGRAPHY.BODY2_BOLD.FONT_SIZE,
          TYPOGRAPHY.BODY2_BOLD.OPTIONS,
        ],
        "caption1-regular": [
          TYPOGRAPHY.CAPTION1_REGULAR.FONT_SIZE,
          TYPOGRAPHY.CAPTION1_REGULAR.OPTIONS,
        ],
        "caption1-medium": [
          TYPOGRAPHY.CAPTION1_MEDIUM.FONT_SIZE,
          TYPOGRAPHY.CAPTION1_MEDIUM.OPTIONS,
        ],
        "caption1-medium-nav": [
          TYPOGRAPHY.CAPTION1_MEDIUM_NAV.FONT_SIZE,
          TYPOGRAPHY.CAPTION1_MEDIUM_NAV.OPTIONS,
        ],
        "caption1-medium-small": [
          TYPOGRAPHY.CAPTION1_MEDIUM_SMALL.FONT_SIZE,
          TYPOGRAPHY.CAPTION1_MEDIUM_SMALL.OPTIONS,
        ],
        "caption2-regular": [
          TYPOGRAPHY.CAPTION2_REGULAR.FONT_SIZE,
          TYPOGRAPHY.CAPTION2_REGULAR.OPTIONS,
        ],
        "caption2-medium": [
          TYPOGRAPHY.CAPTION2_MEDIUM.FONT_SIZE,
          TYPOGRAPHY.CAPTION2_MEDIUM.OPTIONS,
        ],
        "button1-medium": [
          TYPOGRAPHY.BUTTON1_MEDIUM.FONT_SIZE,
          TYPOGRAPHY.BUTTON1_MEDIUM.OPTIONS,
        ],
        "button1-semi": [
          TYPOGRAPHY.BUTTON1_SEMIBOLD.FONT_SIZE,
          TYPOGRAPHY.BUTTON1_SEMIBOLD.OPTIONS,
        ],
        "button2-medium": [
          TYPOGRAPHY.BUTTON2_MEDIUM.FONT_SIZE,
          TYPOGRAPHY.BUTTON2_MEDIUM.OPTIONS,
        ],
        "button2-regular": [
          TYPOGRAPHY.BUTTON2_REGULAR.FONT_SIZE,
          TYPOGRAPHY.BUTTON2_REGULAR.OPTIONS,
        ],
      },
    },
  },
  plugins: [require("tailwindcss-radix")],
};
export default config;
