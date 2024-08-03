import type { Meta, StoryObj } from "@storybook/react";

import ReviewChip from "./ReviewChip";

const meta: Meta<typeof ReviewChip> = {
  title: "Chip/ReviewChip",
  component: ReviewChip,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    active: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {
    label: "✨쾌적해요",
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: "✨쾌적해요",
    active: true,
  },
};
