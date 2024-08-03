import type { Meta, StoryObj } from "@storybook/react";

import RectangleTabButton from "./RectangleTabButton";

const meta: Meta<typeof RectangleTabButton> = {
  title: "Button/RectangleTabButton",
  component: RectangleTabButton,
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

export const Rectangle: Story = {
  args: {
    active: false,
    label: "✅ Text",
  },
};
