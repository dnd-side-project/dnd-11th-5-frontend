import type { Meta, StoryObj } from "@storybook/react";

import ReviewTag from "./ReviewTag";

const meta: Meta<typeof ReviewTag> = {
  title: "Core/Tag/ReviewTag",
  component: ReviewTag,
  parameters: {
    layout: "centered",
  },

  argTypes: {
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
  },
};
