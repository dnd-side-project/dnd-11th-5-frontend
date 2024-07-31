import type { Meta, StoryObj } from "@storybook/react";

import { COLORS } from "@/styles/theme/color";

import ColorPalette from "./ColorPalette";

const meta: Meta<typeof ColorPalette> = {
  title: "ColorPalette",
  component: ColorPalette,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    intent: {
      options: Object.keys(COLORS),
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  args: {
    intent: "PRIMARY_01",
  },
};
