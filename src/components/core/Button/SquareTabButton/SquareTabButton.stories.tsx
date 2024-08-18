import type { Meta, StoryObj } from "@storybook/react";

import SquareTabButton from "./SquareTabButton";

const meta: Meta<typeof SquareTabButton> = {
  title: "Core/Button/SquareTabButton",
  component: SquareTabButton,
  parameters: {},

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

export const Square: Story = {
  args: {
    active: false,
    label: "Text",
  },
};
