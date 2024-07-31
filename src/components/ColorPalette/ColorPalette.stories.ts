import type { Meta, StoryObj } from "@storybook/react";

import ColorPalette from "./ColorPalette";

const meta: Meta<typeof ColorPalette> = {
  title: "ColorPalette",
  component: ColorPalette,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const colors = [
  { name: "Primary 01", className: "bg-primary-color-01", hex: "#8478ff" },
  { name: "Primary 02", className: "bg-primary-color-02", hex: "#9b91fa" },
  { name: "Primary 03", className: "bg-primary-color-03", hex: "#9b91fa" },
  { name: "Primary 04", className: "bg-primary-color-04", hex: "#e4e1ff" },
  { name: "Primary 05", className: "bg-primary-color-05", hex: "#edebfe" },
  { name: "Gray 0", className: "bg-gray-scale-0", hex: "#ffffff" },
  { name: "Gray 50", className: "bg-gray-scale-50", hex: "#fafafa" },
  { name: "Gray 100", className: "bg-gray-scale-100", hex: "#f5f5f5" },
  { name: "Gray 200", className: "bg-gray-scale-200", hex: "#e5e5e5" },
  { name: "Gray 300", className: "bg-gray-scale-300", hex: "#d4d4d4" },
  { name: "Gray 400", className: "bg-gray-scale-400", hex: "#a3a3a3" },
  { name: "Gray 500", className: "bg-gray-scale-500", hex: "#737373" },
  { name: "Gray 600", className: "bg-gray-scale-600", hex: "#525252" },
  { name: "Gray 700", className: "bg-gray-scale-700", hex: "#404040" },
  { name: "Gray 800", className: "bg-gray-scale-800", hex: "#262626" },
  { name: "Gray 900", className: "bg-gray-scale-900", hex: "#171717" },
  {
    name: "Secondary Pink",
    className: "bg-secondary-color-pink",
    hex: "#ffafed",
  },
  {
    name: "Secondary Orange",
    className: "bg-secondary-color-orange",
    hex: "#ff7e6a",
  },
  {
    name: "Secondary Yellow",
    className: "bg-secondary-color-yellow",
    hex: "#ffe88a",
  },
  {
    name: "Secondary Green",
    className: "bg-secondary-color-green",
    hex: "#aafacf",
  },
  {
    name: "Secondary Blue",
    className: "bg-secondary-color-blue",
    hex: "#a1ddff",
  },
  {
    name: "Secondary Pink BG",
    className: "bg-secondary-color-pink-bg",
    hex: "#ffeffb",
  },
  {
    name: "Secondary Orange BG",
    className: "bg-secondary-color-orange-bg",
    hex: "#fff1ef",
  },
  {
    name: "Secondary Yellow BG",
    className: "bg-secondary-color-yellow-bg",
    hex: "#fffcee",
  },
  {
    name: "Secondary Green BG",
    className: "bg-secondary-color-green-bg",
    hex: "#e2ffef",
  },
  {
    name: "Secondary Blue BG",
    className: "bg-secondary-color-blue-bg",
    hex: "#e5f4fe",
  },
];

export const AllColors: Story = {
  args: {
    colors,
  },
};
