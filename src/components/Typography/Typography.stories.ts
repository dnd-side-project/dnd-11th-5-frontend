import type { Meta, StoryObj } from "@storybook/react";

import { TYPOGRAPHY } from "@/styles/theme/typography";

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    intent: {
      options: Object.keys(TYPOGRAPHY),
      control: { type: "select" },
    },
    label: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Typographys: Story = {
  args: {
    intent: "LABEL_SEMIBOLD",
    label: "The quick brown fox jumps over the lazy dog",
  },
};
